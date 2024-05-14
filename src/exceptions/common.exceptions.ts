import { PinoLogLevel } from '@utils/customTypes.utils';

export class CustomException extends Error {
  status: number;

  logLevel: PinoLogLevel;

  constructor(
    status: number,
    message: string,
    logLevel: PinoLogLevel = 'error',
  ) {
    super(message);
    this.status = status;
    this.logLevel = logLevel;
  }
}
