import express from "express";
import "express-async-errors";
import cors from "cors";

import { getLogger } from "@services/logger.service";
import { errorHandler } from "@middlewares/error-handler";
import { NotFoundError } from "@errors/not-found-error";
import rootRoutes from "@routes/root.routes";

const logger = getLogger(__filename);
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);

app.use(rootRoutes);

app.all("*", (req) => {
  logger.error(`Route not found: ${req.url}`);
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
