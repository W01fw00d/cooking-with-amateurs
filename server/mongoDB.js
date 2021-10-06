const mongoose = require('mongoose');
const recipeModel = require('./api/models/recipe-model');

exports.init = isProdEnv => {
  mongoose.Promise = global.Promise;

  const mongoDBUrl = isProdEnv
    ? // TODO: this string should be secret and not included in the repo
      'mongodb+srv://escapingBoredom:CM9pW7gYwVuptOk7@' +
      'escaping-boredom-au4px.mongodb.net/test?' +
      'retryWrites=true&w=majority'
    : 'mongodb://localhost/Tododb';

  mongoose.connect(mongoDBUrl, () => {
    recipeModel.initData(recipeModel);
  });
};
