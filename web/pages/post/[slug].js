import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import groq from 'groq';
import client from '../../lib/sanity/client';
import PostBody from '../../components/PostBody';
import formatDate from '../../utils/helpers/formatDate';

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <article>
        <div className="box | title | smooth | border-bottom">
          <h1>Loading...</h1>
        </div>
      </article>
    );
  }

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  const { title, publishedAt, body = [] } = post;

  return (
    <>
      <Head>
        <title>{title} | Coye Lloyd</title>
        <meta name="theme-color" content="#fcebe1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <article>
        <div className="box | title | smooth | border-bottom">
          <h1>{title}</h1>
        </div>
        <article className="margin-left | margin-right | padding-top | padding-bottom">
          <div className="content | flow">
            <p>
              <em>Posted on {formatDate(publishedAt)}</em>
            </p>
            <PostBody content={body} />
          </div>
        </article>
      </article>
    </>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    body,
  }`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })) || [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post: post || null,
    },
  };
}
