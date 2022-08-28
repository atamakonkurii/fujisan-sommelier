import type { Post } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prismaTrendPostFindMany } from "prisma/apis/posts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  /* トレンド投稿を取得 */
  const trendPosts = await prismaTrendPostFindMany();
  res.status(200).json(trendPosts);
}
