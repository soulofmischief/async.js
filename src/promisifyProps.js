// @flow strict
import { isObject, isPromise, zip } from '@soulofmischief/js-utils'

/**
 * Recursively wrap each property in a promise.
 */
export function promisifyProps( o ) {
  return zip(
    Object.keys( o ),
    Object.values( o ).map( v => {
      if ( isObject( v ) && !isPromise( v ))
        return promisifyProps( v )

      else return Promise.resolve( v )
    })
  )
}
