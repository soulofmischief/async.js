// @flow strict

/**
 * Wait for a series of async functions to resolve in order.
 * @param {Array<Function>} args An array of async functions to wait for.
 * @returns {Promise<void>} A promise that resolves when all functions have
 * resolved.
 */
export async function wait( ...args ) {
  for ( const f of args ) await f()
}
