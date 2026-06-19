useFetchPost
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked `POST` request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request body is provided
via the `body` argument. The request is (re)submitted whenever the `url`, `body`, or
`options` change.


Examples
-----------------------------

```tsx
import { useFetchPost } from 'react-fetch-it';

export function MyComponent({ newMovie }: { newMovie: Movie }) {
  const { loading, error, value: created } = useFetchPost<Movie>('/api/movies', newMovie);

  return (
    loading ? <div>Saving...</div>
      : error ? <div>Error: {error.message}</div>
      : <div>Created {created.title}</div>
  );
}
```
