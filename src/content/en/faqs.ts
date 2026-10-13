import type { FaqGroup } from "@/lib/types";

// Site-wide FAQs (FAQ page, home page, pricing page). Answers lead with the
// direct answer so search engines and AI assistants can quote them. Keep the
// group order and question order identical in every language: the home page
// picks questions by position (see homeFaqPicks in src/lib/content.ts).

export const faqGroups: FaqGroup[] = [
  {
    id: "booking",
    title: "Booking & arrival",
    faqs: [
      {
        q: "Do you offer same-day service?",
        a: "Yes. Most jobs booked in the morning are done the same day across Kuala Lumpur and Selangor. WhatsApp us your area and a photo of the problem and we'll give you the earliest slot.",
      },
      {
        q: "What are your working hours?",
        a: "We work every day from 8am to 10pm, including weekends. We don't run a night service: if something fails after 10pm, switch off the affected circuit if it's safe and message us for the first slot next morning.",
      },
      {
        q: "Which areas do you cover?",
        a: "All of Kuala Lumpur, most of Selangor (Petaling Jaya, Subang Jaya, Shah Alam, Klang, Puchong, Kajang, Bangi, Cyberjaya, Rawang and more) and Putrajaya. Prices are the same everywhere. Not sure? Send us your location.",
      },
      {
        q: "How do I book?",
        a: "WhatsApp is quickest: send your location, a short description and a photo or video of the problem. You can also call or use the booking form on our contact page.",
      },
      {
        q: "How do I choose a good electrician in KL?",
        a: "Look for five things: prices you can see before you book, a fixed quote before any work starts, proper testing with meters rather than trial and error, a written workmanship warranty, and recent Google reviews from real customers. Avoid anyone who won't give a price until the work is done.",
      },
      {
        q: "Do you take small jobs, like one socket or one light?",
        a: "Yes. Every visit has a minimum charge of RM80, so if you have a few small things, such as a socket, a switch and a light, list them in one WhatsApp message and we'll quote them together in one visit.",
      },
    ],
  },
  {
    id: "prices",
    title: "Prices & payment",
    faqs: [
      {
        q: "How much does an electrician cost in KL?",
        a: "Every visit has a minimum charge of RM80, which covers travel and finding the problem. Typical jobs: tripping repair RM150–RM400, a new power point from RM150, water heater installation from RM150 and DB box replacement from RM1,000. Our full price list is public.",
      },
      {
        q: "Will I get a fixed price before work starts?",
        a: "Yes. We check the problem, explain it in plain words and give you a fixed price. Work only starts after you agree. If we find anything else, we ask first.",
      },
      {
        q: "Is the RM80 visit charge waived if I go ahead with the job?",
        a: "No. RM80 is the minimum charge for every visit and covers travel and diagnosis, so you know the least you will pay before we arrive. We keep it simple instead of hiding the cost in the job price.",
      },
      {
        q: "Why are your prices higher than some quotes I see online?",
        a: "Our prices include proper testing, standard materials, tidying up and a 12-month workmanship warranty. Very low quotes often leave out assembly, cable or testing, then add them on the day. We would rather show the real price up front.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Cash, bank transfer, DuitNow QR and Touch 'n Go eWallet. You pay after the job is finished and tested. Larger projects are paid in agreed stages.",
      },
      {
        q: "Can I supply my own lights, fan or water heater?",
        a: "Yes. Most customers buy their own fittings and we install them. We can also supply them at cost with the receipt shown.",
      },
    ],
  },
  {
    id: "warranty",
    title: "Warranty, condos & renovations",
    faqs: [
      {
        q: "What warranty do you give?",
        a: "All our workmanship has a 12-month warranty. If something we fixed fails because of our work, we come back and fix it free. Parts carry the manufacturer's warranty.",
      },
      {
        q: "Do you work in condos?",
        a: "Yes, regularly. We follow your management office's renovation permit, working hours and lift booking rules, and keep noisy work to the permitted hours.",
      },
      {
        q: "Do you work with interior designers and renovation contractors?",
        a: "Yes. We mark out new points with you and your contractor, run the wiring before walls and ceilings are closed, and test every circuit before handover.",
      },
    ],
  },
  {
    id: "problems",
    title: "Common electrical problems",
    faqs: [
      {
        q: "Why does my house keep tripping?",
        a: "Usually a faulty appliance (often the water heater, fridge or washing machine), rain getting into an outdoor light or socket, old wiring, or an overloaded circuit. We test each circuit to find the cause instead of just resetting the switch.",
      },
      {
        q: "Why does my RCCB trip when it rains or during lightning?",
        a: "Rain trips almost always mean water is reaching a live part: an outdoor light, porch socket, garden point or a cable joint in the roof. Lightning trips are usually a voltage surge. We find the wet point and seal or replace it, and can add a surge protection device.",
      },
      {
        q: "The RCCB trips but the MCBs don't. What does that mean?",
        a: "The RCCB reacts to current leaking to earth, while MCBs react to overload or short circuit. An RCCB trip with no MCB trip points to leakage, often from a water heater element, a wet point or damaged insulation. An insulation test shows which circuit.",
      },
      {
        q: "What is the difference between an ELCB and an RCCB?",
        a: "Both cut the power when current leaks to earth. Old voltage-operated ELCBs are less reliable and no longer used; a modern RCCB measures the leak directly and is the right choice. If your DB box still has an old ELCB, replacing it costs RM250–RM450.",
      },
      {
        q: "Why is my socket sparking when I plug something in?",
        a: "A tiny spark when you plug in a switched-on appliance can be normal. A loud crack, repeated sparks, a burning smell or brown marks mean a loose or worn socket that is overheating. Stop using it and switch off that circuit.",
      },
      {
        q: "There's a burning smell from a socket. What should I do?",
        a: "Stop using it, switch it off at the DB box if it's safe, and contact us. A burning smell usually means a loose connection overheating, which needs fixing the same day.",
      },
      {
        q: "Half of my house has no power. Why?",
        a: "Check the DB box first: a tripped MCB or RCCB is the usual cause. If nothing has tripped, it can be a loose connection, a failed breaker or, in 3-phase homes, one phase missing. If the whole street is dark, call TNB on 15454.",
      },
      {
        q: "Why are my lights flickering?",
        a: "One flickering light usually has a failing LED driver, bulb or loose connection. Several lights flickering together, or lights dimming when the aircond starts, can mean a loose neutral, which needs checking quickly because it can damage appliances.",
      },
      {
        q: "Does my water heater need a 10mA RCCB?",
        a: "Yes. Instant water heaters in Malaysian homes should be protected by a dedicated 10mA RCCB, which trips faster than the 30mA main RCCB. Adding one to an existing heater point costs RM250–RM450.",
      },
      {
        q: "Can I add a power point from a light switch?",
        a: "We don't recommend it. Lighting circuits use thinner cable and smaller breakers, so a socket on one can overheat when a kettle or heater is plugged in. A new point should come from a socket circuit or the DB box.",
      },
      {
        q: "Do I need 3-phase power for a home EV charger?",
        a: "Not usually. A 7kW single-phase charger suits most homes and charges a typical EV overnight. You only need 3-phase for an 11kW or 22kW charger, or if your home is already near its supply limit.",
      },
      {
        q: "How do I know if my house needs rewiring?",
        a: "Warning signs are wiring over 25–30 years old, old fuses instead of an RCCB, warm or discoloured sockets, frequent tripping and flickering lights. An inspection tells you whether repair or rewiring is needed.",
      },
    ],
  },
];
