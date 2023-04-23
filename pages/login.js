import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { useUser } from "../lib/apiHooks";
import LoginForm from "../components/ui/LoginForm";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Login(props) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { user } = useUser();

  useEffect(() => {
    console.log(user);
    if (user?.isLoggedIn) {
      router.push("/account");
    }
  }, [user]);

  return (
    <>
      <LoginForm />
    </>
  );
}

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
