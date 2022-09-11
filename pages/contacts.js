import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import dynamic from 'next/dynamic';
const OSMapNoSSR = dynamic(() => import ('../components/ui/OpenStreetMapArea'), {ssr:false,});
import ContactForm from '../components/ui/ContactForm';

const contacts = () => {


  const { t } = useTranslation("common");

    return (
        <div>
            <OSMapNoSSR/>
            <ContactForm/>
        </div>
    );
};

export default contacts;

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
  