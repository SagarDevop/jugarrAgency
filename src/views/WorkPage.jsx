'use client';

import React from 'react';
import Link from 'next/link';
import { useBooking } from '../components/ClientLayout';
import {
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Zap,
  Smartphone,
  Database,
  Search,
  Sparkles,
  Terminal,
  Activity,
  Code2,
} from 'lucide-react';

export default function WorkPage({ onOpenBooking }) {
  const { openBooking } = useBooking();
  const handleBooking = onOpenBooking || openBooking;

  return (
    <div className="pt-28 sm:pt-40 pb-32 px-4 sm:px-8 max-w-6xl mx-auto space-y-32 sm:space-y-44">
      
      {/* =========================================================
          PROLOGUE: THE PHILOSOPHY OF VERIFIABLE WORK
          ========================================================= */}
      <section className="space-y-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>[ JUGARR ARCHIVE // VERIFIABLE PRODUCTION WORK ]</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-ink leading-[1.06]">
          Real software in production. <br />
          <span className="text-charcoal-400 font-normal">
            Not conceptual Dribbble mockups.
          </span>
        </h1>

        <p className="text-lg sm:text-2xl text-charcoal-700 font-normal leading-relaxed">
          Every project in this archive represents actual client engagements and functioning systems. We do not invent fake client logos or showcase designs that cannot perform in a real browser. These platforms are engineered personally by founder Sagar Singh Rajawat to solve actual commercial requirements.
        </p>

        {/* Minimalist Proof Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-charcoal-300">
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">01 // PRODUCTION</div>
            <div className="font-display font-extrabold text-2xl text-ink">Live Systems</div>
            <div className="text-xs text-charcoal-500 font-mono">Real domains & real users</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">02 // INTEGRITY</div>
            <div className="font-display font-extrabold text-2xl text-emerald-600">Zero Juniors</div>
            <div className="text-xs text-charcoal-500 font-mono">Built directly by Sagar</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">03 // PROOF</div>
            <div className="font-display font-extrabold text-2xl text-ink">Before & After</div>
            <div className="text-xs text-charcoal-500 font-mono">Verifiable renovations</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">04 // HANDOVER</div>
            <div className="font-display font-extrabold text-2xl text-ink">100% Owned</div>
            <div className="text-xs text-charcoal-500 font-mono">Complete Git repo transfer</div>
          </div>
        </div>
      </section>


      {/* =========================================================
          CASE STORY 01: BANDAMART (LOCAL QUICK-COMMERCE)
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        {/* Story Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
              CASE STORY 01 // BANDAMART (LIVE CLIENT PROJECT)
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
              Engineering a neighborhood quick-commerce storefront.
            </h2>
          </div>
          <div className="font-mono text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-bold w-fit">
            LIVE AT BANDAMART.COM
          </div>
        </div>

        {/* The Narrative & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 text-base sm:text-lg text-charcoal-700 leading-relaxed">
          <div className="lg:col-span-7 space-y-5">
            <p>
              <strong className="text-ink">The Context:</strong> Bandamart was founded to provide neighborhood grocery delivery in Banda—offering a lightweight community alternative to massive delivery apps like Blinkit, but without aggregator commissions eating into merchant margins.
            </p>
            <p>
              <strong className="text-ink">The Challenge:</strong> Off-the-shelf site builders like Shopify or WooCommerce crumbled on mobile networks: loading times exceeded 6 seconds, checkout drawers froze, and third-party plugin bloat caused frequent shopping cart drop-offs.
            </p>
            <p className="text-charcoal-600 font-normal">
              <strong className="text-ink">The Engineering Solution:</strong> Jugarr architected a custom web application from scratch. We paired a lean, hardware-accelerated React frontend with a Node.js and MongoDB backend. Customers can search produce instantly, modify carts with zero latency, and submit orders directly into a unified dispatch queue.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4 pt-1">
            <div className="font-mono text-xs text-charcoal-500 font-bold uppercase tracking-wider">
              Delivered Architectural Specs:
            </div>
            <div className="space-y-3 text-xs sm:text-sm font-mono text-charcoal-800">
              <div className="flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Instant React Cart State (sub-second calculation)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Smartphone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>One-Handed Mobile Ergonomics & Single-Screen Order Flow</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Database className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>MongoDB Catalog Queries with Cloudinary Image CDN</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Terminal className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Automated Webhook Order Alerting for Dispatch Team</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-canvas-card border border-charcoal-200 space-y-1 font-mono text-xs text-charcoal-600 mt-4">
              <div><span className="font-bold text-ink">CLIENT:</span> Bandamart Operations</div>
              <div><span className="font-bold text-ink">ROLE:</span> Full-Stack Architecture & Development</div>
              <div><span className="font-bold text-ink">TECH:</span> React, Vite, Node.js, Express, MongoDB, Tailwind</div>
            </div>
          </div>
        </div>

        {/* Editorial Visual: Full Mockup without Cropping */}
        <div className="space-y-4 pt-4">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-charcoal-950 border border-charcoal-800 shadow-tactile-lg aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
            <img
              src="/assets/projects/bandamart/grocery_hero.png"
              alt="Bandamart E-Commerce Storefront Interface by Jugarr"
              className="w-full h-full object-contain object-center p-2 sm:p-5 opacity-95"
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-950/85 backdrop-blur-md border border-charcoal-700 text-white font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>BANDAMART.COM // PRODUCTION REACTION</span>
            </div>
          </div>

          {/* Secondary Visual Strip: Catalog & Cart Workflow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-charcoal-950 border border-charcoal-800 shadow-tactile aspect-[16/10] flex items-center justify-center">
              <img
                src="/assets/projects/bandamart/vegetables_basket.png"
                alt="Bandamart Produce Basket & Dynamic Cart"
                className="w-full h-full object-contain object-center p-2 sm:p-4 opacity-95"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-charcoal-700 text-white font-mono text-[11px]">
                Catalog & Fresh Produce Indexing
              </div>
            </div>

            <div className="rounded-2xl bg-charcoal-950 border border-charcoal-800 p-6 flex flex-col justify-between font-mono text-xs text-charcoal-300 shadow-tactile">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-charcoal-800 pb-2 text-charcoal-400">
                  <span>DISPATCH_LOG // REALTIME</span>
                  <span className="text-emerald-400">200 OK</span>
                </div>
                <p className="text-white text-sm font-bold font-display">
                  "Bandamart is designed as a small-scale community alternative to quick-commerce, tailored for local grocery delivery."
                </p>
                <p className="text-charcoal-400 text-xs">
                  Zero monthly marketplace commission retained by merchant. Sub-second feedback on mobile carts.
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-800/80 flex items-center justify-between">
                <span className="text-emerald-400 font-bold">100% Production Live</span>
                <a
                  href="https://bandamart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent font-bold flex items-center gap-1.5"
                >
                  <span>Visit bandamart.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-charcoal-500 pt-2">
            <div>
              <span className="font-bold text-ink">DEEP DIVE:</span> Complete engineering breakdown, challenges solved, and MongoDB catalog schema.
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/work/bandamart"
                className="text-accent font-bold hover:underline flex items-center gap-1"
              >
                <span>Read Full Bandamart Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          CASE STORY 02: 4 LOTUS INTERIOR (WEBSITE RENOVATION)
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        {/* Story Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
              CASE STORY 02 // 4 LOTUS INTERIOR (WEBSITE RENOVATION)
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
              Renovating luxury interior craftsmanship into digital authority.
            </h2>
          </div>
          <div className="font-mono text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-bold w-fit">
            LIVE AT 4LOTUSINTERIOR.IN
          </div>
        </div>

        {/* The Narrative & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 text-base sm:text-lg text-charcoal-700 leading-relaxed">
          <div className="lg:col-span-7 space-y-5">
            <p>
              <strong className="text-ink">The Context:</strong> 4 Lotus Interior, led by Rashid, is an interior design and architectural execution studio with years of premium residential and commercial project photography.
            </p>
            <p>
              <strong className="text-ink">The Challenge:</strong> Their legacy website failed to convey the sophistication of their work. High-resolution photos jumped across the screen due to severe Cumulative Layout Shift (CLS), visual clutter distracted high-net-worth clients, and the mobile experience was clunky.
            </p>
            <p className="text-charcoal-600 font-normal">
              <strong className="text-ink">The Engineering Solution:</strong> Jugarr executed a complete digital renovation. We salvaged all client assets, structured room categories into clear editorial portfolios (Living, Bedrooms, Modular Kitchens), and migrated the site to Next.js 15 with zero layout shift and server-rendered SEO schemas.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4 pt-1">
            <div className="font-mono text-xs text-charcoal-500 font-bold uppercase tracking-wider">
              Delivered Architectural Specs:
            </div>
            <div className="space-y-3 text-xs sm:text-sm font-mono text-charcoal-800">
              <div className="flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Zero Cumulative Layout Shift (CLS) on High-Res Galleries</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Editorial Typography & Balanced Luxury Grid</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Search className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Server-Rendered Schema.org Markup for Google Recognition</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Complete Legacy Content & URL Equity Salvage</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-canvas-card border border-charcoal-200 space-y-1 font-mono text-xs text-charcoal-600 mt-4">
              <div><span className="font-bold text-ink">CLIENT:</span> 4 Lotus Interior (Rashid)</div>
              <div><span className="font-bold text-ink">ROLE:</span> Full UI/UX Redesign & Next.js Implementation</div>
              <div><span className="font-bold text-ink">TECH:</span> Next.js 15, React 19, Tailwind CSS, Lucide React</div>
            </div>
          </div>
        </div>

        {/* Editorial Visual: Side-by-Side Before & After without Cropping */}
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-charcoal-950 border border-charcoal-800 shadow-tactile aspect-[16/10] flex items-center justify-center">
              <img
                src="/assets/projects/4lotus/before.png"
                alt="4 Lotus Interior Legacy Website Before Renovation"
                className="w-full h-full object-contain object-center p-2 sm:p-4 opacity-80 grayscale"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-900/90 border border-charcoal-700 text-charcoal-400 font-mono text-[11px] font-bold">
                BEFORE // CLUTTERED LEGACY SITE
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-charcoal-950 border border-charcoal-700 shadow-tactile aspect-[16/10] flex items-center justify-center">
              <img
                src="/assets/projects/4lotus/after.png"
                alt="4 Lotus Interior Renovated Modern Website by Jugarr"
                className="w-full h-full object-contain object-center p-2 sm:p-4 opacity-95"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white font-mono text-[11px] font-bold shadow-tactile">
                AFTER // EDITORIAL NEXT.JS 15
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-charcoal-700 text-white font-mono text-[11px]">
                4lotusinterior.in
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-charcoal-500 pt-2">
            <div>
              <span className="font-bold text-ink">DEEP DIVE:</span> Before/after visual comparisons, room showcase restructuring, and Next.js performance.
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="https://4lotusinterior.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink font-bold hover:text-accent flex items-center gap-1 transition-colors"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/work/4lotus-interior"
                className="text-accent font-bold hover:underline flex items-center gap-1"
              >
                <span>Read Full 4 Lotus Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          CASE STORY 03: DHOBIDROP (SERVICE SCHEDULING CONCEPT)
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        {/* Story Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
              CASE STORY 03 // DHOBIDROP (INTERNAL PRODUCT PROTOTYPE)
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
              Exploring zero-friction local service booking & PWA caching.
            </h2>
          </div>
          <div className="font-mono text-xs text-charcoal-500">
            [ REACT // PWA ARCHITECTURE // TAILWIND ]
          </div>
        </div>

        {/* The Narrative & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 text-base sm:text-lg text-charcoal-700 leading-relaxed">
          <div className="lg:col-span-7 space-y-5">
            <p>
              <strong className="text-ink">The Product:</strong> DhobiDrop is a self-initiated service application designed to streamline on-demand laundry and dry-cleaning scheduling for local service providers.
            </p>
            <p className="text-charcoal-600 font-normal">
              <strong className="text-ink">The Exploration:</strong> Built to validate mobile-first booking UX, service tier selection, and offline-first Progressive Web App (PWA) caching for service personnel operating in areas with variable connectivity.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-3 font-mono text-xs text-charcoal-700 pt-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>Garment counting & service tier calculation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>Pickup & delivery time slot scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>Mobile-first touch target optimization</span>
            </div>
          </div>
        </div>

        {/* Visual: Full Image without Cropping */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-charcoal-950 border border-charcoal-800 shadow-tactile-lg aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
          <img
            src="/assets/projects/dhobidrop/hero.png"
            alt="DhobiDrop Service Scheduling Interface"
            className="w-full h-full object-contain object-center p-2 sm:p-5 opacity-95"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-charcoal-700 text-white font-mono text-[11px]">
            INTERNAL PRODUCT ARCHIVE // DHOBIDROP
          </div>
        </div>
      </section>


      {/* =========================================================
          CHAPTER 04: THE ENGINEERING TRUTH (WHY CLIENTS CHOOSE US)
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        <div className="space-y-2 max-w-2xl">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            CHAPTER 04 // THE ENGINEERING TRUTH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            Why our client projects succeed.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="space-y-3 pb-6 border-b md:border-b-0 md:border-r border-charcoal-300 pr-6">
            <div className="font-mono text-xs text-accent font-bold">01 // VERIFIABLE</div>
            <h3 className="font-display font-extrabold text-xl text-ink">Real URLs & Live Proof</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              We provide real live URLs like bandamart.com and 4lotusinterior.in that you can test on your phone right now. No fabricated agency portfolios.
            </p>
          </div>

          <div className="space-y-3 pb-6 border-b md:border-b-0 md:border-r border-charcoal-300 pr-6">
            <div className="font-mono text-xs text-accent font-bold">02 // INDEPENDENCE</div>
            <h3 className="font-display font-extrabold text-xl text-ink">100% Code Handover</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              You own every line of code, your database schema, and deployment setups. Zero recurring proprietary platform subscriptions or hostage data.
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-xs text-accent font-bold">03 // DIRECT CRAFT</div>
            <h3 className="font-display font-extrabold text-xl text-ink">Direct Senior Engineering</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Every detail is coded directly with founder Sagar Singh Rajawat. Direct communication, fast turnaround sprints, and total accountability.
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
            <span>NOW SCHEDULING NEXT CLIENT SPRINT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            Have a project that requires real engineering?
          </h2>

          <p className="text-base sm:text-xl text-charcoal-700 font-normal leading-relaxed">
            Collaborate directly with Sagar Singh Rajawat. Let’s review your existing website or discuss your product goals and outline a direct, transparent sprint.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={handleBooking}
              className="px-8 py-4 bg-ink text-white hover:bg-accent rounded-full font-display font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-tactile"
            >
              <span>Book Strategy Session with Sagar</span>
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
