import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function LogisticsPreview() {
  return (
    <>
      <rect x="0" y="0" width="480" height="34" fill="#f3f4f5" />
      <circle cx="20" cy="17" r="4.5" fill="#e1e3e4" />
      <circle cx="36" cy="17" r="4.5" fill="#e1e3e4" />
      <circle cx="52" cy="17" r="4.5" fill="#e1e3e4" />
      <rect x="90" y="12" width="120" height="10" rx="5" fill="#e7e8e9" />

      {/* Map grid */}
      <rect x="0" y="34" width="480" height="266" fill="#f6f7f8" />
      <g stroke="#e7e8e9" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 60} y1="34" x2={i * 60} y2="300" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={70 + i * 46} x2="480" y2={70 + i * 46} />
        ))}
      </g>

      {/* Route lines */}
      <path
        d="M 40,240 C 100,180 140,220 190,150 C 230,100 300,140 340,90 C 370,60 410,70 440,50"
        fill="none"
        stroke="#0037b0"
        strokeWidth="2.5"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />
      <path
        d="M 60,120 C 120,150 170,110 220,180 C 260,230 320,200 360,240"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="2"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />

      {/* Fleet nodes */}
      {[
        [40, 240], [190, 150], [340, 90], [440, 50], [220, 180], [360, 240],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="9" fill="#0037b0" opacity="0.14" />
          <circle cx={cx} cy={cy} r="4" fill={i % 3 === 0 ? "#0037b0" : "#565e74"} />
        </g>
      ))}

      {/* Info card */}
      <rect x="24" y="252" width="200" height="34" rx="8" fill="#ffffff" stroke="#e1e3e4" />
      <circle cx="42" cy="269" r="5" fill="#10b981" />
      <rect x="58" y="262" width="100" height="7" rx="3.5" fill="#c7cbd1" />
      <rect x="58" y="273" width="70" height="6" rx="3" fill="#dfe1e3" />
    </>
  );
}

function FinancePreview() {
  const bars = [40, 62, 48, 78, 58, 90, 70, 100, 84, 112, 96, 128];
  return (
    <>
      <rect x="0" y="0" width="480" height="34" fill="#f3f4f5" />
      <circle cx="20" cy="17" r="4.5" fill="#e1e3e4" />
      <circle cx="36" cy="17" r="4.5" fill="#e1e3e4" />
      <circle cx="52" cy="17" r="4.5" fill="#e1e3e4" />
      <rect x="90" y="12" width="120" height="10" rx="5" fill="#e7e8e9" />

      <rect x="0" y="34" width="480" height="266" fill="#ffffff" />

      {/* Ticker rows */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="20" y={54 + i * 26} width="70" height="8" rx="4" fill="#c7cbd1" />
          <rect x={i % 2 === 0 ? 380 : 360} y={54 + i * 26} width={i % 2 === 0 ? 80 : 100} height="8" rx="4" fill={i === 1 ? "#0037b0" : "#94a3b8"} />
        </g>
      ))}

      <line x1="20" y1="140" x2="460" y2="140" stroke="#edeeef" strokeWidth="1" />

      {/* Candlestick / bar chart */}
      <g>
        {bars.map((h, i) => (
          <rect
            key={i}
            x={30 + i * 35}
            y={270 - h}
            width="14"
            height={h}
            rx="2"
            fill={i % 3 === 0 ? "#0037b0" : "#c7d3ea"}
          />
        ))}
      </g>
      <line x1="20" y1="270" x2="460" y2="270" stroke="#e1e3e4" strokeWidth="1" />

      {/* Live indicator */}
      <rect x="352" y="160" width="108" height="26" rx="7" fill="#dae2fd" />
      <circle cx="368" cy="173" r="4" fill="#0037b0" />
      <rect x="380" y="169" width="68" height="8" rx="4" fill="#5c647a" />
    </>
  );
}

function CommercePreview() {
  return (
    <>
      <rect x="0" y="0" width="480" height="34" fill="#f3f4f5" />
      <circle cx="20" cy="17" r="4.5" fill="#e1e3e4" />
      <circle cx="36" cy="17" r="4.5" fill="#e1e3e4" />
      <circle cx="52" cy="17" r="4.5" fill="#e1e3e4" />
      <rect x="90" y="12" width="120" height="10" rx="5" fill="#e7e8e9" />

      <rect x="0" y="34" width="120" height="266" fill="#f8f9fa" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="16"
          y={58 + i * 32}
          width={i === 1 ? 90 : 74}
          height="10"
          rx="5"
          fill={i === 1 ? "#0037b0" : "#dfe1e3"}
          opacity={i === 1 ? 1 : 0.8}
        />
      ))}

      {/* Inventory table */}
      <rect x="140" y="54" width="324" height="26" rx="6" fill="#edeeef" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="140" y={92 + i * 34} width="324" height="26" rx="6" fill="#ffffff" stroke="#f0f1f2" />
          <rect x="154" y={101 + i * 34} width="90" height="8" rx="4" fill="#c7cbd1" />
          <rect x="270" y={101 + i * 34} width="50" height="8" rx="4" fill="#dfe1e3" />
          <rect
            x="400"
            y={99 + i * 34}
            width="50"
            height="12"
            rx="6"
            fill={i % 2 === 0 ? "#dcfce7" : "#dae2fd"}
          />
        </g>
      ))}
    </>
  );
}

const previewMap: Record<Project["variant"], () => React.JSX.Element> = {
  logistics: LogisticsPreview,
  finance: FinancePreview,
  commerce: CommercePreview,
};

function ProjectPreview({ project }: { project: Project }) {
  const PreviewContent = previewMap[project.variant];
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center overflow-hidden bg-surface-container p-6 lg:p-10">
      <svg
        viewBox="0 0 480 300"
        className="h-full max-h-[300px] w-full max-w-[440px] rounded-xl bg-surface-container-lowest shadow-md ring-1 ring-surface-container-high/70"
        role="img"
        aria-label={`${project.name} arayüz önizlemesi`}
      >
        <PreviewContent />
      </svg>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const isRight = project.imageSide === "right";

  return (
    <article className="group overflow-hidden rounded-2xl bg-surface-container-low shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div
          className={cn(
            "flex flex-col justify-between p-8 lg:col-span-5",
            isRight ? "lg:order-1" : "lg:order-2"
          )}
        >
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded bg-surface-container-lowest px-2 py-0.5 font-code-sm text-code-sm font-semibold text-primary">
                {project.category}
              </span>
              <span className="font-code-sm text-code-sm text-secondary">
                {project.meta}
              </span>
            </div>
            <h3 className="mb-3 font-display text-headline-lg text-on-surface font-bold tracking-tight">
              {project.name}
            </h3>
            <p className="mb-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">
              {project.description}
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-surface-container-lowest px-2.5 py-1 font-code-sm text-code-sm font-medium text-on-surface"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-surface-container-high/60 pt-5">
            <div>
              <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                {project.highlight.value}
              </div>
              <div className="font-body-sm text-body-sm text-secondary">
                {project.highlight.label}
              </div>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest text-on-surface transition-colors duration-200 group-hover:bg-primary group-hover:text-on-primary">
              <ArrowUpRight size={18} aria-hidden />
            </span>
          </div>
        </div>

        <div
          className={cn(
            "lg:col-span-7",
            isRight ? "lg:order-2" : "lg:order-1"
          )}
        >
          <ProjectPreview project={project} />
        </div>
      </div>
    </article>
  );
}
