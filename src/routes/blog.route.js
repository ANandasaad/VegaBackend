import express from "express";
import { BlogController } from "../controllers/blog.controller.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

const blog_router = express.Router();

blog_router.post("/create", authenticate.anyUser, BlogController.createBlog);

blog_router.get("/", authenticate.anyUser, BlogController.getAllBlogs);

blog_router.get("/:id", authenticate.anyUser, BlogController.getSingleBlog);

blog_router.put("/:id", authenticate.anyUser, BlogController.updateBlog);

blog_router.delete("/:id", authenticate.anyUser, BlogController.deleteBlog);

export default blog_router;
