fetchPatchResp
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits a `PATCH` request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the raw `Response`. The request
body is provided via `options.body`.

Identical to [`fetchPatch`](./fetch-patch.md), except the response body is not parsed.


Examples
-----------------------------

```ts
import { fetchPatchResp } from 'react-fetch-it';

const response = await fetchPatchResp(`/api/movies/${movieId}`, { body: changes });
```
