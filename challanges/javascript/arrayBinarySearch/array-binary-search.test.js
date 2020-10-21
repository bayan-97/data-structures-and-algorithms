let binarySearch = require('./array-binary-search');

describe('Testing challenge binarySearch', () => {
  it(' return a index of value if in aaray ', () => {
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 77)).toEqual(6);
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(binarySearch([2, 4, 6, 8], 6)).toEqual(2);
  });
  it(' return -1 value if it isnt in  aaray ', () => {
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
    expect(binarySearch([2, 4, 6, 8], -5)).toEqual(-1);
  });
});
