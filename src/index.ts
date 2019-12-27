/**
 * Clean try/catch wrapper
 *
 * @export
 * @param {Function} execution
 * @returns {Result}
 */
export function tryNice(execution: Function, ...args: any[]): any[] {
  try {
    return [execution(...args)]
  } catch (error) {
    return [undefined, error]
  }
}

/**
 * Clean async try/catch wrapper
 *
 * @export
 * @param {Function} execution async function
 * @returns {Promise<Result>}
 */
export async function tryNiceAsync(execution: Function, ...args: any[]): Promise<any[]> {
  try {
    return [await execution(...args)]
  } catch (error) {
    return [undefined, error]
  }
}
