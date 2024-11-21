import { JSX } from 'react'
import { FetchItMiddleware } from "./index"



/**
 * Allows you to provide middleware to all fetch requests that you expect to change over
 * time.
 *
 * If you don't expect your middleware nor their options to change, you can provide
 * middleware directly using the `addFetchItMiddleware` function in your app's entry
 * file/module.
 *
 * All middleware added with a provider will be added to the list of any middleware added
 * globally.
 *
 * > NOTE: Order does matter. Middleware will be executed in the order they are provided,
 * > and middleware added via `addFetchItMiddleware` will be always be executed before
 * > middleware added via a provider.
 */
export default function FetchItMiddlewareProvider(props: FetchItMiddlewareProviderProps): JSX.Element;



export type FetchItMiddlewareProviderProps = {
  /**
   * Middleware to be used by all fetch requests.
   */
  middleware: FetchItMiddleware | FetchItMiddleware[];

  children: React.ReactNode;
};
