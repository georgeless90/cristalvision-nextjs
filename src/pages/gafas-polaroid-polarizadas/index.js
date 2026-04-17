import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";

function GafasPolaroidPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-polaroid-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-polaroid-polarizadas",
    name: "Gafas polarizadas polaroid | ¡Las versiones más vanguardistas en oferta!",
    description:
      "Te presentamos la lista más buscada de gafas polarizadas polaroid en el mercado actual. Ven a conocerla.",
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
      "@id": "https://www.cristalvision.online/gafas-polaroid-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/polaroid.jpg",
      contentUrl: "https://www.cristalvision.online/polaroid.jpg",
      width: "900",
      height: "563",
      caption: "gafas polaroid polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-polaroid-polarizadas/#breadcrumb",
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
        name: "Gafas polaroid polarizadas",
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
          Gafas polarizadas polaroid | ¡Las versiones más vanguardistas en
          oferta!
        </title>
        <meta
          name="description"
          content="Te presentamos la lista más buscada de gafas polarizadas polaroid en el mercado actual. Ven a conocerla."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-polaroid-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas polarizadas polaroid"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Los productos de polaroid hablan muy bien de la marca, pues es que
          debido a ellos, esta firma es reconocida a nivel internacional como
          una alternativa muy confiable para buscar lentes de sol. Es que los
          anteojos de sol polaroid tienen todas las funcionalidades y ventajas
          de unas buenas gafas para la protección solar.
        </p>

        <p className="page_body_paragraph">
          Esta página de la web, esta para difundir precisamente las ventajas de
          usar gafas de sol polarizadas polaroid. Como efecto de esto, hemos
          armado la listas mas completas de los mencionados artículos, para que
          puedas revisar y escoger la que mas se ajuste a ti.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Lista de gafas polarizadas polaroid</h2>
        </div>

        <p className="page_body_paragraph">
          Uno de los flujos de ventas más importantes para la marca polaroid es
          el femenino. Por eso la empresa para sacarle partido a esta
          oportunidad, encamina publicidad y diseños hacia este mercado. Y aquí
          podemos dar una adelanto de algunos ejemplares de lentes polaroid
          polarizados para mujeres.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Por si fuera poco este es el lente polaroid polarizado más votado
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">

          <p className="page_body_paragraph">
            Según la base de datos de ventas de la tienda online, estas gafas de
            sol polarizadas polaroid, se vendieron a un mayor número de
            clientes. Debió de ser por su modelo visualmente atractivo, o por su
            razonable precio.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Puntos a favor de las gafas polarizadas polaroid
          </h2>
        </div>

        <ul>
          <li className={styles.ul_li_text}>
            Una de las prestaciones de estas gafas, es que son extremadamente
            ligeras. El usuario ni se dará cuenta, que está usando gafas al
            momento de desarrollar sus actividades, así estas impliquen horas de
            uso.
          </li>

          <li className={styles.ul_li_text}>
            Estos lentes además de contar con una tecnología de polarizado bien
            implementada, que excluye los reflejos de la luz. Cuenta ya con la
            protección del estándar uv400, cuyo propósito es cuidar los ojos de
            la radiación, producida por los rayos del sol.
          </li>

          <li className={styles.ul_li_text}>c</li>
        </ul>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            No te vallas sin conocer los lentes polaroid polarizados mejor
            estimados
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <p className="page_body_paragraph">
            Con pocos votos de distancia, estas gafas de sol polarizadas
            polaroid marcaron la diferencia en la tabla de comparación del
            trimestre. Y los que las compraron no se equivocaron, al llevar este
            producto tan prestante a tan cómodo valor.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasPolaroidPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const subcategoryInfo = await MockupService.getSubcategoryById(13);


  return {
    props: {
      categoriesList: categoriesList,
      category: subcategoryInfo[0],
    },
  };
}
