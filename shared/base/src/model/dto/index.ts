export interface ApiResponse<T> {
  code: number;
  message?: string;
  traceId?: string;
  data?: T;
}

export interface ApiPagingRequest {
  page?: number;
  size?: number;
  sort?: string;
}

export interface ApiPagingResponseData<T extends {}> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface ApiPagingResponse<T extends {}>
  extends ApiResponse<ApiPagingResponseData<T>> {}
