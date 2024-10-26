import { JSX } from 'react'
import { UseFetchMiddleware } from "./index"



/**
 * TODO
 */
export default function UseFetchMiddlewareProvider(props: UseFetchMiddlewareProviderProps): JSX.Element;



export type UseFetchMiddlewareProviderProps = {
  middleware: UseFetchMiddleware | UseFetchMiddleware[];
  children: React.ReactNode;
};
