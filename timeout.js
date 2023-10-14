
/**
 * Wait for the specified amount of time.
 * @param {number} ms The number of milliseconds to wait.
 * @param {any} result The result to return after the timeout.
 * @returns {Promise<any>} A promise that resolves after the timeout.
 */
export function timeout( ms, result = true ) {
  return new Promise( resolve =>
    setTimeout( resolve.bind( null, result ), ms )
  )
}
