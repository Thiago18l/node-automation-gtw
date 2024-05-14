import { z } from 'zod';
import EnviromentVariablesError from '@exceptions/envs.exception';

const pinoLogLevelEnum = z.enum([
  'debug',
  'error',
  'fatal',
  'info',
  'trace',
  'warn',
  'audit',
]);

const allowedMethods = z.enum([
  'DELETE',
  'GET',
  'HEAD',
  'OPTIONS',
  'PATCH',
  'POST',
  'PUT',
]);

const allowedHeaders = z.enum([
  'Accept',
  'Authorization',
  'Content-Length',
  'Content-Type',
  'Origin',
  'X-Auth-Token',
  'X-Requested-With',
]);

const envSchema = z.object({
  GATEWAY_TYPE: z.string(),
  PROXY_URL: z.string(),
  API_KEY: z.string(),
  LOGGER_DEVELOPMENT_LEVEL: pinoLogLevelEnum,
  LOGGER_PRODUCTION_LEVEL: pinoLogLevelEnum,
  LOGGER_TEST_LEVEL: pinoLogLevelEnum,
  LOGGER_TRANSLATE_TIME: z.string(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

const envServer = envSchema.safeParse({
  GATEWAY_TYPE: process.env.GATEWAY_TYPE,
  PROXY_URL: process.env.PROXY_URL,
  API_KEY: process.env.API_KEY,
  LOGGER_DEVELOPMENT_LEVEL: process.env.LOGGER_DEVELOPMENT_LEVEL,
  LOGGER_PRODUCTION_LEVEL: process.env.LOGGER_PRODUCTION_LEVEL,
  LOGGER_TEST_LEVEL: process.env.LOGGER_TEST_LEVEL,
  LOGGER_TRANSLATE_TIME: process.env.LOGGER_TRANSLATE_TIME,
  NODE_ENV: process.env.NODE_ENV,
});

if (!envServer.success) throw new EnviromentVariablesError(envServer.error);

const envs = envServer.data;
export default envs;
