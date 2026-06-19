useFetchGet
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked `GET` request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request is
(re)submitted whenever the `url` or `options` change.


Examples
-----------------------------

```tsx
import { useFetchGet } from 'react-fetch-it';

export function MyComponent() {
  const { loading, error, value: movie } = useFetchGet<Movie>('/api/movies/42');

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Error: {error.message}</div>
      : <div>{movie.title} ({movie.year})</div>
  );
}
```
