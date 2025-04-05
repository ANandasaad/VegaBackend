import express from "express";
import image_router from "./imageUpload.route.js";
import auth_router from "./auth.route.js";
import blog_router from "./blog.route.js";
import user_router from "./user.route.js";

const router = express();
router.use("/image", image_router);
router.use("/auth", auth_router);
router.use("/blog", blog_router);
router.use("/profile", user_router);
export default router;
