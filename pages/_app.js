import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from '../components/layout/Layout'
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === "he" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  // return <Component {...pageProps} />;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}

export default appWithTranslation(MyApp);
