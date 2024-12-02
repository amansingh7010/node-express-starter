// src/services/logger.service.ts
import { createLogger, format, transports, Logger } from "winston";
import path from "path";

// Define available log transports
const buildTransports = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logTransports: any[] = [];

  const {
    LOG_TO_CONSOLE,
    LOG_TO_FILE,
    LOG_TO_GRAFANA,
    GRAFANA_HOST,
    GRAFANA_PORT,
  } = process.env;

  // Add Console Transport (for local dev)
  if (LOG_TO_CONSOLE === "true") {
    logTransports.push(
      new transports.Console({
        format: format.combine(format.colorize(), format.simple()),
      }),
    );
  }

  // Add File Transport (if enabled)
  if (LOG_TO_FILE === "true") {
    const logDirectory = path.join(__dirname, "../../logs");
    logTransports.push(
      new transports.File({
        filename: path.join(logDirectory, "combined.log"),
        level: "info",
      }),
      new transports.File({
        filename: path.join(logDirectory, "error.log"),
        level: "error",
      }),
    );
  }

  // Placeholder: Add Grafana Transport or any other service
  if (LOG_TO_GRAFANA === "true") {
    logTransports.push(
      new transports.Http({
        host: GRAFANA_HOST || "localhost",
        port: Number(GRAFANA_PORT) || 3000,
        path: "/api/logs",
      }),
    );
  }

  return logTransports;
};

// Create the logger instance
const logger: Logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ level, message, timestamp }) => {
      return `[${level.toUpperCase()}] ${timestamp} - ${message}`;
    }),
  ),
  transports: buildTransports(),
});

export default logger;
