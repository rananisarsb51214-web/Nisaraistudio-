# orchestrator/orchestrator.py

"""
Hyperplane Orchestrator
Dynamic AI Routing Core
Nisaraistudio Autonomous Infrastructure Fabric
"""

import os
import json
import uuid
import logging
import asyncio
import importlib
from datetime import datetime
from typing import Dict, Any

from google.cloud import firestore
from google.cloud import pubsub_v1
from google.cloud import storage

# =========================================================
# LOGGING CONFIG
# =========================================================

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)

logger = logging.getLogger("hyperplane")

# =========================================================
# ENVIRONMENT CONFIG
# =========================================================

PROJECT_ID = os.getenv("GCP_PROJECT_ID")
TASK_TOPIC = os.getenv("TASK_TOPIC", "hyperplane-task-topic")
DLQ_TOPIC = os.getenv("DLQ_TOPIC", "hyperplane-dead-letter")
REGION = os.getenv("REGION", "us-central1")

# =========================================================
# GCP CLIENTS
# =========================================================

db = firestore.Client(project=PROJECT_ID)

publisher = pubsub_v1.PublisherClient()

storage_client = storage.Client(project=PROJECT_ID)

# =========================================================
# PLUGIN REGISTRY
# =========================================================

PLUGIN_REGISTRY = {}

# =========================================================
# DYNAMIC PLUGIN LOADER
# =========================================================

def load_plugin(plugin_name: str):
    """
    Dynamically load AI workers/plugins
    """

    try:
        module = importlib.import_module(f"agents.{plugin_name}")

        if hasattr(module, "execute"):
            PLUGIN_REGISTRY[plugin_name] = module.execute

            logger.info(
                f"[PLUGIN LOADED] {plugin_name}"
            )

        else:
            raise Exception(
                f"{plugin_name} missing execute()"
            )

    except Exception as error:
        logger.error(
            f"[PLUGIN ERROR] {plugin_name} -> {str(error)}"
        )

# =========================================================
# LOAD AGENTS
# =========================================================

load_plugin("audio_worker")
load_plugin("memory_worker")
load_plugin("document_worker")
load_plugin("analytics_worker")

# =========================================================
# TASK CLASSIFIER
# =========================================================

def detect_intent(prompt: str) -> str:
    """
    AI Intent Detection Layer
    """

    prompt = prompt.lower()

    audio_keywords = [
        "music",
        "song",
        "audio",
        "voice",
        "lyria",
        "soundtrack",
        "beat",
        "podcast"
    ]

    memory_keywords = [
        "memory",
        "context",
        "history",
        "recall"
    ]

    document_keywords = [
        "pdf",
        "document",
        "docx",
        "file",
        "markdown"
    ]

    if any(k in prompt for k in audio_keywords):
        return "audio_worker"

    if any(k in prompt for k in memory_keywords):
        return "memory_worker"

    if any(k in prompt for k in document_keywords):
        return "document_worker"

    return "analytics_worker"

# =========================================================
# TASK REGISTRY
# =========================================================

def create_task(
    user_id: str,
    prompt: str,
    payload: Dict[str, Any]
) -> str:

    task_id = str(uuid.uuid4())

    db.collection("task_registry").document(task_id).set({
        "task_id": task_id,
        "user_id": user_id,
        "prompt": prompt,
        "payload": payload,
        "status": "QUEUED",
        "retry_count": 0,
        "created_at": firestore.SERVER_TIMESTAMP,
        "updated_at": firestore.SERVER_TIMESTAMP
    })

    logger.info(f"[TASK CREATED] {task_id}")

    return task_id

# =========================================================
# TASK STATUS UPDATE
# =========================================================

def update_task_status(
    task_id: str,
    status: str,
    response: Dict[str, Any] = None
):

    db.collection("task_registry").document(task_id).update({
        "status": status,
        "response": response or {},
        "updated_at": firestore.SERVER_TIMESTAMP
    })

    logger.info(
        f"[TASK STATUS] {task_id} -> {status}"
    )

