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
      setScrolled(window.scrollY > 20);
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
          "sticky top-0 z-40 w-full transition-all duration-200 bg-[#F4F1E8]/95 backdrop-blur-md",
          scrolled
            ? "border-b border-[#DEDCD3] shadow-subtle py-3 sm:py-3.5"
            : "border-b border-[#DEDCD3]/80 py-3.5 sm:py-4 lg:py-5"
        )}
      >
        <Container size="default">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Clickable Logo - Sole Home Trigger */}
            <Link
              href="/"
              className="group flex items-center gap-0.5 text-2xl font-bold tracking-tight text-[#14213D] transition-opacity duration-200 hover:opacity-85 cursor-pointer min-h-[44px] min-w-[44px]"
              aria-label="KreaitX — Home"
            >
              <span>Kreait</span>
              <span className="text-[#B2AD7F] font-black transition-transform duration-200 group-hover:translate-x-0.5">
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
                      "relative px-4 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 min-h-[40px] flex items-center",
                      isActive
                        ? "text-[#14213D] font-semibold bg-[#14213D]/5"
                        : "text-[#182231]/75 hover:text-[#14213D] hover:bg-[#14213D]/5"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B2AD7F]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center text-[13px] font-semibold text-[#F4F1E8] bg-[#14213D] hover:bg-[#0D182B] px-5 py-2.5 h-11 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-subtle active:scale-[0.98]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-[#B2AD7F] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Trigger & Fast CTA */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact"
                className="inline-flex sm:hidden text-xs font-semibold text-[#F4F1E8] bg-[#14213D] px-3.5 py-2 rounded-xl min-h-[44px] items-center justify-center"
              >
                Talk
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2.5 min-h-[44px] min-w-[44px] rounded-xl text-[#14213D] hover:bg-[#14213D]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B2AD7F]"
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
          className="fixed inset-0 z-[100] flex flex-col bg-[#F4F1E8] lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Top Bar matching header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#DEDCD3] bg-[#F4F1E8] shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-0.5 text-2xl font-bold tracking-tight text-[#14213D]"
              aria-label="KreaitX — Home"
            >
              <span>Kreait</span>
              <span className="text-[#B2AD7F] font-black">X</span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex text-xs font-semibold text-[#F4F1E8] bg-[#14213D] px-3.5 py-2 rounded-xl min-h-[40px] items-center justify-center"
              >
                Talk
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-[#14213D] hover:bg-[#14213D]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B2AD7F]"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 pb-[max(2rem,env(safe-area-inset-bottom,0px))] flex flex-col justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#B2AD7F] px-3 pb-1">
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
                      "flex items-center justify-between px-4 py-3.5 min-h-[50px] text-lg rounded-xl transition-all duration-150 active:scale-[0.99]",
                      isActive
                        ? "bg-[#14213D] text-[#F4F1E8] font-semibold shadow-subtle"
                        : "text-[#182231] hover:bg-[#14213D]/5 font-medium border border-[#DEDCD3] bg-[#FAF8F2]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#B2AD7F]" />}
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isActive ? "text-[#B2AD7F]" : "text-[#182231]/40"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Action & Location Info */}
            <div className="mt-8 pt-6 border-t border-[#DEDCD3] flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center text-sm font-semibold text-[#F4F1E8] bg-[#14213D] hover:bg-[#0D182B] px-6 py-3.5 min-h-[48px] rounded-xl transition-all duration-200 shadow-subtle"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2 h-4 w-4 text-[#B2AD7F] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <div className="mt-2 text-xs text-[#667085] space-y-1">
                <p className="font-semibold text-[#182231]">KreaitX Creative Technology</p>
                <p>{siteConfig.location.formatted}</p>
                <p className="text-[#14213D] font-medium">{siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
