import { UseFetchMiddleware, UseFetchOptions } from "../index";



/**
 * @returns a new middleware which sets default options for all requests.
 *
 *
 * @example ```ts
 * // You can set globally if you DO NOT expect changes in options at runtime.
 * // You would typically have this code execute via (or in) your main entry file.
 *
 * import { addUseFetchMiddleware, UseFetchOptions } from "react-use-fetch";
 * import defaultOptionsMiddleware from "react-use-fetch/middleware/default-options";
 *
 * addUseFetchMiddleware(
 *   defaultOptionsMiddleware({
 *     // ...
 *   } as Partial<UseFetchOptions>),
 *
 *   // other middlewares...
 * );
 * ```
 *
 *
 * @example ```tsx
 * // You can use a provider if you expect changes in options at runtime.
 *
 * import UseFetchMiddlewareProvider from 'react-use-fetch/UseFetchMiddlewareProvider';
 * import defaultOptionsMiddleware from "react-use-fetch/middleware/default-options";
 * import type { UseFetchOptions } from "react-use-fetch";
 *
 * export function MyComponent({ children, ...props }) {
 *   // ...
 *
 *   const defaultOptions: Partial<UseFetchOptions> = {
 *     // ...
 *   };
 *
 *   return (
 *     <UseFetchMiddlewareProvider middleware={defaultOptionsMiddleware(defaultOptions)}>
 *       {children}
 *     </UseFetchMiddlewareProvider>
 *   );
 * }
 * ```
 */
export function defaultOptionsMiddleware(defaultOptions: Partial<UseFetchOptions>): UseFetchMiddleware;


export type UseFetchDefaultOptionsMiddlewareOptions = Partial<UseFetchOptions>;
