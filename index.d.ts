


export type UseFetchMiddleware<T extends UseFetchOptions = UseFetchOptions> = (options: T) => T | false;


export type UseFetchOptions<T extends UseFetchMiddlewareCustomOptions = UseFetchMiddlewareCustomOptions> = RequestInit & {
  middlewareOptions: T;
};


export interface UseFetchMiddlewareCustomOptions {}


/**
 * todo
 */
export function addMiddleware(...middleware: UseFetchMiddleware[]): void;


/**
 * todo
 */
export function removeMiddleware(...middleware: UseFetchMiddleware[]): void;