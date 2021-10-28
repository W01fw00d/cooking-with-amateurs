import React, { useState, useEffect } from 'react';

import LanguageContext from './languageContext';
import { getLiterals, getLanguageOptions } from '../utils/request';

export default ({ children }) => {
  const [languageState, setLanguageState] = useState();
  const [dictionaryState, setDictionaryState] = useState();

  useEffect(() => {
    getLanguageOptions(result => {
      setLanguageState(result.options[0]);
    });
  }, []);

  useEffect(() => {
    if (languageState) {
      getLiterals(languageState.id, literals => {
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
