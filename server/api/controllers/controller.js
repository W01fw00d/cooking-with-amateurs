'use strict';

const dictionaries = require('../../../public/literals/dictionaries.js');
const language = require('../../../public/literals/languageOptions.js');

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

exports.list_literals = function(req, res) {
  res.json(dictionaries.literals[req.params.language]);
};

exports.list_language_options = function(req, res) {
  res.json(language.options);
};