import { getRandomStringWithLengthInRange } from '../../utils/random';

export default () => ({
  about: getRandomStringWithLengthInRange(1, 10),
  difficulty: getRandomStringWithLengthInRange(1, 10),
  preparationTime: getRandomStringWithLengthInRange(1, 20),
  howManyIngredients: getRandomStringWithLengthInRange(1, 20),
});
