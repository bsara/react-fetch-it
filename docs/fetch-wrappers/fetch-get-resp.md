fetchGetResp
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits a `GET` request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the raw `Response`.

Identical to [`fetchGet`](./fetch-get.md), except the response body is not parsed.


Examples
-----------------------------

```ts
import { fetchGetResp } from 'react-fetch-it';

const response = await fetchGetResp('/api/movies/42');
const movie = await response.json();
```
