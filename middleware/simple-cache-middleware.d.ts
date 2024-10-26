import { UseFetchMiddleware } from '../index';



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
 * import { addUseFetchMiddleware } from "react-use-fetch";
 * import simpleCacheMiddleware, { UseFetchSimpleCacheMiddlewareOptions } from "react-use-fetch/middleware/simple-cache";
 *
 * addUseFetchMiddleware(
 *   simpleCacheMiddleware({
 *     // ...
 *   } as UseFetchSimpleCacheMiddlewareOptions),
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
 * import UseFetchMiddlewareProvider from 'react-use-fetch/UseFetchMiddlewareProvider';
 * import simpleCacheMiddleware, { UseFetchSimpleCacheMiddlewareOptions } from "react-use-fetch/middleware/simple-cache";
 *
 * export function MyComponent({ children, ...props }) {
 *   // ...
 *
 *   const defaultCacheOptions: UseFetchSimpleCacheMiddlewareOptions = {
 *     // ...
 *   };
 *
 *   return (
 *     <UseFetchMiddlewareProvider middleware={simpleCacheMiddleware(defaultCacheOptions)}>
 *       {children}
 *     </UseFetchMiddlewareProvider>
 *   );
 * }
 * ```
 */
export default function simpleCacheMiddleware(defaultOptions?: UseFetchSimpleCacheMiddlewareOptions): UseFetchMiddleware;


declare global {
  interface UseFetchMiddlewareCustomOptions {
    simpleCache?: UseFetchSimpleCacheMiddlewareOptions
  }
}

export type UseFetchSimpleCacheMiddlewareOptions = {

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
  include?: (UseFetchSimpleCacheMiddlewareEndpointIdentifier | UseFetchSimpleCacheMiddlewareFilter)[] | boolean;

  /**
   * Endpoint identifiers and/or filters used to determine if a request should be
   * excluded from caching.
   *
   * If a filter function returns a truthy value, the request will be excluded.
   *
   * A `boolean` can be provided for non-global inclusion.
   */
  exclude?: (UseFetchSimpleCacheMiddlewareEndpointIdentifier | UseFetchSimpleCacheMiddlewareFilter)[] | boolean;

  /**
   * Amount of time, in milliseconds, to cache a response.
   */
  timeout?: number;
}

export type UseFetchSimpleCacheMiddlewareEndpointIdentifier = [
  'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | '*' | (string & {}),
  string | RegExp | URL
]

export type UseFetchSimpleCacheMiddlewareFilter = (request: Request) => any;
