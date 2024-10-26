// region API

/**
 * TODO
 */
export function addUseFetchMiddleware(...middlewares: UseFetchMiddleware[]): void;


/**
 * TODO
 */
export function removeUseFetchMiddleware(middleware: UseFetchMiddleware): void;



export function useFetch<T = any>(url: URLish, options?: UseFetchFullOptions<UseFetchMiddlewareCustomOptions, T>, customAbortController?: AbortController): UseFetchState<T>;
export function useFetch<T = any>(url: URLish, customAbortController: AbortController): UseFetchState<T>;
export function useFetchResp(url: URLish, options?: UseFetchFullOptions, customAbortController?: AbortController): UseFetchState<Response>;
export function useFetchResp(url: URLish, customAbortController: AbortController): UseFetchState<Response>;
export function useFetchFn<T = any>(url: URLish, options?: UseFetchFullOptions<UseFetchMiddlewareCustomOptions, T>): UseFetchStateFn<T>;
export function useFetchRespFn(url: URLish, options?: UseFetchFullOptions): UseFetchStateFn<Response>;


export function useFetchGet<T = any>(url: URLish, options?: UseFetchOptions<T>, customAbortController?: AbortController): UseFetchState<T>;
export function useFetchGet<T = any>(url: URLish, customAbortController: AbortController): UseFetchState<T>;
export function useFetchGetResp(url: URLish, options?: UseFetchOptions, customAbortController?: AbortController): UseFetchState<Response>;
export function useFetchGetResp(url: URLish, customAbortController: AbortController): UseFetchState<Response>;
export function useFetchGetFn<T = any>(url: URLish, options?: UseFetchOptions<T>): UseFetchStateFn<T>;
export function useFetchGetRespFn(url: URLish, options?: UseFetchOptions): UseFetchStateFn<Response>;


export function useFetchPost<T = any>(url: URLish, body?: any, options?: UseFetchOptions<T>, customAbortController?: AbortController): UseFetchState<T>;
export function useFetchPostResp(url: URLish, body?: any, options?: UseFetchOptions, customAbortController?: AbortController): UseFetchState<Response>;
export function useFetchPostFn<TBody = any, T = any>(url: URLish, options?: UseFetchOptions<T>): UseFetchStateWithBodyFn<TBody, T>;
export function useFetchPostRespFn<TBody = any>(url: URLish, options?: UseFetchOptions): UseFetchStateWithBodyFn<TBody, Response>;


export function useFetchPut<T = any>(url: URLish, body?: any, options?: UseFetchOptions<T>, customAbortController?: AbortController): UseFetchState<T>;
export function useFetchPutResp(url: URLish, body?: any, options?: UseFetchOptions, customAbortController?: AbortController): UseFetchState<Response>;
export function useFetchPutFn<TBody = any, T = any>(url: URLish, options?: UseFetchOptions<T>): UseFetchStateWithBodyFn<TBody, T>;
export function useFetchPutRespFn<TBody = any>(url: URLish, options?: UseFetchOptions): UseFetchStateWithBodyFn<TBody, Response>;


/**
 * Submits an immediately invoked DELETE request if the provided URL has not changed.
 */
export function useFetchDel<T = any>(url: URLish, options?: UseFetchOptions<T>, customAbortController?: AbortController): UseFetchState<T>;

/**
 * Submits an immediately invoked DELETE request if the provided URL has not changed.
 * The resulting value will be a `Response`.
 */
export function useFetchDelResp(url: URLish, options?: UseFetchOptions, customAbortController?: AbortController): UseFetchState<Response>;

/**
 * Creates a DELETE fetch invocation function and state of said invocation.
 */
export function useFetchDelFn<T = any>(url: URLish, options?: UseFetchOptions<T>): UseFetchStateFn<T>;

/**
 * Creates a DELETE fetch invocation function and state of said invocation.
 * The resulting value will be a `Response`.
 */
export function useFetchDelRespFn(url: URLish, options?: UseFetchOptions): UseFetchStateFn<Response>;


/**
 * Submits an immediately invoked HEAD request if the provided URL has not changed.
 * The resulting value will be a `Response`.
 */
export function useFetchHead(url: URLish, options?: UseFetchOptions, customAbortController?: AbortController): UseFetchState<Response>;

/**
 * Creates a HEAD fetch invocation function and state of said invocation.
 * The resulting value will be a `Response`.
 */
export function useFetchHeadFn(url: URLish, options?: UseFetchOptions): UseFetchStateFn<Response>;

// endregion



// region Options

export type UseFetchFullOptions<T extends UseFetchMiddlewareCustomOptions = UseFetchMiddlewareCustomOptions, TResp = object> = RequestInit
  & { middlewareOptions: T }
  & (
    { responseType: 'arrayBuffer'; onResponse?: (response: ArrayBuffer) => void; }
    | { responseType: 'blob'; onResponse?: (response: Blob) => void; }
    | { responseType: 'formData'; onResponse?: (response: FormData) => void; }
    | { responseType: 'json'; onResponse?: (response: TResp) => void; }
    | { responseType: 'none'; onResponse?: (response: Response) => void; }
    | { responseType: 'text'; onResponse?: (response: string) => void; }
  );

export type UseFetchOptions<TResp = any> = Omit<UseFetchFullOptions<UseFetchMiddlewareCustomOptions, TResp>, 'method'>;


interface UseFetchMiddlewareCustomOptions {}

// endregion


// region Hook State

export type UseFetchState<T> = {
  loading: boolean;
  error?: Error | undefined;
  value?: T | undefined
};

export type UseFetchStateFn<T> = [
  UseFetchState<T>,
  (customAbortController?: AbortController) => PromiseLike<T>
];

export type UseFetchStateWithBodyFn<TBody, T> = {
  loading: boolean;
  error?: Error | undefined;
  value?: ((body?: TBody, customAbortController?: AbortController) => PromiseLike<T>) | undefined;
};

// endregion


export type UseFetchMiddleware<T extends UseFetchFullOptions = UseFetchFullOptions> = (options: T) => T | Response | false;



type URLish = string | URL;
