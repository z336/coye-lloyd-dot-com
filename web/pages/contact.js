import SEO from '../components/SEO';
import groq from 'groq';
import client from '../lib/sanity/client';
import MainImage from '../components/MainImage';
import PostBody from '../components/PostBody';

export default function Contact({ data }) {
  const { title, image, alt, caption, body = [] } = data;
  return (
    <>
      <SEO title={title} />
      <article className="texture | padding-bottom">
        <div className="box | title | smooth | border-bottom">
          <h1>{title}</h1>
        </div>
        <div className="grid | smooth | margin-top | border-top | border-bottom">
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
