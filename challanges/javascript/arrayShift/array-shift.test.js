function insertShiftArray(array, vlueAdd) {
  let midNum = array.length / 2;
  console.log(midNum);
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    midNum = Math.ceil(midNum);
    if (i === midNum) {
      newArr.push(vlueAdd);
      newArr.push(array[i]);
      //  console.log(array[i])
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

describe('Testing challenge array-shift', () => {
  it(' return an array with the new value added at the middle index', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([
      4,
      8,
      15,
      16,
      23,
      42,
    ]);
    expect(insertShiftArray([2, 4, 6, 8], -5)).toEqual([2, 4, 5, 6, 8]);
  });
  expect(insertShiftArray([4, 8, 15, 23, 42], 16).length).toEqual(6);
});