# =========================================================
# DEAD LETTER QUEUE
# =========================================================

def send_to_dlq(task_data: Dict[str, Any]):

    topic_path = publisher.topic_path(
        PROJECT_ID,
        DLQ_TOPIC
    )

    publisher.publish(
        topic_path,
        json.dumps(task_data).encode("utf-8")
    )

    logger.error(
        f"[DLQ] Task moved to dead-letter queue"
    )

# =========================================================
# RETRY ENGINE
# =========================================================

async def execute_with_retry(
    plugin_name: str,
    task_id: str,
    payload: Dict[str, Any],
    retries: int = 3
):

    for attempt in range(retries):

        try:

            logger.info(
                f"[EXECUTION] {plugin_name} | Attempt {attempt + 1}"
            )

            worker = PLUGIN_REGISTRY.get(plugin_name)

            if not worker:
                raise Exception(
                    f"Plugin not registered: {plugin_name}"
                )

            result = await asyncio.to_thread(
                worker,
                task_id,
                payload
            )

            update_task_status(
                task_id,
                "SUCCESS",
                result
            )

            return result

        except Exception as error:

            logger.error(
                f"[RETRY FAILED] {str(error)}"
            )

            await asyncio.sleep(2 ** attempt)

    update_task_status(
        task_id,
        "FAILED"
    )

    send_to_dlq({
        "task_id": task_id,
        "plugin": plugin_name,
        "payload": payload
    })

# =========================================================
# MAIN ROUTER
# =========================================================

async def route_task(
    user_id: str,
    prompt: str,
    payload: Dict[str, Any]
):

    try:

        plugin_name = detect_intent(prompt)

        logger.info(
            f"[ROUTER] {prompt} -> {plugin_name}"
        )

        task_id = create_task(
            user_id,
            prompt,
            payload
        )

        update_task_status(
            task_id,
            "PROCESSING"
        )

        result = await execute_with_retry(
            plugin_name,
            task_id,
            payload
        )

        return {
            "task_id": task_id,
            "status": "SUCCESS",
            "plugin": plugin_name,
            "result": result
        }

    except Exception as error:

        logger.error(
            f"[ROUTING ERROR] {str(error)}"
        )

        return {
            "status": "ERROR",
            "message": str(error)
        }

# =========================================================
# TEST EXECUTION
# =========================================================

if __name__ == "__main__":

    sample_payload = {
        "prompt": "Generate cinematic AI soundtrack using Lyria 3",
        "genre": "cinematic",
        "duration": 45,
        "voice": "ambient"
    }

    asyncio.run(
        route_task(
            user_id="nisar-admin",
            prompt=sample_payload["prompt"],
            payload=sample_payload
        )
    )

# agents/audio_worker.py

"""
Lyria 3 Audio Worker
GPU Audio Synthesis Engine
"""

import os
import logging
from datetime import datetime

from google.cloud import storage
from google.cloud import firestore

# =========================================================
# CONFIG
# =========================================================

PROJECT_ID = os.getenv("GCP_PROJECT_ID")

AUDIO_BUCKET = os.getenv(
    "AUDIO_BUCKET",
    "nisaraistudio-audio-assets"
)

# =========================================================
# CLIENTS
# =========================================================

db = firestore.Client(project=PROJECT_ID)

storage_client = storage.Client(project=PROJECT_ID)

# =========================================================
# LOGGING
# =========================================================

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger("audio-worker")

# =========================================================
# AUDIO SYNTHESIS
# =========================================================

def synthesize_audio(prompt: str):

    """
    Lyria 3 Integration Layer
    Replace with actual API call
    """

    logger.info(
        f"[LYRIA 3] Generating Audio -> {prompt}"
    )

    return b"AI_GENERATED_AUDIO_BYTES"

