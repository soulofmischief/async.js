import o from 'ospec'
import { promisifyProps, resolveProps } from '../index.js'


const obj = { a: 1, b: { c: 2, d: { e: 3, f: 4, }, }, g: [ 4, 5, ]}


o( 'resolveProps', async () => {
  o( await resolveProps( await promisifyProps( obj ))).deepEquals( obj )
})
