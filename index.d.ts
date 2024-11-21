// region API

/**
 * Adds middleware to be used in all fetch requests.
 *
 * If you expect your middleware or their options to change, you can provide middleware
 * using the `FetchItMiddlewareProvider` component.
 *
 * All middleware added using this function will be combined with any middleware added
 * via a provider.
 *
 * > NOTE: Order does matter. Middleware will be executed in the order they are provided,
 * > and middleware added via `addFetchItMiddleware` will be always be executed before
 * > middleware added via a provider.
 */
export function addFetchItMiddleware(...middlewares: FetchItMiddleware[]): void;


/**
 * Removes middleware to no longer be used in fetch requests.
 *
 * > IMPORTANT: This DOES NOT affect middleware added via providers.
 */
export function removeFetchItMiddleware(middleware: FetchItMiddleware): void;



/**
 * Submits an immediately invoked HTTP request.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetch<T = any>(
  url: URLish,
  options?: FetchItFullOptions<FetchItMiddlewareCustomOptions, T>,
  customAbortController?: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked HTTP request.
 *
 * @param url - URL to pass to fetch API.
 * @param customAbortController - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetch<T = any>(
  url: URLish,
  customAbortController: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked HTTP request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 */
export function useFetchResp(
  url: URLish,
  options?: Omit<FetchItOptions, 'responseType'>,
  customAbortController?: AbortController
): FetchItState<Response>;

/**
 * Submits an immediately invoked HTTP request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param customAbortController - Request abort controller.
 */
export function useFetchResp(
  url: URLish,
  customAbortController: AbortController
): FetchItState<Response>;

export function useFetchFn<T = any>(
  url: URLish,
  options?: FetchItFullOptions<FetchItMiddlewareCustomOptions, T>
): FetchItStateFn<T>;

export function useFetchRespFn(
  url: URLish,
  options?: Omit<FetchItOptions, 'responseType'>
): FetchItStateFn<Response>;


/**
 * Submits an immediately invoked GET request.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetchGet<T = any>(
  url: URLish,
  options?: FetchItOptions<T>,
  customAbortController?: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked GET request.
 *
 * @param url - URL to pass to fetch API.
 * @param customAbortController - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetchGet<T = any>(
  url: URLish,
  customAbortController: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked GET request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 */
export function useFetchGetResp(
  url: URLish,
  options?: Omit<FetchItOptions, 'responseType'>,
  customAbortController?: AbortController
): FetchItState<Response>;

/**
 * Submits an immediately invoked GET request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param customAbortController - Request abort controller.
 */
export function useFetchGetResp(
  url: URLish,
  customAbortController: AbortController
): FetchItState<Response>;

/**
 * Creates a GET fetch invocation function and state of said invocation.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template T - Type of the response body.
 */
export function useFetchGetFn<T = any>(
  url: URLish,
  options?: FetchItOptions<T>
): FetchItStateFn<T>;

/**
 * Creates a PUT fetch invocation function and state of said invocation.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 */
export function useFetchGetRespFn(
  url: URLish,
  options?: Omit<FetchItOptions, 'responseType'>
): FetchItStateFn<Response>;


/**
 * Submits an immediately invoked POST request.
 *
 * @param url - URL to pass to fetch API.
 * @param [body] - Request body.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetchPost<T = any>(
  url: URLish,
  body?: any,
  options?: FetchItOptions<T>,
  customAbortController?: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked POST request.
 *
 * @param url - URL to pass to fetch API.
 * @param body - Request body.
 * @param customAbortController - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetchPost<T = any>(
  url: URLish,
  body: any,
  customAbortController: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked POST request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [body] - Request body.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 */
export function useFetchPostResp(
  url: URLish,
  body?: any,
  options?: Omit<FetchItOptions, 'responseType'>,
  customAbortController?: AbortController
): FetchItState<Response>;

/**
 * Submits an immediately invoked POST request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param body - Request body.
 * @param customAbortController - Request abort controller.
 */
export function useFetchPostResp(
  url: URLish,
  body: any,
  customAbortController: AbortController
): FetchItState<Response>;

/**
 * Creates a POST fetch invocation function and state of said invocation.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template TBody - Type of the request body.
 * @template T - Type of the response body.
 */
