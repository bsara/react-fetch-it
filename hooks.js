/**
 * @license
 * react-fetch-it
 *
 * Copyright (c) 2026, Brandon D. Sara (https://bsara.dev/)
 * Licensed under the ISC license (https://github.com/bsara/react-fetch-it/blob/master/LICENSE)
 */
'use client';

import { useContext, useEffect } from 'react';
import { useAsyncFn } from 'react-use';

import FetchItMiddlewareContext from './FetchItMiddlewareContext.js';
import { _execFetch } from './_utils.js';




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


export function useFetchPatch(url, body, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      body,
      method: 'PATCH'
    },
    url
  });
}

export function useFetchPatchFn(url, options) {
  return _useFetch({
    callbackProvidesBody: true,
    options: {
      ...(options ?? {}),
      method: 'PATCH'
    },
    url
  });
}

export function useFetchPatchResp(url, body, optionsOrCustomAbortController, customAbortController) {
  const [ options, finalCustomAbortController ] = _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController);

  return _useImmediateFetch({
    abortController: finalCustomAbortController,
    options: {
      ...options,
      body,
      method: 'PATCH',
      responseType: 'none'
    },
    url
  });
}

export function useFetchPatchRespFn(url, options) {
  return _useFetch({
    callbackProvidesBody: true,
    options: {
      ...(options ?? {}),
      method: 'PATCH',
      responseType: 'none'
    },
    url
  });
}


export function useFetchDel(url, optionsOrCustomAbortController, customAbortController) {
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

export function useFetchDelFn(url, options) {
  return _useFetch({
    options: {
      ...(options ?? {}),
      method: 'DELETE'
    },
    url
  });
}

export function useFetchDelResp(url, optionsOrCustomAbortController, customAbortController) {
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

export function useFetchDelRespFn(url, options) {
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
    let abortController = origAbortController;

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
  const contextMiddlewares = useContext(FetchItMiddlewareContext);

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

function _getOptionsAndCustomAbortController(optionsOrCustomAbortController, customAbortController) {
  return (
    (optionsOrCustomAbortController instanceof AbortController)
      ? [ {}, optionsOrCustomAbortController ]
      : [ (optionsOrCustomAbortController ?? {}), customAbortController ]
  );
}

// endregion
