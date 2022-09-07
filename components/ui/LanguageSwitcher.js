import React from "react";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import Form from "react-bootstrap/Form";

function LanguageSwitcher() {
  const router = useRouter();
  const { t } = useTranslation("common");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Form.Select
      size="sm"
      onChange={(e) => onToggleLanguageClick(e.target.value)}
    >
      <option>Language</option>
      <option value="he">עברית</option>
      <option value="en">En</option>
      <option value="ru">Рус</option>
    </Form.Select>
  );
}

export default LanguageSwitcher;
