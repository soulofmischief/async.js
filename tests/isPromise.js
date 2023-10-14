import o from 'ospec'
import { isPromise } from '../index.js'


const
  x = 1,
  y = Promise.resolve( x )


o.spec( 'isPromise', () => {
  o( 'identifies promise', () => {
    o( isPromise( y )).equals( true )
  })

  o( 'identifies non-promise', () => {
    o( isPromise( x )).equals( false )
  })
})
