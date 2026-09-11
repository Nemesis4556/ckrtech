export type ProcessStep = {
  id: string;
  icon: "search" | "compass" | "pen-tool" | "code-2" | "rocket";
  title: string;
  description: string;
  deliverable: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "kesif",
    icon: "search",
    title: "Keşif",
    description:
      "İş hedefini, kullanıcı profilini ve teknik gereksinimleri birlikte çıkarırız.",
    deliverable: "Kapsam & zaman planı",
  },
  {
    id: "strateji",
    icon: "compass",
    title: "Strateji",
    description:
      "Doğru teknoloji yığınını ve ürün yapısını, büyüme hedefinize göre kurgularız.",
    deliverable: "Mimari & API kontratı",
  },
  {
    id: "tasarim",
    icon: "pen-tool",
    title: "Tasarım",
    description:
      "Deneyimi sade, sezgisel ve işlevsel şekilde tasarlar; prototipleri test ederiz.",
    deliverable: "Figma & UX akışları",
  },
  {
    id: "gelistirme",
    icon: "code-2",
    title: "Geliştirme",
    description:
      "Ürünü modern teknolojilerle, düzenli sprintler ve şeffaf iletişimle inşa ederiz.",
    deliverable: "2 haftalık sprintler",
  },
  {
    id: "yayin",
    icon: "rocket",
    title: "Yayın",
    description:
      "Yük testleri ve güvenlik denetimleriyle, kesintisiz bir geçişle canlıya alırız.",
    deliverable: "İzleme & telemetri",
  },
];
