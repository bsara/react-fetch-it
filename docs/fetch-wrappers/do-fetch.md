doFetch
=========================================================================================

> Refer to the [TypeScript docs](../../index.d.ts) for full API details.

Submits an HTTP request that will utilize the middleware and other options provided by
`react-fetch-it`, returning a `Promise` that resolves to the parsed response body.

This is the generic, non-hook entry point used when one of the method-specific wrappers
_(e.g. [`fetchGet`](./fetch-get.md))_ does not cover your needs. Defaults to a `GET`
request unless `options.method` is set. The response body is parsed based on
`options.responseType`.


Examples
-----------------------------

```ts
import { doFetch } from 'react-fetch-it';

const movie = await doFetch<FetchItMiddlewareCustomOptions, Movie>('/api/movies/42', {
  method: 'GET',
  responseType: 'json'
});
```
