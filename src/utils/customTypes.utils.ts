export type Response = {
  code: string;
  message: string;
};

export type GatewayType = 'Kong';

export type Conf = {
  gateway_type: string;
  url_proxy: string;
};
