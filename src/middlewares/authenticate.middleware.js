import prisma from "../config/prisma.js";
import AppError from "../errors/AppError.js";
import jwt from "jsonwebtoken";
export const verifyToken = async (req) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    throw new AppError("Authorization header is required", 401);
  }

  const token = authorizationHeader.split(" ")[1];
  if (!token) {
    throw new AppError("Token is required", 401);
  }

  const jwtSecert = "secret";

  // Verify the token
  const decodedToken = await jwt.verify(token, jwtSecert);

  // Get the user
  const user = await prisma.user.findFirst({
    where: { id: decodedToken.userId },
  });

  if (!user) {
    throw new AppError("Unauthorized user", 401);
  }

  return user;
};
export const authenticate = {
  anyUser: async (req, res, next) => {
    try {
      const user = await verifyToken(req);

      req.currentUser = {
        userId: user.id,
      };

      next();
    } catch (error) {
      next(error);
    }
  },
};
