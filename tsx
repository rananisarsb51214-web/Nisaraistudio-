'use client';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/glass-card';
import { NeonButton } from '@/components/neon-button';
import { ParticleBackground } from '@/components/particle-background';

export default function Landing() {
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
          >
            Your AI Organization<br />Runs Itself.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mt-6 max-w-2xl"
          >
            Automate Google Workspace, Slack, and your entire stack with Gemini + Claude.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-4"
          >
            <NeonButton href="/dashboard">Launch Dashboard →</NeonButton>
            <NeonButton variant="outline" href="/waitlist">Join Waitlist</NeonButton>
          </motion.div>
        </section>

        {/* AI Showcase Animation */}
        <section className="py-20">
          <motion.div
            className="glass max-w-5xl mx-auto p-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-wrap gap-6 justify-center">
              {['Gmail', 'Calendar', 'Drive', 'Docs', 'Sheets'].map((app) => (
                <div key={app} className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  {app}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Integration Grid */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Live Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Gemini AI', 'Claude AI', 'Google Workspace', 'Firebase', 'Slack', 'GitHub'].map((item) => (
              <GlassCard key={item} className="text-center p-6">
                {item}
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}'use client';
import { useAuth } from '@/lib/hooks/useAuth';
import { AnalyticsWidget } from '@/components/analytics-widget';
import { WorkflowMonitor } from '@/components/workflow-monitor';

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold mb-4">Live Analytics</h2>
          <AnalyticsWidget />
        </GlassCard>
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold mb-4">AI Workflow Monitor</h2>
          <WorkflowMonitor />
        </GlassCard>
      </div>
      <div className="space-y-6">
        <GlassCard className="p-6">
          <h3>Cloud Sync Status</h3>
          <div className="flex items-center gap-2 mt-2 text-green-400">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            Google Drive • Live
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <h3>User Management</h3>
          <p>{user?.email || 'Not signed in'}</p>
        </GlassCard>
      </div>
    </div>
  );
}'use client';
import { useState } from 'react';
import { hybridAI } from '@/lib/ai/hybrid-router';

export default function Automation() {
  const [emailPrompt, setEmailPrompt] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');

  const handleGmailAutoReply = async () => {
    const result = await hybridAI(`Write a professional email reply: ${emailPrompt}`);
    setGeneratedReply(result);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <GlassCard className="p-6">
        <h2 className="text-2xl font-bold">Gmail Auto‑Reply</h2>
        <textarea
          className="w-full mt-4 p-3 bg-black/50 border border-white/20 rounded-xl"
          rows={3}
          placeholder="Describe the email you received..."
          value={emailPrompt}
          onChange={(e) => setEmailPrompt(e.target.value)}
        />
        <NeonButton onClick={handleGmailAutoReply} className="mt-4">Generate Reply</NeonButton>
        {generatedReply && (
          <div className="mt-6 p-4 glass rounded-xl">
            <p className="font-mono text-sm">{generatedReply}</p>
          </div>
        )}
      </GlassCard>
      {/* Calendar automation, Docs generator similar */}
    </div>
  );
}{/* Built with AI Studio Section */}
<section className="py-20 px-4 max-w-7xl mx-auto text-center">
  <GlassCard className="p-8 flex flex-col items-center gap-6">
    <img
      width="600"
      height="auto"
      alt="GHBanner"
      src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6"
      className="rounded-xl shadow-lg w-full max-w-2xl"
    />
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
      Built with AI Studio
    </h2>
    <p className="text-gray-300 text-lg max-w-2xl">
      The fastest path from prompt to production with Gemini.
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
      <NeonButton href="https://aistudio.google.com/apps" target="_blank">
        Start building →
      </NeonButton>
      <NeonButton
        variant="outline"
        href="https://ais-dev-epda2kobzs35ubhdpur23s-485413769323.asia-east1.run.app"
        target="_blank"
      >
        Live Demo
      </NeonButton>
    </div>
  </GlassCard>
</section>'use client';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/glass-card';
import { NeonButton } from '@/components/neon-button';
import { ParticleBackground } from '@/components/particle-background';

export default function Landing() {
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
          >
            Your AI Organization<br />Runs Itself.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mt-6 max-w-2xl"
          >
            Automate Google Workspace, Slack, and your entire stack with Gemini + Claude.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-4"
          >
            <NeonButton href="/dashboard">Launch Dashboard →</NeonButton>
            <NeonButton variant="outline" href="/waitlist">Join Waitlist</NeonButton>
          </motion.div>
        </section>

        {/* AI Showcase Animation */}
        <section className="py-20">
          <motion.div
            className="glass max-w-5xl mx-auto p-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-wrap gap-6 justify-center">
              {['Gmail', 'Calendar', 'Drive', 'Docs', 'Sheets'].map((app) => (
                <div key={app} className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  {app}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Integration Grid */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Live Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Gemini AI', 'Claude AI', 'Google Workspace', 'Firebase', 'Slack', 'GitHub'].map((item) => (
              <GlassCard key={item} className="text-center p-6">
                {item}
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Built with AI Studio Section (NEW) */}
        <section className="py-20 px-4 max-w-7xl mx-auto text-center">
          <GlassCard className="p-8 flex flex-col items-center gap-6">
            <img
              width="600"
              height="auto"
              alt="GHBanner"
              src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6"
              className="rounded-xl shadow-lg w-full max-w-2xl"
            />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Built with AI Studio
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              The fastest path from prompt to production with Gemini.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <NeonButton href="https://aistudio.google.com/apps" target="_blank">
                Start building →
              </NeonButton>
              <NeonButton
                variant="outline"
                href="https://ais-dev-epda2kobzs35ubhdpur23s-485413769323.asia-east1.run.app"
                target="_blank"
              >
                Live Demo
              </NeonButton>
            </div>
          </GlassCard>
        </section>
      </div>
    </>
  );
}'use client';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase/client';
import { collection, query, orderBy, limit, onSnapshot, Timestamp } from 'firebase/firestore';

interface AutomationLog {
  id: string;
  message: string;
  timestamp: Timestamp;   // Firestore Timestamp
  type: 'info' | 'success' | 'error';
}

export function LiveAutomationLog() {
  const [logs, setLogs] = useState<AutomationLog[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'automation_logs'), orderBy('timestamp', 'desc'), limit(50));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newLogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AutomationLog));
      setLogs(newLogs);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-2 max-h-96 overflow-y-auto p-2">
      {logs.length === 0 && (
        <div className="text-gray-400 text-center p-4">Waiting for automation events...</div>
      )}
      {logs.map(log => (
        <div
          key={log.id}
          className={`p-3 glass rounded-xl text-sm border-l-4 ${
            log.type === 'error' ? 'border-red-500 bg-red-500/5' : 'border-cyan-500 bg-cyan-500/5'
          }`}
        >
          <span className="text-gray-400 font-mono text-xs">
            {log.timestamp?.toDate().toLocaleTimeString()}
          </span>
          <span className="ml-2">{log.message}</span>
        </div>
      ))}
    </div>
  );
}import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from '@/lib/firebase/client';

const functions = getFunctions(app);
const runAutomation = httpsCallable(functions, 'runAutomation');

// Example usage:
const handleRun = async () => {
  const result = await runAutomation({ name: 'Gmail auto-reply', prompt: emailPrompt });
  console.log(result.data);
};import { LiveAutomationLog } from '@/components/live-automation-log';

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