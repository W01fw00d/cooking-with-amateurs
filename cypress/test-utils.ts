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

export { getRandomNumber, getRandomString };
