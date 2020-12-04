import React, { useState, useEffect } from 'react';

import LanguageContext from './languageContext';
import { getLiterals } from '../utils/request';

import language from '../../public/literals/languageOptions.json';

export default ({ children }) => {
  const [languageState, setLanguageState] = useState(language.options[0]);
  const [dictionaryState, setDictionaryState] = useState();

  useEffect(() => {
    if (languageState) {
      getLiterals(languageState.id, (literals) => {
        setDictionaryState({ ...literals.data, ...literals.template });
      });
    }
  }, [languageState]);

  const provider = {
    language: languageState,
    dictionary: dictionaryState,
    setLanguage: selectedLanguage => {
      setLanguageState(selectedLanguage);
    },
  };

  return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>;
};
