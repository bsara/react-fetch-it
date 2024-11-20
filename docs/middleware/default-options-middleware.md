defaultOptionsMiddleware(...)
=========================================================================================

> Refer to the [typescript docs](../../middleware/default-options-middleware.d.ts) for
> full API details.

Creates a new middleware which sets default options for all requests.


Examples
-----------------------------

```typescript
// You can set globally if you DO NOT expect changes in options at runtime.
// You would typically have this code execute via (or in) your main entry file.

import { addFetchItMiddleware, FetchItOptions } from "react-fetch-it";
import defaultOptionsMiddleware from "react-fetch-it/middleware/default-options";

addFetchItMiddleware(
  defaultOptionsMiddleware({
  // ...
} as Partial<FetchItOptions>),

// other middlewares...
);
```

```tsx
// You can use a provider if you expect changes in options at runtime.

import FetchItMiddlewareProvider from 'react-fetch-it/MiddlewareProvider';
import defaultOptionsMiddleware from "react-fetch-it/middleware/default-options";
import type { FetchItOptions } from "react-fetch-it";

export function MyComponent({ children, ...props }) {
  // ...

  const defaultOptions: Partial<FetchItOptions> = {
    // ...
  };

  return (
    <FetchItMiddlewareProvider middleware={defaultOptionsMiddleware(defaultOptions)}>
      {children}
    </FetchItMiddlewareProvider>
  );
}
```
