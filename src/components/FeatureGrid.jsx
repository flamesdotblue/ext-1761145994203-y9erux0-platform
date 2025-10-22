import React from 'react';
import { Mic, Shield, Zap, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Natural voice',
    desc: 'Hyper-realistic prosody with realtime turn-taking and interruptions.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'SOC2-ready patterns, audit logs, and role-based controls.'
  },
  {
    icon: Zap,
    title: 'Low latency',
    desc: 'Sub-300ms response loop for fluid, humanlike conversations.'
  },
  {
    icon: Sparkles,
    title: 'Reasoning built-in',
    desc: 'Structured tools and memory orchestration for reliable outcomes.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Why Agent BHP</h2>
        <p className="mt-3 text-white/70">
          Built for teams who want delightful voice experiences without the infrastructure burden.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-400/40 hover:bg-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 text-violet-200">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
