import { Information } from '@/app/types/information.type'
import Image from 'next/image'
import styles from './Information.module.scss'

const Information = (props: Information) => {
  return (
    <>
      <section className={`${styles.section} ${props.className ? styles.reverse : ''}`}>
        <section className={`${styles.section_info} ${props.className ? styles.section_info_reverse : ''}`}>
          <article className={styles.article_image}>
            <Image
              src={props.url}
              alt=''
              width={700}
              height={700}
              className={styles.image}
            />
            <p className={styles.p}>{props.credits}</p>
          </article>

          <article className={`${styles.article_container} ${props.className ? styles.article_container_reverse : ''}`}>
            <h2 className={styles.h2}>{props.titulo}</h2>
            <article className={styles.article_info}>{props.texto}</article>
          </article>
        </section>
      </section>
      {props.junto ? (
        <article className={styles.article_dato_true}>
          <p>{props.dato}</p>
        </article>
      ) : (
        <article className={styles.article_dato_false}>
          <p>{props.dato}</p>
        </article>
      )}
    </>
  )
}

export default Information
