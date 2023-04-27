import React, { useState, useEffect } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import Link from "next/link";
import { useUser } from "../lib/apiHooks";
import { useSelector, useDispatch } from "react-redux";

import dynamic from "next/dynamic";
const AccountAreaNoSSR = dynamic(() => import("../components/ui/account/AccountArea"), {
  ssr: false,
});

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Account() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { user } = useUser();
  const auth = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (!auth?.isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return <>{auth?.isLoggedIn && <AccountAreaNoSSR />}</>;
}

// export async function getServerSideProps({ locale, req, res }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//       ...getCookies({ req, res }),
//     },
//   };
// }

export async function  getServerSideProps ({ locale,  req,  res,}) {
  // const user = req.session.user;

  // if (user === undefined) {
  //   res.setHeader("location", "/login");
  //   res.statusCode = 302;
  //   res.end();
  //   return {
  //     props: {
  //       ...{ user: { isLoggedIn: false } },
  //       ...(await serverSideTranslations(locale, ["common"])),
  //       ...getCookies({ req, res }),
  //     },
  //   };
  // }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      ...getCookies({ req, res }),
    },
  };
}
