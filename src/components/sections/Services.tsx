import { Code2, Layers, Workflow, Sparkles, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  workflow: Workflow,
  sparkles: Sparkles,
};

export function Services() {
  return (
    <section id="hizmetler" className="w-full bg-surface-bright py-20 md:py-28">
      <div className="container-page">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Mühendislik Kabiliyetleri"
            title="Teknolojiyi sadece geliştirmiyor, doğru şekilde kurguluyoruz."
          />
          <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
            Karmaşık iş problemlerini, yüksek performanslı dijital
            mimarilere dönüştüren disiplinli bir yazılım mühendisliği
            yaklaşımı.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const featured = i === 0;
            return (
              <Reveal key={service.id} delay={i * 0.05}>
                <article
                  className={
                    "group flex h-full flex-col justify-between rounded-xl bg-surface-container-lowest p-8 shadow-sm ring-1 ring-surface-container-high/60 transition-shadow hover:shadow-md " +
                    (featured ? "md:col-span-2 md:flex-row md:items-center md:gap-10" : "")
                  }
                >
                  <div className={featured ? "md:max-w-md" : ""}>
                    <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-low text-primary">
                      <Icon size={22} strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="mb-2 font-display text-headline-md text-on-surface font-bold transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={
                      "flex flex-wrap gap-1.5 " +
                      (featured ? "mt-6 md:mt-0 md:shrink-0" : "mt-6")
                    }
                  >
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-surface-container-low px-2.5 py-1 font-code-sm text-code-sm text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
