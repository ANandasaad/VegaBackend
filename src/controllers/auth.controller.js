import { catchAsync } from "../middlewares/error.middleware.js";
import { AuthServices } from "../services/auth.services.js";

export const AuthController = {
  signup: catchAsync(async (req, res, next) => {
    const input = req.body;
    const response = await AuthServices.signup(input);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: response,
    });
  }),

  login: catchAsync(async (req, res, next) => {
    const input = req.body;
    const response = await AuthServices.login(input);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: response,
    });
  }),

  profile: catchAsync(async (req, res, next) => {
    const { userId } = req.currentUser;
    const response = await AuthServices.profile(userId);
    res.status(200).json({
      success: true,
      message: "User profile fetched successfully",
      data: response,
    });
  }),
};
