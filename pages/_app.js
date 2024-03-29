import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import SSRProvider from "react-bootstrap/SSRProvider";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "../components/layout/Layout";

import ProductContext, { ProductProvider } from "../components/context/ProductContext";
import { appWithTranslation } from "next-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-multi-carousel/lib/styles.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/globals.css";
import "../styles/font-face.css";
import "../styles/Theme.css";
import "../styles/custom.css";
import dynamic from "next/dynamic";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { AxiosProvider } from "../lib/axios";
const FingerprintNoSSR = dynamic(() => import("../components/ui/Fingerprint"), {
  ssr: false,
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const adminPanel = router.route.startsWith("/admin") ? true : false;

  const { locale } = useRouter();
  const dir = locale === "he" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
  }, []);

  return (
    <>
      <AxiosProvider>
        <QueryClientProvider client={queryClient}>
          <SSRProvider>
            <Provider store={store}>
              <ThemeProvider dir={dir}>
                <ProductProvider>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ProductProvider>
              </ThemeProvider>
            </Provider>
          </SSRProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <FingerprintNoSSR />
        </QueryClientProvider>
      </AxiosProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
