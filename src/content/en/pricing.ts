import type { PricingText } from "@/lib/types";

// Labels for the rate card in src/data/pricing.ts, keyed by group and row id.

export const pricing: PricingText = {
  groups: {
    visit: {
      title: "Visit & inspection",
      description: "Every job starts with a visit. You get a fixed quote on site before any work begins.",
    },
    repairs: {
      title: "Repairs & troubleshooting",
      description: "Tripping, sparking, dead sockets and power loss. Price depends on the fault; you approve it first.",
    },
    wiring: {
      title: "Wiring & rewiring",
      description:
        "Per-point prices include cable, trunking or conduit and a standard switch or socket. Hacking, plastering and painting are quoted separately.",
    },
    "db-box": {
      title: "DB box, RCCB & power supply",
      description:
        "Distribution board work with quality breakers. Single-phase to 3-phase upgrades exclude TNB's own connection fee and deposit.",
    },
    lighting: {
      title: "Lighting",
      description:
        "Installation prices are for your own light fittings. We can also supply them at cost with the receipt shown.",
    },
    fans: {
      title: "Ceiling, wall & exhaust fans",
      description: "Labour prices for your own fan, including assembly, balancing and a test run.",
    },
    appliances: {
      title: "Water heaters & appliances",
      description:
        "Water heaters, kitchen hoods, aircond points and EV chargers, each wired with the right breaker and protection.",
    },
    "safety-smart": {
      title: "Inspections, smart home & security",
      description: "Electrical inspections with a written report, earthing tests and smart upgrades.",
    },
  },
  rows: {
    "visit-fee": { item: "Inspection visit (minimum charge)" },
    "fault-finding": { item: "Fault finding and testing (first hour)" },
    "tripping-fix": { item: "Power tripping: find and fix" },
    "short-circuit-repair": { item: "Short circuit, sparking or burnt socket repair" },
    "power-loss": { item: "No power / partial power loss" },
    "switch-replace": { item: "Switch replacement (standard switch included)" },
    "socket-replace": { item: "13A socket replacement (socket included)" },
    "usb-socket": { item: "USB socket replacement (labour)", note: "Socket by you or at cost" },
    "power-point-surface": { item: "New 13A power point (surface trunking)" },
    "power-point-concealed": { item: "New 13A power point (concealed in wall)" },
    "light-point": { item: "New light point" },
    "dedicated-circuit": { item: "Dedicated circuit (oven, hob, aircond)" },
    "rewire-room": { item: "Partial rewiring (one room)" },
    "rewire-condo": { item: "Full rewiring: condo / apartment (2–3 bed)" },
    "rewire-single-terrace": { item: "Full rewiring: single-storey terrace" },
    "rewire-double-terrace": { item: "Full rewiring: double-storey terrace" },
    "rewire-semi-d": { item: "Full rewiring: semi-D" },
    "rccb-replace": { item: "RCCB / ELCB replacement (unit included)" },
    "mcb-replace": { item: "MCB replacement" },
    "db-single": { item: "DB box replacement, single-phase" },
    "db-three": { item: "DB box replacement, 3-phase" },
    "three-phase-upgrade": { item: "Single to 3-phase upgrade (excl. TNB fees)" },
    spd: { item: "Surge protection device (SPD)" },
    "light-replace": { item: "Light fitting replacement (existing point)" },
    "downlight-new": { item: "New cut-in LED downlight (plaster ceiling)" },
    "light-repair": {
      item: "Light not working or flickering: find and fix",
      note: "Standard driver or starter included",
    },
    "light-circuit-repair": { item: "Lighting circuit fault (several lights out)" },
    chandelier: { item: "Chandelier or heavy pendant (normal ceiling)", note: "Depends on weight and assembly" },
    "chandelier-high": {
      item: "Chandelier on a high or double-volume ceiling",
      note: "Includes tall ladder or tower scaffold",
    },
    "outdoor-light": { item: "Outdoor / porch / garden light" },
    floodlight: { item: "Flood light or motion-sensor light" },
    "fan-install": {
      item: "Ceiling fan installation (existing point)",
      note: "Includes assembly, balancing and removing the old fan",
    },
    "fan-new-point": { item: "Ceiling fan with new fan point" },
    "fan-high-ceiling": { item: "Ceiling fan on a high or double-volume ceiling" },
    "fan-repair": { item: "Ceiling fan repair" },
    "fan-regulator": { item: "Fan regulator replacement", note: "Regulator included" },
    "wall-fan": { item: "Wall fan installation" },
    "exhaust-fan": { item: "Exhaust fan installation (existing point)" },
    "exhaust-fan-new-point": { item: "Exhaust fan with new power point" },
    "heater-install": { item: "Water heater installation (existing point)" },
    "heater-new-point": { item: "Water heater with new point + 10mA RCCB" },
    "heater-rccb": { item: "10mA RCCB added to existing heater point" },
    "heater-repair": {
      item: "Water heater not heating or tripping: find and fix",
      note: "Element or thermostat at cost",
    },
    "cooker-hood": { item: "Kitchen hood installation", note: "Ducting or wall hacking quoted separately" },
    "aircond-point": { item: "Aircond power point with isolator" },
    "appliance-point": { item: "Fridge, oven or washer power point" },
    "ev-landed": { item: "EV charger installation (your charger, landed)" },
    "ev-condo": { item: "EV charger installation (condo)", note: "Quoted after survey" },
    "inspection-condo": { item: "Electrical inspection with report: condo" },
    "inspection-landed": { item: "Electrical inspection with report: landed" },
    "earthing-test": { item: "Earthing resistance test" },
    "smart-switch": { item: "Smart switch installation" },
    "cctv-point": { item: "Doorbell / CCTV power point" },
    "autogate-point": { item: "Autogate power point" },
  },
  notes: [
    "Prices include labour and standard materials (cable, trunking, standard switches and sockets) unless the item says otherwise.",
    "Fans, light fittings, water heaters, kitchen hoods and EV chargers are supplied by you, or by us at cost with the receipt shown.",
    "Hacking, plastering, painting and ceiling patching are quoted separately when needed.",
    "Condo work follows your management office's renovation permit and working hours.",
    "You always get a fixed quote before work starts. No surprise charges.",
  ],
};
