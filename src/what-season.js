module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  } catch (error) {
    throw new Error(error);
  }

  const m = date.getMonth() + 1;
  const seasonsMonths = {
    winter: [12, 1, 2],
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    autumn: [9, 10, 11],
  };

  return Object.entries(seasonsMonths).reduce(
    (result, season) => (season[1].includes(m) ? season[0] : result),
    '',
  );
};
