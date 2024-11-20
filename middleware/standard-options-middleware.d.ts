import { FetchItMiddleware } from "../index";



/**
 * Sets some reasonably default standard options on all requests (all of which are
 * ignored if a request's options already have an existing setting for the standard
 * option). Also does some processing on the options given certain conditions
 * _(see below for details)_.
 *
 * Options that are set:
 * - `credentials` = `'same-origin'`
 * - `responseType` = `'json'`
 * - `headers['Accept']` = `'application/json'` _(if `responseType` is `'json'`)_
 * - `headers['Accept']` = `'text/plain'` _(if `responseType` is `'text'`)_
 * - `headers['Content-Type']` = `'application/json'` _(if `body` is non-null)_
 *
 * Additional actions performed:
 * - `body` will automatically be converted using `JSON.stringify` if
 *   `headers['Content-Type']` equals `'application/json'`, `body` is defined and
 *   is not a string.
 *
 *
 * @example ```ts
 * // You can set globally if you DO NOT expect the need for this middleware to change at runtime.
 * // You would typically have this code execute via (or in) your main entry file.
 *
 * import { addFetchItMiddleware } from "react-fetch-it";
 * import standardOptionsMiddleware from "react-fetch-it/middleware/standard-options";
 *
 * addFetchItMiddleware(
 *   standardOptionsMiddleware,
 *   // other middlewares...
 * );
 * ```
 *
 *
 * @example ```tsx
 * // You can use a provider if you expect the need for this middleware to change at runtime.
 *
 * import FetchItMiddlewareProvider from 'react-fetch-it/MiddlewareProvider';
 * import standardOptionsMiddleware from "react-fetch-it/middleware/standard-options";
 *
 * export function MyComponent({ children, ...props }) {
 *   // ...
 *
 *   return (
 *     <FetchItMiddlewareProvider middleware={standardOptionsMiddleware}>
 *       {children}
 *     </FetchItMiddlewareProvider>
 *   );
 * }
 * ```
 */
declare const standardOptionsMiddleware: FetchItMiddleware;

export default standardOptionsMiddleware;
