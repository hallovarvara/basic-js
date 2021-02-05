module.exports = function countCats(backyard) {
  return backyard.reduce(
    (cats, levels) =>
      cats + levels.reduce((catsOnLevel, level) => catsOnLevel + (level === '^^' ? 1 : 0), 0),
    0,
  );
};
