'use client'

import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import styles from '../login_register.module.scss'

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

    if (res?.error) {
      setError('Credenciales Incorrectas')
    } else if (res?.ok) {
      router.push('/dashboard')
    }
  }
  return (
    <section className={styles.section_main}>
      <form onSubmit={handleSubmit} className={styles.form_container}>
        {error && <section className={styles.section_error}>{error}</section>}

        <h1 className={styles.h1_login}>Inicia Sesión</h1>

        <label className={styles.label_credentials}>Email:</label>
        <input
          type='email'
          placeholder='Escribe tu correo'
          name='email'
          className={styles.input_credentials}
        />

        <label className={styles.label_credentials}>Contraseña:</label>
        <input
          type='password'
          placeholder='Escribe tu contraseña'
          name='password'
          className={styles.input_credentials}
        />

        <button className={styles.button_login}>
          Iniciar Sesión
        </button>
      </form>
    </section>
  )
}

export default Login
