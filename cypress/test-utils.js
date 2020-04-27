export function getRandomNumber(min = 0, max = 9) {
  return min >= max ? min : Math.floor(Math.random() * max + min);
}

export function getRandomString(requestedLength = 10) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -_';
  let result = '';

  for (let i = 0; i < requestedLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
