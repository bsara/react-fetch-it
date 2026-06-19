useFetchPatchFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand `PATCH` fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called. The request body is passed to `fn` when
it is invoked.


Examples
-----------------------------

```tsx
import { useFetchPatchFn } from 'react-fetch-it';

export function MyComponent({ movieId, changes }: { movieId: number; changes: Partial<Movie> }) {
  const [ { loading, error, value: updated }, patchMovie ] = useFetchPatchFn<Partial<Movie>, Movie>(`/api/movies/${movieId}`);

  return (
    loading ? <div>Saving...</div>
      : error ? <div>Error: {error.message}</div>
      : updated ? <div>Updated {updated.title}</div>
      : <button onClick={() => patchMovie(changes)}>Save</button>
  );
}
```
