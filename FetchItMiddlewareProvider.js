import { jsx as _jsx } from "react/jsx-runtime";
import FetchItMiddlewareContext from "./FetchItMiddlewareContext.js";



export default function FetchItMiddlewareProvider({ middleware, children }) {
  return _jsx(FetchItMiddlewareContext.Provider, {
    children,
    value: middleware
  });
}
