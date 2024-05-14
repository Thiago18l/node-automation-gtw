export type Response = {
  code: string;
  message: string;
};

export type GatewayType = string;

export interface Conf {
  gateway_type: string;
  url_proxy: string;
}

export type PinoLogLevel =
  | 'fatal'
  | 'error'
  | 'warn'
  | 'info'
  | 'debug'
  | 'trace';
