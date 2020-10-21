
let insertShiftArray=require('./array-shift');


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
    expect(insertShiftArray([2, 4, 6, 8], -5)).toEqual([2, 4, -5, 6, 8]);
  });
  expect(insertShiftArray([4, 8, 15, 23, 42], 16).length).toEqual(6);
});
