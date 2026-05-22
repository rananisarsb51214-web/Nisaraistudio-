<div align="center">

<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

  <h1>Built with AI Studio</h2>

  <p>The fastest path from prompt to production with Gemini.</p>

  <a href="https://aistudio.google.com/apps">Start building</a>
https://ais-dev-epda2kobzs35ubhdpur23s-485413769323.asia-east1.run.app
</div><NeonButton
  variant="outline"
  href="https://nisar-studio.vercel.app"  // ← your actual Vercel URL
  target="_blank"
>
  Live Demo
</NeonButton>'use client';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase/client';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

interface AutomationLog {
  id: string;
  message: string;
  timestamp: Date;
  type: 'info' | 'success' | 'error';
}

export function LiveAutomationLog() {
  const [logs, setLogs] = useState<AutomationLog[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'automation_logs'), orderBy('timestamp', 'desc'), limit(20));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newLogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AutomationLog));
      setLogs(newLogs);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-2 max-h-96 overflow-y-auto">
      {logs.map(log => (
        <div key={log.id} className={`p-3 glass rounded-xl text-sm ${log.type === 'error' ? 'border-red-500' : 'border-cyan-500/30'}`}>
          <span className="text-gray-400">{log.timestamp.toLocaleTimeString()}</span> – {log.message}
        </div>
      ))}
    </div>
  );
}
import { LiveAutomationLog } from '@/components/live-automation-log';

// Inside the grid:
<GlassCard className="p-6 col-span-full">
  <h2 className="text-2xl font-bold mb-4">Live Automation Control Stream</h2>
  <LiveAutomationLog />
</GlassCard>import * as admin from 'firebase-admin';

export async function processAutomation(data: any) {
  // ... your automation logic
  await admin.firestore().collection('automation_logs').add({
    message: `Automation "${data.name}" executed`,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    type: 'success'
  });
  return { success: true };https://nisar-studio.vercel.app
}