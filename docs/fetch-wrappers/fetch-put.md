fetchPut
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits a `PUT` request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the parsed response body. The
request body is provided via `options.body`.


Examples
-----------------------------

```ts
import { fetchPut } from 'react-fetch-it';

const updated = await fetchPut<Movie>(`/api/movies/${movie.id}`, { body: movie });
```
