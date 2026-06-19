useFetchPostResp
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked `POST` request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request body is provided
via the `body` argument. The request is (re)submitted whenever the `url`, `body`, or
`options` change.

Identical to [`useFetchPost`](./use-fetch-post.md), except the resulting `value` will be
the raw `Response` _(the response body is not parsed)_.


Examples
-----------------------------

```tsx
import { useFetchPostResp } from 'react-fetch-it';

export function MyComponent({ newMovie }: { newMovie: Movie }) {
  const { loading, error, value: response } = useFetchPostResp('/api/movies', newMovie);

  return (
    loading ? <div>Saving...</div>
      : error ? <div>Error</div>
      : <div>Status: {response.status}</div>
  );
}
```
