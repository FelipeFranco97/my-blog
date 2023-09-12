import Link from 'next/link'

const Frontend = () => {
  return (
    <>
      <section className='bg-beige text-onyx py-5 px-5 rounded-xl w-1/2 mx-auto'>
        <article>
          <h1 className='font-bold text-2xl text-center'>¿Qué es Front-end?</h1>
          <br />
          <p>
            El front-end es la parte del sitio web con la que los usuarios
            pueden interactuar y que es visible en sus dispositivos, también se
            le conoce como
            <strong> &apos;el lado del cliente&apos;</strong>.
            <br />
            Existen 3 tecnologías que trabajan de la mano para desarrollar
            front-end:
            <strong> HTML, CSS y JavaScript</strong>.
          </p>
        </article>
      </section>
      <section className='text-deep-blue mt-10 rounded-xl w-1/2 mx-auto flex flex-row gap-5 justify-between'>
        <article className="bg-light-coral-red py-5 px-5 rounded-xl w-1/4 text-center font-bold">
          <Link href='/'>HTML</Link>
        </article>
        <article className="bg-light-coral-red py-5 px-5 rounded-xl w-1/4 text-center font-bold">CSS</article>
        <article className="bg-light-coral-red py-5 px-5 rounded-xl w-1/4 text-center font-bold">JavaScript</article>
      </section>
    </>
  )
}

export default Frontend
