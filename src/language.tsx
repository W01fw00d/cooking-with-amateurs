import React, { createContext, useContext, useState } from 'react';
import dictionaries from '../public/literals/dictionaries';
import languageOptions from '../public/literals/languageOptions';

const majorcanLanguage = languageOptions[2];
const defaultContext = {
  language: majorcanLanguage,
  dictionary: dictionaries[majorcanLanguage.id],
};
export const LanguageContext = createContext(defaultContext);

export function LanguageProvider({ children }) {
  const { language, dictionary } = useContext(LanguageContext);
  const [languageState, setLanguageState] = useState(language);
  const [dictionaryState, setDictionaryState] = useState(dictionary);

  const provider = {
    language: languageState,
    dictionary: dictionaryState,
    setLanguage: selectedLanguage => {
      setLanguageState(selectedLanguage);
      setDictionaryState(dictionaries[selectedLanguage.id]);
    },
  };

  return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>;
}

export function translate(file) {
  return useContext(LanguageContext).dictionary[file];
}
