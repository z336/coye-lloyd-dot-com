import Head from 'next/head';
// import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coye Lloyd</title>
        <meta
          name="Coye Lloyd's personal website"
          content="Coye Lloyd's portfolio and writing"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <article>
        <div className="box | border-bottom">
          <h1>
            Para Academic <br />
            <span className="film"> Film</span>
            <br />
            <span className="media">Media</span> <br />
            <span className="ampersand">&amp;</span> Culture
          </h1>
        </div>
        <div className="box | flow">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            deleniti eligendi magni, aspernatur fuga reiciendis aliquid sed
            nobis. Deserunt assumenda natus ullam ea voluptas? Dolor veniam
            porro perferendis ad enim.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            voluptates natus pariatur deleniti beatae. Quo omnis quasi beatae
            aspernatur minima, eligendi illo consectetur modi? Temporibus ad
            accusantium repudiandae molestiae nemo. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Iste quidem, aperiam at repellendus
            accusantium in esse quas consectetur totam voluptatem, minima
            laborum unde facere a iure tempora eaque assumenda? Odio.
          </p>
        </div>
      </article>
    </>
  );
}
