import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const contacts = () => {
    return (
        <div>
            Contacts
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
  