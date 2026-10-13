import type { GuideText } from "@/lib/types";

// English guides. Prices quoted for our own services must match the rate card
// in src/data/pricing.ts; market ranges come from published Klang Valley rates
// (Recommend.my, Prime Electrician, Fastlink Fix, ClickBina and Lowyat quotes,
// 2024–2026). Update both together.

export const guides: Record<string, GuideText> = {
  "house-rewiring-cost-malaysia": {
    title: "House Rewiring Cost in Malaysia (2026 Price Guide)",
    metaTitle: "House Rewiring Cost in Malaysia (2026 Price Guide)",
    metaDescription:
      "Rewiring a 2–3 bed condo in KL costs RM6,000 – RM10,000 and a double-storey terrace RM13,000 – RM20,000. 2026 price table, inclusions and timelines.",
    tldr: "Full house rewiring in the Klang Valley costs about RM6,000 – RM10,000 for a 2–3 bedroom condo, RM8,000 – RM13,000 for a single-storey terrace and RM13,000 – RM20,000 for a double-storey terrace at our rates. Hacking, plastering and painting are usually quoted separately.",
    sections: [
      {
        heading: "How much does it cost to rewire a house in Malaysia?",
        body: [
          "The biggest factor is the number of points: every light, fan, socket and switch. A 2–3 bedroom condo has 40 to 60 points; a double-storey terrace has 80 to 120. The table compares Klang Valley quotes from 2024 to 2026 with our rates, which include cable, conduit or trunking and standard switches and sockets.",
          "Market ranges are wide because some quotes use surface trunking and budget cable, while others are fully concealed with hacking and replastering included. Compare the number of points, the cable size and what is excluded, not just the total. Ask whether a new DB box is included; older houses almost always need one.",
        ],
        table: {
          head: ["Property type", "Market range (Klang Valley)", "My Power Care KL", "Typical duration"],
          rows: [
            ["Condo / apartment (2–3 bed)", "RM3,000 – RM12,000", "RM6,000 – RM10,000", "2–4 days"],
            ["Single-storey terrace", "RM4,000 – RM15,000", "RM8,000 – RM13,000", "3–5 days"],
            ["Double-storey terrace", "RM8,000 – RM25,000", "RM13,000 – RM20,000", "5–8 days"],
            ["Semi-D", "RM12,000 – RM30,000+", "RM18,000 – RM30,000", "7–12 days"],
            ["Bungalow", "RM20,000 – RM40,000", "Quoted after site visit", "2–3 weeks"],
          ],
        },
      },
      {
        heading: "What does a rewiring quote include, and what does it leave out?",
        body: [
          "A proper rewiring quote covers removing the old cables, running new cable to every point, new switches and 13A sockets, reconnection at the DB box and full testing. Ours carries a 12-month workmanship warranty. A new DB box, if needed, should be its own line (RM1,000 – RM2,000 for single-phase with us).",
          "The items below are usually excluded, and they are where renovation budgets go wrong. Hacking and replastering for concealed wiring typically adds RM70 or more per point. If you are renovating anyway, let your main contractor handle the making good so the walls are only opened once.",
        ],
        bullets: [
          "Hacking walls for concealed conduit (from about RM70 per point)",
          "Plastering and making good after hacking",
          "Repainting walls and ceilings",
          "Cutting and patching plaster ceilings",
          "Light fittings, fans and chandeliers (we install them, you supply them)",
          "TNB charges, if the supply itself is upgraded",
        ],
      },
      {
        heading: "What affects the price of rewiring?",
        body: [
          "Two houses of the same size can differ by several thousand ringgit. The age of the building, how the old wiring was run and whether you want everything hidden in the wall make the biggest difference. Condos add their own rules, such as renovation permits and fixed working hours, which can stretch the job over more days.",
        ],
        bullets: [
          "Number of points: lights, fans, sockets, switches, aircond and heater points",
          "Concealed wiring in walls vs surface trunking or conduit",
          "Access to the roof space or false ceiling",
          "DB box replacement or a single to 3-phase upgrade",
          "Dedicated circuits for aircond, oven, induction hob or EV charger",
          "Whether the house is empty or you are living in it",
        ],
      },
      {
        heading: "How long does rewiring take, and can you stay in the house?",
        body: [
          "A 2–3 bedroom condo takes 2–4 working days, a single-storey terrace 3–5 days, a double-storey terrace 5–8 days and a semi-D 7–12 days. Add time for hacking, plastering and paint if the wiring is concealed. Condo jobs also depend on the hours your management allows for noisy work.",
          "You can usually stay in the house. We rewire room by room and reconnect circuits at the end of each day, so you have lights and a working fridge at night. An empty house is faster and slightly cheaper, so rewiring before you move in makes sense.",
        ],
      },
      {
        heading: "Do you need Form G and Form H after rewiring?",
        body: [
          "Yes. Form G and Form H are the completion and test certificates for wiring work under the Electricity Regulations 1994. TNB asks for them before connecting a new or upgraded supply, so keep them with your house documents. DIY rewiring is not legal for homeowners, and unapproved wiring can bring a fine of up to RM10,000 under the Electricity Supply Act 1990.",
        ],
      },
      {
        heading: "How can you save money on rewiring?",
        body: [
          "The cheapest rewire is the one done once, properly, with good cable and correct protection. There are still honest ways to bring the total down, and most come from planning the job around your renovation and deciding early, not from squeezing labour rates or using thinner cable.",
        ],
        bullets: [
          "Rewire during a renovation, before plastering and painting",
          "Use surface trunking in the store room, kitchen and car porch",
          "Fix socket and light positions once, so there are no change orders",
          "Supply your own light fittings and fans",
          "Reuse existing conduit if it is sound and the right size",
          "Do the DB box and any 3-phase upgrade in the same job",
        ],
      },
      {
        heading: "How do you choose an electrician for rewiring?",
        body: [
          "A good quote lists the number of points, the cable brand and size, whether hacking and plastering are included, the DB box, the timeline and the warranty. Be wary of very low lump-sum prices with no breakdown, and ask for the warranty in writing.",
          "We give a fixed written quote after a site visit, which has a minimum charge of RM80. The quote only changes if you add points.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to rewire a condo in KL?",
        a: "A 2–3 bedroom condo usually costs RM6,000 – RM10,000 to rewire with us, depending on the number of points and whether the wiring is concealed. Market quotes range from about RM3,000 to RM12,000. Hacking, plastering and painting are quoted separately.",
      },
      {
        q: "How often should house wiring be replaced?",
        a: "PVC-insulated wiring typically lasts 25–30 years before the insulation turns brittle. We recommend an inspection every 10–15 years. An insulation resistance test on each circuit shows whether you need a full rewire, partial rewiring or just a few repairs.",
      },
      {
        q: "Can I rewire just one room?",
        a: "Yes. Partial rewiring of one room costs RM1,000 – RM2,500 with us, depending on the number of points. It suits a renovation or one problem area, but if the rest of the house has the same old cable, an inspection first is money well spent.",
      },
      {
        q: "Is rewiring messy?",
        a: "Concealed rewiring means hacking channels into walls, which creates dust and needs plastering and painting afterwards. Surface trunking is cleaner and faster but visible. Many owners choose concealed wiring in living areas and bedrooms, and trunking in the kitchen, store room and porch.",
      },
      {
        q: "Do I need TNB approval to rewire my house?",
        a: "Not for rewiring within your existing supply. TNB only gets involved if you change the supply itself, for example upgrading from single-phase to 3-phase, and it asks for the test certificates before connecting the new supply.",
      },
    ],
  },
  "why-does-my-house-keep-tripping": {
    title: "Why Does My House Keep Tripping? 8 Common Causes in Malaysian Homes",
    metaTitle: "Why Does My House Keep Tripping? 8 Common Causes",
    metaDescription:
      "House keeps tripping? Find the faulty circuit safely in five minutes, learn the 8 common causes in Malaysian homes, and see what an electrician charges in KL.",
    tldr: "Most tripping in Malaysian homes comes from earth leakage in a water heater, rain getting into outdoor sockets or lights, or a faulty appliance. You can usually find the faulty circuit by switching off all MCBs, resetting the RCCB and switching them back on one at a time; a repair with us typically costs RM150 – RM400.",
    sections: [
      {
        heading: "Which switch tripped: RCCB, MCB or main switch?",
        body: [
          "Open the DB box door (only the outer door, never the cover behind it) and look for the switch that is down. The RCCB, which many people still call the ELCB, is the wider switch with a test button marked 'T'. It trips on earth leakage, meaning current escaping to earth through water, damaged insulation or a person.",
          "MCBs are the narrow switches, one per circuit, and they trip on overload or short circuit. The main switch is usually an isolator that does not trip. If the whole house is dark and nothing in the DB box has moved, check whether your neighbours have power; the problem may be TNB's supply or the fuse at your meter.",
        ],
        table: {
          head: ["Switch", "How to recognise it", "Why it trips", "What it usually means"],
          rows: [
            [
              "RCCB / ELCB",
              "Wide switch with a test button, rated 30mA or 100mA",
              "Earth leakage",
              "Water, a faulty appliance or damaged cable",
            ],
            [
              "MCB",
              "Narrow switch, one per circuit, rated 6A to 32A",
              "Overload or short circuit",
              "Too many appliances on one circuit, or a short",
            ],
            [
              "Main switch",
              "Largest switch on the board",
              "Usually does not trip (isolator)",
              "If the house is dark, check TNB supply first",
            ],
          ],
        },
      },
      {
        heading: "How do you find the faulty circuit safely?",
        body: [
          "If the RCCB has tripped, you can usually narrow it down in five minutes. Only touch the breaker switches, with dry hands and dry feet. Never remove the DB box cover or touch any wires or terminals. If you smell burning or see scorch marks on the board, stop there and call an electrician.",
          "If the circuit holds with everything unplugged, plug the appliances back in one by one; the one that trips it is your culprit. If it still trips with nothing plugged in, the fault is in the fixed wiring or a fixed appliance such as the water heater or aircond, and that needs an electrician with test equipment.",
        ],
        bullets: [
          "Switch off every MCB (push them all down)",
          "Push the RCCB back up; if it will not stay up with all MCBs off, stop and call us",
          "Switch the MCBs on one at a time, waiting a few seconds after each",
          "When the RCCB trips again, the last MCB you switched on is the faulty circuit",
          "Leave that MCB off, reset the RCCB and switch the others back on",
          "Unplug everything on the faulty circuit and try it again",
        ],
      },
      {
        heading: "Is it an appliance or water? Causes 1 to 4",
        body: [
          "In our experience across KL and Selangor, these four causes account for most RCCB trips. Each one lets a small current leak to earth, which is exactly what the RCCB is designed to detect. The RCCB is doing its job, so the fix is to remove the leak, never to bypass or downgrade the RCCB.",
        ],
        bullets: [
          "1. Water heater element: an ageing element leaks current, often tripping only when the shower is on",
          "2. Rain in outdoor fittings: porch lights, garden lights and outdoor sockets trip after heavy rain",
          "3. Faulty appliances: fridges, kettles, rice cookers and washing machines develop leakage as they age",
          "4. Aircond earth leakage: a blocked drain pipe or a failing outdoor unit can trip the RCCB",
        ],
      },
      {
        heading: "Is it the wiring or the DB box? Causes 5 to 8",
        body: [
          "If no appliance is to blame, the problem is in the fixed installation. These faults tend to get worse over time, and some of them, especially damaged cables, are a fire risk. Finding them takes an insulation resistance tester and experience, not a plug-in tester from the hardware shop.",
        ],
        bullets: [
          "5. Old wiring: PVC insulation in 25–30-year-old houses turns brittle and leaks, worse in humid weather",
          "6. Overloaded circuits: too many appliances on one MCB, common with extension cords",
          "7. Rats in the ceiling: chewed cables in the roof space cause leakage or short circuits",
          "8. Faulty RCCB: an old RCCB can trip with no real fault, or worse, fail to trip at all",
        ],
      },
      {
        heading: "When should you call an electrician?",
        body: [
          "Call an electrician if the RCCB will not reset with all MCBs off, if the same circuit trips again after you have unplugged everything, or if tripping comes with a burning smell, buzzing or scorch marks on a socket. Also call if an MCB feels hot, or if anyone has felt a tingle from a tap, appliance or metal fitting.",
          "Do not keep resetting a breaker that trips straight away, and never tape or hold a switch up. If only one circuit is affected, leave that MCB off and book a visit. We offer same-day service every day: book in the morning and it is usually fixed the same day.",
        ],
      },
      {
        heading: "How much does it cost to fix tripping in KL?",
        body: [
          "Every visit has a minimum charge of RM80, which covers travel and inspection. Most tripping jobs cost RM150 – RM400 with us, including finding the fault, and you approve the price before work starts. Across the Klang Valley, tripping repairs are typically quoted at RM100 – RM400.",
          "If the fault turns out to be inside an appliance, we will tell you plainly. It is often cheaper to repair or replace the appliance than to pay for more electrical work. Water heater and aircond faults may need the manufacturer's own service technician, and we can confirm the wiring side is safe first.",
        ],
        table: {
          head: ["Job", "Market range", "My Power Care KL"],
          rows: [
            ["Inspection visit (minimum charge)", "Up to RM150", "RM80 per visit"],
            ["Fault finding and testing (first hour)", "RM100 – RM400", "RM150"],
            ["Power tripping: find and fix", "RM100 – RM400", "RM150 – RM400"],
            ["RCCB / ELCB replacement", "RM140 – RM600", "RM250 – RM450"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Why does my RCCB trip when it rains?",
        a: "Rain is getting into an outdoor socket, porch light, garden light or exposed cable joint, and the water creates a path to earth. Leave that circuit off until it dries, then have the fitting replaced with a weatherproof (IP65 or better) one and the joints sealed.",
      },
      {
        q: "Why does my RCCB trip even with all the MCBs off?",
        a: "Most home DB boxes use single-pole MCBs that only switch the live wire, so a fault between neutral and earth can still trip the RCCB. The RCCB itself may also be faulty. Either way, this needs an electrician with test equipment. Do not open the board.",
      },
      {
        q: "Can I just replace the RCCB to stop the tripping?",
        a: "Only if the RCCB is actually faulty. In most cases it trips because there is a genuine leak somewhere. Fitting a new RCCB, or worse, a less sensitive one, hides the problem and leaves the shock risk in place. Test first, then replace if needed.",
      },
      {
        q: "Why does my house trip when the water heater is on?",
        a: "The heating element is probably breaking down and leaking current to earth through the water. Stop using the heater, switch it off at its isolator, and have the element or heater replaced. It is a shock risk in a wet area, so do not keep resetting it.",
      },
      {
        q: "How do I test my RCCB?",
        a: "Press the test button marked 'T' once a month with the power on. The RCCB should trip immediately; push it back up to restore power. If nothing happens when you press the button, it is not protecting you and should be replaced straight away.",
      },
    ],
  },
  "electrician-price-list-malaysia": {
    title: "Electrician Price List in KL & Selangor (2026)",
    metaTitle: "Electrician Price List in KL & Selangor (2026)",
    metaDescription:
      "2026 electrician prices in KL and Selangor: visit RM80, tripping repair from RM150, power point from RM150, DB box from RM1,000. Market ranges vs our rates.",
    tldr: "Our 2026 rates in KL and Selangor start with an RM80 minimum charge per visit, tripping repairs at RM150 – RM400, a new power point from RM150, water heater installation at RM150 – RM250 and a single-phase DB box at RM1,000 – RM2,000. The tables below compare each job with market ranges.",
    sections: [
      {
        heading: "How much does an electrician charge to come out?",
        body: [
          "Most electricians in the Klang Valley charge a visit or inspection fee of up to RM150. Ours is a minimum charge of RM80 per visit, which covers travel and inspection, and you get a fixed quote on site before any work begins. Our rates are the same every day of the week, weekends included.",
        ],
        table: {
          head: ["Visit type", "Market range", "My Power Care KL"],
          rows: [
            ["Inspection visit (minimum charge)", "Up to RM150", "RM80 per visit"],
            ["Fault finding and testing (first hour)", "RM100 – RM400", "RM150"],
          ],
        },
      },
      {
        heading: "How much for lights, switches, sockets and fans?",
        body: [
          "These are the most common small jobs. Light and fan prices are labour only, because most people buy their own fittings. Switch and socket prices include a standard switch or socket. New points cost more than replacements because new cable has to be run from the nearest circuit or from the DB box.",
          "Our ceiling fan price covers assembly, balancing and removing the old fan, which is why it sits above the cheapest quotes. Very low prices (RM45 – RM60) usually assume the hook and point already exist and the fan is a basic model.",
        ],
        table: {
          head: ["Job", "Market range", "My Power Care KL"],
          rows: [
            ["Light fitting replacement", "RM15 – RM60 per light", "RM40 – RM80 per light"],
            ["New cut-in LED downlight", "RM60 – RM150 per light", "RM100 – RM150 per light"],
            ["New light point", "RM60 – RM150", "RM100 – RM150"],
            ["Switch replacement", "Up to RM150", "RM80 – RM120"],
            ["New 13A socket (surface trunking)", "RM60 – RM250", "RM150 – RM250"],
            ["New 13A socket (concealed in wall)", "RM200 – RM600", "RM250 – RM450"],
            ["Ceiling fan installation (existing point)", "RM45 – RM150", "From RM200 per fan"],
            ["Ceiling fan with new fan point", "RM150 – RM330", "RM300 – RM400"],
          ],
        },
      },
      {
        heading: "How much for water heaters, kitchen hoods and aircond points?",
        body: [
          "Water heaters and airconds draw heavy current, so they need their own circuit with the right cable and breaker. That is why a new point costs several times more than swapping a heater on an existing one. A new water heater point should always include a 10mA RCCB for shower safety, and ours does.",
        ],
        table: {
          head: ["Job", "Market range", "My Power Care KL"],
          rows: [
            ["Water heater installation (existing point)", "RM80 – RM250", "RM150 – RM250"],
            ["Water heater with new point + 10mA RCCB", "RM200 – RM600", "RM350 – RM550"],
            ["Aircond power point with isolator", "RM130 – RM400", "RM250 – RM400"],
            ["Water heater repair (not heating or tripping)", "RM80 – RM300", "RM150 – RM300"],
            ["Kitchen hood installation", "RM100 – RM300", "RM200 – RM350"],
            ["Exhaust fan installation (existing point)", "RM80 – RM250", "RM150 – RM250"],
          ],
        },
      },
      {
        heading: "How much for DB box, rewiring, 3-phase and EV chargers?",
        body: [
          "Bigger jobs have the widest price spread, because breaker quality, cable size and the amount of hacking vary so much from quote to quote. Always ask for an itemised quote. Our 3-phase price excludes TNB's own connection fee and deposit, which you pay to TNB directly.",
        ],
        table: {
          head: ["Job", "Market range", "My Power Care KL"],
          rows: [
            ["RCCB / ELCB replacement", "RM140 – RM600", "RM250 – RM450"],
            ["DB box replacement, single-phase", "RM400 – RM3,500", "RM1,000 – RM2,000"],
            ["DB box replacement, 3-phase", "RM800 – RM4,500", "RM1,800 – RM3,500"],
            ["Single to 3-phase upgrade (excl. TNB fees)", "RM3,000 – RM10,000", "RM5,000 – RM8,000"],
            ["Full rewiring, 2–3 bed condo", "RM3,000 – RM12,000", "RM6,000 – RM10,000"],
            ["Full rewiring, double-storey terrace", "RM8,000 – RM25,000", "RM13,000 – RM20,000"],
            ["EV charger installation (your charger, landed)", "RM800 – RM2,500", "RM1,800 – RM2,800"],
          ],
        },
      },
      {
        heading: "What is the difference between labour-only and supply-and-install?",
        body: [
          "Labour-only means you buy the item and the electrician fits it. This is normal for lights, fans, water heaters, kitchen hoods and EV chargers, because you choose the brand and model. If you would rather we supply it, we buy it at cost and show you the receipt, so there is no hidden markup.",
          "Supply-and-install prices include materials. For wiring jobs, our per-point prices include cable, trunking or conduit and a standard switch or socket. Premium, smart or designer switches cost extra. When comparing quotes, check which kind each one is; a cheap labour-only price can work out dearer once materials are added.",
        ],
      },
      {
        heading: "What hidden costs should you ask about?",
        body: [
          "Most disagreements come from items nobody mentioned at the start. Before work begins, ask whether the quote covers the items below. We give a fixed written quote before starting, so the price only changes if you decide to add work.",
        ],
        bullets: [
          "Hacking, plastering and painting for concealed wiring (often RM70 or more per point)",
          "Cutting and patching plaster ceilings",
          "Long cable runs from the DB box",
          "Condo renovation permits, deposits or lift bookings",
          "Disposal of old fittings and cable",
          "Parts found faulty during the repair, such as a burnt MCB",
          "Weekend or evening surcharges (we do not charge them)",
        ],
      },
      {
        heading: "Can you get an electrician the same day?",
        body: [
          "Often, yes. We offer same-day service every day: book in the morning and most faults are fixed the same day. If only one circuit has tripped and the rest of the house works with it switched off, leave it off until we arrive. For sparking or a burning smell, switch off at the DB box if it is safe to do so.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does an electrician charge per hour in Malaysia?",
        a: "Most electricians in KL price by the job, not by the hour. Our fault finding is RM150 for the first hour, which covers testing to locate the problem. Simple jobs such as replacing a switch or socket are RM80 – RM120 each.",
      },
      {
        q: "Is there a minimum charge for a visit?",
        a: "Yes. Every visit has a minimum charge of RM80, which covers travel and inspection. You get a fixed quote on site before any work begins, and nothing is done until you approve it.",
      },
      {
        q: "Why are some electrician quotes so cheap?",
        a: "Very low quotes often mean thinner cable, unbranded breakers or no proper testing. Get the cable size and breaker brand in writing, check what is excluded, and compare quotes like for like rather than on the total alone.",
      },
      {
        q: "Do electrician prices include the fan or light?",
        a: "Usually not. Fan and light installation prices are labour only, because most homeowners choose their own fittings. If you want us to supply them, we buy at cost and show you the receipt. Wiring prices include cable, trunking and a standard switch or socket.",
      },
      {
        q: "Do you charge extra on weekends?",
        a: "No. Our rates are the same every day of the week, Saturdays and Sundays included, and you get a fixed quote before any work starts. We do not charge weekend or evening surcharges.",
      },
    ],
  },
  "single-phase-vs-three-phase-malaysia": {
    title: "Single-Phase vs 3-Phase Power: Does Your Home Need an Upgrade?",
    metaTitle: "Single-Phase vs 3-Phase: Do You Need an Upgrade?",
    metaDescription:
      "Running several aircons, instant heaters and an EV charger? When a 3-phase upgrade makes sense, the TNB process step by step, timeline and cost in Malaysia.",
    tldr: "Most Malaysian homes run fine on single-phase, but if you run several aircons, instant heaters, an induction hob or an EV charger and your main switch trips or lights dim, a 3-phase upgrade is worth it. It typically takes 2–6 weeks and costs RM5,000 – RM8,000 with us, plus TNB's own fees.",
    sections: [
      {
        heading: "What is the difference between single-phase and 3-phase?",
        body: [
          "Single-phase supply comes into your house on one live wire and a neutral, at 230V. Three-phase brings three live wires and a neutral: 400V between phases and 230V from each phase to neutral. Your appliances still run at 230V. The difference is that the load is shared across three phases instead of one.",
          "Think of it as one lane versus three. Most condos and terraces in the Klang Valley were built with single-phase, which handles lights, fans, a fridge and two or three aircons comfortably. Many semi-Ds and bungalows are already 3-phase. A 3-phase DB box has a 4-pole main switch and breakers grouped under red, yellow and blue.",
        ],
        table: {
          head: ["Feature", "Single-phase", "3-phase"],
          rows: [
            ["Supply wires", "1 live + neutral", "3 live + neutral"],
            ["Voltage", "230V", "400V between phases, 230V to neutral"],
            ["Typical homes", "Condos, most terraces", "Semi-Ds, bungalows, larger terraces"],
            [
              "Comfortable load",
              "Lights, fans, 2–3 aircons, 1 heater",
              "Many aircons, several heaters, hob, EV charger",
            ],
            ["EV charger", "Up to 7kW", "7kW, 11kW or 22kW"],
          ],
        },
      },
      {
        heading: "What are the signs your home needs 3-phase?",
        body: [
          "The clearest sign is the main switch or main breaker tripping when several heavy appliances run together, typically in the evening when everyone is home with the aircons on. Another is voltage drop: lights dim or flicker when an aircond compressor starts or an instant heater switches on.",
          "Before upgrading, rule out simpler problems. Frequent main trips can also come from a worn main breaker or a loose, overheating connection. A load assessment shows whether your total demand really exceeds what single-phase can carry; if it does not, a DB box upgrade at RM1,000 – RM2,000 may solve it for far less.",
        ],
        bullets: [
          "Several aircons running at once, especially 2hp units or bigger",
          "Two or more instant water heaters",
          "An induction hob or a built-in electric oven",
          "A home EV charger, or plans to buy an EV",
          "Lights dimming when big appliances start",
          "The main switch tripping during evening peak use",
          "A renovation or extension adding new heavy loads",
        ],
      },
      {
        heading: "How does the TNB 3-phase upgrade process work?",
        body: [
          "Your electrical contractor normally handles both the TNB application and the wiring. The process has six main steps. TNB's part comes in the middle, when it inspects the site and issues its charges, and at the end, when it installs the new meter and connects the supply.",
          "On changeover day, expect the power to be off for a few hours while TNB swaps the meter and service cable. We ask for a morning slot where possible, so you are not left without lights or aircond at night.",
        ],
        bullets: [
          "1. Load assessment: the contractor lists your appliances and calculates maximum demand",
          "2. Application: the contractor submits the supply upgrade application to TNB",
          "3. TNB site inspection: TNB checks the premises and issues the connection charge and deposit for payment",
          "4. Wiring: a new meter board, 3-phase DB box and main cables, with circuits spread across the phases",
          "5. Testing: the installation is tested, and TNB needs the test certificates before connecting",
          "6. Meter: TNB installs the 3-phase meter and connects the new supply",
        ],
      },
      {
        heading: "How long does a 3-phase upgrade take?",
        body: [
          "Typically 2–6 weeks from application to the new meter. The electrical work at your house takes only one or two days. Most of the waiting is for TNB's site inspection, payment processing and meter installation, which depends on the TNB branch, the time of year and how busy they are.",
          "If the local transformer or overhead line has no spare capacity, TNB may need to upgrade its own equipment first, which takes longer. Your contractor should tell you after TNB's site visit if this applies. Plan the upgrade before the EV arrives or before you move into a renovated house, not after.",
        ],
      },
      {
        heading: "How much does it cost to upgrade to 3-phase?",
        body: [
          "Our price is RM5,000 – RM8,000 for a typical landed house, covering the TNB application, new meter board, 3-phase DB box, main cables, rebalancing your circuits and testing. Across the Klang Valley, contractor quotes range from RM3,000 to RM10,000 for the same scope.",
          "TNB charges its own connection fee and deposit, which vary with the type of premises and expected usage, so check the current rates with TNB before you budget. Our price goes towards the upper end if the meter board has to move, the cable run is long, or several circuits need rewiring at the same time.",
        ],
        table: {
          head: ["Item", "Market range", "My Power Care KL"],
          rows: [
            ["Single to 3-phase upgrade (contractor work)", "RM3,000 – RM10,000", "RM5,000 – RM8,000"],
            ["3-phase DB box replacement only", "RM800 – RM4,500", "RM1,800 – RM3,500"],
            ["TNB connection charge", "Set by TNB", "Paid to TNB directly"],
            ["TNB deposit (3-phase)", "Roughly RM400 – RM1,600", "Paid to TNB directly"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Will 3-phase increase my electricity bill?",
        a: "Not by itself. TNB bills you for the electricity you use, and the domestic tariff does not change because you move to 3-phase. Your bill only rises if you use more power, for example by charging an EV. The upfront TNB deposit is higher for 3-phase.",
      },
      {
        q: "Do I need 3-phase for a home EV charger?",
        a: "Not always. A 7kW charger runs on single-phase and covers most daily driving. You need 3-phase for an 11kW or 22kW charger, or if your house is already near its limit with aircons and heaters. A load assessment tells you which applies.",
      },
      {
        q: "Do my appliances need to change after a 3-phase upgrade?",
        a: "No. Your lights, sockets, fans, aircons and water heaters stay as they are, running at 230V. The electrician spreads them across the three phases at the new DB box. Only true 3-phase equipment, such as an 11kW or 22kW EV charger, uses all three phases.",
      },
      {
        q: "Can a condo unit be upgraded to 3-phase?",
        a: "Usually not. Condo units get their supply through the building's own distribution system, and most are single-phase by design. Any change needs management approval and spare capacity in the building. Landed houses are the usual candidates for a 3-phase upgrade.",
      },
      {
        q: "How long will my power be off during the upgrade?",
        a: "The work at the DB box usually needs a few hours without power, and the TNB meter changeover takes another few hours, often on a different day. We plan both in advance so you know when to expect them. Most families do not need to move out.",
      },
    ],
  },
  "signs-your-house-needs-rewiring": {
    title: "9 Signs Your House Needs Rewiring",
    metaTitle: "9 Signs Your House Needs Rewiring (Malaysia)",
    metaDescription:
      "Old fuses, warm sockets, burning smells, flickering lights or wiring over 25 years old? 9 warning signs your house needs rewiring, and what an inspection costs.",
    tldr: "Your house probably needs rewiring if the wiring is 25–30 years old or more, it still has rewireable fuses or no RCCB, or you notice warm sockets, burning smells, flickering lights or frequent tripping. An inspection (RM250 – RM600 with us) tells you whether you need a full rewire or just repairs.",
    sections: [
      {
        heading: "Sign 1: Is your wiring more than 25 years old?",
        body: [
          "PVC-insulated cable in a Malaysian home typically lasts 25–30 years. Heat in the roof space, humidity and decades of load slowly harden the insulation until it cracks. Many terraces in older parts of KL, PJ and Klang, built from the 1970s to the 1990s, still have original wiring designed for a few fans and a fridge, not five aircons.",
          "Age alone does not make wiring dangerous, but it does mean it is due for testing. If you do not know when the house was last rewired, look for clues: old round-pin sockets, brown bakelite switches or a wooden board behind the meter all point to wiring from another era.",
        ],
      },
      {
        heading: "What does your DB box tell you? (Signs 2 and 3)",
        body: [
          "Sign 2 is a DB box with rewireable fuses (ceramic holders with fuse wire) or no RCCB at all. An RCCB cuts the power within a fraction of a second when current leaks to earth, which is what protects you from a fatal shock. A house without one is wired to a standard that is decades out of date.",
          "Sign 3 is frequent tripping. The odd trip after heavy rain has simple causes, but if the RCCB trips every week, or several circuits trip, the insulation may be breaking down across the house. You can check all of this through the DB box door. Never remove the cover; leave what is behind it to an electrician.",
        ],
      },
      {
        heading: "What can you see, smell or hear? (Signs 4, 5 and 6)",
        body: [
          "These three signs mean heat is building up where it should not. Loose connections, overloaded sockets and worn insulation all produce heat long before they produce a fire. If you notice any of them, stop using that socket or switch, switch off its MCB, and have it checked soon.",
          "A burning smell with no obvious source is the one to treat as urgent. Switch off the main switch if you can reach it safely, and call an electrician. Plastic melting inside a wall or ceiling can smoulder for hours before you see any smoke.",
        ],
        bullets: [
          "Sign 4: warm or discoloured sockets and switches, with brown or black marks around the pins",
          "Sign 5: a burning or fishy smell near sockets, switches, the DB box or the ceiling",
          "Sign 6: buzzing, crackling or sizzling from switches, sockets or the DB box",
        ],
      },
      {
        heading: "Why do lights flicker and cables crack? (Signs 7 and 8)",
        body: [
          "Sign 7 is lights that flicker or dim, especially when an aircond, iron or water heater switches on. A faulty LED driver can make one light flicker, but if it happens across several rooms, it usually points to loose connections or undersized cable struggling with the load.",
          "Sign 8 is the cable itself. Electricians often find cracked, crumbling PVC insulation behind old switch plates and in the roof space, and some older houses still have aluminium cable, which loosens at terminals over time. Cracked insulation exposes live conductors. Do not unscrew switch plates to check yourself; that is the electrician's job.",
        ],
      },
      {
        heading: "Are you living on extension cords? (Sign 9)",
        body: [
          "Sign 9 is a house that simply does not have enough sockets. Older homes were wired with two or three sockets per room. Today the same room has a TV, router, phone chargers, an aircond and maybe a home office, so families end up with multi-plug adaptors and extension cords running everywhere.",
          "Extension cords are fine for short-term use, but chained adaptors and cords under carpets overheat. If you rely on them permanently, adding proper points is safer. A new surface-trunking socket costs RM150 – RM250 with us; if you need many, a partial or full rewire is often better value.",
        ],
      },
      {
        heading: "How common are electrical house fires in Malaysia?",
        body: [
          "BOMBA (the Fire and Rescue Department) reports that about 60% of house fires in Malaysia are caused by electrical faults. Between January and September 2024, 3,172 residential fires were electrical, around 63% of all residential fires in that period. Old wiring, overloaded sockets and poor-quality repairs are common factors.",
          "Most of these fires start from faults that gave warning signs first: a warm socket, a strange smell, tripping that got ignored. That is why we recommend a professional inspection every 10–15 years, and sooner if you have just bought an older house or are planning a renovation with new heavy appliances.",
        ],
      },
      {
        heading: "Do you need an inspection or a full rewire?",
        body: [
          "Start with an inspection unless the wiring is obviously failing. An inspection tests insulation resistance and RCCB trip time, checks earthing, the DB box and the points, and gives you a written report. It often shows that only part of the house needs work, which costs far less than a full rewire.",
        ],
        table: {
          head: ["Option", "When it makes sense", "My Power Care KL"],
          rows: [
            ["Safety inspection, condo", "Older unit, new purchase, before renovation", "RM250 – RM350"],
            ["Safety inspection, landed", "Older house, new purchase, before renovation", "RM350 – RM600"],
            ["Partial rewiring (one room)", "One area failing, the rest tests well", "RM1,000 – RM2,500"],
            ["Full rewiring, condo (2–3 bed)", "Wiring 25+ years old or failing tests", "RM6,000 – RM10,000"],
            ["Full rewiring, single-storey terrace", "Wiring 25+ years old or failing tests", "RM8,000 – RM13,000"],
            ["Full rewiring, double-storey terrace", "Wiring 25+ years old or failing tests", "RM13,000 – RM20,000"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "How long does house wiring last in Malaysia?",
        a: "PVC-insulated wiring usually lasts 25–30 years, sometimes longer if it was installed well and never overloaded. Heat in the roof space and high humidity shorten its life. Whatever the age, we recommend an inspection every 10–15 years.",
      },
      {
        q: "Can I rewire only part of my house?",
        a: "Yes, if testing shows the rest of the wiring is in good condition. Partial rewiring of one room costs RM1,000 – RM2,500 with us. If the whole house has the same old cable, though, patching one area at a time usually costs more in the end.",
      },
      {
        q: "What does an electrical safety inspection include?",
        a: "Ours covers insulation resistance and RCCB trip tests on each circuit, earth continuity checks, a visual check of the DB box, sockets and accessible cables, and a written report with prices for any fixes. Condos cost RM250 – RM350, landed houses RM350 – RM600.",
      },
      {
        q: "Is it safe to live in a house with old wiring?",
        a: "Old wiring that tests well is not automatically dangerous. The risk rises when there is no RCCB, the insulation has broken down, or the house now carries far more load than the wiring was designed for. An inspection replaces guesswork with test results.",
      },
      {
        q: "Should I rewire before renovating?",
        a: "Yes, if the wiring is old. Rewiring before plastering, painting and new ceilings avoids hacking finished walls later, and you can plan sockets and lights around the new layout. It is the cheapest and least disruptive time to do it.",
      },
    ],
  },
  "ev-charger-installation-malaysia": {
    title: "Home EV Charger Installation in Malaysia: Cost, Rules and Process (2026)",
    metaTitle: "Home EV Charger Installation Malaysia: Cost & Rules",
    metaDescription:
      "Home EV charger installation in Malaysia costs RM1,800 – RM2,800 with your own charger. 2026 guide to the rules, condo approval, 7kW vs 22kW and tax relief.",
    tldr: "A home EV charger in the Klang Valley typically costs RM2,800 – RM6,250 all-in with a 7kW wallbox, or RM1,800 – RM2,800 for our wiring and installation if you already have the charger. For daily charging it should be a Mode 3 wallbox on its own circuit with RCD protection.",
    sections: [
      {
        heading: "How much does home EV charger installation cost?",
        body: [
          "The total depends on the charger you buy, the distance from your DB box to the parking spot, and whether your supply can take the extra load. For a landed house with a single-phase 7kW wallbox and a reasonable cable run, most owners spend RM2,800 – RM6,250 including the charger itself.",
          "Our RM1,800 – RM2,800 covers a dedicated circuit from the DB box, correctly sized cable, RCD protection, an isolator, mounting the wallbox, testing and a test charge with your car. If your car dealer offers free installation, check exactly what it includes before you pay for anything twice.",
        ],
        table: {
          head: ["Setup", "Market range", "My Power Care KL"],
          rows: [
            ["Labour and wiring only (your charger, landed)", "RM800 – RM2,500", "RM1,800 – RM2,800"],
            ["All-in with 7kW charger (landed)", "RM2,800 – RM6,250", "RM1,800 – RM2,800 plus charger at cost"],
            ["Condo, with TNB sub-meter", "RM4,500 – RM8,000", "Quoted after site visit"],
            ["Single to 3-phase upgrade (if needed)", "RM3,000 – RM10,000", "RM5,000 – RM8,000 excl. TNB fees"],
          ],
        },
      },
      {
        heading: "Single-phase 7kW or 3-phase 11kW or 22kW: which do you need?",
        body: [
          "A 7kW charger runs on single-phase supply and adds roughly 35–45km of range per hour. Plugged in overnight, that fully charges most EVs, which is why it suits the majority of homes. An 11kW or 22kW charger needs 3-phase supply, which most terrace houses and condo units do not have.",
          "Check your car's onboard AC charger before paying for a bigger wallbox. Many popular EVs accept only 7kW or 11kW on AC, so a 22kW unit will not charge them any faster. If your house already runs several aircons and instant heaters, we check the load first; the answer may be a 3-phase upgrade or a charger with load management.",
        ],
        table: {
          head: ["Charger", "Supply needed", "Approx. range added per hour", "Best for"],
          rows: [
            ["7kW", "Single-phase, 32A", "35–45km", "Most homes, overnight charging"],
            ["11kW", "3-phase, 16A per phase", "60–70km", "3-phase landed homes"],
            ["22kW", "3-phase, 32A per phase", "Limited by the car's onboard charger", "Cars that accept 22kW on AC"],
          ],
        },
      },
      {
        heading: "What do the EV charging guidelines require?",
        body: [
          "Suruhanjaya Tenaga's Guidelines for Electric Vehicle Charging Systems (EVCS), issued in February 2025, set the rules for home charging. In short, daily charging should use a Mode 3 wallbox on its own circuit with RCD protection, and the installation should be tested before use.",
          "The portable cable that comes with many EVs is for occasional use. Drawing 10A or more through a household 13A socket for eight hours every night overheats sockets and plugs. Most wallboxes have built-in DC leakage detection, which is why a Type A RCD is enough; without it, a Type B RCD is needed.",
        ],
        bullets: [
          "A Mode 3 wallbox on its own dedicated circuit",
          "No regular daily charging from a plain 13A socket",
          "RCD protection of 30mA, minimum Type A",
          "Insulation, earthing and RCD tests before first use",
        ],
      },
      {
        heading: "How is a condo installation different from a landed house?",
        body: [
          "In a landed house, the job is straightforward: we run a dedicated circuit from your DB box to the porch, usually in a day. In a condo, the cable has to cross common property to reach your parking bay, so you need written approval from the JMB or MC under the Strata Management Act 2013 and the building's by-laws.",
          "Some buildings require a separate TNB sub-meter for each EV bay, or use a shared charging system run by an operator. Expect to submit drawings, the charger's specifications and contractor details to the management office. Approval can take several weeks, so start before the car arrives. Condo installations with a sub-meter typically cost RM4,500 – RM8,000.",
        ],
      },
      {
        heading: "What is the installation process, step by step?",
        body: [
          "For a landed house, these steps usually take one short site visit and one installation day, about a week apart. Condo timing depends on how quickly the management office replies. If your DB box is old or already full, we may recommend replacing it during the same visit rather than squeezing in another breaker.",
        ],
        bullets: [
          "1. Site survey: check the main supply, DB box capacity and cable route",
          "2. Choose the charger: a 7kW single-phase wallbox suits most homes",
          "3. Approvals: JMB or MC approval for condos, plus any TNB sub-meter application",
          "4. Installation: dedicated circuit, cable, RCD, isolator and wallbox",
          "5. Testing: insulation, earthing and RCD tests",
          "6. Commissioning: a test charge with your car and a walk-through of the app",
        ],
      },
      {
        heading: "Can you claim tax relief on a home EV charger?",
        body: [
          "Yes. Malaysia gives individual income tax relief of up to RM2,500 for expenses on EV charging facilities, which can include buying and installing a home charger. The relief has been extended to the 2027 year of assessment. Keep the invoices in your own name, and confirm the current conditions with LHDN before you file.",
          "Some car brands and charger sellers also run installation promotions. They are worth using, but check whether the promotion covers the full cable run, the RCD and testing, or only a basic installation up to a fixed cable length, with every extra metre charged separately.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I charge my EV from a normal 13A socket?",
        a: "Only occasionally. ST's 2025 guidelines do not allow regular daily charging from a plain 13A socket. Household sockets are not designed to carry 10A or more for hours every night, and they overheat. For daily use, install a Mode 3 wallbox on a dedicated circuit.",
      },
      {
        q: "Do I need 3-phase power for a home EV charger?",
        a: "Not for a 7kW charger, which runs on single-phase and suits most drivers. You need 3-phase for an 11kW or 22kW charger. If your house is already near its load limit, a load assessment will show whether you need an upgrade first.",
      },
      {
        q: "How long does EV charger installation take?",
        a: "A landed house installation usually takes half a day to a full day, after a short site survey. Condo installations take longer overall because of JMB or MC approval and, where required, the TNB sub-meter, which can add several weeks.",
      },
      {
        q: "What RCD does a home EV charger need?",
        a: "A 30mA RCD, minimum Type A, on the charger's own circuit. Type A is enough when the wallbox has built-in DC leakage detection, which most do. Without that feature, a Type B RCD is needed.",
      },
      {
        q: "How much electricity does a home EV charger use?",
        a: "It depends on how far you drive. As a rough guide, 1,500km a month at about 16kWh per 100km uses around 240kWh. Check your TNB tariff to work out the cost; home charging is normally much cheaper per kWh than public DC fast charging.",
      },
    ],
  },
  "water-heater-10ma-rccb": {
    title: "Does Your Water Heater Need a 10mA RCCB? (Malaysian Rules Explained)",
    metaTitle: "Does Your Water Heater Need a 10mA RCCB?",
    metaDescription:
      "Malaysian rules require 10mA protection for water heaters in bathrooms. 10mA vs 30mA vs 100mA explained, built-in ELCB vs RCCB, and installation from RM150.",
    tldr: "Yes: Regulation 36 of the Electricity Regulations 1994 requires an RCD that trips at 10mA or less in wet locations such as bathrooms, and ST has required it for water heaters since 2014. With us, fitting a heater on an existing point costs RM150 – RM250, and a new point with a 10mA RCCB costs RM350 – RM550.",
    sections: [
      {
        heading: "What do Malaysian rules say about water heater RCCBs?",
        body: [
          "Regulation 36 of the Electricity Regulations 1994 sets the sensitivity of residual current devices (RCDs) by location: 10mA or less for wet locations, 30mA or less for socket circuits and hand-held equipment, and 100mA or less for general protection. A bathroom with a shower is the textbook wet location.",
          "In 2014, Suruhanjaya Tenaga made 10mA RCD protection a requirement for water heaters. Wet skin lets far more current flow at the same voltage, so the shower gets the most sensitive protection. Every new water heater point we install has its own 10mA RCCB, separate from the RCCB in your DB box.",
        ],
      },
      {
        heading: "What is the difference between 10mA, 30mA and 100mA RCCBs?",
        body: [
          "The mA rating is the leakage current at which the RCCB trips; the lower the number, the more sensitive it is. 30mA is the level chosen to protect people from fatal shock in normal, dry conditions. 10mA adds a safety margin for wet conditions, and 100mA is mainly there to catch earth faults that could start a fire.",
          "Many older houses have a single 100mA RCCB for the whole house. That helps against fire, but it does not reliably protect a person from shock. If your board is like this, adding a 30mA RCCB for the socket circuits and a 10mA RCCB for the water heater is a worthwhile upgrade.",
        ],
        table: {
          head: ["Rating", "Where it is used", "What it protects against"],
          rows: [
            ["10mA", "Water heaters, bathrooms and other wet locations", "Shock to a person in wet conditions"],
            [
              "30mA",
              "Socket circuits, hand-held appliances, most home DB boxes",
              "Shock to a person in normal conditions",
            ],
            [
              "100mA",
              "General protection for the whole installation",
              "Earth faults and fire risk, not personal shock",
            ],
          ],
        },
      },
      {
        heading: "Is the ELCB built into my water heater enough?",
        body: [
          "Most instant water heaters sold in Malaysia have a built-in ELCB with its own test button on the unit. It is a useful extra layer, but it only protects from the heater onwards. The cable, switch and connections between your DB box and the heater are not covered by it, and it sits inside a hot, humid casing.",
          "A separate 10mA RCCB, at the DB box or next to the heater's isolator, protects the whole circuit and can be tested and replaced on its own. That is why we fit one even when the heater has a built-in ELCB. Press both test buttons once a month to check they trip.",
        ],
      },
      {
        heading: "Why does my house trip when I turn on the shower?",
        body: [
          "If the RCCB trips only when the heater is on or hot water is running, the heating element is the usual suspect. As elements age, small cracks let current leak into the water and to earth. The 10mA RCCB catches this first, which is exactly its job. Switch the heater off at its isolator and stop using it until it is checked.",
          "A tingle from any tap, shower head or heater casing needs action straight away. Switch off the heater at the isolator, and at the main switch if needed, keep everyone out of the bathroom and call an electrician. Do not use the shower again until the fault has been found.",
        ],
        bullets: [
          "Tripping only when the heater is on or hot water flows",
          "The heater's own ELCB trips repeatedly",
          "A slight tingle from the shower head, tap or heater casing",
          "Water leaking from the heater body or cable entry",
          "Water stays lukewarm even on the highest setting",
          "Burn marks or a smell around the heater switch",
        ],
      },
      {
        heading: "How much does water heater installation cost?",
        body: [
          "Fitting a new heater on an existing, correctly protected point is a quick job. A new point costs more because it needs a dedicated cable from the DB box, a 20A double-pole switch outside the shower area and the 10mA RCCB. Prices below include labour and materials, with the heater supplied by you.",
          "If your existing point has no 10mA RCCB, we will recommend adding one before connecting the new heater. In some older condos, the heater shares a circuit with the bathroom lights or sockets; it should be moved onto its own breaker, since most instant heaters draw 15–16A on their own.",
        ],
        table: {
          head: ["Job", "Market range", "My Power Care KL"],
          rows: [
            ["Water heater installation (existing point)", "RM80 – RM250", "RM150 – RM250"],
            ["Water heater with new point + 10mA RCCB", "RM200 – RM600", "RM350 – RM550"],
            ["RCCB / ELCB replacement", "RM140 – RM600", "RM250 – RM450"],
            ["Power tripping: find and fix", "RM100 – RM400", "RM150 – RM400"],
          ],
        },
      },
      {
        heading: "How do you keep a water heater safe?",
        body: [
          "Water and electricity are a bad mix in a small tiled room, but a properly installed heater is very safe. Most of the dangerous cases we come across involve a missing or bypassed RCCB, a DIY connection, or a heater that kept tripping and was rewired to stop it. These habits keep the risk low.",
        ],
        bullets: [
          "Give the heater its own circuit and a 10mA RCCB",
          "Keep the switch or isolator outside the shower area",
          "Press the RCCB and heater test buttons once a month",
          "Never bypass or remove an RCCB that keeps tripping",
          "Replace heaters with cracked casings or water leaks",
          "Have new points and replacements installed and tested by an electrician",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a 30mA RCCB enough for a water heater?",
        a: "No. A water heater in a bathroom is in a wet location, and Malaysian rules call for an RCD of 10mA or less there. A 30mA RCCB in the DB box is still useful as backup for the rest of the circuit, but the heater needs its own 10mA protection.",
      },
      {
        q: "Why does my 10mA RCCB trip even with a new heater?",
        a: "Possible causes include moisture in the switch or connection box, a damaged cable, a circuit shared with other bathroom loads, or a faulty RCCB. Sometimes small leakages from several appliances on the same circuit add up. Testing the circuit finds the real cause.",
      },
      {
        q: "Can I install a water heater myself?",
        a: "Mounting the heater is simple, but the electrical connection should be done by an electrician. Many heater warranties also require professional installation. A wrong earth connection or a missing RCCB in a shower is a serious shock risk.",
      },
      {
        q: "Where should the 10mA RCCB be installed?",
        a: "Either in the DB box on the heater's own circuit, or in a small enclosure beside the heater's isolator, outside the shower area. Both work. It should be somewhere dry and easy to reach, so you can press the test button every month and reset it if it trips.",
      },
      {
        q: "Do storage water heaters need a 10mA RCCB too?",
        a: "Generally yes, if the heater supplies a shower or bathroom. Storage heaters also draw high current for long periods, so they need a dedicated circuit with correctly sized cable and a suitable breaker. We check the existing circuit before connecting any replacement heater.",
      },
    ],
  },
  "how-to-choose-an-electrician-kl": {
    title: "How to Choose a Good Electrician in KL: 8 Checks Before You Book",
    metaTitle: "How to Choose a Good Electrician in KL (2026)",
    metaDescription:
      "How to find the best electrician in KL for your job: visible prices, a fixed quote, proper testing, a written warranty and real reviews. 8 checks before you book.",
    tldr: "The best electrician for your job in KL is one who shows prices up front, gives a fixed quote before starting, tests with proper meters, offers a written workmanship warranty and has recent Google reviews from real customers. Be wary of very low phone quotes that grow on the day.",
    sections: [
      {
        heading: "What makes an electrician the best choice for your job?",
        body: [
          "There is no single best electrician in Kuala Lumpur for every job. For a tripping RCCB in a PJ terrace, you want someone who finds the fault quickly and explains it. For a full rewire, you want someone who itemises every point and finishes on schedule.",
          "The checks below work for both, and take five minutes on WhatsApp.",
        ],
      },
      {
        heading: "8 checks before you book",
        body: [
          "Run through these before you agree to a visit. A good electrician will be happy to answer all of them.",
        ],
        bullets: [
          "Prices you can see: a public price list or clear ranges on WhatsApp, not 'depends' for everything.",
          "A clear visit or inspection charge, stated before they come.",
          "A fixed quote on site before work starts, with anything extra agreed first.",
          "Proper testing with an insulation tester and multimeter, not trial and error.",
          "A written workmanship warranty, ideally 6 to 12 months.",
          "Recent Google reviews that mention specific jobs and areas.",
          "Quality parts: named brands for RCCBs, MCBs and cable, and the old parts shown to you.",
          "Clear communication: the fault explained in plain words and replies on WhatsApp.",
        ],
      },
      {
        heading: "Red flags to avoid",
        body: ["Walk away, or at least get a second opinion, if you see any of these."],
        bullets: [
          "A very low phone price that grows once the electrician arrives",
          "Bypassing or removing the RCCB so it 'stops tripping'",
          "No receipt, no warranty and no way to reach them afterwards",
          "Pressure to replace the whole DB box before any testing",
          "Sockets added to lighting circuits, or wiring left exposed",
        ],
      },
      {
        heading: "How much should a good electrician cost in KL?",
        body: [
          "Expect a visit or inspection charge of RM50 to RM150 in the Klang Valley, then a quote for the job. Upper-middle prices usually include proper testing, quality parts and a warranty. Ours start at RM80 per visit, and our full price list is public.",
        ],
        table: {
          head: ["Job", "Our price", "A fair quote should include"],
          rows: [
            ["Tripping repair", "RM150 – RM400", "Circuit testing, the fault fixed, a retest"],
            ["New 13A power point", "RM150 – RM450", "Cable, trunking or concealed wiring, the socket"],
            ["Water heater with new point", "RM350 – RM550", "Cable, 10mA RCCB, isolator switch"],
            ["DB box replacement (single-phase)", "RM1,000 – RM2,000", "Board, breakers, RCCB, labelling"],
          ],
        },
      },
      {
        heading: "Questions to ask on WhatsApp",
        body: [
          "Send a photo of the problem with these questions. The answers tell you a lot about how the job will go.",
        ],
        bullets: [
          "What is your visit or inspection charge?",
          "Will I get a fixed price before you start?",
          "What warranty do you give on the work?",
          "Which brand of breaker or cable will you use?",
          "When can you come, and how long will it take?",
        ],
      },
    ],
    faqs: [
      {
        q: "Who is the best electrician in KL?",
        a: "It depends on the job, but look for an electrician with public prices, a fixed quote before work, proper testing, a written warranty and recent Google reviews. We publish our prices, quote before we start and give a 12-month workmanship warranty.",
      },
      {
        q: "How do I find a reliable electrician near me?",
        a: "Search Google Maps for electricians in your area, read recent reviews that mention jobs like yours, and message two or three on WhatsApp with a photo. The one who asks good questions and gives a clear price range is usually the safer choice.",
      },
      {
        q: "Is it normal to pay for an electrician's visit in Malaysia?",
        a: "Yes. Most Klang Valley electricians charge a visit or inspection fee, typically RM50 to RM150, because travel and diagnosis take time. Ask what it is before they come.",
      },
      {
        q: "Should I choose the cheapest quote?",
        a: "Not automatically. Compare what is included: testing, cable size, breaker brand, hacking and warranty. A cheap quote that leaves these out often costs more later.",
      },
    ],
  },
  "ceiling-fan-installation-cost-malaysia": {
    title: "Ceiling Fan Installation Cost in Malaysia (2026 Prices)",
    metaTitle: "Ceiling Fan Installation Cost in Malaysia (2026)",
    metaDescription:
      "Ceiling fan installation in KL and Selangor costs RM200 per fan on an existing point and RM300 – RM400 with a new point. What's included, extra costs and how to save.",
    tldr: "Installing a ceiling fan in KL costs RM200 per fan at our rates when a fan point already exists, RM300 – RM400 if a new fan point is needed, and RM350 – RM600 on a high ceiling. Market prices start lower, but often leave out assembly, balancing and removing the old fan.",
    sections: [
      {
        heading: "How much does it cost to install a ceiling fan?",
        body: [
          "The price depends mostly on whether there is already a fan point and hook in the ceiling. The table compares typical Klang Valley quotes with our rates. Prices are labour only: you supply the fan, or we buy it at cost with the receipt shown.",
        ],
        table: {
          head: ["Job", "Market range", "My Power Care KL"],
          rows: [
            ["Ceiling fan installation (existing point)", "RM80 – RM150", "RM200 per fan"],
            ["Ceiling fan with new fan point", "RM150 – RM330", "RM300 – RM400"],
            ["Ceiling fan on a high or double-volume ceiling", "RM250 – RM600", "RM350 – RM600"],
            ["Fan regulator replacement", "RM50 – RM150", "RM80 – RM150"],
            ["Ceiling fan repair", "RM80 – RM350", "RM120 – RM250"],
            ["Wall fan installation", "RM60 – RM150", "RM100 – RM150"],
          ],
        },
      },
      {
        heading: "What should the price include?",
        body: [
          "Very cheap quotes often cover only hanging and connecting the fan. Ask whether these are included, so the price doesn't grow on the day:",
        ],
        bullets: [
          "Assembling the fan, blades and any light kit",
          "Checking the ceiling hook can carry the fan's weight and movement",
          "Wiring and earthing the fan, and fitting the regulator or remote receiver",
          "Balancing so the fan doesn't wobble at high speed",
          "Removing the old fan and clearing the packaging",
        ],
      },
      {
        heading: "What adds to the cost?",
        body: [
          "A new fan point, because cable has to be run from the nearest circuit or the DB box. A plaster ceiling without a proper hook. A double-volume ceiling that needs a scaffold. DC fans with remote and app control, which take longer to set up. Condo rules that limit working hours.",
          "Send us a photo of the ceiling point and the fan model on WhatsApp and we'll confirm the price before we come.",
        ],
      },
      {
        heading: "How to save on fan installation",
        body: ["A few simple steps keep the cost down."],
        bullets: [
          "Install several fans in one visit: the RM80 minimum visit charge applies once",
          "Send a photo of the ceiling point and the fan model before booking",
          "Choose a downrod length that suits your ceiling height when you buy the fan",
          "Fit fans during renovation, before the ceiling is painted",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to install a ceiling fan in KL?",
        a: "RM200 per fan on an existing point at our rates, including assembly, balancing and removing the old fan. With a new fan point it is RM300 – RM400, and on a high ceiling RM350 – RM600.",
      },
      {
        q: "How long does ceiling fan installation take?",
        a: "About 45 to 90 minutes per fan on an existing point. A new point, a light kit or a high ceiling takes longer.",
      },
      {
        q: "Why does my new ceiling fan wobble?",
        a: "Usually the blades aren't balanced, a blade screw is loose, or the hook or mounting bracket isn't secure. Balancing is part of our installation.",
      },
      {
        q: "Do you supply ceiling fans?",
        a: "Most customers buy their own. We can supply one at cost with the receipt shown.",
      },
    ],
  },
};
