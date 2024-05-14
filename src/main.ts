import { logger } from '@utils/logger.utils';
import { GatewayFactory } from '@infrastructure/app/factory';
import Config from '@config/config';

const start = (): void => {
  const conf = new Config();
  logger.debug(`${conf.gatewayType} | ${conf.urlProxy}`);
  const gateway = new GatewayFactory(conf.init_conf());
  logger.info('Init app');
  gateway.new_gateway().connect();
};

try {
  start();
} catch (err) {
  logger.error(err);
  throw new Error('Failed to start', err);
}
