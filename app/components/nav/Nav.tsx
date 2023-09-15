'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { DefaultSession } from 'next-auth'
import styles from './Nav.module.scss'
import { useState } from 'react'
import { Navbar } from '@/app/types/nav.type'

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      fullname: string
    }
  }
}

function Navbar(props: Navbar) {
  const { data: session } = useSession()

  const userFullname = session?.user?.fullname

  const [dropDownMenu, setDropDownMenu] = useState(false)

  const handleMenu = () => {
    setDropDownMenu((prevState) => !prevState)
  }

  return (
    <>
      {session && (
        <>
          <nav className={styles.nav_menu}>
            <Link className={styles.h1_web_title} href='/'>
              {props.titulo}
            </Link>
            <p className={styles.link_username} onClick={handleMenu}>
              {userFullname}
            </p>
          </nav>
          <hr className={styles.hr} />

          {dropDownMenu ? (
            <article className={styles.article_container_menu}>
              <ul className={styles.ul_lista}>
                {props.menu.map((opcion, index) => {
                  if (index === 1) {
                    return (
                      <Link onClick={handleMenu} key={index} href={opcion.url}>
                        <li
                          className={styles.li_lista}
                          onClick={() => signOut()}
                        >
                          {opcion.opcion}
                        </li>
                      </Link>
                    )
                  } else {
                    return (
                      <Link onClick={handleMenu} key={index} href={opcion.url}>
                        <li className={styles.li_lista}>{opcion.opcion}</li>
                      </Link>
                    )
                  }
                })}
              </ul>
            </article>
          ) : (
            <></>
          )}
        </>
      )}

      {!session && (
        <>
          <nav className={styles.nav_menu}>
            <h1 className={styles.h1_web_title}>{props.titulo}</h1>
            <ul className={styles.ul_container}>
              {props.metodo.map((metodo, index) => (
                <li key={index}>{metodo.metodo}</li>
              ))}
            </ul>
          </nav>
          <hr className={styles.hr} />
        </>
      )}
    </>
  )
}

export default Navbar
