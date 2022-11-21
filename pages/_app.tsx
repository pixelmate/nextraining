import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../common/Layout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

export default function App({ Component, pageProps }: AppProps) {
  // console.log("pageProps", pageProps);
  return (
    <Layout footerstatus={pageProps.footerstatus}>
      <Component {...pageProps} />
    </Layout>
  );
}