"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const fields = [
  { id: "fullName", label: "Full Name", type: "text", autoComplete: "name", required: true },
  { id: "contactNumber", label: "Contact Number", type: "tel", autoComplete: "tel", required: false },
  { id: "email", label: "Official Email Address", type: "email", autoComplete: "email", required: true },
  { id: "organization", label: "Organization / Company", type: "text", autoComplete: "organization", required: true },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: formData.get("fullName"),
      contactNumber: formData.get("contactNumber"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message"),
      company_website: formData.get("company_website"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage(
        "We couldn't reach the server. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-line bg-white p-10 text-center"
      >
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/10">
          <Check className="h-6 w-6 text-accent" strokeWidth={1.8} />
        </div>
        <h3 className="mt-6 font-serif text-2xl text-ink">Thank you.</h3>
        <p className="mt-3 text-muted">
          Your story is in good hands. We reply within 2 business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="mb-2 block text-sm font-medium text-ink"
            >
              {field.label}
              {field.required && <span className="text-accent"> *</span>}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.required}
              className="w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
            />
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-ink"
        >
          Project Scope / Message
          <span className="text-accent"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell us about the story you'd like to tell…"
          className="w-full resize-none rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
        />
      </div>

      {/* Honeypot — hidden from users, catches bots. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-accent">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm text-canvas transition-colors hover:bg-ink-deep disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.8} />
            Sending…
          </>
        ) : (
          "Send us a Message"
        )}
      </button>
    </form>
  );
}
