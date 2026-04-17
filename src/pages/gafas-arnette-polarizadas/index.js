import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";

function GafasArnettePolarizadas(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cristalvision.online/gafas-arnette-polarizadas/#webpage",
    url: "https://www.cristalvision.online/gafas-arnette-polarizadas",
    name: "Gafas arnette polarizadas | ¡A precios competitivos y de excelente calidad!",
    description:
      "Para la marca de lentes y gafas arnette, te presentamos una sección exclusiva de la tienda. Ven a descubrirla.",
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
      "@id": "https://www.cristalvision.online/gafas-arnette-polarizadas/#primaryimage",
      inLanguage: "es",
      url: "https://www.cristalvision.online/arnette.jpg",
      contentUrl: "https://www.cristalvision.online/arnette.jpg",
      width: "900",
      height: "563",
      caption: "gafas arnette polarizadas",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.cristalvision.online/gafas-arnette-polarizadas/#breadcrumb",
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
        name: "Gafas arnette polarizadas",
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
          Gafas arnette polarizadas | ¡A precios competitivos y de excelente
          calidad!
        </title>
        <meta
          name="description"
          content="Para la marca de lentes y gafas arnette, te presentamos una sección exclusiva de la tienda. Ven a descubrirla."
        />
        <link
          rel="canonical"
          href="https://www.cristalvision.online/gafas-arnette-polarizadas"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Gafas arnette polarizadas"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Bienvenidos a la página encargada de difundir las bondades de un
          producto de inigualable calidad, elaborado por la reconocida firma
          arnette. El producto innovador al cual hacemos referencia, son los muy
          buscados lentes arnette polarizados.
        </p>

        <p className="page_body_paragraph">
          Dando continuidad con la presentación del mencionado producto, hemos
          puesto a disposición de nuestros clientes una selecta variedad,
          clasificada por género, para poder satisfacer todos los gustos y
          necesidades.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Lista selecta de gafas arnette polarizadas para mujer y hombre
          </h2>
        </div>

      

        <p className="page_body_paragraph">
          Para los fanáticos de las gafas de sol polarizadas arnette, la marca
          es sin duda, una de las más sobresalientes en la manufactura de este
          articulo. Pues ha demostrado ofrecer unos productos muy bien logrados
          y con altos estándares de calidad.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Aquí mencionamos los anteojos mejor votados de los lentes arnette
            polarizados
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">

          <p className="page_body_paragraph">
            Un producto para resaltar de las gafas arnette polarizadas es este.
            Pues cuenta con retoques de acabado fino, y están pensados para
            durar mucho tiempo, considerando la calidad de sus materiales de
            fabricación. Revisa ahora mismo sus características, para confirmar
            de primera persona por que fue el escogido por los usuarios.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">¿Qué tal es la marca Arnette?</h2>
        </div>

        <p className="page_body_paragraph">
          La marca arnette tiene alrededor de 30 años de haber sido fundada.
          Esta firma se originó en 1992, y desde entonces su horizonte en el
          mercado, han sido las tendencias urbanas Dirigido hacia los
          compradores de las eras modernas y juveniles. Ofreciendo a sus
          clientes diseños frescos, inclinados hacia la moda citadina.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Conoce las gafas de sol polarizadas arnette más compradas por los
            clientes
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <p className="page_body_paragraph">
            Para dar una descripción breve del por qué estos lentes, fueron los
            que obtuvieron un mayor número de ventas. Podemos afirmar que estan
            elaborados, con materias primas cuidadosamente escogidas de primera.
            Y resaltamos también que en la realidad, su diseño se ve igual o
            mejor, que el expuesto en las fotos.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Qué tan buenos son los lentes Arnette?
          </h2>
        </div>

        <p className="page_body_paragraph">
          Los lentes arnette son conocidos ya internacionalmente como unos de
          los mejores del mercado. Las versiones y modelos de gafas que produce
          la firma arnette, están pensadas para suplir una necesidad en
          específico.
        </p>

        <p className="page_body_paragraph">
          En el caso de las gafas arnette polarizadas, la empresa ofrece un
          producto efectivo, que en verdad proteje los ojos de la luz y los
          reflejos molestos del entorno. Todo esto es gracias a la acertada
          implementación de la tecnología polarizada en sus lentes y a sus
          excelentes materiales de fabricación.
        </p>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default GafasArnettePolarizadas;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const subcategoryInfo = await MockupService.getSubcategoryById(9);
 

  return {
    props: {
      categoriesList: categoriesList,
      category: subcategoryInfo[0],
    },
  };
}