# =========================================================
# EXECUTE
# =========================================================

def execute(task_id, payload):

    try:

        logger.info(
            f"[AUDIO TASK STARTED] {task_id}"
        )

        prompt = payload.get("prompt")

        audio_bytes = synthesize_audio(prompt)

        bucket = storage_client.bucket(AUDIO_BUCKET)

        blob = bucket.blob(
            f"renders/{task_id}.mp3"
        )

        blob.upload_from_string(
            audio_bytes,
            content_type="audio/mpeg"
        )

        blob.make_public()

        response = {
            "status": "SUCCESS",
            "task_id": task_id,
            "audio_url": blob.public_url,
            "generated_at": datetime.utcnow().isoformat()
        }

        db.collection("audio_generations").document(task_id).set(response)

        logger.info(
            f"[AUDIO COMPLETE] {blob.public_url}"
        )

        return response

    except Exception as error:

        logger.error(
            f"[AUDIO ERROR] {str(error)}"
        )

        raise error

# orchestrator/plugin_loader.py

"""
Dynamic Plugin Loader
"""

import importlib
import logging

logger = logging.getLogger("plugin-loader")

PLUGIN_CACHE = {}

def load_plugin(plugin_name):

    try:

        module = importlib.import_module(
            f"agents.{plugin_name}"
        )

        execute = getattr(module, "execute")

        PLUGIN_CACHE[plugin_name] = execute

        logger.info(
            f"[PLUGIN ACTIVE] {plugin_name}"
        )

        return execute

    except Exception as error:

        logger.error(
            f"[PLUGIN LOAD FAILED] {plugin_name}"
        )

        raise error

# requirements.txt

google-cloud-storage==2.16.0
google-cloud-firestore==2.16.0
google-cloud-pubsub==2.21.1
firebase-admin==6.5.0
fastapi==0.111.0
uvicorn==0.30.1
python-dotenv==1.0.1
aiofiles==23.2.1
httpx==0.27.0

# Cloud Run GPU Deployment

gcloud run deploy hyperplane-audio-worker \
  --source . \
  --platform managed \
  --region us-central1 \
  --gpu 1 \
  --gpu-type nvidia-l4 \
  --memory 16Gi \
  --timeout 3600 \
  --allow-unauthenticated

# Firestore Collections

task_registry/
audio_generations/
memory_vectors/
system_logs/
dead_letter_queue/
agent_health/
execution_metrics/
analytics/

# Dashboard Live Feed Query

db.collection("task_registry")
  .where("status", "==", "PROCESSING")
  .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
          console.log(change.doc.data())
      })
  }){
  "name": "code-agent",
  "model": "claude-3-opus",
  "systemPrompt": "You are a senior software engineer...",
  "capabilities": ["typescript", "firebase", "api-design"]
}{
  "taskId": "task_123",
  "output": "...",
  "agent": "code-agent",
  "tokensUsed": 1200,
  "latencyMs": 3200,
  "createdAt": 1710000000
}{
  "id": "task_123",
  "type": "code | write | research | debug",
  "input": "Build login system",
  "status": "queued | running | done | failed",
  "priority": 1,
  "agent": null,
  "retries": 0,
  "createdAt": 1710000000
}<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/49bb3b8a-ed5d-4b55-8d2d-6752b06ea87a

## Run LocallyPlanner Agent → breaks tasks
💻 Code Agent → generates code
🔍 Research Agent → extracts knowledge
✍️ Writer Agent → content generation
🛠️ Debug Agent → fixes errors
🔄 Orchestrator Agent → decides routing

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
Client
  ↓
Firebase Auth
  ↓
Firestore (tasks queue)
  ↓
Cloud Functions (Orchestrator)
  ↓
Agent Router (Claude multi-agent layer)
  ↓
Execution Workers
  ↓
Firestore (results + logs)
  ↓
Realtime Sync (client updates)