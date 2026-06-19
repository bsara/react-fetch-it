useFetchDelResp
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked `DELETE` request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request is
(re)submitted whenever the `url` or `options` change.

Identical to [`useFetchDel`](./use-fetch-del.md), except the resulting `value` will be
the raw `Response` _(the response body is not parsed)_.


Examples
-----------------------------

```tsx
import { useFetchDelResp } from 'react-fetch-it';

export function MyComponent({ movieId }: { movieId: number }) {
  const { loading, error, value: response } = useFetchDelResp(`/api/movies/${movieId}`);

  return (
    loading ? <div>Deleting...</div>
      : error ? <div>Error</div>
      : <div>Status: {response.status}</div>
  );
}
```
