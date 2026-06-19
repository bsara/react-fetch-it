fetchHead
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits a `HEAD` request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the raw `Response`.

A `HEAD` request never has a response body, so the result is always the `Response`.


Examples
-----------------------------

```ts
import { fetchHead } from 'react-fetch-it';

const response = await fetchHead('/api/movies/42');
const lastModified = response.headers.get('Last-Modified');
```
