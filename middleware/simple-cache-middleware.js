/**
 * @license
 * react-fetch-it
 *
 * Copyright (c) 2024, Brandon D. Sara (https://bsara.dev/)
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
    if (_filter(reqOptions, (reqOptions.middlewareOptions?.simpleCache?.include ?? defaultInclude))) {
      return reqOptions;
    }
    if (_filter(reqOptions, (reqOptions.middlewareOptions?.simpleCache?.exclude ?? defaultExclude))) {
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
