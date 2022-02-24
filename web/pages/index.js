import Head from 'next/head';
import groq from 'groq';
import client from '../lib/sanity/client';
import MainImage from '../components/MainImage';
import PostBody from '../components/PostBody';

export default function Home({ data }) {
  const { image, alt, caption, body = [] } = data;
  return (
    <>
      <Head>
        <title>Coye Lloyd</title>
        <meta name="theme-color" content="#fcebe1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <article>
        <div className="box | title | border-bottom">
          <h1>
            Para Academic <br />
            <span className="film">Film</span>
            <br />
            <span className="media">Media</span> <br />
            <span className="ampersand">&amp;</span> Culture
          </h1>
        </div>
        <div className="grid">
          <article className="box | card | border-grid">
            <MainImage mainImage={image} alt={alt} caption={caption} />
          </article>
          <article className="box | card">
            <div className="styled-list | content | flow">
              <PostBody content={body} />
            </div>
          </article>
        </div>
      </article>
    </>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(groq`
      *[_type == 'page' && title == 'Home'][0]{
        image, 
        "alt": image.alt,
        "caption": image.caption,
        body[],
      }
    `);
  return {
    props: {
      data: data || null,
    },
  };
}
