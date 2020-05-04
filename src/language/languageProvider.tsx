import React, { useContext, useState } from 'react';
import dictionaries from '../../public/literals/dictionaries';
import LanguageContext from './languageContext';

export default ({ children }) => {
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
};
