import type { Post } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prismaPostCreate } from "prisma/apis/posts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  /* 投稿を作成 */
  try {
    const post = await prismaPostCreate(req.body);
    res.status(200).json(post);
    return;
  } catch (error) {
    res.status(500);
  }
}
