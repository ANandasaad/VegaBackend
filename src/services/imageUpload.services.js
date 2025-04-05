import cloudinary from "../config/cloudinary.js";
import fs from "fs";
import AppError from "../errors/AppError.js";
export const imageUpload = {
  uploadImage: async (input) => {
    try {
      const result = await cloudinary.uploader.upload(input, {
        folder: "images",
      });

      if (!result) {
        throw new AppError("Image upload failed", 400);
      }

      fs.unlinkSync(input);
      return result.secure_url;
    } catch (error) {
      throw error;
    }
  },
};
