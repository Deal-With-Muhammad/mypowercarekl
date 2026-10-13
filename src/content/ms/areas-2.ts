import type { AreaText } from "@/lib/types";

export const areasPart2: Record<string, AreaText> = {
  "petaling-jaya": {
    name: "Petaling Jaya (PJ)",
    intro:
      "Petaling Jaya ialah bandar satelit pertama di Malaysia yang dibangunkan pada tahun 1950-an, dan seksyen-seksyen awal serta SS2 masih mempunyai rumah teres berusia 50 hingga 70 tahun. Rumah-rumah inilah yang paling banyak memerlukan tukang elektrik di PJ untuk tukar wiring dan DB box. Kelana Jaya dan kondo berhampiran LRT mempunyai wiring yang lebih baharu, jadi kerja di sana biasanya melibatkan lampu, plug point, kipas dan water heater.",
    housing:
      "Rumah teres dan banglo era 1950-an hingga 70-an di seksyen lama dan SS2, rumah era 1980-an hingga 2000-an di Kelana Jaya, serta kondo baharu",
    neighbourhoods: [
      "PJ Old Town",
      "Seksyen 14",
      "Seksyen 17",
      "SS2",
      "Sea Park",
      "Taman Paramount",
      "Kelana Jaya",
      "Seksyen 5",
    ],
    landmarks: ["Amcorp Mall", "Jaya One", "Paradigm Mall", "Taman Jaya"],
    commonIssues: [
      "Kabel berusia 50–70 tahun dan fius dawai jenis lama di rumah teres awal PJ",
      "Bekalan elektrik dan DB box yang tidak cukup kapasiti untuk beberapa unit aircond dan instant water heater",
      "Plug point terlalu sedikit dalam susun atur asal, menyebabkan wayar extension terlebih beban",
      "Lampu porch dan lampu taman menyebabkan trip ketika hujan lebat",
    ],
    faqs: [
      {
        q: "Bolehkah anda tukar wiring rumah teres lama di SS2 semasa kami masih tinggal di situ?",
        a: "Boleh. Kami tukar wiring satu bahagian pada satu masa supaya sebahagian besar rumah masih boleh digunakan, dan bekalan elektrik dipulihkan setiap petang. Di SS2, kami biasanya menggabungkan kerja tukar wiring dengan DB box baharu dan plug point tambahan, dalam satu sebut harga tetap dengan jaminan mutu kerja 12 bulan.",
      },
      {
        q: "Kawasan PJ mana yang anda liputi?",
        a: "Tukang elektrik kami meliputi seluruh Petaling Jaya, termasuk PJ Old Town, Seksyen 14, Seksyen 17, SS2, Sea Park, Taman Paramount, Kelana Jaya, Damansara dan Bandar Utama. Kebanyakan alamat mengambil masa 45–75 minit untuk sampai, dan kami boleh datang hari yang sama untuk masalah trip atau rumah tiada elektrik.",
      },
    ],
  },
  "subang-jaya": {
    name: "Subang Jaya",
    intro:
      "Sime UEP mula membangunkan Subang Jaya pada tahun 1976, jadi rumah teres asal di SS12 hingga SS19 kini berusia 45 hingga 50 tahun. Apabila pemilik mengadu elektrik kerap trip atau ada bau terbakar di DB box, puncanya selalunya wiring asal yang terpaksa menampung tiga atau empat unit aircond. Tukang elektrik kami di Subang Jaya juga bekerja di shoplot SS15 dan SS16 serta kondo berhampiran LRT.",
    housing:
      "Rumah teres dan semi-D era 1970-an hingga 80-an di SS12–SS19, shoplot di SS15 dan SS16, kondo berhampiran LRT",
    neighbourhoods: ["SS12–SS19", "Pusat bandar SS15", "SS14", "SS17", "SS19", "Taman Subang Mewah"],
    landmarks: ["Subang Parade", "Empire Shopping Gallery", "Stesen LRT SS15", "Stesen KTM Subang Jaya"],
    commonIssues: [
      "Wiring asal berusia 45–50 tahun di rumah teres SS12–SS19",
      "Suis utama dan DB box menjadi terlalu panas apabila beberapa unit aircond digunakan",
      "Plug point dan suis terbakar selepas berpuluh tahun digunakan",
      "Unit sewa pelajar berhampiran SS15 yang memerlukan litar tambahan",
    ],
    faqs: [
      {
        q: "Rumah kami di SS15 dibina pada akhir 1970-an. Patut tukar DB box atau tukar wiring?",
        a: "Bergantung pada keadaan kabel, jadi kami uji setiap litar dahulu. Jika bacaan penebat (insulation) masih dalam had yang boleh diterima, DB box baharu dengan perlindungan RCCB mungkin sudah memadai buat masa ini. Jika bacaannya lemah, tukar wiring sepenuhnya atau sebahagian lebih selamat. Anda akan dapat harga kedua-dua pilihan.",
      },
      {
        q: "Adakah anda meliputi bandar Subang Jaya dan juga USJ?",
        a: "Ya. Kami meliputi SS12 hingga SS19, pusat bandar sekitar SS15 dan SS16, seluruh USJ, Bandar Sunway dan Putra Heights. Kebanyakan lawatan tukang elektrik kami di Subang Jaya mengambil masa 60–90 minit, dan kami sahkan masa ketibaan di WhatsApp sebaik sahaja anda hantar lokasi.",
      },
    ],
  },
  usj: {
    name: "USJ",
    intro:
      "Rumah pertama di USJ siap pada tahun 1988, dan USJ 1 hingga 27 kini kebanyakannya rumah teres, semi-D dan apartmen rendah yang berusia 30 hingga 35 tahun. Pada usia inilah suis, plug point dan komponen DB box asal mula haus, tepat ketika keluarga menambah aircond dan water heater. Kerja biasa tukang elektrik kami di USJ ialah naik taraf DB box, tambah point dan mencari punca elektrik yang kerap trip.",
    housing:
      "Rumah teres dan semi-D era akhir 1980-an hingga 1990-an di USJ 1–27, serta pusat komersial seperti Taipan",
    neighbourhoods: ["USJ 1", "USJ 2–6", "USJ 9", "USJ 10 (Taipan)", "USJ 11–20", "USJ 21–27"],
    landmarks: ["Summit USJ", "USJ Taipan", "Main Place Mall", "Da Men Mall"],
    commonIssues: [
      "Komponen DB box dan suis berusia 30–35 tahun yang sudah haus",
      "Aircond dan water heater tambahan disambung pada litar asal",
      "Lampu porch dan plug point luar rumah trip ketika ribut petir pada waktu petang",
    ],
    faqs: [
      {
        q: "Rumah teres kami di USJ trip setiap kali hujan. Kenapa?",
        a: "Biasanya air masuk ke dalam lampu porch, plug point luar, lampu taman atau sambungan kabel di bawah porch kereta. Kami asingkan setiap litar untuk mencari litar yang bocor ke bumi (earth), kemudian tukar atau kedap semula dengan kelengkapan kalis cuaca. Selalunya masalah ini selesai dalam satu lawatan.",
      },
      {
        q: "Bolehkah anda tambah litar baharu untuk aircond di rumah saya di USJ?",
        a: "Boleh. Kami tarik kabel dan breaker khas untuk setiap aircond baharu, periksa sama ada DB box anda masih ada ruang dan suis utama mampu menampung beban, serta kemaskan laluan kabel dengan trunking atau wiring tersembunyi. Point aircond berharga RM250 – RM400 setiap satu.",
      },
    ],
  },
  puchong: {
    name: "Puchong",
    intro:
      "Puchong berkembang pesat pada tahun 1990-an dan 2000-an, dari Puchong Jaya dan Bandar Puteri hingga ke blok SOHO dan kondo di sepanjang sambungan LRT 2016. Tukang elektrik kami di Puchong mengendalikan semua jenis kerja, daripada naik taraf DB box di rumah teres berusia 25 tahun hingga kerja lampu dan plug point di unit kondo baharu. Pemilik SOHO juga menghubungi kami apabila unit yang dijadikan pejabat memerlukan lebih banyak plug point.",
    housing: "Rumah teres dan semi-D era 1990-an hingga 2000-an, kondo, SOHO dan kedai pejabat era 2010-an",
    neighbourhoods: [
      "Bandar Puteri",
      "Puchong Jaya",
      "Bandar Kinrara",
      "Puchong Perdana",
      "Taman Putra Prima",
      "Puchong Utama",
    ],
    landmarks: ["IOI Mall Puchong", "Setiawalk", "IOI Boulevard", "Stesen LRT IOI Puchong Jaya"],
    commonIssues: [
      "DB box dan suis berusia 20–30 tahun di rumah teres awal Puchong Jaya",
      "Unit SOHO yang dijadikan pejabat dengan plug point yang terlalu sedikit",
      "Peraturan ubah suai dan waktu kerja kondo di menara yang lebih baharu",
      "Penyewa kedai pejabat membebankan satu litar dengan peralatan dapur atau pejabat",
    ],
    faqs: [
      {
        q: "Adakah anda meliputi seluruh Puchong, termasuk Bandar Puteri dan Puchong Perdana?",
        a: "Ya. Kami meliputi Puchong Jaya, Bandar Puteri, Bandar Kinrara, Puchong Perdana, Puchong Utama dan Taman Putra Prima, serta kondo dan SOHO berhampiran LRT. Tukang elektrik kami biasanya sampai dalam 60–90 minit, dan kami sahkan masa apabila anda WhatsApp lokasi anda.",
      },
      {
        q: "Bolehkah anda tambah plug point dan lampu di SOHO saya di Puchong untuk dijadikan pejabat?",
        a: "Boleh. Kami periksa kapasiti DB box unit anda, kemudian tambah plug point, soket paras meja, lampu panel LED atau litar aircond mengikut keperluan. Jika bangunan memerlukan permit ubah suai, kami sediakan maklumat yang diminta oleh pejabat pengurusan dan bekerja dalam waktu yang dibenarkan.",
      },
    ],
  },
  "shah-alam": {
    name: "Shah Alam",
    intro:
      "Shah Alam, ibu negeri Selangor, dibahagikan kepada seksyen bernombor, dan seksyen yang lebih lama dibina pada tahun 1980-an dan 90-an dengan rumah teres, semi-D dan flat. Rumah-rumah ini kini memerlukan naik taraf DB box, litar tambahan dan kadangkala tukar wiring. Shah Alam juga mempunyai kawasan perindustrian yang luas, di mana tukang elektrik kami di Shah Alam mengendalikan bekalan 3 phase, DB kilang dan lampu high-bay.",
    housing:
      "Rumah teres dan semi-D era 1980-an hingga 90-an di seksyen lama, taman perumahan bertanah yang lebih baharu, flat dan zon perindustrian yang besar",
    neighbourhoods: [
      "Seksyen 2",
      "Seksyen 7",
      "Seksyen 9",
      "Seksyen 13",
      "Seksyen 18",
      "Bukit Jelutong (U8)",
      "Kota Kemuning",
    ],
    landmarks: [
      "Masjid Sultan Salahuddin Abdul Aziz (Masjid Biru)",
      "i-City",
      "Taman Tasik Shah Alam",
      "UiTM Shah Alam",
    ],
    commonIssues: [
      "Wiring dan DB box berusia 30 tahun di rumah teres seksyen lama",
      "Kerosakan 3 phase, beban tidak seimbang dan naik taraf DB di kilang dan gudang",
      "Lampu luar rumah dan autogate trip ketika hujan lebat",
    ],
    faqs: [
      {
        q: "Adakah anda buat kerja elektrik 3 phase dan kilang di Shah Alam?",
        a: "Ya. Kami mengesan punca trip dan beban tidak seimbang pada papan 3 phase, memasang DB dan sub-DB untuk mesin, dan menukar lampu gudang kepada LED high-bay. Untuk kerja yang lebih besar, kami datang meninjau dahulu, kemudian beri sebut harga tetap dan aturkan jadual mengikut waktu pengeluaran anda.",
      },
      {
        q: "Seksyen mana di Shah Alam yang anda liputi?",
        a: "Semua seksyen, daripada Seksyen 2, 7, 9 dan 13 yang lebih lama hingga Bukit Jelutong, Kota Kemuning dan Setia Alam. Shah Alam kawasannya luas, jadi tukang elektrik kami biasanya sampai dalam 75–105 minit. Hantar nombor seksyen anda di WhatsApp untuk anggaran yang lebih tepat.",
      },
    ],
  },
  klang: {
    name: "Klang",
    intro:
      "Klang, yang diisytiharkan sebagai bandar diraja pada tahun 2024, mempunyai pusat bandar lama yang dikelilingi taman perumahan lebih baharu seperti Bukit Tinggi dan Bandar Botanic. Wiring rumah kedai di bandar lama selalunya sudah berpuluh tahun usianya dan banyak diubah suai. Kawasan rendah juga mudah banjir, menyebabkan elektrik trip apabila air masuk ke plug point, DB box atau kabel bawah tanah. Di taman perumahan baharu, tukang elektrik kami di Klang kebanyakannya membuat kerja naik taraf dan pembaikan.",
    housing:
      "Rumah kedai di bandar lama, rumah teres era 1980-an hingga 90-an, taman perumahan era 2000-an hingga 2010-an di Bukit Tinggi dan Bandar Botanic",
    neighbourhoods: [
      "Bandar lama Klang",
      "Bukit Tinggi",
      "Bandar Botanic",
      "Taman Sri Andalas",
      "Meru",
      "Bukit Raja",
      "Port Klang",
    ],
    landmarks: ["Istana Alam Shah", "Jalan Tengku Kelana (Little India)", "AEON Bukit Tinggi", "Stesen KTM Klang"],
    commonIssues: [
      "Wiring berpuluh tahun yang banyak diubah suai di rumah kedai bandar lama",
      "Elektrik trip dan plug point rosak selepas banjir di kawasan rendah",
      "Air masuk ke DB box luar rumah dan kabel bawah tanah ketika hujan monsun",
    ],
    faqs: [
      {
        q: "Rumah kami di Klang dilanda banjir. Selamatkah untuk hidupkan semula elektrik?",
        a: "Belum, sehingga ia diperiksa. Air boleh meninggalkan kelembapan dan lumpur dalam plug point, suis dan DB box, yang boleh menyebabkan renjatan elektrik atau kebakaran. Biarkan suis utama dimatikan dan mesej kami. Kami uji setiap litar dan tukar bahagian yang rosak sebelum memulihkan bekalan elektrik.",
      },
      {
        q: "Berapa lama masa untuk anda sampai ke Klang?",
        a: "Biasanya 75–120 minit, kerana Klang ialah salah satu kawasan luar kami dan masa perjalanan bergantung pada trafik Federal Highway dan KESAS. Untuk kerja yang dirancang, kami tempah slot masa tetap, dan tukang elektrik kami boleh datang hari yang sama jika anda mesej pada waktu pagi.",
      },
    ],
  },
  cyberjaya: {
    name: "Cyberjaya",
    intro:
      "Cyberjaya dilancarkan pada tahun 1997 sebagai nadi Koridor Raya Multimedia (MSC), dan kini dipenuhi pusat data, pejabat teknologi, universiti serta banyak kondo untuk pelajar dan golongan profesional muda. Kebanyakan pemasangan elektrik masih baharu, jadi kerjanya lebih ringan: RCCB trip, water heater rosak, lampu, plug point tambahan dan kipas untuk unit sewa. Banyak panggilan kepada tukang elektrik kami di Cyberjaya datang daripada tuan rumah dan ejen hartanah.",
    housing:
      "Kondo, pangsapuri servis dan kediaman pelajar era 2000-an hingga 2020-an, serta beberapa rumah bertanah berpagar",
    neighbourhoods: [
      "Kawasan Cyber 1–12",
      "Shaftsbury Square",
      "Tamarind Square",
      "Cyberjaya Lake Gardens",
      "Mutiara Ville",
    ],
    landmarks: [
      "DPulze Shopping Centre",
      "Multimedia University (MMU)",
      "Cyberjaya Lake Gardens",
      "Limkokwing University",
    ],
    commonIssues: [
      "Water heater dan RCCB trip di unit kondo sewa",
      "Pemasangan kipas siling dan lampu untuk penyewa baharu",
      "Kelengkapan gred pemaju yang cepat rosak di blok lebih baharu",
    ],
    faqs: [
      {
        q: "Saya tuan rumah sebuah kondo di Cyberjaya. Bolehkah anda buat pembaikan semasa saya tiada di sana?",
        a: "Boleh. Penyewa atau ejen anda bukakan pintu untuk kami, dan kami hantar gambar, punca masalah dan sebut harga tetap melalui WhatsApp sebelum mula bekerja. Selepas anda setuju, kami baiki dan hantar bukti kerja yang telah siap. Anda boleh bayar secara dalam talian.",
      },
      {
        q: "Adakah anda pasang kipas siling dan lampu di kondo Cyberjaya?",
        a: "Ya. Pemasangan kipas siling bermula RM200 sebuah, termasuk pasang siap, imbang bilah dan buka kipas lama. Kami juga pasang downlight LED dan tambah point baharu jika perlu. Beritahu kami blok dan nombor unit jika pengawal keselamatan memerlukan pas kontraktor.",
      },
    ],
  },
  putrajaya: {
    name: "Putrajaya",
    intro:
      "Rumah di Putrajaya terdiri daripada kuarters kerajaan, kondo swasta dan taman perumahan bertanah berpagar di seluruh Presint yang bernombor. Kebanyakan perumahan dibina dari akhir 1990-an, jadi kami lebih kerap menemui kelengkapan berusia 20 hingga 25 tahun yang haus berbanding wiring yang sangat lama. Kerja biasa tukang elektrik kami di Putrajaya ialah tukar komponen DB box, baiki water heater, tambah plug point serta lampu dalam dan luar rumah.",
    housing: "Kuarters kerajaan, kondo dan rumah bertanah era akhir 1990-an hingga 2020-an di seluruh Presint",
    neighbourhoods: ["Presint 1", "Presint 8", "Presint 9", "Presint 11", "Presint 14", "Presint 16", "Presint 18"],
    landmarks: ["Perdana Putra", "Masjid Putra", "Alamanda Putrajaya", "IOI City Mall"],
    commonIssues: [
      "Suis, plug point dan RCCB berusia 20–25 tahun yang sudah haus",
      "Lampu luar rumah dan lampu taman trip ketika hujan lebat",
      "Litar tambahan diperlukan apabila pemilik menambah aircond dan water heater semasa ubah suai",
    ],
    faqs: [
      {
        q: "Adakah anda bekerja di semua Presint di Putrajaya?",
        a: "Ya. Kami meliputi Presint kediaman seperti 8, 9, 11, 14, 16 dan 18, serta kawasan komersial. Putrajaya ialah salah satu kawasan luar kami, jadi tukang elektrik kami biasanya sampai dalam 75–120 minit. Beritahu Presint dan bangunan anda semasa WhatsApp kami.",
      },
      {
        q: "Bolehkah anda bekerja di kuarters kerajaan di Putrajaya?",
        a: "Boleh, untuk pembaikan di dalam unit anda seperti trip, plug point, lampu dan water heater. Perubahan yang melibatkan bangunan atau wiring bersama biasanya memerlukan kelulusan agensi pengurusan terlebih dahulu, dan kami boleh berikan sebut harga bertulis untuk anda serahkan.",
      },
    ],
  },
  kajang: {
    name: "Kajang",
    intro:
      "Kajang, yang terkenal dengan satenya dan kini menjadi hujung laluan MRT Kajang, menggabungkan pekan lama yang penuh rumah kedai dengan taman perumahan yang sedang berkembang seperti Kajang 2 dan Sungai Chua. Wiring rumah kedai di pusat pekan selalunya lama dan terlebih beban, manakala rumah teres dan kondo baharu memerlukan kerja rutin. Ramai keluarga yang berulang-alik ke tempat kerja menempah tukang elektrik di Kajang pada slot selepas waktu kerja, dan kami boleh aturkannya.",
    housing:
      "Rumah kedai lama di pekan Kajang, rumah teres era 1980-an hingga 90-an, taman perumahan dan kondo era 2000-an hingga 2020-an",
    neighbourhoods: [
      "Pekan Kajang",
      "Sungai Chua",
      "Kajang 2",
      "Taman Prima Saujana",
      "Saujana Impian",
      "Taman Kajang Utama",
    ],
    landmarks: ["Stesen MRT Kajang", "Stadium Kajang", "Hospital Kajang"],
    commonIssues: [
      "Wiring lama dan terlebih beban di rumah kedai pekan Kajang",
      "Bahagian tambahan rumah teres lama yang disambung pada litar sedia ada",
      "Masalah lampu luar rumah dan autogate ketika musim hujan",
    ],
    faqs: [
      {
        q: "Bolehkah anda datang ke Kajang pada waktu petang selepas kerja?",
        a: "Boleh. Kami bekerja setiap hari sehingga 10 malam, termasuk hujung minggu, dengan kadar yang sama. Kajang ialah salah satu kawasan luar kami dan tukang elektrik kami biasanya sampai dalam 75–120 minit, jadi tempah slot petang anda lebih awal.",
      },
      {
        q: "Adakah anda meliputi Sungai Chua dan Kajang 2?",
        a: "Ya, termasuk juga pekan Kajang, Taman Prima Saujana, Saujana Impian dan Taman Kajang Utama. Di taman perumahan baharu seperti Kajang 2, kebanyakan kerja ialah lampu, kipas siling, water heater dan plug point tambahan. Rumah teres lama berhampiran pekan pula lebih kerap memerlukan naik taraf DB box.",
      },
    ],
  },
  bangi: {
    name: "Bangi",
    intro:
      "Bandar Baru Bangi dibangunkan pada tahun 1970-an dan 80-an bersebelahan UKM, jadi banyak rumah teres kini berusia sekitar 40 tahun dan sudah tiba masanya untuk tukar DB box dan wiring. Taman perumahan lebih baharu seperti Bandar Seri Putra pula memerlukan kerja lampu, kipas dan naik taraf. Ramai pelanggan mencari tukang elektrik di Bangi, dan anda boleh mesej kami dalam Bahasa Melayu atau Inggeris.",
    housing:
      "Rumah teres era 1970-an hingga 80-an di seksyen-seksyen Bandar Baru Bangi, taman perumahan era 2000-an hingga 2010-an seperti Bandar Seri Putra",
    neighbourhoods: ["Bandar Baru Bangi", "Seksyen 7", "Seksyen 9", "Bandar Seri Putra", "Bangi Lama"],
    landmarks: ["Universiti Kebangsaan Malaysia (UKM)", "Bangi Gateway", "Bangi Golf Resort", "Stesen KTM UKM"],
    commonIssues: [
      "DB box dan wiring berusia 40 tahun di rumah teres asal Bandar Baru Bangi",
      "Litar terlebih beban kerana aircond dipasang di setiap bilik tidur",
      "Water heater trip di bilik air yang tiada RCCB 10mA khas",
    ],
    faqs: [
      {
        q: "Bolehkah saya hubungi anda dalam Bahasa Melayu untuk kerja di Bangi?",
        a: "Boleh. Anda boleh WhatsApp kami dalam Bahasa Melayu atau Inggeris, dan kami akan terangkan sebut harga dalam bahasa pilihan anda. Tukang elektrik kami meliputi Bandar Baru Bangi, Bandar Seri Putra, Bangi Lama dan kawasan sekitar UKM, dan biasanya sampai dalam 75–120 minit.",
      },
      {
        q: "Patutkah saya tukar wiring rumah teres lama di Bandar Baru Bangi sebelum tambah aircond?",
        a: "Selalunya, ya. Banyak rumah teres asal dipasang wiring untuk satu atau dua kipas setiap bilik, bukan untuk beberapa unit aircond dan instant water heater. Kami periksa saiz kabel, DB box dan suis utama, kemudian beritahu sama ada litar baharu sudah memadai atau tukar wiring lebih selamat.",
      },
    ],
  },
  "seri-kembangan": {
    name: "Seri Kembangan",
    intro:
      "Seri Kembangan berasal daripada Kampung Baru Serdang Baru, dan rumah kampung lama berhampiran pusat pekan selalunya mempunyai wiring yang sudah jauh melepasi jangka hayatnya. Di sekelilingnya terdapat kondo dan taman perumahan lebih baharu berhampiran The Mines dan UPM, serta banyak rumah sewa pelajar. Kerja tukang elektrik kami di Seri Kembangan merangkumi tukar DB box di rumah kampung hinggalah masalah trip dan water heater di unit sewa.",
    housing:
      "Rumah kampung baru yang lama, rumah teres era 1990-an, kondo dan rumah sewa pelajar era 2000-an hingga 2020-an",
    neighbourhoods: [
      "Pekan Seri Kembangan",
      "Taman Equine",
      "Taman Universiti Indah",
      "Serdang Jaya",
      "Taman Pinggiran Putra",
      "Mines Resort City",
    ],
    landmarks: [
      "The Mines",
      "Universiti Putra Malaysia (UPM)",
      "South City Plaza",
      "Mines International Exhibition & Convention Centre (MIECC)",
    ],
    commonIssues: [
      "Wiring dan papan fius berpuluh tahun di rumah bekas kampung baru",
      "Unit sewa pelajar dengan litar terlebih beban dan plug point yang haus",
      "Peraturan JMB kondo dan permit ubah suai di projek lebih baharu",
    ],
    faqs: [
      {
        q: "Bolehkah anda periksa wiring rumah lama saya di pekan Seri Kembangan?",
        a: "Boleh. Banyak rumah berhampiran pusat kampung lama masih menggunakan kabel dan papan fius yang sangat lama. Kami uji penebat (insulation) dan pembumian (earthing), periksa DB box dan senaraikan apa yang perlu dibaiki sekarang dan apa yang boleh ditangguhkan, supaya anda boleh pilih tukar wiring sepenuhnya atau secara berperingkat.",
      },
      {
        q: "Saya sewakan bilik kepada pelajar UPM di Seri Kembangan. Bolehkah anda tambah litar untuk setiap bilik?",
        a: "Boleh. Kami berikan setiap bilik breaker sendiri untuk aircond dan plug point, supaya seorang penyewa tidak menyebabkan seluruh rumah trip dan kerosakan lebih cepat dikesan. Kami periksa bekalan elektrik dan DB box anda dahulu, kemudian beri sebut harga untuk keseluruhan kerja.",
      },
    ],
  },
  "sungai-buloh": {
    name: "Sungai Buloh",
    intro:
      "Sungai Buloh kebanyakannya terdiri daripada rumah kampung lama, Bandar Baru Sungai Buloh dan taman perumahan seperti Bukit Rahman Putra, dan kini dihubungkan ke bandar raya melalui MRT. Rumah kampung selalunya mempunyai wiring lama yang disambung sedikit demi sedikit. Tukang elektrik kami di Sungai Buloh juga membuat wiring untuk nurseri pokok di kawasan ini, di mana plug point luar dan pam air perlu tahan terdedah kepada air setiap masa.",
    housing:
      "Rumah kampung lama, rumah teres era 1980-an hingga 90-an di Bandar Baru Sungai Buloh, taman perumahan bertanah era 2000-an",
    neighbourhoods: [
      "Bandar Baru Sungai Buloh",
      "Kampung Baru Sungai Buloh",
      "Bukit Rahman Putra",
      "Sungai Buloh Country Resort",
    ],
    landmarks: ["Hospital Sungai Buloh", "Stesen MRT Sungai Buloh", "Nurseri pokok Sungai Buloh"],
    commonIssues: [
      "Wiring lama dan bertampal-tampal di rumah kampung yang ditambah dari tahun ke tahun",
      "Plug point luar, pam dan lampu di nurseri pokok yang terdedah kepada air",
      "Tiada pembumian (earthing) atau perlindungan RCCB di rumah lama",
    ],
    faqs: [
      {
        q: "Adakah anda buat kerja elektrik untuk nurseri pokok di Sungai Buloh?",
        a: "Ya. Kami pasang dan baiki lampu luar, plug point kalis cuaca, litar pam air dan DB box untuk tapak nurseri, menggunakan kelengkapan khas luar rumah dan perlindungan RCCB yang betul. Kami juga uji pemasangan yang kerap trip selepas menyiram pokok atau hujan.",
      },
      {
        q: "Bolehkah anda naik taraf wiring rumah kampung lama di Sungai Buloh?",
        a: "Boleh. Kami periksa wiring dan pembumian, kemudian cadangkan sama ada tukar wiring sepenuhnya atau baiki bahagian paling teruk dahulu. Bahagian rumah yang diperbuat daripada kayu akan menggunakan konduit dan pengikat yang sesuai. Anda akan dapat sebut harga tetap dan jaminan mutu kerja 12 bulan untuk kerja kami.",
      },
    ],
  },
  damansara: {
    name: "Damansara",
    intro:
      "Damansara Utama (SS21) dan Damansara Jaya (SS22) dibina pada tahun 1970-an, dan banyak rumah teres di sini masih menggunakan kabel dari era itu. Kerja ubah suai selalunya bermula apabila tukang elektrik kami di Damansara membuka DB box dan mendapati tiada RCCB, kabel terlalu kecil atau suis utama yang panas. Mutiara Damansara, di sekitar IKEA dan The Curve, lebih baharu, dengan kondo dan pejabat yang memerlukan kerja lampu dan bekalan kuasa.",
    housing:
      "Rumah teres dan semi-D era 1970-an di SS20–SS22, shoplot Uptown, kondo dan pejabat era 2000-an di Mutiara Damansara",
    neighbourhoods: [
      "Damansara Utama (SS21)",
      "Damansara Jaya (SS22)",
      "Damansara Kim (SS20)",
      "Damansara Uptown",
      "Mutiara Damansara",
      "Bandar Utama",
    ],
    landmarks: ["The Curve", "IKEA Damansara", "1 Utama", "Damansara Uptown"],
    commonIssues: [
      "Kabel dan DB box era 1970-an tanpa RCCB di rumah teres SS21 dan SS22",
      "Suis utama menjadi panas akibat beban aircond moden",
      "Beban restoran dan pejabat di shoplot Damansara Uptown",
    ],
    faqs: [
      {
        q: "Kami baru beli rumah teres era 1970-an di Damansara Jaya. Apa yang perlu diperiksa dahulu?",
        a: "Mulakan dengan DB box dan ujian penebat (insulation test). Di rumah SS22, kami sering jumpa kabel asal, tiada RCCB dan plug point yang terlalu sedikit. Keputusan ujian akan menunjukkan sama ada anda perlu tukar wiring sepenuhnya atau cukup sekadar naik taraf DB box dan tambah litar baharu. Kami boleh bekerjasama dengan kontraktor ubah suai anda.",
      },
      {
        q: "Adakah anda terima kerja komersial di Damansara Uptown?",
        a: "Ya. Kami mengendalikan litar lampu, plug point dan aircond untuk kedai, pejabat dan restoran di Uptown, serta mengesan punca trip pada papan 3 phase. Kerja boleh dijadualkan sebelum kedai dibuka atau pada waktu lengang, dengan kadar yang sama setiap hari.",
      },
    ],
  },
  "kota-damansara": {
    name: "Kota Damansara",
    intro:
      "PKNS mula membangunkan Kota Damansara pada akhir 1990-an, dan kini ia menggabungkan rumah teres, semi-D, kondo serta banyak blok SOHO dan kedai pejabat di sekitar Dataran Sunway dan The Strand. Rumah di sini berusia 20 hingga 25 tahun, jadi suis, plug point dan RCCB mula bermasalah. Unit SOHO dan pejabat pula selalu memerlukan tukang elektrik di Kota Damansara untuk tambah plug point dan lampu.",
    housing: "Rumah teres dan semi-D era akhir 1990-an hingga 2000-an, kondo, SOHO dan kedai pejabat",
    neighbourhoods: [
      "Pusat bandar PJU 5",
      "Kota Damansara Seksyen 4–10",
      "Dataran Sunway",
      "Sunway Nexis",
      "Damansara Perdana",
    ],
    landmarks: ["The Strand", "Sunway Giza Mall", "Stesen MRT Kota Damansara", "Hutan Komuniti Kota Damansara"],
    commonIssues: [
      "RCCB era akhir 1990-an yang menjadi terlalu sensitif atau langsung tidak trip",
      "Unit SOHO yang dijadikan pejabat dengan plug point yang terlalu sedikit",
      "Permit pengurusan dan waktu kerja untuk kerja di blok SOHO dan kondo",
    ],
    faqs: [
      {
        q: "Bolehkah anda uji sama ada RCCB di rumah saya di Kota Damansara masih berfungsi?",
        a: "Boleh. RCCB berusia 20 tahun mungkin tidak lagi trip pada arus kadarannya. Kami uji masa trip dan arus dengan alat penguji yang betul, periksa litar yang dilindunginya dan tukar jika perlu. Kos penggantian ialah RM250 – RM450 termasuk unit RCCB.",
      },
      {
        q: "Adakah anda bekerja di bangunan SOHO Kota Damansara?",
        a: "Ya. Kami tambah plug point, lampu dan litar aircond untuk unit SOHO dan pejabat, serta baiki masalah trip. Kebanyakan bangunan memerlukan permit kontraktor, jadi kongsikan syarat pejabat pengurusan semasa membuat tempahan dan kami akan uruskan borang sebelum lawatan.",
      },
    ],
  },
  "ara-damansara": {
    name: "Ara Damansara",
    intro:
      "Terletak bersebelahan Lapangan Terbang Subang, Ara Damansara ialah bandar Sime Darby era 2000-an yang terdiri daripada kondo, rumah teres dan blok komersial di sekitar Evolve Concept Mall dan Citta Mall. Kebanyakan rumah berusia 15 hingga 20 tahun, jadi tukar wiring sepenuhnya jarang diperlukan. Kerja biasa tukang elektrik kami di Ara Damansara ialah lampu LED, suis pintar, EV charger untuk rumah bertanah dan RCCB trip akibat water heater atau kelengkapan luar rumah.",
    housing:
      "Kondo, rumah teres dan semi-D era 2000-an hingga 2010-an, dengan pejabat dan kedai runcit di sekitar Oasis dan Evolve",
    neighbourhoods: ["PJU 1A", "Oasis Ara Damansara", "Kawasan Citta Mall", "Jalan Lapangan Terbang Subang"],
    landmarks: [
      "Evolve Concept Mall",
      "Lapangan Terbang Sultan Abdul Aziz Shah (Subang)",
      "Citta Mall",
      "Stesen LRT Ara Damansara",
    ],
    commonIssues: [
      "Water heater dan kelengkapan luar rumah yang menyebabkan trip di rumah berusia 15–20 tahun",
      "Naik taraf EV charger dan rumah pintar pada DB box sedia ada",
      "Permit ubah suai dan waktu kerja di blok kondo",
    ],
    faqs: [
      {
        q: "Bolehkah rumah teres saya di Ara Damansara menampung EV charger?",
        a: "Dalam kebanyakan kes, boleh. Kami periksa bekalan elektrik, suis utama dan ruang dalam DB box, kemudian pasang litar khas dengan perlindungan RCD. Jika beban agak terhad, charger boleh dijalankan pada arus yang lebih rendah. Kos pemasangan menggunakan charger anda sendiri ialah RM1,800 – RM2,800.",
      },
      {
        q: "Adakah anda bekerja di kondo Ara Damansara pada hari Sabtu?",
        a: "Ya, jika pihak pengurusan membenarkan. Sesetengah bangunan menghadkan kerja hari Sabtu kepada kerja senyap atau separuh hari sahaja. Hantar peraturan bangunan kepada kami semasa membuat tempahan, dan kami akan aturkan kerja menggerudi atau pemutusan bekalan elektrik yang lebih lama pada hari bekerja.",
      },
    ],
  },
  "setia-alam": {
    name: "Setia Alam",
    intro:
      "S P Setia membangunkan Setia Alam sejak tahun 2000-an menjadi bandar besar dengan rumah teres dan semi-D di sekitar Setia City Mall. Banyak rumah kini sedang diubah suai, dan pada waktu inilah pemilik memanggil tukang elektrik kami di Setia Alam: sambungan dapur, litar aircond, lampu taman dan fasad, EV charger serta penyediaan DB box untuk solar bumbung. Oleh kerana Setia Alam ialah salah satu kawasan luar kami, lawatan biasanya ditempah lebih awal.",
    housing:
      "Rumah teres, semi-D dan banglo era 2000-an hingga 2010-an di taman berpagar dan terbuka, serta beberapa kondo",
    neighbourhoods: ["Seksyen U13", "Setia Eco Park", "Setia City", "Alam Nusantara"],
    landmarks: ["Setia City Mall", "Setia City Convention Centre", "Tenby International School Setia Eco Park"],
    commonIssues: [
      "Sambungan ubah suai yang dibebankan pada litar asal tanpa naik taraf DB box",
      "Tambahan EV charger dan solar bumbung yang memerlukan pemeriksaan DB box dan bekalan elektrik",
      "Lampu taman dan fasad trip ketika hujan lebat",
      "Kerosakan autogate dan plug point luar rumah",
    ],
    faqs: [
      {
        q: "Kami sedang ubah suai rumah teres di Setia Alam. Bolehkah anda uruskan bahagian elektrik?",
        a: "Boleh. Kami bekerja berdasarkan pelan ubah suai anda untuk tambah point, litar dapur, wiring aircond dan lampu, serta naik taraf DB box jika beban tambahan memerlukannya. Kami bekerjasama dengan kontraktor anda dan uji semuanya sebelum siling dan dinding ditutup.",
      },
      {
        q: "Bolehkah anda sediakan rumah saya di Setia Alam untuk panel solar dan EV charger?",
        a: "Boleh. Kami periksa bekalan elektrik dan DB box, kosongkan ruang atau naik taraf papan, dan pasang litar EV charger. Untuk solar, kami sediakan bahagian DB box supaya pemasang solar anda boleh membuat sambungan, dengan perlindungan dan pengasingan berasingan bagi setiap sistem.",
      },
    ],
  },
  rawang: {
    name: "Rawang",
    intro:
      "Terletak di utara bandar raya, Rawang menggabungkan pusat pekan lama dengan taman perumahan keluarga seperti Bandar Country Homes dan Bandar Tasik Puteri. Banyak rumah teres era 1990-an dan 2000-an di sini kini sedang dibesarkan serta ditambah aircond dan water heater, dan dari situlah datangnya kebanyakan kerja tukang elektrik kami di Rawang, bersama pembaikan DB box, pembumian dan kerosakan akibat lonjakan kuasa (surge).",
    housing:
      "Rumah kedai di pekan lama, rumah teres mampu milik era 1990-an hingga 2010-an di taman perumahan seperti Bandar Country Homes",
    neighbourhoods: [
      "Pekan Rawang",
      "Bandar Country Homes",
      "Bandar Tasik Puteri",
      "Kota Emerald",
      "Taman Rawang Perdana",
      "Bukit Sentosa",
    ],
    landmarks: ["Stesen KTM Rawang", "Templer Park", "Rawang Bypass"],
    commonIssues: [
      "Bahagian tambahan rumah dan aircond baharu yang disambung pada litar asal era 1990-an",
      "Peralatan rosak akibat lonjakan kuasa (surge) selepas ribut petir",
      "Kerosakan autogate dan lampu luar rumah ketika cuaca hujan",
    ],
    faqs: [
      {
        q: "Adakah anda datang ke Rawang untuk kerja kecil?",
        a: "Ya. Rawang ialah salah satu kawasan luar kami dan tukang elektrik kami biasanya sampai dalam 75–120 minit, tetapi kerja kecil tetap dialu-alukan. Setiap lawatan dikenakan caj minimum RM80, jadi senaraikan kipas, plug point dan lampu sekali gus dan kami akan beri sebut harga untuk satu lawatan.",
      },
      {
        q: "Petir merosakkan beberapa peralatan di rumah kami di Rawang. Bolehkah anda bantu?",
        a: "Boleh. Kami periksa DB box, pembumian dan litar yang membekalkan peralatan yang rosak, tukar komponen yang terbakar dan uji RCCB. Surge protector (SPD) di DB box, bermula RM400, mengurangkan risiko apabila ribut melanda lagi.",
      },
    ],
  },
  selayang: {
    name: "Selayang",
    intro:
      "Selayang, lokasi pasar borong besar di kaki Batu Caves, kebanyakannya terdiri daripada rumah teres dan flat era 1980-an dan 90-an. Pada usia 30 hingga 40 tahun, banyak rumah mempunyai DB box yang trip walaupun dengan kebocoran kecil, dapur yang kekurangan plug point dan wiring yang disambung, bukan diganti. Tukang elektrik kami di Selayang juga membaiki masalah bekalan elektrik dan lampu untuk peniaga berhampiran pasar.",
    housing:
      "Rumah teres dan flat era 1980-an hingga 90-an, apartmen lebih baharu dan lot komersial di sekitar pasar borong",
    neighbourhoods: [
      "Selayang Baru",
      "Selayang Jaya",
      "Taman Selayang Utama",
      "Bandar Baru Selayang",
      "Taman Samudera",
      "Batu Caves",
    ],
    landmarks: ["Pasar Borong Selayang", "Batu Caves", "Hospital Selayang", "Selayang Mall"],
    commonIssues: [
      "Wiring berusia 30–40 tahun yang disambung, bukan diganti",
      "DB box trip akibat kebocoran kecil di dapur dan bilik air yang lembap",
      "Beban chiller dan lampu untuk peniaga di sekitar Pasar Borong Selayang",
    ],
    faqs: [
      {
        q: "Bolehkah anda bantu peniaga berhampiran Pasar Borong Selayang yang ada masalah elektrik?",
        a: "Boleh. Kami baiki masalah trip, tambah litar untuk chiller dan peti sejuk beku, dan tukar lampu untuk gerai, stor dan lot kedai berhampiran. Oleh kerana pasar beroperasi sepanjang malam, kami jadualkan kerja pada lewat pagi atau petang supaya perniagaan tidak terganggu.",
      },
      {
        q: "Rumah kami di Selayang selalu trip selepas mengemop lantai atau hujan. Apa masalahnya?",
        a: "Corak ini biasanya bermaksud kelembapan sampai ke plug point, kelengkapan atau sambungan kabel berhampiran lantai atau di luar rumah. Kami uji setiap litar untuk mencari litar yang bocor ke bumi, kemudian kedap semula, alihkan atau tukar bahagian yang rosak, selalunya dalam satu lawatan.",
      },
    ],
  },
  semenyih: {
    name: "Semenyih",
    intro:
      "Semenyih berubah dengan pantas apabila taman perumahan seperti Eco Majestic, Setia EcoHill dan Bandar Rinching membawa rumah bertanah baharu ke pekan yang dahulunya tenang berhampiran Bukit Broga. Pemilik rumah baharu biasanya memerlukan tukang elektrik di Semenyih untuk lampu luar, wiring autogate, kipas siling, plug point tambahan dan water heater. Rumah kedai dan rumah teres lama di pusat pekan pula lebih memerlukan kerja pembaikan biasa dan DB box.",
    housing:
      "Taman perumahan bertanah era 2010-an hingga 2020-an, rumah kedai dan rumah teres lama di pekan, rumah kampung di luar bandar",
    neighbourhoods: [
      "Pekan Semenyih",
      "Eco Majestic",
      "Setia EcoHill",
      "Bandar Rinching",
      "Taman Tasik Semenyih",
      "Bandar Tasik Kesuma",
    ],
    landmarks: ["Bukit Broga", "Eco Majestic", "University of Nottingham Malaysia", "Empangan Semenyih"],
    commonIssues: [
      "Wiring autogate dan lampu luar rumah yang diperlukan di rumah bertanah baharu",
      "Susun atur standard pemaju dengan point yang sedikit, memerlukan plug point dan litar tambahan",
      "DB box dan wiring yang semakin usang di rumah kedai lama di pekan",
    ],
    faqs: [
      {
        q: "Bolehkah anda buat wiring autogate dan lampu luar di rumah baharu saya di Semenyih?",
        a: "Boleh. Kami tarik litar khas untuk motor autogate, tambah plug point kalis cuaca dan lampu luar, dan letakkannya di bawah perlindungan RCCB yang sesuai supaya hujan tidak menyebabkan seluruh rumah trip. Kami boleh bekerjasama dengan pembekal autogate anda untuk sambungannya.",
      },
      {
        q: "Berapa awal saya perlu tempah untuk Semenyih?",
        a: "Untuk kerja yang dirancang, sebaiknya tempah sehari atau dua hari lebih awal, kerana Semenyih ialah salah satu kawasan luar kami dan tukang elektrik kami biasanya sampai dalam 75–120 minit. Untuk kerosakan yang perlu dibaiki segera, mesej kami pada waktu pagi dan kami akan beritahu dengan jujur sama ada lawatan hari yang sama boleh dibuat.",
      },
    ],
  },
  "cheras-selangor": {
    name: "Cheras Selangor",
    intro:
      "Batu 9, Bandar Mahkota Cheras dan Sungai Long membentuk sebahagian besar Cheras Selangor di sepanjang Lebuhraya Cheras-Kajang, dengan kebanyakan rumah teres dan kondo era 1990-an dan 2000-an. Pada usia 20 hingga 30 tahun, tukang elektrik kami di Cheras Selangor sering berdepan dengan RCCB yang haus, suis terbakar dan water heater rosak. Rumah sewa pelajar di sekitar UTAR Sungai Long juga membuatkan tuan rumah sibuk dengan bilik yang terlebih beban.",
    housing: "Rumah teres dan kondo era 1990-an hingga 2000-an di Batu 9, Bandar Mahkota Cheras dan Sungai Long",
    neighbourhoods: [
      "Batu 9 Cheras",
      "Bandar Mahkota Cheras",
      "Bandar Sungai Long",
      "Taman Cuepacs",
      "Cheras Perdana",
      "Bandar Tun Hussein Onn",
      "Taman Suntex",
    ],
    landmarks: ["Kampus UTAR Sungai Long", "Stesen MRT Taman Suntex", "Stesen MRT Batu 11 Cheras"],
    commonIssues: [
      "RCCB dan suis yang haus di rumah teres berusia 20–30 tahun",
      "Rumah sewa pelajar berhampiran UTAR dengan litar bilik yang terlebih beban",
      "Water heater trip kerana tiada RCCB 10mA khas",
    ],
    faqs: [
      {
        q: "Adakah Cheras Selangor diliputi berasingan daripada Cheras KL?",
        a: "Kami meliputi kedua-duanya. Cheras Selangor merangkumi Batu 9, Bandar Mahkota Cheras, Sungai Long, Bandar Tun Hussein Onn dan Cheras Perdana. Tukang elektrik kami biasanya sampai dalam 60–90 minit, kadangkala lebih lama berbanding sebelah KL kerana trafik petang di Lebuhraya Cheras-Kajang.",
      },
      {
        q: "Rumah kami di Sungai Long trip pada waktu malam apabila semua aircond dihidupkan. Kenapa?",
        a: "Biasanya suis utama atau litar yang dikongsi terlebih beban apabila beberapa aircond berjalan serentak, perkara biasa di rumah sewa berhampiran UTAR. Kami ukur beban, pindahkan aircond ke litar khas masing-masing dan periksa suis utama serta bekalan elektrik, dengan harga dipersetujui terlebih dahulu.",
      },
    ],
  },
  balakong: {
    name: "Balakong",
    intro:
      "Sektor industri menyumbang sebahagian besar kerja kami di Balakong. Gudang, bengkel dan kilang kecil di Cheras Jaya dan Balakong Jaya memerlukan pengesanan kerosakan 3 phase, pemasangan DB dan sub-DB, point kuasa mesin dan lampu LED high-bay. Rumah teres lama dan rumah di Kampung Baru Balakong pula memerlukan tukang elektrik di Balakong untuk naik taraf DB box, tukar wiring dan baiki masalah trip.",
    housing: "Kilang dan gudang, rumah teres era 1980-an hingga 90-an, rumah kampung baru di Kampung Baru Balakong",
    neighbourhoods: ["Kampung Baru Balakong", "Taman Taming Jaya", "Taman Impian Ehsan", "Cheras Jaya"],
    landmarks: ["Taman Perindustrian Cheras Jaya", "Kawasan perindustrian Balakong"],
    commonIssues: [
      "Beban 3 phase tidak seimbang dan trip di kilang dan bengkel",
      "Lampu gudang lama dengan kos operasi tinggi dan ballast yang rosak",
      "Wiring dan papan fius yang semakin usang di rumah kampung baru",
    ],
    faqs: [
      {
        q: "Adakah anda terima kerja elektrik kilang dan gudang di Balakong?",
        a: "Ya. Kami mengesan kerosakan 3 phase, memasang DB dan sub-DB untuk mesin baharu, menambah soket industri dan menukar lampu gudang lama kepada LED high-bay. Untuk kerja yang lebih besar, kami tinjau tapak dahulu, kemudian beri sebut harga tetap dan aturkan jadual mengikut waktu pengeluaran anda.",
      },
      {
        q: "Bolehkah anda tukar wiring rumah di Kampung Baru Balakong?",
        a: "Boleh. Banyak rumah kampung baru di sini masih menggunakan wiring dan papan fius dari berpuluh tahun dahulu. Kami periksa, uji dan beri sebut harga untuk tukar wiring sepenuhnya atau berperingkat, bermula dengan litar yang paling tidak selamat dan DB box baharu dengan perlindungan RCCB.",
      },
    ],
  },
  "bandar-sunway": {
    name: "Bandar Sunway",
    intro:
      "Bandar Sunway dibina di atas bekas lombong bijih timah dan kini antara kawasan pelajar paling padat di Lembah Klang, dengan Sunway University, Monash Malaysia dan kediaman sewa bertingkat tinggi di sekitar Sunway Pyramid. Tuan rumah dan ejen hartanah ialah pelanggan utama tukang elektrik kami di Bandar Sunway. Panggilan biasa ialah RCCB trip, water heater, plug point dan lampu rosak, serta kipas atau point tambahan untuk bilik sewa.",
    housing:
      "Kondo bertingkat tinggi dan apartmen pelajar, rumah teres dan semi-D era 1990-an hingga 2000-an di seksyen PJS",
    neighbourhoods: ["PJS 7", "PJS 9", "PJS 11", "Sunway Mentari", "Sunway South Quay", "Sunway Geo"],
    landmarks: ["Sunway Pyramid", "Sunway Lagoon", "Sunway University", "Monash University Malaysia"],
    commonIssues: [
      "Water heater dan RCCB trip di unit sewa pelajar yang digunakan dengan kerap",
      "Plug point dan suis haus akibat pertukaran penyewa yang kerap",
      "Peraturan pengurusan kondo tentang akses kontraktor dan waktu kerja",
    ],
    faqs: [
      {
        q: "Bolehkah anda siapkan kerja dengan cepat antara pertukaran penyewa di Bandar Sunway?",
        a: "Boleh. Sebelum semester baharu, kami boleh periksa dan baiki plug point, lampu, kipas, water heater dan RCCB dalam satu lawatan, supaya unit sedia untuk dimasuki. Beritahu kami tarikh dan peraturan bangunan, dan kami akan tempah slot yang sesuai.",
      },
      {
        q: "Adakah anda meliputi rumah bertanah di Bandar Sunway selain kondo?",
        a: "Ya. Kami juga bekerja di rumah teres dan semi-D PJS, di mana rumah era 1990-an selalunya memerlukan naik taraf DB box, litar aircond tambahan dan pembaikan lampu luar. Tukang elektrik kami biasanya sampai dalam 60–90 minit dari pusat bandar KL.",
      },
    ],
  },
  glenmarie: {
    name: "Glenmarie",
    intro:
      "Kilang, gudang dan blok pejabat memenuhi sebahagian besar Glenmarie (Seksyen U1, Shah Alam), jadi kerja tukang elektrik kami di Glenmarie kebanyakannya komersial: bekalan 3 phase, DB kilang dan pejabat, lampu gudang serta bekalan kuasa untuk mesin dan bilik server. Banyak unit sudah bertukar penyewa beberapa kali, meninggalkan wiring tanpa sebarang rekod. Kami kesan dan label litar, baiki kerosakan dan rancang naik taraf mengikut waktu perniagaan.",
    housing: "Kilang, gudang dan blok pejabat di Seksyen U1, dengan rumah bertanah berhampiran kelab golf",
    neighbourhoods: [
      "Seksyen U1",
      "HICOM-Glenmarie Industrial Park",
      "Temasya Glenmarie",
      "Subang Hi-Tech Industrial Park",
    ],
    landmarks: ["Glenmarie Golf & Country Club", "Stesen LRT Glenmarie"],
    commonIssues: [
      "Permintaan 3 phase dan beban tidak seimbang di kilang dan bengkel",
      "Wiring tanpa rekod yang ditinggalkan oleh penyewa terdahulu",
      "Lampu gudang jenis kalimantang dan metal halide lama yang perlu ditukar kepada LED",
    ],
    faqs: [
      {
        q: "Kami akan berpindah ke gudang di Glenmarie. Bolehkah anda periksa pemasangan elektrik terlebih dahulu?",
        a: "Boleh. Kami periksa bekalan masuk, DB utama dan sub-DB, uji peranti perlindungan dan petakan litar mana yang membekalkan apa. Anda akan terima senarai bertulis tentang kerosakan, sisa pemasangan yang tidak selamat dan keperluan mesin anda, berserta sebut harga tetap untuk membaikinya.",
      },
      {
        q: "Bolehkah anda tukar lampu gudang di Glenmarie kepada LED?",
        a: "Boleh. Kami tukar lampu kalimantang atau metal halide lama kepada LED high-bay dan batten, buat wiring semula jika perlu, dan boleh bahagikan lampu kepada zon supaya anda hanya menyalakan kawasan yang digunakan. Kami bekerja mengikut waktu operasi anda.",
      },
    ],
  },
};
