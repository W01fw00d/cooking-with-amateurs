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

const commonJp = require('./japanese/template/common.json');
const recipeJp = require('./japanese/template/recipe.json');
const recipeDetailJp = require('./japanese/template/recipeDetail.json');
const projectDataJp = require('./japanese/template/projectData.json');
const ingredientsJp = require('./japanese/data/ingredients.json');
const ingredientsSectionsJp = require('./japanese/data/ingredientsSections.json');
const recipesNamesJp = require('./japanese/data/recipesNames.json');

/*
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
*/

const commonSp = require('./spanish/template/common.json');
const recipeSp = require('./spanish/template/recipe.json');
const recipeDetailSp = require('./spanish/template/recipeDetail.json');
const projectDataSp = require('./spanish/template/projectData.json');
const ingredientsSp = require('./spanish/data/ingredients.json');
const ingredientsSectionsSp = require('./spanish/data/ingredientsSections.json');
const recipesNamesSp = require('./spanish/data/recipesNames.json');

const coulantSp = require('./spanish/data/steps/coulant.json');
const croquettesSp = require('./spanish/data/steps/croquettes.json');
const custardSp = require('./spanish/data/steps/custard.json');
const fideuaSp = require('./spanish/data/steps/fideua.json');
const gnocchiSp = require('./spanish/data/steps/gnocchi.json');
const gyozasSp = require('./spanish/data/steps/gyozas.json');
const meatballsSp = require('./spanish/data/steps/meatballs.json');
const butifarraRagoutSp = require('./spanish/data/steps/butifarraRagout.json');
const risottoSp = require('./spanish/data/steps/risotto.json');
const salmonTartarSp = require('./spanish/data/steps/salmonTartar.json');

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
    },
  },
  jp: {
    data: {
      ingredients: ingredientsJp,
      ingredientsSections: ingredientsSectionsJp,
      recipesNames: recipesNamesJp,
      // TODO: create translated files for steps
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
      common: commonJp,
      projectData: projectDataJp,
      recipe: recipeJp,
      recipeDetail: recipeDetailJp,
    },
  },
  /*
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
    */
  sp: {
    data: {
      ingredients: ingredientsSp,
      ingredientsSections: ingredientsSectionsSp,
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
    },
    template: {
      common: commonSp,
      projectData: projectDataSp,
      recipe: recipeSp,
      recipeDetail: recipeDetailSp,
    },
  },
};
