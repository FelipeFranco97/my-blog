import { HeroBannerIntroduccion } from '@/app/types/hero-banner.type'
import Image from 'next/image'
import styles from './heroBanner.module.scss'

const HeroBanner = (props: HeroBannerIntroduccion) => {
  return (
    <>
      <section className={styles.section}>
        <Image
          src={props.url}
          alt=''
          width={600}
          height={300}
          className={styles.image}
        />

        <article className={styles.article}>
          <h1 className={styles.h1}>{props.titulo}</h1>
          <p className={styles.p}>{props.credits}</p>
        </article>
      </section>
    </>
  )
}

export default HeroBanner
