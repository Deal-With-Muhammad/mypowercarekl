"use server";

import { headers } from "next/headers";
import { getSupabase } from "@/lib/supabase";
import { content as en } from "@/content/en";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export type LeadState = {
  status: "idle" | "success" | "error" | "unconfigured";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "phone" | "message", string>>;
  /** Echoed back so the WhatsApp fallback can pre-fill the same details. */
  summary?: string;
};

const MY_PHONE = /^(\+?6?0)[1-9]\d{7,9}$/;

function clean(value: FormDataEntryValue | null, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: real users never see or fill this field.
  if (clean(formData.get("company"), 100)) return { status: "success" };

  const locale = clean(formData.get("locale"), 5);
  const t = getDictionary(isLocale(locale) ? locale : "en");

  const name = clean(formData.get("name"), 80);
  const phone = clean(formData.get("phone"), 20).replace(/[\s-]/g, "");
  const email = clean(formData.get("email"), 120);
  const serviceSlug = clean(formData.get("service"), 60);
  const areaSlug = clean(formData.get("area"), 60);
  const propertyType = clean(formData.get("property_type"), 40);
  const preferredTime = clean(formData.get("preferred_time"), 40);
  const message = clean(formData.get("message"), 1500);
  const sourcePage = clean(formData.get("source_page"), 200);

  const fieldErrors: LeadState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = t.form.errors.name;
  if (!MY_PHONE.test(phone)) fieldErrors.phone = t.form.errors.phone;
  if (message.length < 5) fieldErrors.message = t.form.errors.message;
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: t.form.errors.check, fieldErrors };
  }

  // Leads are stored with English names so the team sees one vocabulary.
  const serviceName = en.services[serviceSlug]?.name ?? "";
  const areaName = en.areas[areaSlug]?.name ?? "";
  const summary = [
    `Name: ${name}`,
    serviceName && `Service: ${serviceName}`,
    areaName && `Area: ${areaName}`,
    propertyType && `Property: ${propertyType}`,
    preferredTime && `Preferred time: ${preferredTime}`,
    `Details: ${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const supabase = getSupabase();
  if (!supabase) return { status: "unconfigured", summary };

  const h = await headers();
  const { error } = await supabase.from("leads").insert({
    name,
    phone,
    email: email || null,
    service: serviceName || null,
    area: areaName || null,
    property_type: propertyType || null,
    preferred_time: preferredTime || null,
    message,
    source_page: sourcePage || null,
    user_agent: h.get("user-agent")?.slice(0, 300) ?? null,
  });

  if (error) {
    console.error("Lead insert failed", error.message);
    return { status: "error", message: t.form.errors.failed, summary };
  }

  return { status: "success", summary };
}
