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
    return [Reflect.apply(fn, null, args)]
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
    return [Reflect.apply(fn, null, args)]
  } catch (error) {
    return [undefined, error as E]
  }
}


/**
 * Clean try/catch wrapper with 'this' as an argument
 *
 * @export
 * @template V Return value
 * @template E Error
 * @template T This
 * @template F Function
 * @param {F} fn
 * @param {T} thisArg
 * @param {...Array<Argument<F>>} args
 * @returns {[V?, E?]}
 */
export function tryThis<
  V = any,
  E = Error,
  F extends (...arg: Array<Argument<F>>) => V | undefined = any,
  T = any
>(fn: F, thisArg: T, ...args: Array<Argument<F>>): [V?, E?] {
  try {
    return [Reflect.apply(fn, thisArg, args)]
  } catch (error) {
    return [undefined, error as E]
  }
}


/**
 * Clean async try/catch wrapper with 'this' as an argument
 *
 * @export
 * @template V Return value
 * @template E Error
 * @template T This
 * @template F Function
 * @param {F} fn
 * @param {T} thisArg
 * @param {...Array<Argument<F>>} args
 * @returns {Promise<[V?, E?]>}
 */
export async function tryThisAsync<
  V = any,
  E = Error,
  F extends (...arg: Array<Argument<F>>) => V | undefined = any,
  T = any
>(fn: F, thisArg: T, ...args: Array<Argument<F>>): Promise<[V?, E?]> {
  try {
    return [await Reflect.apply(fn, thisArg, args)]
  } catch (error) {
    return [undefined, error as E]
  }
}
