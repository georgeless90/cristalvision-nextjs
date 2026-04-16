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

function GafasRaybanPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-rayban-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-rayban-polarizadas",
    name: "Gafas ray ban polarizadas | ¡Con muy buenos descuentos y tu medida!",
    description:
      "Esta sección de la tienda online, expone al mercado un catálogo variado, de gafas ray ban polarizadas. Compra ahora no dudes más.",
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
      "@id": "https://www.cristalvision.online/gafas-rayban-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/rayban.jpg",
      contentUrl: "https://www.cristalvision.online/rayban.jpg",
      width: "900",
      height: "563",
      caption: "gafas rayban polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-rayban-polarizadas/#breadcrumb",
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
        name: "Gafas rayban polarizadas",
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
          Gafas ray ban polarizadas | ¡Con muy buenos descuentos y tu medida!
        </title>
        <meta
          name="description"
          content="Esta sección de la tienda online, expone al mercado un catálogo variado, de gafas ray ban polarizadas. Compra ahora no dudes más."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-rayban-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas ray ban polarizadas"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Con solo nombrar la marca rayban, conceptos como calidad, diseño
          agradable, durabilidad, versatilidad etc, nos vienen a la memoria. Son
          precisamente esos conceptos, los que definen a las gafas de sol ray
          ban polarizadas y los que nos motivaron a promocionar estos útiles e
          indispensables artículos.
        </p>

        <p className="page_body_paragraph">
          Entrando en mas detalle con la descripción de las gafas ray ban
          polarizadas, encontramos los modelos más llamativos de la marca y los
          pusimos en una lista. En la que se puede seleccionar cada una, para
          ver más información acerca del producto y tomar la decisión de compra.
        </p>

        <p className="page_body_paragraph">
          Esta marca en su extensa gama de lentes ray ban polarizados, encamina
          estrategias de mercadeo y también su área de diseño, a la plaza de
          producto del género femenino. Artículos que en esta página, se
          muestran detallados en la siguiente lista.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Selección de gafas ray ban mujer y hombre polarizadas
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

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Según el tablero de calificaciones de nuestro sistema, estas ray ban
            polarizadas están en primer lugar
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Este es un modelo especial de las gafas de sol ray ban polarizadas,
            motivo por el cual ocuparon el primer lugar en los sistemas de
            calificación de la web. No te vayas de esta pagina sin antes
            ingresar y ver sus características y funcionalidades.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">¿Cuál es el polarizado Ray-Ban?</h2>
        </div>

        <p className="page_body_paragraph">
          El polarizado con que la marca ray ban ha equipado sus lentes, esta
          calificado para entregar una imagen libre de reflejos y destellos
          imprevistos de luz. Estos lentes proporcionan una comodidad sin igual
          a los ojos, incluso en entornos de luz super brillante.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            A esta referencia se le otorga el reconocimientos de los lentes ray
            ban polarizados con más ventas del mes.
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            En inventario quedan pocas unidades de esta referencia, en rayban
            polarizados. Pues al parecer los clientes ya conocen las
            prestaciones del producto, y casi que no dejan reservas en bodega.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Cómo saber si los lentes Ray-Ban son polarizados?
          </h2>
        </div>

        <p className="page_body_paragraph">
          Las gafas de sol ray ban polarizadas tienen un distintivi particular
          al lado del logotipo de la marca. ESte distintivo es una p, que indica
          lentes originales ray ban con trataminto de polarizado.
        </p>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasRaybanPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("rayban-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(8);
  const bestProductInfo = await Services.getBestProduct("rayban-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "rayban-pola"
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
