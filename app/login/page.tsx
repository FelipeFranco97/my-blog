'use client'

import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })

    if (res?.error) setError(res.error as string)

    if (res?.ok) return router.push('/dashboard')
  }
  return (
    <main className='justify-center flex pt-32'>

      <form onSubmit={handleSubmit} className='bg-light-coral-red px-8 py-10 w-3/12 rounded-xl '>

        {error && <div className='bg-deep-blue text-light-coral-red p-2 mb-7 rounded-lg text-center'>{error}</div>}

        <h1 className='text-4xl font-bold mb-7 text-beige text-center'>Inicia Sesión</h1>

        <label className='text-beige font-bold'>Email:</label>
        <input
          type='email'
          placeholder='Escribe tu correo'
          name='email'
          className='bg-zinc-800 text-beige px-4 py-2 block mb-7 w-full rounded-lg'
        />

        <label className='text-beige font-bold'>Contraseña:</label>
        <input
          type='password'
          placeholder='Escribe tu contraseña'
          name='password'
          className='bg-zinc-800 text-beige px-4 py-2 block mb-7 w-full rounded-lg'
        />

        <button className='bg-deep-blue text-light-coral-red font-bold px-4 py-2 block w-full mt-4 rounded-lg'>
          Iniciar Sesión
        </button>

      </form>
    </main>
  )
}

export default Login
