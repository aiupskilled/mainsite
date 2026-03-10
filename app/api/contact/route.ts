import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

const RATE_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipHits = new Map<string, number[]>();

function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string, now: number): boolean {
  const windowStart = now - RATE_WINDOW_MS;
  const recent = (ipHits.get(ip) ?? []).filter((ts) => ts > windowStart);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    ipHits.set(ip, recent);
    return true;
  }

  recent.push(now);
  ipHits.set(ip, recent);
  return false;
}

function sanitizeText(input: string): string {
  return input.replace(/[<>]/g, "").trim();
}

function isValidEmail(email: string): boolean {
  if (email.length < 5 || email.length > 320) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const now = Date.now();
  const ip = getClientIp(req);

  if (isRateLimited(ip, now)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const brevoApiKey = process.env.BREVO_API_KEY;
  const contactRecipient = process.env.CONTACT_TO_EMAIL ?? "arpit@aiupskilled.com";
  const senderEmail = process.env.CONTACT_SENDER_EMAIL ?? "noreply@aiupskilled.com";

  if (!brevoApiKey) {
    return NextResponse.json({ error: "Server email config missing (BREVO_API_KEY)." }, { status: 500 });
  }

  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name ? sanitizeText(body.name) : "";
  const email = body.email ? sanitizeText(body.email).toLowerCase() : "";
  const message = body.message ? sanitizeText(body.message) : "";

  if (!name || name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
  }

  if (!message || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Message must be between 10 and 5000 characters." }, { status: 400 });
  }

  const subject = `New Contact Inquiry from ${name}`;
  const htmlContent = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
      <h2 style="margin:0 0 12px;">New Contact Form Submission</h2>
      <p style="margin:0 0 8px;"><strong>Name:</strong> ${name}</p>
      <p style="margin:0 0 8px;"><strong>Email:</strong> ${email}</p>
      <p style="margin:16px 0 6px;"><strong>Message:</strong></p>
      <div style="padding:12px;border:1px solid #e5e5e5;border-radius:8px;white-space:pre-wrap;background:#fafafa;">${message}</div>
    </div>
  `;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": brevoApiKey
    },
    body: JSON.stringify({
      sender: {
        name: "AIUPSKILLED Contact",
        email: senderEmail
      },
      to: [{ email: contactRecipient }],
      replyTo: {
        email,
        name
      },
      subject,
      htmlContent
    })
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Brevo send error", response.status, details);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
