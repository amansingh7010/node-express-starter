import { Request, Response } from "express";

import { getGreeting } from "@services/root.service";
import logger from "@services/logger.service";

export const rootController = (req: Request, res: Response): void => {
  logger.info("Received a request at the root route.");
  const message = getGreeting();
  res.send({ message });
};
