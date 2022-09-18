import React, { useState, useEffect, useRef } from "react";
import { useTranslation, Trans } from "next-i18next";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { getCookie, getCookies, setCookie, deleteCookie } from "cookies-next";

function LanguageSwitcher() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const options = [
    { value: "", text: t("language") },
    { value: "en", text: "English" },
    { value: "he", text: "עברית" },
    { value: "ru", text: "Рус" },
  ];

  useEffect(() => {
    const lang = getCookie("language");
    if (lang) {
      setlanguage(lang);
      const { pathname, asPath, query } = router;
      router.push({ pathname, query }, asPath, { locale: lang });
    }
    console.log(lang);
  }, []);

  const [language, setlanguage] = useState(options[0].value);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const switchLang = (e) => {
    e.preventDefault();
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: e.target.value });
    setCookie("language", e.target.value);
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
