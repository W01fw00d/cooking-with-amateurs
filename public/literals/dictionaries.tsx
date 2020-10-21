import commonEn from './english/common.json';
import recipeEn from './english/recipe.json';
import projectDataEn from './english/projectData.json';
import commonJp from './japanese/common.json';
import recipeJp from './japanese/recipe.json';
import projectDataJp from './japanese/projectData.json';
import commonMa from './majorcan/common.json';
import ingredientsMa from './majorcan/ingredients.json';
import ingredientsSectionsMa from './majorcan/ingredientsSections.json';
import projectDataMa from './majorcan/projectData.json';
import recipeMa from './majorcan/recipe.json';
import recipesNamesMa from './majorcan/recipesNames.json';
import commonSp from './spanish/common.json';
import recipeSp from './spanish/recipe.json';
import projectDataSp from './spanish/projectData.json';

export default {
  en: {
    common: commonEn,
    ingredients: ingredientsMa,
    ingredientsSections: ingredientsSectionsMa,
    projectData: projectDataEn,
    recipe: recipeEn,
    recipesNames: recipesNamesMa,
  },
  jp: {
    common: commonJp,
    ingredients: ingredientsMa,
    ingredientsSections: ingredientsSectionsMa,
    projectData: projectDataJp,
    recipe: recipeJp,
    recipesNames: recipesNamesMa,
  },
  ma: {
    common: commonMa,
    ingredients: ingredientsMa,
    ingredientsSections: ingredientsSectionsMa,
    projectData: projectDataMa,
    recipe: recipeMa,
    recipesNames: recipesNamesMa,
  },
  sp: {
    common: commonSp,
    ingredients: ingredientsMa,
    ingredientsSections: ingredientsSectionsMa,
    projectData: projectDataSp,
    recipe: recipeSp,
    recipesNames: recipesNamesMa,
  },
};
