import { technologies } from "@/data/technologies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Technologies() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 md:py-28">
      <div className="container-page">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Mühendislik Standartları"
            title="Modern, dayanıklı ve kendini kanıtlamış teknolojiler."
          />
          <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
            Geçici trendler yerine, projenin büyüme hedefine ve operasyonel
            maliyetine en uygun, sürdürülebilir mimariyi seçiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {technologies.map((tech, i) => (
            <Reveal key={tech.name} delay={Math.min(i * 0.03, 0.3)}>
              <div className="flex h-32 flex-col justify-between rounded-xl bg-surface-container-low p-4 transition-colors hover:bg-surface-container">
                <span className="font-code-sm text-code-sm font-semibold text-secondary">
                  {tech.category}
                </span>
                <div>
                  <div className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    {tech.name}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    {tech.description}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
