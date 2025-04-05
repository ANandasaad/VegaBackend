import express from "express";
import upload from "../middlewares/multer.js";
import { ImageUploadController } from "../controllers/imageUpload.controller.js";

const image_router = express.Router();

image_router.post(
  "/upload",
  upload.single("image"),
  ImageUploadController.uploadImage
);

export default image_router;
