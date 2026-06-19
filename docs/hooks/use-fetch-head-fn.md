useFetchHeadFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand `HEAD` fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called.

A `HEAD` request never has a response body, so the resulting `value` will always be the
raw `Response`.


Examples
-----------------------------

```tsx
import { useFetchHeadFn } from 'react-fetch-it';

export function MyComponent() {
  const [ { loading, error, value: response }, checkMovie ] = useFetchHeadFn('/api/movies/42');

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Not found</div>
      : response ? <div>Last modified: {response.headers.get('Last-Modified')}</div>
      : <button onClick={() => checkMovie()}>Check</button>
  );
}
```
