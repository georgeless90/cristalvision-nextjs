import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GAFAS POLARIZADAS",
    alternateName: "Web de información sobre gafas polarizadas",
    url: "https://www.cristalvision.online",
  };

  return (
    <Html lang="es">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5R0LC23NV3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5R0LC23NV3');`,
          }}
        />
        {/* <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
