import express from "express";
import { BlogController } from "../controllers/blog.controller.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { BlogValidation } from "../validation.js/blog.validation.js";
import { validate } from "../middlewares/validate.js";

const blog_router = express.Router();

blog_router.post(
  "/create",
  BlogValidation.create,
  validate,
  authenticate.anyUser,
  BlogController.createBlog
);

blog_router.get("/", authenticate.anyUser, BlogController.getAllBlogs);

blog_router.get(
  "/:id",
  BlogValidation.getById,
  validate,
  authenticate.anyUser,
  BlogController.getSingleBlog
);

blog_router.put(
  "/:id",
  BlogValidation.update,
  validate,
  authenticate.anyUser,
  BlogController.updateBlog
);

blog_router.delete(
  "/:id",
  BlogValidation.delete,
  validate,
  authenticate.anyUser,
  BlogController.deleteBlog
);

export default blog_router;
