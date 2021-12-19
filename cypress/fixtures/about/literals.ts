import { getRandomStringWithLengthInRange } from '../../utils/random';

export const getCommon = () => ({
  gabriel: getRandomStringWithLengthInRange(1, 20),
  about: getRandomStringWithLengthInRange(1, 20),
  participants: getRandomStringWithLengthInRange(1, 20),
  cv: 'https://www.google.com/search?q=cv',
});

export const getProjectData = () => ({
  description: getRandomStringWithLengthInRange(1, 300),
});
