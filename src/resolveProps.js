// @flow strict
import { changeValuesAsync } from '@soulofmischief/js-utils'
import { isPlainObject } from 'lodash'





/**
 * Recursively resolve each property to its value.
 * Replaces promises with their returned value and doesn't resolve until
 * all properties are finished resolving.
 */
export async function resolveProps( o: Object ): Promise<*> {
  return await changeValuesAsync( o, async val => {
    const v = await val

    if ( Array.isArray( v ))
      return Promise.all( v )

    else if ( isPlainObject( v ))
      return await resolveProps( v )

    return v
  })
}
