import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 lg:py-28 bg-white text-[#25313D] border-b border-[#E2E8EF]">
      <Container size="default" className="text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          {/* Status Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#17324D] px-4 py-1.5 rounded-full bg-[#F4F7FA] border border-[#E2E8EF] mb-6 shadow-subtle">
            <Compass className="h-3.5 w-3.5 text-[#416779] animate-spin" style={{ animationDuration: "8s" }} />
            <span>404 • Destination Not Found</span>
          </span>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#17324D] tracking-tight leading-[1.1]">
            Lost in digital space?{" "}
            <span className="font-display font-bold not-italic bg-gradient-to-r from-[#17324D] via-[#14213D] to-[#416779] bg-clip-text text-transparent">
              Let&apos;s guide you back
            </span>.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#596A7B] leading-relaxed font-sans font-normal max-w-xl">
            The link you followed may have changed, or the page might have been repositioned in our studio architecture.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button href="/" variant="primary" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
              Back to Home
            </Button>
            <Button href="/contact" variant="outline" size="md" className="w-full sm:w-auto min-h-[48px]">
              Contact Studio
            </Button>
          </div>

          {/* Quick Route Directory Cards */}
          <div className="mt-14 w-full pt-10 border-t border-[#E2E8EF] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <Link
              href="/solutions"
              className="group p-5 rounded-2xl bg-[#F4F7FA] border border-[#E2E8EF] hover:border-[#416779]/40 hover:bg-white hover:shadow-card transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#17324D] font-bold">Solutions</span>
                <ArrowRight className="h-4 w-4 text-[#596A7B] group-hover:text-[#17324D] group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-[#596A7B]">Explore our connected creative and technical capabilities.</p>
            </Link>

            <Link
              href="/work"
              className="group p-5 rounded-2xl bg-[#F4F7FA] border border-[#E2E8EF] hover:border-[#416779]/40 hover:bg-white hover:shadow-card transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#17324D] font-bold">Case Studies</span>
                <ArrowRight className="h-4 w-4 text-[#596A7B] group-hover:text-[#17324D] group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-[#596A7B]">Review verified client outcomes and design artifacts.</p>
            </Link>

            <Link
              href="/process"
              className="group p-5 rounded-2xl bg-[#F4F7FA] border border-[#E2E8EF] hover:border-[#416779]/40 hover:bg-white hover:shadow-card transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#17324D] font-bold">Methodology</span>
                <ArrowRight className="h-4 w-4 text-[#596A7B] group-hover:text-[#17324D] group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-[#596A7B]">Understand our six-stage process from discovery to launch.</p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
