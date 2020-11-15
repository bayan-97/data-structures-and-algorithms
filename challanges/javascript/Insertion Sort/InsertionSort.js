// let array = [8, 4, 23, 42, 16, 15];

// console.log(array);
let insertion = (array) => {
    console.log(array);
  for (let i = 1; i < array.length; i++) {
    let currentvalue = array[i];
    let k = i - 1;

    while (k >= 0 && currentvalue < array[k]) {
      array[k + 1] = array[k];
      k = k - 1;
    }
    array[k + 1] = currentvalue;
  }
  return array
};
module.exports = insertion;
