useFetchGetRespFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand `GET` fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called.

Identical to [`useFetchGetFn`](./use-fetch-get-fn.md), except the resulting `value` will
be the raw `Response` _(the response body is not parsed)_.


Examples
-----------------------------

```tsx
import { useFetchGetRespFn } from 'react-fetch-it';

export function MyComponent() {
  const [ { loading, error, value: response }, fetchMovie ] = useFetchGetRespFn('/api/movies/42');

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Error</div>
      : response ? <div>Status: {response.status}</div>
      : <button onClick={() => fetchMovie()}>Fetch it, yo!</button>
  );
}
```
