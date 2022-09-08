import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import styles from "../styles/Home.module.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

import LanguageSwitcher from "../components/ui/LanguageSwitcher";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("common");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "en" ? "he" : "en";

  return (
    // <div className={styles.container}>
    //   <main className={styles.main}>
    //     <LanguageSwitcher />
    //     <br></br>
    //     <h1>{t("title")}</h1>

    //     <p>
    //     {t("loremIpsum")}
    //     </p>

    //   </main>

    //   <footer className={styles.footer}>FOOTER</footer>
    // </div>
    <>
      {/* <LanguageSwitcher /> */}
      <br></br>
      <h1>{t("title")}</h1>
      <p>{t("loremIpsum")}</p>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
