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

function GafasAzulesPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-azules-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-azules-polarizadas",
    name: "Gafas polarizadas azules | ¡Con materiales de calidad y a precios bajos!",
    description:
      "Te presentamos en esta página de la tienda online lentes y gafas polarizadas azules. Provenientes de los mejores fabricantes del mercado y con ofertas increíbles. Ingresa aquí.",
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
      "@id": "https://www.cristalvision.online/gafas-azules-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/azules_p.jpg",
      contentUrl: "https://www.cristalvision.online/azules_p.jpg",
      width: "900",
      height: "563",
      caption: "gafas azules polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-azules-polarizadas/#breadcrumb",
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
        name: "Gafas azules polarizadas",
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
          Gafas polarizadas azules | ¡Con materiales de calidad y a precios
          bajos!
        </title>
        <meta
          name="description"
          content="Te presentamos en esta página de la tienda online lentes y gafas polarizadas azules. Provenientes de los mejores fabricantes del mercado y con ofertas increíbles. Ingresa aquí."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-azules-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas polarizadas azules"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Si estás buscando modelos y opciones en oferta de gafas polarizadas
          azules, llegaste al lugar indicado. Toda esta pagina, esta enfocada en
          ofrecer y sobre todo presentar una nutrida lista, de los mejores
          ejemplares de lentes polarizados azules, calificados y recomendados
          por nuestros mismos clientes.
        </p>

        <p className="page_body_paragraph">
          Usar accesorios de colores es actualmente una tendencia, en la que los
          principales influyentes son nuestros artistas o deportistas favoritos.
          Y esto las marcas de gafas y lentes lo saben aprovechar al cien
          porciento. Por eso exponemos los mejores modelos de gafas polarizadas
          azules, que puedes encontrar.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Alternativas de lentes polarizados azules para hombre y mujer
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
          Siguiendo con la moda actual, de usar artículos de diario en el color
          de interés de la persona, recomendamos firmemente todos los lentes con
          polarizado azul o de montura azul que se promocionan en esta sección.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Tenemos en oferta las gafas polarizadas azules preferidas por
            nuestros clientes
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Fue una decisión difícil, al momento de seleccionar los lentes
            polarizados azules mejor calificados hasta el momento, pero a
            continuación exponemos el modelo más querido en el mercado.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Qué significa que los lentes de sol son polarizados?
          </h2>
        </div>

        <p className="page_body_paragraph">
          Unos lentes se denominan como polarizados, cuando a sus cristales se
          les adiciona un tratamiento o película especial, encargada filtrar los
          rayos de luz, dando a los ojos una imagen más nítida, clara y libre de
          reflejos.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            En nuestra lista de gafas polarizadas azules estas fueron las que
            más vendimos
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Estos anteojos pueden ser, los que mejor representan el catálogo
            seleccionado por esta página. Y no lo dice la tienda cristalvision,
            sino las estadísticas de venta que apuntan a estos lentes, como los
            más vendidos desde hace varios meses.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasAzulesPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("azules-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(24);
  const bestProductInfo = await Services.getBestProduct("azules-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "azules-pola"
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
