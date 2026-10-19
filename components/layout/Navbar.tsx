"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navItems, siteConfig } from "@/data/siteData";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle ESC key to dismiss menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 bg-white",
          scrolled
            ? "border-b border-slate-200 shadow-sm py-3"
            : "border-b border-slate-200/80 py-4 lg:py-4.5"
        )}
      >
        <Container size="default">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Clickable Logo with Brand Cyan Accent */}
            <Link
              href="/"
              className="group flex items-center gap-0.5 text-2xl font-display font-bold tracking-tight text-[#003049] transition-opacity duration-200 hover:opacity-90 cursor-pointer min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9] focus-visible:ring-offset-2 rounded-lg px-1 items-center"
              aria-label="KreaitX — Home"
            >
              <span>Kreait</span>
              <span className="text-[#42C6D9] font-extrabold transition-transform duration-200 group-hover:scale-105">
                X
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-[14px] font-sans transition-all duration-200 min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9] rounded-lg",
                      isActive
                        ? "text-[#003049] font-bold"
                        : "text-slate-600 hover:text-[#003049] hover:bg-slate-50 font-medium"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#003049] rounded-full" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center text-[14px] font-sans font-semibold text-white bg-[#003049] hover:bg-[#14213D] px-6 py-2.5 min-h-[44px] rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-brand-button active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9] focus-visible:ring-offset-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2 h-4 w-4 text-[#42C6D9] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Trigger & Fast CTA */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <Link
                href="/contact"
                className="inline-flex sm:hidden text-xs font-semibold text-white bg-[#003049] hover:bg-[#14213D] px-4 py-2 rounded-full min-h-[44px] items-center justify-center shadow-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9]"
              >
                Inquire
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2.5 min-h-[44px] min-w-[44px] rounded-full text-slate-800 hover:bg-[#F7F8FA] border border-slate-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9] focus-visible:ring-offset-2"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu-drawer"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Fullscreen High-Z Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          ref={drawerRef}
          className="fixed inset-0 z-[100] flex flex-col bg-white lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Top Bar matching header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-0.5 text-2xl font-display font-bold tracking-tight text-[#003049]"
              aria-label="KreaitX — Home"
            >
              <span>Kreait</span>
              <span className="text-[#42C6D9] font-extrabold">X</span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex text-xs font-semibold text-white bg-[#003049] hover:bg-[#14213D] px-3.5 py-2 rounded-full min-h-[40px] items-center justify-center shadow-subtle"
              >
                Talk
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-full text-slate-800 hover:bg-[#F7F8FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9]"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 pb-[max(2rem,env(safe-area-inset-bottom,0px))] flex flex-col justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#003049] px-3 pb-1">
                MENU NAVIGATION
              </span>
              
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3.5 min-h-[50px] text-lg rounded-2xl transition-all duration-150 active:scale-[0.99]",
                      isActive
                        ? "bg-[#F7F8FA] text-[#003049] font-semibold border border-[#42C6D9]/40"
                        : "text-slate-800 hover:bg-slate-50 font-medium border border-slate-200/80 bg-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isActive ? "text-[#42C6D9]" : "text-slate-400"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Action & Location Info */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center text-sm font-semibold text-white bg-[#003049] hover:bg-[#14213D] px-6 py-3.5 min-h-[48px] rounded-full transition-all duration-200 shadow-brand-button"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2 h-4 w-4 text-[#42C6D9] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <div className="mt-2 text-xs text-slate-500 space-y-1">
                <p className="font-semibold text-slate-800">KreaitX Creative Technology</p>
                <p>{siteConfig.location.formatted}</p>
                <p className="text-[#003049] font-medium">{siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
