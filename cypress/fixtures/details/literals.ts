import { getRandomStringWithLengthInRange } from '../../utils/random';

export default () => ({
  /*  image: 'Image', */
  ingredients: getRandomStringWithLengthInRange(1, 10),
  noIngredients: getRandomStringWithLengthInRange(1, 40),
  /* steps: 'Steps',
  noSteps: 'No steps required', */
});
