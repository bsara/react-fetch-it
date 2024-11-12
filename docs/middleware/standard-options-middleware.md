standardOptionsMiddleware()
=========================================================================================

> Refer to the [typescript docs](../../middleware/standard-options-middleware.d.ts)
for full API details.

Sets some reasonably default standard options on all requests (all of which are
ignored if a request's options already have an existing setting for the standard
option). Also does some processing on the options given certain conditions
_(see below for details)_.

Options that are set:
- `credentials` = `'same-origin'`
- `responseType` = `'json'`
- `headers['Accept']` = `'application/json'` _(if `responseType` is `'json'`)_
- `headers['Accept']` = `'text/plain'` _(if `responseType` is `'text'`)_
- `headers['Content-Type']` = `'application/json'` _(if `body` is non-null)_

Additional actions performed:
- `body` will automatically be converted using `JSON.stringify` if
  `headers['Content-Type']` equals `'application/json'`, `body` is defined and
  is not a string.



Examples
-----------------------------

```typescript
// You can set globally if you DO NOT expect the need for this middleware to change at runtime.
// You would typically have this code execute via (or in) your main entry file.

import { addUseFetchMiddleware } from "react-use-fetch";
import standardOptionsMiddleware from "react-use-fetch/middleware/standard-options";

addUseFetchMiddleware(
standardOptionsMiddleware,
// other middlewares...
);
```

```tsx
// You can use a provider if you expect the need for this middleware to change at runtime.

import UseFetchMiddlewareProvider from 'react-use-fetch/UseFetchMiddlewareProvider';
import standardOptionsMiddleware from "react-use-fetch/middleware/standard-options";

export function MyComponent({ children, ...props }) {
  // ...

  return (
    <UseFetchMiddlewareProvider middleware={standardOptionsMiddleware}>
      {children}
    </UseFetchMiddlewareProvider>
  );
}
```
