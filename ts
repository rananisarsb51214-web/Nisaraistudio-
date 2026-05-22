import * as functions from 'firebase-functions';
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