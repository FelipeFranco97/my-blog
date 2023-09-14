'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { DefaultSession } from 'next-auth'
import styles from './Nav.module.scss'

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
    <>
      {session && (
        <>
          <nav className={styles.nav}>
            <Link className={styles.h1} href='/'>CodeChronicles</Link>
            <Link className={styles.link} href='/dashboard'>
              {userFullname}
            </Link>
          </nav>
          <hr className={styles.hr} />
        </>
      )}

      {!session && (
        <>
          <nav className={styles.nav}>
            <h1 className={styles.h1}>CodeChronicles</h1>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href='/'>Iniciar Sesión</Link>
              </li>
              <li className={styles.li}>
                <Link href='/register'>Registrate</Link>
              </li>
            </ul>
          </nav>
          <hr className={styles.hr} />
        </>
      )}
    </>
  )
}

export default Navbar
