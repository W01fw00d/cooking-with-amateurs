const getRandomNumber = (min: number = 0, max: number = 9): number =>
  min >= max ? min : Math.floor(Math.random() * max + min);

const getRandomString = (requestedLength: number = 10): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -_';
  let result = '';

  for (let i = 0; i < requestedLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

// TODO: unit test this
const getRandomStringWithLengthInRange = (min: number = 0, max: number = 9): string =>
  getRandomString(getRandomNumber(min, max));

export { getRandomNumber, getRandomString, getRandomStringWithLengthInRange };
