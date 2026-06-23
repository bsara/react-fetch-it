/**
 * @license
 * react-fetch-it
 *
 * Copyright (c) 2026, Brandon D. Sara (https://bsara.dev/)
 * Licensed under the ISC license (https://github.com/bsara/react-fetch-it/blob/master/LICENSE)
 */

export * from './hooks.js';


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
 * Submits a GET request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 */
export function fetchGetResp(url: URLish, options?: Omit<FetchItOptions<Response>, 'responseType'>): Promise<Response>;


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
 * Submits a POST request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 */
export function fetchPostResp(url: URLish, options?: Omit<FetchItOptions<Response>, 'responseType'>): Promise<Response>;


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
 * Submits a PUT request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 */
export function fetchPutResp(url: URLish, options?: Omit<FetchItOptions<Response>, 'responseType'>): Promise<Response>;


/**
 * Submits a PATCH request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template T - Type of the response body.
 */
export function fetchPatch<T>(url: URLish, options?: FetchItOptions<T>): Promise<T>;

/**
 * Submits a PATCH request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 */
export function fetchPatchResp(url: URLish, options?: Omit<FetchItOptions<Response>, 'responseType'>): Promise<Response>;


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
 * Submits a DELETE request that will utilize the middleware and other options provided by
 * `react-fetch-it`.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 */
export function fetchDelResp(url: URLish, options?: Omit<FetchItOptions<Response>, 'responseType'>): Promise<Response>;


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
export interface FetchItMiddlewareCustomOptions {}

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



export type URLish = string | URL;
