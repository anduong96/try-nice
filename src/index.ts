/**
 * Clean try/catch wrapper
 *
 * @export
 * @param {Function} execution
 * @returns {Result}
 */
export function tryNice<T = any, E = Error>(
  execution: (...args: any[]) => T,
  ...args: any[]
): [T?, E?] {
  try {
    return [execution.apply(null, args)]
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
export async function tryNiceAsync<T = any, E = Error>(
  execution: (...args: any[]) => Promise<T>,
  ...args: any[]
): Promise<[T?, E?]> {
  try {
    return [await execution.apply(null, args)]
  } catch (error) {
    return [undefined, error as E]
  }
}
