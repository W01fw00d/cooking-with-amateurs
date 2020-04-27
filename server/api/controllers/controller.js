'use strict';

var mongoose = require('mongoose'),
  Recipe = mongoose.model('Recipes');

exports.list_all_recipes = function(req, res) {
  Recipe.find({}, function(err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};

exports.read_a_recipe_details = function(req, res) {
  Recipe.find({ id: req.params.recipeId }, function(err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};
