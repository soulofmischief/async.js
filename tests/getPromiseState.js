import o from 'ospec'
import { getPromiseState } from '../src'


const
  rejected = Promise.reject( 'Oops!' ),
  resolvesNow = Promise.resolve(),

  resolvesLater = new Promise( resolve =>
    setTimeout( resolve, 1000 )
  )


o.spec( 'getState', () => {

  o( 'fulfilled', done => {
    getPromiseState( resolvesNow,
      state => {
        o( state ).equals( 'fulfilled' )
        done()
      }
    )
  })

  o( 'pending', done => {
    getPromiseState( resolvesLater,
      state => {
        o( state ).equals( 'pending' )
        done()
      }
    )
  })

  o( 'rejected', done => {
    getPromiseState( rejected,
      state => {
        o( state ).equals( 'rejected' )
        done()
      }
    )
  })
})


rejected.catch( e => e )