export function useFetchPostFn<TBody = any, T = any>(
  url: URLish,
  options?: FetchItOptions<T>
): FetchItStateWithBodyFn<TBody, T>;

/**
 * Creates a PUT fetch invocation function and state of said invocation.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template TBody - Type of the request body.
 */
export function useFetchPostRespFn<TBody = any>(
  url: URLish,
  options?: Omit<FetchItOptions, 'responseType'>
): FetchItStateWithBodyFn<TBody, Response>;


/**
 * Submits an immediately invoked PUT request.
 *
 * @param url - URL to pass to fetch API.
 * @param [body] - Request body.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetchPut<T = any>(
  url: URLish,
  body?: any,
  options?: FetchItOptions<T>,
  customAbortController?: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked PUT request.
 *
 * @param url - URL to pass to fetch API.
 * @param body - Request body.
 * @param customAbortController - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetchPut<T = any>(
  url: URLish,
  body: any,
  customAbortController: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked PUT request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [body] - Request body.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 */
export function useFetchPutResp(
  url: URLish,
  body?: any,
  options?: Omit<FetchItOptions, 'responseType'>,
  customAbortController?: AbortController
): FetchItState<Response>;

/**
 * Submits an immediately invoked PUT request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param body - Request body.
 * @param customAbortController - Request abort controller.
 */
export function useFetchPutResp(
  url: URLish,
  body: any,
  customAbortController: AbortController
): FetchItState<Response>;

/**
 * Creates a PUT fetch invocation function and state of said invocation.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template TBody - Type of the request body.
 * @template T - Type of the response body.
 */
export function useFetchPutFn<TBody = any, T = any>(
  url: URLish,
  options?: FetchItOptions<T>
): FetchItStateWithBodyFn<TBody, T>;

/**
 * Creates a PUT fetch invocation function and state of said invocation.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template TBody - Type of the request body.
 */
export function useFetchPutRespFn<TBody = any>(
  url: URLish,
  options?: Omit<FetchItOptions, 'responseType'>
): FetchItStateWithBodyFn<TBody, Response>;


/**
 * Submits an immediately invoked DELETE request.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetchDel<T = any>(
  url: URLish,
  options?: FetchItOptions<T>,
  customAbortController?: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked DELETE request.
 *
 * @param url - URL to pass to fetch API.
 * @param customAbortController - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetchDel<T = any>(
  url: URLish,
  customAbortController: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked DELETE request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 */
export function useFetchDelResp(
  url: URLish,
  options?: Omit<FetchItOptions, 'responseType'>,
  customAbortController?: AbortController
): FetchItState<Response>;

/**
 * Submits an immediately invoked DELETE request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param customAbortController - Request abort controller.
 */
export function useFetchDelResp(
  url: URLish,
  customAbortController: AbortController
): FetchItState<Response>;

/**
 * Creates a DELETE fetch invocation function and state of said invocation.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template T - Type of the response body.
 */
export function useFetchDelFn<T = any>(
  url: URLish,
  options?: FetchItOptions<T>
): FetchItStateFn<T>;

/**
 * Creates a DELETE fetch invocation function and state of said invocation.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 */
export function useFetchDelRespFn(
  url: URLish,
  options?: Omit<FetchItOptions, 'responseType'>
): FetchItStateFn<Response>;


/**
 * Submits an immediately invoked HEAD request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 */
export function useFetchHead(
  url: URLish,
  options?: Omit<FetchItOptions, 'responseType'>,
  customAbortController?: AbortController
): FetchItState<Response>;

/**
 * Submits an immediately invoked HEAD request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param customAbortController - Request abort controller.
 */
export function useFetchHead(
  url: URLish,
  customAbortController: AbortController
): FetchItState<Response>;

/**
 * Creates a HEAD fetch invocation function and state of said invocation.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 */
export function useFetchHeadFn(url: URLish, options?: Omit<FetchItOptions, 'responseType'>): FetchItStateFn<Response>;


/**
 * Submits a GET request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template T - Type of the response body.
 */
export function fetchGet<T>(url: URLish, options?: FetchItOptions<T>): Promise<T>;

/**
 * Submits a POST request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template T - Type of the response body.
 */
