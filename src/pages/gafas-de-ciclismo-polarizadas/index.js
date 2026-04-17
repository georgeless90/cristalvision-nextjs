import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";

function GafasCiclismoPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-de-ciclismo-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-de-ciclismo-polarizadas",
    name: "Gafas ciclismo polarizadas | ¡Con muy buenos descuentos y a tu medida!",
    description:
      "Esta sección de la tienda online, expone al mercado un catálogo variado, de gafas ciclismo polarizadas. Compra las tuyas ahora.",
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
      "@id": "https://www.cristalvision.online/gafas-de-ciclismo-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/ciclismo_p.jpg",
      contentUrl: "https://www.cristalvision.online/ciclismo_p.jpg",
      width: "900",
      height: "563",
      caption: "gafas ciclismo polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-de-ciclismo-polarizadas/#breadcrumb",
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
        name: "Gafas ciclismo polarizadas",
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
          Gafas ciclismo polarizadas | ¡Con muy buenos descuentos y a tu
          medida!
        </title>
        <meta
          name="description"
          content="Esta sección de la tienda online, expone al mercado un catálogo variado, de gafas ciclismo polarizadas. Compra las tuyas ahora."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-de-ciclismo-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas ciclismo polarizadas"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          En esta página los lentes ciclismo polarizados son los actores
          principales. Y decidimos dedicar un espacio en especial para estos
          productos, porque nos consta que a logrado ganarse un lugar
          privilegiado en la industria de del ciclismo, con trabajo arduo y
          sobre todo con saber incluir las opiniones y necesidades de sus
          clientes, y reflejarlas en esos artículos.
        </p>

        <p className="page_body_paragraph">
          Ahora para entrar en más detalle, las listas con las gafas ciclismo
          polarizadas que escogimos a continuación, resaltan la calidad y buen
          gusto con que estos accesorios fueron elaborados.
        </p>

        <p className="page_body_paragraph">
          Multiples marcas brindan gran variedad de modelos para el mercado
          femenino, por esta razón las queremos exponer a continuación:
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Modelos en catálogo para gafas de sol polarizadas ciclismo de mujer
            y hombre
          </h2>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Esta es la alternativa de los cuadra cinturones con mejor
            apreciación
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">

          <p className="page_body_paragraph">
            El artículo de los lentes polarizados ciclismo que presentó mayor
            puntuación, en recomendaciones fueron estas gafas. Los clientes que
            las compraron coincidieron, que es el modelo que más prestaciones
            ofrece y a buen precio.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">¿Cuándo usar gafas polarizadas?</h2>
        </div>

        <p className="page_body_paragraph">
          Es recomendado por las tendencias de uso de los mismos usuarios,
          ponerse gafas polarizadas cuando se están desarrollando actividades
          que implican un contacto directo con el reflejo del sol. Estas
          actividades pueden ser el ciclismo, la pesca y la conducción.
        </p>

        <p className="page_body_paragraph">
          En cada una de estas actividades la luz puede ser reflejada en el
          agua, o en superficies planas y causar un malestar ocular. Incomodidad
          que puede solucionarse, con el filtro lumínico que proponen los
          anteojos polarizados.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            En esta sección traemos las gafas de sol polarizadas ciclismo más
            compradas
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <p className="page_body_paragraph">
            Con un amplio respaldo en ventas y casi cero devoluciones. Estos
            lentes polarizados ciclismo, se posicionaron en el primer lugar de
            la tabla de artículos más vendidos.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasCiclismoPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const subcategoryInfo = await MockupService.getSubcategoryById(1);

  return {
    props: {
      categoriesList: categoriesList,
      category: subcategoryInfo[0],
    },
  };
}
