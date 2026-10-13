import type { FaqGroup } from "@/lib/types";

// Soalan lazim seluruh laman (halaman FAQ, laman utama, halaman harga).
// Susunan kumpulan dan soalan mesti sama dengan versi Inggeris: laman utama
// memilih soalan mengikut kedudukan (lihat homeFaqPicks dalam src/lib/content.ts).

export const faqGroups: FaqGroup[] = [
  {
    id: "booking",
    title: "Tempahan & ketibaan",
    faqs: [
      {
        q: "Ada servis hari yang sama?",
        a: "Ya. Kebanyakan kerja yang ditempah waktu pagi siap pada hari yang sama di seluruh Kuala Lumpur dan Selangor. WhatsApp kawasan anda dan gambar masalah kepada kami, dan kami akan beri slot paling awal.",
      },
      {
        q: "Bila waktu operasi anda?",
        a: "Kami bekerja setiap hari dari 8 pagi hingga 10 malam, termasuk hujung minggu. Kami tiada servis waktu malam: jika ada kerosakan selepas 10 malam, tutup litar yang terlibat jika selamat dan mesej kami untuk slot pertama keesokan paginya.",
      },
      {
        q: "Kawasan mana yang anda liputi?",
        a: "Seluruh Kuala Lumpur, kebanyakan kawasan Selangor (Petaling Jaya, Subang Jaya, Shah Alam, Klang, Puchong, Kajang, Bangi, Cyberjaya, Rawang dan lain-lain) serta Putrajaya. Harga sama di semua kawasan. Tak pasti? Hantar lokasi anda kepada kami.",
      },
      {
        q: "Bagaimana cara untuk tempah?",
        a: "Cara paling cepat ialah WhatsApp: hantar lokasi anda, penerangan ringkas dan gambar atau video masalah. Anda juga boleh telefon atau guna borang tempahan di halaman hubungi kami.",
      },
      {
        q: "Bagaimana nak pilih tukang elektrik yang bagus di KL?",
        a: "Cari lima perkara: harga yang boleh dilihat sebelum tempah, sebut harga tetap sebelum kerja bermula, ujian yang betul menggunakan meter dan bukan cuba-cuba, jaminan mutu kerja secara bertulis, dan ulasan Google terkini daripada pelanggan sebenar. Elakkan sesiapa yang tidak mahu beri harga sehingga kerja siap.",
      },
      {
        q: "Adakah anda terima kerja kecil, seperti satu plug atau satu lampu?",
        a: "Ya. Setiap lawatan ada caj minimum RM80, jadi jika anda ada beberapa kerja kecil, seperti plug, suis dan lampu, senaraikan semuanya dalam satu mesej WhatsApp dan kami akan beri sebut harga sekali gus untuk satu lawatan.",
      },
    ],
  },
  {
    id: "prices",
    title: "Harga & bayaran",
    faqs: [
      {
        q: "Berapa harga upah tukang elektrik di KL?",
        a: "Setiap lawatan ada caj minimum RM80, yang merangkumi perjalanan dan mencari punca masalah. Contoh harga biasa: baiki elektrik trip RM150–RM400, plug point baru dari RM150, pasang water heater dari RM150 dan tukar DB box dari RM1,000. Senarai harga penuh kami terbuka kepada umum.",
      },
      {
        q: "Adakah saya dapat harga tetap sebelum kerja bermula?",
        a: "Ya. Kami periksa masalah, terangkan dengan bahasa yang mudah dan beri anda harga tetap. Kerja hanya bermula selepas anda setuju. Jika kami jumpa masalah lain, kami tanya anda dulu.",
      },
      {
        q: "Adakah caj lawatan RM80 dikecualikan jika saya teruskan kerja?",
        a: "Tidak. RM80 ialah caj minimum untuk setiap lawatan dan merangkumi perjalanan serta pemeriksaan, jadi anda tahu jumlah paling rendah yang perlu dibayar sebelum kami sampai. Kami pilih cara yang mudah dan telus, bukan menyorokkan kos dalam harga kerja.",
      },
      {
        q: "Kenapa harga anda lebih tinggi daripada sesetengah sebut harga di internet?",
        a: "Harga kami sudah termasuk ujian yang betul, bahan standard, kemas selepas kerja dan jaminan mutu kerja 12 bulan. Sebut harga yang sangat rendah selalunya tidak termasuk kerja pasang, kabel atau ujian, kemudian ditambah pada hari kerja. Kami lebih suka tunjuk harga sebenar dari awal.",
      },
      {
        q: "Apakah kaedah bayaran yang diterima?",
        a: "Kami terima tunai, pindahan bank, DuitNow QR dan Touch 'n Go eWallet. Anda bayar selepas kerja siap dan diuji. Projek yang lebih besar dibayar mengikut peringkat yang dipersetujui.",
      },
      {
        q: "Boleh saya beli sendiri lampu, kipas atau water heater?",
        a: "Boleh. Kebanyakan pelanggan beli sendiri dan kami pasangkan. Kami juga boleh bekalkan pada harga kos dengan resit ditunjukkan.",
      },
    ],
  },
  {
    id: "warranty",
    title: "Jaminan, kondo & ubah suai",
    faqs: [
      {
        q: "Apakah jaminan yang anda beri?",
        a: "Semua mutu kerja kami ada jaminan 12 bulan. Jika kerja yang kami buat rosak semula disebabkan kerja kami, kami datang semula dan baiki secara percuma. Alat ganti dilindungi jaminan pengeluar.",
      },
      {
        q: "Adakah anda buat kerja di kondo?",
        a: "Ya, selalu. Kami ikut permit ubah suai, waktu kerja dan peraturan tempahan lif pejabat pengurusan (JMB/MC) anda, dan buat kerja yang bising hanya dalam waktu yang dibenarkan.",
      },
      {
        q: "Adakah anda bekerjasama dengan pereka dalaman dan kontraktor ubah suai?",
        a: "Ya. Kami tandakan kedudukan point baru bersama anda dan kontraktor anda, tarik wiring sebelum dinding dan siling ditutup, dan uji setiap litar sebelum serah kunci.",
      },
    ],
  },
  {
    id: "problems",
    title: "Masalah elektrik biasa",
    faqs: [
      {
        q: "Kenapa elektrik rumah saya selalu trip?",
        a: "Biasanya disebabkan peralatan yang rosak (selalunya water heater, peti sejuk atau mesin basuh), air hujan masuk ke lampu atau plug luar rumah, wiring lama, atau litar yang terlebih beban. Kami uji setiap litar untuk cari punca sebenar, bukan sekadar naikkan semula suis.",
      },
      {
        q: "Kenapa RCCB trip bila hujan atau kilat?",
        a: "Trip semasa hujan hampir selalu bermaksud air sampai ke bahagian yang ada arus elektrik: lampu luar, plug di porch, point taman atau sambungan kabel di bumbung. Trip semasa kilat biasanya disebabkan lonjakan voltan (surge). Kami cari point yang basah, kemudian kedapkan atau tukar, dan boleh pasang surge protector (SPD).",
      },
      {
        q: "RCCB trip tapi MCB tidak. Apa maksudnya?",
        a: "Ia biasanya bermaksud ada arus yang bocor ke bumi. RCCB bertindak apabila arus bocor ke bumi, manakala MCB bertindak apabila litar terlebih beban atau berlaku litar pintas. Kebocoran selalunya datang daripada elemen water heater, point yang basah atau penebat kabel yang rosak. Ujian penebat (insulation test) akan tunjukkan litar mana yang bermasalah.",
      },
      {
        q: "Apa beza ELCB dan RCCB?",
        a: "Kedua-duanya memutuskan bekalan elektrik apabila arus bocor ke bumi. ELCB jenis lama (voltage-operated) kurang boleh diharap dan tidak lagi digunakan; RCCB moden mengukur kebocoran secara terus dan merupakan pilihan yang betul. Jika DB box anda masih guna ELCB lama, kos untuk tukar ialah RM250–RM450.",
      },
      {
        q: "Kenapa plug berpercik bila saya cucuk peralatan?",
        a: "Percikan kecil semasa mencucuk peralatan yang suisnya sudah dihidupkan boleh jadi perkara biasa. Bunyi letupan kuat, percikan berulang, bau terbakar atau kesan hangus coklat bermaksud plug itu longgar atau haus dan sedang terlalu panas. Berhenti guna plug itu dan tutup litarnya.",
      },
      {
        q: "Plug berbau terbakar. Apa yang perlu saya buat?",
        a: "Berhenti guna plug itu, tutup suisnya di DB box jika selamat, dan hubungi kami. Bau terbakar biasanya bermaksud ada sambungan longgar yang terlalu panas, dan ia perlu dibaiki pada hari yang sama.",
      },
      {
        q: "Separuh rumah saya tiada elektrik. Kenapa?",
        a: "Biasanya kerana MCB atau RCCB di DB box telah trip, jadi periksa DB box dahulu. Jika tiada yang trip, mungkin ada sambungan longgar, breaker rosak atau, bagi rumah 3 phase, satu fasa hilang. Jika seluruh jalan gelap, hubungi TNB di 15454.",
      },
      {
        q: "Kenapa lampu rumah saya berkelip?",
        a: "Satu lampu yang berkelip biasanya ada driver LED atau mentol yang hampir rosak, atau sambungan longgar. Jika beberapa lampu berkelip serentak, atau lampu jadi malap bila aircond dihidupkan, mungkin ada neutral yang longgar. Ini perlu diperiksa segera kerana ia boleh merosakkan peralatan elektrik.",
      },
      {
        q: "Adakah water heater saya perlukan RCCB 10mA?",
        a: "Ya. Water heater jenis segera (instant) di rumah Malaysia patut dilindungi oleh RCCB 10mA khas, yang trip lebih cepat daripada RCCB utama 30mA. Kos untuk tambah satu pada point water heater sedia ada ialah RM250–RM450.",
      },
      {
        q: "Boleh saya tambah plug point dari suis lampu?",
        a: "Kami tidak mengesyorkannya. Litar lampu menggunakan kabel yang lebih halus dan breaker yang lebih kecil, jadi plug yang disambung padanya boleh jadi terlalu panas apabila cerek atau pemanas dicucuk. Plug point baru patut diambil dari litar plug atau terus dari DB box.",
      },
      {
        q: "Perlukah elektrik 3 phase untuk pasang EV charger di rumah?",
        a: "Biasanya tidak. Charger single phase 7kW sesuai untuk kebanyakan rumah dan boleh cas EV biasa sepanjang malam. Anda hanya perlukan 3 phase untuk charger 11kW atau 22kW, atau jika bekalan elektrik rumah anda sudah hampir mencapai had.",
      },
      {
        q: "Bagaimana nak tahu rumah saya perlu tukar wiring?",
        a: "Tanda utamanya ialah wiring berusia lebih 25–30 tahun, fius lama dan bukan RCCB, plug yang panas atau berubah warna, elektrik kerap trip dan lampu berkelip. Pemeriksaan akan menentukan sama ada cukup dibaiki atau perlu tukar wiring.",
      },
    ],
  },
];
