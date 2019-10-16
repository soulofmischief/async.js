// @flow strict
import { makePromise } from './makePromise'


/**
 * Add two properties to an object: A promise, and a function which resolves it.
 * The promise can then be awaited, only resolving once done() is called
 * elsewhere in your code. This simplifies the process of dealing with
 * async events.
 */
export function createAsyncResolver<A,B>( o: A ): A & {
  promise: Promise<B>,
  done: () => void
} {
  Object.assign( o, makePromise())

  o.done = async function( val: * ) {
    this.resolve( val !== undefined ? val : null )
    return true
  }
}
