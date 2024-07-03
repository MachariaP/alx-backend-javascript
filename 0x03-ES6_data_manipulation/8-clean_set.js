function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('The first argument must be a Set');
  }

  if (typeof startString !== 'string') {
    throw new TypeError('The second argument must be a string');
  }

  if (!startString) return '';

  return [...set]
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}

export default cleanSet;
