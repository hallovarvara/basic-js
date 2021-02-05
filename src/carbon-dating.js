const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sample) {
  // check if input param is inadequate
  if (
    typeof sample !== 'string' ||
    /[A-Za-z]/.test(sample) || // isn't a string
    sample <= 0 || // has letters
    sample > MODERN_ACTIVITY
  ) {
    return false;
  }

  const rate = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
  const years = Math.log(MODERN_ACTIVITY / parseFloat(sample)) / rate;

  return Math.ceil(years);
};
