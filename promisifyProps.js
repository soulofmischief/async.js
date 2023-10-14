import { changeValues } from '@soulofmischief/js-utils'
import { isObject } from '@soulofmischief/js-utils'
import { isPromise } from './isPromise.js'


/**
 * Recursively wrap each property in a promise.
 * @param {Object} o Object to promisify.
 * @returns {Promise} Promise that resolves to the promisified object.
 */
export function promisifyProps( o ) {
  if ( Array.isArray( o ))
    return o.map( x => promisifyProps( x ))

  if ( isObject( o ) && !isPromise( o ))
    return changeValues( o, v => promisifyProps( v ))

  return Promise.resolve( o )
}
