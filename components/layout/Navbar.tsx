"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navItems, siteConfig } from "@/data/siteData";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

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
            ? "border-b border-[#C5CCDC] shadow-sm py-3"
            : "border-b border-[#C5CCDC]/60 py-4"
        )}
      >
        <Container size="default">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Clickable Official KreaitX Logo */}
            <Link
              href="/"
              className="group flex items-center min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3047D5] focus-visible:ring-offset-2 rounded-md px-1"
              aria-label="KreaitX — Home"
            >
              <Logo priority className="h-7 sm:h-8" />
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
                      "relative px-3.5 py-2 text-[14px] font-sans transition-all duration-180 min-h-[40px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4364EF] rounded-md",
                      isActive
                        ? "text-[#4364EF] font-semibold"
                        : "text-[#6A7180] hover:text-[#10172A] hover:bg-[#F7F8FC] font-medium"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#4364EF] rounded-full" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center text-[14px] font-sans font-medium text-white bg-[#4364EF] hover:bg-[#3252DB] px-5 py-2.5 min-h-[42px] rounded-lg transition-all duration-200 shadow-brand-button active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4364EF] focus-visible:ring-offset-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2 h-4 w-4 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Trigger & Fast CTA */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <Link
                href="/contact"
                className="inline-flex sm:hidden text-xs font-semibold text-white bg-[#4364EF] hover:bg-[#3252DB] px-3.5 py-2 rounded-md min-h-[40px] items-center justify-center shadow-brand-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4364EF]"
              >
                Inquire
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 min-h-[40px] min-w-[40px] rounded-md text-[#10172A] hover:bg-[#F7F8FC] border border-[#C5CCDC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4364EF] focus-visible:ring-offset-2"
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
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#C5CCDC] bg-white shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3047D5] rounded-md"
              aria-label="KreaitX — Home"
            >
              <Logo priority className="h-6 sm:h-7" />
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex text-xs font-semibold text-white bg-[#4364EF] hover:bg-[#3252DB] px-3.5 py-2 rounded-md min-h-[38px] items-center justify-center shadow-brand-button"
              >
                Talk
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#10172A] hover:bg-[#F7F8FC] border border-[#C5CCDC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4364EF]"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 pb-[max(2rem,env(safe-area-inset-bottom,0px))] flex flex-col justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#4364EF] px-1 pb-1">
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
                        ? "bg-[#F7F8FC] text-[#4364EF] font-semibold border border-[#4364EF]/30"
                        : "text-[#10172A] hover:bg-[#F7F8FC] font-medium border border-[#C5CCDC] bg-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isActive ? "text-[#4364EF]" : "text-[#6A7180]"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Action & Location Info */}
            <div className="mt-8 pt-6 border-t border-[#C5CCDC] flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center text-sm font-semibold text-white bg-[#4364EF] hover:bg-[#3252DB] px-6 py-3 min-h-[46px] rounded-lg transition-all duration-200 shadow-brand-button"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2 h-4 w-4 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <div className="mt-2 text-xs text-[#6A7180] space-y-1">
                <p className="font-semibold text-[#10172A]">KreaitX Creative Technology</p>
                <p>{siteConfig.location.formatted}</p>
                <p className="text-[#4364EF] font-medium">{siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
