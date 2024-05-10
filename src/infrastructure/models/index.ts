export * from '@infrastructure/models';
import { Response } from '@utils/customTypes.utils';

interface IGateway {
  connect(): Response;
}

export abstract class Gateway implements IGateway {
  public abstract connect(): Response;
}
