export type LandingPageNews = {
  id: number;
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
  postPhotoUrl: string;
  content: string;
  favoriteCount: number;
  publisherPhotoUrl: string;
  date: string;
};

export type PostShowPageType = {
  post: {
    id: string;
    authorId: string;
    photoUrl: string | null;
    content: string | null;
    publishedAt: Date | null;
  };
};
