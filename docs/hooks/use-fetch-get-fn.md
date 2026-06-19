useFetchGetFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand `GET` fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called.


Examples
-----------------------------

```tsx
import { useFetchGetFn } from 'react-fetch-it';

export function MyComponent() {
  const [ { loading, error, value: movie }, fetchMovie ] = useFetchGetFn<Movie>('/api/movies/42');

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Error: {error.message}</div>
      : movie ? <div>{movie.title} ({movie.year})</div>
      : <button onClick={() => fetchMovie()}>Fetch it, yo!</button>
  );
}
```
