import React from 'react';
import { User, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: User,
    title: 'Connect channels',
    desc: 'Plug into telephony, web, or mobile SDKs using a simple API.'
  },
  {
    icon: Settings,
    title: 'Add tools',
    desc: 'Expose your internal APIs and functions for the agent to call safely.'
  },
  {
    icon: Rocket,
    title: 'Go live',
    desc: 'Scale globally with observability, guardrails, and SLAs.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-violet-200">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-sm uppercase tracking-wide text-white/50">Step {i + 1}</div>
              <h3 className="mt-1 text-lg font-medium text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/60">SDKs for JavaScript, Python, and REST. Bring your stack.</p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            View Docs
          </a>
        </div>
      </div>
    </section>
  );
}
