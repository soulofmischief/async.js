// @flow strict

/** Wait for a series of async functions to resolve in order. */
export async function wait( ...args: Array<() => *> ) {
  for ( const f of args ) await f()
}
