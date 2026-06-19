useFetchPut
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked `PUT` request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request body is provided
via the `body` argument. The request is (re)submitted whenever the `url`, `body`, or
`options` change.


Examples
-----------------------------

```tsx
import { useFetchPut } from 'react-fetch-it';

export function MyComponent({ movie }: { movie: Movie }) {
  const { loading, error, value: updated } = useFetchPut<Movie>(`/api/movies/${movie.id}`, movie);

  return (
    loading ? <div>Saving...</div>
      : error ? <div>Error: {error.message}</div>
      : <div>Updated {updated.title}</div>
  );
}
```
