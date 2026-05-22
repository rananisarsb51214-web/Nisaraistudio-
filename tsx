import { LiveAutomationLog } from '@/components/live-automation-log';

// Inside the grid (e.g., after the AnalyticsWidget)
<GlassCard className="p-6 col-span-full">
  <h2 className="text-2xl font-bold mb-4">Live Automation Stream</h2>
  <LiveAutomationLog />
</GlassCard>'use client';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase/client';
import { collection, query, orderBy, limit, onSnapshot, Timestamp } from 'firebase/firestore';

interface AutomationLog {
  id: string;
  message: string;
  timestamp: Timestamp;
  type: 'info' | 'success' | 'error';
}

export function LiveAutomationLog() {
  const [logs, setLogs] = useState<AutomationLog[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'automation_logs'), orderBy('timestamp', 'desc'), limit(20));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newLogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as AutomationLog);
      setLogs(newLogs);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-2 max-h-96 overflow-y-auto">
      {logs.length === 0 && (
        <div className="text-gray-400 text-center p-4">No automation logs yet.</div>
      )}
      {logs.map(log => (
        <div
          key={log.id}
          className={`p-3 glass rounded-xl text-sm ${log.type === 'error' ? 'border-red-500' : 'border-cyan-500/30'}`}
        >
          <span className="text-gray-400">{log.timestamp?.toDate().toLocaleTimeString()}</span>
          <span className="ml-2">{log.message}</span>
        </div>
      ))}
    </div>
  );
}import { LiveAutomationLog } from '@/components/live-automation-log';

// Inside your JSX, add:
<GlassCard className="p-6 col-span-3">
  <h2 className="text-2xl font-bold mb-4">Live Automation Logs</h2>
  <LiveAutomationLog />
</GlassCard>