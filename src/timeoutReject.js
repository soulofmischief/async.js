// @flow strict

/** Wait for the specified amount of time. */
export function timeoutReject( ms: number, result = true ) {
  return new Promise( resolve => setTimeout( resolve.bind( null, result ), ms ))
}
