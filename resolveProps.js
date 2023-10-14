import { changeValuesAsync } from '@soulofmischief/js-utils'
import { isPlainObject } from 'lodash-es'


/**
 * Recursively resolve each property to its value.
 * Replaces promises with their returned value and doesn't resolve until
 * all properties are finished resolving.
 * @param {Object} o Object to resolve
 * @returns {Promise<Object>} Resolved object
 */
export async function resolveProps( o ) {
  return await changeValuesAsync( o, async val => {
    const v = await val

    if ( Array.isArray( v ))
      return Promise.all( v )

    else if ( isPlainObject( v ))
      return await resolveProps( v )

    return v
  })
}
