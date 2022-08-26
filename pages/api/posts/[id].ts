import type { Post } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prismaPostFindUnique } from "prisma/apis/posts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | null>
) {
  /* 投稿リストを取得 */
  const { id } = req.query;
  const post = await prismaPostFindUnique(id);
  res.status(200).json(post);
}
