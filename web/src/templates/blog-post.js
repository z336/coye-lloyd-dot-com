import * as React from 'react';
import { graphql } from 'gatsby';
import PostBody from '../components/PostBody';

export default function BlogPostTemplate({ data }) {
  const post = data.sanityPost;

  return (
    <>
      {post && (
        <article>
          <div className="box | border-bottom">
            <h1>{post.title}</h1>
          </div>
          <PostBody content={post._rawBody} />
        </article>
      )}
    </>
  );
}

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    sanityPost(id: { eq: $id }) {
      _id
      publishedAt(formatString: "MM/DD/YYYY")
      slug {
        current
      }
      title
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`;
