import Head from "next/head";

import styles from "./_styles.module.css";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import MockupService from "../../share-utilities/services/_mockup_service";
import Footer from "../../components/footer/component";

function CookiesPolicy(props) {
  return (
    <main className="page">
      <Head>
        <title>Política de cookies - cristalvision.online</title>
        <meta name="description" content="" />
      </Head>
      <Header allCategories={props.categoriesList}/>
      <TitleCreadCrumbs title={"Política de cookies"} breadCrumbs={[]} />
      <div className="page_body">
        <p className="page_body_paragraph">
          Si quieres saber más sobre el uso de cookies que realiza este sitio
          web https://cristalvision.online, estás en el lugar indicado. A
          continuación, vamos a explicarte qué son exactamente las cookies; qué
          tipo de cookies utilizamos y para qué; y cómo puedes ejercer tu
          derecho para configurar tu navegador y desestimar el uso de cualquiera
          de ellas.
        </p>

        <p className="page_body_paragraph">
          Eso sí, debes saber, que si decides no utilizar algunas cookies, este
          sitio web puede no funcionar perfectamente, afectando a tu experiencia
          de usuario.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Qué es una cookie</h2>
        </div>

        <p className="page_body_paragraph">
          Una cookie es un fichero que se descarga en tu ordenador al acceder a
          determinadas páginas web o blogs.
        </p>

        <p className="page_body_paragraph">
          Las cookies permiten a esa página, entre otras cosas, almacenar y
          recuperar información sobre tus hábitos de navegación o de tu equipo,
          y dependiendo de la información que contengan y de la forma en que
          utilices tu equipo, pueden utilizarse para reconocerte.
        </p>

        <p className="page_body_paragraph">
          El navegador del usuario memoriza cookies en el disco duro solamente
          durante la sesión actual ocupando un espacio de memoria mínimo y no
          perjudicando al ordenador. Las cookies no contienen ninguna clase de
          información personal específica, y la mayoría de las mismas se borran
          del disco duro al finalizar la sesión de navegador (las denominadas
          cookies de sesión).
        </p>

        <p className="page_body_paragraph">
          La mayoría de los navegadores aceptan como estándar a las cookies y,
          con independencia de las mismas, permiten o impiden en los ajustes de
          seguridad las cookies temporales o memorizadas.
        </p>

        <p className="page_body_paragraph">
          Las cookies se asocian al navegador, no a la persona, por lo que no
          suelen almacenar información sensible sobre ti como tarjetas de
          crédito o datos bancarios, fotografías o información personal, etc.
          Los datos que guardan son de carácter técnico, estadísticos,
          preferencias personales, personalización de contenidos, etc.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Aceptación de cookies: normativa vigente
          </h2>
        </div>

        <p className="page_body_paragraph">
          Al acceder a este sitio web, y de acuerdo a la normativa vigente en
          materia de protección de datos, te informamos del uso de cookies,
          dándote la opción de aceptarlas expresamente y de acceder a más
          información a través de esta Política de Cookies.
        </p>

        <p className="page_body_paragraph">
          Debes saber que, en el caso de continuar navegando, estarás prestando
          tu consentimiento para el empleo de estas cookies. Pero, en cualquier
          momento, podrás cambiar de opinión y bloquear su utilización a través
          de tu navegador.
        </p>

        <p className="page_body_paragraph">
          Para tu total tranquilidad, este sitio web cumple con lo estipulado en
          la normativa vigente en relación con el uso de las cookies y tus datos
          personales:
        </p>

        <p className="page_body_paragraph">
          El reglamento LSSI-CE (Ley de la sociedad de la información y del
          comercio electrónico)
        </p>

        <p className="page_body_paragraph">
          El RGPD (Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo
          de 27 de abril de 2016 relativo a la protección de las personas
          físicas), que unifica la regulación del tratamiento de los datos
          personales en los países de la UE.
        </p>

        <p className="page_body_paragraph">
          Esta Política de Cookies podría modificarse en cualquier momento para
          adaptarse a novedades normativas o cambios en nuestras actividades,
          siendo vigente la que en cada momento se encuentre publicada en la
          web.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Tipos de cookies</h2>
        </div>

        <p className="page_body_paragraph">
          Para poder ofrecerte una mejor experiencia de usuario, obtener datos
          analíticos, almacenar y recuperar información sobre tus hábitos de
          navegación o de tu equipo y desarrollar su actividad, este sitio web
          https://cristalvision.online, utiliza cookies propias y de terceros.
        </p>

        <div className="page_body_subtitle">
          <h3 className="subtitle_text">
            ¿Qué tipos de cookies utiliza este sitio web?
          </h3>
        </div>

        <ul>
          <li className={styles.ul_li_text}>
            Cookies técnicas: Son aquellas que permiten al usuario la navegación
            a través de una página web, plataforma o aplicación y la utilización
            de las diferentes opciones o servicios que en ella existan como, por
            ejemplo, controlar el tráfico y la comunicación de datos,
            identificar la sesión, acceder a partes de acceso restringido,
            recordar los elementos que integran un pedido, realizar el proceso
            de compra de un pedido, realizar la solicitud de inscripción o
            participación en un evento, utilizar elementos de seguridad durante
            la navegación, almacenar contenidos para la difusión de videos o
            sonido o compartir contenidos a través de redes sociales.
          </li>
          <li className={styles.ul_li_text}>
            Cookies de personalización: Son aquellas que permiten al usuario
            acceder al servicio con algunas características de carácter general
            predefinidas en función de una serie de criterios en el terminal del
            usuario como por ejemplo serian el idioma, el tipo de navegador a
            través del cual accede al servicio, la configuración regional desde
            donde accede al servicio, etc.
          </li>
          <li className={styles.ul_li_text}>
            Cookies de análisis: Son aquellas que bien tratadas por nosotros o
            por terceros, nos permiten cuantificar el número de usuarios y así
            realizar la medición y análisis estadístico de la utilización que
            hacen los usuarios del servicio ofertado. Para ello se analiza tu
            navegación en nuestra página web con el fin de mejorar la oferta de
            productos o servicios que le ofrecemos.
          </li>
          <li className={styles.ul_li_text}>
            Cookies publicitarias: Son aquellas que, bien tratadas por nosotros
            o por terceros, nos permiten gestionar de la forma más eficaz
            posible la oferta de los espacios publicitarios que hay en la página
            web, adecuando el contenido del anuncio al contenido del servicio
            solicitado o al uso que realice de nuestra página web. Para ello
            podemos analizar tus hábitos de navegación en Internet y podemos
            mostrarte publicidad relacionada con tu perfil de navegación.
          </li>
          <li className={styles.ul_li_text}>
            Cookies de publicidad comportamental: Son aquellas que permiten la
            gestión, de la forma más eficaz posible, de los espacios
            publicitarios que, en su caso, el editor haya incluido en una página
            web, aplicación o plataforma desde la que presta el servicio
            solicitado. Estas cookies almacenan información del comportamiento
            de los usuarios obtenida a través de la observación continuada de
            sus hábitos de navegación, lo que permite desarrollar un perfil
            específico para mostrar publicidad en función del mismo.
          </li>
          <li className={styles.ul_li_text}>
            Cookies de terceros: Esta web https://cristalvision.online puede
            utilizar servicios de terceros que, por cuenta de Google,
            recopilarán información con fines estadísticos, de uso del sitio por
            parte del usuario y para la prestación de otros servicios
            relacionados con la actividad del sitio web y otros servicios de
            Internet.
          </li>
        </ul>

        <p className="page_body_paragraph">
          En particular, este sitio web utiliza Google Analytics, un servicio
          analítico de web prestado por Google, Inc. con domicilio en los
          Estados Unidos con sede central en 1600 Amphitheatre Parkway, Mountain
          View, California 94043. Para la prestación de estos servicios, Google
          utiliza cookies que recopilan la información, incluida la dirección IP
          del usuario, que será transmitida, tratada y almacenada por Google en
          los términos fijados en la web Google.com. Esto incluye la posible
          transmisión de dicha información a terceros por razones de exigencia
          legal o cuando dichos terceros procesen la información por cuenta de
          Google.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Gestionar y rechazar el uso de cookies
          </h2>
        </div>

        <p className="page_body_paragraph">
          En cualquier momento, puedes adaptar la configuración del navegador
          para gestionar, desestimar el uso de cookies y ser notificado antes de
          que se descarguen.
        </p>

        <p className="page_body_paragraph">
          También puedes adaptar la configuración de forma que el navegador
          rechace todas las cookies, o únicamente las cookies de terceros. Y
          también puedes eliminar cualquiera de las cookies que ya se encuentren
          en tu equipo.
        </p>

        <p className="page_body_paragraph">
          Google Chrome https://support.google.com/chrome/answer/95647?hl=es-419
        </p>

        <p className="page_body_paragraph">
          Internet Explorer
          https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10
        </p>

        <p className="page_body_paragraph">
          Mozilla Firefox
          https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we
        </p>

        <p className="page_body_paragraph">
          Apple Safari https://support.apple.com/es-es/HT201265
        </p>

        <p className="page_body_paragraph">
          Si tienes cualquier duda sobre esta Política de Cookies, puedes
          contactar con nosotros enviándonos un email a cristalvision.online.
        </p>
      </div>

      <Footer />
    </main>
  );
}

export default CookiesPolicy;

export async function getServerSideProps() {
  const categoriesList = await  MockupService.getAllCategories();

  return {
    props: {
      categoriesList: categoriesList,
    },
  };
}
