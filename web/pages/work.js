import Head from 'next/head';
import Link from 'next/link';
import groq from 'groq';
import client from '../lib/sanity/client';
import PostBody from '../components/PostBody';

export default function Work({ data }) {
  const featured = data.filter((work) => work.featured === true);
  const featuredWork = featured[0];
  const otherWork = data.filter((work) => work.featured === false);

  return (
    <>
      <Head>
        <title>Work | Coye Lloyd</title>
        <meta name="theme-color" content="#fcebe1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <article className="texture | padding-bottom">
        <div className="box | title | smooth | border-bottom">
          <h1>Work</h1>
        </div>
        <article>
          <div className="featured | smooth | flow | border-top | border-bottom | margin-top | margin-bottom | padding-top | padding-bottom | padding-left | padding-right">
            <Link href={featuredWork.url}>
              <a>
                <h2>{featuredWork.title}</h2>{' '}
              </a>
            </Link>
            <PostBody content={featuredWork.description} />
          </div>
          <ul className="grid | gap | margin-bottom | margin-left | margin-right">
            {otherWork &&
              otherWork.map((work) => (
                <li
                  key={work._id}
                  className="box | card | measure | smooth | flow | border"
                >
                  <Link href={work.url}>
                    <a>
                      <h3>{work.title}</h3>
                    </a>
                  </Link>
                  <PostBody content={work.description} />
                </li>
              ))}
          </ul>
        </article>
      </article>
    </>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(groq`
      *[_type == 'work'] | order(_createdAt desc){
        _id,
        title,
        description,
        url,
        featured,
      }
    `);

  return {
    props: {
      data: data || null,
    },
  };
}
