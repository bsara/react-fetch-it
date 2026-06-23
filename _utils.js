/**
 * @license
 * react-fetch-it
 *
 * Copyright (c) 2026, Brandon D. Sara (https://bsara.dev/)
 * Licensed under the ISC license (https://github.com/bsara/react-fetch-it/blob/master/LICENSE)
 */

let _middlewares = [];


export function _getMiddlewares() {
  return _middlewares;
}


export function _setMiddlewares(newMiddlewares) {
  _middlewares = newMiddlewares;
}


export function _execFetch({ method, url: origUrl, options: origReqOptions, extraMiddlewares }) {
  let reqOptions = { ...origReqOptions, url: origUrl.toString() };

  for (const middleware of [ ..._middlewares, ...(typeof extraMiddlewares === 'function' ? [ extraMiddlewares ] : (extraMiddlewares ?? [])) ]) {
    reqOptions = middleware({ ...reqOptions });

    if (reqOptions === false) {
      return Promise.resolve(undefined);
    }

    if (reqOptions instanceof Response) {
      return Promise.resolve(reqOptions);
    }

    if (typeof reqOptions !== 'object') {
      throw new TypeError('Middleware must return an object, a Response, or false.');
    }
  }

  const { onResponse, responseType, url, ...options } = reqOptions;

  const promise = fetch(url, { ...options, method }).then((resp) => {
    if (resp.ok) {
      return resp;
    }
    throw resp;
  });

  return (
    (responseType === 'arrayBuffer') ? promise.then((resp) => resp.arrayBuffer())
      : (responseType === 'blob') ? promise.then((resp) => resp.blob())
      : (responseType === 'formData') ? promise.then((resp) => resp.formData())
      : (responseType === 'json') ? promise.then((resp) => resp.json())
      : (responseType === 'text') ? promise.then((resp) => resp.text())
      : promise
  ).then((resp) => {
    onResponse?.(resp);
    return resp;
  });
}
