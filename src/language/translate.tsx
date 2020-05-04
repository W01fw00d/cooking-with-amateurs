import { useContext } from 'react';
import LanguageContext from './languageContext';

export default file => useContext(LanguageContext).dictionary[file];
