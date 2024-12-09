import { Request, Response } from "express";

import { getGreeting } from "@services/root.service";
import { getLogger } from "@services/logger.service";

const logger = getLogger(__filename);

export const rootController = (req: Request, res: Response): void => {
  logger.info("Received a request at the root route.");
  const message = getGreeting();
  res.send({ message });
};
