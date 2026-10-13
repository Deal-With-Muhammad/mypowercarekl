import type { ServiceText } from "@/lib/types";

// English service copy. ms/ and zh/ mirror these keys exactly. Prices quoted in
// the copy must match the rate card in src/data/pricing.ts.

export const services: Record<string, ServiceText> = {
  "same-day-electrician": {
    name: "Same-Day Electrician",
    h1: "Same-Day Electrician in KL & Selangor",
    metaTitle: "Same-Day Electrician KL & Selangor from RM80",
    metaDescription:
      "Need an electrician today? Same-day visits across KL and Selangor, 8am to 10pm daily. RM80 inspection visit and a fixed quote before any work starts.",
    summary:
      "Book in the morning, fixed the same day where possible. Tripping, no power, sockets and more. Visit RM80.",
    intro:
      "Need an electrician today? We offer same-day visits across KL and Selangor, 8am to 10pm daily, for tripping, power loss, dead sockets, sparking and small installs. Every visit has a minimum charge of RM80. Book in the morning and we fix it the same day where possible, with a fixed quote first.",
    signs: [
      "The RCCB or main switch trips and will not stay up",
      "Part of the house has no power but the neighbours are fine",
      "A socket or switch has stopped working, cracked or feels warm",
      "A burning smell or brown marks around a socket or plug top",
      "Lights flicker or a ceiling fan has stopped turning",
      "The water heater or aircond point has stopped working",
      "A new fan, light or appliance needs fitting today",
    ],
    included: [
      "Send a photo on WhatsApp so we bring the right parts",
      "Arrival window confirmed when you book, 8am to 10pm daily",
      "Fault found with proper test equipment, not trial and error",
      "Fixed quote on site before any work starts",
      "Repair with common parts carried in the van, then a full retest",
      "12-month workmanship warranty on the work",
    ],
    sections: [
      {
        heading: "How does same-day booking work?",
        body: [
          "WhatsApp or call us with what is wrong, and a photo if you can. We confirm an arrival window, usually the same day across KL and Selangor, and in central KL and PJ often within 60–90 minutes. Bookings made in the morning have the best chance of being fixed the same day.",
          "The van carries common RCCBs, MCBs, sockets, switches and cable, so most faults are fixed on the first visit. If a part has to be ordered, we make the circuit safe and come back.",
        ],
      },
      {
        heading: "What should I do before the electrician arrives?",
        body: [
          "If a circuit keeps tripping or a socket smells of burning, switch off that MCB, or the main switch if the DB box is dry and safe to reach. Unplug appliances on the affected circuit. If the whole street is dark, it is a supply outage: call TNB Careline on 15454. If there is smoke or fire, leave the house and call 999.",
        ],
      },
      {
        heading: "What does a same-day visit cost?",
        body: [
          "Every visit has a minimum charge of RM80, which covers travel and inspection. Once we find the fault, you get a fixed price before any work starts. Typical same-day jobs: fault finding from RM150, tripping repairs RM150 to RM400, power loss RM150 to RM350 and socket replacement RM80 to RM120.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can an electrician come today?",
        a: "Usually, yes. We take same-day bookings across KL and Selangor from 8am to 10pm, seven days a week. Message us in the morning with the problem and a photo, and we confirm an arrival window straight away.",
      },
      {
        q: "How much is the visit charge?",
        a: "RM80 per visit. It is the minimum charge for every visit and covers travel and inspection. After checking the fault, we give you a fixed quote for the repair, and nothing is done until you agree.",
      },
      {
        q: "What are your working hours?",
        a: "We work 8am to 10pm, Monday to Sunday. If a fault happens outside those hours, switch off the affected circuit if it is safe to do so and message us. We will arrange the earliest slot the next morning.",
      },
      {
        q: "Can you fix it on the same visit?",
        a: "Most of the time. We carry common RCCBs, MCBs, sockets, switches and cable in the van, so tripping, power loss and socket faults are usually fixed on the first visit. If a part must be ordered, we make it safe first.",
      },
      {
        q: "Which areas do you cover for same-day visits?",
        a: "All of Kuala Lumpur and most of Selangor, including PJ, Subang Jaya, Shah Alam, Cheras, Kajang, Puchong and Klang. Central KL and PJ are usually quickest. Outer areas such as Rawang or Semenyih may get a later slot the same day.",
      },
    ],
    keywords: [
      "electrician near me",
      "same day electrician KL",
      "electrician today",
      "tukang elektrik hari ini",
      "tukang elektrik berdekatan",
      "electrician Kuala Lumpur",
      "electrician Selangor",
      "tukang elektrik KL",
      "repair elektrik rumah",
    ],
  },
  "power-tripping-repair": {
    name: "Power Tripping Repair",
    h1: "Power Tripping Repair in Kuala Lumpur",
    metaTitle: "Power Tripping Repair in KL from RM150",
    metaDescription:
      "RCCB, ELCB or main switch keeps tripping? We find the faulty circuit and fix it from RM150 in KL and Selangor. Same-day visits, fixed quote, 12-month warranty.",
    summary: "RCCB or main switch keeps tripping? We trace the faulty circuit or appliance and fix it, from RM150.",
    intro:
      "We find out why your RCCB, ELCB or main switch keeps tripping and fix the cause, not just reset it. Repairs typically cost RM150 to RM400, and you get a fixed quote before work starts. We offer same-day visits across KL and Selangor, 8am to 10pm daily.",
    signs: [
      "The RCCB trips every time it rains or during a heavy storm",
      "Power goes off when you switch on the water heater or kettle",
      "Tripping happens around the same time each night, often when the aircond starts",
      "The RCCB will not stay up even with every MCB switched off",
      "One MCB keeps dropping on the kitchen or bathroom circuit",
      "Tripping started after renovation work or a new appliance",
      "Your DB box still has an old ELCB or rewireable fuses",
    ],
    included: [
      "Check the DB box, breaker ratings and how circuits are split",
      "Insulation resistance test on each circuit to find the leaking one",
      "Isolate suspect appliances one by one (heater, fridge, outdoor lights)",
      "Fixed quote, then repair or replace the faulty part",
      "Retest the RCCB trip time with an RCD tester",
      "12-month workmanship warranty on the repair",
    ],
    sections: [
      {
        heading: "Why does my RCCB keep tripping?",
        body: [
          "An RCCB trips when current leaks to earth, usually 30mA or more on a home circuit. The leak is almost always one of four things: water in an outdoor light or socket, an appliance with a failing heating element, damaged cable insulation, or an RCCB worn out after 10–15 years.",
          "If an MCB trips instead, that one circuit is overloaded or shorted. A kettle, air fryer and microwave on the same kitchen circuit is the most common cause we see.",
        ],
      },
      {
        heading: "Why does it only trip when it rains?",
        body: [
          "Water gets into porch lights, garden lights, outdoor sockets and the taped cable joints behind them. It is our most common call between October and January, especially in older terraces with outdoor fittings that have no proper IP rating.",
          "The fix is usually an IP65 fitting, a sealed junction box and a separate breaker for the outdoor circuit. Then a wet garden light switches off the garden, not the fridge.",
        ],
      },
      {
        heading: "Can I just reset it and carry on?",
        body: [
          "Resetting once is fine. If it trips again within minutes or days, there is a leak somewhere. Never tape it up or bypass it, and do not swap a 30mA unit for a 100mA one to stop the nuisance. Malaysian rules require 30mA protection on socket circuits because it stops a shock from becoming fatal.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to fix power tripping in KL?",
        a: "Most tripping jobs cost RM150 to RM400, depending on how long the fault takes to find and what needs replacing. A new RCCB, unit included, is RM250 to RM450. You get a fixed quote before any repair starts.",
      },
      {
        q: "How do I find which appliance is causing the trip?",
        a: "Switch off every MCB, reset the RCCB, then switch the MCBs back on one at a time. When a circuit trips it, unplug everything on that circuit and try each item again. If nothing shows up, the wiring needs testing.",
      },
      {
        q: "Is it the RCCB that is faulty or the wiring?",
        a: "Usually the wiring or an appliance. A worn RCCB can trip without a real fault, but we confirm that with an RCD test first. Replacing a healthy RCCB will not stop a genuine leak, so testing first saves you money.",
      },
      {
        q: "Can you come today if the power keeps tripping?",
        a: "Usually, yes. We offer same-day visits across KL and Selangor from 8am to 10pm. If only one circuit is affected, switch that MCB off and keep the rest of the house running until we arrive.",
      },
      {
        q: "Will an old ELCB still protect my family?",
        a: "Not reliably. The voltage-operated ELCBs in many pre-1990s houses can fail to trip when they should. Replace it with a modern 30mA RCCB, which costs RM250 to RM450 fitted and takes under an hour.",
      },
    ],
    keywords: [
      "power tripping KL",
      "RCCB trip",
      "ELCB trip",
      "main switch keeps tripping",
      "elektrik trip bila hujan",
      "suis utama asyik trip",
      "tukang elektrik trip rumah",
      "power trip repair Selangor",
    ],
  },
  "short-circuit-sparking-repair": {
    name: "Short Circuit & Sparking Repair",
    h1: "Short Circuit and Sparking Repair in KL & Selangor",
    metaTitle: "Short Circuit & Sparking Repair KL from RM180",
    metaDescription:
      "Sparking socket, burnt plug or short circuit? We make it safe and repair it from RM180 in KL and Selangor. Same-day visits, fixed quote, 12-month warranty.",
    summary: "Burnt sockets, sparking switches and short circuits made safe and repaired properly, from RM180.",
    intro:
      "We repair sparking sockets, burnt switches, melted plug tops and short circuits in homes and shops across KL and Selangor. Repairs start from RM180 and most are finished in one visit. A sparking fault should not wait, so we offer same-day visits from 8am to 10pm daily.",
    signs: [
      "A spark or loud crack when you plug in or switch on",
      "Brown or black scorch marks around a socket or switch plate",
      "A plug top that is warm, discoloured or has a melted pin",
      "A buzzing or sizzling sound from inside the wall",
      "The same MCB trips with a bang the moment something is switched on",
      "Lights flicker whenever a heavy appliance runs",
      "A smell of hot plastic near the DB box",
    ],
    included: [
      "Isolate the circuit and make the area safe first",
      "Trace the burnt section back to sound cable",
      "Cut out heat-damaged cable and remake the connections properly",
      "Replace burnt sockets, switches or breakers with quality parts",
      "Insulation resistance test before the power goes back on",
      "Clean-up and a 12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "What causes a socket to spark or burn?",
        body: [
          "A small spark when you plug in a heavy appliance can be normal. A spark that leaves a mark is not. The usual cause is a loose terminal that heats up over months until the plastic around it melts.",
          "Other causes are cheap multi-plug adaptors running a heater and kettle together, worn sockets that no longer grip the plug, and rats chewing cable in older terraces with open roof spaces.",
        ],
      },
      {
        heading: "Is a burnt socket dangerous if it still works?",
        body: [
          "Yes. Scorching means a connection runs hot every time it is used, and the heat damage usually runs a few centimetres along the cable. Changing only the faceplate leaves that brittle cable in place, so we cut back to clean copper and remake the joint.",
          "We also check the other sockets on the same circuit. One burnt socket often means the circuit has been overloaded for a long time.",
        ],
      },
      {
        heading: "What should I do if a socket is sparking right now?",
        body: [
          "Switch off that socket's MCB, or the main switch if you are not sure which breaker it is. Do not pull the plug out while it is sparking or with wet hands. Once the power is off, unplug the appliance, take a photo and send it to us on WhatsApp. If there is smoke or fire, call 999.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to repair a burnt socket?",
        a: "A straight socket replacement is RM80 to RM120, including a standard 13A socket. If the cable behind it is heat-damaged or there is a short circuit in the wiring, the repair is RM180 to RM600. You get a fixed price first.",
      },
      {
        q: "Can a sparking socket cause a fire?",
        a: "Yes. Overheating connections are one of the main causes of house fires in Malaysia, and BOMBA attributes about 60% of house fires to electrical faults. Switch the circuit off and have it repaired the same day.",
      },
      {
        q: "Why does my light switch spark when I turn it on?",
        a: "A tiny flash inside an older switch can be normal. Visible sparks, a crackle or a warm plate mean worn contacts or a loose terminal. Replacing the switch costs RM80 to RM120, including a standard switch.",
      },
      {
        q: "Will you need to hack the wall to fix a short circuit?",
        a: "Usually not. Most repairs are done inside the existing socket, switch or junction box. If a cable inside the wall must be replaced, we run new cable in surface trunking, or quote separately for hacking and plastering.",
      },
    ],
    keywords: [
      "short circuit repair KL",
      "sparking socket",
      "burnt socket repair",
      "plug terbakar",
      "soket berasap",
      "litar pintas rumah",
      "suis berapi",
      "electrician sparking Selangor",
    ],
  },
  "power-failure-repair": {
    name: "Power Failure Repair",
    h1: "No Power or Partial Power Loss Repair in KL",
    metaTitle: "Power Failure Repair in KL from RM150",
    metaDescription:
      "No power or half the house dead? We trace the fault and restore supply from RM150 in KL and Selangor. Same-day visits and a fixed quote before work starts.",
    summary:
      "No power, or half the house dead while the neighbours are fine? We trace it and restore supply. From RM150.",
    intro:
      "We restore power when your whole house, one floor or a few rooms go dead while the neighbours still have electricity. Most faults cost RM150 to RM350 to fix, quoted as a fixed price before work starts. We offer same-day visits across KL and Selangor, 8am to 10pm daily.",
    signs: [
      "No power anywhere, but the street lights and neighbours are on",
      "Only the upstairs, or only the kitchen, has lost power",
      "Lights work but none of the sockets do",
      "The main switch is up but nothing in the house works",
      "Lights glow dim or flicker and appliances run weakly",
      "Power came back after a storm but some rooms stayed dead",
    ],
    included: [
      "Confirm whether the fault is inside your house or on the TNB side",
      "Check the main switch, RCCB, MCBs and incoming supply",
      "Test for a lost neutral, a failed breaker or a burnt connection",
      "Fixed quote, then repair with quality parts",
      "Restore and test every circuit before we leave",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Is it my wiring or a TNB problem?",
        body: [
          "Check the neighbours first. If their houses and the street lights are also off, it is a supply outage and only TNB can fix it. Call TNB Careline on 15454 or check the myTNB app. Private electricians are not allowed to work on TNB's meter or service cable.",
          "If the neighbours have power and your main switch and RCCB are up, the fault is in your own installation. The usual culprits are a burnt connection at the main switch, a failed MCB or a loose neutral at the DB box.",
        ],
      },
      {
        heading: "Why has only half my house lost power?",
        body: [
          "Usually one breaker or one cable has failed. In double-storey terraces, upstairs and downstairs often run on separate circuits, so one burnt MCB terminal can black out a floor. Houses on 3-phase supply can lose one phase, which kills about a third of the circuits.",
          "Dim lights and flickering point to a loose neutral. Treat it as urgent, because it can push the wrong voltage onto some circuits and damage TVs, routers and fridges. Switch off the main switch and book a same-day visit.",
        ],
      },
      {
        heading: "What should I check before calling an electrician?",
        body: [
          "Look at the DB box. If the main switch or RCCB is down, push it up once. If it stays up, look for an MCB in the down or middle position and reset it. If nothing has tripped and there is still no power, switch off the main switch and call us. Do not open the DB box cover or the meter panel.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to fix no power at home?",
        a: "Most no-power and partial-power faults cost RM150 to RM350 to repair. A failed MCB is RM80 to RM150 and an RCCB RM250 to RM450. Every visit has a RM80 minimum charge, and you get a fixed quote first.",
      },
      {
        q: "Who do I call when the power goes out, TNB or an electrician?",
        a: "Call TNB on 15454 if the neighbours are also out or your meter display is blank. Call an electrician if the neighbours have power and the problem is inside your house, such as a breaker that will not reset.",
      },
      {
        q: "My main switch is up but there is no power. What does that mean?",
        a: "Usually a burnt connection at the main switch, a failed main switch, or a supply problem before your DB box. Check the meter display. If the meter is on, the fault is most likely in your DB box and needs an electrician.",
      },
      {
        q: "Can a power cut damage my appliances?",
        a: "The cut itself rarely does. The surge when power returns, or a lost neutral causing high voltage, can damage TVs, routers and fridge controllers. Unplug sensitive electronics during an outage, and consider a surge protection device.",
      },
    ],
    keywords: [
      "no power at home KL",
      "half house no electricity",
      "power failure repair",
      "rumah tiada elektrik",
      "elektrik separuh rumah mati",
      "bekalan elektrik terputus",
      "electrician no power Selangor",
      "neutral putus",
    ],
  },
  "house-rewiring": {
    name: "House Rewiring",
    h1: "House Rewiring in KL & Selangor",
    metaTitle: "House Rewiring KL, Full & Partial, from RM1,000",
    metaDescription:
      "Full and partial house rewiring in KL and Selangor. One room from RM1,000, condos from RM6,000. Fixed written quote, full testing and a 12-month warranty.",
    summary: "Full or partial rewiring for condos, terraces and semi-Ds, fully tested. One room from RM1,000.",
    intro:
      "We rewire condos, terraces and semi-Ds across KL and Selangor, room by room or the whole house. Partial rewiring starts at RM1,000 per room and a full condo rewire at RM6,000. We survey within a day or two, give a fixed written quote and test every circuit when we finish.",
    signs: [
      "The house was built in the 1970s or 80s and has never been rewired",
      "The DB box still has rewireable fuses or no RCCB at all",
      "Cable insulation looks brittle, cracked or yellowed at the sockets",
      "Extension cords run permanently because there are too few sockets",
      "Some sockets have no earth connection",
      "Lights dim when the aircond or water heater switches on",
      "You are renovating and the ceilings and walls are already open",
    ],
    included: [
      "Site survey and a written, point-by-point quote",
      "New cable sized for each circuit, in conduit or trunking",
      "Separate circuits for aircond, water heater and kitchen loads",
      "Earthing check and RCCB protection on every circuit",
      "Full insulation, polarity and RCCB testing, with written results",
      "Daily clean-up and a 12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "How long does rewiring a terrace house take?",
        body: [
          "A condo takes 2–4 working days, a single-storey terrace 3–5 days, a double-storey 5–8 days and a semi-D 7–12 days. It depends on the number of points, whether walls need hacking, and whether you are living in the house.",
          "Most families stay in. We work circuit by circuit so the bedrooms have power every night. Condo work follows the management's renovation hours, so it can take a day or two longer.",
        ],
      },
      {
        heading: "Does my 1970s or 80s house need rewiring?",
        body: [
          "Many terraces in PJ, SS2, TTDI, Subang, Kepong and Cheras still run on their original PVC cable. After 40 years the insulation hardens and cracks, and the circuits were never sized for three aircons, an induction hob and a water heater in every bathroom.",
          "If yours has rewireable fuses, no RCCB, or extension cords everywhere, a planned rewire usually costs less than fixing faults one visit at a time. An inspection every 10–15 years is a sensible rule of thumb.",
        ],
      },
      {
        heading: "What does a rewiring quote include?",
        body: [
          "Our quote covers new cable, conduit or trunking, switches and sockets, the DB box work agreed on survey, and full testing with written results. Hacking, plastering, painting and light fittings are quoted separately.",
          "If you are renovating, we work with your contractor so the cable goes in before the walls are closed. That saves paying to open the same wall twice.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to rewire a house in Malaysia?",
        a: "In the Klang Valley, a full condo rewire costs RM6,000 to RM10,000, a single-storey terrace RM8,000 to RM13,000, a double-storey terrace RM13,000 to RM20,000 and a semi-D RM18,000 to RM30,000. One room costs RM1,000 to RM2,500.",
      },
      {
        q: "Can I stay in the house during rewiring?",
        a: "Yes, in most cases. We rewire one area at a time and restore power to the bedrooms each evening. Expect dust and noise during the day, and a day or two without the kitchen if it is being rewired.",
      },
      {
        q: "Do you replace the DB box during a rewire?",
        a: "Usually, yes. Most houses that need rewiring also have an old or full DB box. The board work agreed on survey is included in the rewiring quote, so there are no surprises later.",
      },
      {
        q: "Is partial rewiring worth it, or should I do the whole house?",
        a: "Partial rewiring makes sense when one area has a clear problem, such as a burnt kitchen circuit or a new extension. If the whole house still has its original 1980s cable, doing it in stages usually costs more overall.",
      },
    ],
    keywords: [
      "house rewiring KL",
      "rewiring cost Malaysia",
      "wiring rumah",
      "wiring semula rumah",
      "harga wiring rumah teres",
      "rewire condo KL",
      "partial rewiring",
      "tukang wiring rumah",
    ],
  },
  "new-wiring-power-points": {
    name: "New Wiring & Power Points",
    h1: "New Power Points and Wiring in Kuala Lumpur",
    metaTitle: "New Power Points & Wiring KL from RM100",
    metaDescription:
      "New power, light and fan points, dedicated circuits and renovation wiring in KL and Selangor. Light points from RM100, fixed quote and 12-month warranty.",
    summary: "Extra sockets, light and fan points, dedicated circuits and renovation wiring. Light points from RM100.",
    intro:
      "We add new 13A power points, light points, fan points and dedicated circuits, and wire renovations from bare walls. A new light point starts at RM100 and a surface-mounted power point at RM150. We offer same-day visits across KL and Selangor, or plan around your renovation contractor.",
    signs: [
      "Extension cords run across the floor because a room has one socket",
      "You are moving the TV, bed or study desk to a wall with no point",
      "The kitchen needs separate points for an oven, hob or dishwasher",
      "You want a fan or light where there is no ceiling point",
      "Renovation is starting and the walls are about to be opened",
      "Adaptors in the kitchen get warm when two appliances run together",
    ],
    included: [
      "Walk-through to mark every point on the wall before work starts",
      "Check the DB box has space and the circuit can take the load",
      "Cable sized to the load, in trunking, conduit or concealed",
      "Standard switch or socket included in every point price",
      "Insulation and polarity test on each new circuit",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Surface trunking or concealed wiring: which should I choose?",
        body: [
          "Surface trunking runs the cable in a white PVC channel along the wall. It costs RM150 to RM250 per power point, needs no hacking and is usually done in a few hours. It suits condos, rented homes and rooms you are not repainting.",
          "Concealed wiring buries the cable in the wall so nothing shows. It costs RM250 to RM450 per point, plus plastering and painting, quoted separately. Choose it during a renovation, when the walls are being redone anyway.",
        ],
      },
      {
        heading: "When do I need a dedicated circuit?",
        body: [
          "Any appliance drawing more than about 2kW for long periods should have its own circuit: built-in ovens, induction hobs, aircons, water heaters and large dryers. Sharing with ordinary sockets is what trips MCBs and browns plug tops.",
          "A dedicated circuit costs RM300 to RM500. A built-in oven typically needs a 20A circuit and a large induction hob a 32A circuit, with 4mm² or 6mm² cable sized to the load.",
        ],
      },
      {
        heading: "How many sockets does each room need?",
        body: [
          "We suggest at least two twin sockets per bedroom, three or four around the TV and study desk, and a twin socket for every metre or so of kitchen counter. Give the fridge, microwave and washer their own points.",
          "Adding points in one visit is cheaper than one at a time. Send us a list of where you need them and we quote the whole set as one job.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to add a power point in KL?",
        a: "A new 13A power point costs RM150 to RM250 with surface trunking and RM250 to RM450 concealed in the wall. A new light point is RM100 to RM150. Hacking, plastering and painting are quoted separately.",
      },
      {
        q: "Can you add a socket in a condo?",
        a: "Yes. Surface trunking is the usual choice because it needs no hacking. We follow your management office's renovation permit and working hours, and can give you the contractor details they ask for.",
      },
      {
        q: "Will adding sockets overload my DB box?",
        a: "Not if it is planned properly. We check the incoming supply, the RCCB rating and the spare ways in your DB box first. If the board is full or the supply too small, we tell you when quoting.",
      },
      {
        q: "Do you do the wiring for full renovations?",
        a: "Yes. We work from your floor plan or with your ID or contractor, run the cable before ceilings and walls are closed, and come back to fit switches and sockets after painting. Every circuit is tested before handover.",
      },
    ],
    keywords: [
      "add power point KL",
      "new socket installation",
      "tambah soket elektrik",
      "tambah point lampu",
      "renovation wiring KL",
      "dedicated circuit oven",
      "harga point elektrik",
      "pasang plug baru",
    ],
  },
  "socket-switch-installation": {
    name: "Socket & Switch Installation",
    h1: "Socket and Switch Installation in Kuala Lumpur",
    metaTitle: "Socket & Switch Installation KL from RM80",
    metaDescription:
      "Replace or add 13A sockets, switches and USB sockets in KL and Selangor. From RM80 with a standard socket included. Same-day visits, 12-month warranty.",
    summary: "Loose, cracked or dead sockets and switches replaced, plus new 13A and USB sockets. From RM80.",
    intro:
      "We replace worn 13A sockets and switches, fit USB charging sockets and add new power points in homes and offices across KL and Selangor. A replacement costs RM80 to RM120 with a standard socket or switch included. Same-day visits are common, and we can change every socket in one trip.",
    signs: [
      "Plugs feel loose or fall out of the socket",
      "A cracked or yellowed faceplate",
      "One socket has stopped working while others on the same wall are fine",
      "A switch feels soft, sticks or needs pressing twice",
      "Scorch marks or a warm plate around a socket",
      "You want USB-C charging beside the bed or desk",
      "Old round-pin 15A sockets that modern plugs do not fit",
    ],
    included: [
      "Isolate the circuit at the DB box before opening anything",
      "Check the back box and cable ends for heat damage",
      "Fit the new socket or switch with terminals properly tightened",
      "Polarity and earth check with a socket tester",
      "Faceplates fixed level, old parts taken away",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Why do sockets wear out?",
        body: [
          "The spring contacts inside a 13A socket lose their grip after years of use. A loose plug arcs slightly each time it moves, which heats the contact and browns the faceplate. Sockets behind beds and in kitchens wear fastest, and cheap unbranded ones can fail within two or three years.",
          "We fit branded sockets that meet MS 589, the Malaysian standard for 13A sockets. We can match your existing brand and colour, or fit a designer range you bought at the labour rate.",
        ],
      },
      {
        heading: "Are USB sockets worth it?",
        body: [
          "A good one is safe and frees up plugs. Pick one with a SIRIM mark and at least 3A total output, or a USB-C PD port of 20W or more for fast charging. Cheap USB sockets run warm and can buzz.",
          "USB sockets are deeper than standard ones, so older shallow back boxes sometimes need a deeper box first. That is included in our quote.",
        ],
      },
      {
        heading: "Should I change a socket myself?",
        body: [
          "It looks simple, but we regularly find DIY sockets with live and neutral swapped, the earth left unconnected or a terminal left loose. Any of these can cause a shock or a fire. At RM80 to RM120 per socket including the part, it is not worth the risk.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to replace a socket in KL?",
        a: "RM80 to RM120 per socket, including a standard 13A socket. Switch replacement costs the same. If several sockets are worn, changing them in one visit saves time and keeps the overall cost down.",
      },
      {
        q: "Can you fit sockets in a different brand or colour?",
        a: "Yes. Tell us the brand and range, or buy them yourself and we install them at the labour rate. Standard white sockets are included in our price, and designer ranges can be supplied at cost with the receipt.",
      },
      {
        q: "Why does one socket not work when the others do?",
        a: "Usually a loose or burnt connection at that socket or the one before it on the same circuit. Less often, a damaged cable inside the wall. We test it, find the break and repair it, rarely with any hacking.",
      },
      {
        q: "Can you add a socket next to an existing one?",
        a: "Yes. We can change a single socket to a twin, or add a new point beside it. A new point with surface trunking costs RM150 to RM250. We check first that the circuit is not already overloaded.",
      },
    ],
    keywords: [
      "socket replacement KL",
      "tukar soket",
      "tukar suis lampu",
      "pasang soket USB",
      "13A socket installation",
      "plug longgar",
      "switch replacement Kuala Lumpur",
      "harga tukar soket",
    ],
  },
  "db-box-replacement": {
    name: "DB Box Replacement",
    h1: "DB Box Replacement in KL & Selangor",
    metaTitle: "DB Box Replacement KL from RM1,000",
    metaDescription:
      "Old fuse box or full DB? We replace distribution boards with new MCBs and RCCBs in KL and Selangor from RM1,000. Fixed quote, fully tested, 12-month warranty.",
    summary: "Old fuse boards and overloaded DB boxes replaced with new MCBs, RCCBs and clear labels. From RM1,000.",
    intro:
      "We replace old and overloaded distribution boards (DB boxes) with a new board, MCBs and RCCBs, wired and labelled properly. Single-phase replacement costs RM1,000 to RM2,000 and 3-phase RM1,800 to RM3,500. Most jobs take half a day, and we can usually inspect and quote the same day across KL and Selangor.",
    signs: [
      "Rewireable ceramic fuses instead of MCB switches",
      "No RCCB, or an old ELCB from the 1980s",
      "No spare ways left for a new aircond or water heater circuit",
      "Brown marks, melted plastic or a hot smell around the board",
      "Breakers with no labels, so nobody knows which switch does what",
      "A cracked cover, or a board mounted in a damp spot",
    ],
    included: [
      "Survey of the existing board, circuits and supply rating",
      "New enclosure with MCBs sized to each circuit and a 30mA RCCB",
      "Separate 10mA RCCB for the water heater where needed",
      "Every circuit tested and clearly labelled",
      "Power off for about 3–5 hours on the day",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "When should a DB box be replaced?",
        body: [
          "Replace it if it still has rewireable fuses, has no RCCB, shows heat damage or has no space for new circuits. Many 1970s and 80s terraces have boards sized for a handful of circuits, and doubling two cables under one terminal to add an aircond is a shortcut we often undo.",
          "A board is also due when testing shows it, not the wiring, causes random tripping. Corroded busbars and loose terminals cause faults that are hard to trace and tend to get worse.",
        ],
      },
      {
        heading: "What goes inside a modern DB box?",
        body: [
          "A main switch, a 30mA RCCB for socket circuits, a 10mA RCCB for the water heater, and an MCB for each circuit: typically 6A or 10A for lights, 20A for sockets, and 20A or 32A for aircond and kitchen loads. We leave spare ways and label every breaker in plain words.",
          "Condo boards are usually flush-mounted near the front door or kitchen. We choose an enclosure that fits the existing recess, avoiding plaster repairs, and work within the management's hours.",
        ],
      },
      {
        heading: "How long will the power be off?",
        body: [
          "For a typical single-phase board, about 3–5 hours. We prepare the new board first, move the circuits across in one go and test each before switching back on. 3-phase boards or extra circuits can take most of the day, and we tell you in advance.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a DB box replacement cost in Malaysia?",
        a: "In KL and Selangor, a single-phase DB box replacement costs RM1,000 to RM2,000 and a 3-phase board RM1,800 to RM3,500. The price depends on the number of circuits, how many RCCBs are needed and any wiring repairs at the board.",
      },
      {
        q: "Can I replace just the RCCB instead of the whole board?",
        a: "Often, yes. If the board is in good condition and has space, replacing the RCCB alone costs RM250 to RM450. We only recommend a new board when the old one has fuses, heat damage, corrosion or no spare ways.",
      },
      {
        q: "Which breakers do you use?",
        a: "Branded, SIRIM-approved MCBs and RCCBs from established manufacturers. We avoid unbranded breakers because their trip ratings are unreliable. The brand and model of every breaker is written in your quote.",
      },
      {
        q: "Does a new DB box need TNB approval?",
        a: "Not if it stays on the same supply. Increasing the supply, such as moving from single-phase to 3-phase, needs a TNB application with test certificates, and TNB usually takes 2–6 weeks to process it.",
      },
    ],
    keywords: [
      "DB box replacement KL",
      "harga DB box",
      "tukar DB box",
      "fuse box replacement Malaysia",
      "kotak fius rumah",
      "distribution board upgrade",
      "DB box 3 phase",
      "tukar MCB",
    ],
  },
  "rccb-elcb-replacement": {
    name: "RCCB & ELCB Replacement",
    h1: "RCCB and ELCB Replacement in Kuala Lumpur",
    metaTitle: "RCCB & ELCB Replacement KL from RM250",
    metaDescription:
      "Faulty or old RCCB or ELCB? We test it and fit a new 30mA or 10mA unit from RM250 in KL and Selangor, unit included. Same-day visits, 12-month warranty.",
    summary: "Worn or faulty RCCBs and ELCBs tested and replaced with the right 10mA, 30mA or 100mA unit. From RM250.",
    intro:
      "We test and replace faulty or outdated RCCBs and ELCBs, the safety switches in your DB box that cut the power when current leaks to earth. Replacement costs RM250 to RM450 with the unit included and takes under an hour. We offer same-day visits across KL and Selangor.",
    signs: [
      "Nothing happens when you press the test button",
      "The RCCB trips at random even with every circuit switched off",
      "It will not reset, or feels loose when you push it up",
      "Your board has an old ELCB with a separate earth wire terminal",
      "The unit is 10–15 years old and has never been tested",
      "There is no 10mA RCCB protecting the water heater",
    ],
    included: [
      "RCD test of the existing unit (trip current and trip time)",
      "Insulation test to rule out a wiring fault first",
      "New RCCB of the right sensitivity and rating",
      "Retest to confirm it trips within the required time",
      "A quick lesson on using the monthly test button",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "What is the difference between an RCCB and an ELCB?",
        body: [
          "In Malaysia people use both names for the switch with a 'T' test button. Strictly, an ELCB is the older voltage-operated type found in many pre-1990s houses. It relies on a good earth and can fail to trip. An RCCB measures leakage current directly and is far more reliable.",
          "If your board still has a true ELCB, replace it with an RCCB. It costs RM250 to RM450 fitted and is one of the cheapest safety upgrades for an older house.",
        ],
      },
      {
        heading: "Should I use a 10mA, 30mA or 100mA RCCB?",
        body: [
          "It depends on the circuit. Malaysian wiring rules require 10mA or less for water heaters and wet areas, and 30mA or less for socket circuits and anything handheld. 100mA is used for general protection of the whole installation.",
          "Never replace a tripping 30mA RCCB with a 100mA one to stop the nuisance. It stops the tripping but removes the shock protection on your sockets. We will not do it, and you should not let anyone else.",
        ],
      },
      {
        heading: "How often should an RCCB be tested?",
        body: [
          "Press the test button once a month. It should trip instantly. If it does not, replace it straight away. A full test with an RCD meter, which measures trip time and current, is worth doing every few years and is part of our electrical safety inspection.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to replace an RCCB in KL?",
        a: "RM250 to RM450 including the unit, depending on the rating, number of poles and brand. A standard 2-pole 30mA RCCB for a single-phase house sits at the lower end. 4-pole units for 3-phase houses cost more.",
      },
      {
        q: "How long does an RCCB last?",
        a: "Typically 10–15 years, but heat, humidity and frequent tripping shorten that. Press the test button monthly. If it does not trip, or only trips on the second or third press, the unit should be replaced.",
      },
      {
        q: "My RCCB is new but still trips. Why?",
        a: "A new RCCB that trips is usually doing its job. The leak is in the wiring or an appliance, often the water heater, an outdoor light or the washing machine. We find it with an insulation tester.",
      },
      {
        q: "Is it legal to remove the RCCB if it keeps tripping?",
        a: "No. RCD protection is required under the Electricity Regulations 1994, and removing or bypassing it leaves you with no protection against a fatal shock. Find the fault instead. We can usually locate it within one or two hours.",
      },
    ],
    keywords: [
      "RCCB replacement KL",
      "ELCB replacement",
      "tukar ELCB",
      "harga RCCB",
      "RCCB 10mA water heater",
      "RCCB 30mA",
      "ELCB rosak",
      "suis keselamatan elektrik",
    ],
    priceNotes: {
      "db-single": "If the board is worn out",
    },
  },
  "three-phase-upgrade": {
    name: "Single to 3-Phase Upgrade",
    h1: "Single-Phase to 3-Phase Upgrade in KL & Selangor",
    metaTitle: "Single to 3-Phase Upgrade KL from RM5,000",
    metaDescription:
      "Upgrade from single-phase to 3-phase in KL and Selangor from RM5,000, including a new 3-phase DB box and help with the TNB application. Fixed quote first.",
    summary: "More aircons or an EV charger? We upgrade your board to 3-phase and coordinate with TNB. From RM5,000.",
    intro:
      "We upgrade homes from single-phase to 3-phase supply, including the new DB box, wiring changes at the board and coordination with TNB. Our work costs RM5,000 to RM8,000, with TNB's connection fee and deposit paid separately. TNB approval typically takes 2–6 weeks across KL and Selangor.",
    signs: [
      "Lights dim when two or three aircons start together",
      "The main switch trips on hot evenings with everything running",
      "You are adding an EV charger on top of several aircons",
      "Renovation plans include an induction hob, an oven and more water heaters",
      "You are installing a home lift, pool pump or 22kW charger",
      "Your contractor says the existing supply cannot take the new load",
    ],
    included: [
      "Load assessment of your current and planned appliances",
      "TNB application coordinated and followed up for you",
      "New 3-phase DB box with RCCBs and MCBs",
      "Circuits balanced across the three phases",
      "Testing and switch-over on the day TNB connects",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Do I need 3-phase power at home?",
        body: [
          "Single-phase is plenty for a normal terrace, but it runs out with four or five aircons, two water heaters, an induction hob and a 7kW EV charger running in the evening. If the main switch trips on hot nights or lights dim when a compressor starts, you are close to the limit.",
          "3-phase gives roughly three times the capacity and lets you run a 22kW EV charger, a home lift or 3-phase aircond units. Your existing appliances keep working; we spread them across the three phases.",
        ],
      },
      {
        heading: "How long does a 3-phase upgrade take with TNB?",
        body: [
          "Our part, the DB box and wiring changes, takes one to two days. The wait is TNB. Before connecting a 3-phase supply, TNB requires the installation to be tested and the test certificates submitted. Processing usually takes 2–6 weeks, then TNB sets a date to fit the new meter and we switch the circuits over the same day.",
          "TNB charges its own connection fee and security deposit, paid directly to TNB and not part of our price. The amount depends on your property and the load you apply for, and we tell you what to expect before applying.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to upgrade to 3-phase in Malaysia?",
        a: "Our work costs RM5,000 to RM8,000 for a typical house, covering the new 3-phase DB box, wiring changes at the board and TNB coordination. TNB's connection fee and security deposit are paid separately, directly to TNB.",
      },
      {
        q: "How long does TNB take to approve 3-phase?",
        a: "Usually 2–6 weeks from submission. Areas where TNB needs to upgrade the street cable or transformer can take longer. We follow up with TNB and confirm the meter installation date with you, so you only need to be home on the day.",
      },
      {
        q: "Will 3-phase increase my electricity bill?",
        a: "No. TNB bills you for the energy you use in kWh, not for the number of phases. 3-phase simply lets you run more appliances at the same time without the main switch tripping.",
      },
      {
        q: "Do I need 3-phase for an EV charger?",
        a: "Not always. A 7kW single-phase charger suits most homes if the supply has spare capacity. If you already run several aircons and a water heater in the evening, or want a 22kW charger, 3-phase is the safer choice.",
      },
    ],
    keywords: [
      "3 phase upgrade KL",
      "tukar 3 fasa",
      "single phase to three phase Malaysia",
      "permohonan TNB 3 fasa",
      "3 phase house wiring",
      "harga upgrade 3 phase",
      "TNB 3 phase application",
      "elektrik 3 fasa rumah",
    ],
    priceNotes: {
      "db-three": "Board only",
    },
  },
  "surge-protection": {
    name: "Surge Protection (SPD)",
    h1: "Surge Protection Device Installation in KL",
    metaTitle: "Surge Protector Installation KL from RM400",
    metaDescription:
      "Protect TVs, aircons and routers from lightning surges. SPD fitted in your DB box from RM400 in KL and Selangor. Earthing checked, 12-month warranty.",
    summary: "An SPD in your DB box helps shield TVs, aircons and routers from lightning surges. From RM400.",
    intro:
      "We install surge protection devices (SPDs) in your DB box to limit voltage spikes from lightning and grid switching. An SPD costs RM400 to RM700 fitted and takes about two hours, and we check your earthing at the same time. We offer same-day visits across KL and Selangor.",
    signs: [
      "A router, TV box or aircond PCB died after a thunderstorm",
      "The house is on a hill, in an open area or near tall trees",
      "You have expensive electronics, a home office or a solar system",
      "Lights flicker and appliances reset during storms",
      "Your DB box has no SPD module",
      "Neighbours lost appliances in the same storm",
    ],
    included: [
      "Check the DB box for space and a suitable connection point",
      "Earth check, because an SPD is only as good as its earth",
      "Type 2 SPD sized for your supply, with backup protection",
      "Neat installation and labelling inside the DB box",
      "Show you the status window, so you know when it needs replacing",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Does Malaysia really need surge protection?",
        body: [
          "Malaysia has one of the highest lightning rates in the world, and the Klang Valley gets afternoon storms on many days, especially in April to May and October to November. Lightning does not need to hit your house. A strike on a nearby line or tree can send a surge into every socket.",
          "Inverter aircond PCBs, TVs, routers, autogate controllers and fridge boards suffer most. Replacing one inverter aircond board can cost more than the SPD that would have protected it.",
        ],
      },
      {
        heading: "What does an SPD protect against, and what not?",
        body: [
          "A Type 2 SPD diverts surges coming in through the power supply to earth before they reach your sockets. It handles indirect lightning and grid switching surges. It will not stop a direct strike on your roof, and it cannot work if your earthing is poor.",
          "For sensitive equipment, add a plug-in surge protector at the socket as a second layer. Unplugging the TV and router during a heavy storm is still the cheapest protection.",
        ],
      },
      {
        heading: "How long does an SPD last?",
        body: [
          "Every surge wears it a little. Most units have a window that shows green when healthy and red when the module needs replacing, so check it after each storm season. On most models the new module plugs into the same base, which costs less than the first installation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does surge protection cost for a house in KL?",
        a: "An SPD fitted in your DB box costs RM400 to RM700, depending on single or 3-phase supply and the SPD rating. An earthing resistance test, if needed, is RM200 to RM300. Most installations take about two hours.",
      },
      {
        q: "Will an SPD stop lightning damaging my appliances?",
        a: "It greatly reduces the risk from surges through the power supply, which is how most lightning damage happens. It cannot stop a direct strike, and it does not cover phone, fibre or satellite cables, which carry surges separately.",
      },
      {
        q: "Can you install an SPD in my existing DB box?",
        a: "Usually, yes, if there is space for a two to four-way module. Older boards with no spare space need a small add-on enclosure or a new DB box. We check before quoting, so you know the full cost up front.",
      },
      {
        q: "Does an SPD need good earthing?",
        a: "Yes. An SPD sends the surge to earth, and with a poor earth it has nowhere to send it. We check the earth before fitting and tell you if the earth electrode needs improving, which is common in older landed houses.",
      },
    ],
    keywords: [
      "surge protection KL",
      "SPD installation Malaysia",
      "surge arrester DB box",
      "pelindung kilat rumah",
      "lightning surge protection house",
      "alat pelindung lonjakan",
      "TV rosak kena petir",
      "pasang SPD",
    ],
    priceNotes: {
      "db-single": "If no space for the SPD",
    },
  },
  "ceiling-fan-installation": {
    name: "Ceiling Fan Installation",
    h1: "Ceiling Fan Installation in Kuala Lumpur",
    metaTitle: "Ceiling Fan Installation KL from RM200",
    metaDescription:
      "Ceiling fan installation in KL and Selangor from RM200 per fan, including assembly, balancing and removing the old fan. Same-day visits, 12-month warranty.",
    summary: "Ceiling, DC and wall fans installed securely and balanced. From RM200 per fan, old fan removed.",
    intro:
      "We install ceiling fans, DC fans with remotes, fans with light kits and wall fans across KL and Selangor. Installation on an existing fan point starts from RM200 per fan, including assembly, balancing and removing the old fan. A fan with a new point is RM300 to RM400. Same-day visits are common.",
    signs: [
      "A new fan is still sitting in its box",
      "You are replacing an old AC fan with a quieter DC fan",
      "A room has a light point but no fan point",
      "The old fan hook looks rusty or moves when you pull it",
      "You want a fan with a light kit in a room with one ceiling point",
      "A high or sloped ceiling needs a fan on an extension rod",
    ],
    included: [
      "Check the hook or bracket can carry the fan's weight",
      "Remove the old fan, then assemble the new fan, blades and any light kit",
      "Wire the fan, regulator or remote receiver correctly",
      "Balance the blades so the fan runs without wobbling",
      "Test every speed, the light and the remote",
      "Packaging cleared and a 12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Can a ceiling fan be installed on a plaster ceiling?",
        body: [
          "Yes, but never hung from the plaster alone. We fix the bracket to the concrete slab or a structural member above, using a downrod where needed. In older terraces the original hook is often still in the slab and only needs checking for rust and movement.",
          "In condos with a false ceiling, we cut a small opening, fix to the slab and bring the downrod through. The canopy covers the opening, so most installs need no ceiling repair.",
        ],
      },
      {
        heading: "Should I choose a DC or AC ceiling fan?",
        body: [
          "DC fans use around 30–35W at full speed against 70–80W for an AC fan. They are quieter, usually come with a remote and cost more to buy. Most people choose DC for the silent motor rather than the electricity saving.",
          "AC fans are simpler, cheaper to repair and work with a wall regulator. Both install the same way at the same price. When replacing an AC fan with a DC one, we bypass or swap the old regulator as part of the job.",
        ],
      },
      {
        heading: "How high should a ceiling fan be?",
        body: [
          "Blades should be at least 2.3 metres above the floor, and ideally 25–30cm below the ceiling for good airflow. Ceilings above 3.5 metres need an extension rod. For blade size, 42 to 48 inches suits most bedrooms and 52 to 56 inches a living room.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does ceiling fan installation cost in KL?",
        a: "From RM200 per fan on an existing fan point, including assembly, balancing and removing the old fan. With a new fan point, it is RM300 to RM400. Wall fans cost RM100 to RM150 each.",
      },
      {
        q: "Can you supply the fan?",
        a: "Yes. You can buy your own fan, or we supply one at cost with the shop receipt shown. KDK, Panasonic, Deka and Fanco are popular in Malaysia. Tell us the room size and we suggest a blade size.",
      },
      {
        q: "Can a fan go where there is only a light point?",
        a: "Often, yes. We check whether the existing cable and the ceiling structure can carry a fan. If not, we run a new fan point with its own regulator or remote, priced at RM300 to RM400 including installation.",
      },
      {
        q: "How long does it take to install a ceiling fan?",
        a: "About 45 minutes to an hour per fan on an existing point, including assembly and balancing. A fan with a new point takes 1.5 to 2.5 hours. Two or three fans usually fit into one morning.",
      },
      {
        q: "Will you take down my old fan?",
        a: "Yes. Removing the old fan is included, and we can leave it with you or take it away. If the old hook is rusty or loose, we replace the bracket before hanging the new fan and tell you the cost first.",
      },
    ],
    keywords: [
      "ceiling fan installation KL",
      "pasang kipas siling",
      "upah pasang kipas",
      "harga pasang kipas siling",
      "DC fan installation",
      "pasang kipas KDK",
      "pasang kipas dinding",
      "fan installation Selangor",
    ],
  },
  "ceiling-fan-repair": {
    name: "Ceiling Fan Repair",
    h1: "Ceiling Fan Repair in KL & Selangor",
    metaTitle: "Ceiling Fan Repair KL from RM120",
    metaDescription:
      "Ceiling fan wobbling, humming, slow or dead? We fix capacitors, regulators, remotes and wiring from RM120 in KL and Selangor. Same-day, 12-month warranty.",
    summary: "Wobbling, humming, slow or dead fans fixed: capacitors, regulators, remotes and wiring. From RM120.",
    intro:
      "We repair ceiling fans that wobble, hum, run slow or will not start, including capacitor, regulator, remote receiver and wiring faults. Repairs cost RM120 to RM250 per fan and most are fixed on the first visit. We cover KL and Selangor, often on the same day you message.",
    signs: [
      "The fan wobbles or the canopy clicks as it turns",
      "It runs slowly even on the highest speed",
      "A hum or buzz from the motor or the wall regulator",
      "The fan needs a push before it starts spinning",
      "The remote stopped working after a power trip",
      "A grinding or squeaking noise that gets worse each week",
      "The regulator knob is warm or turns without changing the speed",
    ],
    included: [
      "Check the fan, regulator and supply separately",
      "Test the capacitor and replace it if it has lost value",
      "Tighten and balance the blades, bracket and canopy",
      "Replace regulators, remote receivers or worn wiring",
      "Run every speed for several minutes to confirm the fix",
      "12-month workmanship warranty on the repair",
    ],
    sections: [
      {
        heading: "Why is my ceiling fan running slow?",
        body: [
          "On an AC fan, the usual cause is a weak capacitor. Capacitors lose value with heat and age, so the fan runs slowly on every setting and sometimes needs a push to start. A new capacitor takes about 30 minutes to fit, making it one of the cheapest fan repairs.",
          "If the fan is slow on only some speeds, the wall regulator is the likely fault. On DC fans, slow running usually points to the control board or remote receiver.",
        ],
      },
      {
        heading: "How do I stop a ceiling fan wobbling?",
        body: [
          "A slight wobble is normal. A fan that shakes the canopy is not. Most wobbling comes from loose blade screws, a bent blade arm or uneven blades. We tighten everything, check each blade's angle and balance the set with clip-on weights if needed.",
          "If the wobble comes from the mounting, the hook or bracket has worn. Stop using the fan until it is fixed, because a loose bracket is how ceiling fans fall.",
        ],
      },
      {
        heading: "Should I repair an old fan or replace it?",
        body: [
          "Repair is worth it for capacitor, regulator, remote and wiring faults, which cost RM120 to RM250. If the bearings are noisy on a fan over ten years old, or the motor winding has burnt out, a new fan is usually better value. We tell you on the spot.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does ceiling fan repair cost in KL?",
        a: "Most repairs cost RM120 to RM250 per fan, including common parts such as a capacitor. A new wall regulator is RM80 to RM150 fitted. If the motor has failed, we tell you first whether a new fan makes more sense.",
      },
      {
        q: "Why does my ceiling fan hum?",
        a: "Usually an electronic regulator that does not suit the motor, a failing capacitor, or something loose inside the canopy. A matching step regulator or a new capacitor fixes most cases on the first visit.",
      },
      {
        q: "Can you repair DC fans with a remote?",
        a: "Yes. We repair remote receivers, pair new remotes and replace DC control boards where parts are available. Some brands only sell boards through their own service centre, and then we can quote a replacement fan instead.",
      },
      {
        q: "Is a wobbling ceiling fan dangerous?",
        a: "A light wobble is not, but heavy shaking or a clicking canopy means something is loose. Stop using the fan until it is checked. A bracket, hook or downrod pin that works loose is what allows a fan to fall.",
      },
    ],
    keywords: [
      "ceiling fan repair KL",
      "baiki kipas siling",
      "kipas siling bergoyang",
      "kipas siling perlahan",
      "tukar kapasitor kipas",
      "fan regulator replacement",
      "kipas berbunyi",
      "fan repair Selangor",
    ],
  },
  "lighting-installation": {
    name: "Lighting Installation",
    h1: "Light and Downlight Installation in Kuala Lumpur",
    metaTitle: "Light & Downlight Installation KL from RM40",
    metaDescription:
      "LED downlights, ceiling lights, pendants, chandeliers and cove lighting installed in KL and Selangor. Light swaps from RM40. Same-day, 12-month warranty.",
    summary: "LED downlights, ceiling lights, pendants, chandeliers and cove strips installed. Light swaps from RM40.",
    intro:
      "We install and replace LED downlights, ceiling lights, pendants, chandeliers and cove LED strips across KL and Selangor. Swapping a fitting on an existing point costs RM40 to RM80, and a new cut-in downlight RM100 to RM150. We offer same-day visits and can do a whole house of lights in one trip.",
    signs: [
      "Old fluorescent tubes or bulky ceiling lights you want replaced",
      "Downlights that flicker, buzz or have turned yellow",
      "A room feels dim even with every light on",
      "A pendant or chandelier you have bought and need hung",
      "You want cove lighting or LED strips in a plaster ceiling",
      "Bulbs at one point blow every few weeks",
    ],
    included: [
      "Plan positions and spacing before any holes are cut",
      "Isolate the lighting circuit and check the existing wiring",
      "Cut neat holes sized exactly to the downlight",
      "Fix heavy fittings to the slab, not the plaster",
      "Test switching and dimming, then clean up the dust",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "How many downlights does a room need?",
        body: [
          "Space downlights about 1 to 1.5 metres apart and 50–60cm from the walls. A 3 by 3 metre bedroom works well with 4 to 6 downlights of 9–12W. Living rooms need more, plus a separate switch for feature lights.",
          "Choose 3000K warm white for bedrooms and living areas, and 4000K cool white for kitchens and study corners. Avoid 6500K daylight in living spaces, as it looks harsh at night. Buy each room's downlights in one batch so the colour matches.",
        ],
      },
      {
        heading: "Can my ceiling hold a chandelier?",
        body: [
          "Not from the plaster alone. Chandeliers and pendants over about 5kg must be fixed to the concrete slab or a structural member above the false ceiling. For tall double-volume ceilings, we arrange access equipment and quote by height and weight.",
          "Send us the weight, drop length, ceiling height and a photo. That usually lets us quote without a separate site visit.",
        ],
      },
      {
        heading: "Why do my LED downlights flicker?",
        body: [
          "Usually a failing driver, a dimmer that does not suit LEDs, or different brands mixed on one circuit. Cheap drivers in a hot ceiling space fail first. We replace the driver or downlight and, if you have a dimmer, fit an LED-compatible one.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to install downlights in KL?",
        a: "Replacing a fitting on an existing point is RM40 to RM80. A new cut-in LED downlight in a plaster ceiling is RM100 to RM150 each, including the cut-out and wiring. The downlights are supplied by you or by us at cost.",
      },
      {
        q: "Can you install lights I bought online?",
        a: "Yes. Many customers buy fittings from Shopee, Lazada or IKEA. Check they carry a SIRIM or ST approval mark and are rated for 230V. If a fitting looks unsafe, we tell you before installing it, not after.",
      },
      {
        q: "Can you add downlights to a ceiling that has none?",
        a: "Yes, if the ceiling is plaster or gypsum board with space above. We cut the holes, run cable from the nearest light point and add a switch if needed. Bare concrete ceilings need surface-mounted lights or a new false ceiling.",
      },
      {
        q: "Do you install LED strips and cove lighting?",
        a: "Yes. We install the LED strip, driver and switching in cove ceilings, cabinets and under stairs. The driver must stay reachable for future replacement, so we plan where it sits before the ceiling is closed.",
      },
    ],
    keywords: [
      "downlight installation KL",
      "pasang lampu downlight",
      "tukar lampu siling",
      "chandelier installation Kuala Lumpur",
      "LED strip cove light",
      "pasang lampu gantung",
      "upah pasang lampu",
      "light installation Selangor",
    ],
  },
  "outdoor-lighting": {
    name: "Outdoor Lighting",
    h1: "Outdoor and Garden Lighting Installation in KL",
    metaTitle: "Outdoor & Garden Lighting KL from RM150",
    metaDescription:
      "Porch, garden, gate and flood lights installed with IP65 fittings and sealed joints in KL and Selangor. From RM150 per fixture, fixed quote and warranty.",
    summary: "Porch, garden, gate and flood lights wired with IP65 fittings and sealed joints. From RM150 per fixture.",
    intro:
      "We install porch, garden, gate pillar, wall and flood lights for landed homes across KL and Selangor, using IP65 fittings and sealed cable joints so rain does not trip your RCCB. Installation costs RM150 to RM250 per fixture, and most jobs are finished in a day.",
    signs: [
      "The RCCB trips when it rains and you have outdoor lights",
      "Porch or gate lights have water or insects inside the cover",
      "The driveway or side lane is dark at night",
      "Old halogen floodlights run hot and use a lot of power",
      "You want lights to switch on automatically at dusk",
      "Garden light cable joints wrapped in tape and left exposed",
    ],
    included: [
      "Plan positions, switching and the cable route with you",
      "IP65 or higher fittings for anything exposed to rain",
      "Cable in conduit, joints in sealed waterproof boxes",
      "Outdoor lights on their own RCCB-protected breaker",
      "Photocell or timer if you want automatic switching",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "What IP rating do outdoor lights need?",
        body: [
          "IP65 is the minimum for anything exposed to rain, including porch lights under a short roof. In-ground uplights and fittings where water can pool need IP67. Many 'outdoor' lights sold online are only IP44, which is fine under a deep patio but not on a gate pillar.",
          "Most rain tripping comes from water entering through the cable entry or a taped joint, not the light itself. We use proper cable glands, make joints inside sealed junction boxes and mount fittings so water runs off.",
        ],
      },
      {
        heading: "Why do my outdoor lights trip the power when it rains?",
        body: [
          "Water reaches a live connection and leaks current to earth, so the 30mA RCCB trips. The usual culprits are cracked covers, taped cable joints and conduits that channel water into the back box. These calls spike during the October to January storms.",
          "We fix the cause and put the outdoor lights on their own breaker, so a wet fitting only switches off the garden. Note which lights were on when it tripped; that often points straight to the fault.",
        ],
      },
      {
        heading: "Should I use solar garden lights instead?",
        body: [
          "Solar lights are fine for marking a path, but most are too dim for a driveway or security, and their batteries fade after a year or two in our heat. For gate, porch and security lighting, wired LED fittings are brighter and last for years.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to install outdoor lights in KL?",
        a: "RM150 to RM250 per fixture for porch, wall and garden lights, and RM170 to RM300 for flood or motion-sensor lights. A new light point, if needed, is RM100 to RM150. Fittings are supplied by you or by us at cost.",
      },
      {
        q: "Can you add a sensor so the lights come on at night?",
        a: "Yes. We fit photocell switches that turn lights on at dusk and off at dawn, timers, or motion sensors for side lanes and car porches. A photocell on the porch circuit means you never come home to a dark gate.",
      },
      {
        q: "Do outdoor lights need a separate breaker?",
        a: "It is strongly recommended, and outdoor circuits must have 30mA RCD protection. A separate protected circuit stops a rain fault from cutting power to the whole house, including the fridge and the Wi-Fi.",
      },
      {
        q: "Can you install lights on my gate pillars?",
        a: "Yes. If a cable already runs to the pillar, it is a simple fixture job. If not, we run cable in conduit along the fence or underground, and quote for any trenching and making good before we start.",
      },
    ],
    keywords: [
      "outdoor lighting KL",
      "pasang lampu luar rumah",
      "lampu taman",
      "lampu pagar",
      "flood light installation",
      "IP65 outdoor light",
      "lampu porch",
      "garden lighting Selangor",
    ],
    priceNotes: {
      "tripping-fix": "Rain-related tripping",
    },
  },
  "water-heater-installation": {
    name: "Water Heater Installation",
    h1: "Water Heater Installation in Kuala Lumpur",
    metaTitle: "Water Heater Installation KL from RM150",
    metaDescription:
      "Instant and storage water heater installation in KL and Selangor from RM150, wired with the 10mA RCCB protection heaters need. Same-day, 12-month warranty.",
    summary: "Instant and storage water heaters installed on their own circuit with 10mA RCCB protection. From RM150.",
    intro:
      "We install instant and storage water heaters across KL and Selangor, each on its own circuit with 10mA RCCB protection. Installation on an existing heater point costs RM150 to RM250, or RM350 to RM550 with a new point and 10mA RCCB. Most installs are same-day and take about an hour.",
    signs: [
      "The heater gives lukewarm water or cuts out mid-shower",
      "You feel a slight tingle from the shower head or tap",
      "The RCCB trips when the heater is switched on",
      "The heater has no 10mA RCCB of its own",
      "You are adding a heater to a second or third bathroom",
      "The heater is plugged into an ordinary 13A socket in the bathroom",
    ],
    included: [
      "Check the existing point, cable size and earthing",
      "Mount the heater level, on a wall that can take its weight",
      "Connect to a dedicated circuit with a 10mA RCCB and double-pole switch",
      "Fit the shower set and check every joint for leaks",
      "Test the RCCB trip and the heater earth",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Do I need a 10mA RCCB for my water heater?",
        body: [
          "Yes. Malaysian rules require 10mA RCD protection for water heaters and other wet locations. Many heaters fitted before this became standard rely only on the house's 30mA or 100mA RCCB, which is not enough in a wet bathroom.",
          "Many instant heaters have a small built-in ELCB. We still fit a 10mA RCCB in the DB box, so your safety does not depend on a part inside a hot, humid bathroom. Adding one to an existing point costs RM250 to RM450.",
        ],
      },
      {
        heading: "Instant or storage water heater: which should I choose?",
        body: [
          "Instant heaters, typically 3.3–3.6kW, heat water as it flows and suit a single shower. Storage heaters hold 20 to 50 litres or more and can feed a shower and basin together, or a rain shower that needs more flow.",
          "Storage heaters need a solid wall, pressure-rated pipework and a safety valve. We handle the electrical side and mounting, and quote pipework after seeing the bathroom. For like-for-like swaps, a WhatsApp photo usually lets us quote.",
        ],
      },
      {
        heading: "Can I plug a water heater into a normal socket?",
        body: [
          "No. A water heater needs its own circuit from the DB box, a 20A double-pole switch outside the shower area and a 10mA RCCB. A 13A socket in a bathroom is unsafe and shares load with other appliances. We find this often in older condos and rented units.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does water heater installation cost in KL?",
        a: "RM150 to RM250 if there is already a heater point with the right protection. With a new point and 10mA RCCB, it is RM350 to RM550. Storage heaters can cost more where pipework is involved.",
      },
      {
        q: "Can you install a heater I bought myself?",
        a: "Yes. Most customers buy their own Joven, Panasonic, Alpha or similar instant heater, and we install it at the labour rate. We can also supply one at cost with the shop receipt shown.",
      },
      {
        q: "Why does my water heater give me a small shock?",
        a: "A tingle from the shower means current is leaking and the earth or RCD protection is not working properly. Stop using the heater, switch it off at the DB box and book a same-day check.",
      },
      {
        q: "How long does it take to install a water heater?",
        a: "About an hour on an existing point. A new point with a dedicated circuit and 10mA RCCB takes two to three hours, depending on the cable route. Condo jobs follow the management's working hours.",
      },
    ],
    keywords: [
      "water heater installation KL",
      "pasang water heater",
      "pemanas air mandi",
      "10mA RCCB water heater",
      "upah pasang water heater",
      "storage water heater installation",
      "instant water heater Selangor",
      "water heater kena renjatan",
    ],
  },
  "aircond-power-point": {
    name: "Aircond Power Point",
    h1: "Aircond Power Point Installation in KL & Selangor",
    metaTitle: "Aircond Power Point Installation KL from RM250",
    metaDescription:
      "New aircond power point with isolator and its own breaker in KL and Selangor from RM250. Cable sized for 1hp to 2.5hp units. Fixed quote and warranty.",
    summary: "A dedicated 15A or 20A aircond point with isolator and its own breaker, sized for your unit. From RM250.",
    intro:
      "We install dedicated aircond power points with an isolator switch and their own MCB in the DB box, sized for 1hp to 2.5hp units. A new aircond point costs RM250 to RM400. We work across KL and Selangor, ahead of your aircond installer or on the same day.",
    signs: [
      "You are adding an aircond to a bedroom with no aircond point",
      "The aircond runs from a normal 13A socket through an adaptor",
      "The aircond plug top or socket is turning brown",
      "The MCB trips when the aircond and another load run together",
      "You are upgrading from a 1hp unit to 2hp or 2.5hp",
      "Your aircond installer says the existing point is too small",
    ],
    included: [
      "Check the unit's rating and the spare capacity at the DB box",
      "Run cable sized for the load, 2.5mm² or 4mm²",
      "Fit a 15A or 20A isolator next to the indoor unit",
      "New MCB in the DB box, labelled by room",
      "Test the circuit before the aircond installer connects",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Does my aircond need its own power point?",
        body: [
          "Yes. A compressor draws heavy current for hours, plus a surge every time it starts. A shared 13A socket is the classic cause of browned plug tops and MCBs tripping on hot nights. A dedicated point means the aircond never competes with the kettle.",
          "The isolator lets your technician switch the unit off safely during servicing. Most installation manuals call for a dedicated supply with an isolator, which also helps with warranty claims.",
        ],
      },
      {
        heading: "What size point does a 1hp, 1.5hp or 2hp aircond need?",
        body: [
          "As a rule of thumb, 1hp and 1.5hp units run on a 15A or 20A point with 2.5mm² cable. 2hp and 2.5hp units use a 20A point, and long runs may need 4mm² cable. We size the MCB and cable to your actual model.",
          "Four or five aircons on an older single-phase supply can push it to the limit, which is when a 3-phase upgrade starts to make sense. We check the spare capacity at your DB box on the same visit.",
        ],
      },
      {
        heading: "Should the electrician or the aircond installer do the point?",
        body: [
          "Many aircond installers run the point themselves. Booking us first means the point is sized to the unit, tested and labelled before the aircond team arrives. We can come before or on installation day, so the job finishes on time.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does an aircond power point cost in KL?",
        a: "RM250 to RM400 for a new aircond point with an isolator, cable and a new MCB, depending on the distance from the DB box. Longer runs or concealed wiring cost more. Larger dedicated circuits are RM300 to RM500.",
      },
      {
        q: "Can I run my aircond from a 13A socket?",
        a: "A small 1hp unit can technically run from a 13A socket, but we do not recommend it. The socket runs hot for hours and shares the circuit with other loads. A dedicated point with an isolator is safer.",
      },
      {
        q: "Do you install the aircond unit too?",
        a: "We do the electrical work: the power point, isolator, cable and breaker. Mounting the units, piping and gas are done by your aircond installer. We are happy to coordinate timing so everything is finished in one day.",
      },
      {
        q: "Can you run the aircond cable on an outside wall?",
        a: "Yes. On landed houses we often run the cable in UV-resistant conduit or trunking outside. In condos, external runs usually need management approval, so we route the cable inside and follow the building's renovation rules.",
      },
    ],
    keywords: [
      "aircond power point KL",
      "point aircond",
      "pasang point aircond",
      "harga point aircond",
      "aircond isolator installation",
      "wiring aircond baru",
      "aircon power point Selangor",
      "suis isolator aircond",
    ],
    priceNotes: {
      "db-single": "If the board is full",
    },
  },
  "appliance-power-points": {
    name: "Appliance Power Points",
    h1: "Kitchen and Appliance Power Points in KL",
    metaTitle: "Oven, Hob & Washer Power Points KL from RM200",
    metaDescription:
      "Dedicated power points for fridges, ovens, induction hobs, washers and dryers in KL and Selangor from RM200. Correct cable and breaker, fixed quote first.",
    summary: "Dedicated points for fridges, ovens, induction hobs, washers and dryers, sized to the load. From RM200.",
    intro:
      "We install power points for fridges, built-in ovens, induction hobs, dishwashers, washing machines and dryers, each sized to the appliance with the right breaker. An appliance point costs RM200 to RM350 and a dedicated heavy-load circuit RM300 to RM500. We offer same-day visits across KL and Selangor, or come before your kitchen installer.",
    signs: [
      "A built-in oven or hob is arriving with your new kitchen cabinets",
      "The washer and dryer share one socket through an adaptor",
      "The plug top for the fridge or kettle is turning brown",
      "The MCB trips when the oven and kettle run at the same time",
      "A new induction hob needs a 20A or 32A connection",
      "The washing machine socket sits where water splashes",
    ],
    included: [
      "Read the appliance nameplate or manual for its rating",
      "Plan point positions with your kitchen layout",
      "Run cable sized to the load from the DB box",
      "Fit the right outlet: 13A socket, 20A switch or cooker control unit",
      "Test under load once the appliance is connected",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Which kitchen appliances need their own circuit?",
        body: [
          "Built-in ovens (2.5–3.5kW), induction hobs (3–7kW), dishwashers and dryers should all have dedicated circuits. A fridge draws little, but give it its own socket so it never shares with a kettle or gets unplugged by accident.",
          "A 2.2kW kettle and a 2kW air fryer on one twin socket and adaptor push about 18A through a single faceplate. That is why kitchen plug tops so often turn brown.",
        ],
      },
      {
        heading: "Can an induction hob be plugged into a normal socket?",
        body: [
          "Some small one or two-zone hobs come with a 13A plug and draw under 3kW. Most built-in three or four-zone hobs draw 6–7kW and must be hard-wired to a 32A circuit with 6mm² cable. Check the installation guide before you buy, so the point is ready on delivery day.",
        ],
      },
      {
        heading: "Where should the washing machine point go?",
        body: [
          "Above the worktop, or at least 30cm above the floor, away from the tap and drain hose. Many older condos have the washer socket at floor level in the yard, where water collects. We move it higher with 30mA RCCB protection. A stacked dryer needs its own socket.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a kitchen appliance power point cost?",
        a: "RM200 to RM350 for a standard point for a fridge, oven or washer. A dedicated heavy-load circuit for an induction hob or large oven is RM300 to RM500, depending on cable size and distance to the DB box.",
      },
      {
        q: "Can you wire my kitchen before the cabinets go in?",
        a: "Yes, and that is the best time. Send us the kitchen drawing with appliance positions marked. We run the cables and fix the back boxes, then return to fit sockets and connect appliances once the cabinets are in.",
      },
      {
        q: "My oven trips the power when the kettle is on. Why?",
        a: "Both are probably on the same circuit, or the oven's circuit is undersized. A built-in oven should have its own 20A circuit back to the DB box. We check the wiring and add a dedicated circuit if needed.",
      },
      {
        q: "Do you connect the appliance itself?",
        a: "We connect hard-wired ovens and hobs to the new point and test them under load. Fitting the appliance into the cabinet, gas connections and water hoses are done by the supplier or your kitchen contractor.",
      },
    ],
    keywords: [
      "induction hob wiring KL",
      "point oven",
      "pasang point dapur induksi",
      "plug mesin basuh",
      "kitchen power point installation",
      "dedicated circuit hob",
      "wiring dapur",
      "appliance socket Selangor",
    ],
  },
  "ev-charger-installation": {
    name: "EV Charger Installation",
    h1: "Home EV Charger Installation in KL & Selangor",
    metaTitle: "EV Charger Installation KL from RM1,800",
    metaDescription:
      "Home EV charger installation in KL and Selangor from RM1,800 for landed homes. Mode 3 wallbox on a dedicated circuit with RCD protection, plus condo support.",
    summary:
      "7kW home wallbox on a dedicated circuit with proper RCD protection, for landed homes and condos. From RM1,800.",
    intro:
      "We install home EV wallbox chargers on a dedicated circuit with Type A RCD protection, for landed homes and condos. Installing your own 7kW charger at a landed home costs RM1,800 to RM2,800. We survey across KL and Selangor within days, and help condo owners prepare the JMB or management proposal.",
    signs: [
      "Your EV arrives soon and you have nowhere to charge it",
      "You are charging from a 13A socket with the portable cable",
      "Charging is slow and the plug top gets warm",
      "Your condo management wants a proposal before approving a charger",
      "You run several aircons and are not sure the supply can take an EV",
      "You want to claim the EV charging tax relief this year",
    ],
    included: [
      "Site survey and a load check of your supply and DB box",
      "Dedicated circuit with correctly sized cable and MCB",
      "30mA Type A RCD protection, or Type B where the charger needs it",
      "Wallbox mounted, configured and test-charged with your car",
      "Circuit and RCD tested before handover",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Can I charge my EV from a normal 13A socket?",
        body: [
          "Occasionally, as a backup, but not every day. Malaysian EV charging guidelines call for home charging through a Mode 3 wallbox on a dedicated circuit with RCD protection. The portable cable that comes with the car pulls about 10A for ten hours or more, which is hard on an ordinary socket.",
          "A 7kW wallbox charges most EVs from 20% to 80% overnight in about 5 to 8 hours. Most let you schedule charging from an app, so the car charges after the evening aircond and cooking load drops.",
        ],
      },
      {
        heading: "How do I get EV charger approval in a condo?",
        body: [
          "Under the Strata Management Act 2013, you need written approval from your JMB or MC before installing a charger in the car park. Most buildings want a proposal showing the cable route, power source and charger model. We prepare the technical part for you.",
          "Condo installs are quoted after a survey, because the cable run to your bay can be a few metres or over 100 metres. Newer condos with EV-ready parking are quicker and cheaper.",
        ],
      },
      {
        heading: "Is there tax relief for a home EV charger?",
        body: [
          "Yes. Individual taxpayers can claim relief of up to RM2,500 for buying, installing, renting or subscribing to EV charging facilities, extended to the 2027 year of assessment. Keep the invoices for the charger and installation, and check the latest LHDN guidance when you file.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does home EV charger installation cost in Malaysia?",
        a: "For a landed home in KL or Selangor, installing your own 7kW wallbox costs RM1,800 to RM2,800, depending on cable distance and whether the DB box needs work. Condo installs start from about RM3,200, quoted after a survey.",
      },
      {
        q: "Do I need 3-phase to install an EV charger?",
        a: "No. Most homes use a 7kW single-phase charger. We check your load first. If you already run several aircons, a water heater and an oven in the evening, 3-phase or a charger with load management may be better.",
      },
      {
        q: "Can you install the charger that came with my car?",
        a: "Yes. We install the wallbox supplied with your BYD, Tesla or other EV, or one you bought separately, as long as it is approved for use in Malaysia. Send us the model so we can read the manual before the survey.",
      },
      {
        q: "How long does EV charger installation take?",
        a: "For a landed home, usually half a day to a full day once the survey is done. Condo installs depend on JMB approval, which can take a few weeks, and on the length of the cable route.",
      },
      {
        q: "What protection does a home EV charger need?",
        a: "A dedicated circuit with its own MCB and at least a 30mA Type A RCD. Some chargers have built-in 6mA DC fault detection; others need a Type B RCD. We match the protection to your charger's manual.",
      },
    ],
    keywords: [
      "EV charger installation KL",
      "home EV charger Malaysia",
      "pasang EV charger rumah",
      "wallbox installation Selangor",
      "EV charger condo JMB",
      "pengecas kereta elektrik rumah",
      "harga pasang EV charger",
      "7kW EV charger installation",
    ],
    priceNotes: {
      "db-single": "If the board is full",
      "three-phase-upgrade": "Only if needed",
    },
  },
  "electrical-safety-inspection": {
    name: "Electrical Safety Inspection",
    h1: "Electrical Safety Inspection in KL & Selangor",
    metaTitle: "Electrical Safety Inspection KL from RM250",
    metaDescription:
      "Electrical safety inspection with a written report for condos and landed homes in KL and Selangor, from RM250. RCCB and insulation tests are included.",
    summary: "A full check of your wiring, DB box, earthing and RCCBs, with a written report and photos. From RM250.",
    intro:
      "We check your wiring, DB box, earthing and RCCBs and give you a written report with photos, test results and a priced repair list. Inspections cost RM250 to RM350 for a condo and RM350 to RM600 for a landed house, and can usually be booked across KL and Selangor within a day or two.",
    signs: [
      "You are buying a house that is more than 15 years old",
      "You are a landlord between tenants",
      "Nobody has checked the wiring since the house was built",
      "The RCCB has never been tested with a meter",
      "Burn marks, warm sockets or flickering lights here and there",
      "Your insurer or a buyer has asked for an electrical report",
      "You have moved into a house with unknown DIY wiring",
    ],
    included: [
      "Visual check of the DB box, sockets, switches, lights and visible cable",
      "RCCB trip test with an RCD tester, not just the test button",
      "Insulation resistance test on each circuit",
      "Polarity and earth continuity check on sockets",
      "Water heater and wet-area protection check",
      "Written report with photos, results and a priced repair list",
    ],
    sections: [
      {
        heading: "How often should house wiring be inspected?",
        body: [
          "Every 10–15 years is a sensible rule, and sooner for older houses or after a flood, fire or major renovation. BOMBA attributes about 60% of house fires to electrical causes, and most start with problems an inspection picks up early: loose connections, overloaded circuits, missing RCD protection and cable damaged by heat or rats.",
        ],
      },
      {
        heading: "What does a pre-purchase or landlord inspection check?",
        body: [
          "For buyers, we check the age and condition of the wiring, whether the DB box has RCCBs, whether the water heater has 10mA protection, and any signs of DIY work. You get a priced list to use when negotiating or planning the renovation budget.",
          "For landlords, the same check shows tenants the house is safe. Do it between tenancies, when every room and the DB box are easy to reach.",
        ],
      },
      {
        heading: "What tests are included in the inspection?",
        body: [
          "We test every RCCB with an RCD tester, measuring trip time and current rather than relying on the test button. We measure insulation resistance on each circuit, check polarity and earth continuity at the sockets, and open the DB box to look for heat damage. Landed homes can add an earthing test for RM200 to RM300.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does an electrical inspection cost in KL?",
        a: "RM250 to RM350 for a condo and RM350 to RM600 for a landed house, depending on size and the number of circuits. An earthing resistance test is RM200 to RM300. Repairs are quoted separately, and going ahead is your choice.",
      },
      {
        q: "Do I get a written report?",
        a: "Yes, on the same or next day, with photos, test results for each circuit and a list of issues marked urgent, recommended or optional, each with a price. The report is yours to keep, whether or not we do the repairs.",
      },
      {
        q: "Should I get an inspection before buying a used house?",
        a: "Yes, especially for houses over 15 years old. Rewiring a double-storey terrace costs RM13,000 to RM20,000, so knowing the state of the wiring before you sign can change your offer. The inspection takes two to three hours.",
      },
      {
        q: "Can you fix the problems you find?",
        a: "Yes. Every issue in the report comes with a fixed price, and small items such as a worn socket or a loose terminal can often be fixed on the same visit. Larger jobs are booked at a time that suits you.",
      },
    ],
    keywords: [
      "electrical inspection KL",
      "electrical safety check house",
      "pemeriksaan wiring rumah",
      "semakan elektrik rumah",
      "pre purchase electrical inspection",
      "landlord electrical check Malaysia",
      "earthing test",
      "insulation resistance test",
      "electrical report Selangor",
    ],
  },
  "smart-home-wiring": {
    name: "Smart Home Wiring",
    h1: "Smart Home Wiring in Kuala Lumpur",
    metaTitle: "Smart Home Wiring KL, Smart Switches from RM80",
    metaDescription:
      "Smart switches, video doorbells, CCTV power points and autogate points installed in KL and Selangor. Smart switches from RM80, fixed quote and warranty.",
    summary:
      "Smart switches, video doorbells, CCTV power and autogate points wired properly. Smart switches from RM80.",
    intro:
      "We install smart switches, video doorbells, power points for CCTV cameras and autogate motors, and the wiring that keeps them reliable. A smart switch costs RM80 to RM120 to fit and a doorbell or CCTV point RM150 to RM250. We work across KL and Selangor and set up the app with you before we leave.",
    signs: [
      "Smart switches you bought do not fit or keep going offline",
      "Your switch boxes have no neutral wire",
      "CCTV cameras running on long extension cords",
      "A video doorbell that needs mains power at the gate",
      "A new autogate motor needs its own power point",
      "You want lights or the water heater on a schedule",
    ],
    included: [
      "Check each switch box for a neutral wire and enough depth",
      "Install smart switches, doorbells or CCTV and autogate points",
      "Weatherproof outlets and RCCB protection for outdoor points",
      "Pair devices to your app and Wi-Fi with you",
      "Test every switch, schedule and sensor",
      "12-month workmanship warranty on the wiring",
    ],
    sections: [
      {
        heading: "Why does my smart switch need a neutral wire?",
        body: [
          "Most Malaysian homes have only a live wire at each light switch. A smart switch needs constant power to stay on Wi-Fi, and the reliable way to get it is a neutral wire in the switch box. No-neutral models exist, but they can make LEDs flicker or glow when off.",
          "We check each box first. If there is no neutral, we can often pull one through the existing conduit. Where cable is buried directly in the wall, a no-neutral model or a relay behind the light is the fallback.",
        ],
      },
      {
        heading: "What power does a CCTV system or autogate need?",
        body: [
          "IP cameras are usually powered through the network cable (PoE) from the recorder, so they need one good socket near the NVR. Analogue and Wi-Fi cameras need a power point near each camera, weatherproof and RCCB-protected outdoors.",
          "An autogate motor needs a dedicated point at the gate, with cable run underground or along the fence in conduit. That is why autogate points cost RM350 to RM650: most of the price is the cable run.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to install smart switches?",
        a: "RM80 to RM120 per switch, using switches you supply or ones we buy at cost. If a box needs a neutral wire added, that can add time and cost, which we confirm after checking. App pairing is included.",
      },
      {
        q: "Which smart switches work in Malaysian homes?",
        a: "Any switch with a SIRIM mark that fits the standard 86mm square wall box. Many customers use Tuya, Sonoff, Aqara or similar, controlled through an app, Google Home or Alexa. Check it works with any hub you already have.",
      },
      {
        q: "Can you install a video doorbell?",
        a: "Yes. Battery doorbells only need mounting, but wired ones are more reliable. We run a low-voltage transformer or power point to the door or gate, fix the doorbell and connect it to your Wi-Fi. Doorbell points cost RM150 to RM250.",
      },
      {
        q: "Do you install the CCTV cameras as well?",
        a: "We do the electrical side: power points, cable runs and protection. Your CCTV installer handles the cameras, recorder and network setup, and we can coordinate timing so the power is ready when they arrive.",
      },
    ],
    keywords: [
      "smart switch installation KL",
      "pasang suis pintar",
      "smart home wiring Malaysia",
      "CCTV power point",
      "point autogate",
      "pasang loceng pintu video",
      "wiring CCTV rumah",
      "smart home installer Selangor",
    ],
  },
  "commercial-electrician": {
    name: "Commercial Electrician",
    h1: "Commercial Electrician for Shops and Offices in KL",
    metaTitle: "Commercial Electrician KL for Shops & Offices",
    metaDescription:
      "Electrician for shops, offices and F&B outlets in KL and Selangor. 3-phase work, LED retrofits, new points and maintenance. LEDs from RM100, fixed quotes.",
    summary: "Shops, offices and F&B outlets: 3-phase boards, LED retrofits, new points and planned maintenance.",
    intro:
      "We handle electrical work for shops, offices, clinics and F&B outlets across KL and Selangor: new power points, 3-phase DB boards, LED retrofits, fault repairs and planned maintenance. Work starts from RM100 per LED downlight and RM150 per power point. We schedule work around your trading hours, any day from 8am to 10pm.",
    signs: [
      "Breakers trip during the lunch rush when every appliance is on",
      "Old fluorescent fittings with flickering tubes and buzzing ballasts",
      "You are fitting out a new shop lot or office before opening",
      "The landlord or mall management wants a tested installation",
      "Kitchen equipment needs 3-phase or dedicated circuits",
      "Nobody knows when the DB board was last tested",
    ],
    included: [
      "Site visit and a fixed written quote, itemised per point",
      "Work scheduled around your trading hours to limit downtime",
      "3-phase loads balanced and labelled at the board",
      "Full testing, with written results for your landlord or insurer",
      "Contractor and worker details prepared for mall or building permits",
      "12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Can you work around our business hours?",
        body: [
          "Yes. We work any day from 8am to 10pm, so shop and F&B jobs can be done before opening, on your quiet day or at the weekend, and office work in the evening. Malls and managed towers have their own contractor rules and permit forms, and we follow them.",
        ],
      },
      {
        heading: "Is an LED retrofit worth it for a shop or office?",
        body: [
          "Usually, yes. Replacing 36W fluorescent tubes with 18W LED tubes, or old downlights with 12W LED panels, roughly halves the lighting load. For a shop with lights on 12 hours a day, the TNB saving often covers the retrofit within one to two years.",
          "We count the fittings, work out the wattage saved and quote per light, so you see the payback before deciding. Sound fittings get LED tubes with the ballast bypassed; yellowed or rusty ones are better replaced with panels or battens.",
        ],
      },
      {
        heading: "What electrical work does a new F&B outlet need?",
        body: [
          "A typical restaurant fit-out needs a 3-phase DB board, dedicated circuits for fryers, ovens, chillers and the exhaust hood, 30mA RCD protection on kitchen sockets and water-resistant fittings in wet areas. Getting the phase balance right is what stops trips in the middle of service.",
          "Send us the equipment list with each item's power rating early, because the size of the TNB supply you apply for depends on it. We wire to your supplier's layout and test everything before opening day.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you take on commercial maintenance contracts?",
        a: "Yes. We offer monthly or quarterly visits to test RCCBs, check the DB board, replace failed lights and handle small repairs. The price depends on the size of the premises, so send us the floor area and type of business.",
      },
      {
        q: "Can you do 3-phase work for shops?",
        a: "Yes. We install and replace 3-phase DB boards, balance loads across the phases and add circuits for kitchen equipment and large aircond units. Upgrading a shop from single-phase to 3-phase costs RM5,000 to RM8,000, plus TNB's own fees.",
      },
      {
        q: "How fast can you respond to a fault at our shop?",
        a: "For urgent faults such as power loss or a main switch that keeps tripping, we offer same-day visits across KL and Selangor, any day from 8am to 10pm. Send a photo of the DB board so we bring the right parts.",
      },
      {
        q: "Do you provide documents for landlords and mall management?",
        a: "Yes. We provide test results and the contractor and worker details management needs for work permits. Tell us what your landlord or mall has asked for and we prepare it before the job starts.",
      },
    ],
    keywords: [
      "commercial electrician KL",
      "electrician for shop Kuala Lumpur",
      "office electrical wiring",
      "wiring kedai",
      "tukang elektrik kedai",
      "LED retrofit Malaysia",
      "restaurant electrical installation",
      "wiring 3 fasa kedai",
      "electrical maintenance Selangor",
    ],
  },
  "light-repair": {
    name: "Light Repair",
    h1: "Light Repair in KL & Selangor: Flickering or Not Working",
    metaTitle: "Light Repair KL: Flickering & Not Working, from RM80",
    metaDescription:
      "Lights flickering, buzzing or not turning on? We find the fault in the fitting, driver, switch or wiring and fix it from RM80 per light in KL and Selangor.",
    summary: "Lights flickering, buzzing or dead? We fix the fitting, driver, switch or circuit, from RM80 per light.",
    intro:
      "We repair lights that flicker, buzz, dim or won't turn on, from a single downlight to a whole lighting circuit. One faulty light typically costs RM80 to RM180 to fix, and a circuit fault RM150 to RM350. You get a fixed quote first, with same-day visits across KL and Selangor, 8am to 10pm daily.",
    signs: [
      "A light flickers, buzzes or takes a while to come on",
      "A new LED bulb still doesn't work in the same fitting",
      "Several lights went off at once and won't come back",
      "Lights dim when the aircond or kettle switches on",
      "A light switch feels warm, crackles or is loose",
      "Downlights blink on and off after a few minutes",
    ],
    included: [
      "Check the bulb, fitting and LED driver or starter",
      "Test the switch and the connections behind it",
      "Trace the lighting circuit back to the MCB if several lights are out",
      "Fixed quote before any repair",
      "Replace the driver, switch or faulty part, then test every light on the circuit",
      "12-month workmanship warranty on the repair",
    ],
    sections: [
      {
        heading: "Why are my lights flickering?",
        body: [
          "If one light flickers, the cause is usually a failing LED driver, a cheap or incompatible bulb, or a loose terminal in the fitting. If several lights flicker together, or they dim when a big appliance starts, the problem is further back: a loose connection at the switch, in a junction or at the DB box.",
          "Lights dimming and brightening across the house can mean a loose neutral. Book a same-day check for that, because it can push high voltage onto other circuits and damage appliances.",
        ],
      },
      {
        heading: "Why won't my light turn on even with a new bulb?",
        body: [
          "Downlights and LED panels have a separate driver that converts mains power for the LEDs. When the driver fails, a new bulb won't help. Other causes are a worn switch, a broken connection in the ceiling, or a tripped MCB on the lighting circuit.",
          "We carry common drivers, starters and switches in the van, so most light repairs are finished in one visit.",
        ],
      },
      {
        heading: "Repair or replace the fitting?",
        body: [
          "Replacing a driver or switch is usually cheaper than a new fitting. Old halogen downlights and fluorescent tubes are often better replaced with LED fittings, which use less power and last longer. Replacing a fitting on an existing point costs RM40 to RM80 per light, labour only.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to repair a light in KL?",
        a: "A single light that flickers or won't turn on typically costs RM80 to RM180 to fix, including a standard driver or starter. A fault on a whole lighting circuit costs RM150 to RM350. Every visit has a minimum charge of RM80.",
      },
      {
        q: "Why do my LED downlights blink?",
        a: "Usually a failing driver, a dimmer that isn't LED-compatible, or a loose connection. We test the driver and the switch to find which one it is.",
      },
      {
        q: "Half the lights in my house are off. What should I check?",
        a: "Check the DB box for a tripped MCB or RCCB. If nothing has tripped, there may be a loose connection or a failed breaker on the lighting circuit. Book a visit and we'll trace it.",
      },
      {
        q: "Is a buzzing light dangerous?",
        a: "A faint hum from an old fluorescent fitting is common. A loud buzz, crackle or burning smell from a light or switch means a loose or overheating connection: switch it off and have it checked.",
      },
      {
        q: "Can you fix lights on a high ceiling?",
        a: "Yes. For double-volume ceilings we bring a tall ladder or tower scaffold. Our chandelier and high-ceiling page lists those prices.",
      },
    ],
    keywords: [
      "light repair KL",
      "lights flickering",
      "light not working",
      "downlight repair",
      "lampu tak menyala",
      "baiki lampu",
      "灯不亮",
    ],
  },
  "chandelier-installation": {
    name: "Chandelier & High-Ceiling Installation",
    h1: "Chandelier and High-Ceiling Light Installation in KL",
    metaTitle: "Chandelier Installation KL, High Ceilings from RM200",
    metaDescription:
      "Chandeliers, heavy pendants and fans on high or double-volume ceilings, installed safely with the right hook and support. From RM200 in KL and Selangor.",
    summary: "Chandeliers, pendants and fans on high or double-volume ceilings, hung safely. From RM200.",
    intro:
      "We install chandeliers, heavy pendant lights and ceiling fans on normal and double-volume ceilings, with proper support for the weight. A chandelier on a normal ceiling costs RM200 to RM450, and on a high ceiling RM450 to RM1,200 including a tall ladder or tower scaffold. Fixed quote first, across KL and Selangor.",
    signs: [
      "A new chandelier or pendant needs assembling and hanging",
      "Your living room or staircase has a double-volume ceiling",
      "The fitting is heavier than a normal light hook can take",
      "You want a chandelier moved, lowered or put on a dimmer",
      "A light or fan on a high ceiling has stopped working",
      "The ceiling point is in the wrong spot for the new layout",
    ],
    included: [
      "Check the fitting's weight, the ceiling type and the existing point",
      "Fix a proper hook or bracket to the slab or a beam, not just the plaster",
      "Assemble the fitting, including arms and crystals",
      "Wire and earth the fitting, with a dimmer if it is compatible",
      "Tall ladder or tower scaffold for high ceilings",
      "Test, tidy up and a 12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "How is a heavy chandelier hung safely?",
        body: [
          "Plaster ceilings cannot hold a heavy fitting on their own. We fix the hook or support bracket into the concrete slab or a beam above, check its rating against the weight of the fitting, and only then connect the wiring.",
          "Crystal chandeliers can take an hour or more just to assemble, which is included in the price.",
        ],
      },
      {
        heading: "Double-volume and high ceilings",
        body: [
          "Staircases and living rooms with ceilings above about 4 metres need a tower scaffold or a very tall ladder, two people and more time. High-ceiling prices are RM450 to RM1,200 per fitting, depending on height and weight. A ceiling fan on a high ceiling costs RM350 to RM600.",
        ],
      },
      {
        heading: "Moving or adding a ceiling point",
        body: [
          "If the chandelier should hang over the dining table and the point is somewhere else, we can add a new light point for RM100 to RM150 or move the existing one. In condos we follow the management's renovation rules.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does chandelier installation cost in KL?",
        a: "On a normal ceiling, RM200 to RM450 depending on weight and assembly. On a high or double-volume ceiling, RM450 to RM1,200 including a tall ladder or tower scaffold. Every visit has a minimum charge of RM80.",
      },
      {
        q: "Can my plaster ceiling hold a chandelier?",
        a: "Not on the plaster alone. We anchor the hook to the slab or a beam above, and add a support if there isn't one.",
      },
      {
        q: "Can you install a ceiling fan on a double-volume ceiling?",
        a: "Yes. A ceiling fan on a high ceiling costs RM350 to RM600, including fitting the extension rod and the scaffold.",
      },
      {
        q: "Can I put my chandelier on a dimmer?",
        a: "If the bulbs and fitting are dimmable, yes. We fit an LED-compatible dimmer so the lights don't flicker.",
      },
      {
        q: "Do you assemble crystal chandeliers?",
        a: "Yes, assembly of the arms and crystals is included. Tell us the model so we can allow enough time.",
      },
    ],
    keywords: [
      "chandelier installation KL",
      "high ceiling light installation",
      "double volume ceiling fan",
      "pasang chandelier",
      "安装吊灯",
    ],
  },
  "water-heater-repair": {
    name: "Water Heater Repair",
    h1: "Water Heater Repair in KL & Selangor",
    metaTitle: "Water Heater Repair in KL from RM150",
    metaDescription:
      "Water heater not heating, tripping the RCCB or showing no power? We find the fault and fix it from RM150 across KL and Selangor. Same-day visits, fixed quote.",
    summary:
      "Heater not heating, tripping the power or dead? We test the heater, point and RCCB and fix it, from RM150.",
    intro:
      "We repair instant water heaters that won't heat, trip the RCCB or have no power. The usual culprits are the heating element, thermostat, a burnt connector or the 10mA RCCB, and repairs typically cost RM150 to RM300 plus any part. You get a fixed quote first, with same-day visits across KL and Selangor, 8am to 10pm.",
    signs: [
      "The heater light comes on but the water stays cold",
      "The RCCB trips as soon as someone switches the heater on",
      "No power at the heater: no light and no sound",
      "The water is only lukewarm, or swings between hot and cold",
      "A burning smell or brown marks at the heater switch",
      "You feel a tingle from the shower or the heater casing",
    ],
    included: [
      "Safe isolation, then a check of the switch, cable and connector",
      "Insulation test on the heating element to find leakage to earth",
      "Check the 10mA RCCB and the breaker in the DB box",
      "Fixed quote for the repair, or honest advice if a new heater is cheaper",
      "Repair or part replacement, then a full test with the shower running",
      "12-month workmanship warranty on the repair",
    ],
    sections: [
      {
        heading: "Why is my water heater not heating?",
        body: [
          "The most common causes are a failed heating element, a faulty thermostat or flow switch, water pressure too low to switch the heater on, or no power reaching the unit. If the power light is on but the water stays cold, the element or flow sensor is the usual suspect. If the light is off, it is usually the switch, the connector or the breaker.",
          "We test each part with a meter instead of guessing, so you only pay for what is actually broken.",
        ],
      },
      {
        heading: "Why does my water heater trip the RCCB?",
        body: [
          "An element that has started leaking current to earth is the classic cause: the RCCB sees the leak and cuts the power, often the moment the heater switches on. Water inside the casing, a damaged cable and a worn connector do the same. Never bypass the RCCB to get hot water back, because it is what protects you in a wet bathroom.",
          "Every instant heater should have its own 10mA RCCB. If yours doesn't, we can add one for RM250 to RM450.",
        ],
      },
      {
        heading: "Repair or replace?",
        body: [
          "If the heater is under five years old and the fault is the element, thermostat or connector, repair usually makes sense. For older units, a cracked tank or a heater that has failed more than once, replacing it is often cheaper over time. Fitting a new heater on an existing point costs RM150 to RM250, labour only.",
          "If your heater is still under the manufacturer's warranty, call the brand's service centre first so the warranty isn't affected.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does water heater repair cost in KL?",
        a: "Finding and fixing a water heater fault typically costs RM150 to RM300, plus the part if one is needed; elements and thermostats are supplied at cost. Every visit has a minimum charge of RM80, and you get a fixed quote before work starts.",
      },
      {
        q: "Why is my water heater not hot?",
        a: "Usually a failed element, a faulty thermostat or flow switch, low water pressure, or no power at the unit. We test each one to find which.",
      },
      {
        q: "Is it safe to keep using a heater that trips the RCCB?",
        a: "No. A tripping RCCB means current is leaking, in a wet bathroom. Switch the heater off and don't keep resetting the RCCB. Book a repair.",
      },
      {
        q: "Do you repair all water heater brands?",
        a: "We handle the electrical side for all common brands: element, thermostat, connector, cable and RCCB. If the heater is still under warranty, call the brand first.",
      },
      {
        q: "Can you replace my old heater with a new one?",
        a: "Yes. Fitting a new heater on an existing point costs RM150 to RM250, labour only, and we check the 10mA RCCB and cable at the same time.",
      },
    ],
    keywords: [
      "water heater repair KL",
      "water heater not heating",
      "water heater tripping",
      "water heater rosak",
      "baiki water heater",
      "热水器维修",
    ],
  },
  "exhaust-fan-kitchen-hood": {
    name: "Exhaust Fan & Kitchen Hood Installation",
    h1: "Exhaust Fan and Kitchen Hood Installation in KL",
    metaTitle: "Exhaust Fan & Kitchen Hood Installation KL",
    metaDescription:
      "Bathroom and kitchen exhaust fans and cooker hoods installed with a proper power point across KL and Selangor. From RM150, fixed quote, 12-month warranty.",
    summary: "Bathroom and kitchen exhaust fans and cooker hoods, installed and wired safely. From RM150.",
    intro:
      "We install bathroom and kitchen exhaust fans and kitchen cooker hoods, including the power point, switch and a safe connection. An exhaust fan on an existing point costs RM150 to RM250, with a new point RM280 to RM450, and a kitchen hood RM200 to RM350. Same-day visits across KL and Selangor, with a fixed quote first.",
    signs: [
      "Steam and smells stay in the bathroom after a shower",
      "Mould is growing on the bathroom ceiling or window frame",
      "Cooking smoke and oil spread through the house",
      "An old exhaust fan is noisy or has stopped",
      "A new hood or hob needs mounting and a power point",
      "The hood is running off an extension cord",
    ],
    included: [
      "Check the location, wall or window opening and the nearest power source",
      "Mount the fan or hood level and secure, at the height in its manual",
      "Run a proper power point or switched connection",
      "Connect the ducting you supply, or advise on what to buy",
      "Test airflow, speed settings and lights",
      "Clean up and a 12-month workmanship warranty",
    ],
    sections: [
      {
        heading: "Bathroom exhaust fans",
        body: [
          "A bathroom without a window needs an exhaust fan to clear steam and stop mould. Fans can go in the ceiling, a wall or a window pane. We wire the fan to the light switch or its own switch, and can add a timer so it keeps running for a few minutes after you leave.",
          "Cutting glass or drilling through a concrete wall needs a glazier or extra hacking, which we quote separately.",
        ],
      },
      {
        heading: "Kitchen hood installation",
        body: [
          "A cooker hood should be mounted at the height given in its manual, usually 65 to 75cm above the hob, with its own 13A socket away from the heat. Many Klang Valley kitchens have the socket in the wrong place or none at all, so the hood ends up on an extension cord.",
          "We fit the hood, add or move the point and connect the ducting. Hacking a new duct hole through an outside wall is quoted separately.",
        ],
      },
      {
        heading: "Doing the hob and oven at the same time",
        body: [
          "If you are renovating the kitchen, it is cheaper to do the hood, hob and oven in one visit. Built-in ovens and induction hobs need their own dedicated circuit from the DB box, which costs RM300 to RM500.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to install a kitchen hood in KL?",
        a: "Installing a kitchen hood costs RM200 to RM350, labour only, including mounting and connecting it to a suitable power point. Ducting through a wall or a new power point is quoted separately.",
      },
      {
        q: "How much is exhaust fan installation?",
        a: "An exhaust fan on an existing point costs RM150 to RM250. With a new power point it is RM280 to RM450. Glass cutting or wall hacking is extra.",
      },
      {
        q: "Do you supply the hood or exhaust fan?",
        a: "Usually you buy the model you like and we install it. We can also supply one at cost with the receipt shown.",
      },
      {
        q: "Can the hood share a socket with other appliances?",
        a: "It's better on its own socket, away from the heat of the hob. Sharing a multi-plug with a kettle or microwave can overheat the socket.",
      },
      {
        q: "Can you put an exhaust fan in a window?",
        a: "Yes, if the glass already has a cut-out or a glazier cuts one. We then mount and wire the fan.",
      },
    ],
    keywords: [
      "exhaust fan installation KL",
      "kitchen hood installation",
      "cooker hood installation KL",
      "pasang hood dapur",
      "pasang exhaust fan",
      "抽油烟机安装",
    ],
  },
};
