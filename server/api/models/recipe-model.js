const mongoose = require('mongoose');
const newData = require('../../../public/data/recipes.json');

const { Schema } = mongoose;

const IngredientAlternativeSchema = new Schema({ code: String });

const IngredientSchema = new Schema({
  code: String,
  quantity: String,
  alternatives: [IngredientAlternativeSchema],
});

const IngredientSectionSchema = new Schema({ sectionName: String, items: [IngredientSchema] });

const ImageSchema = new Schema({
  src: String,
  width: Number,
  height: Number,
});

const RecipeSchema = new Schema({
  id: {
    type: Number,
    required: 'Kindly enter the id of the room',
  },
  code: {
    type: String,
    required: 'Kindly enter the code name of the room',
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
    type: ImageSchema,
  },
  showName: {
    type: Boolean,
  },
  ingredients: {
    type: [IngredientSectionSchema],
  },
});

RecipeSchema.statics.initData = data => {
  data.remove({}, error => {
    // TODO: handle error
    newData.forEach(newRegister => {
      data.create(newRegister);
    });
  });
};

module.exports = mongoose.model('Recipes', RecipeSchema);
