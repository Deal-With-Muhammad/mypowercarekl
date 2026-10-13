import type { CategoryText } from "@/lib/types";

export const categories: CategoryText = {
  repairs: { name: "维修与故障排查", blurb: "跳电、冒火花、家里没电及当天维修。" },
  wiring: { name: "拉线与换电线", blurb: "新增点位、装修拉线和全屋换电线。" },
  "db-box": { name: "电箱与供电", blurb: "电箱（DB box）、RCCB、三相电和防雷电涌保护。" },
  "fans-lighting": {
    name: "灯具与风扇",
    blurb: "灯具、筒灯、吊灯、灯具维修和吊扇。",
  },
  appliances: {
    name: "热水器与电器",
    blurb: "热水器、抽油烟机、排气扇、冷气电源（aircond point）和电动车充电桩。",
  },
  "safety-smart": { name: "安全与智能家居", blurb: "电路检查、接地测试和智能升级。" },
  commercial: { name: "商业电工", blurb: "店铺、办公室、餐饮店及定期保养。" },
};
