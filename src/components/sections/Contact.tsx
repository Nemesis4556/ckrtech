"use client";

import { useState, type FormEvent } from "react";
import { Send, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Bir şeyler ters gitti, lütfen tekrar deneyin.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Bağlantı kurulamadı. Lütfen tekrar deneyin.");
    }
  }

  return (
    <section id="iletisim" className="w-full bg-surface-container-lowest py-20 md:py-28">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="font-label-md text-label-md font-semibold text-primary">
            Projenizi Anlatın
          </p>
          <h2 className="mt-3 font-display text-[28px] leading-[36px] tracking-[-0.02em] text-on-surface font-bold md:text-headline-xl text-balance">
            Size dönüş yapalım.
          </h2>
          <p className="mt-4 max-w-sm font-body-md text-body-md leading-relaxed text-on-surface-variant">
            Formu doldurun, genellikle bir iş günü içinde yanıt veriyoruz.
            Dilerseniz doğrudan e-posta ile de ulaşabilirsiniz.
          </p>
          <a
            href="mailto:proje@ckrtech.dev"
            className="mt-6 inline-flex items-center gap-2 font-label-md text-label-md text-on-surface transition-colors hover:text-primary"
          >
            <Mail size={16} aria-hidden />
            proje@ckrtech.dev
          </a>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          {status === "success" ? (
            <div
              role="status"
              className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl bg-surface-container-low p-12 text-center"
            >
              <CheckCircle2 size={32} className="text-emerald-600" aria-hidden />
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Talebiniz iletildi.
              </h3>
              <p className="max-w-sm font-body-md text-body-md text-on-surface-variant">
                Mesajınız için teşekkürler. Ekibimiz en kısa sürede sizinle
                iletişime geçecek.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 font-label-md text-label-md text-primary underline underline-offset-4"
              >
                Yeni bir mesaj gönder
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 rounded-2xl bg-surface-container-low p-6 sm:grid-cols-2 sm:p-8"
              noValidate
            >
              {/* Honeypot — hidden from real users */}
              <div className="hidden" aria-hidden>
                <label htmlFor="company">Şirket</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-1">
                <label htmlFor="name" className="font-label-md text-label-md text-on-surface">
                  Ad Soyad
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  placeholder="Adınız Soyadınız"
                  className="rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline outline-none transition-colors focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-1">
                <label htmlFor="email" className="font-label-md text-label-md text-on-surface">
                  E-posta
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ornek@sirket.com"
                  className="rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline outline-none transition-colors focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="font-label-md text-label-md text-on-surface">
                  Projeniz
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  placeholder="Kısaca ihtiyacınızdan bahsedin…"
                  className="resize-none rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline outline-none transition-colors focus:border-primary"
                />
              </div>

              {status === "error" ? (
                <div
                  role="alert"
                  className="flex items-center gap-2 rounded-lg bg-error-container px-4 py-3 font-body-sm text-body-sm text-on-error-container sm:col-span-2"
                >
                  <AlertCircle size={16} aria-hidden />
                  {errorMessage}
                </div>
              ) : null}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-inverse-surface px-6 py-3.5 font-label-md text-label-md font-medium text-inverse-on-surface transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  <span>{status === "loading" ? "Gönderiliyor…" : "Mesajı Gönder"}</span>
                  {status !== "loading" ? <Send size={16} aria-hidden /> : null}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
