'use strict';

module.exports = function(app) {
  var controller = require('../controllers/controller');

  app.route('/recipes').get(controller.list_all_recipes);
  app.route('/details/:recipeId').get(controller.read_a_recipe_details);
};
