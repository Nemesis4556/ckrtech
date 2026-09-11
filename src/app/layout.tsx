import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://ckrtech.dev";
const title = "CKR TECH — Yazılım Mühendisliği ve Dijital Ürün Stüdyosu";
const description =
  "CKR TECH; web deneyimleri, özel yazılımlar ve dijital ürünler geliştiren bağımsız bir yazılım mühendisliği stüdyosudur. Fikrinizi ölçeklenebilir teknolojiye dönüştürüyoruz.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — CKR TECH",
  },
  description,
  keywords: [
    "yazılım geliştirme",
    "özel yazılım",
    "web uygulaması",
    "dijital ürün stüdyosu",
    "yazılım mühendisliği",
    "CKR TECH",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "CKR TECH",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-surface-container-lowest text-on-surface antialiased font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-inverse-surface focus:px-4 focus:py-2 focus:font-label-md focus:text-label-md focus:text-inverse-on-surface"
        >
          İçeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
