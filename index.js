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
  const [ finalOptions, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return useFetch({
    url,
    options: {
      ...finalOptions,
      method: 'GET'
    },
    abortController: finalCustomAbortController
  });
}

export function useFetchGetFn(url, options) {
  return useFetchFn({
    url,
    options: {
      ...(options ?? {}),
      method: 'GET'
    }
  });
}

export function useFetchGetResp(url, optionsOrCustomAbortController, customAbortController) {
  const [ finalOptions, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return useFetchResp({
    url,
    options: {
      ...finalOptions,
      method: 'GET'
    },
    abortController: finalCustomAbortController
  });
}

export function useFetchGetRespFn(url, options) {
  return useFetchRespFn({
    url,
    options: {
      ...(options ?? {}),
      method: 'GET'
    }
  });
}


export function useFetchPost(url, body, optionsOrCustomAbortController, customAbortController) {
  const [ finalOptions, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return useFetch({
    url,
    options: {
      ...finalOptions,
      body,
      method: 'POST'
    },
    abortController: finalCustomAbortController
  });
}

export function useFetchPostFn(url, options) {
  return useFetchFn({
    url,
    options: {
      ...(options ?? {}),
      method: 'POST'
    },
    callbackProvidesBody: true
  });
}

export function useFetchPostResp(url, body, optionsOrCustomAbortController, customAbortController) {
  const [ finalOptions, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return useFetchResp({
    url,
    options: {
      ...finalOptions,
      body,
      method: 'POST'
    },
    abortController: finalCustomAbortController
  });
}

export function useFetchPostRespFn(url, options) {
  return useFetchRespFn({
    url,
    options: {
      ...finalOptions,
      method: 'POST'
    },
    callbackProvidesBody: true
  });
}


export function useFetchPut(url, body, optionsOrCustomAbortController, customAbortController) {
  const [ finalOptions, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return useFetch({
    url,
    options: {
      ...finalOptions,
      body,
      method: 'PUT'
    },
    abortController: finalCustomAbortController
  });
}

export function useFetchPutFn(url, options) {
  return useFetchFn({
    url,
    options: {
      ...(options ?? {}),
      method: 'PUT'
    },
    callbackProvidesBody: true
  });
}

export function useFetchPutResp(url, body, optionsOrCustomAbortController, customAbortController) {
  const [ finalOptions, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return useFetchResp({
    url,
    options: {
      ...finalOptions,
      body,
      method: 'PUT'
    },
    abortController: finalCustomAbortController
  });
}

export function useFetchPutRespFn(url, options) {
  return useFetchRespFn({
    url,
    options: {
      ...(options ?? {}),
      method: 'PUT'
    },
    callbackProvidesBody: true
  });
}


export function useFetchDelete(url, optionsOrCustomAbortController, customAbortController) {
  const [ finalOptions, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return useFetch({
    url,
    options: {
      ...finalOptions,
      method: 'DELETE'
    },
    abortController: finalCustomAbortController
  });
}

export function useFetchDeleteFn(url, options) {
  return useFetchFn({
    url,
    options: {
      ...(options ?? {}),
      method: 'DELETE'
    }
  });
}

export function useFetchDeleteResp(url, optionsOrCustomAbortController, customAbortController) {
  const [ finalOptions, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return useFetchResp({
    url,
    options: {
      ...finalOptions,
      method: 'DELETE'
    },
    abortController: finalCustomAbortController
  });
}

export function useFetchDeleteRespFn(url, options) {
  return useFetchRespFn({
    url,
    options: {
      ...(options ?? {}),
      method: 'DELETE'
    }
  });
}

export function useFetchHead(url, optionsOrCustomAbortController, customAbortController) {
  const [ finalOptions, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return useFetchResp({
    url,
    options: {
      ...finalOptions,
      method: 'HEAD'
    },
    abortController: finalCustomAbortController
  });
}

export function useFetchHeadFn(url, options) {
  return useFetchRespFn({
    url,
    options: {
      ...(options ?? {}),
      method: 'HEAD'
    }
  });
}


export function useFetch(url, optionsOrCustomAbortController, customAbortController) {
  const [ finalOptions, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: finalOptions,
    url
  });
}


export function useFetchResp(url, optionsOrCustomAbortController, customAbortController) {
  const [ finalOptions, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: { ...finalOptions, responseType: 'none' },
    url
  });
}


export function useFetchFn(url, options) {
  return _useImmediateFetch({
    options: (options ?? {}),
    url
  });
}


export function useFetchRespFn(url, options) {
  return _useFetch({
    options: { ...(options ?? {}), responseType: 'none' },
    url
  });
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
  let reqOptions = { ...origReqOptions, url: origUrl };

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

  const promise = fetch(url, { ...options, method });

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
