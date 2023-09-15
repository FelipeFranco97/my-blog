import { HeroBannerIntroduccion } from '@/app/types/hero-banner.type'
import Image from 'next/image'
import styles from './heroBanner.module.scss'

const HeroBanner = (props: HeroBannerIntroduccion) => {
  return (
    <>
      <section className={styles.section_main}>
        <section className={styles.section_container}>
          <article className={styles.article_background}>
            <Image
              src={props.url}
              alt=''
              width={600}
              height={300}
              className={styles.image_background}
            />
            <article className={styles.article_credits}>
              <p className={styles.p_credits}>{props.credits}</p>
            </article>
          </article>
        </section>
        <article className={styles.article_titulo}>{props.titulo}</article>
      </section>
    </>
  )
}

export default HeroBanner
