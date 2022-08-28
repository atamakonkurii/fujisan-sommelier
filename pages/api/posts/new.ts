import type { Post } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prismaNewPostFindMany } from "prisma/apis/posts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  /* 最新投稿を取得 */
  const newPosts = await prismaNewPostFindMany();
  res.status(200).json(newPosts);
}
