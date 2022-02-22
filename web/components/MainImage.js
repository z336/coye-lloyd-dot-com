import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import urlFor from '../lib/sanity/urlFor';
import client from '../lib/sanity/client';
import { FaCamera } from 'react-icons/fa';

export default function MainImage({ mainImage, alt, caption }) {
  const mainImageProps = useNextSanityImage(client, mainImage);

  return (
    <figure>
      <Image
        {...mainImageProps}
        src={urlFor(mainImage).url()}
        alt={alt}
        placeholder="blur"
        layout="responsive"
        sizes="(max-width: 800px) 100vw, 800px"
      />
      {caption && (
        <figcaption>
          <FaCamera />
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
