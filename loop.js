import { makePromise } from './makePromise.js'


/**
 * A simple loop that calls a callback function on each frame.
 * @param {function} condition A function that returns true to continue looping.
 * @param {function} cb A callback function that is called on each frame.
 * @param {function} after A callback function that is called after the loop is
 * finished.
 * @returns {Promise} A promise that resolves when the loop is finished.
 */
export async function loop( condition, cb, after ) {
  const { promise, resolve } = makePromise()

  let
    delta = 0,
    prevTime = null

  // Construct loop.
  const _loop = async time => {
    if ( condition()) {
      delta = time - ( prevTime ?? time )
      await cb( time, delta )
      prevTime = time
      requestAnimationFrame( _loop )
    } else {
      if ( after ) after( time )
      resolve()
    }
  }

  // Execute.
  _loop( performance.now())

  // This promise will resolve when the loop is finished.
  return promise
}
