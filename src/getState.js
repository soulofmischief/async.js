// @flow strict
// Create a unique symbol/regex object for the canary promise to resolve.
const canary = typeof Symbol === 'function'
  ? Symbol( 'xxx_getState_xxx' )
  : /xxx_getState_xxx/


/**
 * Get the state of a promise.
 */
export function getState(
  promise: Promise<*>,
  cb: () => *
): 'fulfilled' | 'pending' | 'rejected' {
  // eslint-disable-next-line promise/catch-or-return
  Promise
    // If the canary promise doesn't resolve first,
    // then the first promise is already resolved.
    .race([ promise, Promise.resolve( canary )])
    .then(
      notifyPendingOrFulfilled.bind( null, cb ),
      notifyRejected.bind( null, cb ),
    )
}

function notifyPendingOrFulfilled( cb, value ) {

  if ( value === canary )
    return cb( 'pending' )
  else
    return cb( 'fulfilled' )
}

function notifyRejected( cb ) {
  return cb( 'rejected' )
}
