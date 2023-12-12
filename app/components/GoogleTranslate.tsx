"use client";
import { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { get } from "http";

interface Language {
  key: string;
  label: string;
  value: string;
}
const languages: Language[] = [
  { key: "us", label: "English", value: "/auto/en" },
  { key: "fr", label: "French", value: "/auto/fr" },
];

function GoogleTranslate() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const LANGUAGE_SELECTOR_ID = "language-selector";
  const GOOGLE_TRANS_COOKIE = "googtrans";

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        includedLanguages: "en,fr", // If you remove it, by default all google supported language will be included
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    const cookie = getCookie(GOOGLE_TRANS_COOKIE);
    const language = languages.find((l) => l.value === cookie);
    console.log({ language });
    if (hasCookie(GOOGLE_TRANS_COOKIE)) {
      setSelectedLanguage(language);
    }
  }, []);

  const handleLanguageChange = (language: Language) => {
    setCookie(GOOGLE_TRANS_COOKIE, language.value);
    setSelectedLanguage(language);
    window.location.reload();
  };

  return (
    <>
      <div className="hidden sm:flex items-center z-40">
        <div className="relative inline-block text-left">
          <div className="  ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="flex items-center justify-center gap-1"
              id={LANGUAGE_SELECTOR_ID}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <FlagIcon countryCode={selectedLanguage.key} />
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-selector"
            >
              <div className="py-1 grid grid-cols-2 gap-2" role="none">
                {languages.map((language, index) => {
                  return (
                    <button
                      key={language.key}
                      onClick={() => handleLanguageChange(language)}
                      className={`space-x-2 ${
                        selectedLanguage.key === language.key
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700"
                      }  px-4 py-2 text-sm text-left items-center inline-flex hover:bg-gray-100 ${
                        index % 2 === 0 ? "rounded-r" : "rounded-l"
                      }`}
                      role="menuitem"
                    >
                      <FlagIcon countryCode={language.key} />
                      <span className="truncate">{language.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

interface FlagIconProps {
  countryCode: string;
}

function FlagIcon({ countryCode = "" }: FlagIconProps) {
  if (countryCode === "en") {
    countryCode = "gb";
  }

  return <span className={`fi fis !w-7 !h-7 rounded-full fi-${countryCode}`} />;
}

export default GoogleTranslate;
