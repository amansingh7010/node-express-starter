import logger from "@services/logger.service";

import { app } from "./app";

const PORT = process.env.PORT || 3000;
const start = () => {
  logger.info("Starting up...");

  app.listen(PORT, () => {
    logger.info(`Server is running at http://localhost:${PORT}`);
  });
};

start();
