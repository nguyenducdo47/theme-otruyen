export type ComicDetail = {
  average: number;
  chapters: {
    id: number;
    name: string;
  }[];
  content: string;
  followers: number;
  genres: {
    slug: string;
    name: string;
  }[];
  is_adult: boolean;
  origin_name: string[];
  rating_count: number;
  slug: string;
  name: string;
  thumb_url: string;
  status: string;
  total_views: number | string;
  author: string | string[];
};

export type Comic = {
  name: string;
  thumb_url: string;
  followers: string;
  genres: {
    id: string;
    name: string;
  }[];
  author: string | string[];
  slug: string;
  is_trending: boolean;
  lastest_chapters: {
    id: string;
    name: string;
    updated_at: string;
  }[];
  other_names: string[];
  short_description: string;
  status: string;
  total_comments: string;
  total_views: string;
  updated_at: string;
};

export type Reply = {
  avatar: string;
  content: string;
  created_at: string;
  username: string;
  stickers: string[];
  vote_count: number;
  mention_user: string;
};

export type Comment = {
  avatar: string;
  content: string;
  created_at: string;
  username: string;
  stickers: string[];
  vote_count: number;
  replies: Reply[];
};

export type ComicComments = {
  total_pages: number;
  total_comments: number;
  current_page: number;
  comments: Comment[];
};

export type Genre = {
  name: string;
  slug: string;
  description?: string;
};
