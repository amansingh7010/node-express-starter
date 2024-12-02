import { NextFunction, Request, Response } from "express";
import logger from "services/server/logger";

import { CustomError } from "../errors";

export const errorHandler: (
  err: Error,
  req: Request,
  res: Response,
  next?: NextFunction,
) => void = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  logger.error(err);
  res.status(500).send({
    errors: [{ message: "Something went wrong" }],
  });
};
