'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      fullname: string
    }
  }
}

function Navbar() {
  const { data: session } = useSession()

  const userFullname = session?.user?.fullname

  return (
    <main>
      {session && (
        <nav className='flex flex-row justify-between items-center m-4'>
          <div className='flex-1'></div>
          <h1 className='font-bold text-xl text-light-coral-red flex-1 text-center'>
            Mi TechWeb
          </h1>

          <section className='flex-1 text-right text-light-coral-red transition-all duration-75 ease-in-out hover:font-bold'>
            <Link href='/dashboard'>{userFullname}</Link>
          </section>
        </nav>
      )}

      {!session && (
        <nav className='flex flex-row justify-between items-center m-4'>
          <div className='flex-1'></div>
          <h1 className='font-bold text-xl text-light-coral-red flex-1 text-center'>
            Mi TechWeb
          </h1>
          <ul className='flex flex-1 gap-x-2 justify-end text-light-coral-red'>
            <li className='px-5 transition-all duration-75 ease-in-out hover:font-bold'>
              <Link href='/'>Iniciar Sesión</Link>
            </li>
            <li className='px-5 transition-all duration-75 ease-in-out hover:font-bold'>
              <Link href='/register'>Registrate</Link>
            </li>
          </ul>
        </nav>
      )}
    </main>
  )
}

export default Navbar
