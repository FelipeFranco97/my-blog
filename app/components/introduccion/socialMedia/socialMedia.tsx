import { SocialMedia } from '@/app/types/social-media.type'
import Image from 'next/image'
import styles from './socialMedia.module.scss'
const SocialMedia = (props: SocialMedia) => {
  return (
    <>
      <section className={styles.section_container_texto}>
        <article className={styles.article_texto}>{props.texto}</article>
      </section>
      <section className={styles.section_container_info}>
        <article className={styles.article_container_image}>
          <Image
            src={props.url}
            alt=''
            width={100}
            height={100}
            className={styles.image_profile}
          />
        </article>
        <article className={styles.article_container_info}>
          <p className={styles.p_titulo}>{props.titulo}</p>
          <article className={styles.article_container_icon}>
            {props.icon.map((icon, index) => (
              <a target="_blank" key={index} href={icon.website}>
                <Image
                  key={index}
                  src={icon.url}
                  alt=''
                  width={30}
                  height={30}
                  className={styles.image_icon}
                />
              </a>
            ))}
          </article>
        </article>
      </section>
    </>
  )
}

export default SocialMedia
