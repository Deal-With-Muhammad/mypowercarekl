import type { AreaText } from "@/lib/types";

export const areasPart2: Record<string, AreaText> = {
  "petaling-jaya": {
    name: "八打灵再也 Petaling Jaya",
    intro:
      "八打灵再也（PJ）是马来西亚第一个卫星市，于1950年代规划，早期的各个Section和SS2至今仍有50至70年屋龄的排屋。我们在八打灵再也的换电线和电箱工程，很大一部分来自这些老房子。格拉那再也和LRT沿线公寓的电线较新，工作多为灯具、插座、吊扇和热水器。",
    housing: "旧Section区和SS2的1950–70年代排屋及独立式洋房、格拉那再也的1980–2000年代住宅、新公寓",
    neighbourhoods: [
      "PJ Old Town",
      "Section 14",
      "Section 17",
      "SS2",
      "Sea Park",
      "Taman Paramount",
      "Kelana Jaya",
      "Section 5",
    ],
    landmarks: ["Amcorp Mall", "Jaya One", "Paradigm Mall", "Taman Jaya"],
    commonIssues: [
      "早期PJ排屋仍在用50–70年的旧电线和老式可换丝保险丝",
      "供电和电箱容量不足，带不动多台冷气和即热式热水器",
      "原有格局插座太少，导致拖板超负荷",
      "下大雨时门廊和花园灯跳电",
    ],
    faqs: [
      {
        q: "我们住在SS2的老排屋，可以边住边换电线吗？",
        a: "可以。我们一次只处理一个区域，房子大部分空间照常使用，每天傍晚前恢复供电。在SS2，我们通常把换电线、换新电箱和加插座一起做，一个固定报价，附12个月施工保修。",
      },
      {
        q: "你们服务八打灵再也哪些地区？",
        a: "整个八打灵再也都有服务，包括PJ Old Town、Section 14、Section 17、SS2、Sea Park、Taman Paramount、格拉那再也、白沙罗和Bandar Utama。大部分地址约45–75分钟可到，跳电或没电可安排当天上门。",
      },
    ],
  },
  "subang-jaya": {
    name: "梳邦再也 Subang Jaya",
    intro:
      "Sime UEP于1976年开始发展梳邦再也，所以SS12至SS19的第一批排屋如今已有45至50年屋龄。屋主反映经常跳电或电箱有烧焦味时，原因往往是原装电线要同时带三四台冷气。我们也服务SS15和SS16的店屋，以及LRT沿线的公寓。",
    housing: "SS12–SS19的1970–80年代排屋和半独立式洋房、SS15和SS16的店屋、LRT沿线公寓",
    neighbourhoods: ["SS12–SS19", "SS15 town centre", "SS14", "SS17", "SS19", "Taman Subang Mewah"],
    landmarks: ["Subang Parade", "Empire Shopping Gallery", "SS15 LRT station", "Subang Jaya KTM station"],
    commonIssues: [
      "SS12–SS19排屋仍在用45–50年的原装电线",
      "总开关和电箱带多台冷气时过热",
      "插座和开关用了几十年后烧坏",
      "SS15附近的学生出租屋需要增加电路",
    ],
    faqs: [
      {
        q: "我们在SS15的房子是1970年代末建的，应该换电箱还是换电线？",
        a: "要看电线状况，所以我们会先逐路测试。如果绝缘读数还可以，暂时换一个带RCCB保护的新电箱可能就够了；如果读数差，全屋或局部换电线会更安全。两种方案的价格都会给您看。",
      },
      {
        q: "你们服务梳邦再也市区和USJ吗？",
        a: "两边都有服务。我们服务SS12至SS19、SS15和SS16一带的市中心、整个USJ、双威和Putra Heights。大部分上门时间在60–90分钟内，您在WhatsApp发送位置后，我们会确认时间。",
      },
    ],
  },
  usj: {
    name: "USJ",
    intro:
      "USJ第一批房子于1988年落成，如今USJ 1至27大多是30至35年屋龄的排屋、半独立式洋房和低层公寓。到了这个屋龄，原装开关、插座和电箱零件开始老化，而住户又正好在添置冷气和热水器。常见工作包括电箱升级、增加电源点，以及查出反复跳电的原因。",
    housing: "USJ 1–27的1980年代末至1990年代排屋和半独立式洋房，以及Taipan等商业中心",
    neighbourhoods: ["USJ 1", "USJ 2–6", "USJ 9", "USJ 10 (Taipan)", "USJ 11–20", "USJ 21–27"],
    landmarks: ["Summit USJ", "USJ Taipan", "Main Place Mall", "Da Men Mall"],
    commonIssues: [
      "30–35年的电箱零件和开关老化",
      "新增的冷气和热水器直接接在原有电路上",
      "傍晚雷雨时门廊灯和户外插座跳电",
    ],
    faqs: [
      {
        q: "我们USJ的排屋一下雨就跳电，为什么？",
        a: "通常是雨水渗进了门廊灯、户外插座、花园灯具或车廊下的电线接头。我们会逐路隔离电路，找出漏电到地线的那一路，再更换成防水配件或重新密封。一般上门一次就能解决。",
      },
      {
        q: "可以为我USJ的家加一条冷气电路吗？",
        a: "可以。我们为每台新冷气拉专用电线和断路器，检查电箱是否有空位、总开关能否承受负荷，并用线槽或暗线整理走线。冷气电源插座（aircond point）每个RM250 – RM400。",
      },
    ],
  },
  puchong: {
    name: "蒲种 Puchong",
    intro:
      "蒲种在1990和2000年代快速发展，从Puchong Jaya、Bandar Puteri，到2016年LRT延长线沿线的SOHO和公寓。我们的工作从25年屋龄排屋的电箱升级，到新高楼单位的灯具和插座都有。SOHO单位改作办公室、需要更多插座时，屋主也会找我们。",
    housing: "1990–2000年代排屋和半独立式洋房、2010年代公寓、SOHO和店屋办公楼",
    neighbourhoods: [
      "Bandar Puteri",
      "Puchong Jaya",
      "Bandar Kinrara",
      "Puchong Perdana",
      "Taman Putra Prima",
      "Puchong Utama",
    ],
    landmarks: ["IOI Mall Puchong", "Setiawalk", "IOI Boulevard", "LRT IOI Puchong Jaya station"],
    commonIssues: [
      "早期Puchong Jaya排屋的电箱和开关已用了20–30年",
      "SOHO单位当办公室用，插座不够",
      "新公寓楼有装修规定和施工时间限制",
      "店屋租户的厨房或办公设备挤在同一路电路上，导致超负荷",
    ],
    faqs: [
      {
        q: "你们服务整个蒲种吗？包括Bandar Puteri和Puchong Perdana？",
        a: "是的。我们服务Puchong Jaya、Bandar Puteri、Bandar Kinrara、Puchong Perdana、Puchong Utama和Taman Putra Prima，以及LRT沿线的公寓和SOHO。一般60–90分钟可到，您WhatsApp发送位置后，我们会确认时间。",
      },
      {
        q: "可以帮我在蒲种的SOHO加插座和灯，改成办公室吗？",
        a: "可以。我们先检查单位电箱的容量，再按需要增加插座、桌面高度插座、LED平板灯或冷气电路。如果大厦要求装修准证，我们会准备管理处需要的资料，并在规定时间内施工。",
      },
    ],
  },
  "shah-alam": {
    name: "莎阿南 Shah Alam",
    intro:
      "莎阿南是雪兰莪州首府，以编号分区规划，较旧的区建于1980和90年代，多为排屋、半独立式洋房和组屋。这些房子现在需要升级电箱、增加电路，有时还要换电线。莎阿南也有大片工业区，我们在那里处理三相电、工厂电箱和高棚照明。",
    housing: "旧区的1980–90年代排屋和半独立式洋房、较新的有地住宅区、组屋和大型工业区",
    neighbourhoods: [
      "Section 2",
      "Section 7",
      "Section 9",
      "Section 13",
      "Section 18",
      "Bukit Jelutong (U8)",
      "Kota Kemuning",
    ],
    landmarks: [
      "Sultan Salahuddin Abdul Aziz Mosque (Blue Mosque)",
      "i-City",
      "Shah Alam Lake Gardens",
      "UiTM Shah Alam",
    ],
    commonIssues: [
      "旧区排屋用了30年的电线和电箱",
      "工厂和仓库的三相电故障、负荷不平衡和电箱升级",
      "大雨时户外灯和自动门跳电",
    ],
    faqs: [
      {
        q: "你们在莎阿南做三相电和工厂电气工程吗？",
        a: "做。我们排查三相电箱的跳电和负荷不平衡，为机器安装电箱和分电箱，并把仓库照明换成LED高棚灯。较大的工程会先上门查看，再给固定报价，并配合您的生产时间安排施工。",
      },
      {
        q: "你们服务莎阿南哪些区？",
        a: "全部都有，从较旧的Section 2、7、9和13，到Bukit Jelutong、Kota Kemuning和实达阿南。莎阿南范围很广，一般75–105分钟可到。在WhatsApp发送您所在的区号，我们可以给更准确的时间。",
      },
    ],
  },
  klang: {
    name: "巴生 Klang",
    intro:
      "巴生于2024年获宣布为皇城，旧城中心外围环绕着Bukit Tinggi、Bandar Botanic等较新的住宅区。旧城店屋的电线往往已有几十年，而且改动很多。部分低洼地区也会淹水，水渗进插座、电箱或埋地电缆就会跳电。在较新的住宅区，我们的工作主要是升级和维修。",
    housing: "旧城店屋、1980–90年代排屋、Bukit Tinggi和Bandar Botanic的2000–2010年代住宅区",
    neighbourhoods: [
      "Klang old town",
      "Bukit Tinggi",
      "Bandar Botanic",
      "Taman Sri Andalas",
      "Meru",
      "Bukit Raja",
      "Port Klang",
    ],
    landmarks: ["Istana Alam Shah", "Jalan Tengku Kelana (Little India)", "AEON Bukit Tinggi", "Klang KTM station"],
    commonIssues: [
      "旧城店屋的电线用了几十年，而且改动很多",
      "低洼地区淹水后跳电、插座损坏",
      "季候风大雨时，水渗进户外电箱和埋地电缆",
    ],
    faqs: [
      {
        q: "我们巴生的房子淹水了，可以重新开电吗？",
        a: "要先检查过才行。水可能在插座、开关和电箱里留下湿气和泥沙，有触电或起火的风险。请保持总开关关闭，并联系我们。我们会逐路测试，更换损坏的零件后才恢复供电。",
      },
      {
        q: "你们到巴生要多久？",
        a: "巴生属于我们的外围服务区，视联邦大道和KESAS大道的交通，一般75–120分钟可到。预约的工程我们会订固定时段；如果您早上联系，也有机会当天上门。",
      },
    ],
  },
  cyberjaya: {
    name: "赛城 Cyberjaya",
    intro:
      "赛城于1997年推出，是多媒体超级走廊的核心，如今有数据中心、科技公司办公楼、大学，以及大量供学生和年轻上班族居住的公寓。这里的电气装置大多较新，所以工作比较轻：RCCB跳电、热水器故障、灯具、加插座，以及为出租单位装吊扇。很多电话来自房东和中介。",
    housing: "2000–2020年代公寓、服务式公寓和学生宿舍，以及部分有门禁的有地住宅",
    neighbourhoods: [
      "Cyber 1–12 precincts",
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
      "出租公寓单位的热水器故障和RCCB跳电",
      "新租客入住前安装吊扇和灯具",
      "新楼盘的发展商标配配件过早损坏",
    ],
    faqs: [
      {
        q: "我是赛城公寓的房东，我不在场时你们可以处理维修吗？",
        a: "可以。由您的租客或中介开门，我们动工前会在WhatsApp发给您照片、检查结果和固定报价。您同意后我们才维修，完成后再发完工照片给您。也可以在线付款。",
      },
      {
        q: "你们在赛城的公寓安装吊扇和灯吗？",
        a: "装。吊扇安装每台RM200起，包括组装、调平衡和拆除旧吊扇。我们也安装LED筒灯，并按需要增加新电源点。如果保安需要承包商通行证，请告诉我们座号和单位号。",
      },
    ],
  },
  putrajaya: {
    name: "布城 Putrajaya",
    intro:
      "布城的住宅从政府宿舍到私人公寓和有门禁的有地住宅都有，分布在各个编号的Presint。大部分房子建于1990年代末以后，所以我们遇到的多是用了20至25年的配件老化，而不是很旧的电线。常见工作包括更换电箱零件、热水器故障、加插座，以及室内外灯具。",
    housing: "各Presint的1990年代末至2020年代政府宿舍、公寓和有地住宅",
    neighbourhoods: ["Presint 1", "Presint 8", "Presint 9", "Presint 11", "Presint 14", "Presint 16", "Presint 18"],
    landmarks: ["Perdana Putra", "Putra Mosque", "Alamanda Putrajaya", "IOI City Mall"],
    commonIssues: [
      "用了20–25年的开关、插座和RCCB老化",
      "大雨时户外和花园灯跳电",
      "装修时添加冷气和热水器，需要增加电路",
    ],
    faqs: [
      {
        q: "你们服务布城所有Presint吗？",
        a: "是的。我们服务Presint 8、9、11、14、16、18等住宅区，以及商业区。布城属于我们的外围服务区，一般75–120分钟可到。WhatsApp时请告诉我们您的Presint和大楼名称。",
      },
      {
        q: "你们可以在布城的政府宿舍施工吗？",
        a: "可以，限于单位内部的维修，例如跳电、插座、灯具和热水器。涉及大楼本身或公共线路的改动，通常要先获得管理机构批准，我们可以提供书面报价让您呈交。",
      },
    ],
  },
  kajang: {
    name: "加影 Kajang",
    intro:
      "加影以沙爹闻名，现在也是MRT加影线的终点站。这里既有店屋林立的旧城区，也有Kajang 2、Sungai Chua等不断发展的住宅区。市中心店屋的电线往往老旧又超负荷，较新的排屋和公寓则多是日常维修。通勤家庭常预约傍晚时段，我们可以安排。",
    housing: "加影市区的旧店屋、1980–90年代排屋、2000–2020年代住宅区和公寓",
    neighbourhoods: [
      "Kajang town",
      "Sungai Chua",
      "Kajang 2",
      "Taman Prima Saujana",
      "Saujana Impian",
      "Taman Kajang Utama",
    ],
    landmarks: ["MRT Kajang station", "Stadium Kajang", "Hospital Kajang"],
    commonIssues: ["加影市区店屋的电线老旧、超负荷", "旧排屋的扩建部分直接接在原有电路上", "雨季时户外灯和自动门故障"],
    faqs: [
      {
        q: "你们可以在我下班后的傍晚来加影吗？",
        a: "可以。我们每天营业到晚上10点，周末也一样，收费不变。加影属于我们的外围服务区，一般75–120分钟可到，所以请提前预约傍晚时段。",
      },
      {
        q: "你们服务Sungai Chua和Kajang 2吗？",
        a: "服务，还有加影市区、Taman Prima Saujana、Saujana Impian和Taman Kajang Utama。在Kajang 2这类新住宅区，大部分工作是灯具、吊扇、热水器和加插座；靠近市区的旧排屋则较常需要升级电箱。",
      },
    ],
  },
  bangi: {
    name: "万宜 Bangi",
    intro:
      "万宜的Bandar Baru Bangi于1970和80年代在UKM旁发展起来，许多排屋如今已有约40年屋龄，到了该换电箱和换电线的时候。Bandar Seri Putra等较新的住宅区则需要灯具、吊扇和升级工作。很多顾客会搜索「万宜电工」或「tukang elektrik Bangi」，您可以用马来文或英文联系我们。",
    housing: "Bandar Baru Bangi各区的1970–80年代排屋、Bandar Seri Putra等2000–2010年代住宅区",
    neighbourhoods: ["Bandar Baru Bangi", "Seksyen 7", "Seksyen 9", "Bandar Seri Putra", "Bangi Lama"],
    landmarks: ["Universiti Kebangsaan Malaysia (UKM)", "Bangi Gateway", "Bangi Golf Resort", "KTM UKM station"],
    commonIssues: [
      "Bandar Baru Bangi原有排屋用了40年的电箱和电线",
      "每间卧室都加装冷气，电路超负荷",
      "浴室没有专用的10mA RCCB，热水器常跳电",
    ],
    faqs: [
      {
        q: "我可以用马来文联系你们处理万宜的工程吗？",
        a: "可以。您可以用马来文或英文WhatsApp我们，我们也会用其中一种语言为您解释报价。我们服务Bandar Baru Bangi、Bandar Seri Putra、Bangi Lama和UKM周边地区，一般75–120分钟可到。",
      },
      {
        q: "在万宜Bandar Baru Bangi的旧排屋加装更多冷气之前，应该先换电线吗？",
        a: "很多时候是的。许多原有排屋当初只按每间房一两把风扇来配线，并没有考虑多台冷气和即热式热水器。我们会检查电线规格、电箱和总开关，再告诉您是加新电路就够，还是换电线更安全。",
      },
    ],
  },
  "seri-kembangan": {
    name: "沙登 Seri Kembangan",
    intro:
      "沙登由旧时的沙登新村发展而来，市中心附近的旧村屋电线往往早已过了使用年限。周边是The Mines和UPM附近的新公寓和住宅区，还有许多学生出租屋。我们的工作从村屋换电箱，到出租单位的跳电和热水器故障都有。",
    housing: "旧新村屋、1990年代排屋、2000–2020年代公寓和学生出租屋",
    neighbourhoods: [
      "Seri Kembangan town",
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
      "旧新村屋用了几十年的电线和保险丝箱",
      "学生出租单位电路超负荷、插座磨损",
      "新楼盘公寓的JMB规定和装修准证",
    ],
    faqs: [
      {
        q: "可以检查我在沙登市区老房子的电线吗？",
        a: "可以。旧新村中心附近的很多房子仍在用非常旧的电线和保险丝箱。我们会测试绝缘和接地、检查电箱，并列出哪些需要马上处理、哪些可以稍后再做，让您选择全屋换电线或分阶段换。",
      },
      {
        q: "我在沙登把房间租给UPM学生，可以为每间房加独立电路吗？",
        a: "可以。我们为每间房配独立断路器供冷气和插座使用，这样一个租客不会让整间屋跳电，出故障时也更快找到原因。我们会先检查您的供电和电箱，再为整项工程报价。",
      },
    ],
  },
  "sungai-buloh": {
    name: "双溪毛糯 Sungai Buloh",
    intro:
      "双溪毛糯主要由老甘榜屋、Bandar Baru Sungai Buloh住宅区和Bukit Rahman Putra等住宅区组成，现在有MRT直通市区。甘榜屋的电线往往较旧，而且是分几次加建的。我们也为这一带的花圃拉线，那里的户外插座和水泵要长期应付潮湿环境。",
    housing: "老甘榜屋、Bandar Baru Sungai Buloh的1980–90年代排屋、2000年代有地住宅区",
    neighbourhoods: [
      "Bandar Baru Sungai Buloh",
      "Kampung Baru Sungai Buloh",
      "Bukit Rahman Putra",
      "Sungai Buloh Country Resort",
    ],
    landmarks: ["Hospital Sungai Buloh", "MRT Sungai Buloh station", "Sungai Buloh plant nurseries"],
    commonIssues: [
      "甘榜屋多年来逐步加建，电线老化又东拼西凑",
      "花圃的户外插座、水泵和灯具经常接触到水",
      "旧房子缺少接地或RCCB保护",
    ],
    faqs: [
      {
        q: "你们为双溪毛糯的花圃做电气工程吗？",
        a: "做。我们为花圃安装和维修户外照明、防水插座、水泵电路和电箱，使用适合户外的配件和合适的RCCB保护。浇水或下雨后经常跳电的装置，我们也会测试排查。",
      },
      {
        q: "可以为双溪毛糯的老甘榜屋升级电线吗？",
        a: "可以。我们先检查电线和接地，再建议全屋换电线，或先修最差的部分。木结构部分会使用合适的线管和固定件。您会得到固定报价，我们的工程附12个月施工保修。",
      },
    ],
  },
  damansara: {
    name: "白沙罗 Damansara",
    intro:
      "白沙罗的Damansara Utama（SS21）和Damansara Jaya（SS22）建于1970年代，许多排屋至今仍在用当年的电线。装修时，我们打开电箱常发现没有RCCB、电线太细，或总开关发热。IKEA和The Curve一带的Mutiara Damansara较新，公寓和办公楼需要的是灯具和电源工程。",
    housing: "SS20–SS22的1970年代排屋和半独立式洋房、Uptown店屋、Mutiara Damansara的2000年代公寓和办公楼",
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
      "SS21和SS22排屋的1970年代电线，电箱没有RCCB",
      "总开关带现代冷气负荷时发热",
      "Damansara Uptown店屋的餐厅和办公室用电负荷",
    ],
    faqs: [
      {
        q: "我们在白沙罗Damansara Jaya买了一间1970年代的排屋，应该先检查什么？",
        a: "先检查电箱并做绝缘测试。在SS22的房子，我们常发现原装电线、没有RCCB、插座太少。测试结果会显示您需要全屋换电线，还是升级电箱再加新电路。我们可以配合您的装修承包商。",
      },
      {
        q: "你们接Damansara Uptown的商业工程吗？",
        a: "接。我们为Uptown的商店、办公室和餐厅处理灯具、插座和冷气电路，并排查三相电箱跳电。可安排在开店前或较清闲的时段施工，每天收费相同。",
      },
    ],
  },
  "kota-damansara": {
    name: "哥打白沙罗 Kota Damansara",
    intro:
      "PKNS于1990年代末开始发展哥打白沙罗，如今这里有排屋、半独立式洋房、公寓，以及Dataran Sunway和The Strand一带的大量SOHO和店屋办公楼。房子已有20至25年屋龄，开关、插座和RCCB开始出问题。SOHO和办公单位常需要加插座和灯具。",
    housing: "1990年代末至2000年代排屋和半独立式洋房、公寓、SOHO和店屋办公楼",
    neighbourhoods: [
      "PJU 5 town centre",
      "Kota Damansara Seksyen 4–10",
      "Dataran Sunway",
      "Sunway Nexis",
      "Damansara Perdana",
    ],
    landmarks: ["The Strand", "Sunway Giza Mall", "MRT Kota Damansara station", "Kota Damansara Community Forest"],
    commonIssues: [
      "1990年代末的RCCB变得过于敏感，或根本不会跳",
      "SOHO单位当办公室用，电源点不够",
      "在SOHO和公寓楼施工需要管理处准证，并有时间限制",
    ],
    faqs: [
      {
        q: "可以测试我哥打白沙罗家里的RCCB还管不管用吗？",
        a: "可以。用了20年的RCCB可能已无法在额定电流下跳闸。我们用专业测试仪测试跳闸时间和电流，检查它保护的电路，有需要时更换。更换费用为RM250 – RM450，包括RCCB本身。",
      },
      {
        q: "你们在哥打白沙罗的SOHO大楼施工吗？",
        a: "是的。我们为SOHO和办公单位加插座、灯具和冷气电路，也处理跳电。大部分大楼需要承包商准证，预约时请把管理处的要求发给我们，我们会在上门前办好表格。",
      },
    ],
  },
  "ara-damansara": {
    name: "Ara Damansara",
    intro:
      "Ara Damansara紧邻梳邦机场，是Sime Darby在2000年代发展的住宅区，有公寓、排屋，以及Evolve Concept Mall和Citta Mall周边的商业楼。大部分房子只有15至20年屋龄，很少需要全屋换电线。常见工作是LED灯具、智能开关、有地住宅的电动车充电桩，以及热水器或户外配件引起的RCCB跳电。",
    housing: "2000–2010年代公寓、排屋和半独立式洋房，以及Oasis和Evolve一带的办公楼和商场",
    neighbourhoods: ["PJU 1A", "Oasis Ara Damansara", "Citta Mall area", "Jalan Lapangan Terbang Subang"],
    landmarks: [
      "Evolve Concept Mall",
      "Sultan Abdul Aziz Shah Airport (Subang)",
      "Citta Mall",
      "LRT Ara Damansara station",
    ],
    commonIssues: [
      "15–20年屋龄的房子，热水器和户外配件引起跳电",
      "在现有电箱上加装电动车充电桩和智能家居",
      "公寓楼的装修准证和施工时间限制",
    ],
    faqs: [
      {
        q: "我在Ara Damansara的排屋可以装电动车充电桩吗？",
        a: "大部分情况下可以。我们会检查您的供电、总开关和电箱空位，然后安装带RCD保护的专用电路。如果负荷较紧，充电桩可以用较低电流运行。若您自备充电桩，安装费为RM1,800 – RM2,800。",
      },
      {
        q: "你们星期六会到Ara Damansara的公寓施工吗？",
        a: "只要管理处允许就会。有些大楼星期六只准做安静的工作，或只开放半天。预约时请把大楼规定发给我们，我们会把钻孔或较长时间的断电安排在平日。",
      },
    ],
  },
  "setia-alam": {
    name: "实达阿南 Setia Alam",
    intro:
      "S P Setia从2000年代开始把实达阿南发展成大型住宅区，以排屋和半独立式洋房为主，围绕着Setia City Mall。许多房子现在正在装修，这正是屋主找我们的时候：厨房扩建、冷气电路、花园与外墙灯、电动车充电桩，以及为屋顶太阳能准备电箱。这里是我们的外围服务区，通常需要提前预约。",
    housing: "门禁及开放式住宅区内的2000–2010年代排屋、半独立式洋房和独立式洋房，以及部分公寓",
    neighbourhoods: ["Seksyen U13", "Setia Eco Park", "Setia City", "Alam Nusantara"],
    landmarks: ["Setia City Mall", "Setia City Convention Centre", "Tenby International School Setia Eco Park"],
    commonIssues: [
      "装修扩建部分直接接上原有电路，没有升级电箱",
      "加装电动车充电桩和屋顶太阳能，需要检查电箱和供电",
      "大雨时花园和外墙灯跳电",
      "自动门和户外插座故障",
    ],
    faqs: [
      {
        q: "我们正在装修实达阿南的排屋，你们可以负责电气部分吗？",
        a: "可以。我们按您的装修图纸增加电源点、厨房电路、冷气线路和灯具，如果新增负荷需要，也会升级电箱。我们会配合您的承包商，并在封天花和墙壁前把所有线路测试好。",
      },
      {
        q: "可以为我实达阿南的家准备太阳能板和电动车充电桩吗？",
        a: "可以。我们检查您的供电和电箱，腾出空位或升级电箱，并安装电动车充电桩电路。太阳能方面，我们会把电箱这一边准备好，方便您的太阳能安装商接线，每个系统都有独立的保护和隔离开关。",
      },
    ],
  },
  rawang: {
    name: "万挠 Rawang",
    intro:
      "万挠位于市区北部，既有较旧的市中心，也有Bandar Country Homes和Bandar Tasik Puteri等家庭住宅区。这些住宅区的1990和2000年代排屋，现在纷纷扩建、加装冷气和热水器，这是我们在万挠大部分工作的来源，其他还有电箱、接地和雷击电涌损坏的维修。",
    housing: "市区旧店屋、Bandar Country Homes等住宅区的1990–2010年代经济型排屋",
    neighbourhoods: [
      "Rawang town",
      "Bandar Country Homes",
      "Bandar Tasik Puteri",
      "Kota Emerald",
      "Taman Rawang Perdana",
      "Bukit Sentosa",
    ],
    landmarks: ["KTM Rawang station", "Templer Park", "Rawang Bypass"],
    commonIssues: ["扩建部分和新增冷气接在1990年代的原有电路上", "雷暴后电器被电涌损坏", "雨天自动门和户外灯故障"],
    faqs: [
      {
        q: "小工程你们也会来万挠吗？",
        a: "会。万挠属于我们的外围服务区，一般75–120分钟可到，但我们同样欢迎小工程。每次上门最低收费RM80，所以可以把吊扇、插座和灯一起列出来，我们按一次上门报价。",
      },
      {
        q: "雷击损坏了我们万挠家里的一些电器，你们可以帮忙吗？",
        a: "可以。我们会检查电箱、接地和受损电器所在的电路，更换烧坏的零件，并测试RCCB。在电箱加装防雷电涌保护器（SPD），RM400起，可以降低下次雷暴时的风险。",
      },
    ],
  },
  selayang: {
    name: "士拉央 Selayang",
    intro:
      "士拉央有黑风洞附近的大型批发市场，住宅大多是1980和90年代的排屋和组屋。这些房子已有30至40年，许多电箱稍有漏电就跳，厨房插座不够，电线是一路加接而不是更换。我们也为市场附近的商家处理电源和照明故障。",
    housing: "1980–90年代排屋和组屋、较新的公寓，以及批发市场周边的商业店铺",
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
      "用了30–40年的电线只是一路加接，没有更换",
      "潮湿的厨房和浴室稍有漏电，电箱就跳",
      "Pasar Borong Selayang周边商家的冷藏柜和照明负荷",
    ],
    faqs: [
      {
        q: "你们可以帮士拉央批发市场（Pasar Borong Selayang）附近的商家解决用电问题吗？",
        a: "可以。我们处理跳电，为冷藏柜和冰柜增加电路，并为摊位、货仓和附近店铺更换照明。由于批发市场通宵营业，我们会安排在上午较晚或下午施工，避免影响生意。",
      },
      {
        q: "我们士拉央的房子一拖地或下雨就跳电，是什么问题？",
        a: "这种情况通常是湿气渗进了靠近地面或户外的插座、灯具或电线接头。我们会逐路测试，找出漏电到地线的那一路，再重新密封、移位或更换故障零件，往往上门一次就能解决。",
      },
    ],
  },
  semenyih: {
    name: "士毛月 Semenyih",
    intro:
      "士毛月变化很快，Eco Majestic、Setia EcoHill和Bandar Rinching等住宅区，为这个靠近Broga Hill、曾经安静的小镇带来许多新的有地住宅。新房子就有新屋主的需求：户外灯、自动门线路、吊扇、加插座和热水器。市中心较旧的店屋和排屋，则需要较传统的维修和电箱工程。",
    housing: "2010–2020年代有地住宅区、市区旧店屋和排屋、乡村甘榜屋",
    neighbourhoods: [
      "Semenyih town",
      "Eco Majestic",
      "Setia EcoHill",
      "Bandar Rinching",
      "Taman Tasik Semenyih",
      "Bandar Tasik Kesuma",
    ],
    landmarks: ["Broga Hill", "Eco Majestic", "University of Nottingham Malaysia", "Semenyih Dam"],
    commonIssues: [
      "新有地住宅需要拉自动门和户外灯线路",
      "发展商标准格局电源点太少，需要加插座和电路",
      "市区旧店屋的电箱和电线老化",
    ],
    faqs: [
      {
        q: "可以为我在士毛月的新房子拉自动门和户外灯的线吗？",
        a: "可以。我们为自动门马达拉一条专用电路，加装防水插座和户外灯，并配上合适的RCCB保护，下雨时就不会让整间屋跳电。我们也可以配合您的自动门供应商接线。",
      },
      {
        q: "士毛月的工程要提前多久预约？",
        a: "预约的工程最好提前一两天，因为士毛月属于我们的外围服务区，一般75–120分钟可到。如果故障比较急，请在早上联系我们，我们会如实告诉您能否当天上门。",
      },
    ],
  },
  "cheras-selangor": {
    name: "雪州蕉赖 Cheras Selangor",
    intro:
      "雪州蕉赖主要包括Batu 9、Bandar Mahkota Cheras和双溪龙，沿着蕉赖–加影大道分布，以1990和2000年代的排屋和公寓为主。这些房子已有20至30年，RCCB老化、开关烧坏和热水器故障很常见。双溪龙拉曼大学（UTAR）周边的学生出租屋，房间电路超负荷也让房东很忙。",
    housing: "Batu 9、Bandar Mahkota Cheras和双溪龙的1990–2000年代排屋和公寓",
    neighbourhoods: [
      "Batu 9 Cheras",
      "Bandar Mahkota Cheras",
      "Bandar Sungai Long",
      "Taman Cuepacs",
      "Cheras Perdana",
      "Bandar Tun Hussein Onn",
      "Taman Suntex",
    ],
    landmarks: ["UTAR Sungai Long campus", "MRT Taman Suntex station", "MRT Batu 11 Cheras station"],
    commonIssues: [
      "20–30年排屋的RCCB和开关老化",
      "UTAR附近学生出租屋的房间电路超负荷",
      "热水器没有专用的10mA RCCB而跳电",
    ],
    faqs: [
      {
        q: "雪州蕉赖和吉隆坡蕉赖是分开服务的吗？",
        a: "两边我们都有服务。雪州蕉赖包括Batu 9、Bandar Mahkota Cheras、双溪龙、Bandar Tun Hussein Onn和Cheras Perdana。一般60–90分钟可到，傍晚蕉赖–加影大道塞车时，可能比吉隆坡那一边久一些。",
      },
      {
        q: "我们双溪龙的房子晚上冷气全开时就跳电，为什么？",
        a: "通常是多台冷气同时运行时，总开关或共用电路超负荷，这在UTAR附近的出租屋很常见。我们会测量负荷，把冷气移到专用电路上，并检查总开关和供电，价格事先谈好。",
      },
    ],
  },
  balakong: {
    name: "无拉港 Balakong",
    intro:
      "我们在无拉港的工作大多来自工业。Cheras Jaya和Balakong Jaya的仓库、车间和小型工厂，需要三相电故障排查、安装电箱和分电箱、机器电源点和LED高棚灯。较旧的排屋和无拉港新村（Kampung Baru Balakong）的房子，则需要升级电箱、换电线和处理跳电。",
    housing: "工厂和仓库、1980–90年代排屋、无拉港新村的村屋",
    neighbourhoods: ["Kampung Baru Balakong", "Taman Taming Jaya", "Taman Impian Ehsan", "Cheras Jaya"],
    landmarks: ["Taman Perindustrian Cheras Jaya", "Balakong industrial area"],
    commonIssues: ["工厂和车间三相电负荷不平衡和跳电", "仓库旧照明电费高、镇流器常坏", "新村屋的电线和保险丝箱老化"],
    faqs: [
      {
        q: "你们接无拉港的工厂和仓库电气工程吗？",
        a: "接。我们排查三相电故障，为新机器安装电箱和分电箱，增加工业插座，并把仓库旧照明换成LED高棚灯。较大的工程会先上门勘察，再给固定报价，并配合您的生产时间安排施工。",
      },
      {
        q: "可以为无拉港新村的房子换电线吗？",
        a: "可以。这里很多新村屋的电线和保险丝箱已用了几十年。我们会检查、测试，并为全屋或分阶段换电线报价，先处理最不安全的电路，再换上带RCCB保护的新电箱。",
      },
    ],
  },
  "bandar-sunway": {
    name: "双威 Bandar Sunway",
    intro:
      "双威建在昔日的锡矿场上，如今是巴生谷学生最密集的地区之一，有双威大学、蒙纳士大学马来西亚分校，以及Sunway Pyramid周边的高楼出租单位。房东和中介是我们在这里的主要顾客。常见问题有RCCB跳电、热水器、坏插座和灯，以及为分租房间加吊扇或电源点。",
    housing: "高楼公寓和学生公寓、PJS各区的1990–2000年代排屋和半独立式洋房",
    neighbourhoods: ["PJS 7", "PJS 9", "PJS 11", "Sunway Mentari", "Sunway South Quay", "Sunway Geo"],
    landmarks: ["Sunway Pyramid", "Sunway Lagoon", "Sunway University", "Monash University Malaysia"],
    commonIssues: [
      "使用频繁的学生出租单位，热水器故障和RCCB跳电",
      "租客频繁更换，插座和开关磨损",
      "公寓管理处对承包商进出和施工时间的规定",
    ],
    faqs: [
      {
        q: "双威的单位换租客期间，你们可以快速处理吗？",
        a: "可以。新学期开始前，我们可以在一次上门中检查并修好插座、灯、吊扇、热水器和RCCB，让单位可以入住。告诉我们日期和大楼规定，我们会安排合适的时段。",
      },
      {
        q: "除了公寓，你们也服务双威的有地住宅吗？",
        a: "是的。我们也在PJS的排屋和半独立式洋房施工，这些1990年代的房子常需要升级电箱、增加冷气电路和维修户外灯。从吉隆坡市中心出发，一般60–90分钟可到。",
      },
    ],
  },
  glenmarie: {
    name: "Glenmarie",
    intro:
      "Glenmarie（莎阿南Seksyen U1）大部分是工厂、仓库和办公楼，所以我们在这里的工作以商业为主：三相电、工厂和办公室电箱、仓库照明，以及机器和服务器房的电源。许多单位换过几任租客，留下没有记录的线路。我们会追查并标注电路、修复故障，并配合营业时间规划升级。",
    housing: "Seksyen U1的工厂、仓库和办公楼，高尔夫俱乐部附近也有有地住宅",
    neighbourhoods: [
      "Seksyen U1",
      "HICOM-Glenmarie Industrial Park",
      "Temasya Glenmarie",
      "Subang Hi-Tech Industrial Park",
    ],
    landmarks: ["Glenmarie Golf & Country Club", "LRT Glenmarie station"],
    commonIssues: [
      "工厂和车间的三相电需求和负荷不平衡",
      "前租客留下、没有记录的线路",
      "仓库的旧日光灯和金属卤化物灯，该换LED了",
    ],
    faqs: [
      {
        q: "我们要搬进Glenmarie的仓库，可以先帮忙检查电气装置吗？",
        a: "可以。我们检查进线供电、总电箱和分电箱，测试保护装置，并标出每条电路供电给哪些设备。您会收到一份书面清单，列出故障、不安全的遗留线路和机器的用电需求，并附上维修的固定报价。",
      },
      {
        q: "可以把Glenmarie的仓库照明换成LED吗？",
        a: "可以。我们把旧日光灯或金属卤化物灯换成LED高棚灯和支架灯，有需要时重新拉线，也可以把照明分区，只开用到的区域。我们会配合您的营业时间施工。",
      },
    ],
  },
};
