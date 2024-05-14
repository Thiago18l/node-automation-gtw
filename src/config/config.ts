import { Conf } from '@utils/customTypes.utils';
import envs from 'envs';

export default class Config {
  private gateway_type: string;
  private url_proxy: string;

  constructor() {
    this.gateway_type = envs.GATEWAY_TYPE;
    this.url_proxy = envs.PROXY_URL;
  }

  public init_conf(): Conf {
    const parameters: Conf = {
      gateway_type: this.gateway_type,
      url_proxy: this.url_proxy,
    };
    return parameters;
  }

  get gatewayType() {
    return this.gateway_type;
  }
  get urlProxy() {
    return this.url_proxy;
  }
}
