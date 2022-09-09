import React from 'react';

import { useTranslation, Trans } from "next-i18next";
import LanguageSwitcher from "./LanguageSwitcher";


const HeaderTop = () => {

    const { t } = useTranslation("common");

    return (
        <>

            <div className="header-top bdr-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="welcome-message">
                                <p>{t("topWelcomeMsg")}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <div className="header-top-settings">
                                <ul className="nav align-items-center justify-content-end">
                                    <li className="language">
                                        <LanguageSwitcher />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         

        </>
    );
};

export default HeaderTop;