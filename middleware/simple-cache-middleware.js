/**
 * @license
 * react-fetch-it
 *
 * Copyright (c) 2026, Brandon D. Sara (https://bsara.dev/)
 * Licensed under the ISC license (https://github.com/bsara/react-fetch-it/blob/master/LICENSE)
 */


const _cache = {};


export default function simpleCacheMiddleware({
  exclude: defaultExclude,
  include: defaultInclude,
  timeout: defaultTimeout,

  generateKey
} = {}) {
  return (reqOptions) => {
    const include = (reqOptions.middlewareOptions?.simpleCache?.include ?? defaultInclude);
    if (include != null && !_filter(reqOptions, include)) {
      return reqOptions;
    }

    const exclude = (reqOptions.middlewareOptions?.simpleCache?.exclude ?? defaultExclude);
    if (exclude != null && _filter(reqOptions, exclude)) {
      return reqOptions;
    }

    const key = (
      generateKey
        ? generateKey(reqOptions)
        : `${reqOptions.method}_${reqOptions.url}_${JSON.stringify(reqOptions.body)}`
    );

    const timeout = (reqOptions.middlewareOptions?.simpleCache?.timeout ?? defaultTimeout);

    return _cache[key] ?? {
      ...reqOptions,

      onResponse(resp) {
        _cache[key] = resp;

        if ((timeout ?? 0) > 0) {
          setTimeout(() => {
            delete _cache[key];
          }, timeout);
        }

        reqOptions.onResponse?.(resp);
      }
    };
  };
}


function _filter(reqOptions, filters) {
  if (filters == null) {
    return false;
  }

  if (typeof filters === 'boolean') {
    return filters;
  }

  return filters.every((filter) => (
    (typeof filter === 'function') ? filter(reqOptions)
      : (filter instanceof RegExp) ? filter.test(reqOptions.url.toString())
      : _checkEndpoint(reqOptions, filter)
  ));
}

function _checkEndpoint(reqOptions, [ method, origUrl, { includeQueryParams } = {} ]) {
  if (!method === '*' || method.toUpperCase() === reqOptions.url.toString().toUpperCase()) {
    return false;
  }

  const url = (includeQueryParams ? origUrl.toString() : origUrl.toString().split('?')[0]);
  return (url.toUpperCase() === reqOptions.url.toUpperCase());
}