export function fetchPost<T>(url: URLish, options?: FetchItOptions<T>): Promise<T>;

/**
 * Submits a PUT request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template T - Type of the response body.
 */
export function fetchPut<T>(url: URLish, options?: FetchItOptions<T>): Promise<T>;

/**
 * Submits a DELETE request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template T - Type of the response body.
 */
export function fetchDel<T>(url: URLish, options?: FetchItOptions<T>): Promise<T>;

/**
 * Submits a HEAD request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 */
export function fetchHead(url: URLish, options?: Omit<FetchItOptions<Response>, 'responseType'>): Promise<Response>;

/**
 * Submits an HTTP request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template T - Type of the middleware custom options.
 * @template TResp - Type of the response body.
 */
export function doFetch<T extends FetchItMiddlewareCustomOptions = FetchItMiddlewareCustomOptions, TResp = object>(
  url: URLish,
  options?: FetchItFullOptions<T, TResp>
): Promise<TResp>;

// endregion



// region Options

/**
 * All options that could be passed to fetch hooks. These options will also be passed to
 * all middleware.
 *
 * The response body will be parsed automatically based on the value of `responseType`.
 * If `responseType` is `"none"`, the response will be returned as-is.
 *
 * The `onResponse` callback property will be called with the response body after it has
 * been parsed successfully on a successful request.
 *
 * @template T - Type of the middleware custom options.
 * @template TResp - Type of the response body.
 */
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


/**
 * Options that will be passed to all middleware.
 *
 * @template TResp - Type of the response body.
 */
export type FetchItOptions<TResp = any> = Omit<FetchItFullOptions<FetchItMiddlewareCustomOptions, TResp>, 'method'>;


/**
 * Custom options that can be passed to the middleware function.
 *
 * This is made as an interface so that it can be extended as needed by
 * middleware authors via [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html).
 */
interface FetchItMiddlewareCustomOptions {}

// endregion



// region Hook State

/**
 * Represents the state of a fetch request.
 *
 * @template T - Type of the response body.
 */
export type FetchItState<T> = {

  /**
   * `true` while request is taking place.
   */
  loading: boolean;

  /**
   * Request error, if one occurred. Will also be present if response has an HTTP
   * status that indicates an error.
   */
  error?: Error | Response | undefined;

  /**
   * The fetch response body.
   */
  value?: T | undefined
};


/**
 * Represents the state of a manually triggered fetch request.
 *
 * @property 0 - Fetch request state.
 * @property 1 - Function used to trigger fetch request.
 *
 * @template T - Type of the response body.
 */
export type FetchItStateFn<T> = [
  FetchItState<T>,
  (customAbortController?: AbortController) => PromiseLike<T>
];


/**
 * Represents the state of a manually triggered fetch request that can include
 * a request body.
 *
 * @template TBody - Type of the request body.
 * @template T - Type of the response body.
 */
export type FetchItStateWithBodyFn<TBody, T> = {

  /**
   * `true` while request is taking place.
   */
  loading: boolean;

  /**
   * Request error, if one occurred. Will also be present if response has an HTTP
   * status that indicates an error.
   */
  error?: Error | Response | undefined;

  /**
   * The function to call to trigger the fetch request.
   *
   * @param [body] - The request body.
   * @param [customAbortController] - Custom `AbortController` to use for the request.
   */
  value?: (
    ((body?: TBody, customAbortController?: AbortController) => PromiseLike<T>)
    | ((customAbortController: AbortController) => PromiseLike<T>)
    | undefined
  );
};

// endregion


/**
 * Middleware function that can modify, analyze, or short-circuit a fetch request.
 *
 * @template T - Type of the middleware options.
 */
export type FetchItMiddleware<T extends FetchItMiddlewareOptions = FetchItMiddlewareOptions> = (options: T) => T | Response | false;


/**
 * Options that will be passed to the middleware function.
 *
 * @template T - Type of the middleware custom options.
 * @template TResp - Type of the response body.
 */
export type FetchItMiddlewareOptions<T extends FetchItMiddlewareCustomOptions = FetchItMiddlewareCustomOptions, TResp = object> = FetchItFullOptions<T, TResp> & { url: string };



type URLish = string | URL;
