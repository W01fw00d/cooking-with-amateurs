const mongoose = require('mongoose');

const recipeModel = require('./api/models/recipe-model');

exports.init = mongoDBUrl => {
  mongoose.Promise = global.Promise;

  mongoose.connect(mongoDBUrl, () => {
    recipeModel.initData(recipeModel);
  });
};
