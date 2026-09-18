'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShoppingCart,
  Building2,
  Code2,
  Search,
  Wrench,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Terminal,
  Activity,
  Layers,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';

export default function HomeServicesBento({ onOpenBooking }) {
  const [cartCount, setCartCount] = useState(2);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* CARD 1: E-Commerce Websites (Large Featured - md:col-span-8 md:row-span-2) */}
        <div className="md:col-span-8 md:row-span-2 rounded-3xl bg-charcoal-950 text-white p-7 sm:p-10 border border-charcoal-800 shadow-tactile-lg relative overflow-hidden flex flex-col justify-between group hover:border-charcoal-700 transition-all duration-300">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-accent/20 transition-all duration-500" />

          {/* Card Top Meta */}
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-charcoal-800 font-mono text-xs text-accent font-bold">
                <ShoppingCart className="w-3.5 h-3.5 text-accent" />
                <span>SERVICE // 01</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>0.4s Instant Cart • 0% Marketplace Cuts</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-3">
              Custom E-Commerce Storefronts
            </h3>
            <p className="text-sm sm:text-base text-charcoal-300 max-w-xl font-normal leading-relaxed">
              Bespoke online stores engineered with React and Next.js. We replace bloated plugin-heavy themes with instant mobile cart drawers, hardware-accelerated product browsing, and direct order workflows.
            </p>
          </div>

          {/* Interactive Micro-UI Demo (Instant Cart Simulation) */}
          <div className="relative z-10 my-6 p-4 sm:p-5 rounded-2xl bg-charcoal-900/90 border border-charcoal-800 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-charcoal-800 pb-3 mb-3 text-xs font-mono">
              <span className="text-charcoal-400">DEMO // LIVE REACT CART STATE</span>
              <span className="text-accent font-bold">BANDAMART ENGINE</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">Fresh Organic Grocery Bundle</div>
                <div className="text-xs text-charcoal-400 font-mono">Sub-second local order dispatch</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-charcoal-700 rounded-lg bg-charcoal-950 px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setCartCount(Math.max(1, cartCount - 1))}
                    className="w-5 h-5 flex items-center justify-center text-charcoal-400 hover:text-white"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-mono font-bold text-xs text-white">
                    {cartCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCartCount(cartCount + 1)}
                    className="w-5 h-5 flex items-center justify-center text-charcoal-400 hover:text-white"
                  >
                    +
                  </button>
                </div>
                <span className="font-mono font-bold text-sm text-emerald-400">
                  ₹{cartCount * 499}
                </span>
              </div>
            </div>
          </div>

          {/* Card Bottom: Tech Pills & Deep Link */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-charcoal-800/80">
            <div className="flex flex-wrap gap-1.5">
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-charcoal-900 border border-charcoal-800 text-charcoal-300 font-mono text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/services/ecommerce-websites"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-accent transition-colors group-hover:translate-x-0.5 duration-200"
            >
              <span>Explore E-Commerce Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CARD 2: Full-Stack Web Applications (Tall Column - md:col-span-4 md:row-span-2) */}
        <div className="md:col-span-4 md:row-span-2 rounded-3xl bg-surface p-7 sm:p-8 border border-charcoal-300 shadow-tactile flex flex-col justify-between hover:border-charcoal-500 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-charcoal-300 font-mono text-xs text-ink font-bold">
                <Code2 className="w-3.5 h-3.5 text-accent" />
                <span>SERVICE // 03</span>
              </div>
              <span className="font-mono text-[11px] text-charcoal-500 font-semibold">CUSTOM APPS</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-ink mb-2">
              Full-Stack Web Applications
            </h3>
            <p className="text-sm text-charcoal-600 font-normal leading-relaxed mb-6">
              When SaaS tools don't fit your business rules. We build dedicated client portals, ordering engines, and operational dashboards.
            </p>

            {/* Simulated Live API Response Console */}
            <div className="rounded-2xl bg-charcoal-950 p-4 border border-charcoal-800 font-mono text-xs text-charcoal-300 space-y-2.5 mb-6">
              <div className="flex items-center justify-between pb-2 border-b border-charcoal-800 text-[11px]">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>API // 200 OK</span>
                </div>
                <span className="text-charcoal-500">14ms latency</span>
              </div>
              <div className="text-[11px] space-y-1">
                <div className="text-charcoal-400">
                  <span className="text-accent font-bold">POST</span> /api/orders/dispatch
                </div>
                <div className="text-charcoal-500 truncate">
                  {'{'} status: "confirmed", db: "mongo_atlas", auth: "jwt" {'}'}
                </div>
              </div>
            </div>

            <ul className="space-y-2 text-xs font-mono text-charcoal-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Role-Based Access Control (RBAC)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Direct Database Ownership (MongoDB/SQL)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero Monthly License Fees</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-charcoal-200 mt-6">
            <Link
              href="/services/full-stack-web-apps"
              className="w-full py-2.5 px-4 rounded-full bg-ink text-white hover:bg-accent text-xs font-bold font-mono transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>View Web App Specs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* CARD 3: Business Websites & Redesigns (Wide Card - md:col-span-5) */}
        <div className="md:col-span-5 rounded-3xl bg-surface p-7 sm:p-8 border border-charcoal-300 shadow-tactile flex flex-col justify-between hover:border-charcoal-500 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-charcoal-300 font-mono text-xs text-ink font-bold">
                <Building2 className="w-3.5 h-3.5 text-accent" />
                <span>SERVICE // 02</span>
              </div>
              <span className="font-mono text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
                Zero Layout Shift
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-ink mb-2">
              Business Websites & Redesigns
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-normal leading-relaxed mb-4">
              Editorial Next.js 16 websites designed for studios, consultancies, and modern companies. We renovate clunky legacy sites while preserving content and SEO rank.
            </p>

            <div className="p-3.5 rounded-xl bg-canvas-card border border-charcoal-200 text-xs font-mono text-charcoal-700 flex items-center justify-between">
              <div>
                <span className="font-bold text-ink">CASE STUDY PROOF:</span>
                <span className="text-charcoal-500 block text-[11px]">4 Lotus Interior Renovation</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                LIVE PRODUCTION
              </span>
            </div>
          </div>

          <div className="pt-5 mt-5 border-t border-charcoal-200 flex items-center justify-between">
            <span className="font-mono text-xs text-charcoal-500">2–4 Week Delivery</span>
            <Link
              href="/services/business-websites"
              className="inline-flex items-center gap-1 font-mono text-xs font-bold text-ink hover:text-accent transition-colors"
            >
              <span>Explore Website Renovation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* CARD 4: Technical SEO & Speed (Compact Card - md:col-span-3) */}
        <div className="md:col-span-3 rounded-3xl bg-ink text-white p-6 sm:p-7 border border-charcoal-800 shadow-tactile flex flex-col justify-between hover:border-charcoal-700 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-xl bg-charcoal-900 border border-charcoal-800 text-accent">
                <Search className="w-4 h-4" />
              </div>
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                100/100 CWV
              </span>
            </div>

            <h3 className="text-lg font-bold font-display text-white mb-1.5">
              Technical SEO & Speed
            </h3>
            <p className="text-xs text-charcoal-400 font-normal leading-relaxed">
              Server-rendered JSON-LD schemas, sub-50ms TTFB, and zero font bloat for organic Google indexability.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-charcoal-800 text-[11px] font-mono text-charcoal-400 flex items-center justify-between">
            <span>Structured Data</span>
            <span className="text-emerald-400 font-bold">Schema.org</span>
          </div>
        </div>

        {/* CARD 5: Direct Founder Engineering (Compact Card - md:col-span-4) */}
        <div className="md:col-span-4 rounded-3xl bg-canvas-card p-6 sm:p-7 border border-charcoal-300 shadow-tactile flex flex-col justify-between hover:border-charcoal-500 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-xl bg-surface border border-charcoal-300 text-ink">
                <Wrench className="w-4 h-4 text-accent" />
              </div>
              <span className="font-mono text-[10px] text-charcoal-600 bg-charcoal-200/60 px-2 py-0.5 rounded font-bold">
                SAGAR RAJAWAT
              </span>
            </div>

            <h3 className="text-lg font-bold font-display text-ink mb-1.5">
              Direct Founder Engineering
            </h3>
            <p className="text-xs text-charcoal-600 font-normal leading-relaxed">
              No junior account managers or offshore passing. Every line of code and UI interaction is crafted directly with founder Sagar.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-charcoal-200 flex items-center justify-between">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent hover:underline"
            >
              <span>See All 9 Capabilities</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={onOpenBooking}
              className="text-xs font-mono font-bold text-ink hover:text-accent underline"
            >
              Book Sprint
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
