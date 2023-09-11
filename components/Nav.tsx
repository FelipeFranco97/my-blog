'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
    interface Session {
      user: DefaultSession['user'] & {
        fullname: string;
      };
    }
  }

function Navbar() {
  const { data: session } = useSession()

  const userFullname = session?.user?.fullname


  return (
    <main>
      <nav className='flex flex-row justify-between items-center m-5'>
        <div className='flex-1'></div>
        <h1 className='font-bold text-xl text-turquoise flex-1 text-center'>Mi TechWeb</h1>
        {session && (
          <section className='flex-1 text-right'>
            <Link href='/dashboard'>{userFullname}</Link>
          </section>
        )}
      </nav>
      {!session && (
        <section>
          <button className='text-turquoise transition-colors duration-300 ease-in-out hover:bg-gold'>
            <Link href='/'>Iniciar Sesión</Link>
          </button>
          <button className='text-turquoise transition-colors duration-300 ease-in-out hover:bg-gold'>
            <Link href='/register'>Registrate</Link>
          </button>
        </section>
      )}
    </main>
  )
}

export default Navbar
