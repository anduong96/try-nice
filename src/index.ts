type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown
}
  ? U
  : T

/**
 * Clean try/catch wrapper
 *
 * @export
 * @param {Function} execution
 * @returns {Result}
 */
export function tryNice<
  E extends Error,
  F extends (...args: any[]) => any = any
>(fn: F, ...args: Parameters<F>): [ReturnType<F>?, E?] {
  try {
    return [fn.apply(null, args)]
  } catch (error) {
    return [undefined, error as E]
  }
}

/**
 * Clean async try/catch wrapper
 *
 * @export
 * @param {Function} execution async function
 * @returns {Promise<Result>}
 */
export async function tryNiceAsync<
  E extends Error,
  F extends (...args: any[]) => any = any
>(fn: F, ...args: Parameters<F>): Promise<[Await<ReturnType<F>>?, E?]> {
  try {
    return [await fn.apply(null, args), undefined]
  } catch (error) {
    return [undefined, error as E]
  }
}
