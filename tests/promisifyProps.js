import o from 'ospec'
import { promisifyProps, resolveProps } from '../index.js'


const
  // Deep equals doesn't work on promises, so instead we wrap
  // promisifyProps() in resolveProps() and compare two separate objects.
  obj1 = { a: 1, b: { c: 2, d: { e: 3, f: 4, }, }, g: [ 4, 5, ]},
  obj2 = {
    a: Promise.resolve( 1 ),
    b: {
      c: Promise.resolve( 2 ),
      d: {
        e: Promise.resolve( 3 ),
        f: Promise.resolve( 4 ),
      },
    },
    g: [
      Promise.resolve( 4 ),
      Promise.resolve( 5 ),
    ]
  }

o( 'promisifyProps', async () => {
  o( await resolveProps( promisifyProps( obj1 )))
    .deepEquals( await resolveProps( obj2 ))
})
