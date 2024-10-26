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
