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

import { addUseFetchMiddleware } from "react-use-fetch";
import simpleCacheMiddleware, { UseFetchSimpleCacheMiddlewareOptions } from "react-use-fetch/middleware/simple-cache";

addUseFetchMiddleware(
simpleCacheMiddleware({
// ...
} as UseFetchSimpleCacheMiddlewareOptions),

// other middlewares...
);

// ...
```

```tsx
// You can use a provider if you expect changes in options at runtime.

import UseFetchMiddlewareProvider from 'react-use-fetch/UseFetchMiddlewareProvider';
import simpleCacheMiddleware, { UseFetchSimpleCacheMiddlewareOptions } from "react-use-fetch/middleware/simple-cache";

export function MyComponent({ children, ...props }) {
  // ...

  const defaultCacheOptions: UseFetchSimpleCacheMiddlewareOptions = {
    // ...
  };

  return (
    <UseFetchMiddlewareProvider middleware={simpleCacheMiddleware(defaultCacheOptions)}>
      {children}
    </UseFetchMiddlewareProvider>
  );
}
```
