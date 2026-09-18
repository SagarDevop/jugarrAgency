'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AGENCY_SERVICES } from '../data/agencyData';

const dedicatedSlugMap = {
  ecommerce: '/services/ecommerce-websites',
  'business-websites': '/services/business-websites',
  'full-stack-web-apps': '/services/full-stack-web-apps',
};
import {
  ShoppingCart,
  Building2,
  Code2,
  Layout,
  Palette,
  Search,
  Wrench,
  Megaphone,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  Check,
  Terminal,
  Laptop,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
} from 'lucide-react';

const serviceIcons = {
  ecommerce: ShoppingCart,
  'business-websites': Building2,
  'full-stack-web-apps': Code2,
  'landing-pages': Layout,
  'ui-ux-design': Palette,
  seo: Search,
  'website-maintenance': Wrench,
  'digital-marketing': Megaphone,
  'custom-web-solutions': Cpu,
};

export default function ModernServicesShowcase({ onOpenBooking, isPage = false }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeServiceId, setActiveServiceId] = useState('ecommerce');

  // Interactive micro-states for capability simulators
  const [cartCount, setCartCount] = useState(1);
  const [activeDevice, setActiveDevice] = useState('desktop');
  const [copiedToken, setCopiedToken] = useState('Ink');

  const categories = [
    { id: 'all', label: 'All 9 Capabilities' },
    { id: 'E-Commerce', label: 'E-Commerce' },
    { id: 'Web', label: 'Websites & Landing Pages' },
    { id: 'Full-Stack', label: 'Full-Stack Web Apps' },
    { id: 'Design', label: 'UI/UX & Design' },
    { id: 'SEO', label: 'Technical SEO & Speed' },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? AGENCY_SERVICES
      : AGENCY_SERVICES.filter((s) => s.category === selectedCategory);

  const activeService =
    AGENCY_SERVICES.find((s) => s.id === activeServiceId) || AGENCY_SERVICES[0];
  const ActiveIcon = serviceIcons[activeService.id] || Code2;

  // Render bespoke interactive capability visual for active service
  const renderInteractiveVisual = (service) => {
    switch (service.id) {
      case 'ecommerce':
        return (
          <div className="bg-charcoal-900 text-white p-6 rounded-2xl border border-charcoal-700 shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[300px]">
            <div className="flex items-center justify-between border-b border-charcoal-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold tracking-wider text-charcoal-300">LIVE CHECKOUT FLOW</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-charcoal-800 text-emerald-400 font-mono text-[11px] font-bold">
                0.4s Instant Cart
              </span>
            </div>

            <div className="my-4 p-4 rounded-xl bg-charcoal-800/80 border border-charcoal-700 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-white">Custom Brand Storefront Item</div>
                  <div className="font-mono text-xs text-charcoal-400">SKU: JG-STORE-01</div>
                </div>
                <div className="font-mono font-bold text-base text-accent">₹4,999</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-charcoal-700/60">
                <div className="flex items-center gap-2 bg-charcoal-900 px-3 py-1.5 rounded-lg border border-charcoal-700">
                  <button
                    type="button"
                    onClick={() => setCartCount(Math.max(1, cartCount - 1))}
                    className="text-charcoal-400 hover:text-white font-mono text-xs font-bold px-1"
                  >
                    -
                  </button>
                  <span className="font-mono text-xs font-bold text-white px-2">{cartCount}</span>
                  <button
                    type="button"
                    onClick={() => setCartCount(cartCount + 1)}
                    className="text-charcoal-400 hover:text-white font-mono text-xs font-bold px-1"
                  >
                    +
                  </button>
                </div>

                <div className="font-mono text-xs text-charcoal-300">
                  Total: <span className="font-bold text-white">₹{(4999 * cartCount).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-charcoal-400 pt-2 border-t border-charcoal-800">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Check className="w-3.5 h-3.5" /> Razorpay / Stripe
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Check className="w-3.5 h-3.5" /> Mobile-Optimized
              </div>
            </div>
          </div>
        );

      case 'business-websites':
        return (
          <div className="bg-surface p-6 rounded-2xl border border-charcoal-300 shadow-lg h-full min-h-[300px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-charcoal-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="font-mono text-xs font-bold text-ink">RESPONSIVE VIEWPORT ENGINE</span>
              </div>
              <div className="flex items-center gap-1 bg-charcoal-100 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setActiveDevice('desktop')}
                  className={`p-1.5 rounded transition-colors ${activeDevice === 'desktop' ? 'bg-white shadow-xs text-ink' : 'text-charcoal-500'}`}
                  title="Desktop View"
                >
                  <Laptop className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDevice('mobile')}
                  className={`p-1.5 rounded transition-colors ${activeDevice === 'mobile' ? 'bg-white shadow-xs text-ink' : 'text-charcoal-500'}`}
                  title="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="my-4 p-4 rounded-xl bg-charcoal-50 border border-charcoal-200 text-center space-y-2">
              <div className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider">
                {activeDevice === 'desktop' ? 'DESKTOP 1440PX FLUID' : 'MOBILE 390PX TOUCH FIRST'}
              </div>
              <div className="font-display font-bold text-base text-ink">
                {activeDevice === 'desktop' ? 'High-Impact Brand Identity' : 'Thumb-Friendly Navigation'}
              </div>
              <div className="text-xs text-charcoal-600 max-w-xs mx-auto leading-relaxed">
                {activeDevice === 'desktop'
                  ? 'Expansive visual hierarchy, elegant typographic balance, and smooth desktop micro-interactions.'
                  : 'Sticky action bars, optimized tap targets, and instantaneous page transitions.'}
              </div>
            </div>

            <div className="flex items-center justify-between font-mono text-xs text-charcoal-600 pt-2 border-t border-charcoal-200">
              <span className="flex items-center gap-1 text-emerald-600 font-bold">
                <Check className="w-3.5 h-3.5" /> 99.9% Uptime SLA
              </span>
              <span className="font-bold text-ink">FCP &lt; 0.6s</span>
            </div>
          </div>
        );

      case 'full-stack-web-apps':
        return (
          <div className="bg-charcoal-950 text-emerald-400 p-6 rounded-2xl border border-charcoal-800 shadow-xl h-full min-h-[300px] font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-charcoal-800 pb-3 text-charcoal-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent" />
                <span className="text-white font-bold">MERN ARCHITECTURE TERMINAL</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-800 text-emerald-400">
                ACTIVE
              </span>
            </div>

            <div className="space-y-2 my-4 bg-charcoal-900/90 p-4 rounded-xl border border-charcoal-800">
              <div className="text-charcoal-500">// Real-time API & Database pipeline</div>
              <div className="text-white font-bold">
                POST <span className="text-emerald-400">/api/v1/auth/session</span> <span className="text-charcoal-400">→ 200 OK</span>
              </div>
              <div className="text-white font-bold">
                GET <span className="text-emerald-400">/api/v1/workflows</span> <span className="text-charcoal-400">→ 14ms (Mongo Indexed)</span>
              </div>
              <div className="text-charcoal-400 text-[11px] pt-1">
                Stack: <span className="text-white font-bold">React 19 + Node.js + Express + MongoDB</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-charcoal-400 pt-2 border-t border-charcoal-800">
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> JWT Auth Verified
              </span>
              <span>Zero Template Bloat</span>
            </div>
          </div>
        );

      case 'ui-ux-design':
        return (
          <div className="bg-surface p-6 rounded-2xl border border-charcoal-300 shadow-lg h-full min-h-[300px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-charcoal-200 pb-3">
              <span className="font-mono text-xs font-bold text-ink">TACTILE DESIGN SYSTEM TOKENS</span>
              <span className="font-mono text-[10px] text-charcoal-500">8pt Spatial Grid</span>
            </div>

            <div className="my-4 space-y-3">
              <div className="text-xs font-mono text-charcoal-600">Click a palette token to preview:</div>
              <div className="flex items-center gap-2">
                {[
                  { name: 'Ink', hex: '#111110', bg: 'bg-ink text-white' },
                  { name: 'Accent', hex: '#E53935', bg: 'bg-accent text-white' },
                  { name: 'Paper', hex: '#FAF9F6', bg: 'bg-charcoal-100 text-ink border border-charcoal-300' },
                  { name: 'Emerald', hex: '#10B981', bg: 'bg-emerald-500 text-white' },
                ].map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setCopiedToken(color.name)}
                    className={`flex-1 py-2 px-1 rounded-xl text-center font-mono text-[10px] font-bold transition-transform hover:scale-105 ${color.bg} ${
                      copiedToken === color.name ? 'ring-2 ring-accent' : ''
                    }`}
                  >
                    <div>{color.name}</div>
                    <div className="opacity-80 text-[9px]">{color.hex}</div>
                  </button>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-charcoal-50 border border-charcoal-200 text-center font-mono text-xs text-charcoal-700">
                Token Active: <span className="font-bold text-ink">{copiedToken}</span> — Standardized across typography, surfaces & interactions.
              </div>
            </div>

            <div className="flex items-center justify-between font-mono text-xs text-charcoal-600 pt-2 border-t border-charcoal-200">
              <span>Interactive Figma to React</span>
              <span className="font-bold text-ink">Component Library</span>
            </div>
          </div>
        );

      case 'seo':
        return (
          <div className="bg-charcoal-900 text-white p-6 rounded-2xl border border-charcoal-700 shadow-xl h-full min-h-[300px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-charcoal-800 pb-3">
              <span className="font-mono text-xs font-bold text-emerald-400">GOOGLE LIGHTHOUSE AUDIT</span>
              <span className="font-mono text-[10px] text-charcoal-400">Core Web Vitals</span>
            </div>

            <div className="my-4 grid grid-cols-4 gap-2 text-center">
              {[
                { score: '100', label: 'Performance', color: 'text-emerald-400' },
                { score: '100', label: 'Accessibility', color: 'text-emerald-400' },
                { score: '100', label: 'Best Practice', color: 'text-emerald-400' },
                { score: '100', label: 'SEO', color: 'text-emerald-400' },
              ].map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-charcoal-800 border border-charcoal-700">
                  <div className={`font-display font-extrabold text-lg ${item.color}`}>{item.score}</div>
                  <div className="font-mono text-[9px] text-charcoal-400 mt-0.5 truncate">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-charcoal-300 pt-2 border-t border-charcoal-800">
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Schema JSON-LD
              </span>
              <span>Clean Indexing</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-charcoal-950 text-white p-6 rounded-2xl border border-charcoal-800 shadow-xl h-full min-h-[300px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-charcoal-800 pb-3">
              <span className="font-mono text-xs font-bold text-accent">BESPOKE INTEGRATION ARCHITECTURE</span>
              <span className="font-mono text-[10px] text-emerald-400">Founder-Led</span>
            </div>

            <div className="my-4 p-4 rounded-xl bg-charcoal-900/90 border border-charcoal-800 space-y-2">
              <div className="font-mono text-[10px] text-charcoal-400">CORE HIGHLIGHTS:</div>
              <div className="font-display font-bold text-base text-white">{service.title}</div>
              <div className="text-xs text-charcoal-300 leading-relaxed">
                {service.description}
              </div>
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-charcoal-400 pt-2 border-t border-charcoal-800">
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Direct Technical Architect
              </span>
              <span>100% Owned Code</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full space-y-12">
      {/* SECTION 1: INTERACTIVE CAPABILITY SPOTLIGHT STUDIO */}
      <div className="rounded-3xl border border-charcoal-300 bg-surface shadow-tactile-lg p-6 sm:p-8 lg:p-10">
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-charcoal-200">
          <div>
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
              INTERACTIVE CAPABILITY STUDIO
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mt-1">
              Explore how each service is engineered.
            </h3>
          </div>

          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-100 border border-charcoal-200 font-mono text-xs text-charcoal-700 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Click any service to inspect
          </span>
        </div>

        {/* Split Studio: Left Service Selector / Right Active Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (5/12): Interactive Service Menu */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              {AGENCY_SERVICES.map((srv) => {
                const SrvIcon = serviceIcons[srv.id] || Code2;
                const isActive = srv.id === activeService.id;

                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setActiveServiceId(srv.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? 'bg-ink text-white border-ink shadow-sm translate-x-1'
                        : 'bg-surface hover:bg-charcoal-50 border-charcoal-200 text-charcoal-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-accent text-white'
                            : 'bg-charcoal-100 text-charcoal-700 group-hover:bg-charcoal-200'
                        }`}
                      >
                        <SrvIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-sm leading-tight">
                          {srv.title}
                        </div>
                        <div
                          className={`font-mono text-[11px] ${
                            isActive ? 'text-charcoal-300' : 'text-charcoal-500'
                          }`}
                        >
                          {srv.tag}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-charcoal-800 text-accent'
                          : 'bg-charcoal-100 text-charcoal-600'
                      }`}
                    >
                      {srv.step}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (7/12): Live Capability Stage with Visual */}
          <div className="lg:col-span-7 bg-canvas-card rounded-2xl border border-charcoal-200 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Header Bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-accent font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ACTIVE MODULE // {activeService.step}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface border border-charcoal-200 text-charcoal-800 font-mono text-xs font-bold">
                  {activeService.tag}
                </span>
              </div>

              <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
                {activeService.title}
              </h4>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed mt-2">
                {activeService.description}
              </p>

              {/* Visual Demo */}
              <div className="my-6">
                {renderInteractiveVisual(activeService)}
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2 border-t border-charcoal-200 pt-4">
                <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>DIRECT DELIVERABLES INCLUDED:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeService.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-mono text-charcoal-700">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA action bar */}
            <div className="pt-6 border-t border-charcoal-200 flex flex-wrap sm:flex-nowrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (onOpenBooking) onOpenBooking();
                }}
                className="flex-1 py-3 px-5 bg-ink text-white hover:bg-accent font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Start {activeService.title} Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {dedicatedSlugMap[activeService.id] && (
                <Link
                  href={dedicatedSlugMap[activeService.id]}
                  className="py-3 px-4 rounded-xl border border-charcoal-300 hover:border-accent text-ink hover:text-accent font-mono text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shrink-0 bg-surface shadow-sm"
                >
                  <span>Detailed Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: THE 9 CAPABILITIES ARCHITECTURAL BLUEPRINT GRID */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-charcoal-200">
          <div>
            <div className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
              [ COMPLETE MATRIX // ALL CAPABILITIES ]
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mt-1">
              Complete scope of services.
            </h3>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full font-mono text-xs font-bold whitespace-nowrap transition-all border ${
                  selectedCategory === cat.id
                    ? 'bg-ink text-white border-ink shadow-sm'
                    : 'bg-surface text-charcoal-600 border-charcoal-200 hover:border-charcoal-400 hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((srv) => {
            const SrvIcon = serviceIcons[srv.id] || Code2;
            const isSelected = srv.id === activeService.id;

            return (
              <div
                key={srv.id}
                onClick={() => setActiveServiceId(srv.id)}
                className={`p-7 sm:p-8 rounded-3xl border bg-surface shadow-tactile hover:shadow-tactile-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'border-accent ring-2 ring-accent/20'
                    : 'border-charcoal-300 hover:border-charcoal-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-charcoal-100 flex items-center justify-center text-ink group-hover:bg-accent group-hover:text-white transition-colors">
                      <SrvIcon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-charcoal-100 text-charcoal-700 font-bold border border-charcoal-200">
                      {srv.step}
                    </span>
                  </div>

                  <div className="font-mono text-xs text-charcoal-500 font-semibold mb-1">
                    {srv.tag}
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold font-display text-ink mb-2 leading-snug group-hover:text-accent transition-colors">
                    {srv.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2 border-t border-charcoal-200 pt-4">
                    {srv.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-mono text-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-charcoal-200 flex items-center justify-between font-mono text-xs">
                  <span className="text-charcoal-500 font-medium">Click to inspect</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenBooking) onOpenBooking();
                    }}
                    className="text-ink font-bold group-hover:text-accent flex items-center gap-1 transition-colors"
                  >
                    <span>Start Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: FOUNDER TECHNICAL ASSURANCE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {[
          {
            icon: Code2,
            title: '100% Hand-Crafted Code',
            desc: 'Built cleanly with React 19 & Next.js. Zero sluggish multi-plugin site builders.',
          },
          {
            icon: Zap,
            title: '100/100 Core Web Vitals',
            desc: 'Instant first contentful paint, zero layout shifts, and search engine optimization.',
          },
          {
            icon: ShieldCheck,
            title: 'Direct Founder Execution',
            desc: 'Work directly with Sagar — your technical architect, not junior contractors.',
          },
          {
            icon: Layers,
            title: '100% Code Ownership',
            desc: 'Complete source code repository handover with zero proprietary platform lock-in.',
          },
        ].map((item, idx) => {
          const ItemIcon = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface border border-charcoal-300 shadow-xs space-y-2"
            >
              <div className="w-9 h-9 rounded-xl bg-charcoal-100 flex items-center justify-center text-accent mb-3">
                <ItemIcon className="w-5 h-5" />
              </div>
              <div className="font-display font-bold text-sm text-ink">{item.title}</div>
              <p className="text-xs text-charcoal-600 leading-relaxed font-mono">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
