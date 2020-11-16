let MergeSort = require('./MergeSort.js');

describe('Testing challenge InsertionSort', () => {
  it(' return sort   array ', () => {
    expect(MergeSort([8, 4, 23, 42, 16, 15])).toEqual([
      4,
      8,
      15,
      16,
      23,
      42,
    ]);
  });
});
