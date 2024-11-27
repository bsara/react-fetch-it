/**
 * @license
 * react-fetch-it
 *
 * Copyright (c) 2024, Brandon D. Sara (https://bsara.dev/)
 * Licensed under the ISC license (https://github.com/bsara/react-fetch-it/blob/master/LICENSE)
 */

/** */
export default function defaultOptionsMiddleware(defaultOptions) {
  return (reqOptions) => ({
    ...defaultOptions,
    ...reqOptions,

    middlewareOptions: {
      ...(defaultOptions.middlewareOptions ?? {}),
      ...(reqOptions.middlewareOptions ?? {})
    }
  });
}
