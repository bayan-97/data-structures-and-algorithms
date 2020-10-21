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
module.exports = insertShiftArray;
