'use client'

import axios, { AxiosError } from 'axios'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [error, setError] = useState()
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const formData = new FormData(e.currentTarget)
      const signupResponse = await axios.post('/api/auth/signup', {
        email: formData.get('email'),
        fullname: formData.get('fullname'),
        password: formData.get('password'),
      })

      const res = await signIn('credentials', {
        email: signupResponse.data.email,
        password: formData.get('password'),
        redirect: false,
      })

      if (res?.ok) return router.push('/dashboard')
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message
        setError(errorMessage)
      }
    }
  }
  return (
    <>
      <main className='justify-center h-[calc(100vh-4rem)] flex items-center'>
        <form
          onSubmit={handleSubmit}
          className='bg-neutral-950 px-8 py-10 w-3/12'
        >
          {error && (
            <div className="bg-red-500 text-white p-2 mb-2">{error}</div>
          )}
          <h1 className="text-4xl font-bold mb-7">Registrate</h1>
          <label className="text-slate-300">Nombre :</label>
          <input
            type='text'
            placeholder='Escribe tu nombre'
            name='fullname'
            className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
          />
          <label className="text-slate-300">Email:</label>
          <input
            type='email'
            placeholder='Escribe tu correo'
            name='email'
            className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
          />
          <label className="text-slate-300">Password:</label>
          <input
            type='password'
            placeholder='Escribe tu contraseña'
            name='password'
            className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
          />
          <button className="bg-blue-500 text-white px-4 py-2 block w-full mt-4">Registrar</button>
        </form>
      </main>
    </>
  )
}

export default Register
