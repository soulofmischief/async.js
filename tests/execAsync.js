import o from 'ospec'
import { execAsync, timeout } from '../src'


o.spec( 'execAsync', () => {
  o( 'resolves when all arguments are called.', async () => {
    let x = null

    const
      f1 = async () => { await timeout( 10 ); x = false; return false },
      f2 = async () => { await timeout( 20 ); x = true; return true }

    await execAsync( f1, f2 )

    o( x ).equals( true )
  })
})
