function copyProperties(sourceObject, destinationObject) {
  let copyCount = 0;
  for (let key in sourceObject) {
    destinationObject[key] = sourceObject[key];
    copyCount++;
  }

  return copyCount;
} 

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }