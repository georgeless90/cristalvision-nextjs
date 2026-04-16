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

function GafasTimberlandPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-timberland-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-timberland-polarizadas",
    name: "Gafas polarizadas timberland | ¡Tenemos un catálogo conformado por las mejores versiones de la marca!",
    description:
      "A disposición de nuestros clientes, ya tenemos en inventario los últimos modelos de las gafas polarizadas timberland. Ingresa ahora, para ver las nuevas características.",
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
      "@id": "https://www.cristalvision.online/gafas-timberland-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/timberland.jpg",
      contentUrl: "https://www.cristalvision.online/timberland.jpg",
      width: "900",
      height: "563",
      caption: "gafas timberland polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-timberland-polarizadas/#breadcrumb",
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
        name: "Gafas timberland polarizadas",
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
          Gafas polarizadas timberland | ¡Tenemos un catálogo conformado por
          las mejores versiones de la marca!
        </title>
        <meta
          name="description"
          content="A disposición de nuestros clientes, ya tenemos en inventario los últimos modelos de las gafas polarizadas timberland. Ingresa ahora, para ver las nuevas características."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-timberland-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas polarizadas timberland"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Los usuarios que han comprado la marca, dan una referencia muy
          positiva en cuanto a sus artículos deportivos. Entre ellos están, las
          gafas de sol polarizadas timberland, que sinceramente cuentan con un
          diseño trabajado y con materiales de primera calidad.
        </p>

        <p className="page_body_paragraph">
          Realmente se nota el esfuerzo que timberland, ha impreso en sus
          productos. Pues por algo sera, que tiene ya tantos clientes
          fidelizados. Y cada vez que saca una colación de productos nuevos,
          tienen el mismo buen recibimiento de parte de los usuarios.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Colección de gafas polarizadas timberland para mujer y hombre
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
          Timberland es una de las marcas que con solo escucharla o leerla,
          inmediatamente se asocia a productos frescos y elegantes. Como muestra
          de esto, esta página hará mención de algunos modelos de gafas
          timberland polarizadas, resaltando sus características más
          importantes.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            La puntuación de favoritismo de estos lentes de sol polarizados
            timberland, fue la más alta.
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Se reconoce este modelo de lentes polarizados timberland como el
            favorito, después de que los usuarios lo probaron. Y esto no es poca
            cosa, porque nos indica que el producto cumplio con lo prometido y
            que sus funcionalidades si fueron acertadas.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Fortalezas a recalcar de la marca y de sus lentes timberland
            polarizados
          </h2>
        </div>

        <ul>
          <li className={styles.ul_li_text}>
            El plástico utilizado para la fabricación de las gafas de sol
            polarizadas timberland, es un 35% biológico. Propuesta pensada por
            la marca, para contribuir con el medio ambiente y a su vez, brindar
            al usuario menos peso en el accesorio.
          </li>

          <li className={styles.ul_li_text}>
            El 100% de los elementos metálicos, como tornillos y bisagras con
            que se elaboraron las gafas timberland polarizadas no contienen
            plomo.
          </li>

          <li className={styles.ul_li_text}>c</li>
        </ul>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Referencia más vendida en gafas de sol polarizadas timberland
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            De todos los modelos de gafas polarizadas timberland, este es el que
            percibe mejor la mente de los usuarios, y lo terminaron comprando.
            Estamos convencidos, que fue por su imagen elegante y materiales
            consistentes. Si quieres saber más de las características, ingresa
            aquí.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasTimberlandPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("timberland-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(12);
  const bestProductInfo = await Services.getBestProduct("timberland-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "timberland-pola"
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
