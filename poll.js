import { timeout } from './timeout.js'


/**
 * Polls a callback function until it returns a truthy value.
 * @param {Function} cb Callback function to poll.
 * @param {number} t Polling interval in milliseconds.
 * @returns {Promise} Promise that resolves to the return value of the callback.
 */
export async function poll( cb, t = 100 ) {
  let result = cb()

  while ( !result ) {
    await timeout( t )
    result = cb()
  }

  return result
}
