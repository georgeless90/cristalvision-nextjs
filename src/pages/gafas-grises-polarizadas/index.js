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

function GafasGrisesPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-grises-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-grises-polarizadas",
    name: "Gafas de sol polarizadas grises | ¡La mejor opcion para comprar y regalar!",
    description:
      "Gafas de sol polarizadas grises, en esta página de la tienda online, te presentamos una lista muy completa de las mejores opciones del mercado. Ingresa ahora.",
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
      "@id": "https://www.cristalvision.online/gafas-grises-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/grises_p.jpg",
      contentUrl: "https://www.cristalvision.online/grises_p.jpg",
      width: "900",
      height: "563",
      caption: "gafas grises polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-grises-polarizadas/#breadcrumb",
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
        name: "Gafas grises polarizadas",
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
          Gafas de sol polarizadas grises | ¡La mejor opcion para comprar y
          regalar!
        </title>
        <meta
          name="description"
          content="Gafas de sol polarizadas grises, en esta página de la tienda online, te presentamos una lista muy completa de las mejores opciones del mercado. Ingresa ahora."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-grises-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas de sol polarizadas grises "}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Las diferentes versiones de gafas de sol polarizadas grises, que se
          promocionan en esta página web, son provenientes de marcas del mercado
          óptico con mayor historial comercial. Marcas que se han ganado la
          fidelidad de sus clientes, con mucho esfuerzo y trabajo incansable, al
          ofrecer siempre lo mejor por medio de sus accesorios.
        </p>

        <p className="page_body_paragraph">
          Gracias a ello dedicamos, una sección de esta tienda, a ofrecer las
          características de los lentes de sol polarizados grises, porque
          sabemos que es una de las mejores opciones del mercado.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Opciones disponibles en anteojos con polarizado gris para mujer y hombre
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
          Esta categoria nos ofrece una gran variedad de alternativas para el
          mercado femenino en este segmento, por esta razón te las presentamos a
          continuación:
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Te presentamos las gafas de sol polarizadas grises, mejor
            calificadas por nuestros clientes
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Entre los lentes de sol polarizados grises estos fueron los que
            obtuviron el mayor número de calificaciones positivas, con un
            puntaje superior a 4.7.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Qué es mejor gafas polarizadas o con filtro UV?
          </h2>
        </div>

        <p className="page_body_paragraph">
          Son dos opciones que cumplen con tareas en específico cada una. Pues
          las gafas polarizadas incluyen un filtro que deja pasar solo el
          porcentaje indicado de luz, para poder contemṕlar una imagen definida,
          eliminando los reflejos molestos. En cambio los lentes con filtro UV,
          proponen el estándar UV400, el cual garantiza salvaguardar la salud de
          los ojos y la piel de la radiación solar.
        </p>

        <p className="page_body_paragraph">
          Cabe mencionar que existen en el mercado alternativas de calidad, que
          combinan las dos tecnologías, ofreciendo al mismo tiempo gafas
          polarizadas con filtro UV.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Te presentamos las gafas de sol polarizadas grises más vendidas del
            año
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Nos agrada presentar el producto más vendido, si hablamos de lentes
            de sol polarizados grises. Este fue el producto líder en ventas en
            su segmento, y en esta tienda lo exponemos aqui.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasGrisesPolarizadas;

export async function getServerSideProps() {
  
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("grises-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(14);
  const bestProductInfo = await Services.getBestProduct("grises-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "grises-pola"
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
