import { HeroBannerIntroduccion } from '@/app/types/hero-banner.type'
import { MidText } from '@/app/types/mid-text.type'
import { Information } from '@/app/types/information.type'

export const heroBannerIntroduccion: HeroBannerIntroduccion[] = [
  {
    titulo: 'Introducción',
    url: '/introduction_banner.jpg',
    credits: 'Photo by Farzad on Unsplash',
  },
]

export const midText: MidText[] = [
  {
    titulo: '¡Hola ',
    texto:
      'Este es el inicio de una guía que empecé como un proyecto para mi mismo, en el que quiero escribir y documentar todo lo que he aprendido a través de mis años como ingeniero. Está guía está enfocada en el desarrollo web y tocaré desde los temas más básicos hasta conceptos un poco más avanzados. Tal vez esta guía le llegue a alguien que esté aprendiendo o que quiera reforzar sus conocimientos, sea quien sea espero que lo disfrute y aprenda.',
  },
]

export const information: Information[] = [
  {
    url: '/nuevas/introduction.jpg',
    titulo: '¿Qué es?',
    texto: (
      <>
        <p>
          El desarrollo web es el proceso de construcción y mantenimiento de
          sitios web que son accesibles a través de internet, este proceso de
          construcción implica el diseño, la programación, las pruebas y la
          optimización para garantizar que los usuarios tengan una experiencia
          eficiente al interactuar con el sitio web en cuestion.
        </p>
      </>
    ),
    dato: 'El primer sitio web del mundo se creó en 1991 por Tim Berners-Lee y todavía puedes visitarlo en su forma original. Puedes visitarlo acá http://info.cern.ch',
    credits: 'Image by pressfoto on Freepik',
    junto: false,
  },
  {
    url: '/nuevas/web.jpg',
    titulo: 'La Web',
    texto: (
      <>
        <p>
          La Web (World Wide Web) es una sistema de información global y público
          en línea que permite a la spersonas acceder y compartir documentos,
          imágenes y recursos multimedia a través de enlaces.
        </p>
        <br />
        <p>El núcleo de la web se basa en tres componentes clave:</p>
        <ul>
          <li>
            <strong>URLs (Localizador Uniforme de Recursos)</strong>: Son
            direcciones que identifican recursos en línea, como sitios web o
            archivos.
          </li>
          <li>
            <strong>HTTP (Protocolo de Transferencia de Hipertexto)</strong>: Es
            el protocolo que permite la transferencia de datos a través de la
            web.
          </li>
          <li>
            <strong>HTML (Lenguaje de Marcado de Hipertexto)</strong>: Es el
            lenguaje utilizado para crear documentos web y definir la estructura
            y el contenido de las páginas.
          </li>
        </ul>
      </>
    ),
    dato: 'La cantidad de sitios web en Internet supera los mil millones y sigue creciendo constantemente.',
    credits: 'Photo by NASA on Unsplash',
    junto: false,
  },
  {
    url: '/nuevas/internet.jpg',
    titulo: 'Internet',
    texto: (
      <>
        <p>
          Para ser desarrolladores web no hay necesidad de saber sobre
          telecomunicaciones o al menos volvernos expertos en ello ya que para
          eso están los Ingenieros de Telecomunicaciones, pero debemos de
          aprender lo básico y acá te lo voy a explicar.
        </p>
        <br />
        <p>
          Podemos pensar en Internet como una red global de comunicación que
          conecta computadoras y sistemas de todo el mundo. En esta red, los
          datos se dividen en paquetes y viajan de un lugar a otro a través de
          routers y servidores. Para asegurarse de que estos paquetes lleguen a
          su destino correcto, cada dispositivo tiene su propia dirección única,
          llamada dirección IP. De esta manera, los datos pueden ser
          transmitidos y recibidos de manera efectiva. Para que estos datos se
          transmitan de manera confiable se utilizan un conjunto de reglas
          llamado Protocolo de Control de Transmisión/Protocolo de Internet
          (TPC/IP).
        </p>
      </>
    ),
    dato: '',
    credits: 'Photo by Markus Spiske on Unsplash',
    junto: true,
  },
  {
    url: '/nuevas/browser.jpg',
    titulo: '',
    texto: (
      <>
        <p>
          Si bien TCP/IP es la base de la infraestructura de Internet y se
          encarga de la transmisión de datos en la red de manera confiable y
          eficiente, hay un protocolo que encarga exclusivamente de la
          transferencia de documentos web y se utiliza cada vez se accede a
          sitios web a través del navegador, y se llama HTTP (Protocolo de
          Transferencia de Hipertexto).
        </p>
        <br />
        <p>
          Para terminar con este resumen rápido de internet, tenemos a los
          navegadores (Chrome, Firefox, Opera, Brave), que son aplicaciones que
          nos permiten navegar y acceder a sitios web, estos navegadores
          descargan los archivos que contenga dicho sitio y lo interpretan para
          mostrar la página en la pantalla. Cabe resaltar el uso de las cookies
          y sesiones, las cuales almacenan información como el inicio de sesión
          en sitios web para no tener que volver a iniciar sesión cada vez que
          se visita ese sitio. Por último pero no menos importante tenemos los
          motores de búsqueda (Google, Bing, DuckDuckGo) que son los que nos
          permitirán la búsqueda de información por internet.
        </p>
      </>
    ),
    dato: '',
    credits: 'Photo by Deepanker Verma',
    junto: false,
  },
]
