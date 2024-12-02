import express from "express";
import "express-async-errors";

import logger from "@services/logger.service";
import { errorHandler } from "@middlewares/error-handler";
import { NotFoundError } from "@errors/not-found-error";
import rootRoutes from "@routes/root.routes";

const app = express();

app.use(express.json());

app.use(rootRoutes);

app.all("*", (req) => {
  logger.error(`Route not found: ${req.url}`);
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
