"use client";

import { startTransition, useActionState, useEffect, useRef } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  Spinner,
  TextArea,
  TextField,
} from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa";
import { PiCheckCircleFill, PiPaperPlaneTiltBold } from "react-icons/pi";
import { submitLead, type LeadState } from "@/lib/lead-action";
import { trackFormSubmit } from "@/components/site/Analytics";
import { whatsappLink } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

type Option = { id: string; name: string };

const initialState: LeadState = { status: "idle" };

function SimpleSelect({
  name,
  label,
  placeholder,
  options,
  defaultValue,
}: {
  name: string;
  label: string;
  placeholder: string;
  options: Option[];
  defaultValue?: string;
}) {
  return (
    <Select name={name} fullWidth placeholder={placeholder} defaultValue={defaultValue ?? null}>
      <Label>{label}</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover className="max-h-72">
        <ListBox>
          {options.map((o) => (
            <ListBox.Item key={o.id} id={o.id} textValue={o.name}>
              {o.name}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
}

export function ContactForm({
  locale,
  sourcePage,
  privacyHref,
  defaultMessage,
  labels: l,
  services,
  areas,
  defaultService,
}: {
  locale: Locale;
  sourcePage: string;
  privacyHref: string;
  defaultMessage: string;
  labels: Dictionary["form"];
  services: Option[];
  areas: Option[];
  defaultService?: string;
}) {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const tracked = useRef(false);

  useEffect(() => {
    if (state.status === "success" && !tracked.current) {
      tracked.current = true;
      trackFormSubmit("contact");
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-line bg-white p-8 text-center">
        <PiCheckCircleFill className="mx-auto size-14 text-whatsapp" aria-hidden />
        <h2 className="mt-4 text-2xl font-bold">{l.successTitle}</h2>
        <p className="mx-auto mt-2 max-w-md text-slate-text">{l.successText}</p>
        <a
          href={whatsappLink(state.summary ? `${l.successMessage}\n${state.summary}` : defaultMessage)}
          target="_blank"
          rel="noopener"
          data-cta="form-success"
          className="button button--lg mt-6 bg-whatsapp px-6 text-white hover:bg-whatsapp-dark"
        >
          <FaWhatsapp className="size-5" aria-hidden /> {l.successButton}
        </a>
      </div>
    );
  }

  return (
    <Form
      // onSubmit instead of action={...}: React resets uncontrolled fields after
      // an action submit, which would wipe the form when validation fails.
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        startTransition(() => formAction(data));
      }}
      className="min-w-0 rounded-lg border border-line bg-white p-5 sm:p-8"
      validationBehavior="aria"
    >
      <h2 className="text-2xl font-bold">{l.title}</h2>
      <p className="mt-1 text-sm text-slate-text">{l.intro}</p>

      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          {l.honeypot} <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="source_page" value={sourcePage} />
      <input type="hidden" name="locale" value={locale} />

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField name="name" isRequired isInvalid={!!state.fieldErrors?.name} autoComplete="name">
          <Label>{l.name}</Label>
          <Input placeholder={l.namePlaceholder} />
          <FieldError>{state.fieldErrors?.name}</FieldError>
        </TextField>
        <TextField name="phone" type="tel" isRequired isInvalid={!!state.fieldErrors?.phone} autoComplete="tel">
          <Label>{l.phone}</Label>
          <Input placeholder="012-345 6789" inputMode="tel" />
          <FieldError>{state.fieldErrors?.phone}</FieldError>
        </TextField>
        <SimpleSelect
          name="service"
          label={l.service}
          placeholder={l.servicePlaceholder}
          options={services}
          defaultValue={defaultService}
        />
        <SimpleSelect name="area" label={l.area} placeholder={l.areaPlaceholder} options={areas} />
        <SimpleSelect
          name="property_type"
          label={l.property}
          placeholder={l.choose}
          options={l.properties.map((p) => ({ id: p, name: p }))}
        />
        <SimpleSelect
          name="preferred_time"
          label={l.when}
          placeholder={l.choose}
          options={l.times.map((p) => ({ id: p, name: p }))}
        />
        <TextField name="email" type="email" autoComplete="email" className="sm:col-span-2">
          <Label>{l.email}</Label>
          <Input placeholder="you@example.com" />
        </TextField>
        <TextField name="message" isRequired isInvalid={!!state.fieldErrors?.message} className="sm:col-span-2">
          <Label>{l.message}</Label>
          <TextArea rows={4} placeholder={l.messagePlaceholder} />
          <Description>{l.messageHint}</Description>
          <FieldError>{state.fieldErrors?.message}</FieldError>
        </TextField>
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="mt-5 rounded-md bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]">
          {state.message}
        </p>
      )}
      {state.status === "unconfigured" && (
        <div role="status" className="mt-5 rounded-md bg-spark-50 px-4 py-3 text-sm text-ink">
          {l.unconfigured}
          <a
            href={whatsappLink(`${l.unconfiguredMessage}\n${state.summary ?? ""}`)}
            target="_blank"
            rel="noopener"
            data-cta="form-fallback"
            className="button mt-3 w-full bg-whatsapp text-white hover:bg-whatsapp-dark"
          >
            <FaWhatsapp aria-hidden /> {l.sendWhatsapp}
          </a>
        </div>
      )}

      <Button type="submit" size="lg" fullWidth isPending={pending} className="mt-6 h-12 bg-brand text-base text-white">
        {({ isPending }) => (
          <>
            {isPending ? <Spinner color="current" size="sm" /> : <PiPaperPlaneTiltBold className="size-5" />}
            {isPending ? l.sending : l.send}
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-slate-text">
        {l.privacy}{" "}
        <a href={privacyHref} className="underline">
          {l.privacyLink}
        </a>
        .
      </p>
    </Form>
  );
}
