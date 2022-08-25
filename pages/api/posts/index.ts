import type { Post } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prismaPostFindMany } from "prisma/apis/posts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  /* 投稿リストを取得 */
  const posts = await prismaPostFindMany();
  res.status(200).json(posts);
}
