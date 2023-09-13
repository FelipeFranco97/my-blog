'use client'

import { useSession } from 'next-auth/react'
import { DefaultSession } from 'next-auth'
import { MidText } from '@/app/types/mid-text.type'
import styles from './MidText.module.scss'

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      fullname: string
    }
  }
}

const MidText = (props: MidText) => {
  const { data: session } = useSession()

  const userFullname = session?.user?.fullname
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h1 className={styles.h1}>
          {props.titulo} {userFullname}
          {'!'}
        </h1>
        <p className={styles.p}>{props.texto}</p>
      </article>
    </section>
  )
}

export default MidText
