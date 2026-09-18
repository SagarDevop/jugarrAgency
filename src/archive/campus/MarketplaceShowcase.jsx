import React, { useState } from 'react';
import { MARKETPLACE_CATEGORIES, MARKETPLACE_ITEMS } from '../data/campusData';
import {
  Sparkles,
  BookOpen,
  Laptop,
  Home,
  Bike,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  Eye,
  MapPin,
  Tag,
  X
} from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  BookOpen: BookOpen,
  Laptop: Laptop,
  Home: Home,
  Bike: Bike,
  Cpu: Cpu,
};

export default function MarketplaceShowcase({ onOpenWaitlist }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems =
    selectedCategory === 'all'
      ? MARKETPLACE_ITEMS
      : MARKETPLACE_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="marketplace" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-charcoal-200">
        <div className="space-y-3 max-w-2xl">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            [ 04 // CAMPUS MARKETPLACE SHOWCASE ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            Dorm-to-dorm discovery.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600">
            Browse verified listings from classmates right on your campus. Zero shipping wait times, zero delivery fees.
          </p>
        </div>

        <div className="font-mono text-xs text-charcoal-500 mt-4 md:mt-0 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span>SHOWING LIVE MESH SIMULATION</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {MARKETPLACE_CATEGORIES.map((cat) => {
          const Icon = iconMap[cat.icon] || Sparkles;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
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

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group cursor-pointer rounded-3xl border border-charcoal-300 bg-surface shadow-tactile hover:shadow-tactile-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col justify-between"
          >
            {/* Image Header with condition badge */}
            <div className="relative aspect-[16/10] bg-charcoal-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider bg-ink/80 text-white backdrop-blur-md">
                  {item.badge}
                </span>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-2.5 py-1 rounded-full font-mono text-xs bg-white text-ink shadow-sm flex items-center gap-1">
                  <Eye className="w-3 h-3" /> Quick View
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Campus Location */}
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-charcoal-500 mb-2">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span>{item.campus}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-ink line-clamp-1 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                {/* Description snippet */}
                <p className="text-xs text-charcoal-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Price & Seller */}
              <div className="mt-5 pt-4 border-t border-charcoal-200 flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold font-display text-ink">{item.price}</div>
                  <div className="text-[11px] font-mono text-charcoal-400 line-through">
                    {item.originalPrice}
                  </div>
                </div>

                <div className="text-right font-mono text-xs">
                  <div className="flex items-center gap-1 text-charcoal-800 font-semibold justify-end">
                    <span>{item.seller}</span>
                    {item.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-verified" />
                    )}
                  </div>
                  <span className="text-[10px] text-charcoal-400">Hostel Verified</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom info callout */}
      <div className="mt-12 p-5 rounded-2xl bg-charcoal-100 border border-charcoal-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2 text-charcoal-700">
          <Tag className="w-4 h-4 text-accent" />
          <span>HAVE ITEMS COLLECTING DUST IN YOUR DORM ROOM?</span>
        </div>
        <button
          onClick={onOpenWaitlist}
          className="px-4 py-2 bg-ink text-white hover:bg-accent rounded-full font-sans font-semibold text-xs transition-colors flex items-center gap-1.5"
        >
          <span>List in 60 Seconds</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-surface border border-charcoal-300 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-100 hover:bg-charcoal-200 text-ink"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[16/10] rounded-2xl bg-charcoal-100 overflow-hidden mb-6">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-md font-mono text-xs font-bold">
                  {activeItem.badge}
                </span>
                <span className="font-mono text-xs text-charcoal-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-accent" />
                  {activeItem.campus}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-ink">
                {activeItem.title}
              </h3>

              <div className="flex items-baseline gap-3 pb-2 border-b border-charcoal-200">
                <span className="text-3xl font-bold font-display text-ink">
                  {activeItem.price}
                </span>
                <span className="text-sm font-mono text-charcoal-400 line-through">
                  MRP {activeItem.originalPrice}
                </span>
              </div>

              <p className="text-sm text-charcoal-700 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="p-4 rounded-xl bg-canvas-card border border-charcoal-200 flex items-center justify-between">
                <div className="font-mono text-xs">
                  <div className="text-charcoal-500">SELLER DETAILS</div>
                  <div className="font-bold text-ink flex items-center gap-1 mt-0.5">
                    {activeItem.seller}
                    <CheckCircle2 className="w-3.5 h-3.5 text-verified" />
                  </div>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-semibold">
                  .EDU VERIFIED
                </span>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    setActiveItem(null);
                    onOpenWaitlist();
                  }}
                  className="flex-1 py-3.5 bg-ink text-white hover:bg-accent font-bold rounded-full text-sm transition-all shadow-tactile flex items-center justify-center gap-2"
                >
                  <span>Request Peer Handshake</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
