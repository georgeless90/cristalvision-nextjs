import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";

function GafasPersolPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-persol-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-persol-polarizadas",
    name: "Gafas persol polarizadas | ¡La mejor opcion para comprar y regalar!",
    description:
      "Gafas persol polarizadas, en esta página de web, exponemos un catálogo muy completo de las mejores opciones del momento. Ingresa ahora.",
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
      "@id": "https://www.cristalvision.online/gafas-persol-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/persol.jpg",
      contentUrl: "https://www.cristalvision.online/persol.jpg",
      width: "900",
      height: "563",
      caption: "gafas persol polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-persol-polarizadas/#breadcrumb",
      itemListElement: {
        "@type": "ListItem",
        position: "1",
        name: "Home",
        item: {
          "@type": "Thing",
          "@id": "https://www.cristalvision.online/",
        },
      },
      itemListElement: {
        "@type": "ListItem",
        position: "2",
        name: "Gafas persol polarizadas",
      },
    },
    potentialAction: {
      "@type": "ReadAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.cristalvision.online/",
      },
    },
  };
  return (
    <main className="page">
      <Head>
        <title>
          Gafas persol polarizadas | ¡La mejor opcion para comprar y regalar!
        </title>
        <meta
          name="description"
          content="Gafas persol polarizadas, en esta página de web, exponemos un catálogo muy completo de las mejores opciones del momento. Ingresa ahora."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-persol-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas persol polarizadas"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Persol es una marca de la industria óptica, enfocada en la fabricación
          de gafas y lentes, en los que ha sabido adaptar diseños llamativos,
          pero sin dejar de lado el buen funcionamiento y comodidad de sus
          productos.
        </p>

        <p className="page_body_paragraph">
          Basándonos en esos datos tan favorables de la marca, nos dimos a la
          tarea de preseleccionar un conjunto de gafas persol polarizadas. Lo
          hicimos para ofrecer mediante esta pagina, un articulo que sabemos que
          no decepciona al usuario.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Conjunto de gafas de sol persol polarizadas
          </h2>
        </div>

        <p className="page_body_paragraph">
          Uno de los frentes comerciales y en ventas más importante de persol es
          el femenino, por eso aprovechamos la oportunidad de clasificar una
          lista de persol polarizadas para mujer, ya que tienen muchas opciones
          de donde escoger.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Aquí las gafas persol polarizadas que sacaron una mayor puntuación
            favorable.
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">

          <p className="page_body_paragraph">
            Estas gafas persol polarizadas sorprendieron con las altas
            calificaciones que nuestros clientes le otorgaron. Pero sorprenden
            más aún sus características de uso y de fábrica que las componen.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Qué ventajas tienen las gafas polarizadas?
          </h2>
        </div>

        <ul>
          <li className={styles.ul_li_text}>
            La gafas polarizadas, eliminan hasta un 100% los reflejos
            inesperados que pueden desconcentrar a las personas al momento de
            maniobrar un vehículo, llámese motocicleta o auto.
          </li>

          <li className={styles.ul_li_text}>
            Los lentes polarizados también permiten que los ojos no se
            esfuercen, al entrar en contacto directo con el sol, cuando se está
            practicando algún deporte al aire libre o también en la misma
            conducción. Esto se le agradece al filtro especial, que bloquea la
            luz excesiva, dejando exclusivamente la necesaria para ver una
            imagen bien definida.
          </li>
        </ul>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Lentes persol polarizados número uno en ventas
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <p className="page_body_paragraph">
            Todos los compradores coincidieron en que estos lentes destacan por
            sus prestaciones, pues son de un material resistente y de buena
            calidad. Además como se puede ver en las imágenes estas gafas
            cuentas con un buen acabado.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasPersolPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const subcategoryInfo = await MockupService.getSubcategoryById(15);
 

  return {
    props: {
      categoriesList: categoriesList,
      category: subcategoryInfo[0],
    },
  };
}
