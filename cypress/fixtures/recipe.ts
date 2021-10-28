import { getRandomStringWithLengthInRange, getRandomNumber } from '../utils/random';

export default () => ({
  id: '1',
  code: getRandomStringWithLengthInRange(1, 20),
  description: getRandomStringWithLengthInRange(1, 100),
  preparationTime: '02:00', // TODO: could be random, but maintaining the data format
  eventDate: '26/04/2020', // TODO: could be random, but maintaining the data format
  difficulty: getRandomNumber(1, 5),
  nIngredients: getRandomNumber(1, 5),
  image: null,
});
