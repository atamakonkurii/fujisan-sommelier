import type { News } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prismaNewsFindUnique } from "prisma/apis/news";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<News | null>
) {
  /* お知らせを取得 */
  const { id } = req.query;
  const news = await prismaNewsFindUnique(String(id));
  res.status(200).json(news);
}
