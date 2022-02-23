import useScrollRestoration from '../utils/hooks/useScrollRestoration';
import '../styles/global.scss';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }) {
  // a somewhat ridiculous workaround to preserve expected scroll history behavior
  useScrollRestoration(router);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
