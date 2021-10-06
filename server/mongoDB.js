const fs = require('fs');
const mongoose = require('mongoose');

const recipeModel = require('./api/models/recipe-model');

exports.init = isProdEnv => {
  const SECRETS_PATH = `secrets/${isProdEnv ? 'prod' : 'dev'}/mongoDBUrl`;
  const mongoDBUrl = fs.readFileSync(SECRETS_PATH, 'utf-8');

  mongoose.Promise = global.Promise;

  mongoose.connect(mongoDBUrl, () => {
    recipeModel.initData(recipeModel);
  });
};
