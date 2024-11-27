/**
 * @license
 * react-fetch-it
 *
 * Copyright (c) 2024, Brandon D. Sara (https://bsara.dev/)
 * Licensed under the ISC license (https://github.com/bsara/react-fetch-it/blob/master/LICENSE)
 */

import { jsx as _jsx } from "react/jsx-runtime";
import FetchItMiddlewareContext from "./FetchItMiddlewareContext.js";



export default function FetchItMiddlewareProvider({ middleware, children }) {
  return _jsx(FetchItMiddlewareContext.Provider, {
    children,
    value: middleware
  });
}
