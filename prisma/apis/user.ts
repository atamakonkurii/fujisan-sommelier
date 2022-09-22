import { prisma } from "./prismaClient";

/* firebaseAuthIdからUserを取得 */
export const prismaFirebaseAuthFindFirst = async (firebaseAuthId: string) => {
  return await prisma.user.findFirst({
    where: {
      firebaseAuthId: firebaseAuthId,
    },
  });
};
