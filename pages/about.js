import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";

function about(props) {
  const { t } = useTranslation("common");

  return (
    <>
      <section class="about-us section-padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="about-content">
                <h2 class="about-title">{t("aboutusHeader")}</h2>
                <h5 class="about-sub-title">{t("aboutUsP1")}</h5>
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
