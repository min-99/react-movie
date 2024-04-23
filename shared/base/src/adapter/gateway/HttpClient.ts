export interface RequestOption {
  readonly method:
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH';
  readonly url: string;
  readonly headers?: any;
  readonly body?: any;
}

interface HttpClient {
  request<Response>(requestOption: RequestOption): Promise<Response>;
}
export default HttpClient;
