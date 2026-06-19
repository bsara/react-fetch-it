useFetchPatchRespFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand `PATCH` fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called. The request body is passed to `fn` when
it is invoked.

Identical to [`useFetchPatchFn`](./use-fetch-patch-fn.md), except the resulting `value`
will be the raw `Response` _(the response body is not parsed)_.


Examples
-----------------------------

```tsx
import { useFetchPatchRespFn } from 'react-fetch-it';

export function MyComponent({ movieId, changes }: { movieId: number; changes: Partial<Movie> }) {
  const [ { loading, error, value: response }, patchMovie ] = useFetchPatchRespFn<Partial<Movie>>(`/api/movies/${movieId}`);

  return (
    loading ? <div>Saving...</div>
      : error ? <div>Error</div>
      : response ? <div>Status: {response.status}</div>
      : <button onClick={() => patchMovie(changes)}>Save</button>
  );
}
```
