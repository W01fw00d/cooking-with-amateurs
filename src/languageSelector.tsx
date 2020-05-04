import React, { useContext } from 'react';
import languageOptions from '../public/literals/languageOptions';
import { LanguageContext } from './language';

export default function LanguageSelector() {
  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = event => {
    const selectedLanguage = languageOptions.find(({ id }) => id === event.target.value);
    languageContext.setLanguage(selectedLanguage);
  };

  return (
    <select onChange={handleLanguageChange} value={languageContext.language.id}>
      {languageOptions.map(({ id, text }) => (
        <option key={id} value={id}>
          {text}
        </option>
      ))}
    </select>
  );
}
