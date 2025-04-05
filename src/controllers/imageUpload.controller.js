import { catchAsync } from "../middlewares/error.middleware.js";
import { imageUpload } from "../services/imageUpload.services.js";

export const ImageUploadController = {
  uploadImage: catchAsync(async (req, res, next) => {
    const file = req.file.path;
    const response = await imageUpload.uploadImage(file);
    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      data: response,
    });
  }),
};
