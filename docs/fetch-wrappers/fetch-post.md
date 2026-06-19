fetchPost
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits a `POST` request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the parsed response body. The
request body is provided via `options.body`.


Examples
-----------------------------

```ts
import { fetchPost } from 'react-fetch-it';

const created = await fetchPost<Movie>('/api/movies', { body: newMovie });
```
