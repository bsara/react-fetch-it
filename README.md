react-fetch-it
=========================================================================================

[![NPM Package](https://img.shields.io/npm/v/react-fetch-it.svg?style=flat-square)][npm]
[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)][license]

React hooks for interacting with [the fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
Includes the ability to add middleware to intercept, modify, cancel, cache, or analyze
fetch calls.


Installation
----------------------------

```shell
$ npm i -S react-fetch-it
```


Basic Usage
----------------------------

### Basic Usage (Immediate Execution)

```tsx
import { useFetchGet } from 'react-fetch-it';

export function MyComponent() {
  const { loading, error, value: movie } = useFetchGet<Movie>('/api/movies/42'); // NOTE: Only submits request if URL changes.
  
  return (
    loading ? <div>Loading...</div>
      : error ? <div>Error: {error.message}</div>
      : <div>{movie.title} ({movie.year}) by {movie.director}</div>
  );
}

type Movie = {
  id: number;
  title: string;
  year: number;
  director: string;
};
```

### Basic Usage (On-Demand Execution)

```tsx
import { useState } from 'react';
import { useFetchGetFn } from 'react-fetch-it';

export function MyComponent() {
  const [ { loading, error, value: movie }, fetchMovie ] = useFetchGetFn<Movie>(`/api/movies/42`);

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Error: {error.message}</div>
      : movie ? <div>{movie.title} ({movie.year}) by {movie.director}</div>
      : <button onClick={fetchMovie}>Fetch it, yo!</button>
  );
}
```

### Add "Standard" Options for All Requests (Without Provider)

```ts
// main.ts

import { addFetchItMiddleware } from 'react-fetch-it';
import standardOptionsMiddleware from 'react-fetch-it/middleware/standard-options';

addFetchItMiddleware(
 standardOptionsMiddleware
);

// ...
```


Advanced Usage
----------------------------

TODO

### Adding Middleware

TODO

### Aborting a Request

TODO


Hooks
----------------------------

- [useFetch](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch.md)
- [useFetchFn](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-fn.md)
- [useFetchResp](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-resp.md)
- [useFetchRespFn](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-resp-fn.md)
- DELETE
  - [useFetchDel](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-del.md)
  - [useFetchDelFn](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-del-fn.md)
  - [useFetchDelResp](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-del-resp.md)
  - [useFetchDelRespFn](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-del-resp-fn.md)
- GET
  - [useFetchGet](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-get.md)
  - [useFetchGetFn](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-get-fn.md)
  - [useFetchGetResp](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-get-resp.md)
  - [useFetchGetRespFn](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-get-resp-fn.md)
- HEAD 
  - [useFetchHead](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-head.md)
  - [useFetchHeadFn](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-head-fn.md)
- POST
  - [useFetchPost](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-post.md)
  - [useFetchPostFn](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-post-fn.md)
  - [useFetchPostResp](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-post-resp.md)
  - [useFetchPostRespFn](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-post-resp-fn.md)
- PUT
  - [useFetchPut](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-put.md)
  - [useFetchPutFn](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-put-fn.md)
  - [useFetchPutResp](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-put-resp.md)
  - [useFetchPutRespFn](https://github.com/bsara/react-fetch-it/blob/master/docs/hooks/use-fetch-put-resp-fn.md)


Middleware
----------------------------

TODO

### Provided Middleware

- [defaultOptionsMiddleware](https://github.com/bsara/react-fetch-it/blob/master/docs/middleware/default-options-middleware.md)
- [simpleCacheMiddleware](https://github.com/bsara/react-fetch-it/blob/master/docs/middleware/simple-cache-middleware.md)
- [standardOptionsMiddleware](https://github.com/bsara/react-fetch-it/blob/master/docs/middleware/standard-options-middleware.md)


Fetch Wrappers
----------------------------

> These are provided in case you need to make a request but do not wish to use a hook to
> do so. This allows all middleware and other options to still be used even when not
> using a hook.

- [doFetch](https://github.com/bsara/react-fetch-it/blob/master/docs/fetch-wrappers/do-fetch.md)
- [fetchDel](https://github.com/bsara/react-fetch-it/blob/master/docs/fetch-wrappers/fetch-del.md)
- [fetchGet](https://github.com/bsara/react-fetch-it/blob/master/docs/fetch-wrappers/fetch-get.md)
- [fetchHead](https://github.com/bsara/react-fetch-it/blob/master/docs/fetch-wrappers/fetch-head.md)
- [fetchPost](https://github.com/bsara/react-fetch-it/blob/master/docs/fetch-wrappers/fetch-post.md)
- [fetchPut](https://github.com/bsara/react-fetch-it/blob/master/docs/fetch-wrappers/fetch-put.md)


License
----------------------------

ISC License (ISC)

Copyright (c) 2024, Brandon D. Sara (https://bsara.dev/)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.




[license]: https://github.com/bsara/react-fetch-it/blob/master/LICENSE "License"
[npm]:     https://www.npmjs.com/package/react-fetch-it                "NPM Package: react-fetch-it"
