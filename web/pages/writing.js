import Head from 'next/head';
import Link from 'next/link';
import groq from 'groq';
import client from '../lib/sanity/client';
import formatDate from '../utils/helpers/formatDate';

export default function Writing({ posts }) {
  return (
    <>
      <Head>
        <title>Writing | Coye Lloyd</title>
        <meta name="theme-color" content="#fcebe1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <article className="texture | padding-bottom">
        <div className="box | title | smooth | border-bottom">
          <h1>Writing</h1>
        </div>
        <article>
          <ul className="margin-top | margin-left | margin-right">
            {posts &&
              posts.map((post) => (
                <li
                  key={post._id}
                  className="box | card | measure | smooth | flow | margin-bottom | border"
                >
                  <Link href="/post/[slug]" as={`/post/${post.slug.current}`}>
                    <a>
                      <h2>{post.title}</h2>
                    </a>
                  </Link>
                  <br />
                  <small>{formatDate(post.publishedAt)}</small>
                  <p>{post.excerpt}</p>
                </li>
              ))}
          </ul>
        </article>
      </article>
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == 'post'] | order(_createdAt desc){
        _id,
        title,
        publishedAt, 
        slug, 
        excerpt
      }
    `);

  return {
    props: {
      posts: posts || null,
    },
  };
}
