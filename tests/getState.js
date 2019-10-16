import o from 'ospec'
import { getState } from '../src'

const p = new Promise( resolve => setTimeout( resolve, 1000 ))


o( 'getState', async function () {

  o( getState( p )).equals( 'pending' )
})
