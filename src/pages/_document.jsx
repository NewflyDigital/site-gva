import Document, { Html, Head, Main, NextScript } from "next/document";

class DocumentosSite extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <title>GVATEC | Soluções Starlink Corporativa para Empresas</title>
          {/* SEO */}
          <meta
            name="description"
            content="GVATEC é especialista em Starlink Corporativa, conectividade empresarial, SD-WAN Fortinet, infraestrutura de redes, IP Público, internet corporativa e suporte especializado para empresas."
          />

          <meta
            name="keywords"
            content="GVATEC, Starlink Corporativa, Starlink Empresas, Internet Corporativa, SD-WAN Fortinet, Fortinet, IP Público, Redes Corporativas, Infraestrutura de TI, Conectividade Empresarial, Internet Satelital"
          />

          <meta name="author" content="GVATEC" />
          <meta name="robots" content="index,follow" />
          <meta name="theme-color" content="#081F3D" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="GVATEC | Especialista em Starlink Corporativa"
          />
          <meta
            property="og:description"
            content="Soluções completas em Starlink Corporativa, SD-WAN Fortinet, infraestrutura de redes e conectividade empresarial."
          />

          <meta property="og:url" content="https://www.gvatec.com.br/" />

          <meta
            property="og:image"
            content="https://www.gvatec.com.br/og-image.jpg"
          />

          <meta property="og:locale" content="pt_BR" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />

          {/* Canonical */}
          <link rel="canonical" href="https://www.gvatec.com.br/" />

          {/* Ícone */}
          <link rel="icon" href="/favicon.ico" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Syne:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentosSite;
