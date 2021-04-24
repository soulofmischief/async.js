import o from 'ospec'
import { timeoutReject } from '../src'

const time = 10

o.spec( 'timeoutReject', () => {
  o( 'waits for correct amount of time', async () => {
    let result = false
    setTimeout(() => result = true, time )
    await timeoutReject( time ) && o( result ).equals( true )
  })

  o( 'returns true by default', async () => {
    o( await timeoutReject( time )).equals( true )
  })

  o( 'returns second parameter', async () => {
    o( await timeoutReject( time, 'test' )).equals( 'test' )
  })
})
