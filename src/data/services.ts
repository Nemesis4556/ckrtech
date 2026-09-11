export type Service = {
  id: string;
  icon: "code" | "layers" | "workflow" | "sparkles";
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    id: "web",
    icon: "code",
    title: "Web & Dijital Deneyim",
    description:
      "Modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyoruz. Next.js ve headless mimarilerle düşük gecikmeli, akıcı arayüzler kuruyoruz.",
    tags: ["Next.js", "Edge Routing", "Headless CMS"],
  },
  {
    id: "yazilim",
    icon: "layers",
    title: "Özel Yazılım Mimarisi",
    description:
      "İşletmelere özel operasyon ve yönetim sistemleri tasarlıyoruz. ERP/CRM entegrasyonları, mikroservisler ve dayanıklı API katmanları kuruyoruz.",
    tags: ["FastAPI", ".NET", "PostgreSQL"],
  },
  {
    id: "urun",
    icon: "workflow",
    title: "Dijital Ürünler",
    description:
      "Fikri, pazara hazır bir ürüne dönüştüren uçtan uca mühendislik süreci. MVP doğrulamasından kurumsal ölçeğe kesintisiz bir yol izliyoruz.",
    tags: ["Ürün Mimarisi", "Figma to Code", "CI/CD"],
  },
  {
    id: "ai",
    icon: "sparkles",
    title: "AI & Otomasyon",
    description:
      "Yapay zekâ ve otomasyon ile iş akışlarını daha verimli hale getiriyoruz. Kurumsal LLM entegrasyonları ve karar destek sistemleri kuruyoruz.",
    tags: ["RAG Sistemleri", "Vektör Veritabanı", "Otonom Ajanlar"],
  },
];
