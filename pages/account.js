import React, { useState, useEffect } from 'react';
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { sessionOptions } from "/lib/session";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { withIronSessionSsr } from "iron-session/next";
import Link from "next/link";

import AccountArea from "../components/ui/AccountArea";
import BreadcrumbArea from "../components/ui/BreadcrumbArea";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Account(props) {
  const router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    
    if( !props.user?.isLoggedIn){
      console.log("NOT LOGGED IN!");
      router.push("/login");
    }

  }, []);


  return (
    <>
      <BreadcrumbArea />
      {props.user?.isLoggedIn && <AccountArea user={props.user} />}
    </>
  );
}

// export async function getServerSideProps({ locale, req, res }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//       ...getCookies({ req, res }),
//     },
//   };
// }

export const getServerSideProps = withIronSessionSsr(async function ({
  locale,
  req,
  res,
}) {
  const user = req.session.user;

  if (user === undefined) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        ...{ user: { isLoggedIn: false } },
        ...(await serverSideTranslations(locale, ["common"])),
        ...getCookies({ req, res }),
      },
    };
  }

  return {
    props: { user: req.session.user },
  };
},
sessionOptions);
