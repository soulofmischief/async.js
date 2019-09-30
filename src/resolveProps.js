// @flow strict
import { isPlainObject } from 'lodash'
import { zip } from '@soulofmischief/js-utils'


export async function resolveProps( o ) {
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
