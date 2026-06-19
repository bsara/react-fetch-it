useFetchResp
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked HTTP request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request is
(re)submitted whenever the `url` or `options` change.

Identical to [`useFetch`](./use-fetch.md), except the resulting `value` will be the raw
`Response` _(the response body is not parsed)_.


Examples
-----------------------------

```tsx
import { useFetchResp } from 'react-fetch-it';

export function MyComponent() {
  const { loading, error, value: response } = useFetchResp('/api/movies/42', {
    method: 'GET'
  });

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Error</div>
      : <div>Status: {response.status}</div>
  );
}
```
