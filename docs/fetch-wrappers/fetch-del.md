fetchDel
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits a `DELETE` request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the parsed response body.


Examples
-----------------------------

```ts
import { fetchDel } from 'react-fetch-it';

await fetchDel(`/api/movies/${movieId}`);
```
