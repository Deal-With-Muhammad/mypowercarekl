import type { AreaData } from "@/lib/types";

// Location landing pages ("Electrician in <area>"). Keep `nearby` slugs in sync
// with this list. ETAs (minutes) assume a central KL/PJ starting point. The
// local copy for each area lives in src/content/<locale>/areas.ts.

export const areaData: AreaData[] = [
  {
    slug: "mont-kiara",
    state: "Kuala Lumpur",
    nearby: ["sri-hartamas", "segambut", "desa-parkcity", "taman-tun-dr-ismail", "bangsar"],
    eta: [45, 75],
    geo: {
      lat: 3.1712,
      lng: 101.6525,
    },
    featured: true,
  },
  {
    slug: "bangsar",
    state: "Kuala Lumpur",
    nearby: ["brickfields", "old-klang-road", "petaling-jaya", "damansara", "sri-hartamas"],
    eta: [45, 75],
    geo: {
      lat: 3.1305,
      lng: 101.6708,
    },
    featured: true,
  },
  {
    slug: "cheras",
    state: "Kuala Lumpur",
    nearby: ["salak-selatan", "desa-petaling", "cheras-selangor", "ampang", "balakong"],
    eta: [60, 90],
    geo: {
      lat: 3.0883,
      lng: 101.7312,
    },
    featured: true,
  },
  {
    slug: "kepong",
    state: "Kuala Lumpur",
    nearby: ["segambut", "desa-parkcity", "selayang", "sungai-buloh", "sentul"],
    eta: [60, 90],
    geo: {
      lat: 3.2106,
      lng: 101.6366,
    },
    featured: true,
  },
  {
    slug: "setapak",
    state: "Kuala Lumpur",
    nearby: ["wangsa-maju", "sentul", "selayang", "ampang"],
    eta: [60, 90],
    geo: {
      lat: 3.1963,
      lng: 101.7136,
    },
    featured: true,
  },
  {
    slug: "wangsa-maju",
    state: "Kuala Lumpur",
    nearby: ["setapak", "ampang", "sentul", "selayang"],
    eta: [60, 90],
    geo: {
      lat: 3.2052,
      lng: 101.7374,
    },
  },
  {
    slug: "sri-petaling",
    state: "Kuala Lumpur",
    nearby: ["bukit-jalil", "kuchai-lama", "desa-petaling", "old-klang-road", "seri-kembangan"],
    eta: [45, 75],
    geo: {
      lat: 3.0683,
      lng: 101.6887,
    },
  },
  {
    slug: "bukit-jalil",
    state: "Kuala Lumpur",
    nearby: ["sri-petaling", "puchong", "seri-kembangan", "old-klang-road", "kuchai-lama"],
    eta: [60, 90],
    geo: {
      lat: 3.0563,
      lng: 101.6853,
    },
    featured: true,
  },
  {
    slug: "ampang",
    state: "Kuala Lumpur",
    nearby: ["klcc", "wangsa-maju", "cheras", "setapak", "bukit-bintang"],
    eta: [60, 90],
    geo: {
      lat: 3.1497,
      lng: 101.7618,
    },
    featured: true,
  },
  {
    slug: "sentul",
    state: "Kuala Lumpur",
    nearby: ["setapak", "segambut", "kepong", "wangsa-maju"],
    eta: [45, 75],
    geo: {
      lat: 3.1847,
      lng: 101.6927,
    },
  },
  {
    slug: "taman-tun-dr-ismail",
    state: "Kuala Lumpur",
    nearby: ["damansara", "sri-hartamas", "mont-kiara", "petaling-jaya", "kota-damansara"],
    eta: [45, 75],
    geo: {
      lat: 3.1462,
      lng: 101.6293,
    },
  },
  {
    slug: "desa-parkcity",
    state: "Kuala Lumpur",
    nearby: ["kepong", "segambut", "mont-kiara", "taman-tun-dr-ismail"],
    eta: [45, 75],
    geo: {
      lat: 3.1862,
      lng: 101.6302,
    },
  },
  {
    slug: "old-klang-road",
    state: "Kuala Lumpur",
    nearby: ["kuchai-lama", "bangsar", "sri-petaling", "brickfields", "petaling-jaya"],
    eta: [45, 75],
    geo: {
      lat: 3.0853,
      lng: 101.6734,
    },
  },
  {
    slug: "kuchai-lama",
    state: "Kuala Lumpur",
    nearby: ["old-klang-road", "sri-petaling", "salak-selatan", "desa-petaling"],
    eta: [45, 75],
    geo: {
      lat: 3.0896,
      lng: 101.6877,
    },
  },
  {
    slug: "segambut",
    state: "Kuala Lumpur",
    nearby: ["kepong", "mont-kiara", "sentul", "desa-parkcity", "sri-hartamas"],
    eta: [45, 75],
    geo: {
      lat: 3.1834,
      lng: 101.6648,
    },
  },
  {
    slug: "sri-hartamas",
    state: "Kuala Lumpur",
    nearby: ["mont-kiara", "bangsar", "segambut", "taman-tun-dr-ismail", "damansara"],
    eta: [45, 75],
    geo: {
      lat: 3.1623,
      lng: 101.6512,
    },
  },
  {
    slug: "brickfields",
    state: "Kuala Lumpur",
    nearby: ["bangsar", "old-klang-road", "bukit-bintang", "klcc"],
    eta: [45, 75],
    geo: {
      lat: 3.1291,
      lng: 101.6847,
    },
  },
  {
    slug: "klcc",
    state: "Kuala Lumpur",
    nearby: ["bukit-bintang", "ampang", "brickfields", "sentul"],
    eta: [45, 75],
    geo: {
      lat: 3.1579,
      lng: 101.7116,
    },
  },
  {
    slug: "bukit-bintang",
    state: "Kuala Lumpur",
    nearby: ["klcc", "brickfields", "cheras", "ampang"],
    eta: [45, 75],
    geo: {
      lat: 3.1466,
      lng: 101.7104,
    },
  },
  {
    slug: "desa-petaling",
    state: "Kuala Lumpur",
    nearby: ["salak-selatan", "sri-petaling", "kuchai-lama", "cheras"],
    eta: [45, 75],
    geo: {
      lat: 3.0828,
      lng: 101.7074,
    },
  },
  {
    slug: "salak-selatan",
    state: "Kuala Lumpur",
    nearby: ["desa-petaling", "cheras", "kuchai-lama", "sri-petaling", "old-klang-road"],
    eta: [45, 75],
    geo: {
      lat: 3.0983,
      lng: 101.7052,
    },
  },
  {
    slug: "petaling-jaya",
    state: "Selangor",
    nearby: ["damansara", "bangsar", "ara-damansara", "bandar-sunway", "subang-jaya"],
    eta: [45, 75],
    geo: {
      lat: 3.1073,
      lng: 101.6067,
    },
    featured: true,
  },
  {
    slug: "subang-jaya",
    state: "Selangor",
    nearby: ["usj", "bandar-sunway", "glenmarie", "ara-damansara", "puchong"],
    eta: [60, 90],
    geo: {
      lat: 3.0753,
      lng: 101.5862,
    },
    featured: true,
  },
  {
    slug: "usj",
    state: "Selangor",
    nearby: ["subang-jaya", "puchong", "bandar-sunway", "shah-alam"],
    eta: [60, 90],
    geo: {
      lat: 3.0447,
      lng: 101.5831,
    },
    featured: true,
  },
  {
    slug: "puchong",
    state: "Selangor",
    nearby: ["usj", "bukit-jalil", "cyberjaya", "seri-kembangan", "subang-jaya"],
    eta: [60, 90],
    geo: {
      lat: 3.0253,
      lng: 101.6172,
    },
    featured: true,
  },
  {
    slug: "shah-alam",
    state: "Selangor",
    nearby: ["glenmarie", "setia-alam", "klang", "ara-damansara"],
    eta: [75, 105],
    geo: {
      lat: 3.0733,
      lng: 101.5185,
    },
    featured: true,
  },
  {
    slug: "klang",
    state: "Selangor",
    nearby: ["shah-alam", "setia-alam", "glenmarie"],
    eta: [75, 120],
    geo: {
      lat: 3.0449,
      lng: 101.4456,
    },
    featured: true,
  },
  {
    slug: "cyberjaya",
    state: "Selangor",
    nearby: ["putrajaya", "puchong", "seri-kembangan", "bangi"],
    eta: [75, 120],
    geo: {
      lat: 2.9213,
      lng: 101.6559,
    },
    featured: true,
  },
  {
    slug: "putrajaya",
    state: "Putrajaya",
    nearby: ["cyberjaya", "bangi", "kajang", "puchong"],
    eta: [75, 120],
    geo: {
      lat: 2.9264,
      lng: 101.6964,
    },
    featured: true,
  },
  {
    slug: "kajang",
    state: "Selangor",
    nearby: ["semenyih", "bangi", "cheras-selangor", "balakong"],
    eta: [75, 120],
    geo: {
      lat: 2.9935,
      lng: 101.7871,
    },
    featured: true,
  },
  {
    slug: "bangi",
    state: "Selangor",
    nearby: ["kajang", "putrajaya", "semenyih", "cyberjaya"],
    eta: [75, 120],
    geo: {
      lat: 2.9561,
      lng: 101.7647,
    },
  },
  {
    slug: "seri-kembangan",
    state: "Selangor",
    nearby: ["balakong", "bukit-jalil", "puchong", "sri-petaling", "cyberjaya"],
    eta: [60, 90],
    geo: {
      lat: 3.0223,
      lng: 101.7073,
    },
  },
  {
    slug: "sungai-buloh",
    state: "Selangor",
    nearby: ["kota-damansara", "kepong", "rawang", "desa-parkcity"],
    eta: [60, 90],
    geo: {
      lat: 3.2083,
      lng: 101.5781,
    },
  },
  {
    slug: "damansara",
    state: "Selangor",
    nearby: ["petaling-jaya", "taman-tun-dr-ismail", "kota-damansara", "ara-damansara", "bangsar"],
    eta: [45, 75],
    geo: {
      lat: 3.1362,
      lng: 101.6203,
    },
  },
  {
    slug: "kota-damansara",
    state: "Selangor",
    nearby: ["damansara", "sungai-buloh", "taman-tun-dr-ismail", "petaling-jaya"],
    eta: [60, 90],
    geo: {
      lat: 3.1563,
      lng: 101.5874,
    },
  },
  {
    slug: "ara-damansara",
    state: "Selangor",
    nearby: ["subang-jaya", "petaling-jaya", "glenmarie", "damansara", "shah-alam"],
    eta: [60, 90],
    geo: {
      lat: 3.1133,
      lng: 101.5862,
    },
  },
  {
    slug: "setia-alam",
    state: "Selangor",
    nearby: ["shah-alam", "klang", "glenmarie"],
    eta: [75, 120],
    geo: {
      lat: 3.1053,
      lng: 101.4633,
    },
  },
  {
    slug: "rawang",
    state: "Selangor",
    nearby: ["selayang", "sungai-buloh", "kepong"],
    eta: [75, 120],
    geo: {
      lat: 3.3213,
      lng: 101.5767,
    },
  },
  {
    slug: "selayang",
    state: "Selangor",
    nearby: ["kepong", "sentul", "setapak", "rawang"],
    eta: [60, 90],
    geo: {
      lat: 3.2497,
      lng: 101.6503,
    },
  },
  {
    slug: "semenyih",
    state: "Selangor",
    nearby: ["kajang", "bangi", "cheras-selangor"],
    eta: [75, 120],
    geo: {
      lat: 2.9512,
      lng: 101.8432,
    },
  },
  {
    slug: "cheras-selangor",
    state: "Selangor",
    nearby: ["cheras", "balakong", "kajang", "ampang"],
    eta: [60, 90],
    geo: {
      lat: 3.0503,
      lng: 101.7752,
    },
  },
  {
    slug: "balakong",
    state: "Selangor",
    nearby: ["seri-kembangan", "cheras-selangor", "kajang", "cheras"],
    eta: [60, 90],
    geo: {
      lat: 3.0302,
      lng: 101.7483,
    },
  },
  {
    slug: "bandar-sunway",
    state: "Selangor",
    nearby: ["subang-jaya", "petaling-jaya", "usj", "puchong"],
    eta: [60, 90],
    geo: {
      lat: 3.0683,
      lng: 101.6043,
    },
  },
  {
    slug: "glenmarie",
    state: "Selangor",
    nearby: ["shah-alam", "subang-jaya", "ara-damansara", "usj"],
    eta: [60, 90],
    geo: {
      lat: 3.0932,
      lng: 101.5753,
    },
  },
];
