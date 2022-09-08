import type { Post } from "@prisma/client";

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
export const prismaPostFindUnique = async (postId: string) => {
  return await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });
};

/* 投稿を取得 */
export const prismaPostCreate = async (props: Post) => {
  return await prisma.post.create({
    data: {
      authorId: "cl7fbzzlj0013wjapooycvl2u",
      photoUrl:
        "https://storage.googleapis.com/fujisan-sommelier-bucket/test/sam1.webp",
      content: props.content,
      draftContent: props.content,
      published: props.published,
      publishedAt: new Date(),
    },
  });
};
