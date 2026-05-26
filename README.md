{
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