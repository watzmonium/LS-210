function teddyAge() {
  const min = 20;
  const max = 200;
  let difference = max - min + 1;

  return Math.ceil((Math.random() * (difference))) + min;
}

console.log(teddyAge());