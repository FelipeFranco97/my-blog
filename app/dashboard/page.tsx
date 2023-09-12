'use client'

import { useSession, signOut } from 'next-auth/react'
import styles from './dashboard.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Dashboard = () => {
  const data = useSession()

  console.log(data)
  return (
    <>
      <h1 className={styles.h1}>¿Qué ruta elegirás hoy?</h1>
      <section className={styles.section_route}>
        <section className={styles.section_item}>
          <Link href='./components/introduccion'>
            <Image
              src='/introduction.jpg'
              alt=''
              width={600}
              height={300}
              className={styles.article_background}
            />
            <article className={styles.article_titulo}>
              <p className={styles.p}>Introducción</p>
            </article>
            <article className={styles.article_content}>
              ¿Qué es el desarrollo web, ¿Cómo empezar?, ¿Cómo funciona el
              internet?
            </article>
          </Link>
        </section>

        <section className={styles.section_item}>
          <Image
            src='/tools.jpg'
            alt=''
            width={600}
            height={300}
            className={styles.article_background}
          />
          <article className={styles.article_titulo}>
            <p className={styles.p}>Herramientas</p>
          </article>
          <article className={styles.article_content}>
            Próximamente
          </article>
        </section>

        <section className={styles.section_item}>
          <Image
            src='/git.jpg'
            alt=''
            width={600}
            height={300}
            className={styles.article_background}
          />
          <article className={styles.article_titulo}>
            <p className={styles.p}>Control de Versiones</p>
          </article>
          <article className={styles.article_content}>
           Próximamente
          </article>
        </section>

        <section className={styles.section_item}>
          <Image
            src='/frontend.jpg'
            alt=''
            width={600}
            height={300}
            className={styles.article_background}
          />
          <article className={styles.article_titulo}>
            <p className={styles.p}>Front-End</p>
          </article>
          <article className={styles.article_content}>
            Próximamente
          </article>
        </section>

        <section className={styles.section_item}>
          <Image
            src='/backend.jpg'
            alt=''
            width={600}
            height={300}
            className={styles.article_background}
          />
          <article className={styles.article_titulo}>
            <p className={styles.p}>Backend</p>
          </article>
          <article className={styles.article_content}>
            Próximamente
          </article>
        </section>
      </section>

      {/* // <button
    //   className='bg-zinc-800 px-4 py-2 block mb-2'
    //   onClick={() => {
    //     signOut()
    //   }}
    // >
    //   Salir
    // </button> */}
    </>
  )
}

export default Dashboard
