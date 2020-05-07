// @flow strict
import { changeValues, isObject } from '@soulofmischief/js-utils'
import { isPromise } from './isPromise'


/**
 * Recursively wrap each property in a promise.
 */
export function promisifyProps( o ) {

  if ( Array.isArray( o ))
    return o.map( x => promisifyProps( x ))

  if ( isObject( o ) && !isPromise( o ))
    return changeValues( o, v => promisifyProps( v ))

  return Promise.resolve( o )
}
