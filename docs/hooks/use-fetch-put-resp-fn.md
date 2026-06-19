useFetchPutRespFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand `PUT` fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called. The request body is passed to `fn` when
it is invoked.

Identical to [`useFetchPutFn`](./use-fetch-put-fn.md), except the resulting `value` will
be the raw `Response` _(the response body is not parsed)_.


Examples
-----------------------------

```tsx
import { useFetchPutRespFn } from 'react-fetch-it';

export function MyComponent({ movie }: { movie: Movie }) {
  const [ { loading, error, value: response }, saveMovie ] = useFetchPutRespFn<Movie>(`/api/movies/${movie.id}`);

  return (
    loading ? <div>Saving...</div>
      : error ? <div>Error</div>
      : response ? <div>Status: {response.status}</div>
      : <button onClick={() => saveMovie(movie)}>Save</button>
  );
}
```
