import { Storage } from "@google-cloud/storage";

export default async function handler(req: any, res: any) {
  try {
    const storage = new Storage({
      projectId: process.env.GOOGLE_SERVICE_KEY_PROJECT_ID,
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_KEY_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_KEY_PRIVATE_KEY,
      },
    });

    const bucketName = process.env.GOOGLE_SERVICE_BUCKET_NAME as string;
    const bucket = storage.bucket(bucketName);
    const fileName = req.body;

    await bucket.file(fileName).delete();

    res.status(200).end();
  } catch (e) {
    console.warn(e);
    res.status(500).send(e);
  }
}
