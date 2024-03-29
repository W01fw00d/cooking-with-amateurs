module.exports = app => {
  const controller = require('../controllers/controller');

  app.route('/recipes').get(controller.list_all_recipes);
  app.route('/details/:recipeId').get(controller.read_a_recipe_details);
  app.route('/literals/:language').get(controller.list_literals);
  app.route('/emojis').get(controller.list_emojis);
  app.route('/languageOptions').get(controller.language_options);
};
