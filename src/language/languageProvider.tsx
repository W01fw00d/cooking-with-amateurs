import React, { useState, useEffect } from 'react';

import LanguageContext from './languageContext';
import { getLiterals, getLanguageOptions } from '../utils/request';

export default ({ children }) => {
  const [languageState, setLanguageState] = useState();
  const [dictionaryState, setDictionaryState] = useState();

  useEffect(() => {
    if (!languageState) {
      getLanguageOptions((options) => {
        setLanguageState(options[0]);
      });
    }
  }, []);

  useEffect(() => {
    if (languageState) {
      getLiterals(languageState.id, (literals) => {
        setDictionaryState(literals);
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
