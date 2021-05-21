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

const commonMa = require('./majorcan/template/common.json');
const recipeMa = require('./majorcan/template/recipe.json');
const recipeDetailMa = require('./majorcan/template/recipeDetail.json');
const projectDataMa = require('./majorcan/template/projectData.json');
const ingredientsMa = require('./majorcan/data/ingredients.json');
const ingredientsSectionsMa = require('./majorcan/data/ingredientsSections.json');
const recipesNamesMa = require('./majorcan/data/recipesNames.json');

const coulantMa = require('./majorcan/data/steps/coulant.json');
const croquettesMa = require('./majorcan/data/steps/croquettes.json');
const custardMa = require('./majorcan/data/steps/custard.json');
const fideuaMa = require('./majorcan/data/steps/fideua.json');
const gnocchiMa = require('./majorcan/data/steps/gnocchi.json');
const gyozasMa = require('./majorcan/data/steps/gyozas.json');
const meatballsMa = require('./majorcan/data/steps/meatballs.json');
const butifarraRagoutMa = require('./majorcan/data/steps/butifarraRagout.json');
const risottoMa = require('./majorcan/data/steps/risotto.json');
const salmonTartarMa = require('./majorcan/data/steps/salmonTartar.json');

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
  ma: {
    data: {
      ingredients: ingredientsMa,
      ingredientsSections: ingredientsSectionsMa,
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
    template: {
      common: commonMa,
      projectData: projectDataMa,
      recipe: recipeMa,
      recipeDetail: recipeDetailMa,
    },
  },
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
