import express from "express";
import "express-async-errors";

import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./errors";
import rootRoutes from "./routes/root.routes";

const app = express();

app.use(express.json());

app.use(rootRoutes);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
