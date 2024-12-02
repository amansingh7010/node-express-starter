import express from "express";
import "express-async-errors";

import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./errors";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Hello World!!",
  });
});

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
