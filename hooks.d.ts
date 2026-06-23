/**
 * @license
 * react-fetch-it
 *
 * Copyright (c) 2026, Brandon D. Sara (https://bsara.dev/)
 * Licensed under the ISC license (https://github.com/bsara/react-fetch-it/blob/master/LICENSE)
 */

import type { FetchItFullOptions, FetchItMiddlewareCustomOptions, FetchItOptions, URLish } from "./index.js";


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

/**
 * Creates a fetch invocation function and state of said invocation.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 */
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
 * Creates a GET fetch invocation function and state of said invocation.
 * The resulting value will be a `Response`.
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
 * Creates a POST fetch invocation function and state of said invocation.
 * The resulting value will be a `Response`.
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
 * Submits an immediately invoked PATCH request.
 *
 * @param url - URL to pass to fetch API.
 * @param [body] - Request body.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetchPatch<T = any>(
  url: URLish,
  body?: any,
  options?: FetchItOptions<T>,
  customAbortController?: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked PATCH request.
 *
 * @param url - URL to pass to fetch API.
 * @param body - Request body.
 * @param customAbortController - Request abort controller.
 *
 * @template T - Type of the response body.
 */
export function useFetchPatch<T = any>(
  url: URLish,
  body: any,
  customAbortController: AbortController
): FetchItState<T>;

/**
 * Submits an immediately invoked PATCH request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [body] - Request body.
 * @param [options] - Request and middleware options.
 * @param [customAbortController] - Request abort controller.
 */
export function useFetchPatchResp(
  url: URLish,
  body?: any,
  options?: Omit<FetchItOptions, 'responseType'>,
  customAbortController?: AbortController
): FetchItState<Response>;

/**
 * Submits an immediately invoked PATCH request.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param body - Request body.
 * @param customAbortController - Request abort controller.
 */
export function useFetchPatchResp(
  url: URLish,
  body: any,
  customAbortController: AbortController
): FetchItState<Response>;

/**
 * Creates a PATCH fetch invocation function and state of said invocation.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template TBody - Type of the request body.
 * @template T - Type of the response body.
 */
export function useFetchPatchFn<TBody = any, T = any>(
  url: URLish,
  options?: FetchItOptions<T>
): FetchItStateWithBodyFn<TBody, T>;

/**
 * Creates a PATCH fetch invocation function and state of said invocation.
 * The resulting value will be a `Response`.
 *
 * @param url - URL to pass to fetch API.
 * @param [options] - Request and middleware options.
 *
 * @template TBody - Type of the request body.
 */
export function useFetchPatchRespFn<TBody = any>(
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
 * @property 0 - Fetch request state.
 * @property 1 - Function used to trigger fetch request _(accepts the request body)_.
 *
 * @template TBody - Type of the request body.
 * @template T - Type of the response body.
 */
export type FetchItStateWithBodyFn<TBody, T> = [
  FetchItState<T>,
  (body?: TBody, customAbortController?: AbortController) => PromiseLike<T>
];
