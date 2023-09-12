'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

const Dashboard = () => {
  const data = useSession()

  console.log(data)
  return (
    <>
      <main className='pt-20'>
        <h1 className='flex justify-center font-bold text-3xl text-light-coral-red'>
          Rutas
        </h1>

        <section className='flex flex-row text-center  pt-10'>
          <h2 className='text-light-coral-red flex-1'>
            <Link href='/components/introduccion'>Introducción</Link>
          </h2>
          <h2 className='text-light-coral-red flex-1'>
            <Link href='/components/frontend'>Front-End</Link>
          </h2>
          <h2 className='text-light-coral-red flex-1'>
            <Link href='/components/backend'>Back-End</Link>
          </h2>
        </section>
        <button
          className='bg-zinc-800 px-4 py-2 block mb-2'
          onClick={() => {
            signOut()
          }}
        >
          Salir
        </button> 
      </main>
    </>
  )
}

export default Dashboard
