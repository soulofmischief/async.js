// @flow strict
import { makePromise } from './makePromise'


export async function loop(
  condition?: () => boolean = () => true,
  cb: () => *,
  after?: () => *
) {
  const { promise, resolve } = makePromise()

  let
    delta = 0,
    prevTime = null

  // Construct loop.
  const _loop = time => {
    if ( condition()) {
      delta = time - ( prevTime ?? time )
      cb( time, delta )
      prevTime = time
      requestAnimationFrame( _loop )
    } else {
      if ( after ) after()
      resolve()
    }
  }

  // Execute.
  _loop( performance.now())

  // This promise will resolve when the loop is finished.
  return promise
}
