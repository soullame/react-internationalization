import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    lang: "English"
  },
  {
    code: "fr",
    lang: "Frensh"
  },
  {
    code: "de",
    lang: "Deutsch"
  },
  {
    code: "ar",
    lang: "Arabic"
  }
];
export default function LanguageSelector() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    return savedLanguage ? savedLanguage : "en";
  });
  const { i18n } = useTranslation();

  const handleChange = (event: { target: { value: any } }) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="relative inline-block w-32">
      <select
        value={language}
        onChange={handleChange}
        className="block w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-base text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languages.map(lng => (
          <option key={lng.code} value={lng.code}>
            {lng.lang}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          className="h-4 w-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
}

{
  /* <div>
  {languages.map(lng => (
                  <button key={lng.code} onClick={() => changeLanguage(lng.code)}>
      {lng.lang}
    </button>
  ))}
</div> */
}
