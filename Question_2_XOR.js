const xor = (L, R) => {
  var oddCount = (R - L) / 2;

  if (L % 2 == 1 || R % 2 == 1) {
    oddCount++;
  }

  if (oddCount % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(xor(2, 6));
