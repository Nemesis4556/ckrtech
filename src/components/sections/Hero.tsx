"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HeroParticles } from "@/components/ui/HeroParticles";

const capabilities = [
  "Web & Dijital Deneyim",
  "Özel Yazılım Mimarisi",
  "AI & Otomasyon",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh w-full items-center overflow-hidden bg-inverse-surface pb-16 pt-24 md:pt-28"
    >
      {/* Full-bleed animated particle network background */}
      <HeroParticles />

      {/* Soft glow accents for depth */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-secondary-container/10 blur-3xl"
        aria-hidden
      />

      {/* Scrim for legible light text over the animation */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-inverse-surface/60 via-inverse-surface/40 to-inverse-surface/80"
        aria-hidden
      />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-fixed-dim opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-fixed-dim" />
          </span>
          <span className="font-body-sm text-body-sm text-white/85">
            Yeni projeler için müsaitiz
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-[38px] leading-[44px] tracking-[-0.025em] text-white font-bold sm:text-[48px] sm:leading-[54px] md:text-headline-2xl">
            Dijital fikirleri,{" "}
            <span className="text-primary-fixed-dim underline decoration-primary/50 decoration-4 underline-offset-8">
              çalışan ürünlere
            </span>{" "}
            dönüştürüyoruz.
          </h1>
          <p className="mt-6 max-w-xl font-body-lg text-body-lg text-white/70 leading-relaxed">
            Web deneyimleri, özel yazılımlar ve dijital ürünler geliştiriyor;
            işletmelerin fikirlerini ölçeklenebilir teknolojiye
            dönüştürüyoruz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#iletisim"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-label-md text-label-md font-medium text-on-surface shadow-sm transition-colors hover:bg-primary-fixed-dim"
          >
            <span>Projenizi Konuşalım</span>
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#projeler"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-label-md text-label-md font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <span>Çalışmalarımızı İnceleyin</span>
            <ChevronDown size={18} className="text-white/70" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-8"
        >
          {capabilities.map((c) => (
            <span
              key={c}
              className="font-code-sm text-code-sm uppercase tracking-wide text-white/60"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
