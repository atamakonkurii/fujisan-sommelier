import type { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prismaFirebaseAuthFindFirst } from "prisma/apis/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | null>
) {
  /* firebaseAuthIdからUserを取得 */
  const { id } = req.query;
  const user = await prismaFirebaseAuthFindFirst(String(id));
  res.status(200).json(user);
}
