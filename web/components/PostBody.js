import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { useNextSanityImage } from 'next-sanity-image';
import getYouTubeID from 'get-youtube-id';
import urlFor from '../lib/sanity/urlFor';
import client from '../lib/sanity/client';

const BodyImage = ({ value }) => {
  const imageProps = useNextSanityImage(client, value);
  return (
    <figure>
      <Image
        {...imageProps}
        src={urlFor(value).url()}
        alt={value.alt}
        placeholder="blur"
        layout="responsive"
        sizes="(max-width: 800px) 100vw, 800px"
      />
      <figcaption>
        <small>
          <em>{value.caption}</em>
        </small>
      </figcaption>
    </figure>
  );
};

const YouTube = ({ value }) => {
  const id = getYouTubeID(value.url);
  const url = `https://www.youtube-nocookie.com/embed/${id}`;
  return (
    <div className="youtube">
      <iframe
        title="YouTube video player"
        src={url}
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

const components = {
  types: {
    image: BodyImage,
    youtube: YouTube,
  },
};

export default function PostBody({ content }) {
  return <PortableText value={content} components={components} />;
}
