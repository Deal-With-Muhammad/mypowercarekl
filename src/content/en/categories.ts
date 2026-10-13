import type { CategoryText } from "@/lib/types";

export const categories: CategoryText = {
  repairs: { name: "Repairs & Troubleshooting", blurb: "Tripping, sparking, power loss and same-day repairs." },
  wiring: { name: "Wiring & Rewiring", blurb: "New points, renovation wiring and full house rewires." },
  "db-box": { name: "DB Box & Power Supply", blurb: "Distribution boards, RCCBs, 3-phase and surge protection." },
  "fans-lighting": {
    name: "Lighting & Fans",
    blurb: "Lights, downlights, chandeliers, light repairs and ceiling fans.",
  },
  appliances: {
    name: "Water Heaters & Appliances",
    blurb: "Water heaters, kitchen hoods, exhaust fans, aircond points and EV chargers.",
  },
  "safety-smart": { name: "Safety & Smart Home", blurb: "Inspections, earthing tests and smart upgrades." },
  commercial: { name: "Commercial", blurb: "Shops, offices, F&B outlets and maintenance." },
};
