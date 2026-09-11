import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-surface-container-lowest px-6 text-center">
      <span className="font-code-sm text-code-sm uppercase tracking-wide text-secondary">
        Hata 404
      </span>
      <h1 className="mt-4 font-display text-headline-xl text-on-surface font-bold tracking-tight">
        Aradığınız sayfa bulunamadı.
      </h1>
      <p className="mt-4 max-w-md font-body-md text-body-md text-on-surface-variant">
        Bağlantı taşınmış ya da kaldırılmış olabilir. Ana sayfaya dönüp
        oradan devam edebilirsiniz.
      </p>
      <Button href="/" variant="primary" className="mt-8 group">
        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
        <span>Ana Sayfaya Dön</span>
      </Button>
      <Link
        href="/#iletisim"
        className="mt-6 font-label-md text-label-md text-on-surface-variant underline underline-offset-4 hover:text-on-surface"
      >
        Yoksa bize doğrudan ulaşın
      </Link>
    </div>
  );
}
