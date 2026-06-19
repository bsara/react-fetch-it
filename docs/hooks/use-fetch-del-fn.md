useFetchDelFn
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Creates an on-demand `DELETE` fetch invocation function and the
[state](../../index.d.ts) of said invocation. Returns a `[ state, fn ]` tuple; the
request is not submitted until `fn` is called.


Examples
-----------------------------

```tsx
import { useFetchDelFn } from 'react-fetch-it';

export function MyComponent({ movieId }: { movieId: number }) {
  const [ { loading, error }, deleteMovie ] = useFetchDelFn(`/api/movies/${movieId}`);

  return (
    loading ? <div>Deleting...</div>
      : error ? <div>Error: {error.message}</div>
      : <button onClick={() => deleteMovie()}>Delete</button>
  );
}
```
