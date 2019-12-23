/**
 * Clean try/catch wrapperc
 *
 * @export
 * @param {Function} execution
 * @returns {Result}
 */
export function tryNice(execution: Function): any[] {
  const result = []

  try {
    result[0] = execution()
  } catch (error) {
    result[1] = error
  }

  return result
}

/**
 * Clean async try/catch wrapper
 *
 * @export
 * @param {Function} execution async function
 * @returns {Promise<Result>}
 */
export async function tryNiceAsync(execution: Function): Promise<any[]> {
  const result = []

  try {
    result[0] = await execution()
  } catch (error) {
    result[1] = error
  }

  return result
}
