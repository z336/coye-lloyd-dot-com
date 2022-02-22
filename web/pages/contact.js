import Head from 'next/head';
import groq from 'groq';
import client from '../lib/sanity/client';
import MainImage from '../components/MainImage';
import PostBody from '../components/PostBody';

export default function Contact({ data }) {
  const { title, image, alt, caption, body = [] } = data;
  return (
    <>
      <Head>
        <title>{title} | Coye Lloyd</title>
        <meta name="theme-color" content="#fcebe1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <article className="texture | padding-bottom">
        <div className="box | title | smooth | border-bottom">
          <h1>{title}</h1>
        </div>
        <div className="grid | smooth | border-top | border-bottom | margin-top">
          <article className="box | border-right">
            <MainImage mainImage={image} alt={alt} caption={caption} />
          </article>
          <article className="box">
            <div className="content | flow">
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
      *[_type == 'page' && title == 'Contact'][0]{
        title,
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
