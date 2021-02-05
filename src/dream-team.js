module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .filter((name) => typeof name === 'string')
        .map((name) => name.trim())
        .reduce((abbr, name) => abbr + name.slice(0, 1), '')
        .toUpperCase()
        .split('')
        .sort()
        .join('')
    : false;
};
