'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Lock } from 'lucide-react';

export default function Navigation({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8 flex justify-center ${
          isScrolled ? 'backdrop-blur-md bg-canvas/85 border-b border-charcoal-200/50 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Logo & Founder Badge */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-1.5 group">
              <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-ink">
                jugarr<span className="text-accent group-hover:scale-125 inline-block transition-transform">.</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-charcoal-100/80 border border-charcoal-200 rounded-full font-mono text-[11px] text-charcoal-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>FOUNDER & DEVELOPER // SAGAR</span>
            </div>
          </div>

          {/* Desktop Nav Links in Floating Pill */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-surface/90 border border-charcoal-200/80 rounded-full shadow-pill backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 ${
                    isActive
                      ? 'bg-ink text-white shadow-sm'
                      : 'text-charcoal-700 hover:text-ink hover:bg-charcoal-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-ink text-white hover:bg-accent text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-charcoal-200 bg-surface text-ink hover:bg-charcoal-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-canvas/98 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 transition-all">
          <div className="flex flex-col gap-3 font-display">
            <div className="font-mono text-xs text-charcoal-500 mb-2">JUGARR NAVIGATION</div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-ink hover:text-accent py-2 border-b border-charcoal-200/60 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-charcoal-400" />
              </Link>
            ))}
          </div>

          <div className="space-y-4 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-ink text-white hover:bg-accent text-sm font-bold rounded-full transition-colors flex items-center justify-center gap-2 shadow-tactile"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="font-mono text-center text-xs text-charcoal-500">
              Web Development • E-commerce • Web Applications
            </p>
          </div>
        </div>
      )}
    </>
  );
}
