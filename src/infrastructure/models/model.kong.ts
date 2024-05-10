import { Gateway } from '@infrastructure/models/index';
import { Response } from '@utils/customTypes.utils';

export class Kong extends Gateway {
  constructor() {
    super();
  }
  public connect(): Response {
    return { code: '200', message: 'connection ok' };
  }
}
