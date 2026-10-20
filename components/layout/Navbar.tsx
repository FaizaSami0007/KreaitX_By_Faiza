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
          "sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md",
          scrolled
            ? "border-b border-[#E5E1DA] shadow-sm py-3"
            : "border-b border-[#E5E1DA]/80 py-4"
        )}
      >
        <Container size="default">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Clickable Logo with Brand Orange Accent */}
            <Link
              href="/"
              className="group flex items-center gap-0.5 text-2xl font-display font-bold tracking-tight text-[#34312F] transition-opacity duration-200 hover:opacity-90 cursor-pointer min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5D17] focus-visible:ring-offset-2 rounded-md px-1 items-center"
              aria-label="KreaitX — Home"
            >
              <span>Kreait</span>
              <span className="text-[#EC5D17] font-extrabold transition-transform duration-200 group-hover:scale-105">
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
                      "relative px-3.5 py-2 text-[14px] font-sans transition-all duration-180 min-h-[40px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5D17] rounded-md",
                      isActive
                        ? "text-[#EC5D17] font-semibold"
                        : "text-[#6B6560] hover:text-[#34312F] hover:bg-[#FFF0E8]/70 font-medium"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#EC5D17] rounded-full" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center text-[14px] font-sans font-medium text-white bg-[#34312F] hover:bg-[#EC5D17] px-5 py-2.5 min-h-[42px] rounded-lg transition-all duration-200 shadow-subtle active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5D17] focus-visible:ring-offset-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2 h-4 w-4 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Trigger & Fast CTA */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <Link
                href="/contact"
                className="inline-flex sm:hidden text-xs font-semibold text-white bg-[#34312F] hover:bg-[#EC5D17] px-3.5 py-2 rounded-md min-h-[40px] items-center justify-center shadow-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5D17]"
              >
                Inquire
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 min-h-[40px] min-w-[40px] rounded-md text-[#34312F] hover:bg-white border border-[#E5E1DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5D17] focus-visible:ring-offset-2"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu-drawer"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
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
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E1DA] bg-white shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-0.5 text-2xl font-display font-bold tracking-tight text-[#34312F]"
              aria-label="KreaitX — Home"
            >
              <span>Kreait</span>
              <span className="text-[#EC5D17] font-extrabold">X</span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex text-xs font-semibold text-white bg-[#34312F] hover:bg-[#EC5D17] px-3.5 py-2 rounded-md min-h-[38px] items-center justify-center shadow-subtle"
              >
                Talk
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#34312F] hover:bg-white border border-[#E5E1DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5D17]"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 pb-[max(2rem,env(safe-area-inset-bottom,0px))] flex flex-col justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#EC5D17] px-1 pb-1">
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
                      "flex items-center justify-between px-4 py-3 min-h-[46px] text-base rounded-lg transition-all duration-150 active:scale-[0.99]",
                      isActive
                        ? "bg-[#FFF0E8] text-[#EC5D17] font-semibold border border-[#EC5D17]/30"
                        : "text-[#34312F] hover:bg-white font-medium border border-[#E5E1DA] bg-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isActive ? "text-[#EC5D17]" : "text-[#6B6560]"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Action & Location Info */}
            <div className="mt-8 pt-6 border-t border-[#E5E1DA] flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center text-sm font-semibold text-white bg-[#34312F] hover:bg-[#EC5D17] px-6 py-3 min-h-[46px] rounded-lg transition-all duration-200 shadow-subtle"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2 h-4 w-4 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <div className="mt-2 text-xs text-[#6B6560] space-y-1">
                <p className="font-semibold text-[#34312F]">KreaitX Creative Technology</p>
                <p>{siteConfig.location.formatted}</p>
                <p className="text-[#EC5D17] font-medium">{siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
