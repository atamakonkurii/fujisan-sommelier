import type { News } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prismaNewNewsFindFirst } from "prisma/apis/news";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<News>
) {
  /* 最新お知らせを取得 */
  const newNews = await prismaNewNewsFindFirst();
  if (newNews === null) {
    res.status(500);
  } else {
    res.status(200).json(newNews);
  }
}
