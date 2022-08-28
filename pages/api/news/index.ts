import type { News } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prismaNewsFindMany } from "prisma/apis/news";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<News[]>
) {
  /* 投稿一覧を取得 */
  const news = await prismaNewsFindMany();
  res.status(200).json(news);
}
