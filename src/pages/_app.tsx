import { type AppType } from "next/dist/shared/lib/utils";

import "npm/styles/globals.css";
import Layout from "npm/components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
