import { jsx as _jsx } from "react/jsx-runtime";
import UseFetchMiddlewareContext from "./UseFetchMiddlewareContext.js";



export default function UseFetchMiddlewareProvider({ middleware, children }) {
  return _jsx(UseFetchMiddlewareContext.Provider, {
    children,
    value: middleware
  });
}
