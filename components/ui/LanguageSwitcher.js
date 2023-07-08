import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { useTranslation, Trans } from "next-i18next";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { getCookie, getCookies, setCookie, deleteCookie } from "cookies-next";
import ProductContext from "../context/ProductContext";

function LanguageSwitcher() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { setSelectedLanguage } = useContext(ProductContext);

  const options = [
    { value: "", text: t("language") },
    { value: "en", text: "English" },
    { value: "he", text: "עברית" },
    { value: "ru", text: "Рус" },
  ];

  const [language, setLanguage] = useState(options[0].value);

  useEffect(() => {
    const lang = getCookie("language");
    if (lang) {
      setLanguage(lang);
      setSelectedLanguage(lang);
      const { pathname, asPath, query } = router;
      router.push({ pathname, query }, asPath, { locale: lang });
    }
  }, []);

  const switchLang = (e) => {
    e.preventDefault();
    const lang = e.target.value;
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lang });
    setLanguage(lang);
    setCookie("language", lang);
    setSelectedLanguage(lang); // Update selected language in context
  };

  return (
    <>
      <li className="language">
        <div className="langSelector">
          <Form>
            <Form.Select value={language} size="sm" onChange={switchLang}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </Form.Select>
          </Form>
        </div>
      </li>
    </>
  );
}

export default LanguageSwitcher;
