import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import SSRProvider from "react-bootstrap/SSRProvider";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Layout from "../components/layout/Layout";

import ProductContext, {
  ProductProvider,
} from "../components/context/ProductContext";
import { appWithTranslation } from "next-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-multi-carousel/lib/styles.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/globals.css";
import "../styles/font-face.css";
import "../styles/Theme.css";
import "../styles/custom.css";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <SSRProvider>
        <Layout>
          <ThemeProvider dir={dir}>
            <ProductProvider>
              <Component {...pageProps} />
            </ProductProvider>
          </ThemeProvider>
        </Layout>
      </SSRProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
