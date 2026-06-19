fetchGet
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits a `GET` request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the parsed response body.


Examples
-----------------------------

```ts
import { fetchGet } from 'react-fetch-it';

const movie = await fetchGet<Movie>('/api/movies/42');
```
