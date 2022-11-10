import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import dynamic from "next/dynamic";
const OSMapNoSSR = dynamic(() => import("../components/ui/OpenStreetMapArea"), {
  ssr: false,
});
import ContactForm from "../components/ui/ContactForm";

const contacts = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div id="map-section">
        <div className="map-area section-padding">
          <OSMapNoSSR />
        </div>
        <div className="contact-area section-padding pt-0">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default contacts;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
