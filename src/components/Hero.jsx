import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mic } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_35%_at_50%_40%,rgba(124,58,237,0.35),rgba(59,130,246,0.2)_35%,rgba(249,115,22,0.12)_55%,rgba(0,0,0,0.6)_85%)]" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Mic className="h-4 w-4 text-violet-300" />
            <span className="text-sm text-violet-100/90">Agent BHP • AI Voice Agent</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Conversational AI that sounds human, feels magical
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            Engage users with a realtime voice agent powered by state-of-the-art speech and reasoning. Deploy in minutes, scale instantly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
            >
              <Rocket className="h-4 w-4" />
              Get Started
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
