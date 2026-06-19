useFetchDelRespFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand `DELETE` fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called.

Identical to [`useFetchDelFn`](./use-fetch-del-fn.md), except the resulting `value` will
be the raw `Response` _(the response body is not parsed)_.


Examples
-----------------------------

```tsx
import { useFetchDelRespFn } from 'react-fetch-it';

export function MyComponent({ movieId }: { movieId: number }) {
  const [ { loading, error, value: response }, deleteMovie ] = useFetchDelRespFn(`/api/movies/${movieId}`);

  return (
    loading ? <div>Deleting...</div>
      : error ? <div>Error</div>
      : response ? <div>Status: {response.status}</div>
      : <button onClick={() => deleteMovie()}>Delete</button>
  );
}
```
