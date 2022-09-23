import { Storage } from "@google-cloud/storage";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

const upload = multer({
  storage: multer.memoryStorage(),
});

export default async function handler(req: any, res: any) {
  try {
    const body: any = await new Promise((resolve, reject) => {
      upload.single("file")(req, res, (err: any) => {
        if (err) {
          return reject(err);
        }
        resolve({ file: req.file, path: req.body.path });
      });
    });

    const storage = new Storage({
      projectId: process.env.GOOGLE_SERVICE_KEY_PROJECT_ID,
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_KEY_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_KEY_PRIVATE_KEY,
      },
    });

    const uuid = uuidv4();
    const bucketName = process.env.GOOGLE_SERVICE_BUCKET_NAME as string;
    const bucket = storage.bucket(bucketName);
    const file = bucket.file(`posts/${uuid}`);

    await file.save(body.file.buffer, {
      metadata: { contentType: body.file.mimetype },
    });
    res.status(200).json({
      fileUrl: `https://storage.googleapis.com/${bucketName}/${file.name}`,
    });
  } catch (e) {
    console.warn(e);
    res.status(500).send(e);
  }
}
