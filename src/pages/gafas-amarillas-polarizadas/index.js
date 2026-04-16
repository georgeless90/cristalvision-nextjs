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

function GafasAmarillasPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-amarillas-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-amarillas-polarizadas",
    name: "Lentes polarizados amarillos | ¡Las versiones más exclusivas a precios competitivos!",
    description:
      "Si buscas unos lentes polarizados amarillos, tenemos muy buenas ofertas en cuanto a precio y calidad. Ven ya y descubrelos.",
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
      "@id": "https://www.cristalvision.online/gafas-amarillas-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/amarillas_p.jpg",
      contentUrl: "https://www.cristalvision.online/amarillas_p.jpg",
      width: "900",
      height: "563",
      caption: "gafas amarillas polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-amarillas-polarizadas/#breadcrumb",
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
        name: "Gafas amarillas polarizadas",
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
          Lentes polarizados amarillos | ¡Las versiones más exclusivas a
          precios competitivos!
        </title>
        <meta
          name="description"
          content="Si buscas unos lentes polarizados amarillos, tenemos muy buenas ofertas en cuanto a precio y calidad. Ven ya y descubrelos."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-amarillas-polarizadas"
        />
        {/* <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        /> */}
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes polarizados amarillos"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Tenemos exclusivamente para ti, una lista variada de lentes
          polarizados amarillos, adaptados a las tendencias y normativas
          actuales, para el uso y comercialización de articulos opticos de buena
          calidad.
        </p>

        <p className="page_body_paragraph">
          La tabla siguiente esta conformada por lentes de polarizado amarillo y
          también con monturas del mismo color. En este listado hay gafas
          provenientes de varias marcas, con mucho bagaje comercial y con la
          experiencia que exige el caso, para trabajar con productos oculares.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Nuestras alternativas en gafas polarizadas amarillas para mujer y
            hombre
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
          En esta tienda online, te ofrecemos anteojos polarizados amarillos.
          Hemos seleccionado el catálogo, con las correas de mayor calidad,
          clase y además en oferta. Indicados para esas ocasiones y eventos que
          precisan elegancia y formalidad.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Te recomendamos los lentes polarizados amarillos de mayor venta
            hasta el momento
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Es debido a su elegancia evidente y diseño innovador, estas gafas
            fueron las más compradas por nuestros clientes. Además de estar
            elaboradas con materiales de primera calidad y a un precio
            razonable.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Características interesantes de los lentes polarizados amarillos
          </h2>
        </div>

        <ul>
          <li className={styles.ul_li_text}>
            Si los lentes son polarizados y ademas amarillos, esta comprobado
            que este color relaja la visión en horas de la noche, mitigando el
            esfuerzo de los ojos causado por las luces de los autos, señales de
            tránsito y alumbrado público.
          </li>

          <li className={styles.ul_li_text}>
            Unas gafas polarizadas amarillas denotan un aire de elegancia y
            modernidad al mismo tiempo. Usando este accesorio, la persona
            presume de importancia y buen gusto.
          </li>
        </ul>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Segun la mayoria de opiniones, estas fueron las gafas polarizadas
            amarillas mejor calificadas
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Con el mayor porcentaje de calificaciones y comentarios positivos,
            estos anteojos, fueron los irrefutables merecedores del
            reconocimiento de las gafas polarizadas amarillas más vendidas, en
            nuestra tienda online.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasAmarillasPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("amarillas-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(27);
  const bestProductInfo = await Services.getBestProduct("amarillas-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "amarillas-pola"
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
