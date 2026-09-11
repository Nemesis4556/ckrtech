export type Technology = {
  category: string;
  name: string;
  description: string;
};

export const technologies: Technology[] = [
  { category: "Arayüz", name: "Next.js", description: "SSR & Edge Runtime" },
  { category: "Tip Güvenliği", name: "TypeScript", description: "Statik tip kontrolü" },
  { category: "Sunucu", name: "Python", description: "FastAPI & Async IO" },
  { category: "Kurumsal", name: ".NET", description: "Mikroservisler" },
  { category: "Veritabanı", name: "PostgreSQL", description: "İlişkisel & pgvector" },
  { category: "Bellek", name: "Redis", description: "In-memory önbellek" },
  { category: "Konteyner", name: "Docker", description: "İzolasyon & orkestrasyon" },
  { category: "Yapay Zekâ", name: "LLM & RAG", description: "LangChain / LlamaIndex" },
  { category: "Bulut", name: "AWS", description: "Serverless & depolama" },
  { category: "Stil", name: "Tailwind CSS", description: "Tasarım sistemi token'ları" },
];
