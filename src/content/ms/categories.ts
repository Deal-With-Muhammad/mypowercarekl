import type { CategoryText } from "@/lib/types";

export const categories: CategoryText = {
  repairs: {
    name: "Baiki & Cari Punca Kerosakan",
    blurb: "Elektrik trip, plug berpercik, rumah tiada elektrik dan kerja baiki hari yang sama.",
  },
  wiring: { name: "Wiring & Tukar Wiring", blurb: "Point baru, wiring ubah suai dan tukar wiring seluruh rumah." },
  "db-box": { name: "DB Box & Bekalan Elektrik", blurb: "DB box, RCCB, 3 phase dan surge protector." },
  "fans-lighting": {
    name: "Lampu & Kipas",
    blurb: "Lampu, downlight, chandelier, baiki lampu dan kipas siling.",
  },
  appliances: {
    name: "Water Heater & Peralatan",
    blurb: "Water heater, hood dapur, exhaust fan, point aircond dan EV charger.",
  },
  "safety-smart": { name: "Keselamatan & Rumah Pintar", blurb: "Pemeriksaan, ujian earthing dan naik taraf pintar." },
  commercial: { name: "Komersial", blurb: "Kedai, pejabat, premis F&B dan kerja penyelenggaraan." },
};
