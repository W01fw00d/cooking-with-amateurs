import { useContext } from 'react';
import LanguageContext from './languageContext';

export default file => {
  const dictionary = useContext(LanguageContext).dictionary;

  return dictionary ? dictionary[file] : {};
};
