"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const capabilities = [
  "Web & Dijital Deneyim",
  "Özel Yazılım Mimarisi",
  "AI & Otomasyon",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-surface-container-lowest pb-16 pt-28 md:pt-36"
    >
      {/* Subtle technical grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(#e1e3e4 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 75%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-secondary-container/25 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3.5 py-1.5 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Yeni projeler için müsaitiz
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-[38px] leading-[44px] tracking-[-0.025em] text-on-surface font-bold sm:text-[48px] sm:leading-[54px] md:text-headline-2xl">
            Dijital fikirleri,{" "}
            <span className="text-primary underline decoration-secondary-container decoration-4 underline-offset-8">
              çalışan ürünlere
            </span>{" "}
            dönüştürüyoruz.
          </h1>
          <p className="mt-6 max-w-2xl font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
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
          <Button href="#iletisim" variant="primary" className="group">
            <span>Projenizi Konuşalım</span>
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Button>
          <Button href="#projeler" variant="secondary">
            <span>Çalışmalarımızı İnceleyin</span>
            <ChevronDown size={18} className="text-secondary" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-surface-container pt-8"
        >
          {capabilities.map((c) => (
            <span
              key={c}
              className="font-code-sm text-code-sm uppercase tracking-wide text-secondary"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
