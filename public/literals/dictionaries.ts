const commonEn = require('./english/template/common.json');
const recipeEn = require('./english/template/recipe.json');
const recipeDetailEn = require('./english/template/recipeDetail.json');
const projectDataEn = require('./english/template/projectData.json');
const ingredientsEn = require('./english/data/ingredients.json');
const ingredientsSectionsEn = require('./english/data/ingredientsSections.json');
const recipesNamesEn = require('./english/data/recipesNames.json');

const coulantEn = require('./english/data/steps/coulant.json');
const croquettesEn = require('./english/data/steps/croquettes.json');
const custardEn = require('./english/data/steps/custard.json');
const fideuaEn = require('./english/data/steps/fideua.json');
const gnocchiEn = require('./english/data/steps/gnocchi.json');
const gyozasEn = require('./english/data/steps/gyozas.json');
const meatballsEn = require('./english/data/steps/meatballs.json');
const butifarraRagoutEn = require('./english/data/steps/butifarraRagout.json');
const risottoEn = require('./english/data/steps/risotto.json');
const salmonTartarEn = require('./english/data/steps/salmonTartar.json');


/* import commonJp from './japanese/common.json';
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

import coulantMa from './majorcan/steps/coulant.json';
import croquettesMa from './majorcan/steps/croquettes.json';
import custardMa from './majorcan/steps/custard.json';
import fideuaMa from './majorcan/steps/fideua.json';
import gnocchiMa from './majorcan/steps/gnocchi.json';
import gyozasMa from './majorcan/steps/gyozas.json';
import meatballsMa from './majorcan/steps/meatballs.json';
import butifarraRagoutMa from './majorcan/steps/butifarraRagout.json';
import risottoMa from './majorcan/steps/risotto.json';
import salmonTartarMa from './majorcan/steps/salmonTartar.json';


import commonSp from './spanish/common.json';
import recipeSp from './spanish/recipe.json';
import projectDataSp from './spanish/projectData.json';
import ingredientsSp from './spanish/ingredients.json';
import ingredientsSectionsSp from './spanish/ingredientsSections.json';
import recipesNamesSp from './spanish/recipesNames.json';

import coulantSp from './spanish/steps/coulant.json';
import croquettesSp from './spanish/steps/croquettes.json';
import custardSp from './spanish/steps/custard.json';
import fideuaSp from './spanish/steps/fideua.json';
import gnocchiSp from './spanish/steps/gnocchi.json';
import gyozasSp from './spanish/steps/gyozas.json';
import meatballsSp from './spanish/steps/meatballs.json';
import butifarraRagoutSp from './spanish/steps/butifarraRagout.json';
import risottoSp from './spanish/steps/risotto.json';
import salmonTartarSp from './spanish/steps/salmonTartar.json'; */

exports.literals = {
  en: {
    data: {
      ingredients: ingredientsEn,
      ingredientsSections: ingredientsSectionsEn,
      recipesNames: recipesNamesEn,
      recipeSteps: {
        coulant: coulantEn,
        croquettes: croquettesEn,
        custard: custardEn,
        fideua: fideuaEn,
        gnocchi: gnocchiEn,
        gyozas: gyozasEn,
        meatballs: meatballsEn,
        butifarraRagout: butifarraRagoutEn,
        risotto: risottoEn,
        salmonTartar: salmonTartarEn,
      },
    },
    template: {
      common: commonEn,
      projectData: projectDataEn,
      recipe: recipeEn,
      recipeDetail: recipeDetailEn,
    }
  },
  /*   jp: {
      common: commonJp,
      ingredients: ingredientsJp,
      ingredientsSections: ingredientsSectionsJp,
      projectData: projectDataJp,
      recipe: recipeJp,
      recipeDetail: recipeDetailEn, //TODO: translate
      recipesNames: recipesNamesJp,
      //TODO: create translated files for steps
      recipeSteps: {
        coulant: coulantEn,
        croquettes: croquettesEn,
        custard: custardEn,
        fideua: fideuaEn,
        gnocchi: gnocchiEn,
        gyozas: gyozasEn,
        meatballs: meatballsEn,
        butifarraRagout: butifarraRagoutEn,
        risotto: risottoEn,
        salmonTartar: salmonTartarEn,
      },
    },
    ma: {
      common: commonMa,
      ingredients: ingredientsMa,
      ingredientsSections: ingredientsSectionsMa,
      projectData: projectDataMa,
      recipe: recipeMa,
      recipeDetail: recipeDetailEn, //TODO: translate
      recipesNames: recipesNamesMa,
      recipeSteps: {
        coulant: coulantMa,
        croquettes: croquettesMa,
        custard: custardMa,
        fideua: fideuaMa,
        gnocchi: gnocchiMa,
        gyozas: gyozasMa,
        meatballs: meatballsMa,
        butifarraRagout: butifarraRagoutMa,
        risotto: risottoMa,
        salmonTartar: salmonTartarMa,
      },
    },
    sp: {
      common: commonSp,
      ingredients: ingredientsSp,
      ingredientsSections: ingredientsSectionsSp,
      projectData: projectDataSp,
      recipe: recipeSp,
      recipeDetail: recipeDetailEn, //TODO: translate
      recipesNames: recipesNamesSp,
      recipeSteps: {
        coulant: coulantSp,
        croquettes: croquettesSp,
        custard: custardSp,
        fideua: fideuaSp,
        gnocchi: gnocchiSp,
        gyozas: gyozasSp,
        meatballs: meatballsSp,
        butifarraRagout: butifarraRagoutSp,
        risotto: risottoSp,
        salmonTartar: salmonTartarSp,
      },
    }, */
};
