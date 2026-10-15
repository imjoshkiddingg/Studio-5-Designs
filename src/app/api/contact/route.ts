import { NextResponse } from "next/server";
import { Resend } from "resend";

// Email configuration. Override via env vars in Vercel / .env.local.
// FROM must be on a Resend-verified domain in production; the sandbox
// address only sends to the Resend account's own email.
const FROM = process.env.CONTACT_FROM ?? "Studio 5 Website <onboarding@resend.dev>";
const TO = (process.env.CONTACT_TO ?? "josh@hellostudio5designs.com,hello@studio5designs.com")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

type ContactPayload = {
  fullName?: string;
  contactNumber?: string;
  email?: string;
  organization?: string;
  message?: string;
  // Honeypot — should always be empty for real users.
  company_website?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Spam honeypot: if filled, pretend success without sending.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const fullName = data.fullName?.trim();
  const email = data.email?.trim();
  const organization = data.organization?.trim();
  const message = data.message?.trim();
  const contactNumber = data.contactNumber?.trim() || "—";

  // Server-side validation (never trust the client).
  if (!fullName || !email || !organization || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "The form is not configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const subject = `New inquiry — ${organization} (${fullName})`;
  const text = [
    `Name: ${fullName}`,
    `Organization: ${organization}`,
    `Email: ${email}`,
    `Contact number: ${contactNumber}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; font-size: 18px;">New inquiry from the website</h2>
      <table style="border-collapse: collapse;">
        <tr><td style="padding: 2px 16px 2px 0; color: #666;">Name</td><td>${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding: 2px 16px 2px 0; color: #666;">Organization</td><td>${escapeHtml(organization)}</td></tr>
        <tr><td style="padding: 2px 16px 2px 0; color: #666;">Email</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 2px 16px 2px 0; color: #666;">Contact</td><td>${escapeHtml(contactNumber)}</td></tr>
      </table>
      <p style="margin: 16px 0 4px; color: #666;">Message</p>
      <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message. Please try again or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
