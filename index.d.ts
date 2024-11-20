// region API

/**
 * TODO
 */
export function addFetchItMiddleware(...middlewares: FetchItMiddleware[]): void;


/**
 * TODO
 */
export function removeFetchItMiddleware(middleware: FetchItMiddleware): void;



export function useFetch<T = any>(url: URLish, options?: FetchItFullOptions<FetchItMiddlewareCustomOptions, T>, customAbortController?: AbortController): FetchItState<T>;
export function useFetch<T = any>(url: URLish, customAbortController: AbortController): FetchItState<T>;
export function useFetchResp(url: URLish, options?: Omit<FetchItOptions, 'responseType'>, customAbortController?: AbortController): FetchItState<Response>;
export function useFetchResp(url: URLish, customAbortController: AbortController): FetchItState<Response>;
export function useFetchFn<T = any>(url: URLish, options?: FetchItFullOptions<FetchItMiddlewareCustomOptions, T>): FetchItStateFn<T>;
export function useFetchRespFn(url: URLish, options?: Omit<FetchItOptions, 'responseType'>): FetchItStateFn<Response>;


export function useFetchGet<T = any>(url: URLish, options?: FetchItOptions<T>, customAbortController?: AbortController): FetchItState<T>;
export function useFetchGet<T = any>(url: URLish, customAbortController: AbortController): FetchItState<T>;
export function useFetchGetResp(url: URLish, options?: Omit<FetchItOptions, 'responseType'>, customAbortController?: AbortController): FetchItState<Response>;
export function useFetchGetResp(url: URLish, customAbortController: AbortController): FetchItState<Response>;
export function useFetchGetFn<T = any>(url: URLish, options?: FetchItOptions<T>): FetchItStateFn<T>;
export function useFetchGetRespFn(url: URLish, options?: Omit<FetchItOptions, 'responseType'>): FetchItStateFn<Response>;


export function useFetchPost<T = any>(url: URLish, body?: any, options?: FetchItOptions<T>, customAbortController?: AbortController): FetchItState<T>;
export function useFetchPostResp(url: URLish, body?: any, options?: Omit<FetchItOptions, 'responseType'>, customAbortController?: AbortController): FetchItState<Response>;
export function useFetchPostFn<TBody = any, T = any>(url: URLish, options?: FetchItOptions<T>): FetchItStateWithBodyFn<TBody, T>;
export function useFetchPostRespFn<TBody = any>(url: URLish, options?: Omit<FetchItOptions, 'responseType'>): FetchItStateWithBodyFn<TBody, Response>;


export function useFetchPut<T = any>(url: URLish, body?: any, options?: FetchItOptions<T>, customAbortController?: AbortController): FetchItState<T>;
export function useFetchPutResp(url: URLish, body?: any, options?: Omit<FetchItOptions, 'responseType'>, customAbortController?: AbortController): FetchItState<Response>;
export function useFetchPutFn<TBody = any, T = any>(url: URLish, options?: FetchItOptions<T>): FetchItStateWithBodyFn<TBody, T>;
export function useFetchPutRespFn<TBody = any>(url: URLish, options?: Omit<FetchItOptions, 'responseType'>): FetchItStateWithBodyFn<TBody, Response>;


/**
 * Submits an immediately invoked DELETE request if the provided URL has not changed.
 */
export function useFetchDel<T = any>(url: URLish, options?: FetchItOptions<T>, customAbortController?: AbortController): FetchItState<T>;

/**
 * Submits an immediately invoked DELETE request if the provided URL has not changed.
 * The resulting value will be a `Response`.
 */
export function useFetchDelResp(url: URLish, options?: Omit<FetchItOptions, 'responseType'>, customAbortController?: AbortController): FetchItState<Response>;

/**
 * Creates a DELETE fetch invocation function and state of said invocation.
 */
export function useFetchDelFn<T = any>(url: URLish, options?: FetchItOptions<T>): FetchItStateFn<T>;

/**
 * Creates a DELETE fetch invocation function and state of said invocation.
 * The resulting value will be a `Response`.
 */
export function useFetchDelRespFn(url: URLish, options?: Omit<FetchItOptions, 'responseType'>): FetchItStateFn<Response>;


/**
 * Submits an immediately invoked HEAD request if the provided URL has not changed.
 * The resulting value will be a `Response`.
 */
export function useFetchHead(url: URLish, options?: Omit<FetchItOptions, 'responseType'>, customAbortController?: AbortController): FetchItState<Response>;

/**
 * Creates a HEAD fetch invocation function and state of said invocation.
 * The resulting value will be a `Response`.
 */
export function useFetchHeadFn(url: URLish, options?: Omit<FetchItOptions, 'responseType'>): FetchItStateFn<Response>;


/**
 * Submits a GET request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 */
export function fetchGet<T>(url: URLish, options?: FetchItOptions<T>): Promise<T>;

/**
 * Submits a POST request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 */
export function fetchPost<T>(url: URLish, options?: FetchItOptions<T>): Promise<T>;

/**
 * Submits a PUT request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 */
export function fetchPut<T>(url: URLish, options?: FetchItOptions<T>): Promise<T>;

/**
 * Submits a DELETE request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 */
export function fetchDel<T>(url: URLish, options?: FetchItOptions<T>): Promise<T>;

/**
 * Submits a HEAD request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 */
export function fetchHead(url: URLish, options?: Omit<FetchItOptions<Response>, 'responseType'>): Promise<Response>;

/**
 * Submits an HTTP request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 */
export function doFetch<T extends FetchItMiddlewareCustomOptions = FetchItMiddlewareCustomOptions, TResp = object>(url: URLish, options?: FetchItFullOptions<T, TResp>): Promise<TResp>;

// endregion



// region Options

export type FetchItFullOptions<T extends FetchItMiddlewareCustomOptions = FetchItMiddlewareCustomOptions, TResp = object> = RequestInit
  & { middlewareOptions: T }
  & (
    { responseType: 'arrayBuffer'; onResponse?: (response: ArrayBuffer) => void; }
    | { responseType: 'blob'; onResponse?: (response: Blob) => void; }
    | { responseType: 'formData'; onResponse?: (response: FormData) => void; }
    | { responseType: 'json'; onResponse?: (response: TResp) => void; }
    | { responseType: 'none'; onResponse?: (response: Response) => void; }
    | { responseType: 'text'; onResponse?: (response: string) => void; }
  );

export type FetchItOptions<TResp = any> = Omit<FetchItFullOptions<FetchItMiddlewareCustomOptions, TResp>, 'method'>;


interface FetchItMiddlewareCustomOptions {}

// endregion


// region Hook State

export type FetchItState<T> = {
  loading: boolean;
  error?: Error | undefined;
  value?: T | undefined
};

export type FetchItStateFn<T> = [
  FetchItState<T>,
  (customAbortController?: AbortController) => PromiseLike<T>
];

export type FetchItStateWithBodyFn<TBody, T> = {
  loading: boolean;
  error?: Error | undefined;
  value?: ((body?: TBody, customAbortController?: AbortController) => PromiseLike<T>) | undefined;
};

// endregion


export type FetchItMiddleware<T extends FetchItMiddlewareOptions = FetchItMiddlewareOptions> = (options: T) => T | Response | false;

export type FetchItMiddlewareOptions<T extends FetchItMiddlewareCustomOptions = FetchItMiddlewareCustomOptions, TResp = object> = FetchItFullOptions<T, TResp> & { url: string };



type URLish = string | URL;
