import { RecipeListTemplate } from 'chemistry-ui';
import React, { useEffect, useState, useContext } from 'react';

import translate from '../../language/translate';
import LanguageContext from '../../language/languageContext';
import { getRecipes } from '../../utils/request';

import { Literals } from './interfaces';

// TODO: this should be accesed through an API call, that way we can mock it on the ftests
import language from '../../../public/literals/languageOptions.json';

export default () => {
  const languageOptions = language.options;
  const common = translate('common');
  const recipe = translate('recipe');
  const recipesNamesLiterals = translate('recipesNames');

  const literals = { ...common, ...recipe };
  const getLiterals = ({
    about,
    difficulty,
    preparationTime,
    howManyIngredients,
    participants,
  }: Literals) => ({
    about,
    difficulty,
    preparationTime,
    howManyIngredients,
    participants,
  });

  const [search, setSearch] = useState(''); // TODO: Implement search feature
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (recipesNamesLiterals) {
      getRecipes(recipeResults => {
        setRecipes(
          recipeResults.map(recipeResult => {
            recipeResult.name = recipesNamesLiterals[recipeResult.code];

            return recipeResult;
          }),
        );
      });
    }
  }, [recipesNamesLiterals]);

  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = event => {
    const selectedLanguage = languageOptions.find(({ id }) => id === event.target.value);
    languageContext.setLanguage(selectedLanguage);
  };

  const languageActive = languageContext.language;

  return (
    <RecipeListTemplate
      literals={getLiterals(literals)}
      search={search}
      itemList={recipes}
      languageData={{
        active: languageActive ? languageActive.id : 0,
        options: languageOptions,
        onChange: handleLanguageChange,
      }}
      handleChange={({ currentTarget }: { currentTarget: { value: string } }) => {
        setSearch(currentTarget.value);
      }}
      handleClick={() => {}}
    />
  );
};
