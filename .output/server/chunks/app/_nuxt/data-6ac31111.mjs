const routes = [
  { name: "Trang ch\u1EE7", path: "/" },
  { name: "Th\u1EC3 lo\u1EA1i", path: "/the-loai?type=tat-ca" },
  { name: "Truy\u1EC7n m\u1EDBi", path: "/truyen-moi" }
  // { name: 'Top', path: '/top?tab=all' },
];
const topRoutes = [
  { name: "Top Comics", type: "all", icon: "fontisto:snowflake-6" },
  { name: "Top Daily", type: "daily", icon: "tabler:hexagon-letter-d" },
  { name: "Top Weekly", type: "weekly", icon: "tabler:hexagon-letter-w" },
  { name: "Top Monthly", type: "monthly", icon: "tabler:hexagon-letter-m" },
  {
    name: "Top Chapter",
    type: "chapter",
    icon: "fluent:document-one-page-multiple-20-regular"
  },
  { name: "Top Follow", type: "follow", icon: "ph:users" },
  { name: "Top Comment", type: "comment", icon: "fluent:comment-20-regular" }
];
const filterValues = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Ongoing", value: "ongoing" }
];
const dynamicRoutes = [
  {
    path: "/truyen-moi",
    apiPath: "/truyen-moi",
    title: "Truy\u1EC7n m\u1EDBi",
    icon: "clarity:new-solid"
  },
  {
    path: "/dang-phat-hanh",
    apiPath: "/dang-phat-hanh",
    title: "\u0110ang Ph\xE1t H\xE0nh",
    icon: "material-symbols-light:comic-bubble-rounded"
  },
  {
    path: "/hoan-thanh",
    apiPath: "/hoan-thanh",
    title: "\u0110\xE3 Ho\xE0n Th\xE0nh",
    icon: "bxs:badge-check"
  },
  {
    path: "/sap-ra-mat",
    apiPath: "/sap-ra-mat",
    title: "S\u1EAFp Ra M\u1EAFt",
    icon: "material-symbols-light:event-upcoming-outline-sharp"
  }
];
const meta = (data) => {
  const title = data == null ? void 0 : data.title;
  const description = data == null ? void 0 : data.description;
  return {
    title: title || "NComics | Free comics and manga reader online",
    ogTitle: title || "NComics | Free comics and manga reader online",
    description: description || "Read hottest Japanese manga & Chinese comic & anime & Webtoon released on NComics. Thousands of popular web manga and comics for free! Romance, thriller, fantasy, comedy and more genres for you to explore.",
    ogDescription: description || "Read hottest Japanese manga & Chinese comic & anime & Webtoon released on NComics. Thousands of popular web manga and comics for free! Romance, thriller, fantasy, comedy and more genres for you to explore.",
    ogImage: (data == null ? void 0 : data.image) || "@/assets/img/logo.svg"
  };
};

export { dynamicRoutes as d, filterValues as f, meta as m, routes as r, topRoutes as t };
//# sourceMappingURL=data-6ac31111.mjs.map
