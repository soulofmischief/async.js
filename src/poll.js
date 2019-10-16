// @flow strict
import { timeout } from './timeout'


export async function poll( cb, t ) {
  await timeout( t )
  if ( cb()) return true
  else return await poll( cb, t )
}
