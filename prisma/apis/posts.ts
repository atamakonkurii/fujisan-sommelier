import { prisma } from "./prismaClient";

/* 投稿一覧を取得 */
export const prismaPostFindMany = async () => {
  return await prisma.post.findMany();
};

/* 最新投稿を取得 */
export const prismaNewPostFindMany = async () => {
  return await prisma.post.findMany({
    take: 2,
    orderBy: {
      publishedAt: "desc",
    },
  });
};

/* トレンド投稿を取得 */
export const prismaTrendPostFindMany = async () => {
  return await prisma.post.findMany({
    take: 2,
    orderBy: {
      publishedAt: "asc",
    },
  });
};

/* 投稿を取得 */
export const prismaPostFindUnique = async (postId: number) => {
  return await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });
};
