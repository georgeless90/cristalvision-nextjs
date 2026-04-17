import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";

function GafasAviadorPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-para-aviador-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-para-aviador-polarizadas",
    name: "Gafas aviador polarizadas | ¡La colección más reciente en catálogo!",
    description:
      "Tenemos ofertas relámpago para gafas aviador polarizadas, no esperes a que se agoten, tenemos todas las tallas en stock. Visitanos",
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
      "@id": "https://www.cristalvision.online/gafas-para-aviador-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/aviator_p.jpg",
      contentUrl: "https://www.cristalvision.online/aviator_p.jpg",
      width: "900",
      height: "563",
      caption: "gafas aviador polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-para-aviador-polarizadas/#breadcrumb",
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
        name: "Gafas aviador polarizadas",
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
          Gafas aviador polarizadas | ¡La colección más reciente en catálogo!
        </title>
        <meta
          name="description"
          content="Tenemos ofertas relámpago para gafas aviador polarizadas, no esperes a que se agoten, tenemos todas las tallas en stock. Visitanos"
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-para-aviador-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas aviador polarizadas"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          En esta oportunidad queremos dedicar una sección entera de la tienda
          online, para promocionar un producto de excelente diseño,
          confeccionado por varias marcas opticas de nivel global. Los productos
          de los que hablamos son las buscadas gafas aviador polarizadas
        </p>

        <p className="page_body_paragraph">
          Ahora queremos exponer mediante un listado cuidadosamente
          seleccionado, una gran variedad de alternativas, para todos los gustos
          y lo más importante para la mayoría de necesidades que demandan
          nuestros clientes.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Catalogo actulizado en lentes aviador polarizados inisex
          </h2>
        </div>


        <p className="page_body_paragraph">
          Si eres entusiasta o amante de las gafas polarizadas, múltiples marcas
          aquí presentes, se especializan en la confección de este accesorio.
          Usan estándares de manufactura sobresalientes, materias primas
          amigables y de muy buen gusto.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Este es el modelo de gafas de sol polarizadas aviador, mejor
            calificado
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">

          <p className="page_body_paragraph">
            Dentro de las muy buscadas gafas polarizadas aviador, traemos el
            modelo con más alto puntaje después de ventas. Estos lentes debido a
            sus características innovadoras y buena calidad, fueron los
            acreedores al primer puesto en buena calificación.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Damos a conocer los anteojos polarizados aviador que se vendieron
            más en la última temporada
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <p className="page_body_paragraph">
            Estas polarizadas polarizados aviador fueron las que superaron en
            ventas a los otros modelos, dando a entender, que tienen un mejor
            acabado y un diseño más llamativo. Por lo tanto queremos resaltarlas
            en este espacio, para que aproveches sus características
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasAviadorPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const subcategoryInfo = await MockupService.getSubcategoryById(29);
  

  return {
    props: {
      categoriesList: categoriesList,
      category: subcategoryInfo[0],
    },
  };
}
