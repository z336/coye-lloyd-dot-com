import * as React from 'react';
import { Link, graphql } from 'gatsby';
import HelmetTemplate from '../components/SEO';

export default function Writing({ data }) {
  const posts = data.allSanityPost.nodes;

  return (
    <>
      <HelmetTemplate title="Writing" />
      <article>
        <div className="box | border-bottom">
          <h1>Writing</h1>
        </div>
        <div className="box | flow">
          <ul>
            {posts.length > 0 &&
              posts.map((post) => (
                <li key={post._id}>
                  <Link to={post.slug.current}>{post.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </article>
    </>
  );
}

export const query = graphql`
  query {
    allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        _id
        title
        slug {
          current
        }
        excerpt
        publishedAt(formatString: "MM/DD/YYYY")
      }
    }
  }
`;
