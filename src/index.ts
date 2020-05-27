/**
 * Clean try/catch wrapper
 *
 * @export
 * @param {Function} execution
 * @returns {Result}
 */
export function tryNice<T = any, E = any>(
  execution: (...args: any[]) => T,
  ...args: any[]
): [T?, E?] {
  try {
    return [execution(...args)]
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
export async function tryNiceAsync<T = any, E = any>(
  execution: (...args: any[]) => Promise<T>,
  ...args: any[]
): Promise<[T?, E?]> {
  try {
    return [await execution(...args)]
  } catch (error) {
    return [undefined, error as E]
  }
}
