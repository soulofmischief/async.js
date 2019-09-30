import o from 'ospec'
import { promisifyProps, resolveProps } from '../src'


const
  t = { a: 1, b: { a: 2, b: 3 }},
  t2 = promisifyProps( t )


o( 'resolveProps', async function () {
  o( await resolveProps( await t2 )).deepEquals( t )
})
