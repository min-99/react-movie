import HttpClient from '../adapter/gateway/HttpClient';

export interface BaseGatewayPort<Req, Res> {
  readonly httpClient: HttpClient;
  exec(req: Req): Promise<Res>;
}

export interface BaseApplicationPort<Gateway> {
  readonly gateway: Gateway;
}

export interface BaseDispatcherPort {
  readonly dispatcher: any;
}
