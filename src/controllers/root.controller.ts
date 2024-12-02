import { Request, Response } from "express";

import { getGreeting } from "../services/root.service";

export const rootController = (req: Request, res: Response): void => {
  const message = getGreeting();
  res.send({ message });
};
