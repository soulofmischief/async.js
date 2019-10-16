// @flow strict
import { isPlainObject } from 'lodash'
import { zip } from '@soulofmischief/js-utils'


/**
 * Recursively resolve each property to its value.
 * Replaces promises with their returned value and doesn't resolve until
 * all properties are finished resolving.
 */
export async function resolveProps( o: Object ): Promise<*> {
  return zip(
    Object.keys( o ),
    await Promise.all(
      Object.values( o ).map( v => {
        if ( Array.isArray( v ))
          return Promise.all( v )

        else if ( isPlainObject( v ))
          return resolveProps( v )

        else return v
      })
    ),
  )
}
