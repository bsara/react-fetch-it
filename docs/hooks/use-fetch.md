useFetch
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked HTTP request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request is
(re)submitted whenever the `url` or `options` change.

This is the generic hook used when one of the method-specific hooks
_(e.g. [`useFetchGet`](./use-fetch-get.md))_ does not cover your needs. Defaults to a
`GET` request unless `options.method` is set. The response body is parsed based on
`options.responseType`.


Examples
-----------------------------

```tsx
import { useFetch } from 'react-fetch-it';

export function MyComponent() {
  const { loading, error, value: movie } = useFetch<Movie>('/api/movies/42', {
    method: 'GET',
    responseType: 'json'
  });

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Error: {error.message}</div>
      : <div>{movie.title} ({movie.year})</div>
  );
}
```
