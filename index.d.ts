/**
 * Clean try/catch wrapperc
 *
 * @export
 * @param {Function} execution
 * @returns {Result}
 */
export declare function tryNice(execution: Function): any[];
/**
 * Clean async try/catch wrapper
 *
 * @export
 * @param {Function} execution async function
 * @returns {Promise<Result>}
 */
export declare function tryNiceAsync(execution: Function): Promise<any[]>;
