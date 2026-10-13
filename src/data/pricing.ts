import type { RateRow } from "@/lib/types";

// Master rate card. Benchmarked against published Klang Valley rates
// (Recommend.my, Prime Electrician, Fastlink Fix, ClickBina and Lowyat quotes,
// 2024–2026) and positioned in the upper-middle of the market. Service pages
// show rows from here by id, so a price changes in one place only. Row and
// group labels live in src/content/<locale>/pricing.ts. Prices also appear in
// the written copy (intros, FAQs, guides), so search src/content for the old
// number when you change one.

export const pricingUpdated = "2026-10-05";

/** Minimum charge for any visit (covers travel and inspection). */
export const visitFee = 80;

export const rateGroups: { id: string; rows: RateRow[] }[] = [
  {
    id: "visit",
    rows: [
      { id: "visit-fee", from: visitFee, unit: "visit", service: "same-day-electrician" },
      { id: "fault-finding", from: 150, unit: "job", service: "power-tripping-repair" },
    ],
  },
  {
    id: "repairs",
    rows: [
      { id: "tripping-fix", from: 150, to: 400, unit: "job", service: "power-tripping-repair" },
      { id: "short-circuit-repair", from: 180, to: 600, unit: "job", service: "short-circuit-sparking-repair" },
      { id: "power-loss", from: 150, to: 350, unit: "job", service: "power-failure-repair" },
      { id: "switch-replace", from: 80, to: 120, unit: "switch", service: "socket-switch-installation" },
      { id: "socket-replace", from: 80, to: 120, unit: "socket", service: "socket-switch-installation" },
      { id: "usb-socket", from: 80, to: 120, unit: "socket", service: "socket-switch-installation" },
    ],
  },
  {
    id: "wiring",
    rows: [
      { id: "power-point-surface", from: 150, to: 250, unit: "point", service: "new-wiring-power-points" },
      { id: "power-point-concealed", from: 250, to: 450, unit: "point", service: "new-wiring-power-points" },
      { id: "light-point", from: 100, to: 150, unit: "point", service: "new-wiring-power-points" },
      { id: "dedicated-circuit", from: 300, to: 500, unit: "circuit", service: "new-wiring-power-points" },
      { id: "rewire-room", from: 1000, to: 2500, unit: "room", service: "house-rewiring" },
      { id: "rewire-condo", from: 6000, to: 10000, unit: "unit", service: "house-rewiring" },
      { id: "rewire-single-terrace", from: 8000, to: 13000, unit: "house", service: "house-rewiring" },
      { id: "rewire-double-terrace", from: 13000, to: 20000, unit: "house", service: "house-rewiring" },
      { id: "rewire-semi-d", from: 18000, to: 30000, unit: "house", service: "house-rewiring" },
    ],
  },
  {
    id: "db-box",
    rows: [
      { id: "rccb-replace", from: 250, to: 450, unit: "unit", service: "rccb-elcb-replacement" },
      { id: "mcb-replace", from: 80, to: 150, unit: "breaker", service: "rccb-elcb-replacement" },
      { id: "db-single", from: 1000, to: 2000, unit: "board", service: "db-box-replacement" },
      { id: "db-three", from: 1800, to: 3500, unit: "board", service: "db-box-replacement" },
      { id: "three-phase-upgrade", from: 5000, to: 8000, unit: "house", service: "three-phase-upgrade" },
      { id: "spd", from: 400, to: 700, unit: "board", service: "surge-protection" },
    ],
  },
  {
    id: "lighting",
    rows: [
      { id: "light-replace", from: 40, to: 80, unit: "light", service: "lighting-installation" },
      { id: "downlight-new", from: 100, to: 150, unit: "light", service: "lighting-installation" },
      { id: "light-repair", from: 80, to: 180, unit: "light", service: "light-repair" },
      { id: "light-circuit-repair", from: 150, to: 350, unit: "job", service: "light-repair" },
      { id: "chandelier", from: 200, to: 450, unit: "fitting", service: "chandelier-installation" },
      { id: "chandelier-high", from: 450, to: 1200, unit: "fitting", service: "chandelier-installation" },
      { id: "outdoor-light", from: 150, to: 250, unit: "fixture", service: "outdoor-lighting" },
      { id: "floodlight", from: 170, to: 300, unit: "fixture", service: "outdoor-lighting" },
    ],
  },
  {
    id: "fans",
    rows: [
      { id: "fan-install", from: 200, unit: "fan", service: "ceiling-fan-installation" },
      { id: "fan-new-point", from: 300, to: 400, unit: "fan", service: "ceiling-fan-installation" },
      { id: "fan-high-ceiling", from: 350, to: 600, unit: "fan", service: "chandelier-installation" },
      { id: "fan-repair", from: 120, to: 250, unit: "fan", service: "ceiling-fan-repair" },
      { id: "fan-regulator", from: 80, to: 150, unit: "regulator", service: "ceiling-fan-repair" },
      { id: "wall-fan", from: 100, to: 150, unit: "fan", service: "ceiling-fan-installation" },
      { id: "exhaust-fan", from: 150, to: 250, unit: "fan", service: "exhaust-fan-kitchen-hood" },
      { id: "exhaust-fan-new-point", from: 280, to: 450, unit: "fan", service: "exhaust-fan-kitchen-hood" },
    ],
  },
  {
    id: "appliances",
    rows: [
      { id: "heater-install", from: 150, to: 250, unit: "unit", service: "water-heater-installation" },
      { id: "heater-new-point", from: 350, to: 550, unit: "unit", service: "water-heater-installation" },
      { id: "heater-rccb", from: 250, to: 450, unit: "unit", service: "water-heater-installation" },
      { id: "heater-repair", from: 150, to: 300, unit: "unit", service: "water-heater-repair" },
      { id: "cooker-hood", from: 200, to: 350, unit: "unit", service: "exhaust-fan-kitchen-hood" },
      { id: "aircond-point", from: 250, to: 400, unit: "point", service: "aircond-power-point" },
      { id: "appliance-point", from: 200, to: 350, unit: "point", service: "appliance-power-points" },
      { id: "ev-landed", from: 1800, to: 2800, unit: "install", service: "ev-charger-installation" },
      { id: "ev-condo", from: 3200, unit: "install", service: "ev-charger-installation" },
    ],
  },
  {
    id: "safety-smart",
    rows: [
      { id: "inspection-condo", from: 250, to: 350, unit: "unit", service: "electrical-safety-inspection" },
      { id: "inspection-landed", from: 350, to: 600, unit: "house", service: "electrical-safety-inspection" },
      { id: "earthing-test", from: 200, to: 300, unit: "test", service: "electrical-safety-inspection" },
      { id: "smart-switch", from: 80, to: 120, unit: "switch", service: "smart-home-wiring" },
      { id: "cctv-point", from: 150, to: 250, unit: "point", service: "smart-home-wiring" },
      { id: "autogate-point", from: 350, to: 650, unit: "point", service: "smart-home-wiring" },
    ],
  },
];

export const rateRows: RateRow[] = rateGroups.flatMap((g) => g.rows);

export function formatRM(n: number) {
  return `RM${n.toLocaleString("en-MY")}`;
}
