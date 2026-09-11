import { LayoutDashboard, Activity, Share2, Boxes, Settings, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const navItems = [
  { icon: LayoutDashboard, label: "Genel Bakış", active: true },
  { icon: Activity, label: "Analitik & Telemetri", active: false },
  { icon: Share2, label: "API Gateway", active: false },
  { icon: Boxes, label: "Veri Hatları", active: false },
  { icon: Settings, label: "Küme Ayarları", active: false },
];

const jobs = [
  { id: "#JOB-8841", protocol: "gRPC Sync / Redis Cache", records: "142.000 kayıt", duration: "41ms", status: "Tamamlandı" },
  { id: "#JOB-8842", protocol: "Kafka Stream Consumer", records: "89.210 kayıt", duration: "28ms", status: "İşleniyor" },
  { id: "#JOB-8843", protocol: "pgvector Yeniden İndeksleme", records: "54.000 doküman", duration: "182ms", status: "Tamamlandı" },
];

export function ProductShowcase() {
  return (
    <section id="cozumler" className="w-full bg-surface-bright py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Gerçek Sistem Mühendisliği"
          title="Biz sadece web sitesi tasarlamıyoruz; ölçeklenebilir yazılımlar üretiyoruz."
          description="Canlı ortamda çalışan, telemetrisi izlenebilen ve güvenlik standartlarıyla donatılmış üretim sistemleri kuruyoruz."
          align="center"
          className="mx-auto mb-14 max-w-3xl"
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-inverse-surface shadow-2xl">
            {/* Window chrome */}
            <div className="flex h-12 items-center justify-between bg-[#1c1f24] px-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                <span className="ml-4 font-code-sm text-code-sm text-[#9da5b4]">
                  panel.ornek-urun.internal
                </span>
              </div>
              <div className="hidden items-center gap-3 sm:flex">
                <span className="flex items-center gap-1.5 rounded bg-[#262a2f] px-2.5 py-1 font-code-sm text-code-sm text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Küme: Nominal
                </span>
              </div>
            </div>

            {/* App body */}
            <div className="grid grid-cols-1 bg-surface-container-lowest md:grid-cols-12">
              {/* Sidebar */}
              <div className="flex flex-col justify-between gap-6 bg-surface-container-low p-5 md:col-span-3">
                <div>
                  <div className="mb-3 px-3 font-code-sm text-code-sm font-semibold uppercase text-secondary">
                    Modüller
                  </div>
                  <nav className="space-y-1">
                    {navItems.map(({ icon: Icon, label, active }) => (
                      <span
                        key={label}
                        className={
                          "flex items-center gap-2.5 rounded-lg px-3 py-2 font-label-md text-label-md " +
                          (active
                            ? "bg-surface-container font-semibold text-primary"
                            : "text-on-surface-variant")
                        }
                      >
                        <Icon size={18} aria-hidden />
                        <span>{label}</span>
                      </span>
                    ))}
                  </nav>
                </div>
                <div className="rounded-lg bg-surface-container-lowest p-3 shadow-sm">
                  <div className="font-code-sm text-code-sm font-medium text-secondary">
                    Bölge: eu-central-1
                  </div>
                  <div className="mt-0.5 font-label-md text-label-md font-semibold text-on-surface">
                    İşlemci Yükü: %18
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
                    <div className="h-full w-[18%] bg-primary" />
                  </div>
                </div>
              </div>

              {/* Main workspace */}
              <div className="flex flex-col gap-5 bg-surface-bright p-5 md:col-span-9 md:p-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm">
                    <div className="font-code-sm text-code-sm text-secondary">
                      Aylık İşlenen Hacim
                    </div>
                    <div className="mt-1 font-display text-headline-md text-on-surface font-bold">
                      2.480.400
                    </div>
                    <div className="mt-1 flex items-center gap-1 font-body-sm text-body-sm font-medium text-emerald-600">
                      <ArrowUpRight size={14} aria-hidden />
                      geçen aya göre artış
                    </div>
                  </div>
                  <div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm">
                    <div className="font-code-sm text-code-sm text-secondary">
                      Aktif Oturumlar
                    </div>
                    <div className="mt-1 font-display text-headline-md text-on-surface font-bold">
                      12.850
                    </div>
                    <div className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                      Birden fazla aktif mikroservis
                    </div>
                  </div>
                  <div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm">
                    <div className="font-code-sm text-code-sm text-secondary">
                      Ortalama API Yanıtı
                    </div>
                    <div className="mt-1 font-display text-headline-md text-primary font-bold">
                      18ms
                    </div>
                    <div className="mt-1 flex items-center gap-1 font-body-sm text-body-sm font-medium text-emerald-600">
                      <CheckCircle2 size={14} aria-hidden />
                      Hedeflenen SLA içinde
                    </div>
                  </div>
                </div>

                {/* Telemetry chart */}
                <div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        İşlem Hacmi & Gecikme
                      </h4>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Otomatik güncellenen canlı telemetri akışı
                      </p>
                    </div>
                    <span className="rounded bg-secondary-container px-2.5 py-1 font-code-sm text-code-sm font-semibold text-on-secondary-container">
                      Yüksek güvenilirlik
                    </span>
                  </div>
                  <svg viewBox="0 0 600 160" className="h-36 w-full" preserveAspectRatio="none" aria-hidden>
                    <defs>
                      <linearGradient id="metricGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0,40 L 600,40 M 0,80 L 600,80 M 0,120 L 600,120" stroke="#edeeef" strokeWidth="1" fill="none" />
                    <path
                      d="M 0,140 Q 60,110 120,120 T 240,70 T 360,85 T 480,35 T 600,45 L 600,160 L 0,160 Z"
                      fill="url(#metricGrad)"
                      stroke="none"
                    />
                    <path
                      d="M 0,140 Q 60,110 120,120 T 240,70 T 360,85 T 480,35 T 600,45"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Jobs table */}
                <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
                  <div className="bg-surface-container-low p-4 font-headline-sm text-headline-sm font-semibold text-on-surface">
                    Dağıtık Görevler
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-body-sm text-body-sm">
                      <thead className="bg-surface-container font-code-sm text-code-sm uppercase text-on-surface-variant">
                        <tr>
                          <th className="p-3 font-medium">Görev</th>
                          <th className="p-3 font-medium">Protokol</th>
                          <th className="p-3 font-medium">Kayıt</th>
                          <th className="p-3 font-medium">Süre</th>
                          <th className="p-3 font-medium">Durum</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-container text-on-surface">
                        {jobs.map((job) => (
                          <tr key={job.id}>
                            <td className="p-3 font-code-sm text-code-sm font-semibold">
                              {job.id}
                            </td>
                            <td className="p-3">{job.protocol}</td>
                            <td className="p-3">{job.records}</td>
                            <td className="p-3">{job.duration}</td>
                            <td className="p-3">
                              <span
                                className={
                                  "inline-flex items-center gap-1.5 rounded px-2 py-0.5 font-code-sm text-code-sm " +
                                  (job.status === "Tamamlandı"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : "bg-blue-100 text-blue-800")
                                }
                              >
                                <span
                                  className={
                                    "h-1.5 w-1.5 rounded-full " +
                                    (job.status === "Tamamlandı" ? "bg-emerald-600" : "bg-primary")
                                  }
                                />
                                {job.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
