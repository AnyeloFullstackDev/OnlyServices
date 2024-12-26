// components/MetaTags.tsx
import Head from 'next/head';

const MetaTags = () => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="OnlyServices - Conecta proveedores con clientes" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="OnlyServices - Conecta Proveedores" />
    <meta property="og:description" content="Conecta con proveedores de servicios confiables" />
    <meta property="og:image" content="https://example.com/og-image.jpg" />
    <meta property="og:url" content="https://www.onlyservices.com" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="OnlyServices - Conecta con Proveedores" />
    <meta name="twitter:description" content="Servicios confiables a precios competitivos" />
    <meta name="twitter:image" content="https://example.com/twitter-image.jpg" />
    <link rel="icon" href="/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <title>OnlyServices</title>
  </Head>
);

export default MetaTags;
