import commonEn from './english/common.json';
import recipeEn from './english/recipe.json';
import projectDataEn from './english/projectData.json';
import ingredientsEn from './english/ingredients.json';
import ingredientsSectionsEn from './english/ingredientsSections.json';
import recipesNamesEn from './english/recipesNames.json';

import commonJp from './japanese/common.json';
import recipeJp from './japanese/recipe.json';
import ingredientsJp from './japanese/ingredients.json';
import projectDataJp from './japanese/projectData.json';
import recipesNamesJp from './japanese/recipesNames.json';
import ingredientsSectionsJp from './japanese/ingredientsSections.json';

import commonMa from './majorcan/common.json';
import ingredientsMa from './majorcan/ingredients.json';
import ingredientsSectionsMa from './majorcan/ingredientsSections.json';
import projectDataMa from './majorcan/projectData.json';
import recipeMa from './majorcan/recipe.json';
import recipesNamesMa from './majorcan/recipesNames.json';

import commonSp from './spanish/common.json';
import recipeSp from './spanish/recipe.json';
import projectDataSp from './spanish/projectData.json';
import ingredientsSp from './spanish/ingredients.json';
import ingredientsSectionsSp from './spanish/ingredientsSections.json';
import recipesNamesSp from './spanish/recipesNames.json';

import coulant from './spanish/steps/coulant.json';
import croquettes from './spanish/steps/croquettes.json';
import custard from './spanish/steps/custard.json';
import fideua from './spanish/steps/fideua.json';
import gnocchi from './spanish/steps/gnocchi.json';
import gyozas from './spanish/steps/gyozas.json';
import meatballs from './spanish/steps/meatballs.json';
import butifarraRagout from './spanish/steps/butifarraRagout.json';
import risotto from './spanish/steps/risotto.json';
import salmonTartar from './spanish/steps/salmonTartar.json';

export default {
  en: {
    common: commonEn,
    ingredients: ingredientsEn,
    ingredientsSections: ingredientsSectionsEn,
    projectData: projectDataEn,
    recipe: recipeEn,
    recipesNames: recipesNamesEn,
    //TODO: create translated files for steps
    recipeSteps: {
      coulant,
      croquettes,
      custard,
      fideua,
      gnocchi,
      gyozas,
      meatballs,
      butifarraRagout,
      risotto,
      salmonTartar,
    },
  },
  jp: {
    common: commonJp,
    ingredients: ingredientsJp,
    ingredientsSections: ingredientsSectionsJp,
    projectData: projectDataJp,
    recipe: recipeJp,
    recipesNames: recipesNamesJp,
    //TODO: create translated files for steps
    recipeSteps: {
      coulant,
      croquettes,
      custard,
      fideua,
      gnocchi,
      gyozas,
      meatballs,
      butifarraRagout,
      risotto,
      salmonTartar,
    },
  },
  ma: {
    common: commonMa,
    ingredients: ingredientsMa,
    ingredientsSections: ingredientsSectionsMa,
    projectData: projectDataMa,
    recipe: recipeMa,
    recipesNames: recipesNamesMa,
    //TODO: create translated files for steps
    recipeSteps: {
      coulant,
      croquettes,
      custard,
      fideua,
      gnocchi,
      gyozas,
      meatballs,
      butifarraRagout,
      risotto,
      salmonTartar,
    },
  },
  sp: {
    common: commonSp,
    ingredients: ingredientsSp,
    ingredientsSections: ingredientsSectionsSp,
    projectData: projectDataSp,
    recipe: recipeSp,
    recipesNames: recipesNamesSp,
    recipeSteps: {
      coulant,
      croquettes,
      custard,
      fideua,
      gnocchi,
      gyozas,
      meatballs,
      butifarraRagout,
      risotto,
      salmonTartar,
    },
  },
};
