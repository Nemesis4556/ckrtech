export type Project = {
  id: string;
  category: string;
  meta: string;
  name: string;
  description: string;
  highlight: { label: string; value: string };
  stack: string[];
  imageSide: "left" | "right";
  variant: "logistics" | "finance" | "commerce";
};

export const projects: Project[] = [
  {
    id: "aura",
    category: "Lojistik & Dağıtık Sistem",
    meta: "Sahaya Alındı",
    name: "Aura Lojistik OS",
    description:
      "Filo operasyonları ve rota planlaması için geliştirilen, gerçek zamanlı telemetri verisini tek bir kontrol panelinde birleştiren işletim sistemi.",
    highlight: { label: "Canlı Filo Takibi", value: "Tek merkezi harita" },
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
    imageSide: "right",
    variant: "logistics",
  },
  {
    id: "kuantum",
    category: "Fintech & Hazine",
    meta: "Kurumsal Çözüm",
    name: "Kuantum Risk & Hazine",
    description:
      "Kurumsal hazine yönetimi ve piyasa risk modelleme motoru. WebSocket altyapısıyla anlık veri akışını düşük gecikmeyle işleyen finans arayüzü.",
    highlight: { label: "Veri Akışı", value: "Gerçek zamanlı yayın" },
    stack: ["React", "TypeScript", ".NET Core", "WebSockets"],
    imageSide: "left",
    variant: "finance",
  },
  {
    id: "sferik",
    category: "B2B E-Ticaret",
    meta: "Mikroservis Mimarisi",
    name: "Sferik Ticaret Ağı",
    description:
      "Toptan B2B ticaret ve çok kanallı sipariş yönetimi için geliştirilen ekosistem. Farklı ERP sistemlerine köprü kurarak faturalandırma süreçlerini otomatikleştirir.",
    highlight: { label: "Sipariş Mutabakatı", value: "Uçtan uca otomasyon" },
    stack: ["Next.js", "GraphQL", "Docker"],
    imageSide: "right",
    variant: "commerce",
  },
];
