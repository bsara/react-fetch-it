import { JSX } from 'react'
import { FetchItMiddleware } from "./index"



/**
 * TODO
 */
export default function FetchItMiddlewareProvider(props: FetchItMiddlewareProviderProps): JSX.Element;



export type FetchItMiddlewareProviderProps = {
  middleware: FetchItMiddleware | FetchItMiddleware[];
  children: React.ReactNode;
};
