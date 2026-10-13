import type { LocaleContent } from "@/lib/types";
import { servicesPart1 } from "./services-1";
import { servicesPart2 } from "./services-2";
import { areasPart1 } from "./areas-1";
import { areasPart2 } from "./areas-2";
import { guidesPart1 } from "./guides-1";
import { guidesPart2 } from "./guides-2";
import { faqGroups } from "./faqs";
import { pricing } from "./pricing";
import { categories } from "./categories";

export const content: LocaleContent = {
  services: { ...servicesPart1, ...servicesPart2 },
  areas: { ...areasPart1, ...areasPart2 },
  guides: { ...guidesPart1, ...guidesPart2 },
  faqGroups,
  pricing,
  categories,
};
