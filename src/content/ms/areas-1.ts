import type { AreaText } from "@/lib/types";

// Bahasa Melayu area copy, part 1 (KL areas). Keys match src/content/en/areas.ts.

export const areasPart1: Record<string, AreaText> = {
  "mont-kiara": {
    name: "Mont Kiara",
    intro:
      "Kebanyakan kerja tukang elektrik kami di Mont Kiara adalah di kondo tinggi yang dibina dari lewat 1990-an hingga kini, dan setiap kerja perlu melalui pejabat pengurusan (JMB/MC). Panggilan biasa ialah water heater yang membuat RCCB trip, downlight lama yang sudah malap, plug point tambahan untuk pejabat di rumah dan point EV charger yang perlu kelulusan JMB dahulu.",
    housing: "Kondo tinggi dan residensi servis yang ramai didiami ekspatriat, dari lewat 1990-an hingga projek baharu",
    neighbourhoods: ["Jalan Kiara", "Jalan Duta Kiara", "Solaris Mont Kiara", "Kiaramas", "Dutamas (Publika)"],
    landmarks: ["Publika", "163 Retail Park", "Plaza Mont Kiara", "Mont Kiara International School"],
    commonIssues: [
      "Water heater berkongsi RCCB utama 30mA, bukan RCCB 10mA khas, menyebabkan elektrik trip di bilik air",
      "Downlight halogen dan transformer rosak dalam unit tahun 1990-an dan 2000-an",
      "Permintaan pasang EV charger yang perlu kelulusan JMB dan laluan kabel dari DB unit ke petak parkir",
      "Permit ubah suai, deposit dan waktu kerja hari bekerja sahaja yang ditetapkan oleh pengurusan bangunan",
    ],
    faqs: [
      {
        q: "Adakah anda buat kerja di kondo Mont Kiara pada hujung minggu?",
        a: "Ya, jika pihak pengurusan membenarkannya. Banyak bangunan hanya membenarkan kerja bising pada hari bekerja, jadi pada hujung minggu kami buat kerja yang senyap seperti tukar RCCB, baiki water heater atau tukar lampu. Hantar peraturan bangunan anda kepada kami di WhatsApp.",
      },
      {
        q: "Boleh pasang EV charger di tempat letak kereta kondo saya di Mont Kiara?",
        a: "Biasanya boleh, tetapi JMB atau pihak pengurusan mesti meluluskannya dahulu. Kami periksa beban pada DB unit anda dan laluan kabel ke petak parkir, kemudian beri sebut harga tetap dan lakaran ringkas untuk dihantar bersama permohonan anda.",
      },
    ],
  },
  bangsar: {
    name: "Bangsar",
    intro:
      "Kerja tukang elektrik di Bangsar ada dua jenis. Rumah teres 1960-an dan 70-an di Bangsar Baru serta banglo di Bukit Bandaraya selalunya masih guna wiring asal, jadi tukar wiring dan naik taraf DB memang biasa. Bangsar South pula kawasan bangunan tinggi yang lebih baharu, di mana kami baiki lampu, plug point dan kerosakan DB kondo. Kami juga buat wiring kedai F&B sekitar Jalan Telawi.",
    housing:
      "Rumah teres dan banglo 1960-an–70-an di Bangsar Baru dan Bukit Bandaraya, bangunan tinggi 2010-an di Bangsar South, lot kedai di Telawi",
    neighbourhoods: [
      "Bangsar Baru",
      "Bangsar Park",
      "Bukit Bandaraya",
      "Lucky Garden",
      "Bukit Pantai",
      "Bangsar South",
    ],
    landmarks: ["Bangsar Village", "Bangsar Shopping Centre", "Jalan Telawi", "Stesen LRT Bangsar"],
    commonIssues: [
      "Wiring asal berusia 50 tahun dan kabel terlalu kecil yang ditemui semasa rumah teres Bangsar Baru diubah suai",
      "DB lama dengan fius rewireable atau tiada RCCB di banglo sebelum 1980",
      "Litar dapur dan aircond terlebih beban di lot kedai F&B sepanjang Jalan Telawi",
      "Permit ubah suai kondo dan waktu kerja tetap di menara Bangsar South",
    ],
    faqs: [
      {
        q: "Kami sedang ubah suai rumah teres di Bangsar Baru. Patutkah tukar wiring sekali?",
        a: "Ya, jika wiringnya masih asal. Tukar wiring lebih murah dan kurang bersepah semasa dinding dan siling sudah dibuka. Kami periksa kabel dan DB, tandakan point baharu bersama anda dan kontraktor anda, dan uji semuanya sebelum dinding ditutup.",
      },
      {
        q: "Adakah anda buat wiring kedai untuk kafe dan restoran di Bangsar?",
        a: "Ya. Untuk premis di Telawi dan Bangsar South, kami tambah litar untuk peralatan dapur, aircond, papan tanda dan lampu, dan boleh bekerja di luar waktu perniagaan anda. Jika kedai perlukan beban lebih daripada yang mampu ditanggung bekalan, kami beritahu anda sebelum beri sebut harga.",
      },
    ],
  },
  cheras: {
    name: "Cheras",
    intro:
      "Banyak rumah yang tukang elektrik kami lawati di Cheras ialah rumah teres 1970-an dan 80-an di Taman Connaught, Taman Midah dan Bandar Tun Razak. Banyak yang masih guna DB box asal, kadang-kadang dengan ELCB lama yang trip tanpa sebab jelas, dan plug point terlalu sedikit untuk aircond hari ini. Kondo baharu di sepanjang laluan MRT biasanya hanya perlukan pembaikan kecil yang lebih cepat.",
    housing:
      "Rumah teres setingkat dan dua tingkat 1970-an–80-an, flat kos rendah, kondo baharu di sepanjang laluan MRT",
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
      "Pasar malam Taman Connaught",
      "Hospital Canselor Tuanku Muhriz (HUKM)",
    ],
    commonIssues: [
      "DB box asal 1970-an dan 80-an dengan ELCB lama yang trip sesuka hati atau langsung tidak trip",
      "Plug point terlalu sedikit, sampai terpaksa guna extension dan adaptor yang terlebih beban",
      "Bekalan dan kabel tidak cukup besar untuk beberapa aircond dan water heater segera yang digunakan serentak",
      "Suis dan plug point terbakar serta sambungan neutral longgar di rumah teres lama",
    ],
    faqs: [
      {
        q: "Rumah teres saya di Cheras masih guna ELCB lama. Perlu tukar ke?",
        a: "Kemungkinan besar perlu. ELCB yang dipasang pada tahun 1970-an dan 80-an selalunya gagal trip bila sepatutnya, atau trip kerana kebocoran kecil yang tidak berbahaya. Kami uji dahulu, dan jika rosak kami gantikan dengan RCCB moden. Biasanya kerja ini siap pada hari yang sama.",
      },
      {
        q: "Adakah anda datang ke Cheras Selangor juga, bukan hanya Cheras KL?",
        a: "Ya. Tukang elektrik kami datang ke Cheras KL, dari Taman Connaught hingga Bandar Tun Razak, dan ke sebelah Selangor sekitar Batu 9, Bandar Mahkota Cheras dan Sungai Long. Perjalanan ke sebelah Selangor mungkin lebih lama kerana trafik petang, jadi kami beri anggaran masa bila anda mesej.",
      },
    ],
  },
  kepong: {
    name: "Kepong",
    intro:
      "Kepong menggabungkan rumah teres dan rumah kedai 1960-an dan 70-an di Kepong Baru dengan kondo yang lebih baharu sekitar Metro Prima dan Jinjang. Di rumah lama, tukang elektrik kami di Kepong selalu jumpa fius rewireable, sambungan DIY yang dibalut tape dan dapur yang trip bila periuk nasi dan cerek elektrik digunakan serentak. Pemilik rumah kedai pula hubungi kami bila unit sewa di tingkat atas perlukan litar sendiri.",
    housing:
      "Rumah teres dan rumah kedai 1960-an–70-an di Kepong Baru, flat 1990-an, kondo baharu berhampiran Metro Prima",
    neighbourhoods: [
      "Kepong Baru",
      "Taman Bukit Maluri",
      "Taman Daya",
      "Metro Prima",
      "Jinjang",
      "Taman Usahawan Kepong",
    ],
    landmarks: [
      "FRIM (Institut Penyelidikan Perhutanan Malaysia)",
      "Taman Metropolitan Kepong",
      "Metro Prima",
      "Brem Mall",
    ],
    commonIssues: [
      "Papan fius rewireable masih digunakan di rumah teres asal Kepong Baru",
      "Litar dapur trip bila beberapa peralatan digunakan serentak",
      "Tingkat atas rumah kedai yang dijadikan bilik tanpa litar berasingan",
      "Kabel lama di dalam dinding menunjukkan kesan panas di plug point",
    ],
    faqs: [
      {
        q: "Boleh asingkan wiring rumah kedai saya di Kepong untuk penyewa tingkat atas?",
        a: "Boleh. Kami beri setiap tingkat atau bilik litar dan breaker sendiri dalam DB yang betul, supaya kerosakan seorang penyewa tidak memutuskan elektrik semua orang. Jika anda mahu meter TNB berasingan, kami terangkan cara permohonannya. Anda dapat sebut harga tetap dahulu.",
      },
      {
        q: "Berapa cepat anda boleh sampai ke Kepong jika rumah saya tiada elektrik?",
        a: "Dari tengah KL biasanya 60–90 minit, bergantung pada trafik di MRR2 dan Jalan Kepong. Kami tawarkan servis hari yang sama setiap hari, jadi tempah pada waktu pagi dan kebanyakan kerosakan siap dibaiki pada hari itu juga.",
      },
    ],
  },
  setapak: {
    name: "Setapak",
    intro:
      "Setapak ada rumah teres dan flat tanpa lif 1970-an dan 80-an, kondo yang lebih baharu dan pasaran sewa yang besar sekitar TAR UMT. Banyak kerja tukang elektrik kami di Setapak datang daripada tuan rumah: baiki elektrik trip antara penyewa, tukar plug point terbakar di rumah sewa dan tambah litar bila rumah teres dipecahkan kepada bilik. Pemilik yang tinggal sendiri biasanya hubungi kami tentang DB lama dan water heater.",
    housing: "Rumah teres dan flat tanpa lif 1970-an–80-an, rumah sewa pelajar berhampiran TAR UMT, kondo baharu",
    neighbourhoods: ["Setapak Jaya", "Danau Kota", "Taman Melati", "Genting Klang", "Taman Ibu Kota"],
    landmarks: ["TAR UMT", "Setapak Central", "Stesen LRT Taman Melati"],
    commonIssues: [
      "Litar terlebih beban di rumah teres yang dijadikan bilik pelajar, setiap bilik dengan aircond sendiri",
      "Suis dan plug point terbakar akibat penggunaan berat di rumah sewa berkongsi",
      "DB lama tanpa perlindungan RCCB di rumah teres asal",
    ],
    faqs: [
      {
        q: "Saya sewakan rumah di Setapak kepada pelajar. Boleh periksa rumah antara penyewa?",
        a: "Boleh. Kami periksa DB, RCCB, plug point, point aircond dan water heater, baiki apa-apa yang tidak selamat dan hantar laporan ringkas bersama gambar melalui WhatsApp. Ia bukti berguna untuk penyewaan seterusnya dan mengesan kerosakan lebih awal.",
      },
      {
        q: "Boleh setiap bilik di rumah sewa ada breaker sendiri?",
        a: "Boleh. Kami boleh buat wiring semula supaya setiap bilik ada litar dan breaker sendiri dalam DB utama, jadi water heater atau aircond seorang penyewa tidak membuat seluruh rumah trip. Kami pastikan bekalan anda mampu menanggung jumlah beban sebelum beri sebut harga.",
      },
    ],
  },
  "wangsa-maju": {
    name: "Wangsa Maju",
    intro:
      "Wangsa Maju dirancang pada tahun 1980-an sebagai Seksyen 1 hingga 10, jadi kebanyakan rumahnya kini berusia 35 hingga 40 tahun. Flat dan apartmen merupakan bahagian yang besar, selain rumah teres dan kondo baharu berhampiran LRT. Kerja biasa tukang elektrik kami di Wangsa Maju ialah DB box yang sudah haus, plug point tambahan di dapur dan water heater yang membuat RCCB trip.",
    housing: "Flat, apartmen dan rumah teres 1980-an di Seksyen 1–10, kondo baharu berhampiran LRT",
    neighbourhoods: ["Wangsa Maju Seksyen 1–10", "Wangsa Melawati", "Sri Rampai", "Taman Bunga Raya", "Desa Setapak"],
    landmarks: ["Wangsa Walk Mall", "Stesen LRT Wangsa Maju", "Alpha Angle"],
    commonIssues: [
      "Wiring dan DB box berusia 35–40 tahun di flat dan rumah teres asal",
      "Dapur dengan hanya satu atau dua plug point untuk peralatan moden",
      "Water heater membuat RCCB utama trip kerana tiada RCCB 10mA khas",
    ],
    faqs: [
      {
        q: "Kawasan mana di Wangsa Maju yang anda liputi?",
        a: "Semua kawasan, dari Seksyen 1 hingga 10, termasuk Wangsa Melawati, Sri Rampai dan Desa Setapak. Kebanyakan lawatan ke flat, jadi beritahu blok, tingkat dan sama ada ada lif semasa anda WhatsApp, supaya kami bawa peralatan yang betul.",
      },
      {
        q: "Water heater di apartmen saya asyik buat elektrik trip. Water heater atau wiring yang rosak?",
        a: "Boleh jadi kedua-duanya. Kami uji elemen water heater untuk kebocoran arus, kemudian periksa RCCB dan wiring. Selalunya water heater berkongsi RCCB 30mA rumah sedangkan ia sepatutnya ada RCCB 10mA sendiri. Kami tunjukkan bacaan ujian dan beri sebut harga dahulu.",
      },
    ],
  },
  "sri-petaling": {
    name: "Sri Petaling",
    intro:
      "Bandar Baru Sri Petaling dibangunkan pada tahun 1980-an dengan rumah teres, apartmen rendah dan deretan lot kedai, kemudian diikuti kondo berhampiran LRT. Lot kedainya penuh dengan restoran, jadi banyak panggilan kepada tukang elektrik kami di Sri Petaling ialah kerja komersial: litar dapur terlebih beban, kerosakan 3 phase dan elektrik trip waktu makan malam. Kerja kediaman kebanyakannya DB box lama dan plug point tambahan.",
    housing: "Rumah teres dan apartmen rendah 1980-an, lot kedai yang padat, kondo 2000-an berhampiran LRT",
    neighbourhoods: ["Bandar Baru Sri Petaling", "Taman Sri Endah", "Jalan Radin Bagus", "Jalan Radin Anum"],
    landmarks: ["Stesen LRT Sri Petaling", "Endah Parade", "Deretan kedai makan Jalan Radin Bagus"],
    commonIssues: [
      "Dapur restoran membebankan litar dan trip pada waktu puncak",
      "Beban 3 phase tidak seimbang di lot kedai dengan beban memasak dan peti sejuk yang berat",
      "DB box dan wiring asal 1980-an di rumah teres",
    ],
    faqs: [
      {
        q: "Boleh baiki elektrik trip di restoran saya di Sri Petaling tanpa perlu tutup sehari?",
        a: "Biasanya boleh. Kami datang sebelum kedai dibuka atau di antara waktu makan, cari litar yang terlebih beban atau rosak dan imbangkan beban antara fasa. Jika perlu perubahan lebih besar, seperti sub-DB dapur, kami beri sebut harga dan jadualkan kerja mengikut waktu perniagaan anda.",
      },
      {
        q: "Adakah anda tukar wiring rumah teres lama di Sri Petaling?",
        a: "Ya. Banyak rumah teres di sini berusia sekitar 40 tahun dengan wiring asal. Kami buat tukar wiring penuh atau sebahagian, contohnya dapur dan bilik air dahulu, dengan sebut harga tetap dan jaminan mutu kerja 12 bulan. Kebanyakan keluarga terus tinggal di rumah semasa kami bekerja.",
      },
    ],
  },
  "bukit-jalil": {
    name: "Bukit Jalil",
    intro:
      "Sejak Sukan Komanwel 1998 membawa Stadium Nasional ke sini, Bukit Jalil dipenuhi kondo 2000-an dan 2020-an serta rumah landed dalam kawasan berpagar, dengan Pavilion Bukit Jalil di tengah-tengahnya. Wiring di sini kebanyakannya moden, jadi tukang elektrik kami di Bukit Jalil lebih banyak dipanggil untuk naik taraf berbanding pembaikan: EV charger, suis pintar, lampu hiasan dan plug point tambahan.",
    housing: "Kondo dan residensi servis 2000-an–2020-an, rumah berangkai dan semi-D dalam kawasan berpagar",
    neighbourhoods: [
      "Bukit Jalil City",
      "Taman Esplanad",
      "Bukit Jalil Golf & Country Resort",
      "Technology Park Malaysia",
      "Jalan Jalil Perkasa",
    ],
    landmarks: ["Stadium Nasional Bukit Jalil", "Pavilion Bukit Jalil", "Axiata Arena", "Taman Rekreasi Bukit Jalil"],
    commonIssues: [
      "Pemasangan EV charger yang perlu semakan beban dan kelulusan JMB atau persatuan penduduk",
      "Suis pintar dan dimmer yang tidak serasi dengan lampu LED sedia ada",
      "Kecacatan semasa serahan kunci unit baharu, seperti sambungan terminal longgar dan label litar DB yang salah",
      "Litar aircond dan water heater ditambah semasa ubah suai tanpa menaik taraf DB",
    ],
    faqs: [
      {
        q: "Boleh pasang EV charger di rumah landed saya di Bukit Jalil?",
        a: "Boleh. Kami periksa bekalan masuk dan DB anda, tarik litar khas dengan perlindungan RCD dan pasang charger di tempat kabelnya sampai ke kereta anda. Banyak kawasan berpagar mahu dimaklumkan dahulu, jadi kami boleh kongsi pelan kerja dengan pihak pengurusan.",
      },
      {
        q: "Saya baru dapat kunci kondo baharu di Bukit Jalil. Boleh periksa wiring sebelum saya masuk?",
        a: "Boleh, dan ia berbaloi dibuat sebelum tempoh liabiliti kecacatan (DLP) tamat. Kami uji setiap plug point, RCCB dan pembumian (earthing), semak label DB dan cari sambungan longgar. Anda dapat senarai bersama gambar untuk dihantar kepada pemaju.",
      },
    ],
  },
  ampang: {
    name: "Ampang",
    intro:
      "Ampang merentasi sempadan KL dan Selangor, jadi dalam seminggu tukang elektrik kami di Ampang mungkin tukar wiring banglo lama di Ampang Hilir dan baiki elektrik trip di rumah teres 1970-an di Taman Ampang Utama. Rumah besar di sebelah KL menanggung beban lampu, pam dan aircond yang tinggi. Kawasan perumahan di lereng bukit dan rumah teres lama di sebelah Selangor kebanyakannya perlukan naik taraf DB dan baiki wiring luar rumah.",
    housing:
      "Banglo besar dan kediaman kedutaan di Ampang Hilir, rumah teres 1970-an–80-an di Ampang Jaya, rumah landed dan kondo di lereng bukit",
    neighbourhoods: [
      "Ampang Hilir",
      "Taman U-Thant",
      "Taman Ampang Utama",
      "Pandan Indah",
      "Taman Kosas",
      "Bukit Indah",
      "Taman Dagang",
    ],
    landmarks: ["Ampang Point", "Great Eastern Mall", "Stesen LRT Ampang", "Tempat tinjauan Bukit Ampang"],
    commonIssues: [
      "Wiring lama dan DB terlalu kecil di banglo lama yang besar dengan banyak aircond",
      "Lampu taman dan plug point luar rumah trip selepas hujan lebat di rumah lereng bukit",
      "Kerosakan pam air dan autogate di rumah landed",
      "Wiring asal 1970-an–80-an di rumah teres Taman Ampang Utama dan Pandan",
    ],
    faqs: [
      {
        q: "Adakah anda datang ke kedua-dua belah Ampang, KL dan Selangor?",
        a: "Ya. Kami bekerja di Ampang Hilir dan sekitar Jalan U-Thant di sebelah KL, serta di Ampang Jaya, Taman Ampang Utama, Pandan Indah dan kawasan lereng bukit di Selangor. Harga sama di kedua-dua belah, dengan caj minimum RM80 bagi setiap lawatan.",
      },
      {
        q: "Lampu taman saya buat seluruh rumah trip setiap kali hujan. Boleh baiki?",
        a: "Boleh. Di rumah lereng bukit Ampang, puncanya biasanya air masuk ke dalam lampu luar, kotak sambungan atau sambungan kabel bawah tanah. Kami cari kebocoran dengan ujian penebat, pasang pengganti kalis cuaca dan, jika perlu, asingkan litar luar rumah dengan RCCB sendiri.",
      },
    ],
  },
  sentul: {
    name: "Sentul",
    intro:
      "Sentul berkembang di sekitar bengkel kereta api KTM lama, dan flat tanpa lif, rumah kedai serta rumah teres kecil di sini selalunya ada wiring yang ditampal selama berdekad. Di sebelahnya terdapat kondo Sentul East dan Sentul West, di mana tukang elektrik kami kebanyakannya buat kerja lampu, plug point dan water heater. Di bangunan lama, kerja biasa ialah tukar DB dan tukar wiring sebahagian.",
    housing:
      "Flat tanpa lif lama, rumah kedai dan rumah teres kecil, serta kondo 2000-an–2020-an di Sentul East dan Sentul West",
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
      "Stesen KTM Sentul",
      "Stesen LRT Sentul Timur",
    ],
    commonIssues: [
      "Wiring yang ditampal dan disambung selama berdekad di rumah kedai lama Sentul Pasar",
      "DB box terlalu kecil di flat tanpa lif yang kini guna aircond dan water heater segera",
      "Peraturan ubah suai kondo dan tempahan lif di menara Sentul East dan West",
    ],
    faqs: [
      {
        q: "Boleh tukar wiring rumah kedai lama di Sentul tingkat demi tingkat?",
        a: "Boleh. Kerja berperingkat memang biasa bila tingkat bawah digunakan untuk perniagaan dan tingkat atas didiami. Kami mulakan dengan tingkat yang paling perlu dibaiki, kekalkan bekalan elektrik di bahagian lain jika boleh dan uji setiap peringkat. Satu sebut harga tetap meliputi semua peringkat.",
      },
      {
        q: "Adakah anda buat kerja di kondo Sentul East dan Sentul West?",
        a: "Ya. Kebanyakan kerja di sana ialah lampu, plug point tambahan, litar water heater dan RCCB trip. Kami ikut peraturan pengurusan tentang waktu kerja dan penggunaan lif, jadi beritahu blok anda dan sebarang permit yang diperlukan sebelum lawatan.",
      },
    ],
  },
  "taman-tun-dr-ismail": {
    name: "Taman Tun Dr Ismail (TTDI)",
    intro:
      "TTDI dibina mulai 1974 di atas bekas ladang getah, jadi kebanyakan rumah teres dan semi-D di sini berusia 40 hingga 50 tahun. Banyak yang masih guna kabel asal, dan bila pemilik ubah suai, tukang elektrik kami di TTDI biasanya cadangkan tukar wiring dan DB box baharu daripada menambah beban pada litar lama. Elektrik trip semasa ribut akibat lampu porch dan plug point luar rumah juga biasa berlaku.",
    housing:
      "Rumah teres, semi-D dan banglo 1970-an–80-an di bekas ladang getah, beberapa kondo baharu di pinggir kawasan",
    neighbourhoods: [
      "Jalan Datuk Sulaiman",
      "Jalan Tun Mohd Fuad",
      "Jalan Burhanuddin Helmi",
      "Jalan Wan Kadir",
      "Jalan Abang Haji Openg",
      "Jalan Leong Yew Koh",
    ],
    landmarks: ["Taman Rimba Kiara", "Stesen MRT TTDI", "Pasar TTDI", "Glo Damansara"],
    commonIssues: [
      "Kabel asal berusia 40–50 tahun dengan penebat yang sudah rapuh di rumah teres dan semi-D",
      "DB box lama tanpa RCCB, atau dengan ELCB yang sudah lapuk",
      "Lampu porch dan plug point taman membuat seluruh rumah trip semasa ribut musim tengkujuh",
      "Tambahan dapur dan aircond disambung ke litar lama semasa ubah suai",
    ],
    faqs: [
      {
        q: "Rumah kami di TTDI masih guna wiring asal 1970-an. Betul-betul perlu tukar wiring penuh?",
        a: "Tidak semestinya. Kami mulakan dengan ujian rintangan penebat pada setiap litar. Jika bacaannya lemah atau kabelnya rapuh, tukar wiring ialah pilihan yang selamat. Jika sesetengah litar lulus ujian, tukar wiring sebahagian dan DB baharu mungkin sudah memadai.",
      },
      {
        q: "Boleh tukar wiring rumah teres di TTDI semasa kami masih tinggal di situ?",
        a: "Boleh. Kami bekerja bilik demi bilik supaya kebanyakan bahagian rumah masih ada elektrik, tutup perabot dan bersihkan setiap hari, dan sambung semula bekalan elektrik setiap petang. Rumah teres setingkat mengambil masa kira-kira 3–5 hari bekerja, dua tingkat kira-kira 5–8 hari.",
      },
    ],
  },
  "desa-parkcity": {
    name: "Desa ParkCity",
    intro:
      "Dibina mulai tahun 2000-an di sekitar Central Park dan The Waterfront, Desa ParkCity mempunyai rumah teres, semi-D dan kondo premium yang masih agak baharu. Pemilik rumah di sini kebanyakannya memanggil tukang elektrik kami di Desa ParkCity untuk naik taraf: lampu hiasan dan lampu taman, suis pintar, litar tambahan untuk ubah suai dan EV charger. Kami ikut peraturan kontraktor kawasan ini dalam setiap kerja.",
    housing: "Rumah landed dan kondo premium 2000-an–2020-an dalam bandar terancang",
    neighbourhoods: ["The Waterfront", "Central Park", "Westside", "The Breezeway", "Clearwater", "Casaview"],
    landmarks: ["Central Park Desa ParkCity", "The Waterfront", "Plaza Arkadia"],
    commonIssues: [
      "Lampu hiasan dan dimmer berkelip kerana LED driver yang tidak sepadan",
      "Pemasangan EV charger yang perlu semakan bekalan dan kelulusan pengurusan estet",
      "Penukaran kepada suis pintar dalam kotak suis yang tiada wayar neutral",
      "Pendaftaran kontraktor dan peraturan waktu kerja yang ditetapkan oleh pengurusan estet",
    ],
    faqs: [
      {
        q: "Boleh pasang suis pintar di rumah saya di Desa ParkCity?",
        a: "Boleh. Kami periksa dahulu sama ada kotak suis anda ada wayar neutral, kerana banyak suis pintar memerlukannya. Jika tiada, kami tarik wayar neutral atau cadangkan model tanpa neutral yang sesuai dengan lampu anda, kemudian uji setiap litar sebelum pulang.",
      },
      {
        q: "Adakah anda ikut peraturan kontraktor di Desa ParkCity?",
        a: "Ya. Setiap presint biasanya minta kontraktor mendaftar di pondok pengawal atau pejabat pengurusan dan bekerja dalam waktu yang ditetapkan. Hantar peraturan presint anda kepada kami, dan kami akan bawa butiran yang diminta serta rancang kerja bising pada waktu yang dibenarkan.",
      },
    ],
  },
  "old-klang-road": {
    name: "Old Klang Road",
    intro:
      "Di sepanjang Jalan Klang Lama, kawasan lama seperti OUG dan Taman Desa terletak bersebelahan kondo baharu yang terus bertambah. Rumah teres OUG 1960-an dan 70-an ialah tempat tukang elektrik kami paling banyak buat kerja tukar wiring dan tukar DB, selalunya kerana fius dan kabel asal tidak mampu menampung beban aircond moden. Di menara yang lebih baharu, panggilan biasanya tentang RCCB trip, lampu dan water heater.",
    housing: "Rumah teres OUG 1960-an–70-an, rumah dan apartmen Taman Desa 1980-an, banyak kondo 2010-an–2020-an",
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
      "Papan fius rewireable dan kabel asal di rumah teres OUG",
      "Litar aircond ditambah selama bertahun-tahun tanpa menaik taraf suis utama atau DB",
      "Permit JMB kondo dan waktu kerja untuk wiring ubah suai",
    ],
    faqs: [
      {
        q: "Rumah saya di OUG masih guna kotak fius lama. Apa yang terlibat untuk menukarnya?",
        a: "Kami gantikan papan fius rewireable dengan DB moden yang ada MCB dan RCCB, label setiap litar dan uji wiring di belakangnya. Jika ada kabel yang terlalu rosak untuk disambung semula, kami tunjukkan kepada anda dan beri sebut harga berasingan. Tukar DB biasanya siap dalam sehari.",
      },
      {
        q: "Berapa lama masa untuk anda sampai ke Old Klang Road?",
        a: "Biasanya 45–75 minit dari tengah KL, walaupun trafik waktu puncak berhampiran Mid Valley boleh memanjangkannya. Jika elektrik trip atau ada bau terbakar, matikan suis di DB box jika selamat, kemudian WhatsApp kami untuk lawatan hari yang sama.",
      },
    ],
  },
  "kuchai-lama": {
    name: "Kuchai Lama",
    intro:
      "Kira-kira separuh kerja tukang elektrik kami di Kuchai Lama ialah kerja komersial. Kuchai Entrepreneurs Park penuh dengan kedai pejabat, bengkel dan kedai makan, jadi kerja di sana biasanya kerosakan 3 phase, plug point tambahan dan lampu untuk ubah suai premis. Rumah teres lama di Taman Kuchai perlukan naik taraf DB dan tukar wiring, manakala kondo baharu berhampiran MRT kebanyakannya perlukan pembaikan kecil dan pemasangan lampu atau aksesori.",
    housing: "Kedai pejabat dan unit industri ringan, rumah teres lama di Taman Kuchai, kondo 2010-an–2020-an",
    neighbourhoods: [
      "Kuchai Entrepreneurs Park",
      "Jalan Kuchai Lama",
      "Jalan Kuchai Maju",
      "Taman Kuchai",
      "Taman Naga Emas",
    ],
    landmarks: ["Kuchai Entrepreneurs Park", "Stesen MRT Kuchai", "Stesen MRT Taman Naga Emas"],
    commonIssues: [
      "Beban 3 phase tidak seimbang dan elektrik trip di kedai pejabat yang ada bengkel dan dapur",
      "Ubah suai pejabat (fit-out) yang perlukan susun atur plug point baharu dan lampu panel LED",
      "Wiring dan DB box lama di rumah teres Taman Kuchai",
    ],
    faqs: [
      {
        q: "Adakah anda buat wiring 3 phase untuk kedai pejabat di Kuchai Entrepreneurs Park?",
        a: "Ya. Kami kesan punca trip pada papan 3 phase, imbangkan beban antara fasa, tambah sub-DB untuk dapur atau mesin dan pasang point baharu untuk kerja fit-out. Kerja yang lebih besar boleh dijadualkan di luar waktu perniagaan supaya kedai anda terus beroperasi.",
      },
      {
        q: "Boleh buat kerja elektrik untuk ubah suai pejabat baharu saya di Kuchai Lama?",
        a: "Boleh. Hantar pelan lantai atau gambar melalui WhatsApp dan kami beri satu harga tetap untuk plug point, lampu, litar aircond dan perubahan DB. Kami bekerjasama dengan pereka dalaman atau kontraktor anda dan uji semuanya sebelum serahan.",
      },
    ],
  },
  segambut: {
    name: "Segambut",
    intro:
      "Di Segambut Dalam dan lorong-lorong lama berciri kampung, rumah selalunya dibesarkan bilik demi bilik, dan wiringnya turut bertambah dengan cara yang sama: wayar permukaan yang panjang, saiz kabel bercampur dan sambungan yang sudah bertahun-tahun tidak diperiksa. Berhampiran Jalan Duta dan Kompleks Mahkamah Kuala Lumpur, kondo baharu memberi kerja rutin kepada tukang elektrik kami di Segambut seperti lampu, plug point dan RCCB.",
    housing: "Rumah lama gaya kampung dengan tambahan kemudian, rumah teres lama, kondo baharu berhampiran Jalan Duta",
    neighbourhoods: ["Segambut Dalam", "Segambut Tengah", "Taman Sri Sinar", "Jalan Segambut", "Jalan Duta"],
    landmarks: ["Kompleks Mahkamah Kuala Lumpur", "Stesen KTM Segambut", "MITEC"],
    commonIssues: [
      "Tambahan wiring ad hoc dengan saiz kabel bercampur di rumah gaya kampung",
      "Wayar permukaan dan kotak sambungan yang terdedah kepada lembap dan panas",
      "Pembumian (earthing) yang tiada atau rosak di rumah lama",
      "Permit pengurusan untuk kerja di menara kondo baharu",
    ],
    faqs: [
      {
        q: "Rumah kami di Segambut sudah beberapa kali dibesarkan. Boleh buat wiringnya selamat?",
        a: "Boleh. Kami kesan setiap litar hingga ke DB, cari kabel yang terlalu kecil atau tersambung dengan buruk dan periksa pembumian. Kemudian kami beri sebut harga untuk membaiki bahagian yang tidak selamat dahulu, dan tukar wiring penuh hanya jika ujian menunjukkan ia perlu.",
      },
      {
        q: "Adakah anda buat kerja di kondo baharu berhampiran Jalan Duta di Segambut?",
        a: "Ya. Untuk unit kondo, kami uruskan RCCB trip, litar water heater, lampu dan plug point tambahan. Jika bangunan anda perlukan permit kerja atau tempahan lif, beritahu kami semasa mesej dan kami akan rancang lawatan mengikutnya.",
      },
    ],
  },
  "sri-hartamas": {
    name: "Sri Hartamas",
    intro:
      "Sri Hartamas mula terbentuk pada tahun 1990-an, dengan kondo, rumah teres dan semi-D di Desa Sri Hartamas serta deretan restoran dan bar yang sibuk. Pada usia sekitar 30 tahun, rumah di sini sudah sampai ke tahap DB box, suis dan litar water heater mula rosak. Restoran berhampiran Plaza Damas memanggil tukang elektrik kami di Sri Hartamas untuk litar dapur, papan tanda dan lampu.",
    housing: "Kondo, rumah teres dan semi-D 1990-an, dengan lot kedai F&B di sepanjang jalur komersial utama",
    neighbourhoods: ["Desa Sri Hartamas", "Jalan Sri Hartamas 1", "Plaza Damas", "Hartamas Heights", "Dutamas"],
    landmarks: ["Plaza Damas", "Hartamas Shopping Centre"],
    commonIssues: [
      "DB box dan suis berusia 30 tahun mula rosak di rumah 1990-an",
      "RCCB trip akibat water heater di bilik air kondo lama",
      "Litar dapur dan aircond terlebih beban di restoran berhampiran Plaza Damas",
    ],
    faqs: [
      {
        q: "Kondo 1990-an saya di Sri Hartamas trip setiap beberapa hari. Apa punca biasanya?",
        a: "Di bangunan seusia ini, puncanya selalunya RCCB yang sudah haus, elemen water heater yang bocor arus atau kelembapan dalam lampu bilik air atau balkoni. Kami asingkan setiap litar untuk cari punca, tunjukkan bacaan ujian dan beri sebut harga sebelum membaiki. Banyak kes selesai dalam satu lawatan.",
      },
      {
        q: "Boleh buat kerja di restoran saya di Sri Hartamas di luar waktu perniagaan?",
        a: "Boleh. Kami boleh datang pada waktu pagi sebelum restoran dibuka, atau di antara waktu makan tengah hari dan makan malam. Kerja biasa termasuk litar dapur baharu, wiring papan tanda, tukar lampu dan mengesan punca trip yang berlaku pada waktu puncak.",
      },
    ],
  },
  brickfields: {
    name: "Brickfields",
    intro:
      "Di Brickfields, rumah kedai sebelum perang dan menara KL Sentral boleh terletak hanya dua jalan jauhnya. Di sepanjang Jalan Tun Sambanthan, rumah kedai dan flat tanpa lif yang lama menanggung wiring tambahan selama berdekad untuk kedai, kedai makan dan bilik di tingkat atas. Di bangunan tinggi Sentral, kerja tukang elektrik kami di Brickfields kebanyakannya kerosakan DB kondo, lampu dan water heater, dibuat mengikut peraturan bangunan yang ketat.",
    housing:
      "Rumah kedai sebelum dan selepas perang, flat tanpa lif lama, kondo dan pejabat tinggi moden sekitar KL Sentral",
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
      "Wiring tambahan selama berdekad di rumah kedai yang digunakan sebagai kedai di bawah dan bilik di atas",
      "Beban dapur dan lampu yang berat di restoran dan gerai Little India",
      "DB box lama dan tiada RCCB di flat tanpa lif lama",
      "Permit ketat dan tempahan lif di menara kediaman KL Sentral",
    ],
    faqs: [
      {
        q: "Boleh betulkan wiring di rumah kedai lama di Brickfields?",
        a: "Boleh. Kami kesan dahulu apa yang disambung ke mana, kerana bangunan ini selalunya ada wiring daripada beberapa generasi. Kemudian kami asingkan litar kedai dan kediaman, ganti bahagian yang tidak selamat dan pasang DB moden dengan perlindungan RCCB, secara berperingkat jika anda mahu.",
      },
      {
        q: "Adakah anda buat kerja di kondo KL Sentral?",
        a: "Ya. Bangunan sekitar KL Sentral biasanya perlukan permit kontraktor dan tempahan lif, dan ada yang hanya benarkan kerja pada hari bekerja. Hantar butiran unit dan peraturan bangunan melalui WhatsApp, dan kami akan uruskan dokumen dengan pihak pengurusan dahulu.",
      },
    ],
  },
  klcc: {
    name: "KLCC",
    intro:
      "Kerja tukang elektrik kami di KLCC hampir semuanya di dalam kondo mewah dan residensi servis, di mana peraturan bangunan menentukan setiap kerja: pendaftaran kontraktor, waktu kerja tetap, tempahan lif dan kadang-kadang diiringi pengawal keselamatan. Permintaan biasa ialah tukar lampu, kerosakan dimmer dan LED driver, plug point tambahan untuk pejabat di rumah dan RCCB trip akibat water heater atau lampu balkoni.",
    housing:
      "Kondo mewah dan residensi servis bertingkat tinggi dari tahun 2000-an hingga kini, serta apartmen lama di sekitar Jalan Ampang",
    neighbourhoods: [
      "Jalan Ampang",
      "Jalan Binjai",
      "Jalan Kia Peng",
      "Jalan Stonor",
      "Jalan Conlay",
      "Jalan P. Ramlee",
    ],
    landmarks: ["Menara Berkembar Petronas", "Suria KLCC", "Taman KLCC", "Kuala Lumpur Convention Centre"],
    commonIssues: [
      "LED driver dan dimmer rosak dalam susunan lampu hiasan",
      "RCCB trip akibat water heater dan lampu balkoni yang terdedah kepada hujan",
      "Pendaftaran kontraktor, tempahan lif dan waktu kerja tetap di menara yang diuruskan",
    ],
    faqs: [
      {
        q: "Boleh anda bekerja mengikut peraturan kontraktor bangunan saya di KLCC?",
        a: "Boleh. Hantar keperluan pihak pengurusan dan kami akan mendaftar lebih awal, tempah lif servis dan bekerja dalam waktu yang dibenarkan. Kebanyakan bangunan di KLCC mahu butiran pekerja sehari dua lebih awal, jadi lebih awal anda mesej, lebih cepat kami boleh jadualkan.",
      },
      {
        q: "Lampu dimmable di kondo saya di KLCC berkelip. Boleh baiki?",
        a: "Biasanya boleh. Lampu berkelip di kondo mewah selalunya berpunca daripada dimmer yang tidak sepadan dengan LED driver, atau driver di atas siling yang hampir rosak. Kami uji dimmer dan driver, kemudian beri pilihan penggantian dan sebut harga sebelum memesan apa-apa.",
      },
    ],
  },
  "bukit-bintang": {
    name: "Bukit Bintang",
    intro:
      "Kerja tukang elektrik kami di Bukit Bintang kebanyakannya komersial. Rumah kedai lama sekitar Jalan Alor, Changkat dan Tengkat Tong Shin kini menempatkan dapur restoran, bar dan rumah tumpangan dengan wiring yang tidak pernah direka untuk beban sebegitu, jadi litar terlebih beban dan sambungan terbakar memang biasa. Kami rancang kebanyakan pembaikan pada waktu pagi atau petang, sebelum perniagaan bermula, dan turut menjaga kondo berdekatan.",
    housing: "Rumah kedai lama yang ditukar menjadi premis F&B dan rumah tumpangan, hotel, apartmen servis dan kondo",
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
      "Dapur restoran dan bar membebankan wiring asal rumah kedai",
      "Terminal terbakar dan titik panas pada papan 3 phase yang beroperasi pada beban tinggi",
      "Rumah tumpangan hasil ubah suai dengan litar terlalu sedikit untuk aircond setiap bilik",
      "Pembaikan yang perlu dijadualkan mengikut waktu perniagaan yang lewat",
    ],
    faqs: [
      {
        q: "Boleh buat kerja elektrik di bar saya di Bukit Bintang tanpa mengganggu perniagaan?",
        a: "Boleh. Kebanyakan bar di sini buka pada sebelah malam, jadi kami tempah slot pagi atau awal petang dan cuba siapkan kerja sebelum anda buka. Kami bekerja setiap hari, termasuk hujung minggu, dan anda dapat sebut harga tetap sebelum kami mula.",
      },
      {
        q: "Kedai kami di Jalan Alor asyik trip waktu makan malam. Apa yang boleh anda buat?",
        a: "Kami periksa beban pada setiap litar dan fasa, cari bahagian yang terlebih beban atau rosak, dan baikinya. Selalunya ini bermakna mengasingkan peralatan berat ke litar berasingan atau menambah sub-DB. Jika bekalan elektrik itu sendiri terlalu kecil, kami terangkan proses naik taraf bekalan dengan TNB.",
      },
    ],
  },
  "desa-petaling": {
    name: "Desa Petaling",
    intro:
      "Keluarga di Desa Petaling kebanyakannya tinggal di rumah teres dan flat rendah 1980-an berhampiran Bandar Tasik Selatan. Selepas kira-kira 40 tahun, DB box, suis dan plug point asal sudah haus, dan isi rumah kini guna jauh lebih banyak aircond dan peralatan daripada yang dirancang untuk wiring itu. Kebanyakan kerja tukang elektrik kami di Desa Petaling ialah naik taraf DB, baiki elektrik trip, tukar wiring sebahagian dan tambah point baharu.",
    housing: "Rumah teres setingkat dan dua tingkat serta flat rendah 1980-an",
    neighbourhoods: ["Taman Desa Petaling", "Bandar Tasik Selatan", "Sungai Besi"],
    landmarks: ["Terminal Bersepadu Selatan (TBS)", "Stesen Bandar Tasik Selatan"],
    commonIssues: [
      "Suis dan plug point asal 1980-an retak atau terlalu panas",
      "DB box lama dengan suis utama terlalu kecil untuk beban aircond hari ini",
      "Flat dengan satu litar sahaja untuk dapur dan bilik air",
    ],
    faqs: [
      {
        q: "Berbaloikah naik taraf DB box di rumah 1980-an di Desa Petaling?",
        a: "Dalam kebanyakan kes, ya. DB moden dengan MCB dan RCCB yang betul kadarannya melindungi daripada kejutan elektrik dan memudahkan kerosakan diasingkan. Kami periksa wiring di belakangnya pada masa yang sama, dan anda dapat sebut harga tetap dahulu.",
      },
      {
        q: "Adakah anda datang ke Desa Petaling untuk kerja kecil seperti satu plug point?",
        a: "Ya, kerja kecil pun boleh. Setiap lawatan ada caj minimum RM80, jadi jika anda ada beberapa kerja kecil, seperti plug point, lampu dan kipas, senaraikan semuanya dalam satu mesej WhatsApp dan kami beri sebut harga sekali gus.",
      },
    ],
  },
  "salak-selatan": {
    name: "Salak Selatan",
    intro:
      "Kampung Baru Salak Selatan wujud sejak 1950-an, dan antara wiring tertua di KL ada di sini: rumah kayu dan batu dengan kabel permukaan, pemegang fius lama dan pembumian yang tiada atau berkarat. Rumah teres dan flat yang lebih baharu berhampiran stesen LRT dan KTM perlukan kerja yang lebih rutin. Di kampung lama, tukang elektrik kami di Salak Selatan cadangkan anda mulakan dengan pemeriksaan keselamatan.",
    housing: "Rumah Kampung Baru 1950-an, rumah teres dan flat lama, beberapa apartmen baharu berhampiran stesen",
    neighbourhoods: ["Kampung Baru Salak Selatan", "Salak South Garden", "Taman Salak Selatan", "Taman Desa Tasik"],
    landmarks: ["Stesen LRT Salak Selatan", "Stesen KTM Salak Selatan"],
    commonIssues: [
      "Wiring permukaan dan pemegang fius yang sangat lama di rumah Kampung Baru 1950-an",
      "Pembumian (earthing) yang tiada atau berkarat di rumah kampung kayu dan batu",
      "Beberapa generasi tambahan rumah berkongsi satu litar yang terlebih beban",
    ],
    faqs: [
      {
        q: "Rumah keluarga kami di Kampung Baru Salak South sangat lama. Dari mana kami patut mula?",
        a: "Mulakan dengan pemeriksaan keselamatan. Kami uji penebat, pembumian dan perlindungan utama, kemudian beritahu apa yang perlu dibaiki segera, seperti sambungan terdedah atau tiada RCCB, dan apa yang boleh ditangguhkan. Selepas itu anda boleh tukar wiring secara berperingkat dengan harga tetap bagi setiap peringkat.",
      },
      {
        q: "Boleh pasang RCCB di rumah yang tidak pernah ada RCCB?",
        a: "Boleh. Kami pasang DB baharu, atau tambah RCCB pada papan sedia ada jika selamat. Kami uji wiring dahulu, kerana rumah lama yang ada kebocoran arus boleh membuat RCCB baharu terus trip. Jika itu berlaku, kami cari dan baiki kebocorannya.",
      },
    ],
  },
};
