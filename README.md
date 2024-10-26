react-use-fetch
=========================================================================================

React hooks for interacting with [the fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which includes the ability to add middleware to intercept, modify, cancel, cache, or
analyze fetch calls.


Installation
----------------------------

```shell
$ npm i -S @bsara/react-use-fetch
```


Basic Usage
----------------------------

### Basic Usage (Immediate Execution)

```tsx
import { useFetchGet } from '@bsara/react-use-fetch';

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
import { useFetchGetFn } from '@bsara/react-use-fetch';

export function MyComponent() {
  const [ { loading, error, value: movie }, fetchMovie ] = useFetchGetFn<Movie>(`/api/movies/42`);

  return (
    loading ? <div>Loading...</div>
      : error ? <div>Error: {error.message}</div>
      : movie ? <div>{movie.title} ({movie.year}) by {movie.director}</div>
      : <button onClick={fetchMovie}>Fetch It!</button>
  );
}
```

### Add "Standard" Options for All Requests (Without Provider)

```ts
// main.ts

import { addUseFetchMiddleware } from '@bsara/react-use-fetch';
import standardOptionsMiddleware from '@bsara/react-use-fetch/middleware/standard-options';

addUseFetchMiddleware(standardOptionsMiddleware);

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

- [useFetch](docs/hooks/use-fetch.md)
- [useFetchFn](docs/hooks/use-fetch-fn.md)
- [useFetchResp](docs/hooks/use-fetch-resp.md)
- [useFetchRespFn](docs/hooks/use-fetch-resp-fn.md)
- DELETE
  - [useFetchDel](docs/hooks/use-fetch-del.md)
  - [useFetchDelFn](docs/hooks/use-fetch-del-fn.md)
  - [useFetchDelResp](docs/hooks/use-fetch-del-resp.md)
  - [useFetchDelRespFn](docs/hooks/use-fetch-del-resp-fn.md)
- GET
  - [useFetchGet](docs/hooks/use-fetch-get.md)
  - [useFetchGetFn](docs/hooks/use-fetch-get-fn.md)
  - [useFetchGetResp](docs/hooks/use-fetch-get-resp.md)
  - [useFetchGetRespFn](docs/hooks/use-fetch-get-resp-fn.md)
- HEAD 
  - [useFetchHead](docs/hooks/use-fetch-head.md)
  - [useFetchHeadFn](docs/hooks/use-fetch-head-fn.md)
- POST
  - [useFetchPost](docs/hooks/use-fetch-post.md)
  - [useFetchPostFn](docs/hooks/use-fetch-post-fn.md)
  - [useFetchPostResp](docs/hooks/use-fetch-post-resp.md)
  - [useFetchPostRespFn](docs/hooks/use-fetch-post-resp-fn.md)
- PUT
  - [useFetchPut](docs/hooks/use-fetch-put.md)
  - [useFetchPutFn](docs/hooks/use-fetch-put-fn.md)
  - [useFetchPutResp](docs/hooks/use-fetch-put-resp.md)
  - [useFetchPutRespFn](docs/hooks/use-fetch-put-resp-fn.md)


Middleware
----------------------------

TODO

### Provided Middleware

- [defaultOptionsMiddleware](docs/middleware/default-options-middleware.md)
- [simpleCacheMiddleware](docs/middleware/simple-cache-middleware.md)
- [standardOptionsMiddleware](docs/middleware/standard-options-middleware.md)
