import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import dynamic from "next/dynamic";
const CartAreaNoSSR = dynamic(() => import("../components/ui/CartArea"), {
  ssr: false,
});

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Cart(props) {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
    <CartAreaNoSSR/>
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