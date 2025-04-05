import prisma from "../config/prisma.js";
import AppError from "../errors/AppError.js";

export const BlogServices = {
  create: async (input, userId) => {
    try {
      const { title, description, image } = input;
      const blog = await prisma.blog.create({
        data: {
          title,
          description,
          image,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return blog;
    } catch (error) {
      throw error;
    }
  },

  getAllBlogs: async (queryParams, userId) => {
    try {
      const { search, page = 1, pageSize = 10 } = queryParams;
      const trimmedSearch = search?.trim() || "";
      const whereClause = search
        ? {
            OR: [
              {
                title: {
                  contains: trimmedSearch,
                  mode: "insensitive",
                },
              },
              {
                description: {
                  contains: trimmedSearch,
                  mode: "insensitive",
                },
              },
            ],
          }
        : {};

      const skip = (Number(page) - 1) * Number(pageSize);
      const blogs = await prisma.blog.findMany({
        skip: skip,
        take: Number(pageSize),
        where: whereClause,
      });

      const total = await prisma.blog.count({
        where: whereClause,
      });

      if (!blogs.length) {
        throw new AppError("No blog found", 400);
      }
      return {
        blogs,
        pagination: {
          total,
          page: Number(page),
          pageSize: Number(pageSize),
          totalPages: Math.ceil(total / Number(pageSize)),
        },
      };
    } catch (error) {
      throw error;
    }
  },

  getSingleBlog: async (id, userId) => {
    try {
      const blog = await prisma.blog.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!blog) {
        throw new AppError("Blog not found", 400);
      }
      return blog;
    } catch (error) {
      throw error;
    }
  },

  deleteBlog: async (id) => {
    try {
      const blogExist = await prisma.blog.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!blogExist) {
        throw new AppError("Blog not found", 400);
      }
      const blog = await prisma.blog.delete({
        where: {
          id: Number(id),
        },
      });
      if (!blog) {
        throw new AppError("Blog not found", 400);
      }
      return blog;
    } catch (error) {
      throw error;
    }
  },

  updateBlog: async (id, input) => {
    try {
      const blog = await prisma.blog.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!blog) {
        throw new AppError("Blog not found", 400);
      }

      const updatedBlog = await prisma.blog.update({
        where: {
          id: Number(id),
        },
        data: {
          title: input.title,
          description: input.description,
          image: input.image,
        },
      });
      return updatedBlog;
    } catch (error) {
      throw error;
    }
  },
};
