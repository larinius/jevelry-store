import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";

import BreadcrumbArea from "../components/ui/BreadcrumbArea";
import WishlistArea from "../components/ui/WishlistArea";

export default function Wishlist() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
    <BreadcrumbArea/>
    <WishlistArea/>
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