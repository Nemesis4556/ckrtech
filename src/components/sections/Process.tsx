import { Search, Compass, PenTool, Code2, Rocket, type LucideIcon } from "lucide-react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  compass: Compass,
  "pen-tool": PenTool,
  "code-2": Code2,
  rocket: Rocket,
};

export function Process() {
  return (
    <section id="surec" className="w-full bg-surface-bright py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Uçtan Uca Metodoloji"
          title="Fikirden ürüne, birlikte."
          description="Beklenmedik sürprizler olmadan; şeffaf sprintler, düzenli demolar ve net teslimat hedefleriyle ilerliyoruz."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <Reveal key={step.id} delay={i * 0.06}>
                <div className="group flex h-full flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div>
                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container-low text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                      <Icon size={20} strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="mb-2 font-headline-sm text-headline-sm font-bold text-on-surface">
                      {step.title}
                    </h3>
                    <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-5 font-code-sm text-code-sm text-secondary">
                    {step.deliverable}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
