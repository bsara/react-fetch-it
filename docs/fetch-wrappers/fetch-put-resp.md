fetchPutResp
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits a `PUT` request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the raw `Response`. The request
body is provided via `options.body`.

Identical to [`fetchPut`](./fetch-put.md), except the response body is not parsed.


Examples
-----------------------------

```ts
import { fetchPutResp } from 'react-fetch-it';

const response = await fetchPutResp(`/api/movies/${movie.id}`, { body: movie });
```
