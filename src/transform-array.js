module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  return arr.reduce((result, element, i) => {
    switch (element) {
      case '--discard-next':
      case '--discard-prev':
      case '--double-next':
      case '--double-prev':
        return result;
    }

    if (arr[i - 1] === '--discard-next') {
      return result;
    }

    arr[i - 1] === '--double-next' ? result.push(element, element) : result.push(element);

    switch (arr[i + 1]) {
      case '--double-prev':
        result.push(element);
        break;
      case '--discard-prev':
        result.splice(result.length - 1, 1);
    }

    return result;
  }, []);
};
