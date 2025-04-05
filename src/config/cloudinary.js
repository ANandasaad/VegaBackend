import { v2 as cloudinary } from "cloudinary";
import { configs } from "./index.js";
cloudinary.config({
  cloud_name: configs.CLOUDINARY_CLOUD_NAME,
  api_key: configs.CLOUDINARY_API_KEY,
  api_secret: configs.CLOUDINARY_API_SECERT,
});

export default cloudinary;
