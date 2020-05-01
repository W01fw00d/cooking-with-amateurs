'use strict';
var mongoose = require('mongoose');
const newData = require('../../../public/data/recipes.json');

var Schema = mongoose.Schema;

var IngredientAlternativeSchema = new Schema({ code: String });

var IngredientSchema = new Schema({
  code: String,
  quantity: String,
  alternatives: [IngredientAlternativeSchema],
});

var IngredientSectionSchema = new Schema({ sectionName: String, items: [IngredientSchema] });

var RecipeSchema = new Schema({
  id: {
    type: Number,
    required: 'Kindly enter the id of the room',
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the room',
  },
  description: {
    type: String,
  },
  preparationTime: {
    type: String,
  },
  eventDate: {
    type: String,
  },
  difficulty: {
    type: Number,
  },
  nIngredients: {
    type: Number,
  },
  image: {
    type: String,
  },
  showName: {
    type: Boolean,
  },
  ingredients: {
    type: [IngredientSectionSchema],
  },
});

RecipeSchema.statics.initData = data => {
  data.remove({}, err => {
    newData.forEach(newRegister => {
      data.create(newRegister);
    });
  });
};

module.exports = mongoose.model('Recipes', RecipeSchema);
