import React from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import BreadcrumbArea from "../components/ui/BreadcrumbArea";

function about(props) {
  const { t } = useTranslation("common");

  return (
    <>
    <BreadcrumbArea/>
      <section className="about-us section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-content">
                <h2 className="about-title">{t("aboutusHeader")}</h2>
                <h5 className="about-sub-title">{t("aboutUsP1")}</h5>
                <p>{t("aboutUsP2")}</p>
                <p>{t("aboutUsP3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;

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