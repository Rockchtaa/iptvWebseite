"use client";
import { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";

const languages = [
  { label: "English", value: "/auto/en" },
  { label: `French`, value: "/auto/fr" },
 
];

function GoogleTranslate() {
  const [selected, setSelected] = useState<any>(null);

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
    if (hasCookie("googtrans")) {
      setSelected(getCookie("googtrans"));
    } else {
      setSelected("/auto/en");
    }
  }, []);

  const langChange = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.value);
    const value = e.target.value;
    if (hasCookie("googtrans")) {
      setCookie("googtrans", value);
      setSelected(value);
    } else {
      setCookie("googtrans", value);
      setSelected(value);
    }
    window.location.reload();
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";
  return (
    <>
      <div className="relative">
        <button className="hover:text-blue-400" onClick={toggle}>
          languages
        </button>
        <div
          className={`absolute top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded-md ${transClass}`}
        >
          {languages.map((item) => (
            <button
              value={item.value}
              key={item.value}
              className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
              onClick={(e) => {
                langChange(e);
                toggle();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
    // <>
    //   <SelectPicker
    //     data={languages}
    //     style={{ width: 100 }}
    //     placement="bottomEnd"
    //     cleanable={false}
    //     value={selected}
    //     searchable={false}
    //     className={"notranslate"}
    //     menuClassName={"notranslate"}
    //     onSelect={(e, m, evt) => langChange(e, m, evt)}
    //     placeholder="Lang"
    //   />
    // </>
  );
}

export default GoogleTranslate;
