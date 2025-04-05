import dotenv from "dotenv";
dotenv.config();

export const configs = {
  PORT: process.env.PORT || 3000,
  API_VERSION: "/api/v1",
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECERT: process.env.CLOUDINARY_API_SECRET,
};
