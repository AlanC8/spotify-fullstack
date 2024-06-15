import "dotenv/config";
import express from "express";
import cors from "cors";
import globalRouter from "./global-router";
import { logger } from "./logger";
import connectDB from "./db";
import { listBuckets, uploadFile } from "./middlewares/s3-middleware";

const PORT = process.env.PORT || 3000;

const app = express();


connectDB();

app.use(cors());
app.use(logger);
app.use(express.json());

app.use("/api/v1/", globalRouter);

listBuckets()
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
