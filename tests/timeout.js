import o from 'ospec'
import { timeout } from '../index.js'

const time = 10

o.spec( 'timeout', () => {
  o( 'waits for correct amount of time', async () => {
    let result = false
    setTimeout(() => result = true, time )
    await timeout( time ) && o( result ).equals( true )
  })

  o( 'returns true by default', async () => {
    o( await timeout( time )).equals( true )
  })

  o( 'returns second parameter', async () => {
    o( await timeout( time, 'test' )).equals( 'test' )
  })
})
