// @flow strict
import { timeout } from './timeout'


export async function poll( cb, t = 100 ) {
  await timeout( t )
  return cb() || await poll( cb, t )
}
