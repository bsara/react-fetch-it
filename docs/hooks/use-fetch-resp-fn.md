useFetchRespFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand HTTP fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called.

Identical to [`useFetchFn`](./use-fetch-fn.md), except the resulting `value` will be the
raw `Response` _(the response body is not parsed)_.


Examples
-----------------------------

```tsx
import { useFetchRespFn } from 'react-fetch-it';

export function MyComponent() {
  const [ { loading, error, value: response }, doFetch ] = useFetchRespFn('/api/movies/42', {
    method: 'GET'
  });

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Error</div>
      : response ? <div>Status: {response.status}</div>
      : <button onClick={() => doFetch()}>Fetch it, yo!</button>
  );
}
```
