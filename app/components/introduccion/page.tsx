'use client'

import { useSession } from 'next-auth/react'
import { DefaultSession } from 'next-auth'
import Link from 'next/link'

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      fullname: string
    }
  }
}

const Introduccion = () => {
  const { data: session } = useSession()

  const userFullname = session?.user?.fullname
  return (
    <>
      <section className='flex justify-center items-center text-light-coral-red'>
        <article className='flex-1 text-6xl font-bold items-center text-center m-5%'>
          Introducción
        </article>

        <article className='p-8 flex-1 text-deep-blue bg-beige rounded-md m-5%'>
          <h2 className='p-8 font-bold text text-center text-2xl'>
            ¡Hola {userFullname}!
          </h2>
          Este es el inicio de una guía que empecé como un proyecto para mi
          mismo, en el que quiero escribir y documentar todo lo que he aprendido
          a través de mis años como ingeniero. Está guía está enfocada en el
          desarrollo web y tocaré desde los temas más básicos hasta conceptos un
          poco más avanzados. Tal vez esta guía le llegue a alguien que esté
          aprendiendo o que quiera reforzar sus conocimientos, sea quien sea
          espero que lo disfrute y aprenda.
        </article>
      </section>

      <section className='flex justify-center items-center text-light-coral-red'>
        <article className='p-8 flex-1 text-deep-blue bg-beige rounded-md m-5%'>
          <h2 className='p-8 font-bold text text-center text-2xl'>¿Qué es?</h2>
          El desarrollo web es el proceso de construcción y mantenimiento de
          sitios web que son accesibles a través de internet, este proceso de
          construcción implica el diseño, la programación, las pruebas y la
          optimización para garantizar que los usuarios tengan una experiencia
          eficiente al interactuar con el sitio web en cuestion.
        </article>

        <article className='flex-1 text-6xl font-bold items-center text-center m-5%'>
          ¿Qué es?
        </article>
      </section>

      <section className='flex justify-center items-center text-light-coral-red'>
        <article className='flex-1 text-6xl font-bold items-center text-center m-5%'>
          ¿Cómo comenzar?
        </article>

        <article className='p-8 flex-1 text-deep-blue bg-beige rounded-md m-5%'>
          <h2 className='p-8 font-bold text text-center text-2xl'>
            Editor de Código
          </h2>
          Un editor de código es una herramienta diseñada específicamente para
          escribir, editar y gestionar el código de los programas que creemos.
          Los editores de texto como el block de notas también nos sirven para
          escribir código, pero no contará con las características más
          importantes que si tienen los editores de código:
          <ul>
            <br />
            <li>
              <strong>Sintaxis Resaltada: </strong>Los editores de código
              resaltan el código con colores que facilitará la lectura y la
              identificación de errores.
            </li>
            <li>
              <strong>Autocompletado: </strong>También ofrecen sugerencias
              automáticas de código a medida que escribes.
            </li>
            <li>
              <strong>Gestión de Proyectos: </strong>Permiten organizar y
              gestionar proyectos de desarrollo de software, lo que incluye la
              capacidad de abrir y trabajar en múltiples archivos y directorios.
            </li>
            <li>
              <strong>Extensiones y complementos: </strong>Muchos editores de
              código permiten la instalación de extensiones y complementos que
              amplían su funcionalidad, lo que les permite adaptarse a las
              necesidades específicas del programador.
            </li>
            <li>
              <strong>Personalización: </strong>Los programadores pueden
              personalizar la apariencia y el comportamiento del editor según
              sus preferencias.
            </li>
          </ul>
          <br />
          Existen múltiples editores de código, tales como
          <a href='https://www.sublimetext.com/'>
            {' '}
            <strong>Sublime Text</strong>
          </a>
          ,
          <a href='https://brackets.io/'>
            {' '}
            <strong>Brackets</strong>
          </a>
          ,{' '}
          <a href='https://www.vim.org/'>
            {' '}
            <strong>Vim</strong>
          </a>{' '}
          para desarrolladores experimentados, pero el que yo recomiendo es
          <a href='https://code.visualstudio.com/'>
            {' '}
            <strong>Visual Studio Code (VSCode)</strong>
          </a>
          , es altamente personalizable y cuenta con miles de extensiones que
          pueden hacer que el desarrollo del código sea mucho más cómodo. No
          confundir con{' '}
          <a href='https://visualstudio.microsoft.com/es/'>
            {' '}
            <strong>Microsoft Visual Studio</strong>.
          </a>
        </article>
      </section>

      <section className='flex justify-center items-center text-light-coral-red'>
        <article className='p-8 flex-1 text-deep-blue bg-beige rounded-md m-5%'>
          <h2 className='p-8 font-bold text text-center text-2xl'>
            Internet y lo Básico
          </h2>
          Para ser desarrolladores web no hay necesidad de saber sobre
          telecomunicaciones o al menos volvernos expertos en ello ya que para
          eso están los Ingenieros de Telecomunicaciones, pero debemos de
          aprender lo básico y acá te lo voy a explicar.
          <br />
          <br />
          Podemos pensar en Internet como una red global de comunicación que
          conecta computadoras y sistemas de todo el mundo. En esta red, los
          datos se dividen en paquetes y viajan de un lugar a otro a través de
          routers y servidores. Para asegurarse de que estos paquetes lleguen a
          su destino correcto, cada dispositivo tiene su propia dirección única,
          llamada <strong>dirección IP</strong>. De esta manera, los datos
          pueden ser transmitidos y recibidos de manera efectiva. Para que estos
          datos se transmitan de manera confiable se utilizan un conjunto de
          reglas llamado{' '}
          <strong>
            Protocolo de Control de Transmisión/Protocolo de Internet (TPC/IP)
          </strong>
          .
          <br />
          <br />
          Si bien TCP/IP es la base de la infraestructura de Internet y se
          encarga de la transmisión de datos en la red de manera confiable y
          eficiente, hay un protocolo que encarga exclusivamente de la
          transferencia de documentos web y se utiliza cada vez se accede a
          sitios web a través del navegador, y se llama{' '}
          <strong>HTTP (Protocolo de Transferencia de Hipertexto)</strong>.
          <br />
          <br />
          Para terminar con este resumen rápido de internet, tenemos a los
          <strong> navegadores</strong> (Chrome, Firefox, Opera, Brave), que son
          aplicaciones que nos permiten navegar y acceder a sitios web, estos
          navegadores descargan los archivos que contenga dicho sitio y lo
          interpretan para mostrar la página en la pantalla. Cabe resaltar el
          uso de las <strong> cookies y sesiones</strong>, las cuales almacenan
          información como el inicio de sesión en sitios web para no tener que
          volver a iniciar sesión cada vez que se visita ese sitio. Por último
          pero no menos importante tenemos los{' '}
          <strong> motores de búsqueda</strong> (Google, Bing, DuckDuckGo) que
          son los que nos permitirán la busqueda de información por internet.
        </article>

        <article className='flex-1 text-6xl font-bold items-center text-center m-5%'>
          ¿Cómo funciona Internet?
        </article>
      </section>
      <section className='text-xl text-center text-light-coral-red m-10%'>
        <p>
          Todas las secciones de esta guía se irán actualizando con el
          transcurso del tiempo, por ahora dejaremos la introducción y
          seguiremos en la parte de Front-End, suerte!
        </p>
      </section>
      <section className='flex justify-center gap-10'>
        <button className='bg-beige p-3 rounded-md'>
          <Link href='/'>Regresar</Link>
        </button>
        <button className='bg-beige p-3 rounded-md'>
          <Link href='/components/frontend'>Front-End</Link>
        </button>
      </section>
    </>
  )
}

export default Introduccion
