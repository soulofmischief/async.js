// @flow strict

/** Wait for a series of async functions to resolve in order. */
export async function execAsync( ...funcs: Array<() => *> ) {
  return await Promise.all( funcs.map( f => f()))
}
