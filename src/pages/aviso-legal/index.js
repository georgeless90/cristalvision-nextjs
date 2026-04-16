import Head from "next/head";

import styles from "./_styles.module.css";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import MockupService from "../../share-utilities/services/_mockup_service";
import Footer from "../../components/footer/component";

function LegalWarning(props) {
  return (
    <main className="page">
      <Head>
        <title>Aviso legal - cristalvision.online</title>
        <meta name="description" content="" />
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs title={"Aviso legal"} breadCrumbs={[]} />
      <div className="page_body">
        <p className="page_body_paragraph">
          Este Aviso Legal tiene el objetivo de informarte de tus derechos y
          obligaciones como usuario de este sitio web. Aquí encontrarás toda la
          información que necesitas sobre este sitio web, su actividad, los
          datos personales que recaba y su finalidad, así como las normas de uso
          que regulan el uso de esta web.
        </p>

        <p className="page_body_paragraph">
          En el momento en que accedas a este sitio web
          https://cristalvision.online, asumes la condición de usuario, por lo que
          el contenido de este Aviso Legal te afecta directamente. Por eso, es
          importante que lo leas para disipar cualquier duda que puedas tener y
          tener conocimiento de causa sobre las condiciones que estás aceptando.
        </p>

        <p className="page_body_paragraph">
          Para empezar, debes saber que este sitio web cumple con las normativas
          vigentes en materia de protección de datos, con el objetivo de
          aportarte las garantías, la seguridad y la transparencia que, como
          usuario te corresponden, a la hora de utilizar esta web.
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
          establecido en nuestra Política de Privacidad, serán incorporados a un
          fichero automatizado debidamente inscrito en la Agencia Española de
          Protección de Datos, en el que el responsable de dicho fichero es:
          cristalvision. Esto quiere decir que tus datos están seguros, de acuerdo a lo
          que establece la ley.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Normas de acceso al sitio web</h2>
        </div>

        <p className="page_body_paragraph">
          Como usuario de nuestra web, también tienes una serie de obligaciones:
        </p>

        <p className="page_body_paragraph">
          No podrás utilizar este sitio web para la realización de actividades
          contrarias a las leyes, a la moral, al orden público y, en general, a
          hacer un uso conforme a las condiciones establecidas en el presente
          Aviso Legal.
        </p>

        <p className="page_body_paragraph">
          No podrás realizar actividades publicitarias o de explotación
          comercial remitiendo mensajes que utilicen una identidad falsa.
        </p>

        <p className="page_body_paragraph">
          Como responsable del sitio web, cristalvision podrá interrumpir el servicio
          de la página que esté siendo utilizado por el usuario y resolver de
          modo inmediato la relación si detecta un uso de la web o de cualquiera
          de los servicios que en la mismo se ofertan que pueda considerarse
          contrario a lo expresado en el presente Aviso Legal.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Propiedad intelectual e industrial</h2>
        </div>

        <p className="page_body_paragraph">
          La totalidad de este sitio web (texto, imágenes, marcas, gráficos,
          logotipos, botones, archivos de software, combinaciones de colores,
          así como la estructura, selección, ordenación y presentación de sus
          contenidos) se encuentra protegida por las leyes vigente sobre
          Propiedad Intelectual e Industrial, quedando prohibida su
          reproducción, distribución, comunicación pública y transformación,
          salvo para uso personal y privado.
        </p>

        <p className="page_body_paragraph">
          Como titular de este sitio web, cristalvision no garantiza que los contenidos
          sean precisos o libres de error o que el libre uso de los mismos por
          parte de los usuarios no infrinja los derechos de terceras partes. El
          buen o mal uso de esta página y de sus contenidos es responsabilidad
          del usuario.
        </p>

        <p className="page_body_paragraph">
          Asimismo, queda prohibida la reproducción, retransmisión, copia,
          cesión o redifusión, total o parcial, de la información contenida en
          la página, cualquiera que fuera su finalidad y el medio utilizado para
          ello, sin autorización previa de cristalvision.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Enlaces o links</h2>
        </div>

        <p className="page_body_paragraph">
          Este sitio web incluye enlaces o links a sitios de terceros. Las
          páginas pertenecientes a estos terceros no han sido revisadas ni son
          objeto de controles por nuestra parte, por lo que cristalvision no podrá ser
          considerado responsable de los contenidos de estos sitios web, ni de
          las medidas que se adopten relativas a su privacidad o al tratamiento
          de sus datos de carácter personal u otros que pudieran derivarse.
        </p>

        <p className="page_body_paragraph">
          Por todo ello, te recomendamos la lectura detenida de las condiciones
          de uso, política de privacidad, avisos legales y/o similares de estos
          sitios.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Enlaces de afiliación de amazon</h2>
        </div>

        <p className="page_body_paragraph">
          Este sitio web, de acuerdo a su finalidad, utiliza enlaces de afiliado
          de Amazon.
        </p>

        <p className="page_body_paragraph">
          Esto quiere decir que encontrarás enlaces de productos de Amazon a los
          que podrás acceder directamente desde nuestro sitio web pero que, en
          su caso, la compra la realizarás en Amazon, bajo sus propias
          condiciones en ese momento.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Limitación de responsabilidad</h2>
        </div>

        <p className="page_body_paragraph">
          En ejercicio de su derecho como titular de esta web, te informamos de
          que cristalvision no se hace responsable en ningún caso de lo siguiente:
        </p>

        <p className="page_body_paragraph">
          La calidad del servicio, la velocidad de acceso, el correcto
          funcionamiento ni la disponibilidad ni continuidad de funcionamiento
          de la página.
        </p>

        <p className="page_body_paragraph">
          La existencia de virus, malware, programas maliciosos o dañinos en los
          contenidos.
        </p>

        <p className="page_body_paragraph">
          La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de
          los servicios prestados por terceros y puestos a disposición de los
          usuarios en este sitio web.
        </p>

        <p className="page_body_paragraph">
          De los daños que pudieran provenir del uso ilegal o indebido de este
          blog.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Política de privacidad y pretección de datos
          </h2>
        </div>

        <p className="page_body_paragraph">
          Este sitio web cumple con la normativa vigente en materia de
          protección de datos, lo que implica que, como usuario, deberás dar tu
          consentimiento expreso antes de facilitarnos datos personales a través
          de los diferentes formularios puestos a disposición en las secciones
          de nuestra página.
        </p>

        <p className="page_body_paragraph">
          Para ello, en aras de la transparencia y el ejercicio de tu derecho,
          nuestro deber es informarte sobre los datos personales que recabamos,
          almacenamos y tratamos y con qué finalidades, teniendo en cualquier
          momento la posibilidad de revocar libremente tu consentimiento.
        </p>

        <p className="page_body_paragraph">
          Toda esta información la podrás encontrar en nuestra POLITICA DE
          PRIVACIDAD.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Política de cookies</h2>
        </div>

        <p className="page_body_paragraph">
          Tal y como te informamos nada más acceder a nuestra web, este sitio
          utiliza cookies propias y de terceros con el objetivo de
          proporcionarte la mejor experiencia de usuario y desarrollar nuestra
          actividad.
        </p>

        <p className="page_body_paragraph">
          En cualquier momento, tendrás la opción de configurar tu navegador
          para desestimar el uso de estas cookies que, en algún caso, afectarán
          a tu experiencia de usuario.
        </p>

        <p className="page_body_paragraph">
          Para acceder a la información completa sobre el uso de cookies en este
          sitio web, su finalidad y su desestimación, puedes consultar nuestra
          POLÍTICA DE COOKIES.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Legislación aplicable y jurisdicción competente
          </h2>
        </div>

        <p className="page_body_paragraph">
          El presente Aviso Legal se encuentra sometido a la legislación
          española vigente.
        </p>

        <p className="page_body_paragraph">
          En caso necesario, ante cualquier tipo de controversia de carácter
          legal, cristalvision y el usuario, con renuncia expresa a cualquier otro
          fuero, se someterán a los Juzgados y Tribunales del domicilio del
          Usuario para cualquier controversia que pudiera derivarse.
        </p>

        <p className="page_body_paragraph">
          En el caso de que el usuario tenga su domicilio fuera de España,
          cristalvision y el usuario se someterán, con renuncia expresa a cualquier
          otro fuero, a los juzgados y tribunales de Barcelona (España).
        </p>

        <p className="page_body_paragraph">
          Si tienes cualquier duda sobre este Aviso Legal, puedes enviarnos un
          correo electrónico a cristalvision@gmail.com.
        </p>
      </div>
      <Footer />
    </main>
  );
}

export default LegalWarning;

export async function getServerSideProps() {
  const categoriesList = await  MockupService.getAllCategories();

  return {
    props: {
      categoriesList: categoriesList,
    },
  };
}
