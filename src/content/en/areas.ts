import type { AreaText } from "@/lib/types";

// English area copy. Each entry is written for that area's housing stock so the
// pages are useful on their own, not thin doorway pages.

export const areas: Record<string, AreaText> = {
  "mont-kiara": {
    name: "Mont Kiara",
    intro:
      "Most of our Mont Kiara jobs are in high-rise condos from the late 1990s onwards, where every job goes through the management office. Common calls are water heaters tripping the RCCB, tired downlights, extra sockets for home offices and EV charger points that need JMB approval first.",
    housing: "Expat-oriented high-rise condos and serviced residences, late 1990s to new launches",
    neighbourhoods: ["Jalan Kiara", "Jalan Duta Kiara", "Solaris Mont Kiara", "Kiaramas", "Dutamas (Publika)"],
    landmarks: ["Publika", "163 Retail Park", "Plaza Mont Kiara", "Mont Kiara International School"],
    commonIssues: [
      "Water heaters sharing the main 30mA RCCB instead of a dedicated 10mA unit, causing bathroom trips",
      "Halogen downlights and transformers failing in 1990s and 2000s units",
      "EV charger requests that need JMB approval and a cable route from the unit DB to the parking bay",
      "Renovation permits, deposits and weekday-only working hours set by building management",
    ],
    faqs: [
      {
        q: "Do you work in Mont Kiara condos on weekends?",
        a: "Yes, if your management allows it. Many buildings only permit noisy work on weekdays, so at weekends we stick to quiet jobs like replacing an RCCB, fixing a water heater or changing lights. Send us the house rules on WhatsApp.",
      },
      {
        q: "Can you install an EV charger in my Mont Kiara condo car park?",
        a: "Usually, but the JMB or management must approve it first. We check the load on your unit DB and the cable route to your bay, then give you a fixed quote and a simple drawing to submit with your application.",
      },
    ],
  },
  bangsar: {
    name: "Bangsar",
    intro:
      "Bangsar has two kinds of job. The 1960s and 70s terraces in Bangsar Baru and the bungalows on Bukit Bandaraya often still have original wiring, so rewires and DB upgrades are common. Bangsar South is newer high-rise, where we fix lighting, sockets and condo DB faults. We also wire F&B shops around Jalan Telawi.",
    housing:
      "1960s–70s terraces and bungalows in Bangsar Baru and Bukit Bandaraya, 2010s high-rise in Bangsar South, Telawi shoplots",
    neighbourhoods: [
      "Bangsar Baru",
      "Bangsar Park",
      "Bukit Bandaraya",
      "Lucky Garden",
      "Bukit Pantai",
      "Bangsar South",
    ],
    landmarks: ["Bangsar Village", "Bangsar Shopping Centre", "Jalan Telawi", "LRT Bangsar station"],
    commonIssues: [
      "Original 50-year-old wiring and undersized cables uncovered when Bangsar Baru terraces are renovated",
      "Old DB boards with rewireable fuses or no RCCB in pre-1980 bungalows",
      "Kitchen and aircon circuits overloaded in F&B shoplots along Jalan Telawi",
      "Condo renovation permits and fixed working hours in Bangsar South towers",
    ],
    faqs: [
      {
        q: "We're renovating a Bangsar Baru terrace. Should we rewire at the same time?",
        a: "If the wiring is original, yes. Rewiring is cheaper and less messy while walls and ceilings are already open. We check the cables and DB, mark out new points with you and your contractor, and test everything before the walls are closed.",
      },
      {
        q: "Do you do shop wiring for cafés and restaurants in Bangsar?",
        a: "Yes. For Telawi and Bangsar South outlets we add circuits for kitchen equipment, aircon, signage and lighting, and can work outside your trading hours. If the shop needs more load than the supply allows, we tell you before quoting.",
      },
    ],
  },
  cheras: {
    name: "Cheras",
    intro:
      "Many houses we visit in Cheras are 1970s and 80s terraces in Taman Connaught, Taman Midah and Bandar Tun Razak. Plenty still have their first DB box, sometimes with an old ELCB that trips for no clear reason, and too few sockets for today's aircons. Newer condos along the MRT line usually need smaller, quicker fixes.",
    housing: "1970s–80s single and double-storey terraces, low-cost flats, newer condos along the MRT line",
    neighbourhoods: [
      "Taman Connaught",
      "Taman Midah",
      "Bandar Tun Razak",
      "Taman Segar",
      "Taman Maluri",
      "Taman Mutiara",
      "Taman Taynton View",
    ],
    landmarks: [
      "EkoCheras Mall",
      "Leisure Mall",
      "Taman Connaught night market",
      "Hospital Canselor Tuanku Muhriz (HUKM)",
    ],
    commonIssues: [
      "Original 1970s and 80s DB boxes with old ELCBs that trip randomly or not at all",
      "Too few socket points, leading to extension leads and overloaded adaptors",
      "Supply and cables not sized for several aircons and an instant water heater running together",
      "Burnt switch sockets and loose neutral connections in ageing terraces",
    ],
    faqs: [
      {
        q: "My Cheras terrace still has an old ELCB. Do I need to replace it?",
        a: "Most likely. ELCBs fitted in the 1970s and 80s often fail to trip when they should, or trip on harmless leakage. We test it first, and if it's faulty we replace it with a modern RCCB. It's usually a same-day job.",
      },
      {
        q: "Do you cover Cheras Selangor as well as the KL side?",
        a: "Yes. We cover Cheras KL, from Taman Connaught to Bandar Tun Razak, and the Selangor side around Batu 9, Bandar Mahkota Cheras and Sungai Long. The Selangor side can take longer in evening traffic, so we give you an estimate when you message.",
      },
    ],
  },
  kepong: {
    name: "Kepong",
    intro:
      "Kepong mixes 1960s and 70s terraces and shophouses in Kepong Baru with newer condos around Metro Prima and Jinjang. In older houses we often find rewireable fuses, taped-over DIY joints and kitchens that trip when the rice cooker and kettle run together. Shophouse owners call us when upstairs rental units need their own circuits.",
    housing: "1960s–70s terraces and shophouses in Kepong Baru, 1990s flats, newer condos near Metro Prima",
    neighbourhoods: [
      "Kepong Baru",
      "Taman Bukit Maluri",
      "Taman Daya",
      "Metro Prima",
      "Jinjang",
      "Taman Usahawan Kepong",
    ],
    landmarks: ["FRIM (Forest Research Institute Malaysia)", "Kepong Metropolitan Park", "Metro Prima", "Brem Mall"],
    commonIssues: [
      "Rewireable fuse boards still in use in original Kepong Baru terraces",
      "Kitchen circuits tripping when several appliances run at once",
      "Shophouse upper floors converted to rooms without separate circuits",
      "Ageing cables behind walls showing heat damage at socket points",
    ],
    faqs: [
      {
        q: "Can you split the wiring in my Kepong shophouse for upstairs tenants?",
        a: "Yes. We give each floor or room its own circuits and breakers in a proper DB, so one tenant's fault doesn't cut power to everyone. If you want separate TNB meters, we explain the application. You get a fixed quote first.",
      },
      {
        q: "How fast can you reach Kepong if my power is out?",
        a: "From central KL it's usually 60–90 minutes, depending on traffic on the MRR2 and Jalan Kepong. We offer same-day visits every day, so book in the morning and most faults are fixed the same day.",
      },
    ],
  },
  setapak: {
    name: "Setapak",
    intro:
      "Setapak has 1970s and 80s terraces and walk-up flats, newer condos and a large rental market around TAR UMT. Landlords make up much of our work here: fixing tripping between tenancies, replacing burnt sockets in shared houses and adding circuits when a terrace is split into rooms. Owner-occupiers usually call about old DBs and water heaters.",
    housing: "1970s–80s terraces and walk-up flats, student rentals near TAR UMT, newer condos",
    neighbourhoods: ["Setapak Jaya", "Danau Kota", "Taman Melati", "Genting Klang", "Taman Ibu Kota"],
    landmarks: ["TAR UMT", "Setapak Central", "LRT Taman Melati station"],
    commonIssues: [
      "Overloaded circuits in terraces converted into student rooms, each with its own aircon",
      "Burnt switches and sockets from heavy use in shared rental houses",
      "Old DB boards without RCCB protection in original terraces",
    ],
    faqs: [
      {
        q: "I rent my Setapak house to students. Can you check it between tenants?",
        a: "Yes. We check the DB, RCCB, sockets, aircon points and water heaters, fix anything unsafe and send you a short report with photos on WhatsApp. It's useful proof for the next tenancy and catches faults early.",
      },
      {
        q: "Can each room in a shared house have its own breaker?",
        a: "Yes. We can rewire so every room has its own circuit and breaker in the main DB, which stops one tenant's heater or aircon tripping the whole house. We check that your supply can carry the total load before quoting.",
      },
    ],
  },
  "wangsa-maju": {
    name: "Wangsa Maju",
    intro:
      "Wangsa Maju was planned in the 1980s as Seksyen 1 to 10, so much of the housing is now 35 to 40 years old. Flats and apartments make up a big share, alongside terraces and newer condos near the LRT. Typical jobs are worn DB boxes, extra kitchen sockets and water heaters that trip the RCCB.",
    housing: "1980s flats, apartments and terraces across Seksyen 1–10, newer condos near the LRT",
    neighbourhoods: ["Wangsa Maju Seksyen 1–10", "Wangsa Melawati", "Sri Rampai", "Taman Bunga Raya", "Desa Setapak"],
    landmarks: ["Wangsa Walk Mall", "LRT Wangsa Maju station", "Alpha Angle"],
    commonIssues: [
      "35–40-year-old wiring and DB boxes in original flats and terraces",
      "Kitchens with only one or two socket points for modern appliances",
      "Water heaters tripping the main RCCB because they lack a dedicated 10mA unit",
    ],
    faqs: [
      {
        q: "Which parts of Wangsa Maju do you cover?",
        a: "All of it, from Seksyen 1 to 10, plus Wangsa Melawati, Sri Rampai and Desa Setapak. Most visits are to flats, so tell us the block, the floor and whether there's a lift when you WhatsApp, and we'll bring the right tools.",
      },
      {
        q: "My apartment's water heater keeps tripping the power. Is it the heater or the wiring?",
        a: "It can be either. We test the heater element for leakage, then check the RCCB and wiring. Often the heater shares the house's 30mA RCCB when it should have its own 10mA unit. We show you the readings and quote first.",
      },
    ],
  },
  "sri-petaling": {
    name: "Sri Petaling",
    intro:
      "Bandar Baru Sri Petaling went up in the 1980s with terraces, low-rise apartments and rows of shoplots, later joined by condos near the LRT. The shoplots are full of restaurants, so many calls are commercial: overloaded kitchen circuits, three-phase faults and tripping at dinner time. Residential jobs are mostly ageing DB boxes and extra sockets.",
    housing: "1980s terraces and low-rise apartments, dense shoplots, 2000s condos near the LRT",
    neighbourhoods: ["Bandar Baru Sri Petaling", "Taman Sri Endah", "Jalan Radin Bagus", "Jalan Radin Anum"],
    landmarks: ["LRT Sri Petaling station", "Endah Parade", "Jalan Radin Bagus food strip"],
    commonIssues: [
      "Restaurant kitchens overloading circuits and tripping at peak hours",
      "Three-phase imbalance in shoplots with heavy cooking and refrigeration loads",
      "Original 1980s DB boxes and wiring in terraces",
    ],
    faqs: [
      {
        q: "Can you fix tripping in my Sri Petaling restaurant without closing for the day?",
        a: "Usually, yes. We come before you open or between services, find the overloaded or faulty circuit and balance the load across phases. If a bigger change is needed, such as a kitchen sub-DB, we quote it and schedule around your trading hours.",
      },
      {
        q: "Do you rewire older Sri Petaling terraces?",
        a: "Yes. Many terraces here are around 40 years old with original wiring. We do full or partial rewires, for example the kitchen and bathrooms first, with a fixed quote and a 12-month workmanship warranty. Most families stay in the house while we work.",
      },
    ],
  },
  "bukit-jalil": {
    name: "Bukit Jalil",
    intro:
      "Since the 1998 Commonwealth Games put the National Stadium here, Bukit Jalil has filled with 2000s and 2020s condos and gated landed homes, with Pavilion Bukit Jalil at its centre. The wiring is mostly modern, so we're called for upgrades more than repairs: EV chargers, smart switches, feature lighting and extra power points.",
    housing: "2000s–2020s condos and serviced residences, gated link houses and semi-Ds",
    neighbourhoods: [
      "Bukit Jalil City",
      "Taman Esplanad",
      "Bukit Jalil Golf & Country Resort",
      "Technology Park Malaysia",
      "Jalan Jalil Perkasa",
    ],
    landmarks: [
      "Bukit Jalil National Stadium",
      "Pavilion Bukit Jalil",
      "Axiata Arena",
      "Bukit Jalil Recreational Park",
    ],
    commonIssues: [
      "EV charger installs that need load checks and JMB or residents' association approval",
      "Smart switches and dimmers that don't suit the existing LED fittings",
      "Handover defects in new units, such as loose terminations and mislabelled DB circuits",
      "Aircon and water heater circuits added during renovation without upgrading the DB",
    ],
    faqs: [
      {
        q: "Can you install an EV charger at my Bukit Jalil landed house?",
        a: "Yes. We check your incoming supply and DB, run a dedicated circuit with RCD protection and mount the charger where the cable reaches your car. Many gated communities want to be informed first, so we can share the plan with management.",
      },
      {
        q: "I just got the keys to a new Bukit Jalil condo. Can you check the wiring before I move in?",
        a: "Yes, and it's worth doing before the defect liability period ends. We test every socket, the RCCB and earthing, check the DB labels and look for loose connections. You get a list with photos to submit to the developer.",
      },
    ],
  },
  ampang: {
    name: "Ampang",
    intro:
      "Ampang crosses the KL and Selangor border, so in one week we might rewire an older bungalow in Ampang Hilir and fix a tripping 1970s terrace in Taman Ampang Utama. Large KL-side homes carry heavy lighting, pump and aircon loads. Hillside estates and mature terraces on the Selangor side mostly need DB upgrades and outdoor wiring repairs.",
    housing:
      "Large bungalows and embassy residences in Ampang Hilir, 1970s–80s terraces in Ampang Jaya, hillside landed homes and condos",
    neighbourhoods: [
      "Ampang Hilir",
      "Taman U-Thant",
      "Taman Ampang Utama",
      "Pandan Indah",
      "Taman Kosas",
      "Bukit Indah",
      "Taman Dagang",
    ],
    landmarks: ["Ampang Point", "Great Eastern Mall", "LRT Ampang station", "Bukit Ampang lookout"],
    commonIssues: [
      "Ageing wiring and undersized DBs in large older bungalows running many aircons",
      "Garden lighting and outdoor sockets tripping after heavy rain on hillside properties",
      "Water pump and autogate faults in landed homes",
      "Original 1970s–80s wiring in Taman Ampang Utama and Pandan terraces",
    ],
    faqs: [
      {
        q: "Do you cover both the KL and Selangor sides of Ampang?",
        a: "Yes. We work in Ampang Hilir and around Jalan U-Thant on the KL side, and in Ampang Jaya, Taman Ampang Utama, Pandan Indah and the hillside estates in Selangor. Prices are the same on both sides, with a minimum charge of RM80 per visit.",
      },
      {
        q: "My garden lights trip the house every time it rains. Can you fix that?",
        a: "Yes. On Ampang's hillside homes it's usually water in outdoor fittings, junction boxes or buried cable joints. We find the leak with an insulation test, fit weatherproof replacements and, if needed, put the outdoor circuit on its own RCCB.",
      },
    ],
  },
  sentul: {
    name: "Sentul",
    intro:
      "Sentul grew up around the old KTM railway workshops, and its walk-up flats, shophouses and small terraces often have wiring patched over decades. Beside them sit the Sentul East and Sentul West condos, where we mostly do lighting, socket and water heater work. In the older buildings, the usual jobs are DB replacements and partial rewires.",
    housing: "Old walk-up flats, shophouses and small terraces, plus 2000s–2020s condos in Sentul East and Sentul West",
    neighbourhoods: [
      "Sentul Pasar",
      "Sentul East",
      "Sentul West",
      "Bandar Baru Sentul",
      "Taman Dato Senu",
      "Kampung Batu",
    ],
    landmarks: [
      "Sentul Park",
      "Kuala Lumpur Performing Arts Centre (KLPac)",
      "KTM Sentul station",
      "LRT Sentul Timur station",
    ],
    commonIssues: [
      "Decades of patched and extended wiring in old Sentul Pasar shophouses",
      "Undersized DB boxes in walk-up flats now running aircons and instant heaters",
      "Condo renovation rules and lift booking in Sentul East and West towers",
    ],
    faqs: [
      {
        q: "Can you rewire an old Sentul shophouse floor by floor?",
        a: "Yes. Phasing is common when the ground floor is a business and the upper floors are lived in. We start with the most urgent floor, keep the rest running where possible and test each stage. One fixed quote covers all stages.",
      },
      {
        q: "Do you work in the Sentul East and Sentul West condos?",
        a: "Yes. Most jobs there are light fittings, extra sockets, water heater circuits and RCCB trips. We follow management rules on working hours and lift use, so tell us your block and any permit needed before the visit.",
      },
    ],
  },
  "taman-tun-dr-ismail": {
    name: "Taman Tun Dr Ismail (TTDI)",
    intro:
      "TTDI was built from 1974 on a former rubber estate, so most terraces and semi-Ds are 40 to 50 years old. Many still run the original cabling, and when owners renovate we usually recommend a rewire and a new DB box rather than adding load to old circuits. Storm tripping from porch lights and outdoor sockets is also common.",
    housing: "1970s–80s terraces, semi-Ds and bungalows on the old rubber estate, a few newer condos at the edges",
    neighbourhoods: [
      "Jalan Datuk Sulaiman",
      "Jalan Tun Mohd Fuad",
      "Jalan Burhanuddin Helmi",
      "Jalan Wan Kadir",
      "Jalan Abang Haji Openg",
      "Jalan Leong Yew Koh",
    ],
    landmarks: ["Taman Rimba Kiara", "MRT TTDI station", "Pasar TTDI", "Glo Damansara"],
    commonIssues: [
      "40–50-year-old original cabling with brittle insulation in terraces and semi-Ds",
      "Old DB boxes with no RCCB, or with outdated ELCBs",
      "Porch lights and garden sockets tripping the house during monsoon storms",
      "Kitchen and aircon extensions added to old circuits during renovations",
    ],
    faqs: [
      {
        q: "Our TTDI house has its original 1970s wiring. Is a full rewire really needed?",
        a: "Not always. We start with an insulation resistance test on each circuit. If the readings are poor or the cable is brittle, a rewire is the safe option. If some circuits test fine, a partial rewire and a new DB can be enough.",
      },
      {
        q: "Can you rewire a TTDI terrace while we're still living there?",
        a: "Yes. We work room by room so most of the house keeps power, cover furniture and clean up daily, and restore power each evening. A single-storey terrace takes about 3–5 working days, a double-storey about 5–8.",
      },
    ],
  },
  "desa-parkcity": {
    name: "Desa ParkCity",
    intro:
      "Built from the 2000s around Central Park and The Waterfront, Desa ParkCity has premium terraces, semi-Ds and condos that are still fairly young. Homeowners here mostly call us for upgrades: designer and garden lighting, smart switches, extra circuits for renovations and EV chargers. We follow the township's contractor rules on every job.",
    housing: "2000s–2020s premium landed homes and condos in a master-planned township",
    neighbourhoods: ["The Waterfront", "Central Park", "Westside", "The Breezeway", "Clearwater", "Casaview"],
    landmarks: ["Central Park Desa ParkCity", "The Waterfront", "Plaza Arkadia"],
    commonIssues: [
      "Designer lighting and dimmers flickering because of mismatched LED drivers",
      "EV charger installs that need supply checks and estate management approval",
      "Smart switch retrofits in switch boxes with no neutral wire",
      "Contractor registration and working-hour rules set by estate management",
    ],
    faqs: [
      {
        q: "Can you install smart switches in my Desa ParkCity home?",
        a: "Yes. We first check whether your switch boxes have a neutral wire, because many smart switches need one. If not, we run a neutral or suggest a no-neutral model that suits your lights, then test every circuit before leaving.",
      },
      {
        q: "Do you follow the contractor rules in Desa ParkCity?",
        a: "Yes. Precincts usually ask contractors to register at the guard house or management office and keep to set hours. Send us your precinct's rules, and we'll bring the details they ask for and plan noisy work for the permitted times.",
      },
    ],
  },
  "old-klang-road": {
    name: "Old Klang Road",
    intro:
      "Along Jalan Klang Lama, older neighbourhoods like OUG and Taman Desa sit beside a steady stream of new condos. The 1960s and 70s OUG terraces are where we do most rewiring and DB replacement, often because original fuses and cabling can't cope with modern aircon loads. In newer towers, calls are usually RCCB trips, lighting and water heaters.",
    housing: "1960s–70s OUG terraces, 1980s Taman Desa homes and apartments, many 2010s–2020s condos",
    neighbourhoods: [
      "OUG (Taman Overseas Union)",
      "Taman Desa",
      "Taman Gembira",
      "Taman Sri Sentosa",
      "Taman Yarl",
      "Bukit OUG",
    ],
    landmarks: ["Pearl Point", "Scott Garden", "Mid Valley Megamall"],
    commonIssues: [
      "Rewireable fuse boards and original cabling in OUG terraces",
      "Aircon circuits added over the years without upgrading the main switch or DB",
      "Condo JMB permits and working hours for renovation wiring",
    ],
    faqs: [
      {
        q: "My OUG house still has the old fuse box. What does replacing it involve?",
        a: "We replace the rewireable fuse board with a modern DB with MCBs and an RCCB, label every circuit and test the wiring behind it. If some cables are too degraded to reconnect, we show you and quote separately. The DB change usually takes a day.",
      },
      {
        q: "How long does it take you to reach Old Klang Road?",
        a: "Usually 45–75 minutes from central KL, though peak traffic near Mid Valley can stretch that. For tripping or a burning smell, switch off at the DB box if it's safe to do so, then WhatsApp us for a same-day visit.",
      },
    ],
  },
  "kuchai-lama": {
    name: "Kuchai Lama",
    intro:
      "About half our Kuchai Lama work is commercial. Kuchai Entrepreneurs Park is full of shop-offices, workshops and food outlets, so jobs there are usually three-phase faults, extra power points and fit-out lighting. Older Taman Kuchai terraces need DB upgrades and rewiring, while the newer condos near the MRT mostly need small repairs and fittings.",
    housing: "Shop-offices and light industrial units, older terraces in Taman Kuchai, 2010s–2020s condos",
    neighbourhoods: [
      "Kuchai Entrepreneurs Park",
      "Jalan Kuchai Lama",
      "Jalan Kuchai Maju",
      "Taman Kuchai",
      "Taman Naga Emas",
    ],
    landmarks: ["Kuchai Entrepreneurs Park", "MRT Kuchai station", "MRT Taman Naga Emas station"],
    commonIssues: [
      "Three-phase imbalance and tripping in shop-offices with workshops and kitchens",
      "Office fit-outs that need new socket layouts and LED panel lighting",
      "Ageing wiring and DB boxes in older Taman Kuchai terraces",
    ],
    faqs: [
      {
        q: "Do you handle three-phase wiring for shop-offices in Kuchai Entrepreneurs Park?",
        a: "Yes. We trace tripping on three-phase boards, balance loads across phases, add sub-DBs for kitchens or machines and install new points for fit-outs. Bigger jobs can be scheduled outside your business hours so the shop keeps running.",
      },
      {
        q: "Can you do the electrical work for my new office fit-out in Kuchai Lama?",
        a: "Yes. Send us the floor plan or photos on WhatsApp and we'll quote sockets, lighting, aircon circuits and DB changes as one fixed price. We coordinate with your interior designer or contractor and test everything before handover.",
      },
    ],
  },
  segambut: {
    name: "Segambut",
    intro:
      "In Segambut Dalam and the older kampung-style lanes, houses have often been extended room by room, and the wiring has grown the same way: long surface runs, mixed cable sizes and joints nobody has checked in years. Near Jalan Duta and the KL Courts Complex, newer condos bring routine lighting, socket and RCCB work.",
    housing: "Old kampung-style houses with later extensions, older terraces, newer condos near Jalan Duta",
    neighbourhoods: ["Segambut Dalam", "Segambut Tengah", "Taman Sri Sinar", "Jalan Segambut", "Jalan Duta"],
    landmarks: ["Kuala Lumpur Courts Complex", "KTM Segambut station", "MITEC"],
    commonIssues: [
      "Ad-hoc wiring extensions with mixed cable sizes in kampung-style houses",
      "Surface wiring and junctions exposed to damp and heat",
      "Missing or faulty earthing in older homes",
      "Management permits for work in the newer condo towers",
    ],
    faqs: [
      {
        q: "Our Segambut house has been extended a few times. Can you make the wiring safe?",
        a: "Yes. We trace every circuit back to the DB, find undersized or badly joined cables and check the earthing. Then we quote to fix the unsafe parts first, with a full rewire only if testing shows it's needed.",
      },
      {
        q: "Do you cover the new condos near Jalan Duta in Segambut?",
        a: "Yes. For condo units we handle RCCB trips, water heater circuits, light fittings and extra sockets. If your building needs a work permit or lift booking, tell us when you message and we'll plan the visit around it.",
      },
    ],
  },
  "sri-hartamas": {
    name: "Sri Hartamas",
    intro:
      "Sri Hartamas took shape in the 1990s, with condos, terraces and semi-Ds in Desa Sri Hartamas and a busy strip of restaurants and bars. At around 30 years old, homes are reaching the age when DB boxes, switches and water heater circuits start to fail. Restaurants near Plaza Damas call us for kitchen circuits, signage and lighting.",
    housing: "1990s condos, terraces and semi-Ds, with F&B shoplots along the main commercial strip",
    neighbourhoods: ["Desa Sri Hartamas", "Jalan Sri Hartamas 1", "Plaza Damas", "Hartamas Heights", "Dutamas"],
    landmarks: ["Plaza Damas", "Hartamas Shopping Centre"],
    commonIssues: [
      "30-year-old DB boxes and switches starting to fail in 1990s homes",
      "Water heater RCCB trips in older condo bathrooms",
      "Overloaded kitchen and aircon circuits in restaurants near Plaza Damas",
    ],
    faqs: [
      {
        q: "My 1990s Sri Hartamas condo trips every few days. What's usually the cause?",
        a: "In buildings this age it's often a worn RCCB, a leaking water heater element or moisture in a bathroom or balcony fitting. We isolate each circuit to find the cause, show you the readings and quote before fixing. Many cases are solved in one visit.",
      },
      {
        q: "Can you work at my Sri Hartamas restaurant outside trading hours?",
        a: "Yes. We can come in the morning before you open, or between lunch and dinner service. Typical work includes new kitchen circuits, signage wiring, lighting changes and tracing trips that happen at peak times.",
      },
    ],
  },
  brickfields: {
    name: "Brickfields",
    intro:
      "In Brickfields, a pre-war shophouse and a KL Sentral tower can be two streets apart. Along Jalan Tun Sambanthan, older shophouses and walk-up flats carry decades of add-on wiring for shops, eateries and rooms upstairs. In the Sentral high-rise, jobs are mostly condo DB faults, lighting and water heaters, done within strict building rules.",
    housing:
      "Pre-war and post-war shophouses, old walk-up flats, modern high-rise condos and offices around KL Sentral",
    neighbourhoods: [
      "Jalan Tun Sambanthan (Little India)",
      "Jalan Thambipillay",
      "Jalan Scott",
      "Jalan Berhala",
      "Jalan Travers",
      "KL Sentral",
    ],
    landmarks: ["KL Sentral", "Little India (Jalan Tun Sambanthan)", "NU Sentral", "Vivekananda Ashram"],
    commonIssues: [
      "Decades of add-on wiring in shophouses used as shops below and rooms above",
      "Heavy kitchen and lighting loads in Little India restaurants and stalls",
      "Ageing DB boxes and missing RCCBs in old walk-up flats",
      "Strict permits and lift booking in KL Sentral residential towers",
    ],
    faqs: [
      {
        q: "Can you sort out the wiring in an old Brickfields shophouse?",
        a: "Yes. We first trace what's connected to what, since these buildings often have several generations of wiring. Then we separate shop and residential circuits, replace unsafe sections and fit a modern DB with RCCB protection, in phases if you prefer.",
      },
      {
        q: "Do you work in the KL Sentral condos?",
        a: "Yes. Buildings around KL Sentral usually need a contractor permit and lift booking, and some only allow work on weekdays. Send us the unit details and building rules on WhatsApp, and we'll sort the paperwork with management first.",
      },
    ],
  },
  klcc: {
    name: "KLCC",
    intro:
      "Work in KLCC is almost all inside luxury condos and serviced residences, where building rules shape every job: contractor registration, set working hours, lift booking and sometimes a security escort. Typical requests are lighting changes, dimmer and LED driver faults, extra sockets for home offices and RCCB trips from water heaters or balcony fittings.",
    housing:
      "Luxury high-rise condos and serviced residences from the 2000s onwards, plus older apartments off Jalan Ampang",
    neighbourhoods: [
      "Jalan Ampang",
      "Jalan Binjai",
      "Jalan Kia Peng",
      "Jalan Stonor",
      "Jalan Conlay",
      "Jalan P. Ramlee",
    ],
    landmarks: ["Petronas Twin Towers", "Suria KLCC", "KLCC Park", "Kuala Lumpur Convention Centre"],
    commonIssues: [
      "LED drivers and dimmers failing in designer lighting schemes",
      "RCCB trips from water heaters and balcony fittings exposed to rain",
      "Contractor registration, lift booking and fixed working hours in managed towers",
    ],
    faqs: [
      {
        q: "Can you work within my KLCC building's contractor rules?",
        a: "Yes. Send us the management's requirements and we'll register in advance, book the service lift and keep to the permitted hours. Most KLCC buildings want worker details a day or two ahead, so the earlier you message, the sooner we can schedule.",
      },
      {
        q: "The dimmable lights in my KLCC condo flicker. Can you fix them?",
        a: "Usually. Flicker in high-end condos is most often a dimmer that doesn't match the LED driver, or a failing driver above the ceiling. We test the dimmers and drivers, then quote replacement options before ordering anything.",
      },
    ],
  },
  "bukit-bintang": {
    name: "Bukit Bintang",
    intro:
      "Our Bukit Bintang work is mostly commercial. Old shophouses around Jalan Alor, Changkat and Tengkat Tong Shin now run restaurant kitchens, bars and guesthouses on wiring never designed for that load, so overloaded circuits and burnt connections are common. We plan most repairs for the morning or afternoon, before trading starts, and also look after nearby condos.",
    housing: "Old shophouses converted to F&B and guesthouses, hotels, serviced apartments and condos",
    neighbourhoods: [
      "Jalan Alor",
      "Changkat Bukit Bintang",
      "Tengkat Tong Shin",
      "Jalan Imbi",
      "Jalan Pudu",
      "Jalan Bukit Bintang",
    ],
    landmarks: ["Pavilion Kuala Lumpur", "Jalan Alor", "Lot 10", "Berjaya Times Square"],
    commonIssues: [
      "Restaurant kitchens and bars overloading original shophouse wiring",
      "Burnt terminals and hot spots on three-phase boards running at high load",
      "Guesthouse conversions with too few circuits for room aircons",
      "Repairs that must be timed around late trading hours",
    ],
    faqs: [
      {
        q: "Can you do electrical work at my Bukit Bintang bar without disrupting trade?",
        a: "Yes. Most bars here open in the evening, so we book morning or early-afternoon slots and aim to finish before you open. We work every day, weekends included, and you get a fixed quote before we start.",
      },
      {
        q: "Our Jalan Alor shop keeps tripping during dinner service. What can you do?",
        a: "We check the load on each circuit and phase, find what's overloaded or faulty and fix it. Often that means splitting heavy equipment onto separate circuits or adding a sub-DB. If the supply itself is too small, we explain the TNB upgrade route.",
      },
    ],
  },
  "desa-petaling": {
    name: "Desa Petaling",
    intro:
      "Families in Desa Petaling mostly live in 1980s terraces and low-rise flats near Bandar Tasik Selatan. After 40-odd years, original DB boxes, switches and sockets are wearing out, and households run far more aircons and appliances than the wiring was planned for. Most jobs are DB upgrades, tripping repairs, partial rewires and new points.",
    housing: "1980s single and double-storey terraces and low-rise flats",
    neighbourhoods: ["Taman Desa Petaling", "Bandar Tasik Selatan", "Sungai Besi"],
    landmarks: ["Terminal Bersepadu Selatan (TBS)", "Bandar Tasik Selatan station"],
    commonIssues: [
      "Original 1980s switches and sockets cracking or overheating",
      "Old DB boxes with undersized main switches for today's aircon loads",
      "Flats with a single circuit feeding the kitchen and bathrooms",
    ],
    faqs: [
      {
        q: "Is it worth upgrading the DB box in a 1980s Desa Petaling house?",
        a: "In most cases, yes. A modern DB with MCBs and a properly rated RCCB protects against shocks and makes faults easy to isolate. We check the wiring behind it at the same time, and you get a fixed quote first.",
      },
      {
        q: "Do you come to Desa Petaling for small jobs like one socket?",
        a: "Yes, small jobs are fine. Every visit has a minimum charge of RM80, so if you have a few small things, such as a socket, a light and a fan, list them in one WhatsApp message and we'll quote them together.",
      },
    ],
  },
  "salak-selatan": {
    name: "Salak Selatan",
    intro:
      "Salak Selatan's New Village dates back to the 1950s, and some of KL's oldest wiring is here: timber and brick houses with surface cables, old fuse holders and missing or corroded earthing. Newer terraces and flats near the LRT and KTM stations need more routine work. In the old village, start with a safety check.",
    housing: "1950s New Village houses, older terraces and flats, some newer apartments near the stations",
    neighbourhoods: ["Kampung Baru Salak Selatan", "Salak South Garden", "Taman Salak Selatan", "Taman Desa Tasik"],
    landmarks: ["LRT Salak Selatan station", "KTM Salak Selatan station"],
    commonIssues: [
      "Very old surface wiring and fuse holders in 1950s New Village houses",
      "Missing or corroded earthing in timber and brick village homes",
      "Several generations of extensions sharing one overloaded circuit",
    ],
    faqs: [
      {
        q: "Our family house in Salak South New Village is very old. Where do we start?",
        a: "Start with a safety inspection. We test insulation, earthing and the main protection, then tell you what's urgent, such as an exposed joint or no RCCB, and what can wait. You can then rewire in stages at a fixed price per stage.",
      },
      {
        q: "Can you install an RCCB in a house that has never had one?",
        a: "Yes. We fit a new DB, or add an RCCB to the existing board if it's safe. We test the wiring first, because older houses with leakage can trip a new RCCB straight away. If that happens, we find and fix the leak.",
      },
    ],
  },
  "petaling-jaya": {
    name: "Petaling Jaya (PJ)",
    intro:
      "Petaling Jaya was Malaysia's first satellite town, laid out in the 1950s, and the early Sections and SS2 still have terraces 50 to 70 years old. Those houses account for much of our rewiring and DB work in PJ. Kelana Jaya and the LRT condos have younger wiring, so jobs there are lighting, sockets, fans and water heaters.",
    housing:
      "1950s–70s terraces and bungalows in the older Sections and SS2, 1980s–2000s homes in Kelana Jaya, new condos",
    neighbourhoods: [
      "PJ Old Town",
      "Section 14",
      "Section 17",
      "SS2",
      "Sea Park",
      "Taman Paramount",
      "Kelana Jaya",
      "Section 5",
    ],
    landmarks: ["Amcorp Mall", "Jaya One", "Paradigm Mall", "Taman Jaya"],
    commonIssues: [
      "50–70-year-old cabling and rewireable fuses in early PJ terraces",
      "Supply and DB not sized for several aircons and instant water heaters",
      "Too few sockets in original layouts, leading to overloaded extension leads",
      "Porch and garden lighting tripping during heavy rain",
    ],
    faqs: [
      {
        q: "Can you rewire an old SS2 terrace while we live there?",
        a: "Yes. We rewire one area at a time so most of the house stays usable, and power is restored each evening. In SS2 we usually combine the rewire with a new DB and extra sockets, on one fixed quote with a 12-month workmanship warranty.",
      },
      {
        q: "Which parts of PJ do you cover?",
        a: "All of Petaling Jaya, including PJ Old Town, Section 14, Section 17, SS2, Sea Park, Taman Paramount, Kelana Jaya, Damansara and Bandar Utama. Most addresses are 45–75 minutes away, and we offer same-day visits for tripping or no-power calls.",
      },
    ],
  },
  "subang-jaya": {
    name: "Subang Jaya",
    intro:
      "Sime UEP began building Subang Jaya in 1976, so the original terraces in SS12 to SS19 are now 45 to 50 years old. When owners report constant tripping or a burning smell at the DB, the cause is often original wiring carrying three or four aircons. We also work in SS15 and SS16 shoplots and condos near the LRT.",
    housing: "1970s–80s terraces and semi-Ds in SS12–SS19, shoplots in SS15 and SS16, condos near the LRT",
    neighbourhoods: ["SS12–SS19", "SS15 town centre", "SS14", "SS17", "SS19", "Taman Subang Mewah"],
    landmarks: ["Subang Parade", "Empire Shopping Gallery", "SS15 LRT station", "Subang Jaya KTM station"],
    commonIssues: [
      "45–50-year-old original wiring in SS12–SS19 terraces",
      "Main switches and DBs overheating under several aircons",
      "Burnt sockets and switches after decades of use",
      "Student rental units near SS15 needing extra circuits",
    ],
    faqs: [
      {
        q: "Our SS15 house is from the late 1970s. Should we replace the DB or rewire?",
        a: "It depends on the cable condition, so we test each circuit first. If the insulation readings are acceptable, a new DB with RCCB protection may be enough for now. If they're poor, a full or partial rewire is safer. You see both prices.",
      },
      {
        q: "Do you cover Subang Jaya city as well as USJ?",
        a: "Yes. We cover SS12 to SS19, the town centre around SS15 and SS16, all of USJ, Bandar Sunway and Putra Heights. Most visits fall within 60–90 minutes, and we confirm the timing on WhatsApp when you send your location.",
      },
    ],
  },
  usj: {
    name: "USJ",
    intro:
      "The first USJ homes went up in 1988, and USJ 1 to 27 is now mostly link houses, semi-Ds and low-rise apartments 30 to 35 years old. That's when original switches, sockets and DB parts wear out, just as families add aircons and water heaters. Common jobs are DB upgrades, extra points and finding the cause of recurring trips.",
    housing: "Late 1980s–1990s link houses and semi-Ds across USJ 1–27, plus commercial centres like Taipan",
    neighbourhoods: ["USJ 1", "USJ 2–6", "USJ 9", "USJ 10 (Taipan)", "USJ 11–20", "USJ 21–27"],
    landmarks: ["Summit USJ", "USJ Taipan", "Main Place Mall", "Da Men Mall"],
    commonIssues: [
      "30–35-year-old DB components and switches wearing out",
      "Extra aircons and water heaters added onto original circuits",
      "Porch lights and outdoor sockets tripping during evening thunderstorms",
    ],
    faqs: [
      {
        q: "Our USJ link house trips when it rains. Why?",
        a: "Usually water is getting into a porch light, outdoor socket, garden fitting or cable joint under the car porch. We isolate the circuits to find the one leaking to earth, then replace or reseal it with a weatherproof fitting. It's usually a single-visit fix.",
      },
      {
        q: "Can you add a new circuit for an aircon in my USJ home?",
        a: "Yes. We run a dedicated cable and breaker for each new aircon, check that your DB has space and your main switch can take the load, and tidy the route with trunking or concealed runs. Aircond points are RM250 – RM400 each.",
      },
    ],
  },
  puchong: {
    name: "Puchong",
    intro:
      "Puchong grew quickly in the 1990s and 2000s, from Puchong Jaya and Bandar Puteri to the SOHO and condo blocks along the 2016 LRT extension. We do everything from DB upgrades in 25-year-old terraces to lighting and socket work in new high-rise units. SOHO owners also call us when a unit used as an office needs more power points.",
    housing: "1990s–2000s terraces and semi-Ds, 2010s condos, SOHOs and shop-offices",
    neighbourhoods: [
      "Bandar Puteri",
      "Puchong Jaya",
      "Bandar Kinrara",
      "Puchong Perdana",
      "Taman Putra Prima",
      "Puchong Utama",
    ],
    landmarks: ["IOI Mall Puchong", "Setiawalk", "IOI Boulevard", "LRT IOI Puchong Jaya station"],
    commonIssues: [
      "20–30-year-old DB boxes and switches in early Puchong Jaya terraces",
      "SOHO units used as offices with too few socket points",
      "Condo renovation rules and working hours in newer towers",
      "Shop-office tenants overloading single circuits with kitchen or office equipment",
    ],
    faqs: [
      {
        q: "Do you cover all of Puchong, including Bandar Puteri and Puchong Perdana?",
        a: "Yes. We cover Puchong Jaya, Bandar Puteri, Bandar Kinrara, Puchong Perdana, Puchong Utama and Taman Putra Prima, plus the condos and SOHOs near the LRT. Arrival is usually 60–90 minutes, and we confirm a time when you WhatsApp your location.",
      },
      {
        q: "Can you add sockets and lighting to my Puchong SOHO for an office?",
        a: "Yes. We check the unit's DB capacity, then add sockets, desk-height outlets, LED panel lights or aircon circuits as needed. If the building requires a renovation permit, we prepare the details management asks for and work within their hours.",
      },
    ],
  },
  "shah-alam": {
    name: "Shah Alam",
    intro:
      "Shah Alam, Selangor's capital, is laid out in numbered sections, and the older ones were built in the 1980s and 90s with terraces, semi-Ds and flats. Those homes now need DB upgrades, extra circuits and the occasional rewire. Shah Alam also has large industrial areas, where we handle three-phase supply, factory DBs and high-bay lighting.",
    housing: "1980s–90s terraces and semi-Ds in older sections, newer landed estates, flats and large industrial zones",
    neighbourhoods: [
      "Section 2",
      "Section 7",
      "Section 9",
      "Section 13",
      "Section 18",
      "Bukit Jelutong (U8)",
      "Kota Kemuning",
    ],
    landmarks: [
      "Sultan Salahuddin Abdul Aziz Mosque (Blue Mosque)",
      "i-City",
      "Shah Alam Lake Gardens",
      "UiTM Shah Alam",
    ],
    commonIssues: [
      "30-year-old wiring and DBs in terraces in the older sections",
      "Three-phase faults, load imbalance and DB upgrades in factories and warehouses",
      "Outdoor lighting and autogates tripping in heavy rain",
    ],
    faqs: [
      {
        q: "Do you do three-phase and factory electrical work in Shah Alam?",
        a: "Yes. We trace tripping and imbalance on three-phase boards, install DBs and sub-DBs for machines, and replace warehouse lighting with LED high-bays. For bigger jobs we visit first, then give a fixed quote and schedule around your production hours.",
      },
      {
        q: "Which Shah Alam sections do you cover?",
        a: "All of them, from the older Sections 2, 7, 9 and 13 to Bukit Jelutong, Kota Kemuning and Setia Alam. Shah Alam is spread out, so arrival is typically 75–105 minutes. Send your section number on WhatsApp for a closer estimate.",
      },
    ],
  },
  klang: {
    name: "Klang",
    intro:
      "Klang, proclaimed a royal city in 2024, has an old town centre ringed by newer townships like Bukit Tinggi and Bandar Botanic. Old-town shophouse wiring is often decades old and heavily modified. Low-lying pockets also flood, causing tripping when water gets into sockets, DBs or buried cables. In the newer townships we mostly do upgrades and repairs.",
    housing: "Old town shophouses, 1980s–90s terraces, 2000s–2010s townships in Bukit Tinggi and Bandar Botanic",
    neighbourhoods: [
      "Klang old town",
      "Bukit Tinggi",
      "Bandar Botanic",
      "Taman Sri Andalas",
      "Meru",
      "Bukit Raja",
      "Port Klang",
    ],
    landmarks: ["Istana Alam Shah", "Jalan Tengku Kelana (Little India)", "AEON Bukit Tinggi", "Klang KTM station"],
    commonIssues: [
      "Decades-old, heavily modified wiring in old-town shophouses",
      "Tripping and damaged sockets after flooding in low-lying pockets",
      "Water getting into outdoor DBs and buried cables during monsoon rain",
    ],
    faqs: [
      {
        q: "Our Klang house was flooded. Is it safe to switch the power back on?",
        a: "Not until it's checked. Water can leave moisture and silt in sockets, switches and the DB, which can cause shocks or fire. Keep the main switch off and message us. We test each circuit and replace damaged parts before restoring power.",
      },
      {
        q: "How long do you take to reach Klang?",
        a: "Klang is one of our outer areas, so arrival is usually 75–120 minutes depending on Federal Highway and KESAS traffic. For planned work we book a fixed time slot, and same-day visits are possible if you message in the morning.",
      },
    ],
  },
  cyberjaya: {
    name: "Cyberjaya",
    intro:
      "Cyberjaya was launched in 1997 as the heart of the Multimedia Super Corridor and is now data centres, tech offices, universities and many condos for students and young professionals. Installations are mostly recent, so the work is lighter: RCCB trips, water heater faults, lighting, extra sockets and fans for rental units. Landlords and agents make many of our calls.",
    housing: "2000s–2020s condos, serviced apartments and student housing, plus some gated landed homes",
    neighbourhoods: [
      "Cyber 1–12 precincts",
      "Shaftsbury Square",
      "Tamarind Square",
      "Cyberjaya Lake Gardens",
      "Mutiara Ville",
    ],
    landmarks: [
      "DPulze Shopping Centre",
      "Multimedia University (MMU)",
      "Cyberjaya Lake Gardens",
      "Limkokwing University",
    ],
    commonIssues: [
      "Water heater and RCCB trips in rental condo units",
      "Ceiling fan and lighting installs for new tenants",
      "Builder-grade fittings failing early in newer blocks",
    ],
    faqs: [
      {
        q: "I'm a landlord with a Cyberjaya condo. Can you handle repairs when I'm not there?",
        a: "Yes. Your tenant or agent lets us in, and we send you photos, the diagnosis and a fixed quote on WhatsApp before starting. Once you approve, we fix it and send proof of the finished work. You can pay online.",
      },
      {
        q: "Do you install ceiling fans and lights in Cyberjaya condos?",
        a: "Yes. Ceiling fan installation is from RM200 per fan, including assembly, balancing and removing the old fan. We also fit LED downlights and add new points where needed. Tell us the block and unit if security needs a contractor pass.",
      },
    ],
  },
  putrajaya: {
    name: "Putrajaya",
    intro:
      "Putrajaya's homes range from government quarters to private condos and gated landed estates across the numbered Presints. Most housing dates from the late 1990s onwards, so we see wear on 20 to 25-year-old fittings rather than very old wiring. Typical jobs are DB component replacement, water heater faults, extra sockets and indoor and outdoor lighting.",
    housing: "Late 1990s–2020s government quarters, condos and landed homes across the Presints",
    neighbourhoods: ["Presint 1", "Presint 8", "Presint 9", "Presint 11", "Presint 14", "Presint 16", "Presint 18"],
    landmarks: ["Perdana Putra", "Putra Mosque", "Alamanda Putrajaya", "IOI City Mall"],
    commonIssues: [
      "20–25-year-old switches, sockets and RCCBs wearing out",
      "Outdoor and garden lighting tripping in heavy rain",
      "Extra circuits needed when owners add aircons and water heaters during renovation",
    ],
    faqs: [
      {
        q: "Do you work in all Presints in Putrajaya?",
        a: "Yes. We cover residential Presints such as 8, 9, 11, 14, 16 and 18, plus the commercial areas. Putrajaya is one of our outer areas, so arrival is usually 75–120 minutes. Tell us your Presint and building when you WhatsApp.",
      },
      {
        q: "Can you work in government quarters in Putrajaya?",
        a: "Yes, for repairs inside your unit such as tripping, sockets, lights and water heaters. Changes that affect the building or common wiring usually need the managing agency's approval first, and we can give you a written quote to submit.",
      },
    ],
  },
  kajang: {
    name: "Kajang",
    intro:
      "Kajang, famous for its satay and now the end of the MRT Kajang line, mixes an old town of shophouses with growing townships like Kajang 2 and Sungai Chua. Town-centre shophouse wiring is often old and overloaded, while newer terraces and condos need routine work. Commuter households often book evening slots, which we can arrange.",
    housing: "Old shophouses in Kajang town, 1980s–90s terraces, 2000s–2020s townships and condos",
    neighbourhoods: [
      "Kajang town",
      "Sungai Chua",
      "Kajang 2",
      "Taman Prima Saujana",
      "Saujana Impian",
      "Taman Kajang Utama",
    ],
    landmarks: ["MRT Kajang station", "Stadium Kajang", "Hospital Kajang"],
    commonIssues: [
      "Old, overloaded wiring in Kajang town shophouses",
      "Extensions in older terraces wired onto existing circuits",
      "Outdoor lighting and autogate faults during the rainy season",
    ],
    faqs: [
      {
        q: "Can you come to Kajang in the evening after work?",
        a: "Yes. We work into the evening every day, weekends included, at the same rates. Kajang is one of our outer areas, with arrival usually 75–120 minutes, so book your evening slot in advance.",
      },
      {
        q: "Do you cover Sungai Chua and Kajang 2?",
        a: "Yes, along with Kajang town, Taman Prima Saujana, Saujana Impian and Taman Kajang Utama. In newer townships like Kajang 2, most jobs are lighting, ceiling fans, water heaters and extra sockets. Older terraces nearer town more often need DB upgrades.",
      },
    ],
  },
  bangi: {
    name: "Bangi",
    intro:
      "Bandar Baru Bangi was developed in the 1970s and 80s beside UKM, so many terraces are now around 40 years old and due for new DBs and rewiring. Newer estates like Bandar Seri Putra need lighting, fans and upgrades. Many customers search for a tukang elektrik Bangi, and you can message us in Bahasa Melayu or English.",
    housing: "1970s–80s terraces across the sections of Bandar Baru Bangi, 2000s–2010s estates like Bandar Seri Putra",
    neighbourhoods: ["Bandar Baru Bangi", "Seksyen 7", "Seksyen 9", "Bandar Seri Putra", "Bangi Lama"],
    landmarks: ["Universiti Kebangsaan Malaysia (UKM)", "Bangi Gateway", "Bangi Golf Resort", "KTM UKM station"],
    commonIssues: [
      "40-year-old DBs and wiring in original Bandar Baru Bangi terraces",
      "Overloaded circuits from aircons added to every bedroom",
      "Water heater trips in bathrooms without a dedicated 10mA RCCB",
    ],
    faqs: [
      {
        q: "Can I contact you in Bahasa Melayu about a job in Bangi?",
        a: "Yes. You can WhatsApp us in Bahasa Melayu or English, and we'll explain the quote in either. We cover Bandar Baru Bangi, Bandar Seri Putra, Bangi Lama and the areas around UKM, with arrival usually 75–120 minutes.",
      },
      {
        q: "Should I rewire my old Bandar Baru Bangi terrace before adding more aircons?",
        a: "Often yes. Many original terraces were wired for a fan or two per room, not several aircons and an instant heater. We check the cable sizes, DB and main switch, then tell you whether new circuits are enough or a rewire is safer.",
      },
    ],
  },
  "seri-kembangan": {
    name: "Seri Kembangan",
    intro:
      "Seri Kembangan grew from the old Serdang Baru New Village, and older village houses near the town centre often have wiring well past its prime. Around them are newer condos and townships near The Mines and UPM, plus many student rentals. Our work runs from DB replacements in village homes to tripping and water heater faults in rented units.",
    housing: "Old New Village houses, 1990s terraces, 2000s–2020s condos and student rentals",
    neighbourhoods: [
      "Seri Kembangan town",
      "Taman Equine",
      "Taman Universiti Indah",
      "Serdang Jaya",
      "Taman Pinggiran Putra",
      "Mines Resort City",
    ],
    landmarks: [
      "The Mines",
      "Universiti Putra Malaysia (UPM)",
      "South City Plaza",
      "Mines International Exhibition & Convention Centre (MIECC)",
    ],
    commonIssues: [
      "Decades-old wiring and fuse boards in former New Village houses",
      "Student rental units with overloaded circuits and worn sockets",
      "Condo JMB rules and renovation permits in newer developments",
    ],
    faqs: [
      {
        q: "Can you check the wiring in my old house in Seri Kembangan town?",
        a: "Yes. Many houses near the old village centre still have very old cables and fuse boards. We test insulation and earthing, check the DB and list what needs fixing now and what can wait, so you can choose a full or staged rewire.",
      },
      {
        q: "I rent rooms to UPM students in Seri Kembangan. Can you add circuits for each room?",
        a: "Yes. We give each room its own breaker for aircon and sockets, so one tenant doesn't trip the whole house and faults are quicker to find. We check your supply and DB first, then quote the full job.",
      },
    ],
  },
  "sungai-buloh": {
    name: "Sungai Buloh",
    intro:
      "Old kampung houses, the Bandar Baru Sungai Buloh township and estates like Bukit Rahman Putra make up most of Sungai Buloh, now linked to the city by MRT. Kampung homes often have older wiring extended in stages. We also wire the area's plant nurseries, where outdoor sockets and pumps have to cope with constant water.",
    housing: "Old kampung houses, 1980s–90s terraces in Bandar Baru Sungai Buloh, 2000s landed estates",
    neighbourhoods: [
      "Bandar Baru Sungai Buloh",
      "Kampung Baru Sungai Buloh",
      "Bukit Rahman Putra",
      "Sungai Buloh Country Resort",
    ],
    landmarks: ["Hospital Sungai Buloh", "MRT Sungai Buloh station", "Sungai Buloh plant nurseries"],
    commonIssues: [
      "Ageing, piecemeal wiring in kampung houses extended over the years",
      "Outdoor sockets, pumps and lighting at plant nurseries exposed to water",
      "Missing earthing or RCCB protection in older homes",
    ],
    faqs: [
      {
        q: "Do you do electrical work for plant nurseries in Sungai Buloh?",
        a: "Yes. We install and repair outdoor lighting, weatherproof sockets, water pump circuits and DBs for nursery sites, using outdoor-rated fittings and proper RCCB protection. We also test installations that keep tripping after watering or rain.",
      },
      {
        q: "Can you upgrade the wiring in an old kampung house in Sungai Buloh?",
        a: "Yes. We inspect the wiring and earthing, then recommend a full rewire or fixing the worst parts first. Timber sections get suitable conduit and fixings. You get a fixed quote and a 12-month workmanship warranty on our work.",
      },
    ],
  },
  damansara: {
    name: "Damansara",
    intro:
      "Damansara Utama (SS21) and Damansara Jaya (SS22) were built in the 1970s, and many terraces still run cabling from that era. Renovations often start with us opening the DB and finding no RCCB, undersized cables or a main switch running hot. Mutiara Damansara, around IKEA and The Curve, is newer, with condos and offices needing lighting and power work.",
    housing: "1970s terraces and semi-Ds in SS20–SS22, Uptown shoplots, 2000s condos and offices in Mutiara Damansara",
    neighbourhoods: [
      "Damansara Utama (SS21)",
      "Damansara Jaya (SS22)",
      "Damansara Kim (SS20)",
      "Damansara Uptown",
      "Mutiara Damansara",
      "Bandar Utama",
    ],
    landmarks: ["The Curve", "IKEA Damansara", "1 Utama", "Damansara Uptown"],
    commonIssues: [
      "1970s cabling and DBs without RCCB in SS21 and SS22 terraces",
      "Main switches running hot under modern aircon loads",
      "Restaurant and office loads in Damansara Uptown shoplots",
    ],
    faqs: [
      {
        q: "We bought a 1970s terrace in Damansara Jaya. What should we check first?",
        a: "Start with the DB and an insulation test. In SS22 houses we often find original cable, no RCCB and too few sockets. The results show whether you need a full rewire or a DB upgrade plus new circuits. We can coordinate with your contractor.",
      },
      {
        q: "Do you take commercial jobs in Damansara Uptown?",
        a: "Yes. We handle lighting, socket and aircon circuits for shops, offices and restaurants in Uptown, and trace trips on three-phase boards. Work can be scheduled before opening or during quiet hours, at the same rates every day.",
      },
    ],
  },
  "kota-damansara": {
    name: "Kota Damansara",
    intro:
      "PKNS began Kota Damansara in the late 1990s, and it now combines terraces, semi-Ds, condos and many SOHO and shop-office blocks around Dataran Sunway and The Strand. Homes are 20 to 25 years old, so switches, sockets and RCCBs are starting to give trouble. SOHO and office units often need extra sockets and lighting.",
    housing: "Late 1990s–2000s terraces and semi-Ds, condos, SOHOs and shop-offices",
    neighbourhoods: [
      "PJU 5 town centre",
      "Kota Damansara Seksyen 4–10",
      "Dataran Sunway",
      "Sunway Nexis",
      "Damansara Perdana",
    ],
    landmarks: ["The Strand", "Sunway Giza Mall", "MRT Kota Damansara station", "Kota Damansara Community Forest"],
    commonIssues: [
      "Late-1990s RCCBs becoming oversensitive or failing to trip at all",
      "SOHO units used as offices with too few power points",
      "Management permits and working hours for work in SOHO and condo blocks",
    ],
    faqs: [
      {
        q: "Can you test whether the RCCB in my Kota Damansara house still works?",
        a: "Yes. A 20-year-old RCCB may no longer trip at its rated current. We test the trip time and current with a proper tester, check the circuits it protects and replace it if needed. Replacement is RM250 – RM450 including the unit.",
      },
      {
        q: "Do you work in Kota Damansara SOHO buildings?",
        a: "Yes. We add sockets, lighting and aircon circuits for SOHO and office units, and fix tripping. Most buildings need a contractor permit, so share the management's requirements when you book and we'll handle the forms before the visit.",
      },
    ],
  },
  "ara-damansara": {
    name: "Ara Damansara",
    intro:
      "Next to Subang Airport, Ara Damansara is a 2000s Sime Darby township of condos, link houses and commercial blocks around Evolve Concept Mall and Citta Mall. With most homes 15 to 20 years old, full rewiring is rarely needed. Common jobs are LED lighting, smart switches, EV chargers for landed houses and RCCB trips from water heaters or outdoor fittings.",
    housing: "2000s–2010s condos, link houses and semi-Ds, with offices and retail around Oasis and Evolve",
    neighbourhoods: ["PJU 1A", "Oasis Ara Damansara", "Citta Mall area", "Jalan Lapangan Terbang Subang"],
    landmarks: [
      "Evolve Concept Mall",
      "Sultan Abdul Aziz Shah Airport (Subang)",
      "Citta Mall",
      "LRT Ara Damansara station",
    ],
    commonIssues: [
      "Water heater and outdoor fitting trips in 15–20-year-old homes",
      "EV charger and smart home upgrades on existing DBs",
      "Renovation permits and working hours in condo blocks",
    ],
    faqs: [
      {
        q: "Can my Ara Damansara link house handle an EV charger?",
        a: "In most cases, yes. We check your supply, main switch and DB space, then install a dedicated circuit with RCD protection. If the load is tight, the charger can run at a lower current. Installation with your own charger is RM1,800 – RM2,800.",
      },
      {
        q: "Do you work in Ara Damansara condos on Saturdays?",
        a: "If your management allows it, yes. Some buildings limit Saturday work to quiet jobs or half days. Send us the house rules when you book, and we'll keep drilling or longer power shutdowns for weekdays.",
      },
    ],
  },
  "setia-alam": {
    name: "Setia Alam",
    intro:
      "S P Setia built Setia Alam from the 2000s into a large township of terraces and semi-Ds around Setia City Mall. Many homes are now being renovated, and that's when we're called: kitchen extensions, aircon circuits, garden and facade lighting, EV chargers and DB preparation for rooftop solar. As one of our outer areas, visits are usually booked ahead.",
    housing: "2000s–2010s terraces, semi-Ds and bungalows in gated and open estates, some condos",
    neighbourhoods: ["Seksyen U13", "Setia Eco Park", "Setia City", "Alam Nusantara"],
    landmarks: ["Setia City Mall", "Setia City Convention Centre", "Tenby International School Setia Eco Park"],
    commonIssues: [
      "Renovation extensions loaded onto original circuits without a DB upgrade",
      "EV charger and rooftop solar additions that need DB and supply checks",
      "Garden and facade lighting tripping in heavy rain",
      "Autogate and outdoor socket faults",
    ],
    faqs: [
      {
        q: "We're renovating our Setia Alam terrace. Can you handle the electrical side?",
        a: "Yes. We work from your renovation plan to add points, kitchen circuits, aircon wiring and lighting, and upgrade the DB if the extra load needs it. We coordinate with your contractor and test everything before ceilings and walls are closed.",
      },
      {
        q: "Can you prepare my Setia Alam home for solar panels and an EV charger?",
        a: "Yes. We check your supply and DB, free up space or upgrade the board, and install the EV charger circuit. For solar, we prepare the DB side so your solar installer can connect, with separate protection and isolation for each system.",
      },
    ],
  },
  rawang: {
    name: "Rawang",
    intro:
      "North of the city, Rawang combines an older town centre with family townships like Bandar Country Homes and Bandar Tasik Puteri. Many of their 1990s and 2000s terraces are now getting extensions, extra aircons and water heaters, which is where most of our Rawang jobs come from, along with DB, earthing and surge damage repairs.",
    housing: "Older town shophouses, 1990s–2010s affordable terraces in townships like Bandar Country Homes",
    neighbourhoods: [
      "Rawang town",
      "Bandar Country Homes",
      "Bandar Tasik Puteri",
      "Kota Emerald",
      "Taman Rawang Perdana",
      "Bukit Sentosa",
    ],
    landmarks: ["KTM Rawang station", "Templer Park", "Rawang Bypass"],
    commonIssues: [
      "Extensions and extra aircons wired onto original 1990s circuits",
      "Surge damage to appliances after lightning storms",
      "Autogate and outdoor lighting faults in rainy weather",
    ],
    faqs: [
      {
        q: "Do you come out to Rawang for small jobs?",
        a: "Yes. Rawang is one of our outer areas, with arrival usually 75–120 minutes, but small jobs are welcome. Every visit has a minimum charge of RM80, so list a fan, a socket and a light together and we'll quote them as one visit.",
      },
      {
        q: "Lightning damaged some appliances in our Rawang house. Can you help?",
        a: "Yes. We check the DB, earthing and the circuits that fed the damaged appliances, replace burnt components and test the RCCB. A surge protection device at the DB, from RM400, reduces the risk the next time a storm passes over.",
      },
    ],
  },
  selayang: {
    name: "Selayang",
    intro:
      "Selayang, home to the big wholesale market below Batu Caves, is mostly 1980s and 90s terraces and flats. At 30 to 40 years old, many have DBs that trip on the slightest leak, kitchens short of sockets and wiring extended rather than replaced. We also fix power and lighting faults for traders near the market.",
    housing: "1980s–90s terraces and flats, newer apartments and commercial lots around the wholesale market",
    neighbourhoods: [
      "Selayang Baru",
      "Selayang Jaya",
      "Taman Selayang Utama",
      "Bandar Baru Selayang",
      "Taman Samudera",
      "Batu Caves",
    ],
    landmarks: ["Pasar Borong Selayang", "Batu Caves", "Hospital Selayang", "Selayang Mall"],
    commonIssues: [
      "30–40-year-old wiring extended rather than replaced",
      "DBs tripping from small leakages in damp kitchens and bathrooms",
      "Chiller and lighting loads for traders around Pasar Borong Selayang",
    ],
    faqs: [
      {
        q: "Can you help traders near Pasar Borong Selayang with power problems?",
        a: "Yes. We fix tripping, add circuits for chillers and freezers, and replace lighting for stalls, stores and nearby shop lots. Since the market trades through the night, we schedule work in the late morning or afternoon to avoid disrupting business.",
      },
      {
        q: "Our Selayang house keeps tripping after mopping or rain. What's wrong?",
        a: "That pattern usually means moisture is reaching a socket, fitting or cable joint near the floor or outdoors. We test each circuit to find the one leaking to earth, then reseal, relocate or replace the faulty part, often in one visit.",
      },
    ],
  },
  semenyih: {
    name: "Semenyih",
    intro:
      "Semenyih has changed fast, with townships like Eco Majestic, Setia EcoHill and Bandar Rinching bringing new landed homes to a once-quiet town near Broga Hill. New houses mean new-owner jobs: outdoor lighting, autogate wiring, ceiling fans, extra sockets and water heaters. Older town-centre shophouses and terraces need more traditional repair and DB work.",
    housing: "2010s–2020s landed townships, older town shophouses and terraces, rural kampung homes",
    neighbourhoods: [
      "Semenyih town",
      "Eco Majestic",
      "Setia EcoHill",
      "Bandar Rinching",
      "Taman Tasik Semenyih",
      "Bandar Tasik Kesuma",
    ],
    landmarks: ["Broga Hill", "Eco Majestic", "University of Nottingham Malaysia", "Semenyih Dam"],
    commonIssues: [
      "Autogate and outdoor lighting wiring needed in new landed homes",
      "Builder-standard layouts with few points, needing extra sockets and circuits",
      "Ageing DBs and wiring in older town shophouses",
    ],
    faqs: [
      {
        q: "Can you wire an autogate and outdoor lights at my new Semenyih house?",
        a: "Yes. We run a dedicated circuit for the autogate motor, add weatherproof sockets and outdoor lighting, and put them on suitable RCCB protection so rain doesn't trip the whole house. We can work with your autogate supplier on the connection.",
      },
      {
        q: "How far ahead should I book for Semenyih?",
        a: "For planned work, a day or two ahead is ideal, since Semenyih is one of our outer areas with arrival usually 75–120 minutes. For urgent faults, message us in the morning and we'll tell you honestly if a same-day visit is possible.",
      },
    ],
  },
  "cheras-selangor": {
    name: "Cheras Selangor",
    intro:
      "Batu 9, Bandar Mahkota Cheras and Sungai Long make up most of Cheras Selangor, along the Cheras-Kajang Expressway, with mostly 1990s and 2000s terraces and condos. At 20 to 30 years old, worn RCCBs, burnt switches and water heater faults are common. Student rentals around UTAR in Sungai Long also keep landlords busy with overloaded rooms.",
    housing: "1990s–2000s terraces and condos in Batu 9, Bandar Mahkota Cheras and Sungai Long",
    neighbourhoods: [
      "Batu 9 Cheras",
      "Bandar Mahkota Cheras",
      "Bandar Sungai Long",
      "Taman Cuepacs",
      "Cheras Perdana",
      "Bandar Tun Hussein Onn",
      "Taman Suntex",
    ],
    landmarks: ["UTAR Sungai Long campus", "MRT Taman Suntex station", "MRT Batu 11 Cheras station"],
    commonIssues: [
      "Worn RCCBs and switches in 20–30-year-old terraces",
      "Student rental houses near UTAR with overloaded room circuits",
      "Water heater trips without a dedicated 10mA RCCB",
    ],
    faqs: [
      {
        q: "Is Cheras Selangor covered separately from Cheras KL?",
        a: "We cover both. Cheras Selangor includes Batu 9, Bandar Mahkota Cheras, Sungai Long, Bandar Tun Hussein Onn and Cheras Perdana. Arrival is usually 60–90 minutes, sometimes longer than the KL side in evening traffic on the Cheras-Kajang Expressway.",
      },
      {
        q: "Our Sungai Long house trips at night when all the aircons are on. Why?",
        a: "Usually the main switch or a shared circuit is overloaded when several aircons run together, which is common in rented houses near UTAR. We measure the load, move aircons onto dedicated circuits and check the main switch and supply, with the price agreed first.",
      },
    ],
  },
  balakong: {
    name: "Balakong",
    intro:
      "Industry drives most of our Balakong work. Warehouses, workshops and small factories in Cheras Jaya and Balakong Jaya need three-phase fault finding, DB and sub-DB installs, machine power points and LED high-bay lighting. Older terraces and homes in the Kampung Baru Balakong new village need DB upgrades, rewiring and fixes for tripping.",
    housing: "Factories and warehouses, 1980s–90s terraces, new village houses in Kampung Baru Balakong",
    neighbourhoods: ["Kampung Baru Balakong", "Taman Taming Jaya", "Taman Impian Ehsan", "Cheras Jaya"],
    landmarks: ["Taman Perindustrian Cheras Jaya", "Balakong industrial area"],
    commonIssues: [
      "Three-phase imbalance and tripping in factories and workshops",
      "Old warehouse lighting with high running costs and failing ballasts",
      "Ageing wiring and fuse boards in new village houses",
    ],
    faqs: [
      {
        q: "Do you take on factory and warehouse electrical work in Balakong?",
        a: "Yes. We trace three-phase faults, install DBs and sub-DBs for new machines, add industrial sockets and replace old warehouse lighting with LED high-bays. For larger jobs we survey first, then give a fixed quote and schedule around your production times.",
      },
      {
        q: "Can you rewire a house in Kampung Baru Balakong?",
        a: "Yes. Many new village houses here have wiring and fuse boards from decades ago. We inspect, test and quote a full or staged rewire, starting with the most unsafe circuits and a new DB with RCCB protection.",
      },
    ],
  },
  "bandar-sunway": {
    name: "Bandar Sunway",
    intro:
      "Bandar Sunway was built on a former tin mine and is now one of the Klang Valley's densest student areas, with Sunway University, Monash Malaysia and high-rise rentals around Sunway Pyramid. Landlords and agents are our main customers here. Usual calls are RCCB trips, water heaters, broken sockets and lights, and extra fans or points for room lets.",
    housing: "High-rise condos and student apartments, 1990s–2000s terraces and semi-Ds in the PJS sections",
    neighbourhoods: ["PJS 7", "PJS 9", "PJS 11", "Sunway Mentari", "Sunway South Quay", "Sunway Geo"],
    landmarks: ["Sunway Pyramid", "Sunway Lagoon", "Sunway University", "Monash University Malaysia"],
    commonIssues: [
      "Water heater and RCCB trips in heavily used student rental units",
      "Sockets and switches worn out by high tenant turnover",
      "Condo management rules on contractor access and working hours",
    ],
    faqs: [
      {
        q: "Can you do a quick turnaround between tenants in Bandar Sunway?",
        a: "Yes. Before a new semester we can check and fix sockets, lights, fans, water heaters and the RCCB in one visit, so the unit is ready for move-in. Tell us the dates and building rules, and we'll book a slot that fits.",
      },
      {
        q: "Do you cover the landed homes in Bandar Sunway as well as condos?",
        a: "Yes. We also work in the PJS terraces and semi-Ds, where homes from the 1990s often need DB upgrades, extra aircon circuits and outdoor lighting repairs. Arrival is usually 60–90 minutes from central KL.",
      },
    ],
  },
  glenmarie: {
    name: "Glenmarie",
    intro:
      "Factories, warehouses and office blocks fill most of Glenmarie (Seksyen U1, Shah Alam), so our work here is commercial: three-phase supply, factory and office DBs, warehouse lighting and power for machines and server rooms. Many units have changed tenants several times, leaving undocumented wiring. We trace and label circuits, fix faults and plan upgrades around business hours.",
    housing: "Factories, warehouses and office blocks in Seksyen U1, with landed homes near the golf club",
    neighbourhoods: [
      "Seksyen U1",
      "HICOM-Glenmarie Industrial Park",
      "Temasya Glenmarie",
      "Subang Hi-Tech Industrial Park",
    ],
    landmarks: ["Glenmarie Golf & Country Club", "LRT Glenmarie station"],
    commonIssues: [
      "Three-phase demand and load imbalance in factories and workshops",
      "Undocumented wiring left behind by previous tenants",
      "Old fluorescent and metal halide warehouse lighting due for LED replacement",
    ],
    faqs: [
      {
        q: "We're moving into a Glenmarie warehouse. Can you check the electrical installation first?",
        a: "Yes. We inspect the incoming supply, main DB and sub-DBs, test protection devices and map which circuits feed what. You get a written list of faults, unsafe leftovers and what your machines need, with a fixed quote to fix them.",
      },
      {
        q: "Can you replace warehouse lighting in Glenmarie with LED?",
        a: "Yes. We swap old fluorescent or metal halide fittings for LED high-bays and battens, rewire where needed and can split the lighting into zones so you only light the areas in use. We work around your operating hours.",
      },
    ],
  },
};
