import { createLogger, format, transports, Logger } from "winston";
import path from "path";

// Build log transports based on environment variables
const buildTransports = () => {
  const logTransports = [];
  const {
    LOG_TO_CONSOLE,
    LOG_TO_FILE,
    LOG_TO_GRAFANA,
    GRAFANA_HOST,
    GRAFANA_PORT,
  } = process.env;

  // Add Console Transport (for local development)
  if (LOG_TO_CONSOLE === "true") {
    logTransports.push(
      new transports.Console({
        format: format.colorize(), // Add color for better visibility
      }),
    );
  }

  // Add File Transports (if enabled)
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

  // Add Grafana Transport (or similar log services)
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

// Base logger setup
const baseLogger: Logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm" }),
    format.printf(({ level, message, timestamp, label }) => {
      return `[${level.toUpperCase()}] ${timestamp} [${label}] - ${message}`;
    }),
  ),
  transports: buildTransports(),
});

export const getLogger = (fileName: string): Logger => {
  return baseLogger.child({ label: path.basename(fileName) });
};
