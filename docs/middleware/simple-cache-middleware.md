simpleCacheMiddleware(...)
=========================================================================================

> Refer to the [typescript docs](../../middleware/simple-cache-middleware.d.ts) for full
API details.

Creates a new middleware which handles caching of request responses.

TODO


Examples
-----------------------------

```typescript
// You can set globally if you DO NOT expect changes in options at runtime.
// You would typically have this code execute via or in your main entry file.

import { addFetchItMiddleware } from "react-fetch-it";
import simpleCacheMiddleware, { FetchItSimpleCacheMiddlewareOptions } from "react-fetch-it/middleware/simple-cache";

addFetchItMiddleware(
  simpleCacheMiddleware({
    // ...
  } as FetchItSimpleCacheMiddlewareOptions),

  // other middlewares...
);

// ...
```

```tsx
// You can use a provider if you expect changes in options at runtime.

import FetchItMiddlewareProvider from 'react-fetch-it/FetchItMiddlewareProvider';
import simpleCacheMiddleware, { FetchItSimpleCacheMiddlewareOptions } from "react-fetch-it/middleware/simple-cache";

export function MyComponent({ children, ...props }) {
  // ...

  const defaultCacheOptions: FetchItSimpleCacheMiddlewareOptions = {
    // ...
  };

  return (
    <FetchItMiddlewareProvider middleware={simpleCacheMiddleware(defaultCacheOptions)}>
      {children}
    </FetchItMiddlewareProvider>
  );
}
```
