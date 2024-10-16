import { LanguageOptions } from "../constant/interfaces";

const setLang = (newLang: LanguageOptions) => {
  localStorage.setItem("lang", newLang);
};

const getLang = () => {
  const langString = localStorage.getItem("lang");
  return langString as LanguageOptions;
};

export { getLang, setLang };
