import { GatewayType, Conf } from '@utils/customTypes.utils';
import { Gateway } from '@infrastructure/models';
import { Kong } from '@infrastructure/models/model.kong';

interface GatewayInterface {
  conf: Conf;
  new_gateway(): Gateway;
}
export class GatewayFactory implements GatewayInterface {
  conf: Conf;

  constructor(conf: Conf) {
    this.conf = conf;
  }

  public new_gateway(): Gateway {
    const gateways: { [key in GatewayType]: Gateway } = {
      Kong: new Kong(),
    };
    if (!gateways[this.conf.gateway_type]) {
      throw new Error('tipo de gateway invalido');
    }
    return gateways.Kong;
  }
}
