module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, set = []) {
    // set of array depths
    set.push(depth);

    // if element's array, go check it (recursive)
    arr.forEach((e) => {
      if (Array.isArray(e)) {
        this.calculateDepth(e, depth + 1, set);
      }
    });

    // return max depth value from set of array depth
    return set.reduce((prev, current) => (prev > current ? prev : current));
  }
};
