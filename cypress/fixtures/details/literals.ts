import { getRandomStringWithLengthInRange } from '../../utils/random';

export default () => ({
  image: getRandomStringWithLengthInRange(1, 10),
  ingredients: getRandomStringWithLengthInRange(1, 10),
  noIngredients: getRandomStringWithLengthInRange(1, 40),
  steps: getRandomStringWithLengthInRange(1, 10),
  // noSteps: 'No steps required',
});
