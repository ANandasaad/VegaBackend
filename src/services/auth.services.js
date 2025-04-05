import { comparePassword, hashPassword } from "../config/hashPassword.js";
import prisma from "../config/prisma.js";
import { tokenGenerator } from "../config/token.js";
import AppError from "../errors/AppError.js";

export const AuthServices = {
  signup: async (input) => {
    try {
      const { email, password, profilePic } = input;

      const existUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (existUser) {
        throw new AppError("User already exist", 400);
      }

      const user = await prisma.user.create({
        data: {
          email,
          password: await hashPassword(password),
          profilePic,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  },

  login: async (input) => {
    try {
      const { email, password } = input;

      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
        select: {
          id: true,
          email: true,
          profilePic: true,
          password: true,
        },
      });
      if (!user) {
        throw new AppError("User not found", 400);
      }

      const isPasswordMatch = await comparePassword(password, user.password);
      if (!isPasswordMatch) {
        throw new AppError("Invalid password", 400);
      }

      const token = tokenGenerator(user.id);
      const userLogin = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
        select: {
          id: true,
          email: true,
          profilePic: true,
        },
      });

      return {
        token,
        user: userLogin,
      };
    } catch (error) {
      throw error;
    }
  },

  profile: async (userId) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
        select: {
          id: true,
          email: true,
          profilePic: true,
        },
      });
      if (!user) {
        throw new AppError("User not found", 400);
      }
      return user;
    } catch (error) {
      throw error;
    }
  },
};
