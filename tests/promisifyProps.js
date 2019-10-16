import o from 'ospec'
import { promisifyProps, resolveProps } from '../src'


const t = {
  a: Promise.resolve( 1 ),
  b: {
    a: Promise.resolve( 2 ),
    b: Promise.resolve( 3 ),
  },
}


o( 'promisifyProps', async function () {
  o( promisifyProps( await resolveProps( t )))
    .deepEquals( t )
})
