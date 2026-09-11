# CKR TECH — Kurumsal Web Sitesi

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion ile
geliştirilmiş, "Precision Engineering" tasarım sistemine dayanan CKR TECH
tanıtım sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde çalışır.

## Komutlar

```bash
npm run dev     # geliştirme sunucusu
npm run build   # production build
npm run start   # production sunucusu
npm run lint    # ESLint
```

## Proje yapısı

```text
src/
  app/
    layout.tsx        # kök layout, fontlar, SEO metadata
    page.tsx           # ana sayfa - bölümleri birleştirir
    globals.css        # tasarım tokenları (Tailwind v4 @theme)
  components/
    layout/
      Navbar.tsx        # scroll-aware, mobil menülü üst menü
      Footer.tsx
    sections/
      Hero.tsx
      Services.tsx
      Projects.tsx
      ProductShowcase.tsx
      Technologies.tsx
      Process.tsx
      About.tsx
      CTA.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      ProjectCard.tsx
      Reveal.tsx        # scroll-reveal animasyon sarmalayıcısı
  data/                 # içerik verileri (services, projects, vb.)
  lib/
    utils.ts            # `cn` sınıf birleştirme yardımcı fonksiyonu
```

## Notlar

- Tüm renk, tipografi, boşluk ve köşe yuvarlama değerleri
  `src/app/globals.css` içindeki `@theme` bloğunda tanımlıdır ve doğrudan
  sağlanan tasarım sisteminden ("Precision Engineering") türetilmiştir.
- Proje önizlemeleri stok fotoğraf yerine, her vaka analizine özgü satır-içi
  SVG arayüz taslakları (lojistik haritası, finans grafiği, e-ticaret
  tablosu) olarak oluşturulmuştur; gerçek ekran görüntüleriyle kolayca
  değiştirilebilir.
- Favicon, Apple touch icon ve Open Graph/Twitter paylaşım görselleri
  `next/og` ile derleme sırasında koddan üretilir (`src/app/icon.tsx`,
  `apple-icon.tsx`, `opengraph-image.tsx`, `twitter-image.tsx`); harici
  görsel dosyası gerekmez.
- `src/app/robots.ts` ve `src/app/sitemap.ts` arama motorları için otomatik
  `robots.txt` ve `sitemap.xml` üretir.
- `src/app/not-found.tsx` marka diline uygun özel bir 404 sayfasıdır.
- İletişim formu (`Contact` bölümü) `POST /api/contact` uç noktasına istek
  atar (`src/app/api/contact/route.ts`). Route sunucu tarafında doğrulama
  yapar ve gönderimi loglar; **canlıya almadan önce** bir e-posta sağlayıcısı
  (ör. Resend, Postmark) bağlamanız gerekir — dosyadaki yorum satırlarında
  örnek entegrasyon kodu bulunur.
- Google Fonts (`Inter`, `Plus Jakarta Sans`) `next/font/google` ile
  derleme sırasında self-host edilir; derleme adımının internet erişimine
  ihtiyacı vardır.

## Yayına almadan önce yapılacaklar

1. `src/app/api/contact/route.ts` içine gerçek bir e-posta sağlayıcısı
   bağlayın ve ilgili API anahtarını ortam değişkeni olarak tanımlayın.
2. `metadataBase`/`siteUrl` değerlerini (`layout.tsx`, `robots.ts`,
   `sitemap.ts`, `opengraph-image.tsx`) gerçek alan adınızla güncelleyin.
3. Gerçek proje ekran görüntüleri veya marka fotoğrafları hazır olduğunda,
   `ProjectCard.tsx` ve `About.tsx` içindeki SVG taslaklarının yerine
   koyabilirsiniz.
4. `hello@ckrtech.dev` / `proje@ckrtech.dev` adreslerini gerçek iletişim
   adreslerinizle değiştirin.
