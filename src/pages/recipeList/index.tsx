import { RecipeListTemplate } from 'chemistry-ui';
import React, { useEffect, useState, useContext } from 'react';

import translate from '../../language/translate';
import LanguageContext from '../../language/languageContext';
import languageOptions from '../../../public/literals/languageOptions';
import { getRecipes } from '../../utils/request';

import { Literals } from './interfaces';

export default () => {
  const common = translate('common');
  const recipe = translate('recipe');
  const recipesNamesLiterals = translate('recipesNames');

  const literals = { ...common, ...recipe };
  const getLiterals = ({ about, difficulty, preparationTime, howManyIngredients, participants }: Literals) => ({
    about,
    difficulty,
    preparationTime,
    howManyIngredients,
    participants,
  });

  const [search, setSearch] = useState(common.comingSoon);
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    getRecipes(recipeResults => {
      setRecipes(
        recipeResults.map(recipeResult => {
          if (recipeResult.showName) {
            recipeResult.name = recipesNamesLiterals[recipeResult.code];
          }

          return recipeResult;
        }),
      );
    });
  }, []);

  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = event => {
    const selectedLanguage = languageOptions.find(({ id }) => id === event.target.value);
    languageContext.setLanguage(selectedLanguage);
  };

  return recipes &&
    <RecipeListTemplate
      literals={getLiterals(literals)}
      search={search}
      itemList={recipes}
      languageData={{
        active: languageContext.language.id,
        options: languageOptions,
        onChange: handleLanguageChange,
      }}
      handleChange={({ currentTarget }: { currentTarget: { value: string } }) => {
        setSearch(currentTarget.value);
      }}
      handleClick={() => { }}
    />;
};
