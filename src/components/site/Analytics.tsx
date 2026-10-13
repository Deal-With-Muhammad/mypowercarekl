"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

/**
 * Sends GA4 events for the actions that matter to this business:
 * WhatsApp clicks, phone clicks and email clicks, from any link on any page.
 * Mark a link with data-cta="hero" etc. to see where the click came from.
 */
export function ContactClickTracker() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GA_ID) return;

    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const location = link.dataset.cta ?? "inline";
      const page = window.location.pathname;

      if (href.includes("wa.me/")) {
        sendGAEvent("event", "whatsapp_click", { cta_location: location, page_path: page });
        sendGAEvent("event", "generate_lead", { method: "whatsapp", page_path: page });
      } else if (href.startsWith("tel:")) {
        sendGAEvent("event", "phone_click", { cta_location: location, page_path: page });
        sendGAEvent("event", "generate_lead", { method: "phone", page_path: page });
      } else if (href.startsWith("mailto:")) {
        sendGAEvent("event", "email_click", { cta_location: location, page_path: page });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

export function trackFormSubmit(form: string) {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  sendGAEvent("event", "generate_lead", { method: "form", form_name: form });
}
