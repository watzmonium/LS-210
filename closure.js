const uniqueId = (function () {
  let count = 0;
  return function () {
    ++count;
    return `id_${count}`;
  };
})();

console.log(uniqueId()); // "id_1"
console.log(uniqueId()); // "id_2"
console.log(uniqueId()); // "id_3"

const counter = (function () {
  let counterValue = 0;

  return {
    increment() {
      ++counterValue;
    },

    get value() {
      return counterValue;
    },
  };
})();

counter.increment();
console.log(counter.value); // 1

counter.increment();
counter.increment();
console.log(counter.value); // 3