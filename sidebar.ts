import type { StarlightSidebarTopicsUserConfig } from "starlight-sidebar-topics";

export let sidebar: StarlightSidebarTopicsUserConfig = [
  {
    label: "Linux",
    id: "linux",
    link: "/notes/linux/",
    items: [
      {
        label: "Network",
        items: ["notes/linux/network/vxlan"],
      },
    ],
  },
  {
    label: "Redis",
    link: "/notes/redis/",
    id: "redis",
    items: ["notes/redis/sentinel"],
  },
];

export let options = {
  exclude: ["/blog", "/blog/**/*"],
  // 自動將目錄下沒被列在 sidebar 的檔案加入 topics
  // 但不會自動出現在側邊欄上，bad
  topics: {
    redis: ["/notes/redis/"],
    linux: ["/notes/linux/"],
  },
};
