import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === "he" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
