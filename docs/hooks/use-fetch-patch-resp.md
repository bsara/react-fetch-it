useFetchPatchResp
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked `PATCH` request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request body is provided
via the `body` argument. The request is (re)submitted whenever the `url`, `body`, or
`options` change.

Identical to [`useFetchPatch`](./use-fetch-patch.md), except the resulting `value` will
be the raw `Response` _(the response body is not parsed)_.


Examples
-----------------------------

```tsx
import { useFetchPatchResp } from 'react-fetch-it';

export function MyComponent({ movieId, changes }: { movieId: number; changes: Partial<Movie> }) {
  const { loading, error, value: response } = useFetchPatchResp(`/api/movies/${movieId}`, changes);

  return (
    loading ? <div>Saving...</div>
      : error ? <div>Error</div>
      : <div>Status: {response.status}</div>
  );
}
```
