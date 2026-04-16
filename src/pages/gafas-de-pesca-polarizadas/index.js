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

function GafasPescaPolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-de-pesca-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-de-pesca-polarizadas",
    name: "Gafas de pesca polarizadas | ¡En un fabuloso catálogo y en oferta!",
    description:
      "Te presentamos los modelos más recientes de gafas de pesca polarizadas. Están en oferta y con fácil envío. Aprovecha ya mismo.",
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
      "@id": "https://www.cristalvision.online/gafas-de-pesca-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/pesca_p.jpg",
      contentUrl: "https://www.cristalvision.online/pesca_p.jpg",
      width: "900",
      height: "563",
      caption: "gafas pesca polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-de-pesca-polarizadas/#breadcrumb",
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
        name: "Gafas pesca polarizadas",
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
          Gafas de pesca polarizadas | ¡En un fabuloso catálogo y en oferta!
        </title>
        <meta
          name="description"
          content="Te presentamos los modelos más recientes de gafas de pesca polarizadas. Están en oferta y con fácil envío. Aprovecha ya mismo."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-de-pesca-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas de pesca polarizadas"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          En esta página te ofrecemos un producto de muy buena reputación,
          elaborado por las reconocidas firmas de la industria optica. Los
          productos de los que hacemos mención, son las gafas de pesca
          polarizadas. Respaldados por una trayectoria exitosa y de renombre, en
          el rubro de la salud visual.
        </p>

        <p className="page_body_paragraph">
          Ahora bien las gafas de sol polarizadas pesca nunca decepcionan. Pues
          cuentan en su manufactura, con la exigencia de los más modernos y
          exigentes estándares de calidad. Y además siempre han sabido adaptarse
          y perdurar en las tendencias de la moda.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Catalogo actual de gafas polarizadas pesca mujer y hombre
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
          Si te gusta usar anteojos y gafas de lujo, las marcas aqui presentes
          se especializan en la fabricación de este producto. Usan estándares de
          manufactura impecables, materias primas ecológicas y de mucha
          durabilidad.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Esta es la opción de los lentes polarizados pesca mejor calificados
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Entre los anteojos de pesca polarizados, te presentamos el modelo
            con mayor puntuación, en opinión post venta. Estas gafas gracias a
            sus estupendas características son las que más han gustado a
            nuestros clientes.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Cuáles son las mejores gafas de pesca?
          </h2>
        </div>

        <p className="page_body_paragraph">
          En esta tienda online recomendamos para actividades de pesca, dos
          marcas ópticas, seleccionadas por nosotros, debido a que han logrado
          posicionarse como dos de las mejores empresas en diseño y producción
          de gafas polarizadas. Con una breve descripción las presentamos aquí
          abajo:
        </p>

        <ul>
          <li className={styles.ul_li_text}>
            Gafas polarizadas de la empresa Maui Jim. Esta comṕañia además de
            ofrecer unas gafas que a la vista son percibidas por los usuarios,
            como unos lentes de muy buenos materiales de ensamble y admirables
            diseños, ha ganado el reconocimiento de la Skin Cancer Foundation,
            por equipar a sus lentes con un filtro que protege un 100% de la
            radiación UV los ojos y la piel del contorno ocular.
          </li>

          <li className={styles.ul_li_text}>
            Otra indiscutible alternativa es la marca polaroid. Esta firma es la
            preferida por muchos deportistas y usuarios comunes, por brindarles
            una gafas polarizadas que satisfacen perfectamente, la necesidad de
            bloquear la luz ultravioleta, para el cuidado de los ojos y la piel.
          </li>
        </ul>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            En este apartado tenemos las gafas polarizadas pesca más compradas
            por la mayoría
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Debido a su llamativo diseño y a su proporción precio calidad, estos
            fueron los lentes polarizados pesca que marcaron más ventas en todo
            el año, superando por varias decenas a muchos modelos de su
            segmento. Estos anteojos son sin duda la opción más confiable para
            conocer el accesorio si eres usuario primerizo, o también para
            fidelizarte en el si ya eres cliente.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasPescaPolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("pesca-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(5);
  const bestProductInfo = await Services.getBestProduct("pesca-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "pesca-pola"
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
