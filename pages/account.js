import React, { useState, useEffect } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { sessionOptions } from "/lib/session";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { withIronSessionSsr } from "iron-session/next";
import Link from "next/link";
import useUser from "/lib/useUser";

import AccountArea from "../components/ui/AccountArea";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Account() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { user } = useUser();

  useEffect(() => {
    if (!user?.isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return <>{user?.isLoggedIn && <AccountArea />}</>;
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
},
sessionOptions);
