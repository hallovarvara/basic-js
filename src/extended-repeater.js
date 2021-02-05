module.exports = function (str, options) {
  /*
    I split the task into 3 parts:
      0. Set object with default parameters.
      1. Parameters conversion.
      2. Algorithm implementation.
    */

  // 0. set default options in one object for usability
  let defaults = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|',
  };

  // 1. check, set and adjust str and options parameters
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : defaults.repeatTimes;
  options.separator = options.separator ? options.separator : defaults.separator;

  if (options.hasOwnProperty('addition')) {
    options.additionRepeatTimes = options.additionRepeatTimes
      ? options.additionRepeatTimes
      : defaults.additionRepeatTimes;

    options.additionSeparator = options.additionSeparator
      ? options.additionSeparator
      : defaults.additionSeparator;
  } else {
    options.addition = defaults.addition;
  }

  // 2. main task algorithm
  let result = '';

  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;

    if (options.addition !== '') {
      for (let a = 0; a < options.additionRepeatTimes; a++) {
        result += options.addition;

        if (a !== options.additionRepeatTimes - 1) {
          result += options.additionSeparator;
        }
      }
    }

    if (i !== options.repeatTimes - 1) {
      result += options.separator;
    }
  }

  return result;
};
