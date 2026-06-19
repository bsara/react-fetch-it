useFetchHead
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an immediately invoked `HEAD` request and returns its
[state](../../index.d.ts) _(`{ loading, error, value }`)_. The request is
(re)submitted whenever the `url` or `options` change.

A `HEAD` request never has a response body, so the resulting `value` will always be the
raw `Response`.


Examples
-----------------------------

```tsx
import { useFetchHead } from 'react-fetch-it';

export function MyComponent() {
  const { loading, error, value: response } = useFetchHead('/api/movies/42');

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Not found</div>
      : <div>Last modified: {response.headers.get('Last-Modified')}</div>
  );
}
```
