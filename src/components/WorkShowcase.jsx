'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '../data/agencyData';

const caseStudySlugMap = {
  'work-bandamart': '/work/bandamart',
  'work-4lotus': '/work/4lotus-interior',
};
import {
  Sparkles,
  Globe,
  User,
  ArrowUpRight,
  Eye,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

export default function WorkShowcase({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  const [beforeAfterState, setBeforeAfterState] = useState({});

  const categories = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'client', label: 'Client Work', icon: Globe },
    { id: 'personal', label: 'Personal Projects', icon: User },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === activeCategory);

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      setTimeout(() => {
        const el = document.getElementById(`project-card-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 60);
    }
  };

  const toggleBeforeAfter = (id, e) => {
    if (e) e.stopPropagation();
    setBeforeAfterState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="work" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-charcoal-200">
        <div className="space-y-3 max-w-2xl">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            [ 02 // SELECTED WORK & PROOF ]
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-ink">
            Selected work.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Real client implementations and demonstrable personal web applications built by Sagar. Clearly distinguished, factually documented, and verifiable online.
          </p>
        </div>

        {/* Factual Authenticity Pills */}
        <div className="font-mono text-xs text-charcoal-700 mt-4 md:mt-0 flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="px-3 py-1.5 rounded-full bg-surface border border-charcoal-200 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Client Work & Personal Projects
          </span>
          <span className="px-3 py-1.5 rounded-full bg-surface border border-charcoal-200 font-bold">
            Verified Live URLs
          </span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                isActive
                  ? 'bg-ink text-white border-ink shadow-sm'
                  : 'bg-surface text-charcoal-700 border-charcoal-200 hover:border-charcoal-400 hover:bg-charcoal-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {filteredProjects.map((study) => {
          const isExpanded = expandedId === study.id;
          const isBeforeActive = !!beforeAfterState[study.id];

          return (
            <div
              key={study.id}
              id={`project-card-${study.id}`}
              className={`relative rounded-3xl border bg-surface shadow-tactile transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                isExpanded
                  ? 'col-span-1 md:col-span-2 lg:col-span-3 border-accent ring-2 ring-accent/30 shadow-tactile-lg'
                  : 'col-span-1 border-charcoal-300 hover:border-charcoal-400 hover:shadow-tactile-lg flex flex-col justify-between'
              }`}
            >
              {isExpanded ? (
                /* EXPANDED STATE (IN-PLACE IN THAT CARD ITSELF): Left-Right on PC, Vertical Stack on Mobile */
                <div className="p-6 sm:p-8 animate-expandFade">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
                    {/* LEFT COLUMN: Media Preview, Before/After & Telemetry */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-between space-y-4">
                      <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-2xl bg-charcoal-100 overflow-hidden shadow-inner border border-charcoal-200">
                        <img
                          src={
                            isBeforeActive && study.beforeImage
                              ? study.beforeImage
                              : study.image
                          }
                          alt={study.title}
                          className="w-full h-full object-cover transition-all duration-500"
                        />

                        {/* Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span
                            className={`px-3 py-1 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                              study.category === 'client'
                                ? 'bg-ink text-white'
                                : 'bg-amber-100 text-amber-950 border border-amber-300'
                            }`}
                          >
                            {study.typeBadge}
                          </span>
                        </div>

                        {/* Before/After Toggle on Image if available */}
                        {study.beforeImage && (
                          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between p-2.5 rounded-xl bg-charcoal-950/85 backdrop-blur-md text-white font-mono text-xs">
                            <span className="truncate pr-2">
                              {isBeforeActive
                                ? 'Pre-Renovation View'
                                : 'Redesigned Interface'}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => toggleBeforeAfter(study.id, e)}
                              className="px-3 py-1 bg-accent hover:bg-accent-dark text-white rounded-lg font-bold text-xs transition-colors shrink-0"
                            >
                              {isBeforeActive ? 'Show After' : 'Show Before'}
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Telemetry Panel */}
                      <div className="p-4 rounded-2xl bg-canvas-card border border-charcoal-200 text-xs font-mono space-y-1.5">
                        <div>
                          <span className="font-bold text-charcoal-800">CLIENT:</span>{' '}
                          {study.client}
                        </div>
                        <div>
                          <span className="font-bold text-charcoal-800">ROLE:</span>{' '}
                          {study.role}
                        </div>
                        <div>
                          <span className="font-bold text-charcoal-800">SCOPE:</span>{' '}
                          {study.scope}
                        </div>
                        <div>
                          <span className="font-bold text-charcoal-800">STATUS:</span>{' '}
                          {study.status}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Narrative, Highlights, Tech Stack & Action Buttons */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-between space-y-5">
                      <div>
                        {/* Top Bar with Client & Close Action */}
                        <div className="flex items-center justify-between font-mono text-xs text-charcoal-500 mb-2">
                          <span className="font-bold text-ink uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            CASE STUDY // {study.client}
                          </span>
                          <button
                            type="button"
                            onClick={() => toggleExpand(study.id)}
                            className="px-3 py-1.5 rounded-full bg-charcoal-100 hover:bg-charcoal-200 text-charcoal-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
                          >
                            <span>Collapse Details</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-ink tracking-tight">
                          {study.title}
                        </h3>

                        <p className="text-sm text-charcoal-700 leading-relaxed mt-3">
                          {study.description}
                        </p>

                        {/* Verified Implementation Highlights */}
                        {study.features && (
                          <div className="mt-5 pt-4 border-t border-charcoal-200">
                            <div className="font-mono text-xs text-charcoal-800 font-bold uppercase mb-2 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>VERIFIED IMPLEMENTATION HIGHLIGHTS:</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {study.features.map((feat, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2 text-xs text-charcoal-700 font-mono"
                                >
                                  <span className="text-emerald-600 font-bold">✓</span>
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-charcoal-200">
                          {study.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md bg-charcoal-100 text-charcoal-800 font-mono text-xs font-semibold"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 flex flex-wrap sm:flex-nowrap gap-3">
                        {study.deliverableUrl && study.deliverableUrl !== '#' && (
                          <a
                            href={study.deliverableUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3 px-4 bg-ink text-white hover:bg-accent font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
                          >
                            <span>Visit Live Website</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => {
                            if (onOpenBooking) onOpenBooking();
                          }}
                          className="flex-1 py-3 px-4 bg-surface border border-charcoal-300 hover:bg-charcoal-100 text-ink font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 text-center"
                        >
                          <span>Discuss Similar Project</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleExpand(study.id)}
                          className="py-3 px-4 bg-charcoal-100 hover:bg-charcoal-200 text-charcoal-700 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-1.5"
                        >
                          <span>Collapse</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* COLLAPSED STATE: Clean compact card */
                <>
                  {/* Card Image Preview */}
                  <div
                    onClick={() => toggleExpand(study.id)}
                    className="relative aspect-[16/10] bg-charcoal-100 overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`px-3 py-1 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                          study.category === 'client'
                            ? 'bg-ink text-white'
                            : 'bg-amber-100/90 text-amber-950 border border-amber-300'
                        }`}
                      >
                        {study.typeBadge}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-ink font-mono text-xs font-bold shadow-md flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-accent" />
                        <span>Click to Expand</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Summary Body */}
                  <div
                    onClick={() => toggleExpand(study.id)}
                    className="p-6 flex-1 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="font-mono text-xs text-charcoal-500 mb-1 flex items-center justify-between">
                        <span>{study.client}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-charcoal-100 text-charcoal-700">
                          {study.status}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-ink line-clamp-1 hover:text-accent transition-colors mt-1">
                        {study.title}
                      </h3>

                      <p className="text-xs text-charcoal-600 mt-2 line-clamp-2 leading-relaxed">
                        {study.shortDescription}
                      </p>
                    </div>

                    {/* Scope & Tags Summary */}
                    <div className="mt-5 pt-4 border-t border-charcoal-200">
                      <div className="text-[11px] font-mono text-charcoal-500 mb-2">
                        <span className="font-bold text-charcoal-700">ROLE:</span>{' '}
                        {study.role}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {study.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-charcoal-100 text-charcoal-700 font-mono text-[10px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {study.tags.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-charcoal-400 font-mono text-[10px]">
                            +{study.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Bottom Action Bar */}
                    <div className="mt-4 pt-3 border-t border-charcoal-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(study.id);
                          }}
                          className="font-mono text-xs font-bold flex items-center gap-1.5 text-charcoal-700 hover:text-accent transition-colors"
                        >
                          <span>Expand</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>

                        {caseStudySlugMap[study.id] && (
                          <Link
                            href={caseStudySlugMap[study.id]}
                            onClick={(e) => e.stopPropagation()}
                            className="font-mono text-xs font-bold text-accent hover:underline flex items-center gap-1"
                          >
                            <span>Case Study</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>

                      {study.deliverableUrl && study.deliverableUrl !== '#' && (
                        <a
                          href={study.deliverableUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="font-mono text-[11px] text-charcoal-500 hover:text-accent flex items-center gap-1 transition-colors"
                          title="Open live URL"
                        >
                          <span>Live URL</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
