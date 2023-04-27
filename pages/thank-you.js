import React, { useEffect } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import dynamic from "next/dynamic";
const ThankYouNoSSR = dynamic(() => import("../components/ui/ThankYou"), {
  ssr: false,
});


function thankYou(props) {

  return (
    <>
      <ThankYouNoSSR />
    </>
  );
}

export default thankYou;

export async function getServerSideProps({ locale, req, res }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      ...setCookie("test", "value", { req, res, maxAge: 60 * 6 * 24 }),
      ...getCookie("test", { req, res }),
      ...getCookies({ req, res }),
      ...deleteCookie("test", { req, res }),
    },
  };
}
