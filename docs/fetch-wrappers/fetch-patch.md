fetchPatch
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits a `PATCH` request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the parsed response body. The
request body is provided via `options.body`.


Examples
-----------------------------

```ts
import { fetchPatch } from 'react-fetch-it';

const updated = await fetchPatch<Movie>(`/api/movies/${movieId}`, { body: changes });
```
