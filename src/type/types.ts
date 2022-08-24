export type LandingPageNews = {
  id: string;
  title: string;
  publishedAt: string;
  categoryName: string;
};

export type NewsArrayResponse = {
  news: {
    id: string;
    title: string;
    publishedAt: string;
    category: { name: string };
  }[];
};

export type NewsResponse = {
  id: string;
  title: string;
  publishedAt: string;
  category: { name: string };
};

export type NewsShowResponse = {
  news: {
    id: string;
    title: string;
    publishedAt: string;
    category: { name: string };
    content: string;
  };
};

export type PostShowType = {
  id: string;
  postPhotoUrl: string;
  content: string;
  favoriteCount: number;
  publisherPhotoUrl: string;
  date: string;
};
