import express from "express";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { AuthController } from "../controllers/auth.controller.js";

const user_router = express.Router();
user_router.get("/", authenticate.anyUser, AuthController.profile);

export default user_router;
