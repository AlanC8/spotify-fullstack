import { S3 } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";
export const s3 = new S3({
  region: process.env.AWS_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "spotify-nfactorial",
    key: function (req, file, cb) {
      cb(null, "songs/" + Date.now().toString() + "-" + file.originalname);
    },
  }),
});

export const listBuckets = async () => {
  await s3
    .listBuckets()
    .then((data) => console.log(data.Buckets))
    .catch((error: Error) => console.error(error));
};

export const createBucket = async (bucketName: string) => {
  await s3
    .createBucket({ Bucket: bucketName })
    .then((data) => console.log(data))
    .catch((error: Error) => console.error(error));
};

export const deleteBucket = async (bucketName: string) => {
  await s3
    .deleteBucket({ Bucket: bucketName })
    .then((data) => console.log(data))
    .catch((error: Error) => console.error(error));
};

export const uploadFile = async (fileContent, bucket, key) => {
  try {
    const params = {
      Bucket: bucket,
      Key: key,
      Body: fileContent,
    };

    await s3.putObject(params);

    const url = `https://${bucket}.s3.amazonaws.com/${key}`;
    console.log("File uploaded successfully. URL:", url);
    return url;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const downloadFile = async () => {
  await s3
    .getObject({ Bucket: "bucketName", Key: "key" })
    .then((data) => console.log(data.Body?.toString()))
    .catch((error: Error) => console.error(error));
};

export const deleteFile = async () => {
  await s3
    .deleteObject({ Bucket: "bucketName", Key: "key" })
    .then((data) => console.log(data))
    .catch((error: Error) => console.error(error));
};

export const listFiles = async () => {
  await s3
    .listObjects({ Bucket: "bucketName" })
    .then((data) => console.log(data.Contents))
    .catch((error: Error) => console.error(error));
};

export const copyFile = async () => {
  await s3
    .copyObject({ Bucket: "bucketName", CopySource: "source", Key: "key" })
    .then((data) => console.log(data))
    .catch((error: Error) => console.error(error));
};

export const moveFile = async () => {
  await s3
    .copyObject({ Bucket: "bucketName", CopySource: "source", Key: "key" })
    .then((data) => {
      console.log(data);
      s3.deleteObject({ Bucket: "bucketName", Key: "key" });
    })
    .catch((error: Error) => console.error(error));
};
