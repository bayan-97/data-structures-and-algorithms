const binarySearch = (array, value) => {
  let lowNum = 0;
  let highNum = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    let mid = Math.floor((highNum - lowNum) / 2);
    mid = mid + lowNum;

    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      lowNum = mid + 1;
    } else if (array[mid] > value) {
      highNum = mid - 1;
    }
  }
  return -1;
};


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
