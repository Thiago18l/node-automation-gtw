import { Logger, pino } from 'pino';

import envs from '@envs';

const productionLoggerConfig = {
  transport: {
    targets: [
      {
        level: envs.LOGGER_PRODUCTION_LEVEL,
        target: 'pino-pretty',
        options: {
          translateTime: envs.LOGGER_TRANSLATE_TIME,
        },
      },
    ],
  },
};

const developmentLoggerConfig = {
  level: envs.LOGGER_DEVELOPMENT_LEVEL,
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: envs.LOGGER_TRANSLATE_TIME,
    },
  },
};

const loggerConfig =
  envs.NODE_ENV == 'production'
    ? productionLoggerConfig
    : developmentLoggerConfig;

export const logger: Logger = pino(loggerConfig);
