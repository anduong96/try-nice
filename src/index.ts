type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown
}
  ? U
  : T

/**
 * Check if value is a promise
 */
function isPromise(value: any): value is Promise<any> {
  return Boolean(value && typeof value.then === 'function')
}

/**
 * Clean try/catch wrapper
 *
 * @export
 * @template E
 * @template F
 * @param {F} fn
 * @param {...Parameters<F>} args
 * @returns {F extends Promise<any>
 *   ? Promise<[Await<ReturnType<F>>?, any?]>
 *   : [ReturnType<F>?, E?]}
 */
export function tryNice<E = any, F extends (...args: any[]) => any = any>(
  fn: F,
  ...args: Parameters<F>
): F extends Promise<any>
  ? Promise<[Await<ReturnType<F>>?, any?]>
  : [ReturnType<F>?, E?] {
  try {
    const result = fn.apply(null, args)
    if (!isPromise(result)) {
      return [result, undefined] as any
    }

    return new Promise((resolve, reject) =>
      result
        .then((value) => resolve([value, undefined]))
        .catch((promiseError) => reject([undefined, promiseError]))
    ) as any
  } catch (error) {
    return [undefined, error as E] as any
  }
}
