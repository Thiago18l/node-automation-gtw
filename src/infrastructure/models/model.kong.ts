import { Gateway } from '@infrastructure/models/index';
import { Response } from '@utils/customTypes.utils';
import { logger } from '@utils/logger.utils';

export class Kong extends Gateway {
  constructor() {
    super();
  }
  public connect(): Response {
    logger.debug("Conexão iniciada no Gateway Kong")
    return { code: '200', message: 'connection ok' };
  }
}
