const mongoose = require('mongoose');

const dictionaries = require('../../../public/literals/dictionaries.ts');
const emojis = require('../../../public/data/emojis.json');
const languageOptions = require('../../../public/data/languageOptions.json');

const Recipe = mongoose.model('Recipes');

exports.list_all_recipes = (req, res) => {
  Recipe.find({}, (err, result) => {
    if (err) res.send(err);
    res.json(result);
  });
};

exports.read_a_recipe_details = (req, res) => {
  Recipe.find({ id: req.params.recipeId }, (err, result) => {
    if (err) res.send(err);
    res.json(result);
  });
};

exports.list_literals = (req, res) => {
  res.json(dictionaries.literals[req.params.language]);
};

exports.list_emojis = (req, res) => {
  res.json(emojis);
};

exports.language_options = (req, res) => {
  res.json(languageOptions);
};
