import { redirect } from "next/navigation";

// Careers is hidden for now — no open roles. Any direct visit redirects home.
export default function CareersPage() {
  redirect("/");
}
