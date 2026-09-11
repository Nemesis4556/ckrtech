import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-bright py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#e1e3e4 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(circle at center, black, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="container-page relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-4 inline-flex items-center rounded-full bg-secondary-container px-3.5 py-1 font-code-sm text-code-sm font-semibold text-on-secondary-container">
            Birlikte İnşa Edelim
          </p>
          <h2 className="font-display text-[30px] leading-[38px] tracking-[-0.025em] text-on-surface font-bold sm:text-[40px] sm:leading-[48px] md:text-headline-2xl text-balance">
            Bir fikriniz varsa, başlayabiliriz.
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Yeni bir dijital ürün, özel bir yazılım veya işletmeniz için daha
            iyi bir dijital deneyim tasarlayalım.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#iletisim" variant="primary" className="group">
              <span>Projenizi Anlatalım</span>
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="mailto:proje@ckrtech.dev" variant="secondary">
              <Mail size={16} className="text-secondary" />
              <span>proje@ckrtech.dev</span>
            </Button>
          </div>

          <p className="mt-8 font-code-sm text-code-sm text-secondary">
            Ortalama yanıt süresi bir iş günü içindedir · Talep üzerine gizlilik sözleşmesi (NDA)
          </p>
        </Reveal>
      </div>
    </section>
  );
}
