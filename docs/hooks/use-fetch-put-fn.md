useFetchPutFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand `PUT` fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called. The request body is passed to `fn` when
it is invoked.


Examples
-----------------------------

```tsx
import { useFetchPutFn } from 'react-fetch-it';

export function MyComponent({ movie }: { movie: Movie }) {
  const [ { loading, error, value: updated }, saveMovie ] = useFetchPutFn<Movie, Movie>(`/api/movies/${movie.id}`);

  return (
    loading ? <div>Saving...</div>
      : error ? <div>Error: {error.message}</div>
      : updated ? <div>Updated {updated.title}</div>
      : <button onClick={() => saveMovie(movie)}>Save</button>
  );
}
```
