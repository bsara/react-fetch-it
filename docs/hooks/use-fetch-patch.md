useFetchPatch
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked `PATCH` request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request body is provided
via the `body` argument. The request is (re)submitted whenever the `url`, `body`, or
`options` change.


Examples
-----------------------------

```tsx
import { useFetchPatch } from 'react-fetch-it';

export function MyComponent({ movieId, changes }: { movieId: number; changes: Partial<Movie> }) {
  const { loading, error, value: updated } = useFetchPatch<Movie>(`/api/movies/${movieId}`, changes);

  return (
    loading ? <div>Saving...</div>
      : error ? <div>Error: {error.message}</div>
      : <div>Updated {updated.title}</div>
  );
}
```
