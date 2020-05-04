import commonEn from './english/common.json';
import recipeEn from './english/recipe.json';
import commonJp from './japanese/common.json';
import recipeJp from './japanese/recipe.json';
import commonMa from './majorcan/common.json';
import ingredientsMa from './majorcan/ingredients.json';
import ingredientsSectionsMa from './majorcan/ingredientsSections.json';
import recipeMa from './majorcan/recipe.json';
import recipesNamesMa from './majorcan/recipesNames.json';
import commonSp from './spanish/common.json';
import recipeSp from './spanish/recipe.json';

export default {
  en: {
    common: commonEn,
    ingredients: ingredientsMa,
    ingredientsSections: ingredientsSectionsMa,
    recipe: recipeEn,
    recipesNames: recipesNamesMa,
  },
  jp: {
    common: commonJp,
    ingredients: ingredientsMa,
    ingredientsSections: ingredientsSectionsMa,
    recipe: recipeJp,
    recipesNames: recipesNamesMa,
  },
  ma: {
    common: commonMa,
    ingredients: ingredientsMa,
    ingredientsSections: ingredientsSectionsMa,
    recipe: recipeMa,
    recipesNames: recipesNamesMa,
  },
  sp: {
    common: commonSp,
    ingredients: ingredientsMa,
    ingredientsSections: ingredientsSectionsMa,
    recipe: recipeSp,
    recipesNames: recipesNamesMa,
  },
};
