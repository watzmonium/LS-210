function numRange(num) {
  if (num < 51 && num > 0) {
    console.log(`${num} is between 0 and 50`);
  } else if (num < 101 && num > 50) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100){
    console.log(`${num} is greater than 100`);
  } else {
    console.log(`${num} is less than 1`);
  }
}

numRange(25);
numRange(75);
numRange(125);
numRange(-25);
