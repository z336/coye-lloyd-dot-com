import * as React from 'react';
import HelmetTemplate from '../components/SEO';

export default function Bio() {
  return (
    <>
      <HelmetTemplate title="Bio" />
      <article className="texture | padding-bottom">
        <div className="box | smooth | border-bottom">
          <h1>Bio</h1>
        </div>
        <div className="grid | smooth | border-top | border-bottom | margin-top">
          <article className="border-right">
            <div className="box">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                deleniti eligendi magni, aspernatur fuga reiciendis aliquid sed
                nobis. Deserunt assumenda natus ullam ea voluptas? Dolor veniam
                porro perferendis ad enim.
              </p>
            </div>
          </article>
          <article>
            <div className="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                voluptates natus pariatur deleniti beatae. Quo omnis quasi
                beatae aspernatur minima, eligendi illo consectetur modi?
                Temporibus ad accusantium repudiandae molestiae nemo. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Iste quidem,
                aperiam at repellendus accusantium in esse quas consectetur
                totam voluptatem, minima laborum unde facere a iure tempora
                eaque assumenda? Odio.
              </p>
            </div>
          </article>
        </div>
      </article>
    </>
  );
}
