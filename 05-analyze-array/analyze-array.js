function analyzeArray(arr) {
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  for (let i in arr) {
    sum += arr[i];
    if (arr[i] >= max) max = arr[i];
    if (arr[i] <= min) min = arr[i];
  }
  let avg = sum / arr.length;
  return new data(avg, min, max, arr.length);
}

class data {
  constructor(average, min, max, length) {
    this.average = average;
    this.min = min;
    this.max = max;
    this.length = length;
  }
}

module.exports = analyzeArray;
