const sortStrings = (input) => {
  let done = false;
  while (!done) {
    done = true;

    input.forEach((item, index) => {
      if (input[index - 1] > item) {
        done = false;
        const temp = input[index - 1];
        input[index - 1] = item;
        input[index] = temp;
      }
    });
  }

  return input;
};

//I HAVE DONE THIS USING BUBBLE SORT
const inputs = ["AXXX", "UVVVV", "PGGGG", "BOOUU"];
sortStrings(inputs);
console.log(inputs);
