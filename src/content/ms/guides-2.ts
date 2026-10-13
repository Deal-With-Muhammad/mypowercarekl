import type { GuideText } from "@/lib/types";

export const guidesPart2: Record<string, GuideText> = {
  "ev-charger-installation-malaysia": {
    title: "Pasang EV Charger di Rumah: Kos, Peraturan & Proses (2026)",
    metaTitle: "Kos Pasang EV Charger di Rumah, Malaysia (2026)",
    metaDescription:
      "Kos pasang EV charger di rumah ialah RM1,800 – RM2,800 jika anda ada charger sendiri. Panduan 2026: peraturan, kelulusan kondo, 7kW vs 22kW dan pelepasan cukai.",
    tldr: "Kos pasang EV charger di rumah di Lembah Klang biasanya RM2,800 – RM6,250 termasuk wallbox 7kW, atau RM1,800 – RM2,800 untuk kerja wiring dan pemasangan kami jika anda sudah ada charger. Untuk cas harian, gunakan wallbox Mode 3 pada litar sendiri dengan perlindungan RCD.",
    sections: [
      {
        heading: "Berapa kos pasang EV charger di rumah?",
        body: [
          "Jumlah kos bergantung pada charger yang anda beli, jarak dari DB box ke tempat letak kereta, dan sama ada bekalan elektrik rumah anda boleh menampung beban tambahan. Bagi rumah landed dengan wallbox 7kW single phase dan laluan kabel yang munasabah, kebanyakan pemilik membelanjakan RM2,800 – RM6,250 termasuk charger.",
          "Harga kami RM1,800 – RM2,800 merangkumi litar khas dari DB box, kabel bersaiz betul, perlindungan RCD, isolator, pemasangan wallbox, ujian dan cas percubaan dengan kereta anda. Jika pengedar kereta anda menawarkan pemasangan percuma, semak apa sebenarnya yang termasuk supaya anda tidak membayar dua kali.",
        ],
        table: {
          head: ["Jenis pemasangan", "Harga pasaran", "My Power Care KL"],
          rows: [
            ["Upah dan wiring sahaja (charger sendiri, rumah landed)", "RM800 – RM2,500", "RM1,800 – RM2,800"],
            [
              "Pakej lengkap dengan charger 7kW (rumah landed)",
              "RM2,800 – RM6,250",
              "RM1,800 – RM2,800 + charger pada harga kos",
            ],
            ["Kondo, dengan sub-meter TNB", "RM4,500 – RM8,000", "Sebut harga selepas lawatan tapak"],
            [
              "Tukar single phase ke 3 phase (jika perlu)",
              "RM3,000 – RM10,000",
              "RM5,000 – RM8,000 tidak termasuk caj TNB",
            ],
          ],
        },
      },
      {
        heading: "7kW single phase atau 11kW/22kW 3 phase: yang mana anda perlukan?",
        body: [
          "Charger 7kW menggunakan bekalan single phase dan menambah lebih kurang 35–45km jarak perjalanan bagi setiap jam cas. Jika dicas semalaman, kebanyakan EV akan penuh, sebab itu ia sesuai untuk kebanyakan rumah. Charger 11kW atau 22kW memerlukan bekalan 3 phase, yang tidak ada pada kebanyakan rumah teres dan unit kondo.",
          "Semak onboard AC charger kereta anda sebelum membayar untuk wallbox yang lebih besar. Banyak EV popular hanya menerima 7kW atau 11kW melalui AC, jadi unit 22kW tidak akan mengecas lebih laju. Jika rumah anda sudah menggunakan beberapa unit aircond dan instant water heater, kami semak beban dahulu; penyelesaiannya mungkin naik taraf ke 3 phase atau charger dengan load management.",
        ],
        table: {
          head: ["Charger", "Bekalan diperlukan", "Anggaran jarak ditambah sejam", "Sesuai untuk"],
          rows: [
            ["7kW", "Single phase, 32A", "35–45km", "Kebanyakan rumah, cas semalaman"],
            ["11kW", "3 phase, 16A setiap fasa", "60–70km", "Rumah landed 3 phase"],
            [
              "22kW",
              "3 phase, 32A setiap fasa",
              "Terhad oleh onboard charger kereta",
              "Kereta yang menerima 22kW melalui AC",
            ],
          ],
        },
      },
      {
        heading: "Apa syarat garis panduan pengecasan EV?",
        body: [
          "Garis Panduan Sistem Pengecasan Kenderaan Elektrik (EVCS) oleh Suruhanjaya Tenaga, yang dikeluarkan pada Februari 2025, menetapkan peraturan untuk pengecasan di rumah. Ringkasnya, cas harian perlu menggunakan wallbox Mode 3 pada litar sendiri dengan perlindungan RCD, dan pemasangan perlu diuji sebelum digunakan.",
          "Kabel mudah alih yang disertakan dengan kebanyakan EV adalah untuk kegunaan sekali-sekala. Menarik arus 10A atau lebih melalui plug point 13A rumah selama lapan jam setiap malam akan menyebabkan soket dan plug terlalu panas. Kebanyakan wallbox ada pengesan kebocoran DC terbina dalam, sebab itu RCD Type A sudah memadai; tanpanya, RCD Type B diperlukan.",
        ],
        bullets: [
          "Wallbox Mode 3 pada litar khasnya sendiri",
          "Tiada cas harian secara tetap dari plug point 13A biasa",
          "Perlindungan RCD 30mA, sekurang-kurangnya Type A",
          "Ujian penebatan, pembumian dan RCD sebelum kali pertama digunakan",
        ],
      },
      {
        heading: "Apa beza pemasangan di kondo berbanding rumah landed?",
        body: [
          "Di rumah landed, kerjanya mudah: kami tarik litar khas dari DB box anda ke porch, biasanya siap dalam sehari. Di kondo, kabel perlu melalui harta bersama untuk sampai ke petak parkir anda, jadi anda perlukan kelulusan bertulis daripada JMB atau MC di bawah Akta Pengurusan Strata 2013 dan undang-undang kecil bangunan.",
          "Sesetengah bangunan mewajibkan sub-meter TNB berasingan bagi setiap petak EV, atau menggunakan sistem pengecasan bersama yang dikendalikan oleh operator. Jangkakan anda perlu menghantar lukisan pelan, spesifikasi charger dan butiran kontraktor kepada pejabat pengurusan. Kelulusan boleh mengambil masa beberapa minggu, jadi mulakan sebelum kereta tiba. Pemasangan di kondo dengan sub-meter biasanya berharga RM4,500 – RM8,000.",
        ],
      },
      {
        heading: "Bagaimana proses pemasangan, langkah demi langkah?",
        body: [
          "Bagi rumah landed, langkah-langkah ini biasanya melibatkan satu lawatan tapak yang ringkas dan satu hari pemasangan, kira-kira seminggu selang antaranya. Tempoh untuk kondo bergantung pada berapa cepat pejabat pengurusan memberi jawapan. Jika DB box anda sudah lama atau sudah penuh, kami mungkin cadangkan ia ditukar semasa lawatan yang sama dan bukannya menyumbat satu lagi breaker.",
        ],
        bullets: [
          "1. Tinjauan tapak: semak bekalan utama, kapasiti DB box dan laluan kabel",
          "2. Pilih charger: wallbox 7kW single phase sesuai untuk kebanyakan rumah",
          "3. Kelulusan: kelulusan JMB atau MC untuk kondo, serta permohonan sub-meter TNB jika perlu",
          "4. Pemasangan: litar khas, kabel, RCD, isolator dan wallbox",
          "5. Ujian: ujian penebatan, pembumian dan RCD",
          "6. Serahan: cas percubaan dengan kereta anda dan tunjuk cara guna app",
        ],
      },
      {
        heading: "Bolehkah anda tuntut pelepasan cukai untuk EV charger di rumah?",
        body: [
          "Boleh. Malaysia memberi pelepasan cukai pendapatan individu sehingga RM2,500 untuk perbelanjaan kemudahan pengecasan EV, termasuk membeli dan memasang charger di rumah. Pelepasan ini telah dilanjutkan hingga tahun taksiran 2027. Simpan invois atas nama anda sendiri, dan sahkan syarat terkini dengan LHDN sebelum mengisi borang cukai.",
          "Sesetengah jenama kereta dan penjual charger juga ada promosi pemasangan. Ia berbaloi digunakan, tetapi semak sama ada promosi itu meliputi keseluruhan laluan kabel, RCD dan ujian, atau hanya pemasangan asas sehingga panjang kabel tertentu, dengan setiap meter tambahan dicaj berasingan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Bolehkah saya cas EV dari plug point 13A biasa?",
        a: "Hanya sekali-sekala. Garis panduan ST 2025 tidak membenarkan cas harian secara tetap dari plug point 13A biasa. Soket rumah tidak direka untuk membawa arus 10A atau lebih selama berjam-jam setiap malam, dan ia akan terlalu panas. Untuk kegunaan harian, pasang wallbox Mode 3 pada litar khas.",
      },
      {
        q: "Perlukah bekalan 3 phase untuk EV charger di rumah?",
        a: "Tidak untuk charger 7kW, yang menggunakan single phase dan sesuai untuk kebanyakan pemandu. Anda perlukan 3 phase untuk charger 11kW atau 22kW. Jika beban rumah anda sudah hampir mencapai had, penilaian beban akan menunjukkan sama ada anda perlu naik taraf dahulu.",
      },
      {
        q: "Berapa lama masa untuk pasang EV charger?",
        a: "Pemasangan di rumah landed biasanya mengambil masa setengah hari hingga sehari penuh, selepas tinjauan tapak yang ringkas. Pemasangan di kondo mengambil masa lebih lama secara keseluruhan kerana kelulusan JMB atau MC dan, jika diperlukan, sub-meter TNB, yang boleh menambah beberapa minggu.",
      },
      {
        q: "RCD jenis apa yang diperlukan untuk EV charger di rumah?",
        a: "RCD 30mA, sekurang-kurangnya Type A, pada litar charger itu sendiri. Type A sudah memadai jika wallbox ada pengesan kebocoran DC terbina dalam, dan kebanyakannya ada. Tanpa ciri itu, RCD Type B diperlukan.",
      },
      {
        q: "Berapa banyak elektrik yang digunakan oleh EV charger di rumah?",
        a: "Bergantung pada jarak pemanduan anda. Sebagai anggaran kasar, 1,500km sebulan pada kira-kira 16kWh setiap 100km menggunakan sekitar 240kWh. Semak tarif TNB anda untuk mengira kosnya; cas di rumah biasanya jauh lebih murah setiap kWh berbanding pengecasan pantas DC awam.",
      },
    ],
  },
  "water-heater-10ma-rccb": {
    title: "Water Heater Perlu RCCB 10mA? Peraturan Malaysia Diterangkan",
    metaTitle: "Adakah Water Heater Perlu RCCB 10mA?",
    metaDescription:
      "Water heater perlu RCCB 10mA di bilik air mengikut peraturan Malaysia. Beza 10mA, 30mA dan 100mA, ELCB terbina dalam vs RCCB, dan kos pemasangan dari RM150.",
    tldr: "Ya, water heater perlu RCCB 10mA: Peraturan 36, Peraturan-Peraturan Elektrik 1994 mewajibkan RCD yang trip pada 10mA atau kurang di lokasi basah seperti bilik air, dan ST mewajibkannya untuk water heater sejak 2014. Dengan kami, pasang water heater pada point sedia ada berharga RM150 – RM250, manakala point baru dengan RCCB 10mA berharga RM350 – RM550.",
    sections: [
      {
        heading: "Apa kata peraturan Malaysia tentang RCCB untuk water heater?",
        body: [
          "Peraturan 36, Peraturan-Peraturan Elektrik 1994 menetapkan kepekaan peranti arus baki (RCD) mengikut lokasi: 10mA atau kurang untuk lokasi basah, 30mA atau kurang untuk litar soket dan peralatan pegang tangan, dan 100mA atau kurang untuk perlindungan am. Bilik air yang ada shower ialah contoh lokasi basah yang paling jelas.",
          "Pada tahun 2014, Suruhanjaya Tenaga mewajibkan perlindungan RCD 10mA untuk water heater. Kulit yang basah membolehkan lebih banyak arus mengalir pada voltan yang sama, jadi shower diberi perlindungan yang paling sensitif. Setiap point water heater baru yang kami pasang ada RCCB 10mA sendiri, berasingan daripada RCCB di DB box anda.",
        ],
      },
      {
        heading: "Apa beza RCCB 10mA, 30mA dan 100mA?",
        body: [
          "Nilai mA ialah arus bocor yang membuatkan RCCB trip; semakin rendah nombornya, semakin sensitif. 30mA ialah tahap yang dipilih untuk melindungi manusia daripada renjatan elektrik yang boleh membawa maut dalam keadaan biasa dan kering. 10mA memberi margin keselamatan tambahan untuk keadaan basah, dan 100mA terutamanya untuk mengesan kerosakan bumi yang boleh menyebabkan kebakaran.",
          "Banyak rumah lama hanya ada satu RCCB 100mA untuk seluruh rumah. Ia membantu mencegah kebakaran, tetapi tidak melindungi manusia daripada renjatan elektrik dengan pasti. Jika DB box anda begini, menambah RCCB 30mA untuk litar plug point dan RCCB 10mA untuk water heater ialah naik taraf yang berbaloi.",
        ],
        table: {
          head: ["Nilai", "Di mana digunakan", "Apa yang dilindungi"],
          rows: [
            [
              "10mA",
              "Water heater, bilik air dan lokasi basah lain",
              "Renjatan elektrik kepada manusia dalam keadaan basah",
            ],
            [
              "30mA",
              "Litar soket, peralatan pegang tangan, kebanyakan DB box rumah",
              "Renjatan elektrik kepada manusia dalam keadaan biasa",
            ],
            [
              "100mA",
              "Perlindungan am untuk seluruh pemasangan",
              "Kerosakan bumi dan risiko kebakaran, bukan renjatan kepada manusia",
            ],
          ],
        },
      },
      {
        heading: "Cukupkah ELCB terbina dalam water heater saya?",
        body: [
          "Kebanyakan instant water heater yang dijual di Malaysia ada ELCB terbina dalam dengan butang ujiannya sendiri pada unit. Ia lapisan perlindungan tambahan yang berguna, tetapi ia hanya melindungi dari heater ke hadapan. Kabel, suis dan sambungan antara DB box dan heater tidak dilindungi olehnya, dan ia terletak di dalam casing yang panas dan lembap.",
          "RCCB 10mA yang berasingan, di DB box atau di sebelah isolator heater, melindungi keseluruhan litar dan boleh diuji serta ditukar secara berasingan. Sebab itu kami memasangnya walaupun heater sudah ada ELCB terbina dalam. Tekan kedua-dua butang ujian sebulan sekali untuk memastikan ia trip.",
        ],
      },
      {
        heading: "Kenapa elektrik rumah saya trip bila buka shower?",
        body: [
          "Jika RCCB trip hanya apabila heater dihidupkan atau air panas mengalir, elemen pemanas biasanya puncanya. Apabila elemen semakin lama, retakan kecil membolehkan arus bocor ke dalam air dan ke bumi. RCCB 10mA akan mengesannya dahulu, dan itulah memang tugasnya. Matikan heater di isolator dan berhenti menggunakannya sehingga ia diperiksa.",
          "Jika anda rasa sedikit renjatan dari mana-mana paip, kepala shower atau casing heater, ambil tindakan serta-merta. Matikan heater di isolator, dan suis utama jika perlu, jauhkan semua orang dari bilik air dan hubungi tukang elektrik. Jangan guna shower lagi sehingga punca kerosakan ditemui.",
        ],
        bullets: [
          "Trip hanya apabila heater dihidupkan atau air panas mengalir",
          "ELCB pada heater itu sendiri trip berulang kali",
          "Rasa sedikit renjatan dari kepala shower, paip atau casing heater",
          "Air bocor dari badan heater atau tempat kabel masuk",
          "Air tetap suam walaupun pada tetapan paling tinggi",
          "Kesan terbakar atau bau di sekitar suis heater",
        ],
      },
      {
        heading: "Berapa kos pasang water heater?",
        body: [
          "Memasang heater baru pada point sedia ada yang dilindungi dengan betul ialah kerja yang cepat. Point baru lebih mahal kerana memerlukan kabel khas dari DB box, suis double pole 20A di luar kawasan shower dan RCCB 10mA. Harga di bawah termasuk upah dan bahan, dengan heater dibekalkan oleh anda.",
          "Jika point sedia ada anda tiada RCCB 10mA, kami akan cadangkan ia ditambah sebelum menyambung heater baru. Di sesetengah kondo lama, heater berkongsi litar dengan lampu atau plug point bilik air; ia patut dipindahkan ke breaker sendiri, kerana kebanyakan instant water heater sahaja sudah menarik 15–16A.",
        ],
        table: {
          head: ["Kerja", "Harga pasaran", "My Power Care KL"],
          rows: [
            ["Pasang water heater (point sedia ada)", "RM80 – RM250", "RM150 – RM250"],
            ["Water heater dengan point baru + RCCB 10mA", "RM200 – RM600", "RM350 – RM550"],
            ["Tukar RCCB / ELCB", "RM140 – RM600", "RM250 – RM450"],
            ["Elektrik trip: cari punca dan baiki", "RM100 – RM400", "RM150 – RM400"],
          ],
        },
      },
      {
        heading: "Bagaimana memastikan water heater selamat?",
        body: [
          "Air dan elektrik memang tidak sesuai bersama dalam bilik kecil yang berjubin, tetapi heater yang dipasang dengan betul sangat selamat. Kebanyakan kes berbahaya yang kami jumpa melibatkan RCCB yang tiada atau di-bypass, sambungan DIY, atau heater yang asyik trip lalu disambung semula supaya tidak trip lagi. Amalan berikut mengurangkan risiko.",
        ],
        bullets: [
          "Beri heater litar sendiri dan RCCB 10mA",
          "Letakkan suis atau isolator di luar kawasan shower",
          "Tekan butang ujian RCCB dan heater sebulan sekali",
          "Jangan sesekali bypass atau buang RCCB yang asyik trip",
          "Tukar heater yang casingnya retak atau bocor air",
          "Pastikan point baru dan penggantian dipasang serta diuji oleh tukang elektrik",
        ],
      },
    ],
    faqs: [
      {
        q: "Cukupkah RCCB 30mA untuk water heater?",
        a: "Tidak. Water heater di bilik air berada di lokasi basah, dan peraturan Malaysia menetapkan RCD 10mA atau kurang di situ. RCCB 30mA di DB box masih berguna sebagai sandaran untuk bahagian lain litar, tetapi heater perlukan perlindungan 10mA sendiri.",
      },
      {
        q: "Kenapa RCCB 10mA saya trip walaupun heater baru?",
        a: "Antara puncanya ialah kelembapan dalam suis atau kotak sambungan, kabel rosak, litar yang dikongsi dengan beban lain di bilik air, atau RCCB yang rosak. Kadangkala kebocoran kecil daripada beberapa peralatan pada litar yang sama boleh terkumpul. Ujian litar akan menemui punca sebenar.",
      },
      {
        q: "Bolehkah saya pasang water heater sendiri?",
        a: "Memasang heater di dinding memang mudah, tetapi sambungan elektrik patut dibuat oleh tukang elektrik. Banyak jaminan heater juga mensyaratkan pemasangan secara profesional. Sambungan bumi yang salah atau RCCB yang tiada di kawasan shower ialah risiko renjatan elektrik yang serius.",
      },
      {
        q: "Di mana RCCB 10mA patut dipasang?",
        a: "Sama ada di DB box pada litar heater sendiri, atau dalam kotak kecil di sebelah isolator heater, di luar kawasan shower. Kedua-duanya boleh. Ia patut diletakkan di tempat yang kering dan mudah dicapai, supaya anda boleh tekan butang ujian setiap bulan dan set semula jika ia trip.",
      },
      {
        q: "Adakah storage water heater juga perlu RCCB 10mA?",
        a: "Secara umumnya ya, jika heater itu membekalkan air ke shower atau bilik air. Storage heater juga menarik arus tinggi untuk tempoh yang lama, jadi ia perlukan litar khas dengan kabel bersaiz betul dan breaker yang sesuai. Kami semak litar sedia ada sebelum menyambung mana-mana heater pengganti.",
      },
    ],
  },
  "how-to-choose-an-electrician-kl": {
    title: "Cara Pilih Tukang Elektrik yang Bagus di KL: 8 Semakan",
    metaTitle: "Cara Pilih Tukang Elektrik Terbaik KL (2026)",
    metaDescription:
      "Cara cari tukang elektrik terbaik KL: harga jelas, sebut harga tetap, ujian yang betul, jaminan bertulis dan ulasan sebenar. 8 semakan sebelum anda tempah.",
    tldr: "Tukang elektrik terbaik di KL untuk kerja anda ialah yang memaparkan harga dari awal, memberi sebut harga tetap sebelum mula kerja, menguji dengan meter yang betul, menawarkan jaminan mutu kerja bertulis dan ada ulasan Google terkini daripada pelanggan sebenar. Berhati-hati dengan harga yang sangat murah melalui telefon tetapi naik pada hari kerja.",
    sections: [
      {
        heading: "Apa yang menjadikan tukang elektrik pilihan terbaik untuk kerja anda?",
        body: [
          "Tiada satu tukang elektrik terbaik di Kuala Lumpur untuk semua jenis kerja. Untuk RCCB yang asyik trip di rumah teres PJ, anda mahukan seseorang yang cepat mencari punca dan menerangkannya. Untuk tukar wiring seluruh rumah, anda mahukan seseorang yang memperincikan setiap point dan siap mengikut jadual.",
          "Semakan di bawah sesuai untuk kedua-duanya, dan hanya ambil masa lima minit di WhatsApp.",
        ],
      },
      {
        heading: "8 perkara untuk disemak sebelum tempah",
        body: [
          "Semak perkara ini sebelum anda bersetuju untuk lawatan. Tukang elektrik yang bagus akan senang hati menjawab semuanya.",
        ],
        bullets: [
          "Harga yang boleh dilihat: senarai harga terbuka atau julat harga yang jelas di WhatsApp, bukan 'bergantung' untuk semua benda.",
          "Caj lawatan atau pemeriksaan yang jelas, dinyatakan sebelum mereka datang.",
          "Sebut harga tetap di tapak sebelum kerja bermula, dan sebarang kerja tambahan dipersetujui dahulu.",
          "Ujian yang betul dengan insulation tester dan multimeter, bukan cuba-cuba.",
          "Jaminan mutu kerja bertulis, sebaiknya 6 hingga 12 bulan.",
          "Ulasan Google terkini yang menyebut kerja dan kawasan tertentu.",
          "Barang berkualiti: jenama yang dikenali untuk RCCB, MCB dan kabel, dan barang lama ditunjukkan kepada anda.",
          "Komunikasi yang jelas: punca kerosakan diterangkan dalam bahasa mudah dan mesej WhatsApp dibalas.",
        ],
      },
      {
        heading: "Tanda bahaya yang perlu dielakkan",
        body: [
          "Batalkan sahaja, atau sekurang-kurangnya dapatkan pendapat kedua, jika anda nampak mana-mana tanda ini.",
        ],
        bullets: [
          "Harga sangat murah melalui telefon tetapi naik apabila tukang elektrik sampai",
          "Bypass atau buang RCCB supaya ia 'tidak trip lagi'",
          "Tiada resit, tiada jaminan dan tiada cara untuk menghubungi mereka selepas itu",
          "Desakan untuk tukar seluruh DB box sebelum sebarang ujian dibuat",
          "Plug point ditambah pada litar lampu, atau wiring dibiarkan terdedah",
        ],
      },
      {
        heading: "Berapa harga tukang elektrik yang bagus di KL?",
        body: [
          "Jangkakan caj lawatan atau pemeriksaan RM50 hingga RM150 di Lembah Klang, kemudian sebut harga untuk kerja tersebut. Harga pertengahan atas biasanya termasuk ujian yang betul, barang berkualiti dan jaminan. Harga kami bermula RM80 setiap lawatan, dan senarai harga penuh kami terbuka kepada umum.",
        ],
        table: {
          head: ["Kerja", "Harga kami", "Sebut harga yang adil patut termasuk"],
          rows: [
            ["Baiki elektrik trip", "RM150 – RM400", "Ujian litar, punca dibaiki, ujian semula"],
            ["Plug point 13A baru", "RM150 – RM450", "Kabel, trunking atau wiring tersembunyi, soket"],
            ["Water heater dengan point baru", "RM350 – RM550", "Kabel, RCCB 10mA, suis isolator"],
            ["Tukar DB box (single phase)", "RM1,000 – RM2,000", "Papan, breaker, RCCB, pelabelan"],
          ],
        },
      },
      {
        heading: "Soalan untuk ditanya di WhatsApp",
        body: [
          "Hantar gambar masalah anda bersama soalan-soalan ini. Jawapannya banyak memberitahu bagaimana kerja itu akan berjalan.",
        ],
        bullets: [
          "Berapa caj lawatan atau pemeriksaan anda?",
          "Adakah saya akan dapat harga tetap sebelum anda mula?",
          "Apa jaminan yang anda beri untuk kerja ini?",
          "Jenama breaker atau kabel apa yang akan digunakan?",
          "Bila boleh datang, dan berapa lama kerja ini?",
        ],
      },
    ],
    faqs: [
      {
        q: "Siapa tukang elektrik terbaik di KL?",
        a: "Bergantung pada kerja, tetapi cari tukang elektrik yang ada harga terbuka, sebut harga tetap sebelum kerja, ujian yang betul, jaminan bertulis dan ulasan Google terkini. Kami memaparkan harga kami, memberi sebut harga sebelum mula dan memberi jaminan mutu kerja 12 bulan.",
      },
      {
        q: "Bagaimana cari tukang elektrik berdekatan yang boleh dipercayai?",
        a: "Cari tukang elektrik di kawasan anda di Google Maps, baca ulasan terkini yang menyebut kerja seperti kerja anda, dan WhatsApp dua atau tiga orang dengan gambar. Yang bertanya soalan yang baik dan memberi julat harga yang jelas biasanya pilihan yang lebih selamat.",
      },
      {
        q: "Normalkah bayar untuk lawatan tukang elektrik di Malaysia?",
        a: "Ya. Kebanyakan tukang elektrik di Lembah Klang mengenakan caj lawatan atau pemeriksaan, biasanya RM50 hingga RM150, kerana perjalanan dan mencari punca masalah mengambil masa. Tanya berapa cajnya sebelum mereka datang.",
      },
      {
        q: "Patutkah saya pilih sebut harga paling murah?",
        a: "Tidak semestinya. Bandingkan apa yang termasuk: ujian, saiz kabel, jenama breaker, kerja pecah dinding (hacking) dan jaminan. Sebut harga murah yang tidak termasuk perkara ini selalunya lebih mahal kemudian.",
      },
    ],
  },
  "ceiling-fan-installation-cost-malaysia": {
    title: "Upah Pasang Kipas Siling di Malaysia (Harga 2026)",
    metaTitle: "Harga Pasang Kipas Siling 2026 di Malaysia",
    metaDescription:
      "Upah pasang kipas siling di KL & Selangor: RM200 setiap kipas pada point sedia ada, RM300 – RM400 untuk point baru. Apa yang termasuk, kos tambahan & tip jimat.",
    tldr: "Upah pasang kipas siling di KL ialah RM200 setiap kipas pada kadar kami jika point kipas sudah ada, RM300 – RM400 jika perlu point kipas baru, dan RM350 – RM600 untuk siling tinggi. Harga pasaran bermula lebih rendah, tetapi selalunya tidak termasuk memasang komponen kipas, mengimbang bilah dan menanggalkan kipas lama.",
    sections: [
      {
        heading: "Berapa kos pasang kipas siling?",
        body: [
          "Harga banyak bergantung pada sama ada sudah ada point kipas dan cangkuk di siling. Jadual di bawah membandingkan sebut harga biasa di Lembah Klang dengan kadar kami. Harga ialah upah sahaja: anda bekalkan kipas, atau kami belikan pada harga kos dengan resit ditunjukkan.",
        ],
        table: {
          head: ["Kerja", "Harga pasaran", "My Power Care KL"],
          rows: [
            ["Pasang kipas siling (point sedia ada)", "RM80 – RM150", "RM200 setiap kipas"],
            ["Kipas siling dengan point kipas baru", "RM150 – RM330", "RM300 – RM400"],
            ["Kipas siling pada siling tinggi atau double volume", "RM250 – RM600", "RM350 – RM600"],
            ["Tukar regulator kipas", "RM50 – RM150", "RM80 – RM150"],
            ["Baiki kipas siling", "RM80 – RM350", "RM120 – RM250"],
            ["Pasang kipas dinding", "RM60 – RM150", "RM100 – RM150"],
          ],
        },
      },
      {
        heading: "Apa yang patut termasuk dalam harga?",
        body: [
          "Sebut harga yang sangat murah selalunya hanya meliputi menggantung dan menyambung kipas. Tanya sama ada perkara berikut termasuk, supaya harga tidak naik pada hari kerja:",
        ],
        bullets: [
          "Memasang komponen kipas, bilah dan light kit (jika ada)",
          "Memeriksa cangkuk siling boleh menampung berat dan gerakan kipas",
          "Wiring dan pembumian kipas, serta memasang regulator atau penerima remote",
          "Mengimbang bilah supaya kipas tidak bergoyang pada kelajuan tinggi",
          "Menanggalkan kipas lama dan membuang kotak pembungkusan",
        ],
      },
      {
        heading: "Apa yang menambah kos?",
        body: [
          "Point kipas baru, kerana kabel perlu ditarik dari litar terdekat atau DB box. Siling plaster tanpa cangkuk yang betul. Siling double volume yang memerlukan perancah. Kipas DC dengan kawalan remote dan app, yang lebih lama untuk disetkan. Peraturan kondo yang mengehadkan waktu kerja.",
          "Hantar gambar point siling dan model kipas kepada kami di WhatsApp, dan kami akan sahkan harga sebelum datang.",
        ],
      },
      {
        heading: "Cara jimat kos pasang kipas",
        body: ["Beberapa langkah mudah boleh mengurangkan kos."],
        bullets: [
          "Pasang beberapa kipas dalam satu lawatan: caj lawatan minimum RM80 dikenakan sekali sahaja",
          "Hantar gambar point siling dan model kipas sebelum tempah",
          "Pilih panjang downrod yang sesuai dengan ketinggian siling semasa membeli kipas",
          "Pasang kipas semasa ubah suai, sebelum siling dicat",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa upah pasang kipas siling di KL?",
        a: "RM200 setiap kipas pada point sedia ada mengikut kadar kami, termasuk memasang komponen kipas, mengimbang bilah dan menanggalkan kipas lama. Dengan point kipas baru, harganya RM300 – RM400, dan untuk siling tinggi RM350 – RM600.",
      },
      {
        q: "Berapa lama masa untuk pasang kipas siling?",
        a: "Kira-kira 45 hingga 90 minit setiap kipas pada point sedia ada. Point baru, light kit atau siling tinggi mengambil masa lebih lama.",
      },
      {
        q: "Kenapa kipas siling baru saya bergoyang?",
        a: "Biasanya bilah tidak seimbang, skru bilah longgar, atau cangkuk atau bracket pemasangan tidak kukuh. Mengimbang kipas ialah sebahagian daripada kerja pemasangan kami.",
      },
      {
        q: "Adakah anda bekalkan kipas siling?",
        a: "Kebanyakan pelanggan beli sendiri. Kami boleh bekalkan pada harga kos dengan resit ditunjukkan.",
      },
    ],
  },
};
