import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { PortableText } from '@portabletext/react';
// import getYouTubeID from 'get-youtube-id';
import urlFor from '../lib/sanity/urlFor';
// import client from '../lib/sanity/client';

const BodyImage = ({ value }) => {
  return (
    <figure>
      <img src={urlFor(value).url()} alt={value.alt} />
      <figcaption>
        <small>{value.caption}</small>
      </figcaption>
    </figure>
  );
};

// const components = {
//   types: {
//     mainImage: ({ value }) => <img src={urlFor(value).url()} alt={value.alt} />,
//   },
// };

// const YouTube = ({ value }) => {
//   const id = getYouTubeID(value.url);
//   const url = `https://www.youtube-nocookie.com/embed/${id}`;
//   return (
//     <div className="youtube">
//       <iframe
//         title="YouTube video player"
//         src={url}
//         frameBorder="0"
//         allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       />
//     </div>
//   );
// };

const components = {
  types: {
    mainImage: BodyImage,
    // youtube: YouTube,
  },
};

export default function PostBody({ content }) {
  return (
    <article className="flow">
      <PortableText value={content} components={components} />
    </article>
  );
}
