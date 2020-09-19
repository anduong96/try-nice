type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown
}
  ? U
  : T

type ConditionalReturn<F extends (...args: any[]) => any, E> = ReturnType<
  F
> extends never
  ? [never, E?]
  : ReturnType<F> extends Promise<any>
  ? Promise<[Await<ReturnType<F>>?, E?]>
  : [ReturnType<F>?, E?]

/**
 * Check if value is a promise
 */
function isPromise(value: any): value is Promise<any> {
  return value instanceof Promise
}

/**
 * Clean try/catch wrapper
 *
 * @export
 * @template E
 * @template F
 * @param {F} fn
 * @param {...Parameters<F>} args
 * @returns {ConditionalReturn<F, E>}
 */
export function tryNice<E = any, F extends (...args: any[]) => any = any>(
  fn: F,
  ...args: Parameters<F>
): ConditionalReturn<F, E> {
  try {
    const result = fn.apply(null, args)
    if (!isPromise(result)) {
      return [result, undefined] as any
    }

    return new Promise((resolve, reject) =>
      result
        .then((value) => resolve([value, undefined]))
        .catch((promiseError) => resolve([undefined, promiseError]))
    ) as any
  } catch (error) {
    return [undefined, error as E] as any
  }
}
