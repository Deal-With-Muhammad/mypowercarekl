import type { GuideText } from "@/lib/types";

// Bahasa Melayu guides, part 1. Prices must match src/content/en/guides.ts and
// src/data/pricing.ts exactly.

export const guidesPart1: Record<string, GuideText> = {
  "house-rewiring-cost-malaysia": {
    title: "Kos Tukar Wiring Rumah di Malaysia (Panduan Harga 2026)",
    metaTitle: "Harga Wiring Rumah 2026: Kos Tukar Wiring di Malaysia",
    metaDescription:
      "Kos tukar wiring rumah di KL: kondo 2–3 bilik RM6,000 – RM10,000, rumah teres dua tingkat RM13,000 – RM20,000. Jadual harga 2026, skop kerja dan tempoh siap.",
    tldr: "Kos tukar wiring rumah penuh di Lembah Klang ialah sekitar RM6,000 – RM10,000 untuk kondo 2–3 bilik, RM8,000 – RM13,000 untuk rumah teres setingkat dan RM13,000 – RM20,000 untuk rumah teres dua tingkat mengikut harga kami. Kerja pecah dinding (hacking), plaster dan cat biasanya disebut harga secara berasingan.",
    sections: [
      {
        heading: "Berapa kos tukar wiring rumah di Malaysia?",
        body: [
          "Faktor terbesar ialah bilangan point: setiap lampu, kipas, plug point dan suis. Kondo 2–3 bilik ada 40 hingga 60 point; rumah teres dua tingkat ada 80 hingga 120. Jadual di bawah membandingkan sebut harga di Lembah Klang dari 2024 hingga 2026 dengan harga kami, yang sudah termasuk kabel, conduit atau trunking serta suis dan plug point standard.",
          "Julat harga pasaran sangat luas kerana ada sebut harga yang guna trunking permukaan dan kabel murah, manakala yang lain wiring tersembunyi sepenuhnya termasuk hacking dan plaster semula. Bandingkan bilangan point, saiz kabel dan apa yang tidak termasuk, bukan jumlah harga sahaja. Tanya sama ada DB box baru termasuk; rumah lama hampir selalu memerlukannya.",
        ],
        table: {
          head: ["Jenis kediaman", "Harga pasaran (Lembah Klang)", "My Power Care KL", "Tempoh biasa"],
          rows: [
            ["Kondo / apartmen (2–3 bilik)", "RM3,000 – RM12,000", "RM6,000 – RM10,000", "2–4 hari"],
            ["Rumah teres setingkat", "RM4,000 – RM15,000", "RM8,000 – RM13,000", "3–5 hari"],
            ["Rumah teres dua tingkat", "RM8,000 – RM25,000", "RM13,000 – RM20,000", "5–8 hari"],
            ["Semi-D", "RM12,000 – RM30,000+", "RM18,000 – RM30,000", "7–12 hari"],
            ["Banglo", "RM20,000 – RM40,000", "Sebut harga selepas lawatan tapak", "2–3 minggu"],
          ],
        },
      },
      {
        heading: "Apa yang termasuk dalam sebut harga tukar wiring, dan apa yang tidak?",
        body: [
          "Sebut harga tukar wiring yang betul merangkumi buang kabel lama, tarik kabel baru ke setiap point, suis dan plug point 13A baru, sambungan semula di DB box dan ujian penuh. Kerja kami disertakan jaminan mutu kerja 12 bulan. DB box baru, jika perlu, patut disenaraikan berasingan (RM1,000 – RM2,000 untuk single phase dengan kami).",
          "Perkara di bawah biasanya tidak termasuk, dan di sinilah bajet ubah suai selalu lari. Hacking dan plaster semula untuk wiring tersembunyi biasanya menambah RM70 atau lebih bagi setiap point. Jika anda memang sedang ubah suai, biar kontraktor utama uruskan kerja kemasan supaya dinding hanya dipecahkan sekali.",
        ],
        bullets: [
          "Hacking dinding untuk conduit tersembunyi (dari sekitar RM70 setiap point)",
          "Plaster dan kemasan selepas hacking",
          "Cat semula dinding dan siling",
          "Potong dan tampal siling plaster",
          "Lampu, kipas dan chandelier (kami pasang, anda yang beli)",
          "Caj TNB, jika bekalan elektrik itu sendiri dinaik taraf",
        ],
      },
      {
        heading: "Apa yang mempengaruhi harga tukar wiring?",
        body: [
          "Dua rumah yang sama saiz boleh berbeza harga beberapa ribu ringgit. Usia bangunan, cara wiring lama dipasang dan sama ada anda mahu semuanya tersembunyi dalam dinding paling banyak memberi kesan. Kondo pula ada peraturan sendiri, seperti permit ubah suai dan waktu kerja yang ditetapkan, yang boleh memanjangkan kerja beberapa hari lagi.",
        ],
        bullets: [
          "Bilangan point: lampu, kipas, plug point, suis, point aircond dan water heater",
          "Wiring tersembunyi dalam dinding berbanding trunking atau conduit permukaan",
          "Akses ke ruang bumbung atau siling palsu",
          "Tukar DB box atau tukar single phase ke 3 phase",
          "Litar khas untuk aircond, oven, dapur induksi atau EV charger",
          "Sama ada rumah kosong atau anda sedang tinggal di dalamnya",
        ],
      },
      {
        heading: "Berapa lama kerja tukar wiring, dan bolehkah anda terus tinggal di rumah?",
        body: [
          "Kondo 2–3 bilik mengambil 2–4 hari bekerja, rumah teres setingkat 3–5 hari, rumah teres dua tingkat 5–8 hari dan semi-D 7–12 hari. Tambah masa untuk hacking, plaster dan cat jika wiring tersembunyi. Kerja di kondo juga bergantung pada waktu yang dibenarkan oleh pihak pengurusan untuk kerja bising.",
          "Biasanya anda boleh terus tinggal di rumah. Kami tukar wiring bilik demi bilik dan sambung semula litar setiap kali kerja hari itu selesai, jadi anda masih ada lampu dan peti sejuk berfungsi pada waktu malam. Rumah kosong lebih cepat dan sedikit lebih murah, jadi tukar wiring sebelum pindah masuk memang masuk akal.",
        ],
      },
      {
        heading: "Adakah anda perlu Form G dan Form H selepas tukar wiring?",
        body: [
          "Ya. Form G dan Form H ialah sijil siap kerja dan sijil ujian bagi kerja wiring di bawah Peraturan-Peraturan Elektrik 1994. TNB memintanya sebelum menyambung bekalan baru atau bekalan yang dinaik taraf, jadi simpan bersama dokumen rumah anda. Pemilik rumah tidak dibenarkan tukar wiring sendiri (DIY), dan wiring yang tidak diluluskan boleh dikenakan denda sehingga RM10,000 di bawah Akta Bekalan Elektrik 1990.",
        ],
      },
      {
        heading: "Bagaimana nak jimat kos tukar wiring?",
        body: [
          "Kerja tukar wiring yang paling murah ialah yang dibuat sekali sahaja, dengan betul, menggunakan kabel yang bagus dan perlindungan yang betul. Masih ada cara jujur untuk kurangkan jumlah kos, dan kebanyakannya datang daripada merancang kerja mengikut ubah suai anda dan membuat keputusan awal, bukan dengan menekan upah atau guna kabel yang lebih nipis.",
        ],
        bullets: [
          "Tukar wiring semasa ubah suai, sebelum plaster dan cat",
          "Guna trunking permukaan di stor, dapur dan porch kereta",
          "Tetapkan kedudukan plug point dan lampu sekali sahaja, supaya tiada perubahan di tengah jalan",
          "Beli sendiri lampu dan kipas",
          "Guna semula conduit sedia ada jika masih elok dan saiznya betul",
          "Buat DB box dan naik taraf 3 phase (jika ada) dalam kerja yang sama",
        ],
      },
      {
        heading: "Bagaimana memilih tukang elektrik untuk tukar wiring?",
        body: [
          "Sebut harga yang baik menyenaraikan bilangan point, jenama dan saiz kabel, sama ada hacking dan plaster termasuk, DB box, tempoh kerja dan jaminan. Berhati-hati dengan harga pukal yang sangat rendah tanpa pecahan kos, dan minta jaminan secara bertulis.",
          "Kami beri sebut harga tetap secara bertulis selepas lawatan tapak, dengan caj lawatan minimum RM80. Sebut harga hanya berubah jika anda tambah point.",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa kos tukar wiring kondo di KL?",
        a: "Kondo 2–3 bilik biasanya berharga RM6,000 – RM10,000 untuk tukar wiring dengan kami, bergantung pada bilangan point dan sama ada wiring tersembunyi. Sebut harga pasaran sekitar RM3,000 hingga RM12,000. Hacking, plaster dan cat disebut harga secara berasingan.",
      },
      {
        q: "Berapa kerap wiring rumah perlu ditukar?",
        a: "Wiring bertebat PVC biasanya tahan 25–30 tahun sebelum penebatnya menjadi rapuh. Kami sarankan pemeriksaan setiap 10–15 tahun. Ujian rintangan penebat pada setiap litar menunjukkan sama ada anda perlu tukar wiring penuh, tukar wiring separa atau hanya beberapa pembaikan.",
      },
      {
        q: "Bolehkah saya tukar wiring satu bilik sahaja?",
        a: "Boleh. Tukar wiring separa untuk satu bilik berharga RM1,000 – RM2,500 dengan kami, bergantung pada bilangan point. Ia sesuai untuk ubah suai atau satu kawasan yang bermasalah, tetapi jika bahagian lain rumah guna kabel lama yang sama, buat pemeriksaan dahulu memang berbaloi.",
      },
      {
        q: "Adakah kerja tukar wiring bersepah?",
        a: "Wiring tersembunyi memang bersepah kerana dinding perlu di-hacking untuk buat alur, yang menghasilkan habuk dan perlu plaster serta cat selepas itu. Trunking permukaan lebih bersih dan cepat tetapi kelihatan. Ramai pemilik pilih wiring tersembunyi di ruang tamu dan bilik tidur, dan trunking di dapur, stor dan porch.",
      },
      {
        q: "Perlukah kelulusan TNB untuk tukar wiring rumah?",
        a: "Tidak, jika tukar wiring dalam bekalan sedia ada. TNB hanya terlibat jika anda mengubah bekalan itu sendiri, contohnya tukar single phase ke 3 phase, dan TNB akan minta sijil ujian sebelum menyambung bekalan baru.",
      },
    ],
  },
  "why-does-my-house-keep-tripping": {
    title: "Kenapa Elektrik Rumah Selalu Trip? 8 Punca Biasa di Malaysia",
    metaTitle: "Kenapa Elektrik Rumah Selalu Trip? 8 Punca Biasa",
    metaDescription:
      "Elektrik rumah selalu trip? Kesan litar yang rosak dengan selamat dalam lima minit, kenali 8 punca ELCB trip di rumah Malaysia dan upah tukang elektrik di KL.",
    tldr: "Kebanyakan kes elektrik rumah trip di Malaysia berpunca daripada kebocoran arus ke bumi pada water heater, air hujan masuk ke plug point atau lampu luar, atau peralatan yang rosak. Biasanya anda boleh kesan litar yang rosak dengan mematikan semua MCB, menaikkan semula RCCB dan menghidupkan MCB satu demi satu; kos baiki dengan kami biasanya RM150 – RM400.",
    sections: [
      {
        heading: "Suis mana yang trip: RCCB, MCB atau suis utama?",
        body: [
          "Buka pintu DB box (hanya pintu luar, jangan sekali-kali buka penutup di belakangnya) dan cari suis yang sudah jatuh ke bawah. RCCB, yang ramai masih panggil ELCB, ialah suis yang lebih lebar dengan butang ujian bertanda 'T'. Ia trip apabila ada kebocoran arus ke bumi, iaitu arus yang terlepas ke bumi melalui air, penebat yang rosak atau badan seseorang.",
          "MCB ialah suis kecil, satu untuk setiap litar, dan ia trip apabila beban berlebihan atau litar pintas. Suis utama biasanya isolator yang tidak trip. Jika seluruh rumah gelap dan tiada suis di DB box yang jatuh, semak sama ada jiran anda ada elektrik; masalahnya mungkin pada bekalan TNB atau fius di meter anda.",
        ],
        table: {
          head: ["Suis", "Cara kenal", "Kenapa ia trip", "Maksud biasanya"],
          rows: [
            [
              "RCCB / ELCB",
              "Suis lebar dengan butang ujian, kadaran 30mA atau 100mA",
              "Kebocoran arus ke bumi",
              "Air, peralatan rosak atau kabel rosak",
            ],
            [
              "MCB",
              "Suis kecil, satu untuk setiap litar, kadaran 6A hingga 32A",
              "Beban berlebihan atau litar pintas",
              "Terlalu banyak peralatan pada satu litar, atau litar pintas",
            ],
            [
              "Suis utama",
              "Suis paling besar di papan",
              "Biasanya tidak trip (isolator)",
              "Jika rumah gelap, semak bekalan TNB dahulu",
            ],
          ],
        },
      },
      {
        heading: "Bagaimana nak kesan litar yang rosak dengan selamat?",
        body: [
          "Jika RCCB trip, biasanya anda boleh kenal pasti litar yang bermasalah dalam lima minit. Sentuh suis pemutus sahaja, dengan tangan dan kaki yang kering. Jangan sekali-kali buka penutup DB box atau sentuh mana-mana wayar atau terminal. Jika anda terhidu bau terbakar atau nampak kesan hangus pada papan, berhenti di situ dan hubungi tukang elektrik.",
          "Jika litar itu tidak trip lagi selepas semua plug dicabut, pasang semula peralatan satu demi satu; yang menyebabkan trip itulah puncanya. Jika masih trip walaupun tiada apa-apa dipasang, kerosakan ada pada wiring atau peralatan tetap seperti water heater atau aircond, dan ini perlukan tukang elektrik dengan alat ujian.",
        ],
        bullets: [
          "Matikan semua MCB (tolak semuanya ke bawah)",
          "Naikkan semula RCCB; jika ia tidak mahu kekal di atas walaupun semua MCB dimatikan, berhenti dan hubungi kami",
          "Hidupkan MCB satu demi satu, tunggu beberapa saat selepas setiap satu",
          "Apabila RCCB trip semula, MCB terakhir yang anda hidupkan ialah litar yang rosak",
          "Biarkan MCB itu dimatikan, naikkan semula RCCB dan hidupkan semula MCB yang lain",
          "Cabut semua plug pada litar yang rosak dan cuba semula",
        ],
      },
      {
        heading: "Peralatan atau air? Punca 1 hingga 4",
        body: [
          "Berdasarkan pengalaman kami di seluruh KL dan Selangor, empat punca ELCB atau RCCB trip ini paling kerap berlaku. Setiap satu menyebabkan arus kecil bocor ke bumi, dan itulah yang direka untuk dikesan oleh RCCB. RCCB sedang menjalankan tugasnya, jadi penyelesaiannya ialah hentikan kebocoran itu, bukan pintas (bypass) RCCB atau tukar kepada yang kurang sensitif.",
        ],
        bullets: [
          "1. Elemen water heater: elemen yang semakin uzur membocorkan arus, selalunya trip hanya apabila pancuran dibuka",
          "2. Air hujan dalam kelengkapan luar: lampu porch, lampu taman dan plug point luar trip selepas hujan lebat",
          "3. Peralatan rosak: peti sejuk, cerek, periuk nasi dan mesin basuh mula bocor arus apabila semakin lama",
          "4. Kebocoran arus aircond: paip saliran yang tersumbat atau unit luar yang rosak boleh menyebabkan RCCB trip",
        ],
      },
      {
        heading: "Wiring atau DB box? Punca 5 hingga 8",
        body: [
          "Jika tiada peralatan yang menjadi punca, masalahnya ada pada pemasangan tetap. Kerosakan ini biasanya bertambah teruk dari masa ke masa, dan sebahagiannya, terutamanya kabel rosak, berisiko menyebabkan kebakaran. Untuk mengesannya, anda perlukan alat uji rintangan penebat dan pengalaman, bukan alat uji plug dari kedai hardware.",
        ],
        bullets: [
          "5. Wiring lama: penebat PVC dalam rumah berusia 25–30 tahun menjadi rapuh dan bocor, lebih teruk ketika cuaca lembap",
          "6. Litar terlebih beban: terlalu banyak peralatan pada satu MCB, biasa berlaku apabila guna plug extension",
          "7. Tikus dalam siling: kabel yang digigit tikus di ruang bumbung menyebabkan kebocoran arus atau litar pintas",
          "8. RCCB rosak: RCCB lama boleh trip walaupun tiada kerosakan sebenar, atau lebih teruk, langsung tidak trip",
        ],
      },
      {
        heading: "Bila perlu panggil tukang elektrik?",
        body: [
          "Panggil tukang elektrik jika RCCB tidak boleh dinaikkan semula walaupun semua MCB dimatikan, jika litar yang sama trip lagi selepas anda cabut semua plug, atau jika trip berlaku bersama bau terbakar, bunyi berdengung atau kesan hangus pada plug point. Panggil juga jika MCB terasa panas, atau jika sesiapa pernah rasa renjatan kecil daripada paip, peralatan atau kelengkapan logam.",
          "Jangan terus naikkan semula pemutus yang trip serta-merta, dan jangan sekali-kali tampal atau tahan suis di atas. Jika hanya satu litar terjejas, biarkan MCB itu dimatikan dan tempah lawatan. Kami tawarkan servis hari yang sama setiap hari: tempah pada waktu pagi dan biasanya masalah dibaiki pada hari yang sama.",
        ],
      },
      {
        heading: "Berapa kos baiki elektrik trip di KL?",
        body: [
          "Setiap lawatan dikenakan caj minimum RM80, yang merangkumi pengangkutan dan pemeriksaan. Kebanyakan kerja baiki trip berharga RM150 – RM400 dengan kami, termasuk mengesan kerosakan, dan anda luluskan harga sebelum kerja bermula. Di seluruh Lembah Klang, upah tukang elektrik untuk baiki trip biasanya RM100 – RM400.",
          "Jika kerosakan sebenarnya dalam peralatan, kami akan beritahu terus terang. Selalunya lebih murah untuk baiki atau tukar peralatan itu daripada membayar kerja elektrik tambahan. Kerosakan water heater dan aircond mungkin perlu juruteknik servis pengeluar sendiri, dan kami boleh pastikan bahagian wiring selamat dahulu.",
        ],
        table: {
          head: ["Kerja", "Harga pasaran", "My Power Care KL"],
          rows: [
            ["Lawatan pemeriksaan (caj minimum)", "Sehingga RM150", "RM80 setiap lawatan"],
            ["Kesan kerosakan dan ujian (jam pertama)", "RM100 – RM400", "RM150"],
            ["Elektrik trip: kesan dan baiki", "RM100 – RM400", "RM150 – RM400"],
            ["Tukar RCCB / ELCB", "RM140 – RM600", "RM250 – RM450"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Kenapa RCCB trip bila hujan atau kilat?",
        a: "Biasanya kerana air hujan masuk ke plug point luar, lampu porch, lampu taman atau sambungan kabel yang terdedah, dan air itu mewujudkan laluan ke bumi. Biarkan litar itu dimatikan sehingga kering, kemudian tukar kelengkapan itu kepada jenis kalis cuaca (IP65 atau lebih baik) dan kedapkan semua sambungan.",
      },
      {
        q: "Kenapa RCCB trip walaupun semua MCB dimatikan?",
        a: "Kebanyakan DB box rumah guna MCB satu kutub (single pole) yang hanya memutuskan wayar hidup (live), jadi kerosakan antara neutral dan bumi masih boleh menyebabkan RCCB trip. RCCB itu sendiri mungkin juga rosak. Walau apa pun, ini perlukan tukang elektrik dengan alat ujian. Jangan buka papan suis.",
      },
      {
        q: "Bolehkah saya tukar RCCB sahaja untuk hentikan trip?",
        a: "Hanya jika RCCB itu memang rosak. Dalam kebanyakan kes, ia trip kerana memang ada kebocoran arus di suatu tempat. Memasang RCCB baru, atau lebih teruk, yang kurang sensitif, hanya menyembunyikan masalah dan risiko renjatan masih ada. Uji dahulu, kemudian tukar jika perlu.",
      },
      {
        q: "Kenapa rumah trip bila water heater dibuka?",
        a: "Elemen pemanas mungkin sudah rosak dan membocorkan arus ke bumi melalui air. Berhenti guna water heater, matikan suis isolatornya, dan tukar elemen atau water heater itu. Ia berisiko renjatan di kawasan basah, jadi jangan terus naikkan semula suis yang trip.",
      },
      {
        q: "Bagaimana nak uji RCCB?",
        a: "Tekan butang ujian bertanda 'T' sebulan sekali ketika elektrik hidup. RCCB sepatutnya trip serta-merta; naikkan semula untuk pulihkan bekalan. Jika tiada apa-apa berlaku apabila butang ditekan, RCCB itu tidak melindungi anda dan perlu ditukar segera.",
      },
    ],
  },
  "electrician-price-list-malaysia": {
    title: "Senarai Harga Tukang Elektrik di KL & Selangor (2026)",
    metaTitle: "Senarai Harga Tukang Elektrik di KL & Selangor (2026)",
    metaDescription:
      "Senarai harga tukang elektrik 2026 di KL dan Selangor: lawatan RM80, baiki trip dari RM150, plug point dari RM150, DB box dari RM1,000. Pasaran vs harga kami.",
    tldr: "Harga kami untuk 2026 di KL dan Selangor bermula dengan caj minimum RM80 setiap lawatan, baiki elektrik trip RM150 – RM400, plug point baru dari RM150, pasang water heater RM150 – RM250 dan DB box single phase RM1,000 – RM2,000. Jadual di bawah membandingkan setiap kerja dengan harga pasaran.",
    sections: [
      {
        heading: "Berapa caj tukang elektrik untuk datang ke rumah?",
        body: [
          "Kebanyakan tukang elektrik di Lembah Klang mengenakan caj lawatan atau pemeriksaan sehingga RM150. Caj kami ialah caj minimum RM80 setiap lawatan, yang merangkumi pengangkutan dan pemeriksaan, dan anda dapat sebut harga tetap di tapak sebelum sebarang kerja bermula. Harga kami sama setiap hari dalam seminggu, termasuk hujung minggu.",
        ],
        table: {
          head: ["Jenis lawatan", "Harga pasaran", "My Power Care KL"],
          rows: [
            ["Lawatan pemeriksaan (caj minimum)", "Sehingga RM150", "RM80 setiap lawatan"],
            ["Kesan kerosakan dan ujian (jam pertama)", "RM100 – RM400", "RM150"],
          ],
        },
      },
      {
        heading: "Berapa upah pasang lampu, suis, plug point dan kipas?",
        body: [
          "Ini kerja kecil yang paling biasa. Harga lampu dan kipas ialah upah sahaja, kerana kebanyakan orang beli lampu dan kipas sendiri. Harga suis dan plug point sudah termasuk suis atau plug point standard. Point baru lebih mahal daripada tukar ganti kerana kabel baru perlu ditarik dari litar terdekat atau dari DB box.",
          "Harga pasang kipas siling kami merangkumi pemasangan, imbangan kipas dan menanggalkan kipas lama, sebab itulah ia lebih tinggi daripada sebut harga paling murah. Harga yang sangat rendah (RM45 – RM60) biasanya menganggap cangkuk dan point sudah sedia ada dan kipas itu model asas.",
        ],
        table: {
          head: ["Kerja", "Harga pasaran", "My Power Care KL"],
          rows: [
            ["Tukar lampu", "RM15 – RM60 setiap lampu", "RM40 – RM80 setiap lampu"],
            ["Downlight LED baru (potong siling)", "RM60 – RM150 setiap lampu", "RM100 – RM150 setiap lampu"],
            ["Point lampu baru", "RM60 – RM150", "RM100 – RM150"],
            ["Tukar suis", "Sehingga RM150", "RM80 – RM120"],
            ["Plug point 13A baru (trunking permukaan)", "RM60 – RM250", "RM150 – RM250"],
            ["Plug point 13A baru (tersembunyi dalam dinding)", "RM200 – RM600", "RM250 – RM450"],
            ["Pasang kipas siling (point sedia ada)", "RM45 – RM150", "Dari RM200 setiap kipas"],
            ["Kipas siling dengan point kipas baru", "RM150 – RM330", "RM300 – RM400"],
          ],
        },
      },
      {
        heading: "Berapa harga water heater, hood dapur dan point aircond?",
        body: [
          "Water heater dan aircond menarik arus yang tinggi, jadi ia perlukan litar sendiri dengan kabel dan pemutus yang betul. Sebab itu point baru berharga beberapa kali ganda lebih mahal daripada tukar water heater pada point sedia ada. Point water heater baru sepatutnya sentiasa disertakan RCCB 10mA untuk keselamatan semasa mandi, dan point kami memang termasuk.",
        ],
        table: {
          head: ["Kerja", "Harga pasaran", "My Power Care KL"],
          rows: [
            ["Pasang water heater (point sedia ada)", "RM80 – RM250", "RM150 – RM250"],
            ["Water heater dengan point baru + RCCB 10mA", "RM200 – RM600", "RM350 – RM550"],
            ["Point aircond dengan isolator", "RM130 – RM400", "RM250 – RM400"],
            ["Baiki water heater (tidak panas atau trip)", "RM80 – RM300", "RM150 – RM300"],
            ["Pasang hood dapur", "RM100 – RM300", "RM200 – RM350"],
            ["Pasang exhaust fan (point sedia ada)", "RM80 – RM250", "RM150 – RM250"],
          ],
        },
      },
      {
        heading: "Berapa harga DB box, tukar wiring, 3 phase dan EV charger?",
        body: [
          "Kerja besar mempunyai julat harga paling luas, kerana kualiti pemutus, saiz kabel dan jumlah hacking sangat berbeza antara satu sebut harga dengan yang lain. Sentiasa minta sebut harga yang terperinci. Harga 3 phase kami tidak termasuk caj sambungan dan deposit TNB, yang anda bayar terus kepada TNB.",
        ],
        table: {
          head: ["Kerja", "Harga pasaran", "My Power Care KL"],
          rows: [
            ["Tukar RCCB / ELCB", "RM140 – RM600", "RM250 – RM450"],
            ["Tukar DB box, single phase", "RM400 – RM3,500", "RM1,000 – RM2,000"],
            ["Tukar DB box, 3 phase", "RM800 – RM4,500", "RM1,800 – RM3,500"],
            ["Tukar single phase ke 3 phase (tidak termasuk caj TNB)", "RM3,000 – RM10,000", "RM5,000 – RM8,000"],
            ["Tukar wiring penuh, kondo 2–3 bilik", "RM3,000 – RM12,000", "RM6,000 – RM10,000"],
            ["Tukar wiring penuh, rumah teres dua tingkat", "RM8,000 – RM25,000", "RM13,000 – RM20,000"],
            ["Pasang EV charger (charger anda, rumah landed)", "RM800 – RM2,500", "RM1,800 – RM2,800"],
          ],
        },
      },
      {
        heading: "Apa beza upah sahaja dengan bekal dan pasang?",
        body: [
          "Upah sahaja bermaksud anda beli barang dan tukang elektrik yang pasang. Ini biasa untuk lampu, kipas, water heater, hood dapur dan EV charger, kerana anda pilih jenama dan model sendiri. Jika anda mahu kami yang bekalkan, kami beli pada harga kos dan tunjukkan resitnya, jadi tiada caj tersembunyi.",
          "Harga bekal dan pasang termasuk bahan. Untuk kerja wiring, harga setiap point kami termasuk kabel, trunking atau conduit serta suis atau plug point standard. Suis premium, pintar atau rekaan designer dikenakan caj tambahan. Semasa membandingkan sebut harga, semak jenis yang mana; harga upah sahaja yang murah boleh jadi lebih mahal setelah bahan ditambah.",
        ],
      },
      {
        heading: "Kos tersembunyi apa yang perlu ditanya?",
        body: [
          "Kebanyakan salah faham berpunca daripada perkara yang tiada siapa sebut pada awalnya. Sebelum kerja bermula, tanya sama ada sebut harga merangkumi perkara di bawah. Kami beri sebut harga tetap secara bertulis sebelum bermula, jadi harga hanya berubah jika anda memutuskan untuk menambah kerja.",
        ],
        bullets: [
          "Hacking, plaster dan cat untuk wiring tersembunyi (selalunya RM70 atau lebih setiap point)",
          "Potong dan tampal siling plaster",
          "Tarikan kabel yang panjang dari DB box",
          "Permit ubah suai, deposit atau tempahan lif di kondo",
          "Pembuangan lampu dan kabel lama",
          "Alat ganti yang didapati rosak semasa pembaikan, seperti MCB yang terbakar",
          "Caj tambahan hujung minggu atau waktu petang (kami tidak mengenakannya)",
        ],
      },
      {
        heading: "Bolehkah dapat tukang elektrik pada hari yang sama?",
        body: [
          "Selalunya boleh. Kami tawarkan servis hari yang sama setiap hari: tempah pada waktu pagi dan kebanyakan kerosakan dibaiki pada hari yang sama. Jika hanya satu litar trip dan bahagian lain rumah berfungsi apabila litar itu dimatikan, biarkan ia dimatikan sehingga kami tiba. Jika ada percikan api atau bau terbakar, matikan suis di DB box jika selamat untuk berbuat demikian.",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa upah tukang elektrik sejam di Malaysia?",
        a: "Kebanyakan tukang elektrik di KL mengenakan harga mengikut kerja, bukan mengikut jam. Caj kesan kerosakan kami ialah RM150 untuk jam pertama, yang merangkumi ujian untuk mencari punca masalah. Kerja mudah seperti tukar suis atau plug point berharga RM80 – RM120 setiap satu.",
      },
      {
        q: "Adakah caj minimum untuk lawatan?",
        a: "Ya. Setiap lawatan dikenakan caj minimum RM80, yang merangkumi pengangkutan dan pemeriksaan. Anda dapat sebut harga tetap di tapak sebelum sebarang kerja bermula, dan tiada kerja dibuat sehingga anda bersetuju.",
      },
      {
        q: "Kenapa sesetengah sebut harga tukang elektrik terlalu murah?",
        a: "Sebut harga yang sangat rendah selalunya bermaksud kabel lebih nipis, pemutus tanpa jenama atau tiada ujian yang betul. Minta saiz kabel dan jenama pemutus secara bertulis, semak apa yang tidak termasuk, dan bandingkan sebut harga secara setara, bukan berdasarkan jumlah harga sahaja.",
      },
      {
        q: "Adakah harga tukang elektrik termasuk kipas atau lampu?",
        a: "Biasanya tidak. Harga pasang kipas dan lampu ialah upah sahaja, kerana kebanyakan pemilik rumah pilih sendiri. Jika anda mahu kami yang bekalkan, kami beli pada harga kos dan tunjukkan resitnya. Harga wiring termasuk kabel, trunking dan suis atau plug point standard.",
      },
      {
        q: "Adakah caj tambahan pada hujung minggu?",
        a: "Tidak. Harga kami sama setiap hari dalam seminggu, termasuk Sabtu dan Ahad, dan anda dapat sebut harga tetap sebelum kerja bermula. Kami tidak mengenakan caj tambahan hujung minggu atau waktu petang.",
      },
    ],
  },
  "single-phase-vs-three-phase-malaysia": {
    title: "Single Phase vs 3 Phase: Perlukah Rumah Anda Tukar?",
    metaTitle: "Single Phase vs 3 Phase: Bila Perlu Tukar 3 Phase?",
    metaDescription:
      "Guna banyak aircond, water heater dan EV charger? Bila perlu tukar single phase ke 3 phase, proses TNB langkah demi langkah, tempoh dan kosnya di Malaysia.",
    tldr: "Kebanyakan rumah di Malaysia cukup dengan single phase, tetapi jika anda guna beberapa aircond, water heater instant, dapur induksi atau EV charger dan suis utama trip atau lampu malap, tukar ke 3 phase memang berbaloi. Prosesnya biasanya mengambil 2–6 minggu dan berharga RM5,000 – RM8,000 dengan kami, ditambah caj TNB sendiri.",
    sections: [
      {
        heading: "Apa beza single phase dan 3 phase?",
        body: [
          "Bekalan single phase masuk ke rumah anda melalui satu wayar hidup (live) dan satu neutral, pada 230V. Bekalan 3 phase membawa tiga wayar hidup dan satu neutral: 400V antara fasa dan 230V dari setiap fasa ke neutral. Peralatan anda tetap beroperasi pada 230V. Bezanya, beban dikongsi antara tiga fasa, bukan satu.",
          "Bayangkan satu lorong berbanding tiga lorong. Kebanyakan kondo dan rumah teres di Lembah Klang dibina dengan single phase, yang mampu menampung lampu, kipas, peti sejuk dan dua atau tiga aircond dengan selesa. Banyak semi-D dan banglo sudah pun 3 phase. DB box 3 phase ada suis utama 4 kutub dan pemutus yang dikumpulkan di bawah warna merah, kuning dan biru.",
        ],
        table: {
          head: ["Ciri", "Single phase", "3 phase"],
          rows: [
            ["Wayar bekalan", "1 hidup + neutral", "3 hidup + neutral"],
            ["Voltan", "230V", "400V antara fasa, 230V ke neutral"],
            ["Rumah biasa", "Kondo, kebanyakan rumah teres", "Semi-D, banglo, rumah teres yang lebih besar"],
            [
              "Beban selesa",
              "Lampu, kipas, 2–3 aircond, 1 water heater",
              "Banyak aircond, beberapa water heater, dapur induksi, EV charger",
            ],
            ["EV charger", "Sehingga 7kW", "7kW, 11kW atau 22kW"],
          ],
        },
      },
      {
        heading: "Apakah tanda rumah anda perlu 3 phase?",
        body: [
          "Tanda paling jelas ialah suis utama atau pemutus utama trip apabila beberapa peralatan berat digunakan serentak, biasanya pada waktu petang apabila semua orang di rumah dan aircond dipasang. Satu lagi ialah voltan jatuh: lampu malap atau berkelip apabila kompresor aircond bermula atau water heater instant dihidupkan.",
          "Sebelum tukar, pastikan bukan masalah yang lebih mudah. Suis utama yang kerap trip juga boleh berpunca daripada pemutus utama yang haus atau sambungan longgar yang terlalu panas. Penilaian beban menunjukkan sama ada jumlah permintaan anda benar-benar melebihi keupayaan single phase; jika tidak, naik taraf DB box pada RM1,000 – RM2,000 mungkin boleh selesaikannya dengan kos jauh lebih rendah.",
        ],
        bullets: [
          "Beberapa aircond berjalan serentak, terutamanya unit 2hp atau lebih besar",
          "Dua atau lebih water heater instant",
          "Dapur induksi atau oven elektrik terbina dalam",
          "EV charger di rumah, atau bercadang untuk beli EV",
          "Lampu malap apabila peralatan besar dihidupkan",
          "Suis utama trip ketika penggunaan puncak waktu petang",
          "Ubah suai atau tambahan bangunan yang menambah beban berat baru",
        ],
      },
      {
        heading: "Bagaimana proses TNB untuk tukar ke 3 phase?",
        body: [
          "Kontraktor elektrik anda biasanya uruskan permohonan TNB dan kerja wiring sekali gus. Proses ini ada enam langkah utama. Bahagian TNB berlaku di pertengahan, apabila TNB memeriksa tapak dan mengeluarkan caj, dan di akhir, apabila TNB memasang meter baru dan menyambung bekalan.",
          "Pada hari pertukaran, jangkakan elektrik terputus selama beberapa jam ketika TNB menukar meter dan kabel servis. Kami minta slot pagi jika boleh, supaya anda tidak tinggal tanpa lampu atau aircond pada waktu malam.",
        ],
        bullets: [
          "1. Penilaian beban: kontraktor menyenaraikan peralatan anda dan mengira permintaan maksimum",
          "2. Permohonan: kontraktor menghantar permohonan naik taraf bekalan kepada TNB",
          "3. Pemeriksaan tapak TNB: TNB memeriksa premis dan mengeluarkan caj sambungan dan deposit untuk dibayar",
          "4. Wiring: papan meter baru, DB box 3 phase dan kabel utama, dengan litar diagihkan antara fasa",
          "5. Ujian: pemasangan diuji, dan TNB perlukan sijil ujian sebelum menyambung bekalan",
          "6. Meter: TNB memasang meter 3 phase dan menyambung bekalan baru",
        ],
      },
      {
        heading: "Berapa lama proses tukar ke 3 phase?",
        body: [
          "Biasanya 2–6 minggu dari permohonan hingga meter baru dipasang. Kerja elektrik di rumah anda hanya mengambil satu atau dua hari. Kebanyakan masa menunggu adalah untuk pemeriksaan tapak TNB, pemprosesan bayaran dan pemasangan meter, yang bergantung pada cawangan TNB, masa dalam setahun dan tahap kesibukan mereka.",
          "Jika transformer atau talian atas di kawasan anda tiada kapasiti lebihan, TNB mungkin perlu naik taraf peralatannya sendiri dahulu, dan ini mengambil masa lebih lama. Kontraktor anda patut beritahu selepas lawatan tapak TNB jika ini berlaku. Rancang naik taraf sebelum EV tiba atau sebelum anda pindah masuk ke rumah yang diubah suai, bukan selepasnya.",
        ],
      },
      {
        heading: "Berapa kos tukar single phase ke 3 phase?",
        body: [
          "Harga kami ialah RM5,000 – RM8,000 untuk rumah landed biasa, merangkumi permohonan TNB, papan meter baru, DB box 3 phase, kabel utama, mengimbangkan semula litar anda dan ujian. Di seluruh Lembah Klang, sebut harga kontraktor antara RM3,000 hingga RM10,000 untuk skop yang sama.",
          "TNB mengenakan caj sambungan dan deposit sendiri, yang berbeza mengikut jenis premis dan jangkaan penggunaan, jadi semak kadar semasa dengan TNB sebelum membuat bajet. Harga kami menghampiri hujung atas jika papan meter perlu dialihkan, tarikan kabel panjang, atau beberapa litar perlu tukar wiring pada masa yang sama.",
        ],
        table: {
          head: ["Perkara", "Harga pasaran", "My Power Care KL"],
          rows: [
            ["Tukar single phase ke 3 phase (kerja kontraktor)", "RM3,000 – RM10,000", "RM5,000 – RM8,000"],
            ["Tukar DB box 3 phase sahaja", "RM800 – RM4,500", "RM1,800 – RM3,500"],
            ["Caj sambungan TNB", "Ditetapkan oleh TNB", "Dibayar terus kepada TNB"],
            ["Deposit TNB (3 phase)", "Sekitar RM400 – RM1,600", "Dibayar terus kepada TNB"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Adakah 3 phase akan menaikkan bil elektrik saya?",
        a: "Tidak dengan sendirinya. TNB mengebil elektrik yang anda guna, dan tarif domestik tidak berubah kerana anda tukar ke 3 phase. Bil anda hanya naik jika anda guna lebih banyak elektrik, contohnya untuk mengecas EV. Deposit awal TNB lebih tinggi untuk 3 phase.",
      },
      {
        q: "Perlukah 3 phase untuk EV charger di rumah?",
        a: "Tidak semestinya. Charger 7kW boleh beroperasi dengan single phase dan mencukupi untuk kebanyakan pemanduan harian. Anda perlu 3 phase untuk charger 11kW atau 22kW, atau jika rumah anda sudah hampir had dengan aircond dan water heater. Penilaian beban akan tunjukkan yang mana satu berkenaan.",
      },
      {
        q: "Perlukah tukar peralatan selepas naik taraf 3 phase?",
        a: "Tidak. Lampu, plug point, kipas, aircond dan water heater anda kekal seperti biasa, beroperasi pada 230V. Tukang elektrik akan agihkan semuanya antara tiga fasa di DB box baru. Hanya peralatan 3 phase sebenar, seperti EV charger 11kW atau 22kW, yang menggunakan ketiga-tiga fasa.",
      },
      {
        q: "Bolehkah unit kondo ditukar ke 3 phase?",
        a: "Biasanya tidak. Unit kondo mendapat bekalan melalui sistem agihan bangunan itu sendiri, dan kebanyakannya memang direka untuk single phase. Sebarang perubahan perlukan kelulusan pihak pengurusan (JMB/MC) dan kapasiti lebihan dalam bangunan. Rumah landed ialah calon biasa untuk naik taraf 3 phase.",
      },
      {
        q: "Berapa lama elektrik akan terputus semasa naik taraf?",
        a: "Kerja di DB box biasanya memerlukan beberapa jam tanpa elektrik, dan pertukaran meter TNB mengambil beberapa jam lagi, selalunya pada hari yang berbeza. Kami rancang kedua-duanya lebih awal supaya anda tahu bila ia akan berlaku. Kebanyakan keluarga tidak perlu berpindah keluar.",
      },
    ],
  },
  "signs-your-house-needs-rewiring": {
    title: "9 Tanda Rumah Perlu Tukar Wiring",
    metaTitle: "9 Tanda Rumah Perlu Tukar Wiring (Malaysia)",
    metaDescription:
      "Fius lama, plug point panas, bau terbakar, lampu berkelip atau wiring berusia lebih 25 tahun? 9 tanda rumah perlu tukar wiring, dan kos pemeriksaan elektrik.",
    tldr: "Rumah anda mungkin perlu tukar wiring jika wiringnya berusia 25–30 tahun atau lebih, masih guna fius dawai jenis lama atau tiada RCCB, atau anda perasan plug point panas, bau terbakar, lampu berkelip atau elektrik kerap trip. Pemeriksaan (RM250 – RM600 dengan kami) akan tunjukkan sama ada anda perlu tukar wiring penuh atau hanya pembaikan.",
    sections: [
      {
        heading: "Tanda 1: Adakah wiring rumah anda berusia lebih 25 tahun?",
        body: [
          "Kabel bertebat PVC dalam rumah di Malaysia biasanya tahan 25–30 tahun. Haba di ruang bumbung, kelembapan dan beban selama berdekad-dekad perlahan-lahan mengeraskan penebat sehingga ia retak. Banyak rumah teres di kawasan lama KL, PJ dan Klang, yang dibina dari tahun 1970-an hingga 1990-an, masih guna wiring asal yang direka untuk beberapa kipas dan sebuah peti sejuk, bukan lima aircond.",
          "Usia sahaja tidak menjadikan wiring berbahaya, tetapi ia bermaksud wiring itu sudah tiba masa untuk diuji. Jika anda tidak tahu bila kali terakhir rumah ditukar wiring, cari petunjuk: plug pin bulat lama, suis bakelit coklat atau papan kayu di belakang meter semuanya menunjukkan wiring dari zaman dahulu.",
        ],
      },
      {
        heading: "Apa yang DB box anda beritahu? (Tanda 2 dan 3)",
        body: [
          "Tanda 2 ialah DB box dengan fius dawai jenis lama (pemegang seramik dengan dawai fius) atau langsung tiada RCCB. RCCB memutuskan elektrik dalam sepecahan saat apabila arus bocor ke bumi, dan itulah yang melindungi anda daripada renjatan yang boleh membawa maut. Rumah tanpa RCCB menggunakan standard wiring yang sudah berdekad-dekad ketinggalan.",
          "Tanda 3 ialah elektrik kerap trip. Trip sekali-sekala selepas hujan lebat ada punca yang mudah, tetapi jika RCCB trip setiap minggu, atau beberapa litar trip, penebat mungkin sedang rosak di seluruh rumah. Anda boleh semak semua ini melalui pintu DB box. Jangan sekali-kali buka penutupnya; serahkan apa yang ada di belakangnya kepada tukang elektrik.",
        ],
      },
      {
        heading: "Apa yang anda nampak, hidu atau dengar? (Tanda 4, 5 dan 6)",
        body: [
          "Ketiga-tiga tanda ini bermaksud haba sedang terkumpul di tempat yang tidak sepatutnya. Sambungan longgar, plug point terlebih beban dan penebat yang haus semuanya menghasilkan haba lama sebelum ia menyebabkan kebakaran. Jika anda perasan mana-mana tanda ini, berhenti guna plug point atau suis itu, matikan MCB-nya, dan minta ia diperiksa secepat mungkin.",
          "Bau terbakar tanpa punca yang jelas perlu diambil serius dengan segera. Matikan suis utama jika anda boleh mencapainya dengan selamat, dan hubungi tukang elektrik. Plastik yang cair di dalam dinding atau siling boleh membara berjam-jam sebelum anda nampak asap.",
        ],
        bullets: [
          "Tanda 4: plug point dan suis yang panas atau berubah warna, dengan kesan coklat atau hitam di sekeliling pin",
          "Tanda 5: bau terbakar atau bau hanyir berhampiran plug point, suis, DB box atau siling",
          "Tanda 6: bunyi berdengung, berdetap atau berdesir dari suis, plug point atau DB box",
        ],
      },
      {
        heading: "Kenapa lampu berkelip dan kabel retak? (Tanda 7 dan 8)",
        body: [
          "Tanda 7 ialah lampu yang berkelip atau malap, terutamanya apabila aircond, seterika atau water heater dihidupkan. Driver LED yang rosak boleh menyebabkan satu lampu berkelip, tetapi jika ia berlaku di beberapa bilik, biasanya puncanya sambungan longgar atau kabel yang terlalu kecil untuk menampung beban.",
          "Tanda 8 ialah kabel itu sendiri. Tukang elektrik sering menjumpai penebat PVC yang retak dan rapuh di belakang plat suis lama dan di ruang bumbung, dan sesetengah rumah lama masih guna kabel aluminium, yang menjadi longgar di terminal dari masa ke masa. Penebat yang retak mendedahkan konduktor hidup. Jangan buka skru plat suis untuk periksa sendiri; itu kerja tukang elektrik.",
        ],
      },
      {
        heading: "Adakah rumah anda bergantung pada plug extension? (Tanda 9)",
        body: [
          "Tanda 9 ialah rumah yang memang tidak cukup plug point. Rumah lama dipasang dengan dua atau tiga plug point setiap bilik. Hari ini bilik yang sama ada TV, router, pengecas telefon, aircond dan mungkin ruang kerja dari rumah, jadi keluarga akhirnya guna multi plug dan plug extension merata-rata.",
          "Plug extension tidak mengapa untuk kegunaan sementara, tetapi adaptor yang disambung bertingkat-tingkat dan wayar di bawah karpet boleh jadi terlalu panas. Jika anda bergantung padanya secara tetap, tambah point yang betul adalah lebih selamat. Plug point baru dengan trunking permukaan berharga RM150 – RM250 dengan kami; jika anda perlukan banyak, tukar wiring separa atau penuh selalunya lebih berbaloi.",
        ],
      },
      {
        heading: "Berapa banyak kebakaran rumah di Malaysia berpunca daripada elektrik?",
        body: [
          "BOMBA (Jabatan Bomba dan Penyelamat) melaporkan kira-kira 60% kebakaran rumah di Malaysia berpunca daripada kerosakan elektrik. Antara Januari dan September 2024, 3,172 kebakaran kediaman berpunca daripada elektrik, iaitu sekitar 63% daripada semua kebakaran kediaman dalam tempoh itu. Wiring lama, plug point terlebih beban dan kerja pembaikan berkualiti rendah adalah faktor biasa.",
          "Kebanyakan kebakaran ini bermula daripada kerosakan yang sudah memberi tanda amaran terlebih dahulu: plug point panas, bau pelik, trip yang tidak dihiraukan. Sebab itu kami sarankan pemeriksaan profesional setiap 10–15 tahun, dan lebih awal jika anda baru membeli rumah lama atau merancang ubah suai dengan peralatan berat yang baru.",
        ],
      },
      {
        heading: "Perlukah pemeriksaan atau tukar wiring penuh?",
        body: [
          "Mulakan dengan pemeriksaan kecuali wiring jelas sudah rosak. Pemeriksaan menguji rintangan penebat dan masa trip RCCB, menyemak pembumian, DB box dan setiap point, dan memberi anda laporan bertulis. Selalunya ia menunjukkan hanya sebahagian rumah yang perlu dibaiki, yang kosnya jauh lebih rendah daripada tukar wiring penuh.",
        ],
        table: {
          head: ["Pilihan", "Bila sesuai", "My Power Care KL"],
          rows: [
            ["Pemeriksaan keselamatan, kondo", "Unit lama, baru dibeli, sebelum ubah suai", "RM250 – RM350"],
            ["Pemeriksaan keselamatan, rumah landed", "Rumah lama, baru dibeli, sebelum ubah suai", "RM350 – RM600"],
            ["Tukar wiring separa (satu bilik)", "Satu kawasan rosak, bahagian lain lulus ujian", "RM1,000 – RM2,500"],
            [
              "Tukar wiring penuh, kondo (2–3 bilik)",
              "Wiring berusia 25+ tahun atau gagal ujian",
              "RM6,000 – RM10,000",
            ],
            [
              "Tukar wiring penuh, rumah teres setingkat",
              "Wiring berusia 25+ tahun atau gagal ujian",
              "RM8,000 – RM13,000",
            ],
            [
              "Tukar wiring penuh, rumah teres dua tingkat",
              "Wiring berusia 25+ tahun atau gagal ujian",
              "RM13,000 – RM20,000",
            ],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Berapa lama wiring rumah tahan di Malaysia?",
        a: "Wiring bertebat PVC biasanya tahan 25–30 tahun, kadangkala lebih lama jika dipasang dengan baik dan tidak pernah terlebih beban. Haba di ruang bumbung dan kelembapan tinggi memendekkan jangka hayatnya. Walau berapa pun usianya, kami sarankan pemeriksaan setiap 10–15 tahun.",
      },
      {
        q: "Bolehkah saya tukar wiring sebahagian rumah sahaja?",
        a: "Boleh, jika ujian menunjukkan wiring yang lain masih dalam keadaan baik. Tukar wiring separa untuk satu bilik berharga RM1,000 – RM2,500 dengan kami. Namun, jika seluruh rumah guna kabel lama yang sama, membaiki satu kawasan demi satu kawasan biasanya lebih mahal akhirnya.",
      },
      {
        q: "Apa yang termasuk dalam pemeriksaan keselamatan elektrik?",
        a: "Pemeriksaan kami merangkumi ujian rintangan penebat dan ujian trip RCCB pada setiap litar, semakan kesinambungan bumi, pemeriksaan visual DB box, plug point dan kabel yang boleh dicapai, serta laporan bertulis dengan harga untuk sebarang pembaikan. Kondo RM250 – RM350, rumah landed RM350 – RM600.",
      },
      {
        q: "Selamatkah tinggal di rumah dengan wiring lama?",
        a: "Wiring lama yang lulus ujian tidak semestinya berbahaya. Risikonya meningkat apabila tiada RCCB, penebat sudah rosak, atau rumah kini menanggung beban jauh lebih tinggi daripada reka bentuk asal wiring. Pemeriksaan menggantikan tekaan dengan keputusan ujian.",
      },
      {
        q: "Patutkah saya tukar wiring sebelum ubah suai?",
        a: "Ya, jika wiringnya sudah lama. Tukar wiring sebelum plaster, cat dan siling baru mengelakkan hacking pada dinding yang sudah siap kemudian hari, dan anda boleh merancang plug point dan lampu mengikut susun atur baru. Inilah masa paling murah dan paling kurang mengganggu untuk melakukannya.",
      },
    ],
  },
};
