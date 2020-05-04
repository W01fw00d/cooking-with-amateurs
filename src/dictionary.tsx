import commonEn from '../public/literals/english/common.json';
import recipeEn from '../public/literals/english/recipe.json';
//import recipesNamesLiteralsEn from '../public/literals/english/recipesNames.json';
import commonMa from '../public/literals/majorcan/common.json';
import recipeMa from '../public/literals/majorcan/recipe.json';
import recipesNamesLiteralsMa from '../public/literals/majorcan/recipesNames.json';

export const dictionaryList = {
  ma: {
    common: commonMa,
    recipe: recipeMa,
    recipesNamesLiterals: recipesNamesLiteralsMa,
  },
  en: {
    common: commonEn,
    recipe: recipeEn,
    //recipesNamesLiterals: recipesNamesLiteralsEn,
  },
};

export const languageOptions = [
  { id: 'ma', text: 'Mallorquí' },
  { id: 'en', text: 'English' },
];
