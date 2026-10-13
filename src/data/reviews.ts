import type { Review } from "@/lib/types";

// PLACEHOLDER REVIEWS FOR THE PROTOTYPE ONLY.
// These are sample testimonials written to show the layout. Replace them with
// real Google reviews (or embed the Google Business Profile widget) before the
// site goes live. Publishing invented reviews as genuine breaks Google's
// policies and Malaysia's Consumer Protection Act, which is why no Review or
// AggregateRating structured data is generated from this file.
export const reviewsArePlaceholders = true;

export const reviews: Review[] = [
  {
    name: "Aisyah Rahman",
    area: "Subang Jaya",
    service: "Power tripping repair",
    rating: 5,
    when: "1 week ago",
    text: "Our RCCB kept tripping every evening. He came within the hour, switched circuits off one by one and found the water heater element leaking to earth. Clear explanation, fair price, and he showed me the reading on his tester.",
  },
  {
    name: "Jason Lim",
    area: "Mont Kiara",
    service: "Downlight installation",
    rating: 5,
    when: "2 weeks ago",
    text: "Replaced 14 old halogen downlights with LED in our condo. Sent photos on WhatsApp first and the quote matched the final bill exactly. Worked within the management's hours and cleaned up properly.",
  },
  {
    name: "Priya Subramaniam",
    area: "Petaling Jaya",
    service: "House rewiring",
    rating: 5,
    when: "3 weeks ago",
    text: "Rewired our old SS2 terrace. Old fuses replaced with a proper DB box and RCCB. They gave us a written breakdown per room and finished in five days, tidy throughout.",
  },
  {
    name: "Hafiz Ismail",
    area: "Shah Alam",
    service: "Ceiling fan installation",
    rating: 5,
    when: "1 month ago",
    text: "Installed three ceiling fans, one needed a new fan point. Fast and tidy. Price was exactly what was quoted on WhatsApp.",
  },
  {
    name: "Mei Ling Tan",
    area: "Cheras",
    service: "Short circuit repair",
    rating: 5,
    when: "1 month ago",
    text: "Kitchen socket sparked and burnt black. Messaged in the morning and they came the same afternoon. Replaced the socket and the damaged cable section, then tested the whole circuit before leaving.",
  },
  {
    name: "Daniel Hughes",
    area: "Bangsar",
    service: "EV charger installation",
    rating: 5,
    when: "1 month ago",
    text: "Installed our 7kW wallbox on a dedicated circuit with its own RCD. Explained the load on our single-phase supply honestly instead of upselling a 3-phase upgrade we didn't need.",
  },
  {
    name: "Nurul Huda",
    area: "Puchong",
    service: "Water heater installation",
    rating: 5,
    when: "2 months ago",
    text: "New water heater with a separate 10mA RCCB. Neat trunking, no mess, and he showed me how to test the RCCB button monthly.",
  },
  {
    name: "Ravi Chandran",
    area: "Klang",
    service: "DB box replacement",
    rating: 5,
    when: "2 months ago",
    text: "Our old DB box was rusty and the main switch was getting hot. Replaced with a new board, labelled every breaker. Very professional.",
  },
  {
    name: "Siti Mariam",
    area: "Bangi",
    service: "Electrical safety inspection",
    rating: 5,
    when: "2 months ago",
    text: "Booked an inspection before buying a second-hand terrace. Got a written report with photos and an estimate of what needed fixing. Helped us negotiate the price.",
  },
  {
    name: "Kevin Ong",
    area: "Kepong",
    service: "Light repair",
    rating: 4,
    when: "3 months ago",
    text: "Half the lights in our living room kept flickering. He traced it to a loose connection at the switch and two failing LED drivers, fixed it in one visit and explained everything clearly.",
  },
  {
    name: "Farah Azman",
    area: "Cyberjaya",
    service: "New power points",
    rating: 5,
    when: "3 months ago",
    text: "Added four new power points for my home office. Surface trunking, very neat. Responsive on WhatsApp and arrived on time.",
  },
  {
    name: "Wong Kar Seng",
    area: "Ampang",
    service: "Aircond power point",
    rating: 5,
    when: "4 months ago",
    text: "Two new aircond points with isolators before the aircon installer came. Done in one morning, properly sized cables.",
  },
];

export function averageRating() {
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}
