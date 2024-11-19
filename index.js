import { useContext, useEffect } from "react";
import { useAsyncFn } from 'react-use';

import UseFetchMiddlewareContext from "./UseFetchMiddlewareContext.js";



// region Middleware

let _middlewares = [];


export function addUseFetchMiddleware(...newMiddlewares) {
  if (!newMiddlewares?.length) {
    console.warn('No middleware provided to addUseFetchMiddleware...ignoring.');
    return;
  }

  if (newMiddlewares.some((middleware) => (middleware != null && typeof middleware !== 'function'))) {
    throw new TypeError('At least one middleware provided was not a function.');
  }

  _middlewares = [ ..._middlewares, ...newMiddlewares ];
}


export function removeUseFetchMiddleware(middleware) {
  _middlewares = _middlewares.filter((m) => (m !== middleware));
}

// endregion



// region Hooks

export function useFetchGet(url, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      method: 'GET'
    },
    url
  });
}

export function useFetchGetFn(url, options) {
  return _useFetch({
    options: {
      ...(options ?? {}),
      method: 'GET'
    },
    url
  });
}

export function useFetchGetResp(url, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      method: 'GET',
      responseType: 'none'
    },
    url
  });
}

export function useFetchGetRespFn(url, options) {
  return _useFetch({
    options: {
      ...(options ?? {}),
      method: 'GET',
      responseType: 'none'
    },
    url
  });
}


export function useFetchPost(url, body, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      body,
      method: 'POST'
    },
    url
  });
}

export function useFetchPostFn(url, options) {
  return _useFetch({
    callbackProvidesBody: true,
    options: {
      ...(options ?? {}),
      method: 'POST'
    },
    url
  });
}

export function useFetchPostResp(url, body, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      body,
      method: 'POST',
      responseType: 'none'
    },
    url
  });
}

export function useFetchPostRespFn(url, options) {
  return _useFetch({
    callbackProvidesBody: true,
    options: {
      ...(options ?? {}),
      method: 'POST',
      responseType: 'none'
    },
    url
  });
}


export function useFetchPut(url, body, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      body,
      method: 'PUT'
    },
    url
  });
}

export function useFetchPutFn(url, options) {
  return _useFetch({
    callbackProvidesBody: true,
    options: {
      ...(options ?? {}),
      method: 'PUT'
    },
    url
  });
}

export function useFetchPutResp(url, body, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      body,
      method: 'PUT',
      responseType: 'none'
    },
    url
  });
}

export function useFetchPutRespFn(url, options) {
  return _useFetch({
    callbackProvidesBody: true,
    options: {
      ...(options ?? {}),
      method: 'PUT',
      responseType: 'none'
    },
    url
  });
}


export function useFetchDelete(url, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      method: 'DELETE'
    },
    url
  });
}

export function useFetchDeleteFn(url, options) {
  return _useFetch({
    options: {
      ...(options ?? {}),
      method: 'DELETE'
    },
    url
  });
}

export function useFetchDeleteResp(url, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      method: 'DELETE',
      responseType: 'none'
    },
    url
  });
}

export function useFetchDeleteRespFn(url, options) {
  return _useFetch({
    options: {
      ...(options ?? {}),
      method: 'DELETE',
      responseType: 'none'
    },
    url
  });
}


export function useFetchHead(url, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      method: 'HEAD',
      responseType: 'none'
    },
    url
  });
}

export function useFetchHeadFn(url, options) {
  return _useFetch({
    url,
    options: {
      ...(options ?? {}),
      method: 'HEAD',
      responseType: 'none'
    }
  });
}


export function useFetch(url, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options,
    url
  });
}

export function useFetchResp(url, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      responseType: 'none'
    },
    url
  });
}

export function useFetchFn(url, options) {
  return _useFetch({
    options: (options ?? {}),
    url
  });
}


export function useFetchRespFn(url, options) {
  return _useFetch({
    options: {
      ...(options ?? {}),
      responseType: 'none'
    },
    url
  });
}

// endregion


// region Fetch Wrappers

export function fetchGet(url, options) {
  return _execFetch({ method: 'GET', url, options: (options ?? {}) });
}

export function fetchPost(url, options) {
  return _execFetch({ method: 'POST', url, options: (options ?? {}) });
}

export function fetchPut(url, options) {
  return _execFetch({ method: 'PUT', url, options: (options ?? {}) });
}

export function fetchDel(url, options) {
  return _execFetch({ method: 'DELETE', url, options: (options ?? {}) });
}

export function fetchHead(url, options) {
  return _execFetch({method: 'HEAD', url, options: { ...(options ?? {}), responseType: 'none' } });
}

export function doFetch(url, options) {
  return _execFetch({ method: (options?.method ?? 'GET'), url, options: (options ?? {}) });
}

// endregion


// region Private Hooks

function _useImmediateFetch({
  callbackProvidesBody,
  abortController: origAbortController,
  url,
  options
}) {
  const [ state, callback ] = _useFetch({
    callbackProvidesBody,
    initialState: { loading: true },
    options,
    url
  });

  useEffect(() => {
    const abortController = origAbortController;

    callback(abortController).finally(function() {
      abortController = undefined;
    });

    return function() {
      abortController?.abort('Effect cleanup');
    }
  }, [ callback, origAbortController ]);

  return state;
}


function _useFetch({
  callbackProvidesBody,
  initialState,
  options,
  url
}) {
  const contextMiddlewares = useContext(UseFetchMiddlewareContext);

  return useAsyncFn(
    function(bodyOrAbortController, abortController) {
      const [ body, finalAbortController ] = (
        callbackProvidesBody
          ? [ bodyOrAbortController, abortController ]
          : [ options.body, bodyOrAbortController ]
      );

      return _execFetch({
        method: options.method,
        url,
        options: {
          body,
          signal: finalAbortController?.signal,
          ...options
        },
        extraMiddlewares: contextMiddlewares
      });
    },
    [ callbackProvidesBody, contextMiddlewares, JSON.stringify(options), url ],
    initialState
  )
}

// endregion


// region Private Helpers

function _execFetch({ method, url: origUrl, options: origReqOptions, extraMiddlewares }) {
  let reqOptions = { ...origReqOptions, url: origUrl.toString() };

  for (const middleware of [ ..._middlewares, ...(typeof extraMiddlewares === 'function' ? [ extraMiddlewares ] : (extraMiddlewares ?? [])) ]) {
    reqOptions = middleware({ ...structuredClone(reqOptions) });

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


function _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController) {
  return (
    (optionsOrCustomAbortController instanceof AbortController)
      ? [ {}, optionsOrCustomAbortController ]
      : [ (optionsOrCustomAbortController ?? {}), customAbortController ]
  );
}

// endregion
