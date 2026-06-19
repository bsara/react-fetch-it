fetchPostResp
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits a `POST` request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the raw `Response`. The request
body is provided via `options.body`.

Identical to [`fetchPost`](./fetch-post.md), except the response body is not parsed.


Examples
-----------------------------

```ts
import { fetchPostResp } from 'react-fetch-it';

const response = await fetchPostResp('/api/movies', { body: newMovie });
```
