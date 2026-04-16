import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import Services from "../../share-utilities/services/_services";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import ProductCard from "../../components/product-card/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";
import ProductLeft from "../../components/product-card-left/component";

function GafasTacticasPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-tacticas-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-tacticas-polarizadas",
    name: "Lentes de seguridad polarizados | ¡Los más seguros de su segmento y a costos razonables!",
    description:
      "Esta sección es el lugar indicado para encontrar información  y adquirir unos buenos lentes de seguridad polarizados. Entra a la pagina no te arrepentirás.",
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
      "@id": "https://www.cristalvision.online/gafas-tacticas-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/tacticas_p.jpg",
      contentUrl: "https://www.cristalvision.online/tacticas_p.jpg",
      width: "900",
      height: "563",
      caption: "gafas tácticas polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-tacticas-polarizadas/#breadcrumb",
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
        name: "Gafas tácticas polarizadas",
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
          Lentes de seguridad polarizados | ¡Los más seguros de su segmento y
          a costos razonables!
        </title>
        <meta
          name="description"
          content="Esta sección es el lugar indicado para encontrar información  y adquirir unos buenos lentes de seguridad polarizados. Entra a la pagina no te arrepentirás."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-tacticas-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes de seguridad polarizados"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Llegaste a la página que habla sobre gafas tácticas polarizadas. Un
          accesorio indispensable para personas que por diferentes motivos deben
          de proteger sus ojos, de partículas o sustancias que pueden ocasionar
          lesiones.
        </p>

        <p className="page_body_paragraph">
          Los lentes de seguridad polarizados, son los indicados para usar en
          deportes, cuya práctica implique un riesgo para los ojos. Ya sea por
          algún tipo de fragmento que vuela por los aires, o también para
          trabajos, en los que las vistas quedan en contacto cercano con
          materiales nocivos.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Conjunto de modelos para lentes de seguridad polarizados hombre y
            mujer
          </h2>
        </div>

        {props.products && (
          <ul className="products_list">
            {props.products.map((product) => {
              return (
                <div className="products_list_item" key={product._id}>
                  <ProductCard infoProduct={product} />
                </div>
              );
            })}
          </ul>
        )}

        <p className="page_body_paragraph">
          Los anteojos tacticos polarizados que promocionamos en esta página
          web, son otro accesorio muy útil, cuando se quiere tener dos productos
          en uno. Pues en ocasiones necesitamos unas gafas que se oscurecen con
          la luz del sol, pero que en lugares cerrados presten un uso normal.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Las ventas de estos lentes tacticos sobrepasaron a sus rivales, con
            algunas unidades de diferencia.
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Estas gafas de seguridad, marcaron una cantidad elevada en ventas
            este trimestre. Ratificando así sus excelentes materiales de
            construcción y rápida adaptabilidad a la luz.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">¿Qué son las gafas tacticas?</h2>
        </div>

        <p className="page_body_paragraph">
          Las gafas tacticas polarizadas, tienen un grado de protección
          adicional que las polarizadas normales. Pues estos lentes, están
          diseñados con materias primas resistentes a impactos a altas
          velocidades, como lo es el policarbonato. Y claro está, que también
          adoptan en sus cristales, filtros de anti reflejo y UV400.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Con una brecha de diferencia moderada, a estos lentes tácticos, los
            valoraron mejor que al resto
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Por acumulación de votos positivos, estas gafas tácticas al parecer
            cumplieron con más expectativas que los modelos similares. Y es de
            aceptar que como accesorio es una de los mejores en varios aspectos.
            Entra en la tarjeta para saber más.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasTacticasPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("tacticas-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(28);
  const bestProductInfo = await Services.getBestProduct("tacticas-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "tacticas-pola"
  );

  return {
    props: {
      categoriesList: categoriesList,
      category: subcategoryInfo[0],
      products: productsList.body,
      bestProduct: bestProductInfo.body,
      bestSellingProduct: bestSellingProductInfo.body,
    },
  };
}
