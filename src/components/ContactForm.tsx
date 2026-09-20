"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success";

const fields = [
  { id: "fullName", label: "Full Name", type: "text", autoComplete: "name", required: true },
  { id: "contactNumber", label: "Contact Number", type: "tel", autoComplete: "tel", required: false },
  { id: "email", label: "Official Email Address", type: "email", autoComplete: "email", required: true },
  { id: "organization", label: "Organization / Company", type: "text", autoComplete: "organization", required: true },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission; wire to an API route or form service in production.
    setTimeout(() => setStatus("success"), 900);
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
          Your story is in good hands. We&apos;ll be in touch shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id} className={field.id === "email" || field.id === "organization" ? "sm:col-span-1" : "sm:col-span-1"}>
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
              className="w-full border-b border-line bg-transparent py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
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
          rows={5}
          required
          placeholder="Tell us about the story you'd like to tell…"
          className="w-full resize-none border-b border-line bg-transparent py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
        />
      </div>

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
          "Share your story"
        )}
      </button>
    </form>
  );
}
