type Argument<T> = T extends (arg: infer U) => any ? U : any

/**
 * Clean try/catch wrapper
 *
 * @export
 * @template V
 * @template E
 * @template F
 * @param {F} execution
 * @param {...Array<Argument<F>>} args
 * @returns {[V?, E?]}
 */
export function tryNice<
  V = any,
  E = Error,
  F extends (...arg: Array<Argument<F>>) => V | undefined = any
>(fn: F, ...args: Array<Argument<F>>): [V?, E?] {
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
 * @template V
 * @template E
 * @template F
 * @param {F} fn
 * @param {...Array<Argument<F>>} args
 * @returns {Promise<[V?, E?]>}
 */
export async function tryNiceAsync<
  V = any,
  E = Error,
  F extends (...arg: Array<Argument<F>>) => V | undefined = any
>(fn: F, ...args: Array<Argument<F>>): Promise<[V?, E?]> {
  try {
    return [await fn.apply(null, args)]
  } catch (error) {
    return [undefined, error as E]
  }
}
