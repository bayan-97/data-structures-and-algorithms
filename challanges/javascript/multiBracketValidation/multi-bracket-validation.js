function multiBracketValidation(input) {
  // let input = '{}(){}[]';
  let standerOpen = ["{", "[", "("];
  let standerClose = ["}", "]", ")"];
  let standerracts = [];
  let standerracts1 = [];

  let inputArray = input.split("");

  console.log(inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    for (let i1 = 0; i1 < standerOpen.length; i1++) {
      if (
        inputArray[i] == standerOpen[i1] ||
        inputArray[i] == standerClose[i1]
      ) {
        standerracts.push(inputArray[i]);
      }
    }
  }
  if (standerracts.length % 2 == 0) {
    for (let i = 0; i < standerracts.length; i++) {
      if (inputArray[i] === standerOpen[0]) {
        if (
          inputArray[i] + inputArray[i + 1] ==
          standerOpen[i] + standerOpen[i]
        ) {
          standerracts1.push(inputArray[i]);
          standerracts1.push(inputArray[i + 1]);
        } else if (inputArray[i] == inputArray[i + 1]) {
          i = i + 2;
          while (inputArray[i] !== inputArray[i + 1]) {
            i = i + 2;
            if (i > 7) {
              return false;
            }
          }
        }
      }
    }
  } else {
    return false;
  }
}
