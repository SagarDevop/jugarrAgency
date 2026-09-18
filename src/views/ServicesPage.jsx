'use client';

import React from 'react';
import Link from 'next/link';
import { useBooking } from '../components/ClientLayout';
import {
  ArrowUpRight,
  ChevronRight,
  Zap,
  ShieldCheck,
  Smartphone,
  Layers,
  Search,
  Award,
  Terminal,
  Database,
  Lock,
  RefreshCw,
  Cpu,
  Clock,
  Sparkles,
  ExternalLink,
  Code2,
} from 'lucide-react';

export default function ServicesPage({ onOpenBooking }) {
  const { openBooking } = useBooking();
  const handleBooking = onOpenBooking || openBooking;

  return (
    <div className="pt-28 sm:pt-40 pb-32 px-4 sm:px-8 max-w-6xl mx-auto space-y-32 sm:space-y-44">
      
      {/* =========================================================
          PROLOGUE: THE PHILOSOPHY OF DIGITAL CRAFT
          ========================================================= */}
      <section className="space-y-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>[ JUGARR CAPABILITIES // STORY-DRIVEN ARCHITECTURE ]</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-ink leading-[1.06]">
          We do not build generic templates. <br />
          <span className="text-charcoal-400 font-normal">
            We engineer digital infrastructure for real businesses.
          </span>
        </h1>

        <p className="text-lg sm:text-2xl text-charcoal-700 font-normal leading-relaxed">
          The modern web is cluttered with bloated site-builders, fragile plugin dependencies, and agencies that hand projects off to junior contractors. At Jugarr, we work differently: a focused, senior engineering sprint led directly by founder Sagar Singh Rajawat, dedicated to performance, clarity, and genuine operational utility.
        </p>

        {/* Minimalist Principles Strip (Thin Dividers, Zero Heavy Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-charcoal-300">
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">01 // SPEED</div>
            <div className="font-display font-extrabold text-2xl text-ink">&lt; 0.8s LCP</div>
            <div className="text-xs text-charcoal-500 font-mono">Zero layout shift, zero bloat</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">02 // OWNERSHIP</div>
            <div className="font-display font-extrabold text-2xl text-emerald-600">100% Owned</div>
            <div className="text-xs text-charcoal-500 font-mono">Zero monthly SaaS lock-in</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">03 // TIMELINE</div>
            <div className="font-display font-extrabold text-2xl text-ink">3–5 Weeks</div>
            <div className="text-xs text-charcoal-500 font-mono">Direct sprint velocity</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">04 // LEADERSHIP</div>
            <div className="font-display font-extrabold text-2xl text-ink">Founder-Led</div>
            <div className="text-xs text-charcoal-500 font-mono">Direct collaboration with Sagar</div>
          </div>
        </div>
      </section>


      {/* =========================================================
          CHAPTER 01: THE STOREFRONT (CUSTOM E-COMMERCE)
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
              CHAPTER 01 // BESPOKE E-COMMERCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
              Reclaiming your margins from marketplace monopolies.
            </h2>
          </div>
          <div className="font-mono text-xs text-charcoal-500">
            [ REACT // NEXT.JS // NODE.JS // MONGODB ]
          </div>
        </div>

        {/* The Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 text-base sm:text-lg text-charcoal-700 leading-relaxed">
          <div className="lg:col-span-7 space-y-5">
            <p>
              When local retail and consumer brands rely solely on marketplaces, they surrender direct customer relationships and 20% to 30% of every transaction. But when they attempt to build an independent store with off-the-shelf theme plugins, they end up with fragile checkouts, multi-second loading delays, and high mobile cart abandonment.
            </p>
            <p className="text-charcoal-600 font-normal">
              We design and code custom storefronts that eliminate plugin bloat. By combining hardware-accelerated React cart state with automated backend coordination, customers browse products and check out with sub-second responsiveness—even on variable mobile connections.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4 pt-1">
            <div className="font-mono text-xs text-charcoal-500 font-bold uppercase tracking-wider">
              Core Engineering Pillars:
            </div>
            <div className="space-y-3 text-xs sm:text-sm font-mono text-charcoal-800">
              <div className="flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>0.4s Instant Cart Drawer (zero full page reloads)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Smartphone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>One-Handed Mobile Ergonomics & Address Autofill</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Database className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>MongoDB Catalog Schema with Cloudinary CDN media</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Direct Payment Webhooks & WhatsApp Order Alerts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Visual: Real Bandamart Project Asset */}
        <div className="space-y-3 pt-4">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-charcoal-950 border border-charcoal-800 shadow-tactile-lg aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
            <img
              src="/assets/projects/bandamart/grocery_hero.png"
              alt="Bandamart E-Commerce Storefront Interface by Jugarr"
              className="w-full h-full object-contain object-center p-2 sm:p-4 opacity-95"
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-charcoal-700 text-white font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE SYSTEM // BANDAMART STOREFRONT</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-charcoal-500 pt-1">
            <div>
              <span className="font-bold text-ink">REAL-WORLD PROOF:</span> Bandamart neighborhood quick-commerce web app built for Banda community grocery delivery.
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/work/bandamart"
                className="text-ink font-bold hover:text-accent flex items-center gap-1 transition-colors"
              >
                <span>Read Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/services/ecommerce-websites"
                className="text-accent font-bold hover:underline flex items-center gap-1"
              >
                <span>Full Tech Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          CHAPTER 02: THE RENOVATION (BUSINESS WEBSITES & BRAND)
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
              CHAPTER 02 // THE DIGITAL RENOVATION
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
              Transforming physical craftsmanship into digital authority.
            </h2>
          </div>
          <div className="font-mono text-xs text-charcoal-500">
            [ NEXT.JS 16 // TAILWIND // GSAP // STRUCTURED DATA ]
          </div>
        </div>

        {/* The Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 text-base sm:text-lg text-charcoal-700 leading-relaxed">
          <div className="lg:col-span-7 space-y-5">
            <p>
              Your business may execute high-end residential interiors, commercial consulting, or precision engineering. But if prospective clients arrive at a cluttered, slow 2017 template with broken mobile grids and blurry imagery, they immediately question your attention to detail.
            </p>
            <p className="text-charcoal-600 font-normal">
              We extract and salvage your existing photography, project portfolios, and domain equity, rebuilding the entire user interface from the ground up in Next.js 16. With balanced whitespace, refined typography, and zero layout shift, your website commands the same credibility as your offline work.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4 pt-1">
            <div className="font-mono text-xs text-charcoal-500 font-bold uppercase tracking-wider">
              Core Engineering Pillars:
            </div>
            <div className="space-y-3 text-xs sm:text-sm font-mono text-charcoal-800">
              <div className="flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Zero Cumulative Layout Shift (CLS) on High-Res Galleries</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Search className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Server-Rendered Schema.org Markup for Google Search Authority</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Complete Legacy Content & URL Salvage (zero broken links)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Tailored Editorial Layout with Subtle Micro-Interactions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Visual: Real 4 Lotus Interior Renovation */}
        <div className="space-y-3 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-charcoal-950 border border-charcoal-800 shadow-tactile aspect-[16/10] flex items-center justify-center">
              <img
                src="/assets/projects/4lotus/before.png"
                alt="4 Lotus Interior Legacy Website Before Renovation"
                className="w-full h-full object-contain object-center p-2 sm:p-3 opacity-80 grayscale"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-900/90 border border-charcoal-700 text-charcoal-400 font-mono text-[11px] font-bold">
                BEFORE // CLUTTERED LEGACY SITE
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-charcoal-950 border border-charcoal-700 shadow-tactile aspect-[16/10] flex items-center justify-center">
              <img
                src="/assets/projects/4lotus/after.png"
                alt="4 Lotus Interior Renovated Modern Website by Jugarr"
                className="w-full h-full object-contain object-center p-2 sm:p-3 opacity-95"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white font-mono text-[11px] font-bold shadow-tactile">
                AFTER // EDITORIAL NEXT.JS 15
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-charcoal-700 text-white font-mono text-[11px]">
                4lotusinterior.in
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-charcoal-500 pt-1">
            <div>
              <span className="font-bold text-ink">REAL-WORLD PROOF:</span> Complete UI/UX renovation for interior design studio 4 Lotus Interior (Rashid).
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/work/4lotus-interior"
                className="text-ink font-bold hover:text-accent flex items-center gap-1 transition-colors"
              >
                <span>Read Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/services/business-websites"
                className="text-accent font-bold hover:underline flex items-center gap-1"
              >
                <span>Full Tech Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          CHAPTER 03: THE ENGINE (CUSTOM FULL-STACK WEB APPS)
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
              CHAPTER 03 // BESPOKE WEB APPLICATIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
              When off-the-shelf software breaks under your workflow.
            </h2>
          </div>
          <div className="font-mono text-xs text-charcoal-500">
            [ NODE.JS // EXPRESS // REST APIS // MONGODB ATLAS ]
          </div>
        </div>

        {/* The Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 text-base sm:text-lg text-charcoal-700 leading-relaxed">
          <div className="lg:col-span-7 space-y-5">
            <p>
              Spreadsheets get corrupted. Order coordination scattered across WhatsApp messages leads to missed deadlines. And generic monthly SaaS subscriptions force your operations into rigid boxes while charging you recurring fees forever.
            </p>
            <p className="text-charcoal-600 font-normal">
              We engineer dedicated full-stack web applications structured around your business rules: specialized customer intake dashboards, neighborhood dispatch queues, and real-time order coordination. You retain 100% ownership of your source code and database, with zero proprietary lock-in.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4 pt-1">
            <div className="font-mono text-xs text-charcoal-500 font-bold uppercase tracking-wider">
              Core Engineering Pillars:
            </div>
            <div className="space-y-3 text-xs sm:text-sm font-mono text-charcoal-800">
              <div className="flex items-start gap-2.5">
                <Terminal className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Structured Node.js REST APIs with Rate Limiting</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Database className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>MongoDB Document Schemas Indexed for Query Speed</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Encrypted JWT Sessions & Role-Based Access Control</span>
              </div>
              <div className="flex items-start gap-2.5">
                <RefreshCw className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Automated Webhook Queues for Email, SMS & Payments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Visual: Terminal / Backend Architecture Preview */}
        <div className="space-y-3 pt-4">
          <div className="rounded-2xl sm:rounded-3xl bg-charcoal-950 border border-charcoal-800 p-6 sm:p-8 font-mono text-xs text-charcoal-300 shadow-tactile-lg space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-charcoal-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-charcoal-400 font-bold ml-2">ARCH_ENGINE // CONTROLLER RUNTIME</span>
              </div>
              <span className="text-emerald-400 font-bold">100% CLIENT-OWNED CODE</span>
            </div>

            <div className="space-y-2 text-xs sm:text-sm leading-relaxed overflow-x-auto">
              <p className="text-charcoal-500">// Specialized dispatch controller with database transaction rollback</p>
              <p className="text-emerald-400 font-bold">
                export async function coordinateOrder(req, res) &#123;
              </p>
              <p className="pl-4 text-charcoal-300">const &#123; cartItems, hubId, customerPhone &#125; = req.body;</p>
              <p className="pl-4 text-charcoal-400">// Sub-second inventory allocation across local fulfillment hubs</p>
              <p className="pl-4 text-charcoal-300">const batch = await InventoryModel.reserveStock(hubId, cartItems);</p>
              <p className="pl-4 text-charcoal-300">await WebhookDispatcher.notifyDispatchTeam(batch);</p>
              <p className="pl-4 text-accent font-bold">return res.status(200).json(&#123; status: 'dispatched', latency: '18ms' &#125;);</p>
              <p className="text-emerald-400 font-bold">&#125;</p>
            </div>

            <div className="pt-3 border-t border-charcoal-800/80 flex flex-wrap items-center justify-between text-xs text-charcoal-500 gap-2">
              <span>Zero vendor lock-in • Git repository fully transferred upon delivery</span>
              <span className="text-white font-bold">Node.js + MongoDB + Next.js</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-charcoal-500 pt-1">
            <div>
              <span className="font-bold text-ink">CAPABILITY SCOPE:</span> Custom dashboards, scheduling systems, and operational workflow tooling.
            </div>
            <Link
              href="/services/full-stack-web-apps"
              className="text-accent font-bold hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Full Web App Specs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================
          CHAPTER 04: THE FOUNDATION (DISCIPLINE & PRINCIPLES)
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        <div className="space-y-2 max-w-2xl">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            CHAPTER 04 // THE FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            The invisible engineering standards.
          </h2>
          <p className="text-base text-charcoal-600">
            Details that separate high-performance software from amateur WordPress installations.
          </p>
        </div>

        {/* 4-Column Typography-Driven Standard Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          <div className="space-y-2.5 pb-6 border-b lg:border-b-0 lg:border-r border-charcoal-300 pr-4">
            <div className="font-mono text-xs text-accent font-bold">01 // AUDITING</div>
            <h3 className="font-display font-extrabold text-xl text-ink">Technical SEO & Schema</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Every route features server-rendered JSON-LD markup (`Organization`, `WebSite`, `Person`, `Service`), clean canonicals, and semantic HTML hierarchy for Google entity understanding.
            </p>
          </div>

          <div className="space-y-2.5 pb-6 border-b lg:border-b-0 lg:border-r border-charcoal-300 pr-4">
            <div className="font-mono text-xs text-accent font-bold">02 // PERFORMANCE</div>
            <h3 className="font-display font-extrabold text-xl text-ink">Core Web Vitals</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Zero layout shifts (CLS), sub-50ms Time-to-First-Byte (TTFB), and responsive image containers that prevent layout jumps on mobile screens.
            </p>
          </div>

          <div className="space-y-2.5 pb-6 border-b lg:border-b-0 lg:border-r border-charcoal-300 pr-4">
            <div className="font-mono text-xs text-accent font-bold">03 // ERGONOMICS</div>
            <h3 className="font-display font-extrabold text-xl text-ink">Mobile-First Touch</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Designed around one-handed smartphone navigation: thumb-accessible buttons, clean tap targets, and streamlined form inputs.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="font-mono text-xs text-accent font-bold">04 // COLLABORATION</div>
            <h3 className="font-display font-extrabold text-xl text-ink">Direct Founder Access</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              You communicate directly with Sagar Singh Rajawat on Slack or WhatsApp. Every line of code, UI choice, and deployment is executed personally.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================
          CHAPTER 05: THE SPRINT (HOW SAGAR WORKS WITH YOU)
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        <div className="space-y-2 max-w-2xl">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            CHAPTER 05 // THE COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            From initial concept to launch in weeks, not months.
          </h2>
        </div>

        {/* Minimal Numbered Sprint Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-4">
          <div className="space-y-2">
            <div className="font-mono text-2xl font-extrabold text-accent">01 //</div>
            <h3 className="font-display font-bold text-base text-ink">Discovery & Architecture</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              We scope your data requirements, user journeys, performance goals, and deliverables with zero ambiguity.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-2xl font-extrabold text-accent">02 //</div>
            <h3 className="font-display font-bold text-base text-ink">Browser Sandbox Prototype</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              You test real interactive flows in a live browser staging environment rather than static mockups.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-2xl font-extrabold text-accent">03 //</div>
            <h3 className="font-display font-bold text-base text-ink">Next.js 16 Engineering</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Clean React components, responsive layouts, fast APIs, and server-side schema injection.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-2xl font-extrabold text-accent">04 //</div>
            <h3 className="font-display font-bold text-base text-ink">Launch & Full Handover</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Deployment to edge CDN, XML sitemap verification, and 100% complete source code transfer.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================
          EPILOGUE: START YOUR PROJECT
          ========================================================= */}
      <section className="border-t border-charcoal-300 pt-16 sm:pt-24 pb-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>NOW SCHEDULING NEW PROJECT SPRINTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            Ready to build a website that commands real authority?
          </h2>

          <p className="text-base sm:text-xl text-charcoal-700 font-normal leading-relaxed">
            Collaborate directly with Sagar Singh Rajawat. Share your goals, timeline, or current website, and we’ll scope a straightforward engineering sprint.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={handleBooking}
              className="px-8 py-4 bg-ink text-white hover:bg-accent rounded-full font-display font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-tactile"
            >
              <span>Book Founder Strategy Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              href="/contact"
              className="px-8 py-4 bg-surface border border-charcoal-300 hover:border-charcoal-500 text-ink rounded-full font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <span>Direct Intake Form</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
