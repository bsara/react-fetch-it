useFetchFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand HTTP fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called.

This is the generic, on-demand counterpart to [`useFetch`](./use-fetch.md), used when
one of the method-specific hooks _(e.g. [`useFetchGetFn`](./use-fetch-get-fn.md))_ does
not cover your needs. Defaults to a `GET` request unless `options.method` is set. The
response body is parsed based on `options.responseType`.


Examples
-----------------------------

```tsx
import { useFetchFn } from 'react-fetch-it';

export function MyComponent() {
  const [ { loading, error, value: movie }, fetchMovie ] = useFetchFn<Movie>('/api/movies/42', {
    method: 'GET',
    responseType: 'json'
  });

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Error: {error.message}</div>
      : movie ? <div>{movie.title}</div>
      : <button onClick={() => fetchMovie()}>Fetch it, yo!</button>
  );
}
```
