'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, Lock, FileCode } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-charcoal-300 bg-canvas pt-16 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-1.5">
              <Link href="/" className="font-display font-extrabold text-3xl tracking-tight text-ink">
                jugarr<span className="text-accent">.</span>
              </Link>
              <span className="px-2 py-0.5 rounded bg-charcoal-100 text-charcoal-700 font-mono text-[10px] font-bold">
                STUDIO
              </span>
            </div>
            <p className="text-sm text-charcoal-600 max-w-sm leading-relaxed">
              Jugarr, founded by Sagar Singh Rajawat, designs and builds modern websites, e-commerce experiences, and custom web applications for businesses.
            </p>
            <div className="font-mono text-xs text-charcoal-500 flex items-center gap-3 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>FOUNDER // SAGAR SINGH RAJAWAT • {time || '12:00:00 IST'}</span>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold text-ink uppercase tracking-wider mb-2">
              PAGES & NAVIGATION
            </div>
            <ul className="space-y-2 text-charcoal-600">
              <li>
                <Link href="/work" className="hover:text-accent transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Sagar
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering Col */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold text-ink uppercase tracking-wider mb-2">
              TECH CAPABILITIES
            </div>
            <ul className="space-y-2 text-charcoal-600">
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>MongoDB & REST APIs</li>
              <li>Tailwind CSS & GSAP</li>
              <li>E-Commerce & Portals</li>
            </ul>
          </div>

          {/* Index & Discovery Col */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold text-ink uppercase tracking-wider mb-2">
              DISCOVERY & INDEX
            </div>
            <ul className="space-y-2 text-charcoal-600">
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-1 transition-colors">
                  <FileCode className="w-3 h-3" />
                  <span>Google Sitemap (XML)</span>
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Robots.txt
                </a>
              </li>
              <li>
                <a href="mailto:contact@jugarr.in" className="hover:text-accent transition-colors">
                  contact@jugarr.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with Back to Top */}
        <div className="pt-8 border-t border-charcoal-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-charcoal-500">
          <div>
            © 2026 Jugarr. Founder-led web development by Sagar Singh Rajawat. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-charcoal-300 bg-surface hover:bg-charcoal-100 text-ink transition-colors font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
