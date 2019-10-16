import o from 'ospec'
import { promisifyProps, resolveProps } from '../src'


const
  t = { a: 1, b: { a: 2, b: 3 }}

o( 'resolveProps', async function () {
  o( await resolveProps( await promisifyProps( t ))).deepEquals( t )
})
