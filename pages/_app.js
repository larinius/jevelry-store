import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SSRProvider from "react-bootstrap/SSRProvider";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "../components/layout/Layout";
import ProductContext, { ProductProvider } from "../components/context/ProductContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/font-face.css";
import "../styles/Theme.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === "he" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
  }, []);

  return (
    <SSRProvider>
      <Layout>
        <ThemeProvider dir={dir}>
          <ProductProvider>
            <Component {...pageProps} />
          </ProductProvider>
        </ThemeProvider>
      </Layout>
    </SSRProvider>
  );
}

export default appWithTranslation(MyApp);
