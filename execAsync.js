/**
 * Wait for a series of async functions to resolve in order.
 * @param {Array<Function>} funcs The async functions to execute.
 * @returns {Promise<Array>} A promise that resolves to an array of the return
 * values of the functions.
 */
export async function execAsync( ...funcs ) {
  return await Promise.all( funcs.map( f => f()))
}
