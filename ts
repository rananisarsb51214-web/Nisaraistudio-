import { generateGemini } from './gemini';
import { generateClaude } from './claude';

interface RouteDecision {
  provider: 'gemini' | 'claude';
  reason: string;
}

export async function hybridAI(
  prompt: string,
  context?: string,
  options?: { preferLowCost?: boolean; preferLowLatency?: boolean }
): Promise<string> {
  const decision = await decideRoute(prompt, options);
  if (decision.provider === 'gemini') {
    return generateGemini(prompt, context);
  } else {
    return generateClaude(prompt, context);
  }
}

async function decideRoute(prompt: string, options?: any): Promise<RouteDecision> {
  // If Google-native operation (e.g., "send email", "create sheet") -> Gemini
  const googleOps = /(gmail|calendar|sheets|docs|drive)/i;
  if (googleOps.test(prompt)) {
    return { provider: 'gemini', reason: 'Google Workspace operation' };
  }
  // Long context (>8k tokens) -> Claude
  if (prompt.length > 8000 || options?.longContext) {
    return { provider: 'claude', reason: 'Large context window required' };
  }
  if (options?.preferLowCost) return { provider: 'gemini', reason: 'Cost optimization' };
  if (options?.preferLowLatency) return { provider: 'gemini', reason: 'Latency optimization' };
  // Default: round‑robin or cost‑aware
  return { provider: Math.random() > 0.5 ? 'gemini' : 'claude', reason: 'Load balancing' };
}import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { processAutomation } from './automation/process-automation';
import { generateAIResponse } from './ai/generateAIResponse';

admin.initializeApp();

export const syncWorkspaceData = functions.firestore
  .document('workspaces/{workspaceId}')
  .onWrite(async (change) => {
    // sync logic
  });

export const processAutomationTrigger = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', '');
  return await processAutomation(data);
});

export const aiRouterCall = functions.https.onCall(async (data, context) => {
  return await generateAIResponse(data.prompt, data.context);
});

// Webhook endpoint
export const handleWebhook = functions.https.onRequest(async (req, res) => {
  // verify signature, queue background job
  res.json({ received: true });
});import * as functions from 'firebase-functions';

export async function generateAIResponse(prompt: string, context?: string) {
  // Hybrid routing logic (same as lib/ai/hybrid-router.ts but for server)
  const useGemini = prompt.includes('gmail') || Math.random() > 0.5;
  if (useGemini) {
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } else {
    // Claude API call
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.CLAUDE_API_KEY!,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-opus-20240229',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    const data = await response.json();
    return data.content[0].text;
  }
}import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backdropBlur: { xs: '2px' },
      animation: { 'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
    },
  },
  plugins: [],
};
export default config;import * as admin from 'firebase-admin';

export async function processAutomation(data: any) {
  // ... your automation logic
  await admin.firestore().collection('automation_logs').add({
    message: `Automation "${data.name}" executed`,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    type: 'success'
  });
  return { success: true };
}import * as admin from 'firebase-admin';

export async function processAutomation(data: { name: string; [key: string]: any }) {
  try {
    // ... your automation logic (e.g., call Gemini/Claude, send email, etc.)
    console.log(`Executing automation: ${data.name}`);

    // Write success log
    await admin.firestore().collection('automation_logs').add({
      message: `✅ Automation "${data.name}" executed successfully`,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      type: 'success'
    });
    return { success: true, message: `Automation ${data.name} done` };
  } catch (error: any) {
    // Write error log
    await admin.firestore().collection('automation_logs').add({
      message: `❌ Automation "${data.name}" failed: ${error.message}`,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      type: 'error'
    });
    throw error;
  }
}import * as functions from 'firebase-functions';
import { processAutomation } from './automation/process-automation';

export const runAutomation = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'Must be logged in');
  return await processAutomation(data);
});// lib/firebase/client.ts
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = { /* your config */ };
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);import * as admin from 'firebase-admin';

export async function processAutomation(data: { name: string }) {
  try {
    // Your automation logic here
    console.log(`Executing: ${data.name}`);

    await admin.firestore().collection('automation_logs').add({
      message: `✅ Automation "${data.name}" executed`,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      type: 'success'
    });
    return { success: true };
  } catch (error: any) {
    await admin.firestore().collection('automation_logs').add({
      message: `❌ Automation "${data.name}" failed: ${error.message}`,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      type: 'error'
    });
    throw error;
  }
}