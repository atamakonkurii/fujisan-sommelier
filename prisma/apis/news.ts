import { prisma } from "./prismaClient";

/* お知らせ一覧を取得 */
export const prismaNewsFindMany = async () => {
  return await prisma.news.findMany();
};

/* 最新お知らせを取得 */
export const prismaNewNewsFindFirst = async () => {
  return await prisma.news.findFirst({
    orderBy: {
      publishedAt: "desc",
    },
  });
};

/* お知らせを取得 */
export const prismaNewsFindUnique = async (newsId: string) => {
  return await prisma.news.findUnique({
    where: {
      id: newsId,
    },
  });
};
