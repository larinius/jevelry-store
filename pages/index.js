import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import styles from "../styles/Home.module.css";
import ServicePolicy from "../components/ui/ServicePolicy";
import HomePageText from "../components/ui/HomePageText";
import HomeMediumBanners from "../components/ui/HomeMediumBanners";
import HomeSlider from "../components/ui/HomeSlider";
import ProductCarousel from "../components/ui/ProductCarousel";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Home(props) {
  const router = useRouter();
  const { t } = useTranslation("common");

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "en" ? "he" : "en";

  return (
    <>
      <HomeSlider/>
      <ServicePolicy />
      <HomeMediumBanners/>
      <ProductCarousel/>
      <HomePageText/>
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