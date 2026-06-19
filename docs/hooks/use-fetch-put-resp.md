useFetchPutResp
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked `PUT` request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request body is provided
via the `body` argument. The request is (re)submitted whenever the `url`, `body`, or
`options` change.

Identical to [`useFetchPut`](./use-fetch-put.md), except the resulting `value` will be
the raw `Response` _(the response body is not parsed)_.


Examples
-----------------------------

```tsx
import { useFetchPutResp } from 'react-fetch-it';

export function MyComponent({ movie }: { movie: Movie }) {
  const { loading, error, value: response } = useFetchPutResp(`/api/movies/${movie.id}`, movie);

  return (
    loading ? <div>Saving...</div>
      : error ? <div>Error</div>
      : <div>Status: {response.status}</div>
  );
}
```
