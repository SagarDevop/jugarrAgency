'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Check,
  ShieldCheck,
  Code2,
  ExternalLink,
  Layers,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { useBooking } from '../components/ClientLayout';

export default function ServiceDetailPage({ serviceData }) {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState(0);

  if (!serviceData) return null;

  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 font-mono text-xs text-charcoal-500 mb-8">
        <Link href="/" className="hover:text-ink transition-colors">Home</Link>
        <span>/</span>
        <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
        <span>/</span>
        <span className="text-accent font-semibold">{serviceData.title}</span>
      </div>

      {/* Header Section */}
      <div className="max-w-4xl space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span>[ {serviceData.code || 'SERVICE MODULE'} // FOUNDER-LED ARCHITECTURE ]</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-ink leading-[1.06]">
          {serviceData.headline}
        </h1>

        <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-normal pt-2 max-w-3xl">
          {serviceData.longDescription}
        </p>

        {/* Founder Direct Guarantee Pill */}
        <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-charcoal-700">
          <span className="px-3.5 py-1.5 rounded-full bg-surface border border-charcoal-300 font-bold flex items-center gap-2 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Hand-crafted by Sagar Singh Rajawat • Zero Template Bloat</span>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-surface border border-charcoal-300 font-bold text-charcoal-600">
            {serviceData.timeline || '2–4 Week Delivery'}
          </span>
        </div>
      </div>

      {/* 2-Column Split: Who It's For & Problems Solved */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Who It's For */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile flex flex-col justify-between">
          <div className="space-y-4">
            <div className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
              IDEAL ENGAGEMENT // TARGET PROFILE
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
              Who this service is built for.
            </h2>
            <ul className="space-y-3 pt-2">
              {serviceData.targetAudience?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-charcoal-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Problems Solved */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile flex flex-col justify-between">
          <div className="space-y-4">
            <div className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
              THE PAIN POINTS // PROBLEMS RESOLVED
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
              Common bottlenecks we eliminate.
            </h2>
            <ul className="space-y-3 pt-2">
              {serviceData.problemsSolved?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-charcoal-700">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-accent font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Core Deliverables & Architecture Grid */}
      <div className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b border-charcoal-200 gap-3">
          <div>
            <div className="font-mono text-xs text-accent font-bold uppercase">
              DELIVERABLE SCOPE // TECHNICAL CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-ink mt-1">
              What you receive upon project completion.
            </h2>
          </div>
          <span className="font-mono text-xs text-charcoal-500">
            100% owned, unencumbered source code
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.deliverablesDetailed?.map((deliv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile flex flex-col justify-between space-y-4 hover:shadow-tactile-lg transition-all"
            >
              <div className="space-y-2">
                <div className="font-mono text-xs font-bold text-accent">0{idx + 1} // MODULE</div>
                <h3 className="font-display font-bold text-lg text-ink">{deliv.title}</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-sans">{deliv.desc}</p>
              </div>

              <div className="pt-3 border-t border-charcoal-200 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Project Case Study Feature Card */}
      {serviceData.caseStudy && (
        <div className="mb-16 p-8 sm:p-12 rounded-4xl bg-ink text-white shadow-tactile-lg border border-charcoal-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-blueprint-grid-dark opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>REAL-WORLD APPLICATION // VERIFIED PROOF</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
                {serviceData.caseStudy.title}
              </h2>

              <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed max-w-xl">
                {serviceData.caseStudy.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href={serviceData.caseStudy.caseStudyUrl}
                  className="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-full font-display font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                {serviceData.caseStudy.liveUrl && (
                  <a
                    href={serviceData.caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-charcoal-900 border border-charcoal-700 hover:border-charcoal-500 text-white rounded-full font-mono text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-charcoal-700 shadow-2xl aspect-[16/10]">
              <img
                src={serviceData.caseStudy.image}
                alt={serviceData.caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Tech Stack & Execution Workflow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
        {/* Technologies Used */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile space-y-4">
          <div className="font-mono text-xs text-accent font-bold uppercase">
            TECHNOLOGY ECOSYSTEM
          </div>
          <h3 className="text-2xl font-bold font-display text-ink">
            Engineered with modern tools.
          </h3>
          <p className="text-sm text-charcoal-600 leading-relaxed font-sans">
            We do not rely on bloated CMS site-builders or fragile multi-plugin architectures. Your product is engineered with verified modern standards:
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {serviceData.techStack?.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-charcoal-100 text-charcoal-800 font-mono text-xs font-bold border border-charcoal-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile space-y-4">
          <div className="font-mono text-xs text-accent font-bold uppercase">
            EXECUTION PROCESS
          </div>
          <h3 className="text-2xl font-bold font-display text-ink">
            How we take it from idea to launch.
          </h3>

          <div className="space-y-3 pt-2">
            {[
              { step: '01', title: 'Requirements & Scope', desc: 'Direct discovery call with Sagar to establish factual requirements and deadlines.' },
              { step: '02', title: 'Tactile UI/UX Design', desc: 'Custom interface wireframes and component styling tailored to your business.' },
              { step: '03', title: 'Full-Stack Development', desc: 'Clean, modular React/Next.js/Node.js engineering with responsive testing.' },
              { step: '04', title: 'Deployment & Launch', desc: 'Production deployment, domain setup, and code handover with documentation.' },
            ].map((st) => (
              <div key={st.step} className="flex items-start gap-3 p-2.5 rounded-xl bg-canvas border border-charcoal-200/80">
                <span className="font-mono font-bold text-xs text-accent bg-surface px-2 py-0.5 rounded border border-charcoal-300">
                  {st.step}
                </span>
                <div>
                  <div className="font-display font-bold text-sm text-ink">{st.title}</div>
                  <div className="font-sans text-xs text-charcoal-600">{st.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service-Specific FAQ */}
      {serviceData.faq && serviceData.faq.length > 0 && (
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="font-mono text-xs text-accent font-bold uppercase">
              CLARITY & QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-ink">
              Frequently Asked Questions.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {serviceData.faq.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-charcoal-300 bg-surface shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base text-ink hover:text-accent transition-colors"
                  >
                    <span>{item.q}</span>
                    <span className="p-1 rounded-full bg-charcoal-100 text-ink shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-charcoal-600 leading-relaxed border-t border-charcoal-100">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom CTA Card */}
      <div className="p-8 sm:p-14 rounded-4xl bg-surface border-2 border-charcoal-300 shadow-tactile-lg flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <div className="font-mono text-xs text-accent font-bold uppercase">
            READY TO START YOUR PROJECT?
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-ink">
            Let's build your {serviceData.title.toLowerCase()} together.
          </h3>
          <p className="text-sm text-charcoal-600 font-sans">
            Direct collaboration with founder Sagar Singh Rajawat. Transparent timelines and clean code guaranteed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={openBooking}
            className="w-full sm:w-auto px-7 py-3.5 bg-ink hover:bg-accent text-white rounded-full font-display font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-tactile"
          >
            <span>Book a Strategy Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <Link
            href="/services"
            className="w-full sm:w-auto px-5 py-3.5 bg-canvas border border-charcoal-300 hover:bg-charcoal-100 text-ink rounded-full font-mono text-xs font-bold transition-colors text-center"
          >
            All Capabilities
          </Link>
        </div>
      </div>
    </div>
  );
}
