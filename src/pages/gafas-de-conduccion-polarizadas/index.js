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

function GafasConduccionPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-de-conduccion-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-de-conduccion-polarizadas",
    name: "Gafas de conducción polarizadas | ¡Para todas las necesidades del mercado!",
    description:
      "Tenemos las mejores ofertas del mercado para gafas de conducción polarizadas. Tratamos de ajustar el catálogo a la mayoría de necesidades. Visitanos.",
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
      "@id": "https://www.cristalvision.online/gafas-de-conduccion-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/conduccion_p.jpg",
      contentUrl: "https://www.cristalvision.online/conduccion_p.jpg",
      width: "900",
      height: "563",
      caption: "gafas conducción polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-de-conduccion-polarizadas/#breadcrumb",
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
        name: "Gafas conducción polarizadas",
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
          Gafas de conducción polarizadas | ¡Para todas las necesidades del
          mercado!
        </title>
        <meta
          name="description"
          content="Tenemos las mejores ofertas del mercado para gafas de conducción polarizadas. Tratamos de ajustar el catálogo a la mayoría de necesidades. Visitanos."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-de-conduccion-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas de conducción polarizadas"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Hemos armado para ti un catálogo muy nutrido en gafas de conducción
          polarizadas. En este espacio de la tienda, brindamos precios,
          promociones y características de estos representativos artículos.
        </p>

        <p className="page_body_paragraph">
          Sin preámbulos, puedes contemplar los modelos que más ventajas y
          beneficios presentan a nuestros clientes para el segmento de los
          lentes de conducción polarizados.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Modelos actuales en anteojos de conducción polarizados para hombre y
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
          Las gafas de conducción polarizados son artículos de moda, que además
          de representar un gran potencial de ventas para la tienda online,
          representa un producto de mucha tradición y favoritismo en el mercado
          optico. Es por esto que los promocionamos de manera muy especial aquí.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            EXponemos en este espacio, los lentes de conducción polarizados
            mejor calificados por nuestros usuarios
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            De los anteojos de conducción polarizados este fue el que obtuvo el
            mayor número de calificaciones positivas, con un puntaje cercano a
            5.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Cuáles son las mejores gafas de sol para conducir?
          </h2>
        </div>

        <p className="page_body_paragraph">
          Las fuentes de estudio de expertos en el tema concluyen y recomiendan,
          usar para la conducción vehicular un grado de polarizado nivel tres en
          los lentes. Este grado es intermedio, en el que los cristales se
          opacan a un maximo de color gris. Esto se debe a que un filtro muy
          oscuro, puede reducir demasiado la visibilidad al momento de conducir.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Anteojos de conducción polarizados que se vendieron más en la última
            temporada
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Es un placer mencionar el producto más vendido, si se trata de gafas
            de conducción polarizadas. Este fue el producto líder en ventas en
            su segmento, y en esta tienda la hemos traído para ti.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasConduccionPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("conduccion-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(4);
  const bestProductInfo = await Services.getBestProduct("conduccion-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "conduccion-pola"
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
