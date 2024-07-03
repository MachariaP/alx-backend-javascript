function cleanSet(set, startString) {
  // Check if the first argument is a Set
  if (!(set instanceof Set)) {
    throw new TypeError('The first argument must be a Set');
  }

  // Return an empty string if startString is not provided or not a string
  if (typeof startString !== 'string' || !startString) {
    return '';
  }

  // Process the set
  return [...set]
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}

export default cleanSet;
