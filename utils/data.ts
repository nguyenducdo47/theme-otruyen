type Route = {
  name: string;
  path: string;
  icon?: string;
};

export const routes: Route[] = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Thể loại', path: '/the-loai?type=tat-ca' },
  { name: 'Truyện mới', path: '/truyen-moi' },
  // { name: 'Top', path: '/top?tab=all' },
];

type TopRoute = {
  name: string;
  type: string;
  icon: string;
};

export const topRoutes: TopRoute[] = [
  { name: 'Top Comics', type: 'all', icon: 'fontisto:snowflake-6' },
  { name: 'Top Daily', type: 'daily', icon: 'tabler:hexagon-letter-d' },
  { name: 'Top Weekly', type: 'weekly', icon: 'tabler:hexagon-letter-w' },
  { name: 'Top Monthly', type: 'monthly', icon: 'tabler:hexagon-letter-m' },
  {
    name: 'Top Chapter',
    type: 'chapter',
    icon: 'fluent:document-one-page-multiple-20-regular',
  },
  { name: 'Top Follow', type: 'follow', icon: 'ph:users' },
  { name: 'Top Comment', type: 'comment', icon: 'fluent:comment-20-regular' },
];

export const filterValues: { label: string; value: string }[] = [
  { label: 'All', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'Ongoing', value: 'ongoing' },
];

type DynamicRoute = {
  path: string;
  apiPath: string;
  title: string;
  icon: string;
};

export const dynamicRoutes: DynamicRoute[] = [
  {
    path: '/truyen-moi',
    apiPath: '/truyen-moi',
    title: 'Truyện mới',
    icon: 'clarity:new-solid',
  },
  {
    path: '/dang-phat-hanh',
    apiPath: '/dang-phat-hanh',
    title: 'Đang Phát Hành',
    icon: 'material-symbols-light:comic-bubble-rounded',
  },
  {
    path: '/hoan-thanh',
    apiPath: '/hoan-thanh',
    title: 'Đã Hoàn Thành',
    icon: 'bxs:badge-check',
  },
  {
    path: '/sap-ra-mat',
    apiPath: '/sap-ra-mat',
    title: 'Sắp Ra Mắt',
    icon: 'material-symbols-light:event-upcoming-outline-sharp',
  },
];

export const meta = (data?: {
  title?: string;
  description?: string;
  image?: string;
}) => {
  const title = data?.title;
  const description = data?.description;
  return {
    title: title || 'NComics | Free comics and manga reader online',
    ogTitle: title || 'NComics | Free comics and manga reader online',
    description:
      description ||
      'Read hottest Japanese manga & Chinese comic & anime & Webtoon released on NComics. Thousands of popular web manga and comics for free! Romance, thriller, fantasy, comedy and more genres for you to explore.',
    ogDescription:
      description ||
      'Read hottest Japanese manga & Chinese comic & anime & Webtoon released on NComics. Thousands of popular web manga and comics for free! Romance, thriller, fantasy, comedy and more genres for you to explore.',
    ogImage: data?.image || '@/assets/img/logo.svg',
  };
};
