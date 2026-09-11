import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot field — real users never fill this in
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Geçersiz istek gövdesi." },
      { status: 400 }
    );
  }

  const { name, email, message, company } = body;

  // Honeypot: bots fill every field, humans never see this one.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Lütfen adınızı girin." },
      { status: 400 }
    );
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Lütfen geçerli bir e-posta adresi girin." },
      { status: 400 }
    );
  }

  if (!message || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Lütfen projenizi biraz daha detaylandırın." },
      { status: 400 }
    );
  }

  // NOTE: This currently only logs the submission server-side. To deliver
  // real messages, connect a transactional email provider here, e.g.:
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "CKR TECH <site@ckrtech.dev>",
  //     to: "hello@ckrtech.dev",
  //     replyTo: email,
  //     subject: `Yeni proje talebi — ${name}`,
  //     text: message,
  //   });
  //
  // Remember to set RESEND_API_KEY (or your provider's equivalent) in the
  // deployment environment before going live.
  console.log("Yeni iletişim formu talebi:", { name, email, message });

  return NextResponse.json({ ok: true });
}
