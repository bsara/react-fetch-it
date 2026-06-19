fetchDelResp
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits a `DELETE` request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the raw `Response`.

Identical to [`fetchDel`](./fetch-del.md), except the response body is not parsed.


Examples
-----------------------------

```ts
import { fetchDelResp } from 'react-fetch-it';

const response = await fetchDelResp(`/api/movies/${movieId}`);
```
