useFetchGetResp
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked `GET` request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request is
(re)submitted whenever the `url` or `options` change.

Identical to [`useFetchGet`](./use-fetch-get.md), except the resulting `value` will be
the raw `Response` _(the response body is not parsed)_.


Examples
-----------------------------

```tsx
import { useFetchGetResp } from 'react-fetch-it';

export function MyComponent() {
  const { loading, error, value: response } = useFetchGetResp('/api/movies/42');

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Error</div>
      : <div>Status: {response.status}</div>
  );
}
```
