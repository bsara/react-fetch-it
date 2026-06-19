useFetchPostFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand `POST` fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called. The request body is passed to `fn` when
it is invoked.


Examples
-----------------------------

```tsx
import { useFetchPostFn } from 'react-fetch-it';

export function MyComponent({ newMovie }: { newMovie: Movie }) {
  const [ { loading, error, value: created }, createMovie ] = useFetchPostFn<Movie, Movie>('/api/movies');

  return (
    loading ? <div>Saving...</div>
      : error ? <div>Error: {error.message}</div>
      : created ? <div>Created {created.title}</div>
      : <button onClick={() => createMovie(newMovie)}>Create</button>
  );
}
```
