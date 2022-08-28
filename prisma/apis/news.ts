import { prisma } from "./prismaClient";

/* お知らせ一覧を取得 */
export const prismaNewsFindMany = async () => {
  return await prisma.news.findMany();
};

/* お知らせを取得 */
export const prismaNewsFindUnique = async (newsId: number) => {
  return await prisma.news.findUnique({
    where: {
      id: newsId,
    },
  });
};
