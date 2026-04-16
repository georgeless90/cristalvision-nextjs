import Head from "next/head";

import styles from "./_styles.module.css";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import MockupService from "../../share-utilities/services/_mockup_service";
import Footer from "../../components/footer/component";

function PrivacyPolicy(props) {
  return (
    <main className="page">
      <Head>
        <title>Política de privacidad - cristalvision.online</title>
        <meta
          name="description"
          content="En esta pagina podrás leer detalladamente la POLÍTICA DE PRIVACIDAD que atañe a esta tienda online. Con los derechos y deberes que debes saber como usuario."
        />
      </Head>
      <Header allCategories={props.categoriesList}/>
      <TitleCreadCrumbs title={"Política de privacidad"} breadCrumbs={[]} />
      <div className="page_body">
        <p className="page_body_paragraph">
          Si estás aquí es porque quieres saber más sobre las obligaciones y
          derechos que te corresponden como usuario de esta web
          https://cristalvision.online y eso está muy bien. Nuestro deber es
          informarte y el tuyo estar debidamente informado.
        </p>

        <p className="page_body_paragraph">
          En esta Política de Privacidad te informaremos con total transparencia
          sobre la finalidad de este sitio web y todo lo que afecta a los datos
          que nos facilites, así como de las obligaciones y derechos que te
          corresponden.
        </p>

        <p className="page_body_paragraph">
          Para empezar, debes saber que este sitio web se adapta a la normativa
          vigente en relación con la protección de datos, lo que afecta a los
          datos personales que nos facilites con tu consentimiento expreso y a
          las cookies que utilizamos para que este sitio web funcione
          correctamente y pueda desarrollar su actividad.
        </p>

        <p className="page_body_paragraph">
          Concretamente, esta web se ajusta al cumplimiento de las siguientes
          normativas:
        </p>

        <p className="page_body_paragraph">
          El RGPD (Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo
          de 27 de abril de 2016 relativo a la protección de las personas
          físicas) que es la nueva normativa de la Unión Europea que unifica la
          regulación del tratamiento de los datos personales en los distintos
          países de la UE.
        </p>

        <p className="page_body_paragraph">
          La LOPD (Ley Orgánica 15/1999, de 13 de diciembre, de Protección de
          Datos de Carácter Personal y Real Decreto 1720/2007, de 21 de
          diciembre, el Reglamento de desarrollo de la LOPD) que regula el
          tratamiento de los datos personales y las obligaciones que debemos
          asumir los responsables de una web o un blog a la hora de gestionar
          esta información.
        </p>

        <p className="page_body_paragraph">
          La LSSI (Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
          la Información y Comercio Electrónico) que regula las transacciones
          económicas mediante medios electrónicos, como es el caso de este blog.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Datos de identificación</h2>
        </div>

        <p className="page_body_paragraph">
          El responsable y titular de este sitio web es cristalvision.online
          (En adelante cristalvision)
        </p>

        <ul>
          <li className={styles.ul_li_text}>Nombre: cristalvision</li>
          {/* <li className={styles.ul_li_text}>NIF: B-66562158</li>
          <li className={styles.ul_li_text}>
            Domicilio Social: C/ FELIP II, 279-281. 08016-BARCELONA
          </li> */}
          <li className={styles.ul_li_text}>
            Actividad del sitio web: distribución de contenido relacionado con
            gafas, lentes, anteojos, etc, muestra de publicidad, y recomendación de productos de
            afiliado.
          </li>
          <li className={styles.ul_li_text}>
            Correo electrónico: cristalvision@gmail.com
          </li>
        </ul>

        <p className="page_body_paragraph">
          Los datos que nos facilites con tu consentimiento, y de acuerdo al uso
          establecido en esta Política de Privacidad, serán incorporados a un
          fichero automatizado debidamente inscrito en la Agencia Española de
          Protección de Datos, en el que el responsable de dicho fichero es:
          cristalvision. Esto quiere decir que tus datos están seguros, de acuerdo a lo
          que establece la ley.
        </p>

        <p className="page_body_paragraph">
          Los datos personales que nos facilites, siempre con tu consentimiento
          expreso, se almacenarán y tratarán con los fines previstos y descritos
          a continuación en esta Política de Privacidad, hasta el momento en que
          nos pidas que los eliminemos.
        </p>

        <p className="page_body_paragraph">
          Te informamos de que esta Política de Privacidad puede ser modificada
          en cualquier momento, con el fin de adaptarla a novedades legislativas
          o cambios en nuestras actividades, siendo vigente la que en cada
          momento se encuentre publicada en la web. Dicha modificación se te
          notificará antes de su aplicación.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Condiciones de uso</h2>
        </div>

        <p className="page_body_paragraph">
          Debes saber, para tu tranquilidad, que siempre te solicitaremos tu
          consentimiento expreso para recabar tus datos con la correspondiente
          finalidad especificada en cada caso, lo que implica que, en caso de
          otorgar ese consentimiento, has leído y aceptado esta Política de
          Privacidad.
        </p>

        <p className="page_body_paragraph">
          En el momento en que accedas y utilices esta web, asumes tu condición
          de usuario con tus correspondientes derechos y obligaciones.
        </p>

        <p className="page_body_paragraph">
          Si eres mayor de 13 años, podrás registrarte como usuario en este
          sitio web sin el previo consentimiento de tus padres o tutores.
        </p>

        <p className="page_body_paragraph">
          Si eres menor de 13 años, necesitarás el consentimiento de tus padres
          o tutores para el tratamiento de tus datos personales.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Registro y finalidad de datos</h2>
        </div>

        <p className="page_body_paragraph">
          En función del formulario o sección a la que accedas, te solicitaremos
          exclusivamente los datos necesarios con las finalidades descritas a
          continuación. En todo momento, deberás dar tu consentimiento expreso,
          cuando te solicitemos información personal con las siguientes
          finalidades:
        </p>

        <ul>
          <li className={styles.ul_li_text}>
            Las finalidades concretas que particularmente se indiquen en cada
            una de las páginas o secciones donde aparezca el formulario de
            registro o contacto electrónico.
          </li>
          <li className={styles.ul_li_text}>
            Con carácter general, para atender tus solicitudes, comentarios,
            consultas o cualquier tipo de petición que realices como usuario a
            través de cualquiera de las formas de contacto que ponemos a tu
            disposición
          </li>
          <li className={styles.ul_li_text}>
            Para informarte sobre consultas, peticiones, actividades, productos,
            novedades y/o servicios; vía e-mail, fax, Whatsapp, Skype, teléfono
            proporcionado, sms y mms.
          </li>
          <li className={styles.ul_li_text}>
            Para enviarte comunicaciones comerciales o publicitarias a través de
            cualquier otro medio electrónico o físico, que posibilite realizar
            comunicaciones.
          </li>
        </ul>

        <p className="page_body_paragraph">
          Estas comunicaciones, siempre serán relacionadas con nuestros
          productos, servicios, novedades o promociones, así como aquellos
          productos o servicios que podamos considerar de tu interés y que
          puedan ofrecer colaboradores, empresas o “partners” con los que
          mantengamos acuerdos de promoción o colaboración comercial.
        </p>

        <p className="page_body_paragraph">
          De ser así, te garantizamos que estos terceros nunca tendrán acceso a
          tus datos personales, con las excepciones reflejadas a continuación,
          siendo en todo caso estas comunicaciones realizadas por parte de
          cristalvision, como titular de la web.
        </p>

        <p className="page_body_paragraph">
          Este sitio web muestra productos de afiliado de terceros.
          Concretamente de AMAZON.
        </p>

        <p className="page_body_paragraph">
          Esto quiere decir que al hacer clic en “Comprar Ahora” o similar, se
          te redirigirá a la página donde se ofertan los productos.
        </p>

        <p className="page_body_paragraph">
          En este caso, debes saber que únicamente proporcionamos y facilitamos
          los enlaces a las páginas y/o plataformas de estos terceros donde
          pueden adquirirse los productos que mostramos, en aras a facilitar la
          búsqueda y fácil adquisición de los mismos.
        </p>

        <p className="page_body_paragraph">
          Estas páginas enlazadas y pertenecientes a terceros no han sido
          revisadas ni son objeto de controles, ni recomendación por nuestra
          parte, por lo que en ningún caso cristalvision será considerada responsable
          de los contenidos de estos sitios web, de las responsabilidades
          derivadas de su uso en todos los ámbitos, ni por las medidas que se
          adopten relativas a la privacidad del usuario, tratamiento de sus
          datos de carácter personal u otras que pudieran establecerse.
        </p>

        <p className="page_body_paragraph">
          Por todo ello, te recomendamos la lectura detenida y anticipada de
          todas las condiciones de uso, condiciones de compra, políticas de
          privacidad, avisos legales y/o similares de estos sitios enlazados
          antes de proceder a la adquisición de estos productos o uso de las
          webs.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Exactitud y veracidad de los datos</h2>
        </div>

        <p className="page_body_paragraph">
          Como usuario, eres el único responsable de la veracidad y modificación
          de los datos que remitas a cristalvision, exonerándonos de cualquier
          responsabilidad al respecto.
        </p>

        <p className="page_body_paragraph">
          Es decir, a ti te corresponde garantizar y responder en cualquier caso
          de la exactitud, vigencia y autenticidad de los datos personales
          facilitados, y te comprometes a mantenerlos debidamente actualizados.
        </p>

        <p className="page_body_paragraph">
          De acuerdo a lo expresado en esta Política de Privacidad, aceptas
          proporcionar información completa y correcta en el formulario de
          contacto o suscripción.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Bajas de suscripción y derechos de renovación
          </h2>
        </div>

        <p className="page_body_paragraph">
          Como titular de los datos que nos hayas facilitado, podrás ejercer en
          cualquier momento tus derechos de acceso, rectificación, cancelación y
          oposición, enviándonos un correo electrónico a cristalvision@gmail.com y
          adjuntándonos una fotocopia de tu documento de identidad como prueba
          válida.
        </p>

        <p className="page_body_paragraph">
          Igualmente, podrás darte de baja en cualquier momento para dejar de
          recibir nuestra newsletter o cualquier otra comunicación comercial,
          directamente desde el mismo email que hayas recibido o enviándonos un
          correo a cristalvision@gmail.com.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Acceso a datos por cuenta de terceros
          </h2>
        </div>

        <p className="page_body_paragraph">
          Para poder prestar servicios estrictamente necesarios para el
          funcionamiento y desarrollo de las actividades de este sitio web, te
          informamos de que compartimos datos con los siguientes prestadores de
          servicio bajo sus correspondientes condiciones de privacidad.
        </p>

        <p className="page_body_paragraph">
          Puedes tener la total tranquilidad de que estos terceros no podrán
          utilizar dicha información para ningún otro fin que no esté regulado
          específicamente en nuestras relaciones con ellos en virtud de la
          normativa aplicable en materia de protección de datos de carácter
          personal.
        </p>

        <p className="page_body_paragraph">
          Este sitio web está alojado en https://www.netlify.com, con marca comercial
          Vercel Inc., que proporciona los servicios de hosting
          para que puedas acceder y navegar por nuestro sitio. Puedes consultar
          la política de privacidad y demás aspectos legales de esta empresa en
          el siguiente enlace: https://www.netlify.com/privacy/.
        </p>

        <p className="page_body_paragraph">
          Nuestra web utiliza servidores publicitarios con el fin de facilitar
          los contenidos comerciales que visualizas en nuestras páginas. Dichos
          servidores publicitarios utilizan cookies que le permiten adaptar los
          contenidos publicitarios a los perfiles demográficos de los usuarios:
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Google Analytics:</h2>
        </div>

        <p className="page_body_paragraph">
          Google Analytics es un servicio analítico de web prestado por Google,
          Inc., una compañía de Delaware cuya oficina principal está en 1600
          Amphitheatre Parkway, Mountain View (California), CA 94043, Estados
          Unidos (“Google”).
        </p>

        <p className="page_body_paragraph">
          Google Analytics utiliza “cookies”, que son archivos de texto ubicados
          en tu ordenador, para ayudar al website a analizar el uso que hacen
          los usuarios del sitio web.
        </p>

        <p className="page_body_paragraph">
          La información que genera la cookie acerca de tu uso del website
          (incluyendo tu dirección IP) será directamente transmitida y archivada
          por Google. Google usará esta información por cuenta nuestra con el
          propósito de seguir la pista de su uso del website, recopilando
          informes de la actividad del website y prestando otros servicios
          relacionados con la actividad del website y el uso de Internet.
        </p>

        <p className="page_body_paragraph">
          Google podrá transmitir dicha información a terceros cuando así se lo
          requiera la legislación, o cuando dichos terceros procesen la
          información por cuenta de Google. Google no asociará su dirección IP
          con ningún otro dato del que disponga.
        </p>

        <p className="page_body_paragraph">
          Como usuario, y en ejercicio de tus derechos, puedes rechazar el
          tratamiento de los datos o la información rechazando el uso de cookies
          mediante la selección de la configuración apropiada de tu navegador,
          sin embargo, debes saber que si lo hace puede que no puedas usar la
          plena funcionabilidad de este sitio web.
        </p>

        <p className="page_body_paragraph">
          Al utilizar esta web, de acuerdo a la información facilitada en esta
          Política de Privacidad, aceptas el tratamiento de datos por parte de
          Google en la forma y para los fines indicados.
        </p>

        <p className="page_body_paragraph">
          Para más información, puedes consultar la política de privacidad de
          Google en https://www.google.com/intl/es/policies/privacy/.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Google Adsense:</h2>
        </div>

        <p className="page_body_paragraph">
          Google, como proveedor asociado, utiliza cookies para publicar
          anuncios en este sitio web. Puedes inhabilitar el uso de la cookie de
          DART a través del anuncio de Google y accediendo a la política de
          privacidad de la red de contenido:
          https://www.google.com/intl/es/policies/privacy/.
        </p>

        <p className="page_body_paragraph">
          Google utiliza empresas publicitarias asociadas para publicar anuncios
          cuando visita nuestro sitio web. Es posible que estas empresas usen la
          información que obtienen de tus visitas a este y otros sitios web (sin
          incluir tu nombre, dirección, dirección de correo electrónico o número
          de teléfono) para ofrecerte anuncios sobre productos y servicios que
          te resulten de interés.
        </p>

        <p className="page_body_paragraph">
          Al utilizar esta web, consientes el tratamiento de datos por parte de
          Google en la forma y para los fines indicados.
        </p>

        <p className="page_body_paragraph">
          Si quieres saber más sobre el uso de cookies y las prácticas de
          recopilación de información y los procedimientos de aceptación o
          rechazo, consulta nuestra POLÍTICA DE COOKIES.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Medidas de seguridad</h2>
        </div>

        <p className="page_body_paragraph">
          Como titular de la web, cristalvision ha adoptado todas las medidas técnicas
          y de organización necesaria para garantizar la seguridad e integridad
          de los datos de carácter personal que trate, así como para evitar su
          pérdida, alteración y/o acceso por parte de terceros no autorizados.
        </p>

        <p className="page_body_paragraph">
          Te recordamos que, para más información, puedes consultar nuestras
          páginas de Política de Cookies y Aviso Legal.
        </p>
      </div>
      <Footer />
    </main>
  );
}

export default PrivacyPolicy;

export async function getServerSideProps() {
  const categoriesList = await  MockupService.getAllCategories();

  return {
    props: {
      categoriesList: categoriesList,
    },
  };
}
