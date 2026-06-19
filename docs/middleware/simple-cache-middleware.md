simpleCacheMiddleware(...)
=========================================================================================

> Refer to the [TypeScript docs](../../middleware/simple-cache-middleware.d.ts) for full
API details.

Creates a new middleware which handles caching of request responses.

By default, every request is cached using a key generated from its method, URL, and
body. A cached response short-circuits the middleware chain so that no network request
is made. You can control which requests are cached and how long they are kept via the
following options:

- `include` - Endpoint identifiers and/or filter functions used to determine if a
  request should be cached. A `boolean` can be provided to globally include/exclude all
  requests. _(If `include` is not provided, all requests are cached unless `exclude` is
  provided.)_
- `exclude` - Endpoint identifiers and/or filter functions used to determine if a
  request should **not** be cached.
- `timeout` - Amount of time, in milliseconds, to keep a response cached. When omitted
  _(or `0`)_, cached responses are kept indefinitely.

An endpoint identifier is a `[ method, url ]` tuple _(where `method` may be `'*'` and
`url` may be a `string`, `RegExp`, or `URL`)_, and a filter is a function that receives
the request and returns a truthy value to match it.

Options can also be supplied per-request via `options.middlewareOptions.simpleCache`,
which takes precedence over the defaults provided when creating the middleware.


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

import FetchItMiddlewareProvider from 'react-fetch-it/MiddlewareProvider';
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
