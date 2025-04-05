import express from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { AuthValidation } from "../validation.js/auth.validation.js";
import { validate } from "../middlewares/validate.js";
const auth_router = express.Router();

auth_router.post(
  "/signup",
  AuthValidation.signUp,
  validate,
  AuthController.signup
);

auth_router.post(
  "/login",
  AuthValidation.login,
  validate,
  AuthController.login
);

export default auth_router;
