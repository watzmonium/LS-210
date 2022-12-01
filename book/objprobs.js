let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let keyArr = Object.keys(obj).map((key) => key.toUpperCase());
// keyArr = keyArr

// console.log(keyArr);
// console.log(obj);

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let obj2 = Object.create(myProtoObj);

obj2['qux'] = 3;
