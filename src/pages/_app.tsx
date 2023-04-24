import { type AppType } from "next/dist/shared/lib/utils";

import "npm/styles/globals.css";
import Layout from "npm/components/layout";
import { Toaster } from "npm/components/ui/toaster";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  );
};

export default MyApp;
