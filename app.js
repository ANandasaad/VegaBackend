import express from "express";
import { errorHandler, notfound } from "./src/middlewares/error.middleware.js";
import { configs } from "./src/config/index.js";
import router from "./src/routes/index.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(configs.API_VERSION, router);
app.use(notfound);
app.use(errorHandler);

export default app;
