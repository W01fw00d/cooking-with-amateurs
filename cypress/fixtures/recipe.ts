import { getRandomStringWithLengthInRange, getRandomNumber } from '../utils/random';

export default () => ({
  id: '1',
  code: getRandomStringWithLengthInRange(1, 20),
  description: getRandomStringWithLengthInRange(1, 100),
  preparationTime: '02:00',
  eventDate: '26/04/2020',
  difficulty: getRandomNumber(1, 5),
  nIngredients: getRandomNumber(1, 5),
  image: null,
});
