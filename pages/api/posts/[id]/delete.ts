import type { Post } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prismaPostDelete } from "prisma/apis/posts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | null>
) {
  /* 投稿を削除 */
  const { id } = req.query;
  const post = await prismaPostDelete(String(id));
  res.status(200).json(post);
}
