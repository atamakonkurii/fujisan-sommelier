import { prisma } from "./prismaClient";

/* 投稿一覧を取得 */
export const prismaPostFindMany = async () => {
  return await prisma.post.findMany();
};

/* 投稿を取得 */
export const prismaPostFindUnique = async (postId: number) => {
  return await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });
};
