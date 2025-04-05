import { catchAsync } from "../middlewares/error.middleware.js";
import { BlogServices } from "../services/blog.services.js";

export const BlogController = {
  createBlog: catchAsync(async (req, res, next) => {
    const input = req.body;
    const { userId } = req.currentUser;
    const response = await BlogServices.create(input, userId);
    res.status(200).json({
      success: true,
      message: "Blog created successfully",
      data: response,
    });
  }),

  getAllBlogs: catchAsync(async (req, res) => {
    const { userId } = req.currentUser;
    const queryParams = req.query;
    const response = await BlogServices.getAllBlogs(queryParams, userId);
    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: response,
    });
  }),

  getSingleBlog: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const response = await BlogServices.getSingleBlog(id);
    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      data: response,
    });
  }),

  updateBlog: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const input = req.body;
    const response = await BlogServices.updateBlog(id, input);
    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: response,
    });
  }),

  deleteBlog: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const response = await BlogServices.deleteBlog(id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data: response,
    });
  }),
};
