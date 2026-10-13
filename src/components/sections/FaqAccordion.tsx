"use client";

import { Accordion } from "@heroui/react";
import type { Faq } from "@/lib/types";

/** FAQ list. Answers stay in the HTML when collapsed, so search engines read them. */
export function FaqAccordion({ faqs, defaultOpen = 0 }: { faqs: Faq[]; defaultOpen?: number | null }) {
  return (
    <Accordion
      variant="surface"
      allowsMultipleExpanded
      defaultExpandedKeys={defaultOpen === null ? [] : [`faq-${defaultOpen}`]}
      className="w-full border border-line"
    >
      {faqs.map((f, i) => (
        <Accordion.Item key={f.q} id={`faq-${i}`}>
          <Accordion.Heading>
            <Accordion.Trigger className="py-4 text-left text-base font-semibold text-ink sm:text-[1.05rem]">
              {f.q}
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body className="pb-5 text-[0.98rem] leading-relaxed text-slate-text">{f.a}</Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
