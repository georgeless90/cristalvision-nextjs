import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";

function GafasHawkersPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-hawkers-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-hawkers-polarizadas",
    name: "Gafas polarizadas hawkers | ¡Gran variedad y ofertas para todos los modelos!",
    description:
      "Tenemos en oferta gafas polarizadas hawkers, en varios modelos a un precio inmejorable. Entra a nuetra tienda y llevate las tuyas",
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
      "@id": "https://www.cristalvision.online/gafas-hawkers-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/hawkers.jpg",
      contentUrl: "https://www.cristalvision.online/hawkers.jpg",
      width: "900",
      height: "563",
      caption: "gafas hawkers polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-hawkers-polarizadas/#breadcrumb",
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
        name: "Gafas hawkers polarizadas",
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
          Gafas polarizadas hawkers | ¡Gran variedad y ofertas para todos los
          modelos!
        </title>
        <meta
          name="description"
          content="Tenemos en oferta gafas polarizadas hawkers, en varios modelos a un precio inmejorable. Entra a nuetra tienda y llevate las tuyas"
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-hawkers-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas polarizadas hawkers"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Hawkers es una marca especializada en la fabricación de accesorios e
          indumentaria de muy buena calidad y sobre todo elegante.
        </p>

        <p className="page_body_paragraph">
          Es por eso que decidimos dedicar una sección de esta tienda online, a
          ofrecer y resaltar las características de las gafas de sol polarizadas
          hawkers, porque sabemos que son una de las mejores opciones del
          mercado.
        </p>

        <p className="page_body_paragraph">
          Hawkers nos ofrece una gran variedad de alternativas para el mercado
          femenino en este segmento, por esta razón te las presentamos a
          continuación:
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Opciones disponibles en gafas polarizadas hawkers para mujer y
            hombre
          </h2>
        </div>


        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Te presentamos los lentes polarizados hawkers mejor calificados por
            nuestros clientes
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">

          <p className="page_body_paragraph">
            Entre los anteojos polarizados hawkers estos fueron los que
            obtuvieron el mayor número de calificaciones positivas, con un
            puntaje de 4.4 sobre 5 puntos.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Que tienen de especial las gafas polarizadas?
          </h2>
        </div>

        <p className="page_body_paragraph">
          La funcionalidad primordial de los lentes polarizados, es tratar que
          la luz no deslumbre los ojos. Para esta tarea, se pensó en equipar a
          los cristales con un filtro de luz, el cual permite que solo pase el
          porcentaje suficiente, como para poder ver una imagen clara y limpia
          de destellos.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Te presentamos los lentes polarizados hawkers más vendidos del año
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <p className="page_body_paragraph">
            Con convicción exponemos el producto más vendido, si hablamos de
            anteojos polarizados hawkers. Este fue el producto líder en ventas
            en su segmento, y en esta página lo tenemos disponible.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasHawkersPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const subcategoryInfo = await MockupService.getSubcategoryById(10);

  return {
    props: {
      categoriesList: categoriesList,
      category: subcategoryInfo[0],
  
    },
  };
}
