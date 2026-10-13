"use client";

import Link from "next/link";
import { Accordion, Button, Drawer, useOverlayState } from "@heroui/react";
import { PiListBold, PiPhoneFill, PiXBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { Logo } from "./Logo";
import { LanguageButtons } from "./LanguageSwitcher";
import { telLink } from "@/lib/site";
import type { Locale } from "@/i18n/config";

type NavLink = { href: string; label: string };

export function MobileNav({
  locale,
  services,
  links,
  labels,
}: {
  locale: Locale;
  services: { name: string; href: string }[];
  links: NavLink[];
  labels: {
    home: string;
    services: string;
    allServices: string;
    allServicesHref: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    language: string;
    hours: string;
    call: string;
    whatsapp: string;
    whatsappHref: string;
  };
}) {
  const state = useOverlayState();
  const close = () => state.close();

  return (
    <div className="flex items-center lg:hidden">
      <Button isIconOnly variant="ghost" aria-label={labels.openMenu} onPress={state.open} className="size-10">
        <PiListBold className="size-6" />
      </Button>

      <Drawer state={state}>
        <Drawer.Backdrop>
          <Drawer.Content placement="right">
            <Drawer.Dialog aria-label={labels.menu} className="flex h-full flex-col">
              <Drawer.Header className="flex flex-row items-center justify-between border-b border-line pb-4">
                <span onClickCapture={close}>
                  <Logo href={labels.home} className="w-[176px]" />
                </span>
                <Button isIconOnly variant="ghost" aria-label={labels.closeMenu} onPress={close} size="sm">
                  <PiXBold className="size-5" />
                </Button>
              </Drawer.Header>
              <Drawer.Body className="flex-1 overflow-y-auto py-2">
                <Accordion className="-mx-1">
                  <Accordion.Item id="services">
                    <Accordion.Heading>
                      <Accordion.Trigger className="px-1 text-base font-semibold">
                        {labels.services}
                        <Accordion.Indicator />
                      </Accordion.Trigger>
                    </Accordion.Heading>
                    <Accordion.Panel>
                      <Accordion.Body className="px-1 pb-3">
                        <ul>
                          {services.map((s) => (
                            <li key={s.href}>
                              <Link href={s.href} onClick={close} className="block py-2 text-[0.95rem] text-ink/80">
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={labels.allServicesHref}
                          onClick={close}
                          className="mt-1 block py-2 text-sm font-semibold text-brand"
                        >
                          {labels.allServices} →
                        </Link>
                      </Accordion.Body>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
                <ul className="mt-1 border-t border-line pt-1">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} onClick={close} className="block py-3 text-base font-semibold text-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 border-t border-line pt-4">
                  <p className="mb-2 text-xs font-semibold tracking-wider text-slate-text uppercase">{labels.language}</p>
                  <LanguageButtons current={locale} label={labels.language} />
                </div>
              </Drawer.Body>
              <Drawer.Footer className="flex-col gap-2 border-t border-line pt-4">
                <p className="text-center text-xs text-slate-text">{labels.hours}</p>
                <div className="grid w-full grid-cols-2 gap-2">
                  <a href={telLink} data-cta="mobile-menu" className="button button--lg button--outline w-full">
                    <PiPhoneFill /> {labels.call}
                  </a>
                  <a
                    href={labels.whatsappHref}
                    target="_blank"
                    rel="noopener"
                    data-cta="mobile-menu"
                    className="button button--lg w-full bg-whatsapp text-white hover:bg-whatsapp-dark"
                  >
                    <FaWhatsapp /> {labels.whatsapp}
                  </a>
                </div>
              </Drawer.Footer>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
}
