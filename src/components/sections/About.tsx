import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    title: "Tavizsiz Kalite",
    description: "Kod incelemeleri ve kapsamlı test süreçleri.",
  },
  {
    title: "Şeffaf Süreç",
    description: "Her sprintte çalışan kod ve açık iletişim.",
  },
  {
    title: "Ölçek Garantisi",
    description: "Trafik artışlarına hazır, dayanıklı mimari.",
  },
];

export function About() {
  return (
    <section id="hakkimizda" className="w-full bg-surface-container-lowest py-20 md:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="flex flex-col gap-5">
            <p className="font-label-md text-label-md text-primary font-semibold">
              Felsefemiz
            </p>
            <h2 className="font-display text-[28px] leading-[36px] tracking-[-0.02em] text-on-surface font-bold md:text-headline-xl text-balance">
              Teknoloji bizim için sadece koddan ibaret değil.
            </h2>
            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              CKR TECH, yazılım mühendisliğini, iş modelini kavrama
              kabiliyetini ve rafine tasarım estetiğini tek bir çatı altında
              birleştiren bağımsız bir teknoloji stüdyosudur.
            </p>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Teknik borç yaratan geçici çözümler yerine; bakımı kolay,
              dokümante edilmiş ve şirketinizin ileriki büyüme hacmini
              bugünden kaldırabilecek dayanıklı mimariler kurarız.
            </p>

            <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {principles.map((p) => (
                <div key={p.title} className="rounded-lg bg-surface-container-low p-4">
                  <div className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    {p.title}
                  </div>
                  <div className="mt-1 font-body-sm text-body-sm text-secondary">
                    {p.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl bg-inverse-surface shadow-lg">
            <svg viewBox="0 0 400 460" className="h-[420px] w-full" aria-hidden>
              <rect width="400" height="460" fill="#14161c" />
              <g opacity="0.5" stroke="#2a2d34" strokeWidth="1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="460" />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`h-${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
                ))}
              </g>
              <rect x="40" y="60" width="180" height="10" rx="5" fill="#3a3f4a" />
              <rect x="40" y="82" width="120" height="10" rx="5" fill="#3a3f4a" />
              <rect x="40" y="130" width="320" height="1" fill="#2a2d34" />
              <rect x="40" y="160" width="260" height="10" rx="5" fill="#525866" />
              <rect x="40" y="182" width="200" height="10" rx="5" fill="#3a3f4a" />
              <rect x="40" y="204" width="230" height="10" rx="5" fill="#3a3f4a" />
              <circle cx="200" cy="330" r="60" fill="none" stroke="#1d4ed8" strokeWidth="2" opacity="0.7" />
              <circle cx="200" cy="330" r="34" fill="#1d4ed8" opacity="0.18" />
              <circle cx="200" cy="330" r="6" fill="#8fa5ff" />
            </svg>
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl bg-surface-container-lowest/95 p-4 backdrop-blur-md">
              <div>
                <div className="font-label-md text-label-md font-bold text-on-surface">
                  İstanbul & Uzaktan / Global
                </div>
                <div className="font-code-sm text-code-sm text-secondary">
                  Mühendislik & Ürün Laboratuvarı
                </div>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
