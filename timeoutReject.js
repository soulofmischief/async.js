
/**
 * Wait for the specified amount of time.
 * @param ms The amount of time to wait in milliseconds.
 * @param result The result to return after the timeout.
 * @returns A promise that resolves after the timeout.
 */
export function timeoutReject( ms, result = true ) {
  return new Promise( resolve =>
    setTimeout( resolve.bind( null, result ), ms )
  )
}
[]
