import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section id="projeler" className="w-full bg-surface-container-lowest py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Gerçekleştirilen Projeler"
          title="Yaptığımız işler, anlattıklarımızdan daha fazlasını söyler."
          description="Tasarım ve mühendisliğin kesiştiği vaka analizleri; gerçek üretim ortamında çalışan sistemler."
          className="mb-14 max-w-2xl"
        />

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
