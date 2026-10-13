import type { Dictionary } from "./en";

// Bahasa Melayu (Malaysia) interface text. Mirrors en.ts key for key.

const ms: Dictionary = {
  meta: {
    siteTitle: "Tukang Elektrik KL & Selangor | KL Electrician",
    siteDescription:
      "Tukang elektrik hari yang sama di KL & Selangor: elektrik trip, wiring rumah, DB box, lampu, plug point dan water heater. Harga jelas, jaminan 12 bulan.",
    tagline: "Tukang elektrik hari yang sama untuk rumah dan perniagaan di Kuala Lumpur dan Lembah Klang",
  },
  hours: {
    display: "Isnin–Ahad, 8:00 pagi – 10:00 malam",
    short: "Buka setiap hari 8 pagi–10 malam",
  },
  whatsapp: {
    default: "Hai KL Electrician, saya perlukan tukang elektrik. Boleh bantu?",
    service: (name: string) => `Hai KL Electrician, saya perlukan bantuan untuk: ${name}.`,
    area: (name: string) => `Hai KL Electrician, saya perlukan tukang elektrik di ${name}.`,
    price: "Hai KL Electrician, boleh saya dapatkan harga untuk kerja ini?",
    question: "Hai KL Electrician, saya ada soalan:",
    guide: (title: string) => `Hai KL Electrician, saya baca panduan "${title}" dan ada soalan.`,
  },
  nav: {
    services: "Servis",
    pricing: "Harga",
    areas: "Kawasan",
    areasLong: "Kawasan liputan kami",
    reviews: "Ulasan",
    guides: "Panduan",
    faq: "Soalan Lazim",
    about: "Tentang Kami",
    contact: "Hubungi",
    privacy: "Privasi",
    priceList: "Senarai harga",
    home: "Utama",
    main: "Utama",
    breadcrumb: "Laluan navigasi",
    allServices: "Semua servis",
    viewAllServices: (n: number) => `Lihat semua ${n} servis`,
    allAreas: (n: number) => `Semua ${n} kawasan`,
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    menu: "Menu laman",
    language: "Bahasa",
    quickContact: "Hubungi segera",
  },
  cta: {
    whatsapp: "WhatsApp",
    whatsappUs: "WhatsApp kami",
    whatsappQuote: "WhatsApp untuk sebut harga",
    heroWhatsapp: "Dapatkan sebut harga di WhatsApp",
    call: "Telefon",
    callNumber: (n: string) => `Telefon ${n}`,
    prices: "Harga",
    sameDayBar: "Servis hari yang sama di seluruh KL & Selangor",
    sameDayHours: (hours: string) => `Servis hari yang sama · ${hours}`,
  },
  price: {
    from: (p: string) => `dari ${p}`,
    fromCap: (p: string) => `Dari ${p}`,
    job: "Kerja",
    priceRM: "Harga (RM)",
    detailsPrices: "Butiran & harga",
    units: {
      visit: "setiap lawatan",
      job: "setiap kerja",
      switch: "setiap suis",
      socket: "setiap plug",
      point: "setiap point",
      circuit: "setiap litar",
      room: "setiap bilik",
      unit: "setiap unit",
      house: "setiap rumah",
      breaker: "setiap breaker",
      board: "setiap DB box",
      fan: "setiap kipas",
      light: "setiap lampu",
      fixture: "setiap lampu",
      install: "setiap pemasangan",
      test: "setiap ujian",
      regulator: "setiap regulator",
      fitting: "setiap set",
      premises: "setiap premis",
    },
  },
  states: {
    "Kuala Lumpur": "Kuala Lumpur",
    Selangor: "Selangor",
    Putrajaya: "Putrajaya",
  },
  eta: (min: number, max: number) => `${min}–${max} minit`,
  etaShort: (min: number, max: number) => `${min}–${max} min`,
  promises: {
    sameDay: { title: "Servis hari yang sama", text: "Tempah waktu pagi, siap pada hari yang sama" },
    upfront: { title: "Harga jelas dari awal", text: "Sebut harga tetap sebelum kerja bermula" },
    warranty: (m: number) => ({ title: `Jaminan ${m} bulan`, text: "Untuk semua mutu kerja kami" }),
    experience: (y: number) => ({ title: `${y} tahun pengalaman`, text: "Rumah, kondo dan kedai" }),
    trustLabel: "Kenapa pelanggan pilih kami",
  },
  process: {
    eyebrow: "Cara ia berfungsi",
    title: "Tiga langkah mudah",
    steps: (visit: string, months: number) => [
      {
        title: "Hantar gambar",
        text: "WhatsApp masalah dan kawasan anda kepada kami. Kebanyakan kerja dapat anggaran harga dalam beberapa minit.",
      },
      {
        title: "Kami datang hari yang sama",
        text: `Tukang elektrik kami periksa masalah dan beri anda harga tetap. Caj lawatan bermula ${visit}.`,
      },
      {
        title: "Dibaiki dan diuji",
        text: `Kerja hanya bermula selepas anda setuju. Semua kerja diuji dan dilindungi jaminan ${months} bulan.`,
      },
    ],
  },
  home: {
    metaTitle: "Tukang Elektrik KL & Selangor | Servis Hari Yang Sama",
    metaDescription:
      "Tukang elektrik hari yang sama di KL & Selangor: elektrik trip, wiring rumah, tukar DB box, lampu, plug point, water heater. Lawatan RM80, jaminan 12 bulan.",
    h1: "Tukang Elektrik di Kuala Lumpur & Selangor",
    sub: "Kerja baiki, wiring dan pemasangan untuk rumah, kondo dan kedai. Harga tetap sebelum kami mula.",
    rating: (n: number) => `daripada ${n} ulasan`,
    carouselLabel: "Servis elektrik kami",
    showSlide: (label: string) => `Lihat ${label}`,
    slides: {
      tripping: "Baiki elektrik trip & DB box",
      lighting: "Pasang lampu & downlight",
      wiring: "Wiring & tambah plug point",
      ev: "Pasang EV charger",
    },
    servicesEyebrow: "Servis",
    servicesTitle: "Apa yang perlu dibaiki?",
    allServices: (n: number) => `Semua ${n} servis`,
    pricesEyebrow: "Harga",
    pricesTitle: "Tahu harga sebelum kami mula",
    pricesText: (visit: string) =>
      `Setiap lawatan bermula ${visit}. Di lokasi, anda dapat sebut harga tetap dan buat keputusan sebelum sebarang kerja dimulakan.`,
    pricesPoints: [
      "Termasuk kabel, suis dan plug standard",
      "Tiada caj perjalanan atau parkir",
      "Bayar selepas kerja siap",
    ],
    pricesCaption: "Harga tukang elektrik yang popular di Kuala Lumpur",
    fullPriceList: "Senarai harga penuh",
    areasEyebrow: "Kawasan",
    areasTitle: "Meliputi seluruh Lembah Klang",
    areasText: "Kuala Lumpur, Selangor dan Putrajaya. Harga sama di semua kawasan.",
    faqEyebrow: "Soalan Lazim",
    faqTitle: "Soalan yang selalu ditanya",
    faqText: "Ada soalan lain? Tanya kami di WhatsApp.",
    allFaqs: "Semua soalan",
  },
  ctaBand: {
    title: "Perlukan tukang elektrik hari ini?",
    text: "Hantar gambar di WhatsApp dan dapatkan harga dalam beberapa minit. Lawatan hari yang sama di seluruh KL dan Selangor.",
    areaTitle: (name: string) => `Perlukan tukang elektrik di ${name} hari ini?`,
    servicesTitle: "Tak jumpa kerja yang anda perlukan?",
    servicesText:
      "Kami buat kebanyakan kerja elektrik untuk rumah dan perniagaan kecil. WhatsApp gambar kepada kami dan kami akan beritahu sama ada kami boleh bantu dan berapa kosnya.",
    areasTitle: "Tak pasti kawasan anda diliputi?",
    areasText:
      "WhatsApp lokasi anda kepada kami. Jika anda berada di mana-mana dalam Lembah Klang, jawapannya hampir pasti ya.",
  },
  sidebar: {
    text: "Hantar gambar di WhatsApp untuk harga, atau telefon untuk tempah.",
    points: (months: number, hours: string) => [
      "Servis hari yang sama",
      "Sebut harga tetap sebelum kerja bermula",
      `Jaminan ${months} bulan`,
      hours,
    ],
  },
  reviews: {
    eyebrow: "Ulasan",
    title: "Kata pelanggan kami",
    areaTitle: (name: string) => `Ulasan dari ${name} dan kawasan berdekatan`,
    basedOn: (n: number) => `Berdasarkan ${n} ulasan pelanggan`,
    readAll: "Baca semua ulasan",
    stars: (n: number) => `${n} daripada 5 bintang`,
    google: "Ulasan Google",
    metaTitle: "Ulasan Pelanggan Tukang Elektrik KL",
    metaDescription:
      "Apa kata pelanggan di Kuala Lumpur, Petaling Jaya, Subang Jaya, Shah Alam dan seluruh Lembah Klang tentang servis tukang elektrik KL Electrician.",
    h1: "Ulasan pelanggan",
    intro: "Maklum balas daripada pemilik rumah, tuan rumah dan pemilik kedai di seluruh Lembah Klang.",
    leaveText: "Pernah guna servis kami? Kami hargai maklum balas anda.",
    leave: "Tulis ulasan Google",
  },
  service: {
    priceFrom: "Harga dari",
    service: "Servis",
    sameDay: "Hari yang sama",
    warranty: "Jaminan",
    months: (m: number) => `${m} bulan`,
    imageAlt: (name: string) => `${name} oleh KL Electrician`,
    signsTitle: (name: string) => `Tanda anda perlukan servis ${name}`,
    costTitle: (name: string) => `Berapa harga ${name} di KL?`,
    costText: (name: string, updated: string) =>
      `Harga terkini kami untuk ${name} di Kuala Lumpur dan Selangor (dikemas kini ${updated}). Anda dapat sebut harga tetap di lokasi sebelum sebarang kerja dimulakan.`,
    pricesCaption: (name: string) => `Harga ${name}`,
    seeFullList: "Lihat senarai harga penuh",
    included: "Apa yang termasuk",
    areasTitle: "Kawasan liputan kami",
    faqTitle: (name: string) => `${name}: soalan lazim`,
    quoteTitle: (name: string) => `Dapatkan sebut harga ${name}`,
    related: "Servis berkaitan",
  },
  services: {
    metaTitle: "Servis Tukang Elektrik KL & Selangor",
    metaDescription:
      "Servis elektrik di KL & Selangor: baiki trip, tukar wiring, DB box, lampu, kipas siling, water heater, hood dapur, EV charger dan pemeriksaan. Harga dari RM40.",
    h1: "Servis elektrik di Kuala Lumpur & Selangor",
    intro: (n: number) =>
      `${n} servis untuk rumah, kondo dan kedai, daripada satu plug point hingga tukar wiring seluruh rumah. Setiap kerja diberi sebut harga sebelum kami mula, diuji sebelum kami pulang dan dilindungi jaminan mutu kerja kami.`,
    categoriesLabel: "Kategori servis",
    listName: "Servis elektrik oleh KL Electrician",
  },
  area: {
    metaTitle: (name: string, state: string) => `Tukang Elektrik ${name}, ${state}: Servis Hari Yang Sama`,
    metaDescription: (name: string, visit: string, months: number) =>
      `Tukang elektrik hari yang sama di ${name}: elektrik trip, wiring, DB box, lampu, water heater. Harga jelas, lawatan ${visit}, jaminan ${months} bulan. WhatsApp kami.`,
    eyebrow: (state: string) => `${state} · Tukang elektrik berdekatan anda`,
    h1: (name: string) => `Tukang Elektrik ${name}`,
    imageAlt: (name: string) => `Tukang elektrik sedang bekerja di sebuah rumah di ${name}`,
    arrival: "Tiba dalam",
    visitFrom: "Lawatan dari",
    localTitle: (name: string) => `Masalah yang kami selalu jumpa di rumah sekitar ${name}`,
    coverageTitle: (name: string) => `Taman dan kawasan yang kami liputi di ${name}`,
    landmarks: (list: string) => `Termasuk rumah dan kedai di sekitar ${list}.`,
    servicesTitle: (name: string) => `Servis elektrik di ${name}`,
    seeAll: (n: number) => `Lihat semua ${n} servis`,
    pricesTitle: (name: string) => `Harga tukang elektrik di ${name}`,
    pricesText: (name: string) =>
      `Harga sama seperti di semua kawasan lain yang kami liputi. Tiada caj tambahan untuk perjalanan ke ${name}.`,
    faqTitle: (name: string) => `Tukang elektrik di ${name}: soalan lazim`,
    bookTitle: (name: string) => `Tempah tukang elektrik di ${name}`,
    nearby: "Kawasan berdekatan",
    linkName: (name: string) => `Tukang Elektrik ${name}`,
    faqCost: (name: string, visit: string, examples: string) => ({
      q: `Berapa harga tukang elektrik di ${name}?`,
      a: `Setiap lawatan di ${name} ada caj minimum ${visit}. Contoh harga biasa: ${examples}. Anda dapat sebut harga tetap sebelum kerja bermula.`,
    }),
    faqSameDay: (name: string) => ({
      q: `Ada servis hari yang sama di ${name}?`,
      a: `Ya. Kerja di ${name} yang ditempah waktu pagi biasanya siap pada hari yang sama. Kami bekerja setiap hari dari 8 pagi hingga 10 malam. WhatsApp gambar masalah kepada kami untuk slot paling awal.`,
    }),
    faqEta: (name: string, eta: string) => ({
      q: `Berapa cepat anda boleh sampai ke ${name}?`,
      a: `Masa ketibaan biasa kami di ${name} ialah ${eta}, bergantung pada trafik dan tahap kesegeraan kerja. WhatsApp lokasi tepat anda dan kami akan beri anggaran masa tiba semasa tempahan.`,
    }),
  },
  areas: {
    metaTitle: "Kawasan Liputan di KL, Selangor & Putrajaya",
    metaDescription:
      "Tukang elektrik di Lembah Klang: Kuala Lumpur, Petaling Jaya, Subang Jaya, Shah Alam, Klang, Puchong, Cheras, Kajang, Cyberjaya, Putrajaya dan lain-lain.",
    h1: "Kawasan servis tukang elektrik di Lembah Klang",
    intro: (n: number) =>
      `Kami meliputi ${n} kawasan di Kuala Lumpur, Selangor dan Putrajaya dengan harga yang sama di semua tempat dan tanpa caj perjalanan tambahan. Pilih kawasan anda untuk melihat masa ketibaan, masalah biasa dan soalan lazim.`,
    arrival: (eta: string) => `Biasanya tiba dalam ${eta}`,
  },
  pricing: {
    metaTitle: "Senarai Harga Tukang Elektrik KL 2026",
    metaDescription:
      "Harga tukang elektrik KL & Selangor: lawatan minimum RM80, plug point dari RM150, DB box dari RM1,000, water heater dari RM150, wiring rumah dari RM6,000.",
    h1: "Senarai harga tukang elektrik KL & Selangor (2026)",
    intro: (visit: string) =>
      `Setiap lawatan ada caj minimum ${visit}. Di bawah ialah harga kami untuk kerja elektrik biasa. Harga akhir bergantung pada apa yang kami jumpa, dan anda sentiasa luluskan sebut harga tetap sebelum kami mula.`,
    updated: (date: string) => `Kali terakhir dikemas kini ${date}. Semua harga dalam Ringgit Malaysia.`,
    categoriesLabel: "Kategori harga",
    includesTitle: "Apa yang termasuk dalam harga kami",
    faqTitle: "Soalan tentang harga",
    sidebarTitle: "Dapatkan harga tepat",
  },
  faqPage: {
    metaTitle: "Soalan Lazim: Harga, Trip, Wiring & Tempahan",
    metaDescription:
      "Jawapan jelas tentang tukang elektrik di KL & Selangor: harga, lawatan hari yang sama, elektrik trip, plug berpercik, tukar wiring, water heater dan EV charger.",
    h1: "Soalan lazim",
    intro:
      "Jawapan jelas tentang tempahan, harga, jaminan dan masalah elektrik yang paling kerap kami jumpa di rumah sekitar Lembah Klang.",
    sidebarTitle: "Masih ada soalan?",
  },
  guides: {
    metaTitle: "Panduan Elektrik & Kos untuk Rumah Malaysia",
    metaDescription:
      "Panduan daripada tukang elektrik Lembah Klang: kos wiring rumah, kenapa elektrik rumah selalu trip, tukar 3 phase, EV charger dan keselamatan water heater.",
    h1: "Panduan untuk pemilik rumah di Malaysia",
    intro:
      "Harga, peraturan dan cara penyelesaian praktikal, ditulis oleh tukang elektrik yang buat kerja ini setiap hari di Kuala Lumpur dan Selangor.",
    minRead: (n: number) => `${n} minit bacaan`,
    by: "Oleh pasukan KL Electrician",
    updated: "Dikemas kini",
    shortAnswer: "Jawapan ringkas",
    inThisGuide: "Dalam panduan ini",
    faqTitle: "Soalan lazim",
    talk: "Tanya tukang elektrik kami",
    more: "Panduan lain",
    servicesMentioned: "Servis yang disebut dalam panduan ini",
    categories: {
      cost: "Panduan kos",
      troubleshooting: "Cari punca masalah",
      safety: "Keselamatan",
      buying: "Panduan membeli",
    },
  },
  about: {
    metaTitle: "Tentang Kami",
    metaDescription:
      "KL Electrician membuat kerja baiki elektrik, wiring dan pemasangan di KL, Selangor dan Putrajaya. Servis hari yang sama, sebut harga tetap, jaminan 12 bulan.",
    h1: "Kerja elektrik yang dibuat dengan betul, dari kali pertama",
    p1: (years: number) =>
      `KL Electrician menjalankan kerja baiki elektrik, wiring dan pemasangan untuk rumah, kondo dan kedai di seluruh Kuala Lumpur, Selangor dan Putrajaya. Pasukan kami membawa ${years} tahun pengalaman ke dalam setiap kerja.`,
    p2: "Cara kami mudah: harga yang jelas, lawatan hari yang sama, kerja yang kemas dan jaminan yang boleh diharap.",
    imageAlt: "Tukang elektrik KL Electrician sedang bekerja",
    eyebrow: "Cara kami bekerja",
    title: "Apa yang anda boleh harapkan",
    promises: (months: number) => [
      { title: "Servis hari yang sama", text: "Tempah waktu pagi dan kebanyakan kerja siap pada hari yang sama." },
      {
        title: "Harga yang kami beri ialah harga yang anda bayar",
        text: "Sebut harga tetap sebelum kerja. Jika kami jumpa masalah lain, kami tanya anda dulu.",
      },
      {
        title: "Dibuat dengan betul",
        text: "Breaker dan kabel berkualiti, perlindungan RCD yang betul, setiap litar diuji.",
      },
      {
        title: `Jaminan ${months} bulan`,
        text: "Jika mutu kerja kami bermasalah, kami datang semula dan baiki secara percuma.",
      },
      {
        title: "Kami tinggalkan dalam keadaan bersih",
        text: "Kain alas dihampar, sisa kerja dibuang, perabot diletak semula di tempatnya.",
      },
      {
        title: "Nasihat yang jujur",
        text: "Jika membaiki lebih berbaloi daripada menukar baru, kami akan beritahu anda.",
      },
    ],
    pricesTitle: "Lihat caj kami",
    pricesText: "Senarai harga kami terbuka kepada umum, jadi anda tahu apa yang dijangka.",
    pricesButton: "Lihat senarai harga",
    schemaName: "Tentang KL Electrician",
  },
  contact: {
    metaTitle: "Hubungi & Tempah Tukang Elektrik di KL",
    metaDescription:
      "Tempah tukang elektrik di KL atau Selangor. WhatsApp atau telefon untuk sebut harga, atau isi borang tempahan. Servis hari yang sama, buka 8 pagi–10 malam.",
    h1: "Hubungi kami atau tempah tukang elektrik",
    intro:
      "WhatsApp ialah cara paling cepat untuk hubungi kami. Hantar lokasi anda dan gambar masalah, dan kami akan balas dengan anggaran harga dan masa paling awal kami boleh datang.",
    schemaName: "Hubungi KL Electrician",
    whatsappTitle: "WhatsApp (paling cepat)",
    whatsappNote: "Hantar gambar atau video untuk harga segera",
    callTitle: "Telefon",
    callNote: "Dijawab setiap hari, 8 pagi–10 malam",
    emailTitle: "E-mel",
    emailNote: "Untuk sebut harga projek yang lebih besar",
    hoursTitle: "Waktu operasi",
    hoursNote: "Servis hari yang sama di seluruh Lembah Klang",
    coverageTitle: "Kawasan liputan",
    coverageValue: "Kuala Lumpur, Selangor & Putrajaya",
    coverageNote: "Servis bergerak. Kami datang ke lokasi anda; tiada kedai untuk dikunjungi.",
  },
  form: {
    title: "Tempah tukang elektrik",
    intro:
      "Isi borang ini dan kami akan hubungi anda dengan harga dan masa, biasanya dalam 30 minit (8 pagi–10 malam).",
    honeypot: "Syarikat",
    name: "Nama anda",
    namePlaceholder: "cth. Aisyah",
    phone: "Telefon / WhatsApp",
    service: "Servis",
    servicePlaceholder: "Pilih servis",
    area: "Kawasan",
    areaPlaceholder: "Pilih kawasan anda",
    property: "Jenis premis",
    choose: "Pilih satu",
    properties: [
      "Kondo / apartmen",
      "Rumah teres / rumah berangkai",
      "Semi-D / banglo",
      "Kedai / pejabat",
      "Lain-lain",
    ],
    when: "Bila anda perlukan kami?",
    times: ["Secepat mungkin", "Hari ini", "Esok", "Minggu ini", "Hujung minggu"],
    email: "E-mel (pilihan)",
    message: "Apa masalahnya?",
    messagePlaceholder: "cth. Suis utama trip bila hujan. Rumah teres setingkat di SS2.",
    messageHint: "Sertakan jenama atau model jika ia melibatkan peralatan elektrik.",
    sending: "Menghantar…",
    send: "Hantar permintaan tempahan",
    privacy: "Kami hanya guna maklumat anda untuk membalas permintaan ini. Lihat",
    privacyLink: "dasar privasi kami",
    successTitle: "Permintaan diterima",
    successText:
      "Terima kasih. Kami akan telefon atau WhatsApp anda sebentar lagi untuk sahkan harga dan masa. Untuk hal yang mendesak, mesej kami terus.",
    successButton: "Mesej kami di WhatsApp",
    successMessage: "Hai KL Electrician, saya baru hantar permintaan tempahan:",
    unconfigured:
      "Tempahan dalam talian belum disambungkan. Tekan di bawah untuk hantar butiran yang sama melalui WhatsApp.",
    unconfiguredMessage: "Hai KL Electrician, saya ingin membuat tempahan:",
    sendWhatsapp: "Hantar melalui WhatsApp",
    errors: {
      name: "Sila masukkan nama anda.",
      phone: "Sila masukkan nombor telefon Malaysia yang sah, cth. 012-345 6789.",
      message: "Beritahu kami secara ringkas apa masalahnya.",
      check: "Sila semak ruangan yang ditanda.",
      failed: "Maaf, permintaan anda tidak dapat dihantar. Sila WhatsApp atau telefon kami.",
    },
  },
  footer: {
    blurb:
      "Kerja baiki elektrik, wiring dan pemasangan di seluruh Kuala Lumpur, Selangor dan Putrajaya. Servis hari yang sama dan harga yang jelas dari awal.",
    services: "Servis",
    areas: "Kawasan",
    company: "Syarikat",
    languages: "Bahasa",
    currency: "Semua harga dalam Ringgit Malaysia (RM)",
  },
  notFound: {
    title: "Halaman ini dah trip",
    text: "Halaman yang anda cari tidak wujud atau telah dipindahkan. Cuba salah satu pautan ini.",
    home: "Kembali ke laman utama",
    services: "Semua servis",
  },
  privacy: {
    metaTitle: "Dasar Privasi",
    metaDescription:
      "Cara KL Electrician mengumpul, menggunakan dan melindungi data peribadi anda di bawah Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.",
    h1: "Dasar privasi",
    updated: "Kali terakhir dikemas kini 1 Oktober 2026",
    intro: (company: string) =>
      `Dasar ini menerangkan cara ${company} ("kami") mengendalikan data peribadi selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.`,
    sections: [
      {
        heading: "Apa yang kami kumpul",
        body: [
          "Apabila anda menghubungi kami melalui WhatsApp, telefon, e-mel atau borang tempahan, kami mengumpul maklumat yang anda berikan: nama, nombor telefon, alamat e-mel, alamat atau kawasan servis, serta butiran atau gambar kerja.",
        ],
      },
      {
        heading: "Cara kami menggunakannya",
        bullets: [
          "Untuk membalas pertanyaan anda, memberi sebut harga, menjadualkan dan menjalankan kerja.",
          "Untuk mengeluarkan resit, laporan ujian dan rekod jaminan.",
          "Untuk menghubungi anda tentang kerja yang anda tempah. Kami tidak menghantar bahan pemasaran tanpa persetujuan anda.",
        ],
      },
      {
        heading: "Analitik dan kuki",
        body: [
          "Kami menggunakan Google Analytics untuk memahami cara pelawat menggunakan laman ini (contohnya, halaman yang dilihat dan sama ada butang WhatsApp atau telefon digunakan). Ia menggunakan kuki dan mengumpul data penggunaan tanpa nama. Anda boleh menyekat kuki dalam tetapan pelayar anda.",
        ],
      },
      {
        heading: "Dengan siapa kami berkongsi",
        body: [
          "Kami tidak menjual data anda. Kami hanya berkongsi apabila perlu untuk menjalankan kerja (contohnya, dengan TNB atau pengurusan bangunan anda untuk pemasangan yang diluluskan) atau apabila dikehendaki oleh undang-undang. Data borang tempahan disimpan dengan selamat bersama penyedia pangkalan data kami.",
        ],
      },
      {
        heading: "Berapa lama kami menyimpannya",
        body: [
          "Rekod kerja disimpan sehingga tujuh tahun untuk tujuan jaminan, cukai dan rekod keselamatan. Pertanyaan yang tidak membawa kepada kerja akan dipadam dalam tempoh 12 bulan.",
        ],
      },
    ],
    rightsTitle: "Hak anda",
    rights:
      "Anda boleh meminta untuk melihat, membetulkan atau memadam data peribadi anda yang kami simpan. E-mel atau WhatsApp kami:",
  },
};

export default ms;
