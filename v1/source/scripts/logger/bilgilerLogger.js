const winston = require("winston");

const logger = winston.createLogger({
//   level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "bilgiler-service" }, //bu property araştır
  transports: [
    new winston.transports.File({
      level: "error",
      filename: "v1/source/logs/errors.log",
    }),
    new winston.transports.File({
      level: "info",
      filename: "v1/source/logs/info.log",
    }),
    new winston.transports.File({ filename: "v1/source/logs/allLogs.log" }),
  ],
});

module.exports = logger;