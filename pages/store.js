import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function store(props) {
    return (
        <div>
            Store
        </div>
    );
}

export default store;

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
  