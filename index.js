/**
 * @license
 * react-fetch-it
 *
 * Copyright (c) 2026, Brandon D. Sara (https://bsara.dev/)
 * Licensed under the ISC license (https://github.com/bsara/react-fetch-it/blob/master/LICENSE)
 */

import { _execFetch, _getMiddlewares, _setMiddlewares } from "./_utils.js";

export * from "./hooks.js";



// region Middleware

export function addFetchItMiddleware(...newMiddlewares) {
  if (!newMiddlewares?.length) {
    console.warn('No middleware provided to addFetchItMiddleware...ignoring.');
    return;
  }

  if (newMiddlewares.some((middleware) => (middleware != null && typeof middleware !== 'function'))) {
    throw new TypeError('At least one middleware provided was not a function.');
  }

  _setMiddlewares([ ..._getMiddlewares(), ...newMiddlewares ]);
}


export function removeFetchItMiddleware(middleware) {
  _setMiddlewares(_getMiddlewares().filter((m) => (m !== middleware)));
}

// endregion


// region Fetch Wrappers

export function fetchGet(url, options) {
  return _execFetch({ method: 'GET', url, options: (options ?? {}) });
}

export function fetchGetResp(url, options) {
  return _execFetch({ method: 'GET', url, options: { ...(options ?? {}), responseType: 'none' } });
}


export function fetchPost(url, options) {
  return _execFetch({ method: 'POST', url, options: (options ?? {}) });
}

export function fetchPostResp(url, options) {
  return _execFetch({ method: 'POST', url, options: { ...(options ?? {}), responseType: 'none' } });
}


export function fetchPut(url, options) {
  return _execFetch({ method: 'PUT', url, options: (options ?? {}) });
}

export function fetchPutResp(url, options) {
  return _execFetch({ method: 'PUT', url, options: { ...(options ?? {}), responseType: 'none' } });
}


export function fetchPatch(url, options) {
  return _execFetch({ method: 'PATCH', url, options: (options ?? {}) });
}

export function fetchPatchResp(url, options) {
  return _execFetch({ method: 'PATCH', url, options: { ...(options ?? {}), responseType: 'none' } });
}


export function fetchDel(url, options) {
  return _execFetch({ method: 'DELETE', url, options: (options ?? {}) });
}

export function fetchDelResp(url, options) {
  return _execFetch({ method: 'DELETE', url, options: { ...(options ?? {}), responseType: 'none' } });
}


export function fetchHead(url, options) {
  return _execFetch({method: 'HEAD', url, options: { ...(options ?? {}), responseType: 'none' } });
}


export function doFetch(url, options) {
  return _execFetch({ method: (options?.method ?? 'GET'), url, options: (options ?? {}) });
}

// endregion
