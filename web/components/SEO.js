import Head from 'next/head';

export default function SEO({ title }) {
  return (
    <Head>
      <title>{title} | Coye Lloyd</title>
      <meta name="description" content="Coye Lloyd's portfolio and blog" />
      <meta name="keywords" content="Film, media, and culture" />
      <meta name="author" content="Coye Lloyd" />
      <meta name="theme-color" content="#fcebe1" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}
