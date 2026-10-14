"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

// Routes where the global footer should be hidden.
const HIDE_ON = ["/contact"];

export function ConditionalFooter() {
  const pathname = usePathname();
  if (HIDE_ON.includes(pathname)) return null;
  return <Footer />;
}
