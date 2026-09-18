'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Check,
  ShieldCheck,
  Layers,
  Code2,
  Calendar,
  Sparkles,
  Eye,
  RefreshCw,
} from 'lucide-react';
import { useBooking } from '../components/ClientLayout';

export default function CaseStudyDetailPage({ projectData }) {
  const { openBooking } = useBooking();
  const [showBefore, setShowBefore] = useState(false);

  if (!projectData) return null;

  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 font-mono text-xs text-charcoal-500 mb-8">
        <Link href="/" className="hover:text-ink transition-colors">Home</Link>
        <span>/</span>
        <Link href="/work" className="hover:text-ink transition-colors">Work</Link>
        <span>/</span>
        <span className="text-accent font-semibold">{projectData.title}</span>
      </div>

      {/* Header Section */}
      <div className="max-w-4xl space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>[ VERIFIED CASE STUDY // {projectData.typeBadge || 'CLIENT WORK'} ]</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-ink leading-[1.06]">
          {projectData.headline || projectData.title}
        </h1>

        <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-normal pt-2 max-w-3xl">
          {projectData.longDescription || projectData.description}
        </p>

        {/* Project Meta Metrics Bar */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-surface border border-charcoal-200">
            <div className="text-charcoal-500 text-[10px] uppercase">CLIENT</div>
            <div className="font-bold text-ink text-sm mt-0.5">{projectData.client}</div>
          </div>
          <div className="p-4 rounded-2xl bg-surface border border-charcoal-200">
            <div className="text-charcoal-500 text-[10px] uppercase">ROLE</div>
            <div className="font-bold text-ink text-sm mt-0.5">{projectData.role}</div>
          </div>
          <div className="p-4 rounded-2xl bg-surface border border-charcoal-200">
            <div className="text-charcoal-500 text-[10px] uppercase">STATUS</div>
            <div className="font-bold text-emerald-600 text-sm mt-0.5">{projectData.status}</div>
          </div>
          <div className="p-4 rounded-2xl bg-surface border border-charcoal-200">
            <div className="text-charcoal-500 text-[10px] uppercase">DELIVERABLE</div>
            {projectData.deliverableUrl && projectData.deliverableUrl !== '#' ? (
              <a
                href={projectData.deliverableUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent hover:underline flex items-center gap-1 text-sm mt-0.5"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="font-bold text-charcoal-700 text-sm mt-0.5">Verified Internal</div>
            )}
          </div>
        </div>
      </div>

      {/* Main Showcase Visual Asset */}
      <div className="mb-16 rounded-4xl border border-charcoal-300 bg-surface overflow-hidden shadow-tactile-lg relative">
        {projectData.beforeImage ? (
          <div>
            {/* Before / After Toggle Controls */}
            <div className="p-4 bg-charcoal-50 border-b border-charcoal-200 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-ink">VISUAL EVIDENCE:</span>
                <span className="text-charcoal-600">
                  {showBefore ? 'Legacy Site State (Before)' : 'Modern Next.js Architecture (After)'}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-charcoal-200 p-1 rounded-full">
                <button
                  type="button"
                  onClick={() => setShowBefore(false)}
                  className={`px-3.5 py-1 rounded-full font-bold text-[11px] transition-all ${
                    !showBefore ? 'bg-ink text-white shadow-sm' : 'text-charcoal-700 hover:text-ink'
                  }`}
                >
                  Modern (After)
                </button>
                <button
                  type="button"
                  onClick={() => setShowBefore(true)}
                  className={`px-3.5 py-1 rounded-full font-bold text-[11px] transition-all ${
                    showBefore ? 'bg-ink text-white shadow-sm' : 'text-charcoal-700 hover:text-ink'
                  }`}
                >
                  Legacy (Before)
                </button>
              </div>
            </div>

            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-charcoal-950 overflow-hidden flex items-center justify-center">
              <img
                src={showBefore ? projectData.beforeImage : projectData.image}
                alt={`${projectData.title} - ${showBefore ? 'Before' : 'After'}`}
                className="w-full h-full object-contain object-center p-2 sm:p-4 transition-all duration-300"
              />
            </div>
          </div>
        ) : (
          <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-charcoal-950 overflow-hidden flex items-center justify-center">
            <img
              src={projectData.image}
              alt={projectData.title}
              className="w-full h-full object-contain object-center p-2 sm:p-4"
            />
          </div>
        )}
      </div>

      {/* 2-Column Split: The Challenge & The Engineering Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* The Problem */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile space-y-4">
          <div className="font-mono text-xs text-accent font-bold uppercase">
            01 // THE CHALLENGE & REQUIREMENTS
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
            What the client needed to solve.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
            {projectData.challengeText}
          </p>
          <ul className="space-y-2.5 pt-2 font-mono text-xs text-charcoal-700">
            {projectData.challengePoints?.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-accent font-bold">✕</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* The Solution */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile space-y-4">
          <div className="font-mono text-xs text-emerald-600 font-bold uppercase">
            02 // THE ENGINEERING SOLUTION
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
            How Jugarr executed the build.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
            {projectData.solutionText}
          </p>
          <ul className="space-y-2.5 pt-2 font-mono text-xs text-charcoal-700">
            {projectData.solutionPoints?.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Key Features Delivered */}
      <div className="mb-16">
        <div className="pb-4 mb-8 border-b border-charcoal-200">
          <div className="font-mono text-xs text-accent font-bold uppercase">
            FUNCTIONAL DELIVERABLES // WHAT WAS BUILT
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-ink mt-1">
            Delivered features & engineering capabilities.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.featuresList?.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-[10px] font-bold text-accent mb-1">
                  FEATURE 0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-base text-ink">{feat.title}</h3>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">{feat.desc}</p>
              </div>

              <div className="pt-3 border-t border-charcoal-100 flex items-center gap-1 text-[11px] font-mono text-emerald-700">
                <Check className="w-3.5 h-3.5" />
                <span>Verified in Production</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack Badges */}
      <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile mb-16">
        <div className="max-w-2xl space-y-2 mb-6">
          <div className="font-mono text-xs text-accent font-bold uppercase">
            TECHNOLOGY STACK
          </div>
          <h3 className="text-2xl font-bold font-display text-ink">
            Frameworks and libraries utilized.
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Every technology in this project was selected for speed, maintainability, and clean responsive rendering:
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {projectData.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-charcoal-100 border border-charcoal-200 text-charcoal-800 font-mono text-xs font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Services Links */}
      <div className="p-8 sm:p-12 rounded-4xl bg-ink text-white shadow-tactile-lg flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <div className="font-mono text-xs text-accent font-bold uppercase">
            WANT SIMILAR RESULTS?
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold">
            Need a clean web solution like this for your business?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-300 font-sans">
            Work directly with founder Sagar Singh Rajawat. Direct senior sprint allocation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={openBooking}
            className="w-full sm:w-auto px-7 py-3.5 bg-accent hover:bg-accent-dark text-white rounded-full font-display font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <Link
            href="/work"
            className="w-full sm:w-auto px-5 py-3.5 bg-charcoal-900 border border-charcoal-700 hover:border-charcoal-500 text-white rounded-full font-mono text-xs font-bold transition-colors text-center"
          >
            Back to All Work
          </Link>
        </div>
      </div>
    </div>
  );
}
