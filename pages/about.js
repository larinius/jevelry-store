import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function about(props) {
    return (
        <div>
            About Page
        </div>
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
  