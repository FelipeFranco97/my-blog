'use client'

import axios, { AxiosError } from 'axios'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import styles from '../login_register.module.scss'

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
      <section className={styles.section_main}>
        <form
          onSubmit={handleSubmit}
          className={styles.form_container}
        >
          {error && (
            <section className={styles.section_error}>{error}</section>
          )}
          <h1 className={styles.h1_login}>Registrate</h1>
          <label className={styles.label_credentials}>Nombre :</label>
          <input
            type='text'
            placeholder='Escribe tu nombre'
            name='fullname'
            className={styles.input_credentials}
          />
          <label className={styles.label_credentials}>Email:</label>
          <input
            type='email'
            placeholder='Escribe tu correo'
            name='email'
            className={styles.input_credentials}
          />
          <label className={styles.label_credentials}>Password:</label>
          <input
            type='password'
            placeholder='Escribe tu contraseña'
            name='password'
            className={styles.input_credentials}
          />
          <button className={styles.button_login}>Registrar</button>
        </form>
      </section>
    </>
  )
}

export default Register
