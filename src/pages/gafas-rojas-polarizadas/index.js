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

function GafasRojasPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-rojas-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-rojas-polarizadas",
    name: "Lentes polarizados rojos | ¡Muy confiables y en ofertas imperdibles!",
    description:
      "Para los gustos más exigentes, hemos elaborado una página, que únicamente trata de lentes polarizados rojos. Ingresa ya, para ver más.",
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
      "@id": "https://www.cristalvision.online/gafas-rojas-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/rojas_p.jpg",
      contentUrl: "https://www.cristalvision.online/rojas_p.jpg",
      width: "900",
      height: "563",
      caption: "gafas rojas polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-rojas-polarizadas/#breadcrumb",
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
        name: "Gafas rojas polarizadas",
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
          Lentes polarizados rojos | ¡Muy confiables y en ofertas imperdibles!
        </title>
        <meta
          name="description"
          content="Para los gustos más exigentes, hemos elaborado una página, que únicamente trata de lentes polarizados rojos. Ingresa ya, para ver más."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-rojas-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes polarizados rojos"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          La mayoría de marcas en materia de combinación de colores, son muy
          complacientes con su clientela. Sabemos que el mercado está inundado
          de artículos de necesidad básica, pero con variantes de material o
          color. Y precisamente los lentes polarizados rojos, son el actor
          principal de la temática de esta página.
        </p>

        <p className="page_body_paragraph">
          Y como las gafas polarizadas rojas son unos de esos productos
          favoritos, en esta página de la tienda online escogimos los diseños
          más recomendados por los usuarios, y también los más exclusivos de
          varias marcas, para que puedas escoger tu favorito.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Inventario disponible en gafas polarizadas rojas
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
          Claro está que no podíamos de dejar de lado el segmento femenino para
          unos buenos polarizados rojos. En catálogo tenemos un gran número de
          opciones, que se ajustan a la mayoría de gustos y necesidades.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            No fue labor fácil, pero logramos concluir que estos fueron los
            lentes polarizados rojos mejor calificados
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Las estadísticas concluyeron, que los lentes polarizados mejor
            calificados fueron estos. Pertenecen a una marca reconocida
            internacionalmente, presentan un diseño llamativo y a la vez sobrio.
            Ingresa aquí para saber más.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Cómo quitar arañazos de las gafas de sol polarizadas?
          </h2>
        </div>

        <p className="page_body_paragraph">
          Uno de los métodos para quitar las imperfecciones de los lentes
          polarizados, es tomar un paño limpio y aplicar un poco de agua con
          bicarbonato de sodio, en toda la superficie del lente. Esperar un par
          de minutos y después con otro paño limpio retirar la sustancia
          cuidadosamente.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            A decisión unánime de nuestros clientes, aqui estan los lentes
            polarizados rojos más vendidos.
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Tras un profundo análisis de todas las opciones que existen en la
            tienda en gafas polarizadas rojas, este articulo marcó una
            diferencia considerable en ventas, respecto a los modelos similares.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasRojasPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("rojas-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(34);
  const bestProductInfo = await Services.getBestProduct("rojas-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "rojas-pola"
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
