import React from "react";
import Head from "next/head";

import Header from "../../components/header/component";
import Mockup_service from "../../share-utilities/services/_mockup_service";
import styles from "./_styles.module.css";
import ImagesCta from "../../components/images-call-to-action/component";
import ScreenList from "../../components/screen_list/component";
import WebInformation from "../../components/web-information/component";
import WebDescription from "../../components/web-description/component";
import CompanyInformation from "../../components/company_information/component";
import NotificationSystem from "../../components/notification_system/component";
import SocialMediaIcons from "../../components/social_media_icons/component";
import Footer from "../../components/footer/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";

function ProductsList(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/#webpage",
    url: "https://www.cristalvision.online",
    name: "cristalvision.online | Ofertas, información y modelos de gafas polarizadas",
    description:
      "Tienda especializada en opciones de compra y todo lo que debes saber, sobre las gafas polarizadas.",
    inLanguage: "es",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.cristalvision.online/#website",
      url: "https://www.cristalvision.online",
      name: "GAFAS POLARIZADAS",
      description: "Web de información sobre gafas polarizadas",
      inLanguage: "es",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.cristalvision.online/?s={search_term_string}",
        },
        "query-input": {
          "@type": "PropertyValueSpecification",
          valueRequired: "http://schema.org/True",
          valueName: "search_term_string",
        },
      },
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": "https://www.cristalvision.online/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/imgpolarizada.jpg",
      contentUrl: "https://www.cristalvision.online/imgpolarizada.jpg",
      width: "900",
      height: "563",
      caption: "gafas polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/#breadcrumb",
      itemListElement: {
        "@type": "ListItem",
        position: "1",
        name: "Home",
      },
    },
    potentialAction: {
      "@type": "ReadAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.cristalvision.online",
      },
    },
  };
  return (
    <main className="page">
      <Head>
        <title>
          cristalvision.online | Ofertas, información y modelos de gafas
          polarizadas
        </title>
        <meta
          name="description"
          content="Tienda especializada en opciones de compra y todo lo que debes saber, sobre las gafas polarizadas."
        />
        <link rel="canonical" href="https://www.cristalvision.online" />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas polarizadas en oferta"}
        breadCrumbs={[]}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          La gafas polarizadas son un accesorio que se usa para mitigar el
          esfuerzo de los ojos causado por la luz emitida por el sol, ya sea de
          forma directa o reflejada a travez del agua o superficies planas como
          carreteras o caminos con nieve.
        </p>
        <p className="page_body_paragraph">
          Las gafas polarizadas también ayudan a relajar la visión al momento de
          conducir un vehículo en horas de la noche, pues las luces provenientes
          de los demás vehículos, de las señales de tránsito y del alumbrado El
          público cansa demasiado los ojos. Ahora en base a esta información,
          tenemos una idea clara de los lentes polarizados, pero ¿ cómo
          funcionan en realidad ?. Vamos a ello.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">¿Qué son las lentes polarizadas?</h2>
        </div>

        <p className="page_body_paragraph">
          Unas gafas se definen como polarizadas cuando la cara del lente que
          recibe la luz se torna como un espejo, evitando que se vean los ojos
          desde el exterior, pero logrando que desde el interior se logre una
          imagen más clara y limpia de reflejos y destellos.
        </p>

        <p className="page_body_paragraph">
          Este efecto se logra gracias a una configuración química aplicada al
          lente, la cual hace que la luz sea filtrada de forma tal, que la parte
          del lente que la recibe se opaque y la otra exprese imagenes mas
          nitidas y confortables para los ojos.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Propuestas en catálogo de gafas polarizadas mujer
          </h2>
        </div>

        

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Marcas de gafas polarizadas</h2>
        </div>

        <p className="page_body_paragraph">
          Ya comercialmente hablando, nos encontramos con un gran número de
          marcas que se enfocan en la fabricación y distribución de gafas de sol
          polarizadas. Pero en esta tienda online logramos seleccionar, las que
          mejor valoraciones y resultados positivos han obtenido en la venta de
          estos accesorios. Y son las siguientes:
        </p>

        <ScreenList />

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Nuestra clasificación de las gafas polarizadas
          </h2>
        </div>

        <p className="page_body_paragraph">
          Según nuestro estudio de mercado, pretendemos que con esta
          clasificación de gafas polarizadas, se abarquen los modelos más
          buscados de este producto, y poder exponerlos de una manera ordenada y
          sobre todo honesta en cuanto a calidad y beneficios para nuestros
          clientes.
        </p>

        <ul>
          <li className={styles.ul_li_text}>
            Anteojos polarizados clasificados de acuerdo al uso. Los lentes con
            tecnología de polarizado, pueden ser usados en diferentes,
            disciplinas o deportes. El ciclismo, la pesca, la aviación , la
            conduccion de vehiculos terrestres, etc, son algunos ejemplos de las
            áreas que necesitan usar gafas polarizadas.
          </li>

          <li className={styles.ul_li_text}>
            Firmas de tamaño internacional se enfocan en producir lentes
            polarizados, es por eso que para satisfacer las preferencias de
            nuestros clientes, hay en esta web las versiones más recientes en
            gafas polarizadas, diseñadas y fabricadas por las marcas ópticas a
            nivel global, que mejor interpretan las necesidades de los usuarios.
          </li>

          <li className={styles.ul_li_text}>
            Y no podíamos dejar de incluir la clasificación por color. En la que
            cada uno de los clientes de esta web, puede buscar el modelo de
            anteojos polarizados, que más se ajuste a su personalidad o
            vestuario.
          </li>
        </ul>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Propuestas en catálogo de gafas polarizadas hombre
          </h2>
        </div>


        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Qué es mejor gafas polarizadas o Fotocromaticas?
          </h2>
        </div>

        <p className="page_body_paragraph">
          Esta pregunta se responde, teniendo muy en cuenta las prestaciones que
          estas dos tecnologías ofrece. Por un lado las gafas polarizadas nos
          brindan una ayuda o protección ocular, frente a la luz proveniente del
          sol, la luz de fuentes eléctricas como la vehicular o de los focos
          públicos y la luz que viene de superficies reflectantes como el agua.
          De esta manera los lentes polarizados, entregan a los ojos una imagen
          limpia de esas incomodidades.
        </p>

        <p className="page_body_paragraph">
          En cuanto a las gafas fotocromáticas, también ofrecen al usuario
          comodidad visual, presentando un color oscuro a mayor intensidad de
          luz y un color transparente a menor intensidad. Pero la diferencia
          radica, en que la tecnologia fotocromatica solo se activa con la
          presencia e interacción de los rayos solares. Y propone a su vez que
          los lentes en lugares cerrados, en la noche y en general en ausencia
          del sol, adopten el comportamiento transparente de cualquier gafa
          convencional. Es por esto que hay opciones muy buenas en el mercado,
          para gafas con fórmula médica fotocromáticas.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Cómo saber si unas gafas polarizadas son buenas?
          </h2>
        </div>

        <p className="page_body_paragraph">
          Para confirmar, si las gafas que compraste son polarizadas, basta con
          poner los lentes de forma horizontal frente a una pantalla y girarlos
          en posición vertical. Si el lente se oscurece, entonces las gafas son
          polarizadas, sino te recomendamos comprar algunos de los modelos
          certificados promocionados en esta web.
        </p>

        {/* <OtherCategories /> */}
        {/* <ImagesCta /> */}
        <WebInformation />
        <WebDescription />
        <CompanyInformation />
        <NotificationSystem />
        <SocialMediaIcons />
      </div>
      <Footer />
    </main>
  );
}

export default ProductsList;

export async function getServerSideProps() {
  const categoriesList = await Mockup_service.getAllCategories();
  return {
    props: {
      categoriesList: categoriesList,
    },
  };
}
