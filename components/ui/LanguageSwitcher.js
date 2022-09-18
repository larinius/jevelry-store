import React, { useState, useEffect, useRef } from "react";
import { useTranslation, Trans } from "next-i18next";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";

function LanguageSwitcher() {
  const router = useRouter();
  const { t } = useTranslation("common");
  
  const options = [
    { value: "", text: t("language") },
    { value: "en", text: "En" },
    { value: "he", text: "עברית" },
    { value: "ru", text: "Рус" },
  ];
  
  const [language, setlanguage] = useState(options[0].value);
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const switchLang = (e) => {
    e.preventDefault();
    const { pathname, asPath, query } = router;
    setlanguage(e.target.value);
    console.log(e.target.value);
    router.push({ pathname, query }, asPath, { locale: e.target.value });
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
