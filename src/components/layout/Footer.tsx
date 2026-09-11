import { navLinks } from "@/data/navigation";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-container bg-surface-container-low">
      <div className="container-page grid grid-cols-1 gap-10 border-b border-surface-container py-16 md:grid-cols-12">
        <div className="flex flex-col gap-4 md:col-span-5">
          <span className="font-display text-headline-sm text-on-surface">
            CKR TECH
          </span>
          <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
            Yazılım mühendisliği, dağıtık sistemler ve dijital ürün
            tasarımını tek çatı altında birleştiren bağımsız bir teknoloji
            stüdyosu.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:col-span-3">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            Bölümler
          </span>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 md:col-span-4">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            İletişim
          </span>
          <a
            href="mailto:hello@ckrtech.dev"
            className="font-display text-headline-sm text-on-surface transition-colors hover:text-primary"
          >
            hello@ckrtech.dev
          </a>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            İstanbul & Uzaktan / Global
          </span>
        </div>
      </div>

      <div className="container-page flex flex-col items-center justify-between gap-4 py-6 font-body-sm text-body-sm text-secondary sm:flex-row">
        <p>© {year} CKR TECH. Tüm hakları saklıdır.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="transition-colors hover:text-on-surface">
            Gizlilik Politikası
          </a>
          <a href="#" className="transition-colors hover:text-on-surface">
            Kullanım Şartları
          </a>
        </div>
      </div>
    </footer>
  );
}
