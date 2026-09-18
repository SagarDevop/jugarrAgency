'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useBooking } from '../components/ClientLayout';
import {
  ShoppingCart,
  Building2,
  Code2,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Database,
  ShieldCheck,
  Layers,
  Smartphone,
  Sparkles,
  Palette,
  Search,
  Wrench,
  ExternalLink,
  ChevronRight,
  Eye,
  Activity,
  Terminal,
  Clock,
  Check,
  Award,
} from 'lucide-react';

export default function ServicesPage({ onOpenBooking }) {
  const { openBooking } = useBooking();
  const handleBooking = onOpenBooking || openBooking;

  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'business', label: 'Business Websites' },
    { id: 'fullstack', label: 'Full-Stack Apps' },
    { id: 'specialist', label: 'SEO & Maintenance' },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-24 sm:space-y-32">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <div className="space-y-8">
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-charcoal-300 font-mono text-xs text-accent font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>[ JUGARR CAPABILITIES // 2026 ARCHITECTURE ]</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-ink leading-[1.08]">
            Engineered for speed. <br className="hidden sm:inline" />
            <span className="text-charcoal-400">Built for real business.</span>
          </h1>
          <p className="text-base sm:text-xl text-charcoal-600 font-normal leading-relaxed max-w-3xl pt-2">
            We don't assemble bloated site-builder templates or hand your project off to junior contractors. Every line of code, database schema, and micro-animation is built directly by founder Sagar Singh Rajawat.
          </p>
        </div>

        {/* High-Level Value Metric Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-charcoal-200">
          <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-charcoal-300 shadow-tactile">
            <div className="font-mono text-2xl sm:text-3xl font-bold text-ink">3–5 Wks</div>
            <div className="text-xs sm:text-sm text-charcoal-500 font-mono mt-1">Average Turnaround</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-charcoal-300 shadow-tactile">
            <div className="font-mono text-2xl sm:text-3xl font-bold text-emerald-600">100%</div>
            <div className="text-xs sm:text-sm text-charcoal-500 font-mono mt-1">Direct Code Ownership</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-charcoal-300 shadow-tactile">
            <div className="font-mono text-2xl sm:text-3xl font-bold text-ink">&lt; 0.8s</div>
            <div className="text-xs sm:text-sm text-charcoal-500 font-mono mt-1">Core Web Vitals LCP</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-charcoal-300 shadow-tactile">
            <div className="font-mono text-2xl sm:text-3xl font-bold text-accent">Founder</div>
            <div className="text-xs sm:text-sm text-charcoal-500 font-mono mt-1">Direct Engineering</div>
          </div>
        </div>

        {/* Quick Filter Navigation */}
        <div className="flex flex-wrap gap-2 pt-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-ink text-white shadow-tactile'
                  : 'bg-surface border border-charcoal-300 text-charcoal-700 hover:border-charcoal-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. DEEP DIVE FEATURE 01: E-COMMERCE WEBSITES */}
      {(activeFilter === 'all' || activeFilter === 'ecommerce') && (
        <section id="ecommerce" className="scroll-mt-32">
          <div className="rounded-3xl border border-charcoal-300 bg-surface shadow-tactile-lg overflow-hidden p-6 sm:p-12 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Visual Showcase Side (Image Mockup & Live Demo) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative rounded-2xl bg-charcoal-950 border border-charcoal-800 overflow-hidden shadow-tactile group aspect-[16/10]">
                  {/* Real Image Mockup from Bandamart */}
                  <img
                    src="/assets/projects/bandamart/grocery_hero.png"
                    alt="Bandamart E-Commerce Storefront Screenshot"
                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-charcoal-700 text-white font-mono text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>0.4s Instant Cart Drawer</span>
                  </div>
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white font-mono text-[11px] font-bold shadow-tactile">
                    <span>Zero Marketplace Cut</span>
                  </div>
                </div>

                {/* Micro Details Ticker */}
                <div className="p-4 rounded-xl bg-canvas-card border border-charcoal-200 flex items-center justify-between font-mono text-xs text-charcoal-600">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Real-World Proof: Bandamart</span>
                  </span>
                  <Link
                    href="/work/bandamart"
                    className="text-ink font-bold hover:text-accent flex items-center gap-1"
                  >
                    <span>Read Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Text / Deliverables Breakdown Side */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-100 border border-charcoal-300 font-mono text-xs text-accent font-bold">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>CORE CAPABILITY // 01</span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-ink">
                    Custom E-Commerce Storefronts
                  </h2>
                  <p className="text-sm sm:text-base text-charcoal-600 mt-2 leading-relaxed">
                    We eliminate slow Shopify app clutter and fragile WooCommerce plugins. We engineer bespoke stores with hardware-accelerated shopping carts, instant mobile checkout, and automated fulfillment workflows.
                  </p>
                </div>

                {/* Icon Deliverables Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Sub-Second Catalog</h4>
                      <p className="text-xs text-charcoal-600">Instant product filtering without reloading pages.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">One-Handed Checkout</h4>
                      <p className="text-xs text-charcoal-600">Ergonomic mobile flow designed to stop cart drop-off.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 shrink-0">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Direct Database</h4>
                      <p className="text-xs text-charcoal-600">MongoDB or SQL with zero monthly hosting licenses.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Secure Gateway</h4>
                      <p className="text-xs text-charcoal-600">Razorpay / Stripe / Cashfree integration with direct alerts.</p>
                    </div>
                  </div>
                </div>

                {/* Tech Badges & Deep Link Action */}
                <div className="pt-4 border-t border-charcoal-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-charcoal-600">
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">React</span>
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">Next.js</span>
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">Node.js</span>
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">MongoDB</span>
                  </div>

                  <Link
                    href="/services/ecommerce-websites"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white hover:bg-accent font-mono text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>Dedicated E-Commerce Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. DEEP DIVE FEATURE 02: BUSINESS WEBSITES & RENOVATIONS */}
      {(activeFilter === 'all' || activeFilter === 'business') && (
        <section id="business" className="scroll-mt-32">
          <div className="rounded-3xl border border-charcoal-300 bg-surface shadow-tactile-lg overflow-hidden p-6 sm:p-12 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Text Side */}
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-100 border border-charcoal-300 font-mono text-xs text-accent font-bold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>CORE CAPABILITY // 02</span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-ink">
                    Business Websites & Complete Redesigns
                  </h2>
                  <p className="text-sm sm:text-base text-charcoal-600 mt-2 leading-relaxed">
                    Designed for established studios, consultancies, and commercial businesses. We craft high-credibility websites with refined typography, zero layout shifts, and server-rendered SEO authority.
                  </p>
                </div>

                {/* Icon Deliverables Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Editorial Brand Design</h4>
                      <p className="text-xs text-charcoal-600">Custom aesthetics tailored to your industry authority.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Zero Layout Shift</h4>
                      <p className="text-xs text-charcoal-600">Smooth high-resolution photo galleries with aspect containers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                      <Search className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Structured SEO Schema</h4>
                      <p className="text-xs text-charcoal-600">Server-rendered JSON-LD tags for Google rich snippets.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Content Salvage</h4>
                      <p className="text-xs text-charcoal-600">We extract legacy copy and assets without broken links.</p>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-charcoal-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-charcoal-600">
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">Next.js 16</span>
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">React 19</span>
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">Tailwind</span>
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">GSAP</span>
                  </div>

                  <Link
                    href="/services/business-websites"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white hover:bg-accent font-mono text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>Dedicated Business Site Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Visual Showcase Side (Image Mockup from 4 Lotus) */}
              <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
                <div className="relative rounded-2xl bg-charcoal-950 border border-charcoal-800 overflow-hidden shadow-tactile group aspect-[16/10]">
                  <img
                    src="/assets/projects/4lotus/after.png"
                    alt="4 Lotus Interior Website Renovation Screenshot"
                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-charcoal-700 text-white font-mono text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Complete UI/UX Overhaul</span>
                  </div>
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink text-white border border-charcoal-700 font-mono text-[11px] font-bold">
                    <span>Live at 4lotusinterior.in</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-canvas-card border border-charcoal-200 flex items-center justify-between font-mono text-xs text-charcoal-600">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Real-World Proof: 4 Lotus Interior</span>
                  </span>
                  <Link
                    href="/work/4lotus-interior"
                    className="text-ink font-bold hover:text-accent flex items-center gap-1"
                  >
                    <span>View Before / After</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 4. DEEP DIVE FEATURE 03: FULL-STACK WEB APPS */}
      {(activeFilter === 'all' || activeFilter === 'fullstack') && (
        <section id="fullstack" className="scroll-mt-32">
          <div className="rounded-3xl border border-charcoal-300 bg-surface shadow-tactile-lg overflow-hidden p-6 sm:p-12 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Visual Terminal / Code Mockup Side */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative rounded-2xl bg-charcoal-950 border border-charcoal-800 p-6 shadow-tactile font-mono text-xs text-charcoal-300 space-y-4 min-h-[320px] flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-charcoal-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="text-charcoal-400 font-bold ml-2">ARCH_ENGINE // API RUNTIME</span>
                    </div>
                    <span className="text-emerald-400 font-bold">Node.js + MongoDB</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <p className="text-charcoal-500">// Specialized operational ordering controller</p>
                    <p className="text-emerald-400 font-bold">const order = await DispatchEngine.coordinate(&#123;</p>
                    <p className="pl-4 text-charcoal-300">hubId: "BANDA_CENTRAL_01",</p>
                    <p className="pl-4 text-charcoal-300">itemsCount: 14,</p>
                    <p className="pl-4 text-charcoal-300">liveNotification: true,</p>
                    <p className="pl-4 text-charcoal-300">authRole: "AUTHENTICATED_BUSINESS"</p>
                    <p className="text-emerald-400 font-bold">&#125;);</p>
                    <p className="text-charcoal-400 pt-2">
                      <span className="text-accent font-bold">✔ OK:</span> 200 Created in 18ms. Webhook fired.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-charcoal-800 flex items-center justify-between text-[11px] text-charcoal-500">
                    <span>Role-Based Access Control</span>
                    <span className="text-white font-bold">Zero Proprietary Lock-In</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-canvas-card border border-charcoal-200 flex items-center justify-between font-mono text-xs text-charcoal-600">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Clean Source Code Handover</span>
                  </span>
                  <span className="text-charcoal-800 font-bold">100% Client Owned</span>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-100 border border-charcoal-300 font-mono text-xs text-accent font-bold">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>CORE CAPABILITY // 03</span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-ink">
                    Full-Stack Web Applications
                  </h2>
                  <p className="text-sm sm:text-base text-charcoal-600 mt-2 leading-relaxed">
                    When generic tools and spreadsheets bottleneck your operations. We build tailored customer portals, scheduling backends, and internal operational tooling.
                  </p>
                </div>

                {/* Icon Deliverables Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Node.js / Express APIs</h4>
                      <p className="text-xs text-charcoal-600">Clean REST routes with rate limiting and schema validation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Database Modeling</h4>
                      <p className="text-xs text-charcoal-600">MongoDB Atlas schemas with indexes and query caching.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Auth & RBAC</h4>
                      <p className="text-xs text-charcoal-600">JWT sessions and role permissions for admins and users.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Webhook Queues</h4>
                      <p className="text-xs text-charcoal-600">Automated event listeners for email, SMS, and payments.</p>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-charcoal-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-charcoal-600">
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">Node.js</span>
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">MongoDB</span>
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">Next.js</span>
                    <span className="px-2 py-0.5 rounded bg-charcoal-100">REST APIs</span>
                  </div>

                  <Link
                    href="/services/full-stack-web-apps"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white hover:bg-accent font-mono text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>Dedicated Web Apps Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 5. SPECIALIST CAPABILITIES (Rich Interactive Trio: UI/UX, SEO, Maintenance) */}
      {(activeFilter === 'all' || activeFilter === 'specialist') && (
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
              [ SPECIALIST CAPABILITIES // REFINEMENT & SCALE ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-ink">
              Design Systems, Speed & Ongoing Engineering.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Specialist Card 1: UI/UX & Design Systems */}
            <div className="p-7 sm:p-8 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile flex flex-col justify-between hover:border-charcoal-500 transition-all">
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-rose-50 text-rose-700 border border-rose-200 w-fit">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-ink">
                  UI/UX & Design Systems
                </h3>
                <p className="text-sm text-charcoal-600 font-normal leading-relaxed">
                  Translating your brand into consistent typography, tactile interaction states, accessible color palettes, and Figma component libraries.
                </p>
                <ul className="space-y-2 text-xs font-mono text-charcoal-700 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span>Tactile Micro-Interactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span>Mobile Ergonomic Wireframing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span>Figma-to-Code Parity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Specialist Card 2: Technical SEO & Core Web Vitals */}
            <div className="p-7 sm:p-8 rounded-3xl bg-charcoal-950 text-white border border-charcoal-800 shadow-tactile flex flex-col justify-between hover:border-charcoal-700 transition-all">
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-800 w-fit">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  Technical SEO & Speed Auditing
                </h3>
                <p className="text-sm text-charcoal-300 font-normal leading-relaxed">
                  Eliminating render-blocking assets, font bloat, and layout shifts. Adding structured JSON-LD schemas so Google clearly indexes your entities.
                </p>
                <ul className="space-y-2 text-xs font-mono text-charcoal-300 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100/100 Core Web Vitals Target</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Schema.org JSON-LD Markup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Clean Canonical Hierarchy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Specialist Card 3: Direct Engineering Sprints */}
            <div className="p-7 sm:p-8 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile flex flex-col justify-between hover:border-charcoal-500 transition-all">
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 w-fit">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-ink">
                  Code Maintenance & Retainers
                </h3>
                <p className="text-sm text-charcoal-600 font-normal leading-relaxed">
                  Direct founder access for ongoing feature updates, security patches, performance monitoring, and fast turnaround bug resolutions.
                </p>
                <ul className="space-y-2 text-xs font-mono text-charcoal-700 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span>Direct WhatsApp & Slack Channel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span>Weekly Development Sprints</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span>Zero Junior Developer Handoffs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. HOW SAGAR WORKS (Editorial 4-Step Process) */}
      <section className="p-8 sm:p-14 rounded-3xl bg-canvas-card border border-charcoal-300 shadow-tactile space-y-10">
        <div className="max-w-2xl space-y-2">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            [ THE JUGARR SPRINT PROCESS ]
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-ink">
            Transparent sprints from day zero to launch.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-surface border border-charcoal-200 space-y-3">
            <div className="font-mono text-2xl font-extrabold text-accent">01 //</div>
            <h4 className="font-bold text-base text-ink">Discovery & Architecture</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              We define data models, user journeys, performance budgets, and deliverables before writing code.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-charcoal-200 space-y-3">
            <div className="font-mono text-2xl font-extrabold text-accent">02 //</div>
            <h4 className="font-bold text-base text-ink">Interactive Prototype</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Tactile design in Figma and real browser sandboxes so you experience flows before engineering.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-charcoal-200 space-y-3">
            <div className="font-mono text-2xl font-extrabold text-accent">03 //</div>
            <h4 className="font-bold text-base text-ink">Next.js Engineering</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Clean React components, responsive layouts, fast APIs, and server-side schema injection.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-charcoal-200 space-y-3">
            <div className="font-mono text-2xl font-extrabold text-accent">04 //</div>
            <h4 className="font-bold text-base text-ink">Launch & Handover</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Deployment to edge CDN, XML sitemap verification, and 100% complete source code transfer.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FINAL PROJECT INTAKE BANNER */}
      <div className="p-8 sm:p-14 rounded-3xl bg-ink text-white shadow-tactile-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>ACCEPTING NEW CLIENT PROJECTS</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Ready to build a website that actually works?
          </h3>
          <p className="text-sm sm:text-base text-charcoal-300 font-normal leading-relaxed">
            Collaborate directly with Sagar Singh Rajawat. Share your goals, timeline, or current website and we’ll outline a straightforward sprint.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleBooking}
            className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-display font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-tactile"
          >
            <span>Book Founder Strategy Session</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <Link
            href="/contact"
            className="px-6 py-4 bg-charcoal-900 border border-charcoal-700 hover:bg-charcoal-800 text-white rounded-full font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            <span>Direct Intake Form</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
