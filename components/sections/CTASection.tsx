import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteData";
import { Sparkles } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <Container size="default" className="relative z-10">
        <Reveal yOffset={20}>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white p-10 sm:p-16 lg:p-20 shadow-2xl border border-purple-900/40">
            {/* Ambient colorful gradient blobs */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-600/30 blur-3xl pointer-events-none animate-blob-1" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-400/30 to-indigo-600/30 blur-3xl pointer-events-none animate-blob-2" />

            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-300 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md shadow-subtle">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
                <span>Next Step</span>
              </span>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
                Ready to build{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                  what&apos;s next
                </span>
                ?
              </h2>

              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-sans font-normal max-w-2xl">
                Tell us what you&apos;re working on. We&apos;ll help clarify the opportunity, technical scope, and practical next step.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button
                  href="/contact"
                  variant="white"
                  size="lg"
                  withArrow
                  className="w-full sm:w-auto font-bold min-h-[52px]"
                >
                  Start a Conversation
                </Button>

                <Button
                  href={`mailto:${siteConfig.contact.email}`}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:border-white/40 hover:bg-white/20 min-h-[52px]"
                >
                  {siteConfig.contact.email}
                </Button>
              </div>

              <p className="mt-8 text-xs text-slate-400">
                Typical response time: within 24 business hours • Direct consultation with senior leads
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
