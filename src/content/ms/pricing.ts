import type { PricingText } from "@/lib/types";

// Label kad harga dalam src/data/pricing.ts, mengikut id kumpulan dan baris.

export const pricing: PricingText = {
  groups: {
    visit: {
      title: "Lawatan & pemeriksaan",
      description:
        "Setiap kerja bermula dengan lawatan. Anda dapat sebut harga tetap di lokasi sebelum sebarang kerja dimulakan.",
    },
    repairs: {
      title: "Baiki & cari punca kerosakan",
      description:
        "Elektrik trip, plug berpercik, plug mati dan rumah tiada elektrik. Harga bergantung pada kerosakan; anda luluskan dahulu.",
    },
    wiring: {
      title: "Wiring & tukar wiring",
      description:
        "Harga setiap point termasuk kabel, trunking atau konduit dan suis atau plug standard. Kerja pecah dinding (hacking), plaster dan cat disebut harga berasingan.",
    },
    "db-box": {
      title: "DB box, RCCB & bekalan elektrik",
      description:
        "Kerja DB box dengan breaker berkualiti. Tukar single phase ke 3 phase tidak termasuk yuran sambungan dan deposit TNB.",
    },
    lighting: {
      title: "Lampu",
      description:
        "Harga pemasangan adalah untuk lampu yang anda beli sendiri. Kami juga boleh bekalkan pada harga kos dengan resit ditunjukkan.",
    },
    fans: {
      title: "Kipas siling, kipas dinding & exhaust fan",
      description: "Harga upah untuk kipas anda sendiri, termasuk pasang, imbang dan uji jalan.",
    },
    appliances: {
      title: "Water heater & peralatan",
      description:
        "Water heater, hood dapur, point aircond dan EV charger, setiap satu disambung dengan breaker dan perlindungan yang betul.",
    },
    "safety-smart": {
      title: "Pemeriksaan, rumah pintar & keselamatan",
      description: "Pemeriksaan elektrik dengan laporan bertulis, ujian earthing dan naik taraf pintar.",
    },
  },
  rows: {
    "visit-fee": { item: "Lawatan pemeriksaan (caj minimum)" },
    "fault-finding": { item: "Cari punca kerosakan dan ujian (jam pertama)" },
    "tripping-fix": { item: "Elektrik trip: cari punca dan baiki" },
    "short-circuit-repair": { item: "Baiki litar pintas, plug berpercik atau plug terbakar" },
    "power-loss": { item: "Tiada elektrik / sebahagian rumah tiada elektrik" },
    "switch-replace": { item: "Tukar suis (termasuk suis standard)" },
    "socket-replace": { item: "Tukar plug 13A (termasuk plug)" },
    "usb-socket": { item: "Tukar plug USB (upah sahaja)", note: "Plug dibeli sendiri atau dibekalkan pada harga kos" },
    "power-point-surface": { item: "Plug point 13A baru (trunking luar dinding)" },
    "power-point-concealed": { item: "Plug point 13A baru (tersembunyi dalam dinding)" },
    "light-point": { item: "Point lampu baru" },
    "dedicated-circuit": { item: "Litar khas (oven, hob, aircond)" },
    "rewire-room": { item: "Tukar wiring separa (satu bilik)" },
    "rewire-condo": { item: "Tukar wiring penuh: kondo / apartmen (2–3 bilik)" },
    "rewire-single-terrace": { item: "Tukar wiring penuh: rumah teres setingkat" },
    "rewire-double-terrace": { item: "Tukar wiring penuh: rumah teres dua tingkat" },
    "rewire-semi-d": { item: "Tukar wiring penuh: semi-D" },
    "rccb-replace": { item: "Tukar RCCB / ELCB (termasuk unit)" },
    "mcb-replace": { item: "Tukar MCB" },
    "db-single": { item: "Tukar DB box, single phase" },
    "db-three": { item: "Tukar DB box, 3 phase" },
    "three-phase-upgrade": { item: "Tukar single phase ke 3 phase (tidak termasuk yuran TNB)" },
    spd: { item: "Surge protector (SPD)" },
    "light-replace": { item: "Tukar lampu (point sedia ada)" },
    "downlight-new": { item: "Pasang downlight LED baru (tebuk siling plaster)" },
    "light-repair": {
      item: "Lampu tak menyala atau berkelip: cari punca dan baiki",
      note: "Termasuk driver atau starter standard",
    },
    "light-circuit-repair": { item: "Kerosakan litar lampu (beberapa lampu tak menyala)" },
    chandelier: {
      item: "Chandelier atau lampu gantung berat (siling biasa)",
      note: "Bergantung pada berat dan kerja pemasangan",
    },
    "chandelier-high": {
      item: "Chandelier di siling tinggi atau double-volume",
      note: "Termasuk tangga tinggi atau perancah",
    },
    "outdoor-light": { item: "Lampu luar / porch / taman" },
    floodlight: { item: "Lampu limpah (flood light) atau lampu sensor gerakan" },
    "fan-install": {
      item: "Pasang kipas siling (point sedia ada)",
      note: "Termasuk pasang, imbang dan tanggalkan kipas lama",
    },
    "fan-new-point": { item: "Kipas siling dengan point kipas baru" },
    "fan-high-ceiling": { item: "Kipas siling di siling tinggi atau double-volume" },
    "fan-repair": { item: "Baiki kipas siling" },
    "fan-regulator": { item: "Tukar regulator kipas", note: "Termasuk regulator" },
    "wall-fan": { item: "Pasang kipas dinding" },
    "exhaust-fan": { item: "Pasang exhaust fan (point sedia ada)" },
    "exhaust-fan-new-point": { item: "Exhaust fan dengan plug point baru" },
    "heater-install": { item: "Pasang water heater (point sedia ada)" },
    "heater-new-point": { item: "Water heater dengan point baru + RCCB 10mA" },
    "heater-rccb": { item: "Tambah RCCB 10mA pada point water heater sedia ada" },
    "heater-repair": {
      item: "Water heater tak panas atau trip: cari punca dan baiki",
      note: "Elemen atau termostat pada harga kos",
    },
    "cooker-hood": { item: "Pasang hood dapur", note: "Ducting atau pecah dinding disebut harga berasingan" },
    "aircond-point": { item: "Point aircond dengan suis isolator" },
    "appliance-point": { item: "Plug point peti sejuk, oven atau mesin basuh" },
    "ev-landed": { item: "Pasang EV charger (charger anda, rumah landed)" },
    "ev-condo": { item: "Pasang EV charger (kondo)", note: "Sebut harga selepas tinjauan tapak" },
    "inspection-condo": { item: "Pemeriksaan elektrik dengan laporan: kondo" },
    "inspection-landed": { item: "Pemeriksaan elektrik dengan laporan: rumah landed" },
    "earthing-test": { item: "Ujian rintangan earthing" },
    "smart-switch": { item: "Pasang suis pintar" },
    "cctv-point": { item: "Point bekalan loceng pintu / CCTV" },
    "autogate-point": { item: "Point bekalan autogate" },
  },
  notes: [
    "Harga termasuk upah dan bahan standard (kabel, trunking, suis dan plug standard) kecuali dinyatakan sebaliknya.",
    "Kipas, lampu, water heater, hood dapur dan EV charger dibeli sendiri oleh anda, atau dibekalkan oleh kami pada harga kos dengan resit ditunjukkan.",
    "Kerja pecah dinding (hacking), plaster, cat dan tampal siling disebut harga berasingan jika perlu.",
    "Kerja di kondo mengikut permit ubah suai dan waktu kerja pejabat pengurusan (JMB/MC) anda.",
    "Anda sentiasa dapat sebut harga tetap sebelum kerja bermula. Tiada caj mengejut.",
  ],
};
