useFetchDel
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked `DELETE` request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request is
(re)submitted whenever the `url` or `options` change.


Examples
-----------------------------

```tsx
import { useFetchDel } from 'react-fetch-it';

export function MyComponent({ movieId }: { movieId: number }) {
  const { loading, error } = useFetchDel(`/api/movies/${movieId}`);

  return (
    loading ? <div>Deleting...</div>
      : error ? <div>Error: {error.message}</div>
      : <div>Deleted</div>
  );
}
```
