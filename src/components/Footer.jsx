import React from 'react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-sm text-white/60">© {new Date().getFullYear()} Agent BHP. All rights reserved.</div>
        <nav className="flex items-center gap-5 text-sm text-white/70">
          <a className="transition hover:text-white" href="#features">Features</a>
          <a className="transition hover:text-white" href="#how">How it works</a>
          <a className="transition hover:text-white" href="#">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
