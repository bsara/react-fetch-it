import { FetchItMiddleware } from '../index';



/**
 * TODO
 *
 * @returns a new middleware which handles caching of request responses.
 *
 *
 * @example ```ts
 * // You can set globally if you DO NOT expect changes in options at runtime.
 * // You would typically have this code execute via or in your main entry file.
 *
 * import { addFetchItMiddleware } from "react-fetch-it";
 * import simpleCacheMiddleware, { FetchItSimpleCacheMiddlewareOptions } from "react-fetch-it/middleware/simple-cache";
 *
 * addFetchItMiddleware(
 *   simpleCacheMiddleware({
 *     // ...
 *   } as FetchItSimpleCacheMiddlewareOptions),
 *
 *   // other middlewares...
 * );
 *
 * // ...
 * ```
 *
 *
 * @example ```tsx
 * // You can use a provider if you expect changes in options at runtime.
 *
 * import FetchItMiddlewareProvider from 'react-fetch-it/FetchItMiddlewareProvider';
 * import simpleCacheMiddleware, { FetchItSimpleCacheMiddlewareOptions } from "react-fetch-it/middleware/simple-cache";
 *
 * export function MyComponent({ children, ...props }) {
 *   // ...
 *
 *   const defaultCacheOptions: FetchItSimpleCacheMiddlewareOptions = {
 *     // ...
 *   };
 *
 *   return (
 *     <FetchItMiddlewareProvider middleware={simpleCacheMiddleware(defaultCacheOptions)}>
 *       {children}
 *     </FetchItMiddlewareProvider>
 *   );
 * }
 * ```
 */
export default function simpleCacheMiddleware(defaultOptions?: FetchItSimpleCacheMiddlewareOptions): FetchItMiddleware;


declare global {
  interface FetchItMiddlewareCustomOptions {
    simpleCache?: FetchItSimpleCacheMiddlewareOptions
  }
}

export type FetchItSimpleCacheMiddlewareOptions = {

  /**
   * Endpoint identifiers and/or filters used to determine if a request should be
   * included in caching.
   *
   * If a filter function returns a truthy value, the request will be included.
   *
   * A `boolean` can be provided for non-global inclusion.
   *
   * > **NOTE:** If `include` is not provided, all requests will be included unless
   * > `exclude` is provided.
   */
  include?: (FetchItSimpleCacheMiddlewareEndpointIdentifier | FetchItSimpleCacheMiddlewareFilter)[] | boolean;

  /**
   * Endpoint identifiers and/or filters used to determine if a request should be
   * excluded from caching.
   *
   * If a filter function returns a truthy value, the request will be excluded.
   *
   * A `boolean` can be provided for non-global inclusion.
   */
  exclude?: (FetchItSimpleCacheMiddlewareEndpointIdentifier | FetchItSimpleCacheMiddlewareFilter)[] | boolean;

  /**
   * Amount of time, in milliseconds, to cache a response.
   */
  timeout?: number;
}

export type FetchItSimpleCacheMiddlewareEndpointIdentifier = [
  'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | '*' | (string & {}),
  string | RegExp | URL
]

export type FetchItSimpleCacheMiddlewareFilter = (req: Request) => any;
