function multiplesOfThreeAndFive() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i}!`);
    }
    else if (i % 3 == 0 || i % 5 == 0) {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive();
