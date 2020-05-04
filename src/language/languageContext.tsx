import { createContext } from 'react';
import dictionaries from '../../public/literals/dictionaries';
import languageOptions from '../../public/literals/languageOptions';

const majorcanLanguage = languageOptions[2];
const defaultLanguage = majorcanLanguage;

export default createContext({
  language: defaultLanguage,
  dictionary: dictionaries[defaultLanguage.id],
});
