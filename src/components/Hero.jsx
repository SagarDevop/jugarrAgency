'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Code2, Globe, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import gsap from 'gsap';

export default function Hero({ onOpenBooking }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
      });

      gsap.from('.hero-badge', {
        scale: 0.88,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        delay: 0.35,
        ease: 'back.out(1.7)',
      });

      gsap.from('.hero-terminal', {
        y: 45,
        opacity: 0,
        duration: 0.95,
        delay: 0.25,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Blueprint grid background element */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none -z-10" />

      {/* Top micro metadata header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 hero-reveal">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-charcoal-200 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="font-mono text-xs font-bold tracking-wide text-charcoal-800">
            JUGARR — DIGITAL SOLUTIONS
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-charcoal-600">
          <span>FOUNDER-LED STUDIO</span>
          <span>•</span>
          <span>SAGAR SINGH RAJAWAT</span>
          <span>•</span>
          <span>EST. 2026</span>
        </div>
      </div>

      {/* Main Dual-Tone Headline */}
      <div className="max-w-5xl space-y-3 mb-8">
        <h1 className="hero-reveal text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight font-display leading-[1.04]">
          <span className="text-charcoal-400 block">Building digital experiences</span>
          <span className="text-ink block">that help businesses move forward.</span>
        </h1>

        <p className="hero-reveal text-base sm:text-xl text-charcoal-700 max-w-3xl font-normal leading-relaxed pt-2">
          I'm Sagar, the founder and developer behind Jugarr. I design and build modern websites, e-commerce experiences, and custom web applications for businesses.
        </p>
      </div>

      {/* CTAs and Authentic Founder Guarantee */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12 sm:mb-16 hero-reveal relative">
        <a
          href="#work"
          className="px-7 py-3.5 bg-ink text-white hover:bg-accent text-sm sm:text-base font-bold rounded-full transition-all duration-200 shadow-tactile hover:shadow-tactile-hover hover:translate-y-0.5 flex items-center gap-2 group"
        >
          <span>View Selected Work</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <button
          onClick={onOpenBooking}
          className="px-6 py-3.5 bg-surface text-ink hover:bg-charcoal-100 border border-charcoal-300 text-sm sm:text-base font-semibold rounded-full transition-all duration-200 flex items-center gap-2"
        >
          <span>Let's Work Together</span>
        </button>

        {/* Handwritten annotation note */}
        <div className="hidden lg:flex items-center gap-2 pl-4 text-accent font-hand text-xl font-bold -rotate-2 select-none pointer-events-none">
          <svg className="w-8 h-8 rotate-12 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M4 12c4 0 8 3 10 7M14 19l2-5M14 19l-4-1" />
          </svg>
          <span>direct founder engineering. no agency middlemen.</span>
        </div>
      </div>

      {/* Centerpiece: Retro-Futuristic Terminal / Engineering Command Deck */}
      <div className="hero-terminal relative rounded-3xl border border-charcoal-300 bg-surface shadow-tactile-lg overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-charcoal-100 border-b border-charcoal-200">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
            <span className="font-mono text-xs font-semibold text-charcoal-700 ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>jugarr://system-architecture.inspect</span>
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-charcoal-600">
            <span className="hidden sm:inline">ENGINEERING STACK</span>
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-[10px]">
              VERIFIED & ACTIVE
            </span>
          </div>
        </div>

        {/* Terminal Content: Retro CRT Screen Preview */}
        <div className="crt-screen p-5 sm:p-8 text-white font-mono text-xs sm:text-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-30">
            {/* Column 1: Web & Frontend Stack */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-terminal-green text-xs border-b border-charcoal-800 pb-2">
                <span>[ 01 // MODERN FRONTEND ]</span>
                <span className="animate-pulse">ACTIVE</span>
              </div>
              <div className="p-3 bg-charcoal-900/90 rounded-xl border border-charcoal-800 space-y-2">
                <div className="flex justify-between text-charcoal-300 text-xs">
                  <span>Core Frameworks</span>
                  <span className="text-terminal-green font-bold">React • Next.js • Vite</span>
                </div>
                <div className="flex justify-between text-charcoal-300 text-xs">
                  <span>Styling & Motion</span>
                  <span className="text-terminal-green font-bold">Tailwind CSS • GSAP</span>
                </div>
                <div className="flex justify-between text-charcoal-300 text-xs">
                  <span>Language</span>
                  <span className="text-terminal-green font-bold">JavaScript • TypeScript</span>
                </div>
                <div className="pt-2 border-t border-charcoal-800 flex justify-between text-[11px] text-charcoal-400">
                  <span>BUILD PIPELINE</span>
                  <span className="text-terminal-green font-bold">LIGHTWEIGHT & MODULAR</span>
                </div>
              </div>
            </div>

            {/* Column 2: Backend & Database */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-terminal-amber text-xs border-b border-charcoal-800 pb-2">
                <span>[ 02 // BACKEND & DATA ]</span>
                <span>REST APIS</span>
              </div>
              <div className="p-3 bg-charcoal-900/90 rounded-xl border border-charcoal-800 space-y-2">
                <div className="flex justify-between text-charcoal-300 text-xs">
                  <span>Server Runtime</span>
                  <span className="text-terminal-amber font-bold">Node.js • Express</span>
                </div>
                <div className="flex justify-between text-charcoal-300 text-xs">
                  <span>Data Layer</span>
                  <span className="text-terminal-amber font-bold">MongoDB • Mongoose</span>
                </div>
                <div className="flex justify-between text-charcoal-300 text-xs">
                  <span>Cloud Media</span>
                  <span className="text-terminal-amber font-bold">Cloudinary • S3</span>
                </div>
                <div className="pt-2 border-t border-charcoal-800 flex justify-between text-[11px] text-charcoal-400">
                  <span>ARCHITECTURE</span>
                  <span className="text-terminal-amber font-bold">CLEAN & RESTFUL</span>
                </div>
              </div>
            </div>

            {/* Column 3: Quality Standards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-cyan-400 text-xs border-b border-charcoal-800 pb-2">
                <span>[ 03 // QUALITY STANDARDS ]</span>
                <span>PRODUCTION READY</span>
              </div>
              <div className="p-3 bg-charcoal-900/90 rounded-xl border border-charcoal-800 space-y-2">
                <div className="flex justify-between text-charcoal-300 text-xs">
                  <span>Responsiveness</span>
                  <span className="text-cyan-400 font-bold">Mobile • Tablet • Desktop</span>
                </div>
                <div className="flex justify-between text-charcoal-300 text-xs">
                  <span>SEO Foundations</span>
                  <span className="text-cyan-400 font-bold">Semantic HTML & Schema</span>
                </div>
                <div className="flex justify-between text-charcoal-300 text-xs">
                  <span>Performance</span>
                  <span className="text-cyan-400 font-bold">Asset Optimization</span>
                </div>
                <div className="pt-2 border-t border-charcoal-800 flex justify-between text-[11px] text-charcoal-400">
                  <span>DELIVERY CODE</span>
                  <span className="text-cyan-400 font-bold">100% HAND-ENGINEERED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tactile Stamp Badges below terminal */}
        <div className="p-4 sm:p-5 bg-canvas-card border-t border-charcoal-200 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="hero-badge stamp-tilt px-3 py-1 bg-amber-100 border border-amber-300 text-amber-900 rounded-md font-bold text-[11px]">
              ★ ZERO BLOATED TEMPLATES
            </span>
            <span className="hero-badge stamp-tilt px-3 py-1 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-md font-bold text-[11px]">
              ✓ HAND-ENGINEERED CODE
            </span>
            <span className="hero-badge stamp-tilt px-3 py-1 bg-blue-100 border border-blue-300 text-blue-900 rounded-md font-bold text-[11px]">
              ● DIRECT FOUNDER COLLABORATION
            </span>
          </div>

          <a
            href="#work"
            className="text-charcoal-600 hover:text-ink font-mono text-[11px] flex items-center gap-1 transition-colors"
          >
            <span>EXPLORE REAL PROJECTS</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
