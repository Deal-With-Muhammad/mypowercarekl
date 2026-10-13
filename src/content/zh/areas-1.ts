import type { AreaText } from "@/lib/types";

// Simplified Chinese area copy (part 1 of the areas list), written for Malaysian readers.

export const areasPart1: Record<string, AreaText> = {
  "mont-kiara": {
    name: "满家乐 Mont Kiara",
    intro:
      "我们在满家乐的工作，大多在1990年代后期以来建成的高楼公寓，每项工程都要先经过管理处。常见的有热水器一开就跳RCCB、老旧筒灯、为居家办公增加插座，以及需要先获得JMB批准的电动车充电桩。",
    housing: "以外籍人士为主的高楼公寓和服务式公寓，从1990年代后期到新推出的项目都有",
    neighbourhoods: ["Jalan Kiara", "Jalan Duta Kiara", "Solaris Mont Kiara", "Kiaramas", "Dutamas (Publika)"],
    landmarks: ["Publika", "163 Retail Park", "Plaza Mont Kiara", "Mont Kiara International School"],
    commonIssues: [
      "热水器和全屋共用一个30mA RCCB，没有独立的10mA RCCB，导致浴室一用就跳电",
      "1990年代和2000年代单位的卤素筒灯和变压器损坏",
      "安装电动车充电桩需要JMB批准，还要规划从单位电箱到停车位的走线",
      "管理处规定的装修准证、押金，以及只限平日施工的时间",
    ],
    faqs: [
      {
        q: "你们周末会到满家乐的公寓施工吗？",
        a: "会，只要管理处允许。很多大楼只准平日进行有噪音的工程，所以周末我们只做安静的工作，比如更换RCCB、维修热水器或换灯。请把大楼的住户守则WhatsApp给我们。",
      },
      {
        q: "可以在我满家乐公寓的停车场安装电动车充电桩吗？",
        a: "通常可以，但必须先获得JMB或管理处批准。我们会检查单位电箱的负荷和通往车位的走线，然后给您固定报价和一份简单的线路图，方便您连同申请一起提交。",
      },
    ],
  },
  bangsar: {
    name: "孟沙 Bangsar",
    intro:
      "孟沙的工作分两种。Bangsar Baru的1960、70年代排屋和Bukit Bandaraya的独立式洋房，很多还是原装电线，所以换电线和升级电箱很常见。孟沙南城则是较新的高楼，我们主要处理灯具、插座和公寓电箱故障。我们也为Jalan Telawi一带的餐饮店铺拉线。",
    housing: "Bangsar Baru和Bukit Bandaraya的1960–70年代排屋与独立式洋房、孟沙南城的2010年代高楼，以及Telawi的店屋",
    neighbourhoods: [
      "Bangsar Baru",
      "Bangsar Park",
      "Bukit Bandaraya",
      "Lucky Garden",
      "Bukit Pantai",
      "Bangsar South",
    ],
    landmarks: ["Bangsar Village", "Bangsar Shopping Centre", "Jalan Telawi", "LRT Bangsar站"],
    commonIssues: [
      "Bangsar Baru排屋装修时，才发现用了50年的原装电线和过细的电缆",
      "1980年前建成的独立式洋房，电箱还在用旧式保险丝，或者没有RCCB",
      "Jalan Telawi餐饮店屋的厨房和冷气线路超负荷",
      "孟沙南城公寓大楼的装修准证和固定施工时间",
    ],
    faqs: [
      {
        q: "我们正在装修Bangsar Baru的排屋，要不要顺便换电线？",
        a: "如果还是原装电线，建议换。趁墙壁和天花板已经打开时换电线，费用更低，也更少脏乱。我们会检查电线和电箱，和您及装修师傅一起标出新的插座和灯位，在封墙前把所有线路测试一遍。",
      },
      {
        q: "你们有为孟沙的咖啡馆和餐厅做店铺拉线吗？",
        a: "有。我们为Telawi和孟沙南城的店铺增加厨房设备、冷气、招牌和灯具的线路，也可以在您营业时间以外施工。如果店铺需要的电量超过现有供电，我们会在报价前先告诉您。",
      },
    ],
  },
  cheras: {
    name: "蕉赖 Cheras",
    intro:
      "我们在蕉赖上门的房子，很多是Taman Connaught、Taman Midah和Bandar Tun Razak的1970、80年代排屋。不少还在用最初的电箱（DB box），有时装的是旧式ELCB，会无缘无故跳电，插座也不够现在的冷气用。MRT沿线较新的公寓，通常只需较小、较快的维修。",
    housing: "1970–80年代单层与双层排屋、廉价组屋，以及MRT沿线较新的公寓",
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
      "Taman Connaught夜市（康乐夜市）",
      "Hospital Canselor Tuanku Muhriz (HUKM)",
    ],
    commonIssues: [
      "1970、80年代的原装电箱，旧式ELCB时常乱跳，或者该跳时却不跳",
      "插座太少，只好用拖板和插满的转换插头",
      "供电和电线不足以同时带动几台冷气和即热式热水器",
      "老排屋的开关插座烧坏，零线接头松脱",
    ],
    faqs: [
      {
        q: "我蕉赖的排屋还在用旧ELCB，需要换吗？",
        a: "很可能需要。1970、80年代安装的ELCB，常常该跳时不跳，或者一点无害的漏电就跳。我们会先测试，如果有问题就换上新式RCCB漏电保护器，通常当天就能完成。",
      },
      {
        q: "除了吉隆坡这边的蕉赖，你们也服务雪州蕉赖吗？",
        a: "有。我们服务吉隆坡蕉赖，从Taman Connaught到Bandar Tun Razak，也服务雪州那边的Batu 9、Bandar Mahkota Cheras和双溪龙一带。傍晚塞车时雪州那边可能需要更久，您发信息时我们会告诉您大概的时间。",
      },
    ],
  },
  kepong: {
    name: "甲洞 Kepong",
    intro:
      "甲洞既有Kepong Baru的1960、70年代排屋和店屋，也有Metro Prima和Jinjang一带较新的公寓。在旧房子里，我们常遇到旧式保险丝、自己驳线后用胶布包起来的接头，还有电饭锅和电水壶一起用就跳电的厨房。店屋业主则常在楼上出租单位需要独立线路时找我们。",
    housing: "Kepong Baru的1960–70年代排屋与店屋、1990年代组屋，以及Metro Prima附近较新的公寓",
    neighbourhoods: [
      "Kepong Baru",
      "Taman Bukit Maluri",
      "Taman Daya",
      "Metro Prima",
      "Jinjang",
      "Taman Usahawan Kepong",
    ],
    landmarks: ["FRIM（马来西亚森林研究院）", "Kepong Metropolitan Park（甲洞大都会公园）", "Metro Prima", "Brem Mall"],
    commonIssues: [
      "Kepong Baru的原装排屋仍在使用旧式保险丝电箱",
      "几样电器同时使用时，厨房线路就跳电",
      "店屋楼上改成房间出租，却没有独立线路",
      "墙内老化电线在插座位置出现过热痕迹",
    ],
    faqs: [
      {
        q: "可以把我甲洞店屋的线路分开，给楼上租客独立用电吗？",
        a: "可以。我们在规范的电箱里为每层楼或每个房间配置独立线路和断路器，一个租客出问题不会让大家都停电。如果您想申请独立的TNB电表，我们会说明申请流程。我们会先给您固定报价。",
      },
      {
        q: "我家没电，你们多快能到甲洞？",
        a: "从吉隆坡市中心出发，通常需要60–90 分钟，视MRR2和Jalan Kepong的交通而定。我们每天都提供当天上门服务，早上预约，大部分故障当天就能修好。",
      },
    ],
  },
  setapak: {
    name: "文良港 Setapak",
    intro:
      "文良港有1970、80年代的排屋和无电梯组屋、较新的公寓，以及TAR UMT一带庞大的租房市场。这里很多工作来自房东：在换租客之间处理跳电、更换合租屋里烧坏的插座，以及在排屋隔成房间出租时增加线路。自住屋主则通常为了旧电箱和热水器找我们。",
    housing: "1970–80年代排屋和无电梯组屋、TAR UMT附近的学生租屋，以及较新的公寓",
    neighbourhoods: ["Setapak Jaya", "Danau Kota", "Taman Melati", "Genting Klang", "Taman Ibu Kota"],
    landmarks: ["TAR UMT（拉曼理工大学）", "Setapak Central", "LRT Taman Melati站"],
    commonIssues: [
      "排屋改成学生房间后，每间都装冷气，导致线路超负荷",
      "合租屋使用频繁，开关和插座烧坏",
      "原装排屋的旧电箱没有RCCB保护",
    ],
    faqs: [
      {
        q: "我把文良港的房子租给学生，可以在换租客时帮我检查吗？",
        a: "可以。我们会检查电箱、RCCB、插座、冷气插座和热水器，修好任何不安全的地方，并通过WhatsApp发给您一份附照片的简短报告。这份报告可作为下一份租约的凭证，也能及早发现问题。",
      },
      {
        q: "合租屋的每个房间可以有自己的断路器吗？",
        a: "可以。我们可以重新布线，让每个房间在总电箱里都有独立线路和断路器，这样一个租客的热水器或冷气就不会让全屋跳电。报价前，我们会先确认您的供电能否承受总负荷。",
      },
    ],
  },
  "wangsa-maju": {
    name: "旺沙玛珠 Wangsa Maju",
    intro:
      "旺沙玛珠在1980年代规划为Seksyen 1至10，所以这里很多房子已有35至40年屋龄。组屋和公寓占了很大比例，另外还有排屋和LRT附近较新的公寓。常见工作包括老化的电箱、增加厨房插座，以及一开就跳RCCB的热水器。",
    housing: "Seksyen 1–10的1980年代组屋、公寓和排屋，以及LRT附近较新的公寓",
    neighbourhoods: ["Wangsa Maju Seksyen 1–10", "Wangsa Melawati", "Sri Rampai", "Taman Bunga Raya", "Desa Setapak"],
    landmarks: ["Wangsa Walk Mall", "LRT Wangsa Maju站", "Alpha Angle"],
    commonIssues: [
      "原装组屋和排屋中已用35–40年的电线和电箱",
      "厨房只有一两个插座，不够现代电器使用",
      "热水器没有独立的10mA RCCB，导致总RCCB跳电",
    ],
    faqs: [
      {
        q: "你们服务旺沙玛珠哪些地区？",
        a: "全区都服务，从Seksyen 1到10，还有Wangsa Melawati、Sri Rampai和Desa Setapak。大部分上门地点是组屋，所以WhatsApp时请告诉我们座号、楼层和有没有电梯，我们会带齐合适的工具。",
      },
      {
        q: "我公寓的热水器一直跳电（跳掣），是热水器还是电线的问题？",
        a: "两者都有可能。我们会先测试热水器发热管有没有漏电，再检查RCCB和电线。很多时候热水器和全屋共用30mA RCCB，其实应该有自己的10mA RCCB。我们会给您看测试读数，并先报价。",
      },
    ],
  },
  "sri-petaling": {
    name: "大城堡 Sri Petaling",
    intro:
      "大城堡（Bandar Baru Sri Petaling）在1980年代发展起来，有排屋、低层公寓和一排排店屋，后来LRT附近又多了公寓。店屋里满是餐馆，所以很多工作属于商业用电：厨房线路超负荷、三相电故障，以及晚餐时段跳电。住宅方面主要是老化电箱和增加插座。",
    housing: "1980年代排屋和低层公寓、密集的店屋，以及LRT附近的2000年代公寓",
    neighbourhoods: ["Bandar Baru Sri Petaling", "Taman Sri Endah", "Jalan Radin Bagus", "Jalan Radin Anum"],
    landmarks: ["LRT Sri Petaling站", "Endah Parade", "Jalan Radin Bagus美食街"],
    commonIssues: [
      "餐馆厨房在高峰时段线路超负荷而跳电",
      "店屋烹煮和冷藏设备用电量大，三相电负荷不平衡",
      "排屋里1980年代的原装电箱和电线",
    ],
    faqs: [
      {
        q: "可以不用停业一天，就修好我大城堡餐馆的跳电问题吗？",
        a: "通常可以。我们会在您开店前或两个营业时段之间上门，找出超负荷或故障的线路，并平衡各相负荷。如果需要较大的改动，比如加装厨房分电箱，我们会报价并配合您的营业时间安排施工。",
      },
      {
        q: "你们会为大城堡的旧排屋换电线吗？",
        a: "会。这里很多排屋已有约40年屋龄，还用着原装电线。我们可做全屋或局部换电线，例如先换厨房和浴室，提供固定报价和12个月施工保修。施工期间，大部分家庭可以照常住在家里。",
      },
    ],
  },
  "bukit-jalil": {
    name: "武吉加里尔 Bukit Jalil",
    intro:
      "自从1998年共和联邦运动会把国家体育场建在这里，武吉加里尔就陆续出现2000至2020年代的公寓和门禁式有地住宅，并以Pavilion Bukit Jalil为中心。这里的电线大多较新，所以找我们多数是做升级而不是维修：电动车充电桩、智能开关、装饰灯和增加电源插座。",
    housing: "2000–2020年代的公寓和服务式公寓、门禁式排屋和半独立式洋房",
    neighbourhoods: [
      "Bukit Jalil City",
      "Taman Esplanad",
      "Bukit Jalil Golf & Country Resort",
      "Technology Park Malaysia",
      "Jalan Jalil Perkasa",
    ],
    landmarks: [
      "Bukit Jalil National Stadium（武吉加里尔国家体育场）",
      "Pavilion Bukit Jalil（武吉加里尔柏威年）",
      "Axiata Arena",
      "Bukit Jalil Recreational Park",
    ],
    commonIssues: [
      "安装电动车充电桩需要检查负荷，并获得JMB或居民协会批准",
      "智能开关和调光开关与现有LED灯具不匹配",
      "新单位交屋时的缺陷，例如接线松脱、电箱线路标签错误",
      "装修时加装冷气和热水器线路，却没有升级电箱",
    ],
    faqs: [
      {
        q: "可以在我武吉加里尔的有地住宅安装电动车充电桩吗？",
        a: "可以。我们会检查进户供电和电箱，拉一条带RCD漏电保护的专用线路，并把充电桩装在充电线够得着车子的位置。很多门禁社区要求事先通知，我们可以把施工计划提供给管理处。",
      },
      {
        q: "我刚拿到武吉加里尔新公寓的钥匙，可以在入住前帮我检查电线吗？",
        a: "可以，而且最好在发展商保修期（DLP）结束前做。我们会测试每个插座、RCCB和接地，检查电箱标签，并找出松脱的接线。您会收到一份附照片的问题清单，可直接提交给发展商。",
      },
    ],
  },
  ampang: {
    name: "安邦 Ampang",
    intro:
      "安邦横跨吉隆坡和雪兰莪两边，所以我们可能同一周内在Ampang Hilir为旧独立式洋房换电线，又到Taman Ampang Utama修理1970年代排屋的跳电问题。吉隆坡这边的大宅，灯具、水泵和冷气用电量都很大。雪兰莪那边的山坡住宅区和老排屋，多数需要升级电箱和维修户外线路。",
    housing: "Ampang Hilir的大型独立式洋房和大使官邸、Ampang Jaya的1970–80年代排屋，以及山坡上的有地住宅和公寓",
    neighbourhoods: [
      "Ampang Hilir",
      "Taman U-Thant",
      "Taman Ampang Utama",
      "Pandan Indah",
      "Taman Kosas",
      "Bukit Indah",
      "Taman Dagang",
    ],
    landmarks: ["Ampang Point", "Great Eastern Mall", "LRT Ampang站", "Bukit Ampang观景台"],
    commonIssues: [
      "大型旧独立式洋房开着多台冷气，电线老化、电箱容量不足",
      "山坡住宅大雨后花园灯和户外插座跳电",
      "有地住宅的水泵和自动门（autogate）故障",
      "Taman Ampang Utama和Pandan排屋的1970–80年代原装电线",
    ],
    faqs: [
      {
        q: "你们安邦的吉隆坡和雪兰莪两边都服务吗？",
        a: "都服务。吉隆坡这边，我们在Ampang Hilir和Jalan U-Thant一带施工；雪兰莪那边则包括Ampang Jaya、Taman Ampang Utama、Pandan Indah和山坡住宅区。两边收费一样，每次上门最低收费RM80。",
      },
      {
        q: "每次下雨，我的花园灯就让全屋跳电，可以修吗？",
        a: "可以。在安邦的山坡住宅，通常是户外灯具、接线盒或埋地电线接头进水。我们用绝缘测试找出漏电点，换上防水配件，有需要时再让户外线路使用独立的RCCB。",
      },
    ],
  },
  sentul: {
    name: "冼都 Sentul",
    intro:
      "冼都围绕旧KTM铁路车厂发展起来，这里的无电梯组屋、店屋和小排屋，电线往往经过几十年东补西补。旁边是Sentul East和Sentul West的公寓，我们在那里主要做灯具、插座和热水器工作。在旧建筑里，常见工作是更换电箱和局部换电线。",
    housing: "旧式无电梯组屋、店屋和小排屋，以及Sentul East和Sentul West的2000–2020年代公寓",
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
      "Kuala Lumpur Performing Arts Centre（KLPac，吉隆坡表演艺术中心）",
      "KTM Sentul站",
      "LRT Sentul Timur站",
    ],
    commonIssues: [
      "Sentul Pasar旧店屋几十年来东补西接的电线",
      "无电梯组屋的电箱容量不足，如今却要带动冷气和即热式热水器",
      "Sentul East和Sentul West公寓大楼的装修规定和电梯预约",
    ],
    faqs: [
      {
        q: "可以一层一层为冼都的旧店屋换电线吗？",
        a: "可以。楼下做生意、楼上住人的店屋，分阶段施工很常见。我们先处理最急需的楼层，尽量让其他楼层照常用电，每个阶段完成后都会测试。一份固定报价涵盖所有阶段。",
      },
      {
        q: "你们会到冼都Sentul East和Sentul West的公寓施工吗？",
        a: "会。那里的工作大多是灯具、增加插座、热水器线路和RCCB跳电。我们遵守管理处对施工时间和电梯使用的规定，所以上门前请告诉我们座号和是否需要施工准证。",
      },
    ],
  },
  "taman-tun-dr-ismail": {
    name: "TTDI",
    intro:
      "TTDI从1974年起在旧橡胶园上兴建，所以大部分排屋和半独立式洋房已有40至50年屋龄。很多仍在用原装电线，屋主装修时，我们通常建议换电线并换新电箱，而不是在旧线路上继续加负荷。车廊灯和户外插座在暴风雨时跳电也很常见。",
    housing: "旧橡胶园上的1970–80年代排屋、半独立式洋房和独立式洋房，边缘地带有少数较新的公寓",
    neighbourhoods: [
      "Jalan Datuk Sulaiman",
      "Jalan Tun Mohd Fuad",
      "Jalan Burhanuddin Helmi",
      "Jalan Wan Kadir",
      "Jalan Abang Haji Openg",
      "Jalan Leong Yew Koh",
    ],
    landmarks: ["Taman Rimba Kiara", "MRT TTDI站", "Pasar TTDI", "Glo Damansara"],
    commonIssues: [
      "排屋和半独立式洋房使用40–50年的原装电线，绝缘层已经脆化",
      "旧电箱没有RCCB，或还在用过时的ELCB",
      "季候风暴雨期间，车廊灯和花园插座让全屋跳电",
      "装修时把厨房和冷气线路接在旧线路上",
    ],
    faqs: [
      {
        q: "我们TTDI的房子还是1970年代的原装电线，真的需要全屋换电线吗？",
        a: "不一定。我们会先对每条线路做绝缘电阻测试。如果读数差或电线已经脆化，换电线是安全的做法。如果部分线路测试正常，局部换电线加一个新电箱可能就足够。",
      },
      {
        q: "我们住在TTDI排屋里，还可以同时换电线吗？",
        a: "可以。我们逐个房间施工，屋子大部分地方仍有电，会遮盖家具、每天清理，每晚恢复供电。单层排屋约需3–5 个工作日，双层排屋约5–8 个工作日。",
      },
    ],
  },
  "desa-parkcity": {
    name: "Desa ParkCity",
    intro:
      "Desa ParkCity从2000年代起围绕Central Park和The Waterfront发展，这里的高档排屋、半独立式洋房和公寓都还算新。屋主找我们，大多是为了升级：设计师灯具和花园灯、智能开关、装修时增加线路，以及电动车充电桩。每项工作我们都会遵守社区的承包商规定。",
    housing: "规划型城镇里2000–2020年代的高档有地住宅和公寓",
    neighbourhoods: ["The Waterfront", "Central Park", "Westside", "The Breezeway", "Clearwater", "Casaview"],
    landmarks: ["Central Park Desa ParkCity", "The Waterfront", "Plaza Arkadia"],
    commonIssues: [
      "LED驱动器不匹配，导致设计师灯具和调光灯闪烁",
      "安装电动车充电桩需要检查供电，并获得社区管理处批准",
      "开关盒里没有零线，难以改装智能开关",
      "社区管理处规定的承包商登记和施工时间",
    ],
    faqs: [
      {
        q: "可以在我Desa ParkCity的家安装智能开关吗？",
        a: "可以。我们会先检查开关盒里有没有零线（neutral），因为很多智能开关需要零线。如果没有，我们会拉一条零线，或推荐适合您灯具的免零线款式，离开前测试每条线路。",
      },
      {
        q: "你们会遵守Desa ParkCity的承包商规定吗？",
        a: "会。各区通常要求承包商在警卫室或管理处登记，并在规定时间内施工。请把您所在区的规定发给我们，我们会准备好所需资料，把有噪音的工作安排在允许的时段。",
      },
    ],
  },
  "old-klang-road": {
    name: "旧巴生路 Old Klang Road",
    intro:
      "在旧巴生路（Jalan Klang Lama）沿线，华联花园（OUG）和Taman Desa等老住宅区旁边，新公寓一栋接一栋落成。华联花园的1960、70年代排屋是我们做最多换电线和换电箱的地方，原因往往是原装保险丝和电线负荷不了现在的冷气。较新的公寓大楼，则通常是RCCB跳电、灯具和热水器问题。",
    housing: "华联花园（OUG）的1960–70年代排屋、Taman Desa的1980年代住宅和公寓，以及许多2010–2020年代公寓",
    neighbourhoods: [
      "OUG（华联花园，Taman Overseas Union）",
      "Taman Desa",
      "Taman Gembira",
      "Taman Sri Sentosa",
      "Taman Yarl",
      "Bukit OUG",
    ],
    landmarks: ["Pearl Point", "Scott Garden", "Mid Valley Megamall（谷中城）"],
    commonIssues: [
      "华联花园（OUG）排屋的旧式保险丝电箱和原装电线",
      "多年来陆续加装冷气线路，却没有升级总开关或电箱",
      "公寓装修拉线所需的JMB准证和施工时间",
    ],
    faqs: [
      {
        q: "我华联花园（OUG）的房子还在用旧保险丝盒，更换要做些什么？",
        a: "我们会把旧式保险丝电箱换成配有断路器（MCB）和RCCB的新式电箱，为每条线路贴上标签，并测试后面的电线。如果有些电线老化到不能再接，我们会给您看，另外报价。更换电箱通常一天完成。",
      },
      {
        q: "你们到旧巴生路要多久？",
        a: "从吉隆坡市中心出发通常需要45–75 分钟，不过谷中城附近的高峰交通可能会更久。如果跳电或闻到烧焦味，在安全的情况下先关掉电箱（DB box）总闸，再WhatsApp我们安排当天上门。",
      },
    ],
  },
  "kuchai-lama": {
    name: "Kuchai Lama",
    intro:
      "我们在Kuchai Lama的工作约有一半是商业用电。Kuchai Entrepreneurs Park满是商业店屋、作坊和餐饮店，那里的工作通常是三相电故障、增加电源插座和装修照明。Taman Kuchai较旧的排屋需要升级电箱和换电线，而MRT附近较新的公寓多数只需小修和安装配件。",
    housing: "商业店屋和轻工业单位、Taman Kuchai的旧排屋，以及2010–2020年代公寓",
    neighbourhoods: [
      "Kuchai Entrepreneurs Park",
      "Jalan Kuchai Lama",
      "Jalan Kuchai Maju",
      "Taman Kuchai",
      "Taman Naga Emas",
    ],
    landmarks: ["Kuchai Entrepreneurs Park", "MRT Kuchai站", "MRT Taman Naga Emas站"],
    commonIssues: [
      "设有作坊和厨房的商业店屋，三相电负荷不平衡并经常跳电",
      "办公室装修需要重新规划插座位置和安装LED平板灯",
      "Taman Kuchai旧排屋的电线和电箱老化",
    ],
    faqs: [
      {
        q: "你们会处理Kuchai Entrepreneurs Park商业店屋的三相电线路吗？",
        a: "会。我们追查三相电箱的跳电原因，平衡各相负荷，为厨房或机器加装分电箱，并为装修安装新的电位。较大的工程可以安排在营业时间以外进行，让店铺照常营业。",
      },
      {
        q: "可以负责我在Kuchai Lama新办公室装修的电工工程吗？",
        a: "可以。请把平面图或照片WhatsApp给我们，我们会把插座、灯具、冷气线路和电箱改动合成一个固定报价。我们会配合您的室内设计师或装修承包商，交接前测试所有线路。",
      },
    ],
  },
  segambut: {
    name: "泗岩沫 Segambut",
    intro:
      "在泗岩沫的Segambut Dalam和较旧的甘榜式巷子里，房子往往是一间一间加建出来的，电线也跟着一路延伸：长长的明线、粗细不一的电线，还有多年没人检查过的接头。在Jalan Duta和吉隆坡法院大厦附近，较新的公寓则多是例行的灯具、插座和RCCB工作。",
    housing: "后来加建过的旧甘榜式房屋、旧排屋，以及Jalan Duta附近较新的公寓",
    neighbourhoods: ["Segambut Dalam", "Segambut Tengah", "Taman Sri Sinar", "Jalan Segambut", "Jalan Duta"],
    landmarks: ["Kuala Lumpur Courts Complex（吉隆坡法院大厦）", "KTM Segambut站", "MITEC"],
    commonIssues: [
      "甘榜式房屋随意加接电线，电线粗细不一",
      "明线和接线处受潮湿和高温影响",
      "旧房子没有接地或接地有问题",
      "在较新的公寓大楼施工需要管理处准证",
    ],
    faqs: [
      {
        q: "我们泗岩沫的房子加建过几次，可以让电线变安全吗？",
        a: "可以。我们会把每条线路追查回电箱，找出过细或接驳不当的电线，并检查接地。然后先报价修理不安全的部分，只有在测试显示有需要时才建议全屋换电线。",
      },
      {
        q: "你们服务泗岩沫Jalan Duta附近的新公寓吗？",
        a: "服务。公寓单位方面，我们处理RCCB跳电、热水器线路、灯具和增加插座。如果您的大楼需要施工准证或预约电梯，请在发信息时告诉我们，我们会据此安排上门时间。",
      },
    ],
  },
  "sri-hartamas": {
    name: "Sri Hartamas",
    intro:
      "Sri Hartamas在1990年代成形，Desa Sri Hartamas有公寓、排屋和半独立式洋房，还有一条热闹的餐厅和酒吧街。房子约30年屋龄，正到了电箱、开关和热水器线路开始出问题的年纪。Plaza Damas附近的餐厅则找我们处理厨房线路、招牌和灯具。",
    housing: "1990年代的公寓、排屋和半独立式洋房，主要商业街上有餐饮店屋",
    neighbourhoods: ["Desa Sri Hartamas", "Jalan Sri Hartamas 1", "Plaza Damas", "Hartamas Heights", "Dutamas"],
    landmarks: ["Plaza Damas", "Hartamas Shopping Centre"],
    commonIssues: [
      "1990年代住宅用了30年的电箱和开关开始失灵",
      "较旧公寓浴室的热水器导致RCCB跳电",
      "Plaza Damas附近餐厅的厨房和冷气线路超负荷",
    ],
    faqs: [
      {
        q: "我1990年代的Sri Hartamas公寓每隔几天就跳电（跳掣），通常是什么原因？",
        a: "这个屋龄的大楼，通常是RCCB老化、热水器发热管漏电，或浴室、阳台灯具受潮。我们会逐条线路隔离找出原因，给您看测试读数，修理前先报价。很多情况一次上门就能解决。",
      },
      {
        q: "可以在营业时间以外到我Sri Hartamas的餐厅施工吗？",
        a: "可以。我们可以在您开店前的早上，或午餐与晚餐之间上门。常见工作包括新增厨房线路、招牌拉线、更换灯具，以及追查高峰时段的跳电。",
      },
    ],
  },
  brickfields: {
    name: "十五碑 Brickfields",
    intro:
      "在十五碑，一间战前店屋和一栋KL Sentral高楼可能只隔两条街。Jalan Tun Sambanthan沿线的旧店屋和无电梯组屋，几十年来为商店、食肆和楼上房间不断加接电线。在Sentral一带的高楼，工作多是公寓电箱故障、灯具和热水器，并要遵守严格的大楼规定。",
    housing: "战前与战后店屋、旧式无电梯组屋，以及KL Sentral一带的现代高楼公寓和办公楼",
    neighbourhoods: [
      "Jalan Tun Sambanthan（小印度）",
      "Jalan Thambipillay",
      "Jalan Scott",
      "Jalan Berhala",
      "Jalan Travers",
      "KL Sentral",
    ],
    landmarks: [
      "KL Sentral（吉隆坡中央车站）",
      "Little India（小印度，Jalan Tun Sambanthan）",
      "NU Sentral",
      "Vivekananda Ashram",
    ],
    commonIssues: [
      "楼下开店、楼上住人的店屋，几十年来不断加接的电线",
      "小印度餐馆和摊位的厨房和灯具用电量大",
      "旧式无电梯组屋电箱老化、没有RCCB",
      "KL Sentral住宅大楼严格的准证和电梯预约规定",
    ],
    faqs: [
      {
        q: "可以帮我整理十五碑旧店屋的电线吗？",
        a: "可以。我们会先查清楚每条线连到哪里，因为这类建筑往往有好几代的电线。然后把店铺和住家线路分开，更换不安全的部分，并装上带RCCB保护的新式电箱。如果您希望，也可以分阶段进行。",
      },
      {
        q: "你们会到十五碑KL Sentral的公寓施工吗？",
        a: "会。KL Sentral一带的大楼通常需要承包商准证和预约电梯，有些只允许平日施工。请把单位资料和大楼规定WhatsApp给我们，我们会先和管理处办妥手续。",
      },
    ],
  },
  klcc: {
    name: "吉隆坡城中城 KLCC",
    intro:
      "我们在吉隆坡城中城的工作几乎都在豪华公寓和服务式公寓里，每项工作都受大楼规定影响：承包商登记、规定施工时间、预约电梯，有时还需要保安陪同。常见需求有更换灯具、调光开关和LED驱动器故障、为居家办公增加插座，以及热水器或阳台灯具引起的RCCB跳电。",
    housing: "2000年代以来的豪华高楼公寓和服务式公寓，以及Jalan Ampang一带较旧的公寓",
    neighbourhoods: [
      "Jalan Ampang",
      "Jalan Binjai",
      "Jalan Kia Peng",
      "Jalan Stonor",
      "Jalan Conlay",
      "Jalan P. Ramlee",
    ],
    landmarks: [
      "Petronas Twin Towers（双峰塔）",
      "Suria KLCC",
      "KLCC Park",
      "Kuala Lumpur Convention Centre（吉隆坡会展中心）",
    ],
    commonIssues: [
      "设计师灯光方案中的LED驱动器和调光开关失灵",
      "热水器和淋到雨的阳台灯具导致RCCB跳电",
      "管理型大楼的承包商登记、电梯预约和固定施工时间",
    ],
    faqs: [
      {
        q: "你们可以配合我KLCC大楼的承包商规定施工吗？",
        a: "可以。请把管理处的要求发给我们，我们会提前登记、预约货梯，并在允许的时间内施工。大部分城中城大楼要求提前一两天提交工人资料，所以越早联系，我们就能越早安排。",
      },
      {
        q: "我KLCC公寓的调光灯会闪，可以修吗？",
        a: "通常可以。高档公寓的灯闪，最常见是调光开关和LED驱动器不匹配，或天花板上方的驱动器快坏了。我们会测试调光开关和驱动器，订货前先给您更换方案的报价。",
      },
    ],
  },
  "bukit-bintang": {
    name: "武吉免登 Bukit Bintang",
    intro:
      "我们在武吉免登的工作大多是商业用电。亚罗街（Jalan Alor）、Changkat和Tengkat Tong Shin一带的旧店屋，现在开着餐厅厨房、酒吧和民宿，用的却是从没设计来承受这种负荷的电线，所以线路超负荷和接头烧坏很常见。我们大多把维修安排在早上或下午营业前，也负责附近的公寓。",
    housing: "改成餐饮店和民宿的旧店屋、酒店、服务式公寓和公寓",
    neighbourhoods: [
      "Jalan Alor",
      "Changkat Bukit Bintang",
      "Tengkat Tong Shin",
      "Jalan Imbi",
      "Jalan Pudu",
      "Jalan Bukit Bintang",
    ],
    landmarks: [
      "Pavilion Kuala Lumpur（柏威年）",
      "Jalan Alor（亚罗街）",
      "Lot 10",
      "Berjaya Times Square（成功时代广场）",
    ],
    commonIssues: [
      "餐厅厨房和酒吧让原装店屋电线超负荷",
      "长期高负荷运转的三相电箱接线端子烧坏、出现过热点",
      "改建成民宿后，线路太少，不够每间房的冷气使用",
      "维修必须配合营业到很晚的时间来安排",
    ],
    faqs: [
      {
        q: "可以在不影响营业的情况下，为我武吉免登的酒吧做电工工程吗？",
        a: "可以。这里大部分酒吧傍晚才开，所以我们会安排早上或下午较早的时段，尽量在您开店前完工。我们每天都营业，包括周末，开工前会先给您固定报价。",
      },
      {
        q: "我们在亚罗街的店晚餐时段一直跳电，你们能怎么处理？",
        a: "我们会检查每条线路和每一相的负荷，找出超负荷或故障的地方并修好。通常是把大功率设备分到不同线路，或加装分电箱。如果供电本身不够，我们会说明向TNB申请升级的流程。",
      },
    ],
  },
  "desa-petaling": {
    name: "Desa Petaling",
    intro:
      "Desa Petaling的家庭大多住在Bandar Tasik Selatan附近的1980年代排屋和低层组屋。经过40多年，原装电箱、开关和插座都已老化，而家里用的冷气和电器远比当初设计的多。大部分工作是升级电箱、修理跳电、局部换电线和增加电位。",
    housing: "1980年代单层与双层排屋和低层组屋",
    neighbourhoods: ["Taman Desa Petaling", "Bandar Tasik Selatan", "Sungai Besi"],
    landmarks: ["Terminal Bersepadu Selatan（TBS，南部综合交通总站）", "Bandar Tasik Selatan站"],
    commonIssues: [
      "1980年代的原装开关和插座出现裂痕或过热",
      "旧电箱的总开关容量太小，应付不了现在的冷气负荷",
      "组屋的厨房和浴室只靠一条线路供电",
    ],
    faqs: [
      {
        q: "1980年代的Desa Petaling房子值得升级电箱吗？",
        a: "大多数情况下值得。配有断路器（MCB）和合适额定值RCCB的新式电箱能防止触电，出故障时也容易隔离。我们会同时检查电箱后面的电线，并先给您固定报价。",
      },
      {
        q: "只换一个插座这种小工作，你们也会到Desa Petaling吗？",
        a: "会，小工作也没问题。每次上门最低收费RM80，所以如果您有几样小工作，比如一个插座（plug point）、一盏灯和一把风扇，可以在一条WhatsApp信息里列出来，我们一起报价。",
      },
    ],
  },
  "salak-selatan": {
    name: "沙叻秀 Salak Selatan",
    intro:
      "沙叻秀新村可追溯至1950年代，吉隆坡一些最老的电线就在这里：木屋和砖屋用的是明线、旧式保险丝座，接地不是没有就是已经锈蚀。LRT和KTM站附近较新的排屋和组屋，需要的则是较例行的工作。在旧新村，建议先做一次安全检查。",
    housing: "1950年代新村房屋、较旧的排屋和组屋，以及车站附近一些较新的公寓",
    neighbourhoods: ["Kampung Baru Salak Selatan", "Salak South Garden", "Taman Salak Selatan", "Taman Desa Tasik"],
    landmarks: ["LRT Salak Selatan站", "KTM Salak Selatan站"],
    commonIssues: [
      "1950年代新村房屋非常旧的明线和保险丝座",
      "木屋和砖屋没有接地或接地已锈蚀",
      "几代人陆续加建的部分，共用一条超负荷的线路",
    ],
    faqs: [
      {
        q: "我们在沙叻秀新村的老家非常旧，该从哪里开始？",
        a: "从电路安全检查开始。我们会测试绝缘、接地和总保护装置，然后告诉您哪些问题要优先处理，比如外露的接头或没有RCCB，哪些可以缓一缓。之后您可以分阶段换电线，每个阶段都是固定价格。",
      },
      {
        q: "从来没装过漏电保护器（RCCB）的房子，可以安装吗？",
        a: "可以。我们会装一个新电箱，或在安全的情况下把RCCB加到现有电箱上。我们会先测试电线，因为有漏电的旧房子装上新RCCB可能马上就跳。如果出现这种情况，我们会找出漏电点并修好。",
      },
    ],
  },
};
