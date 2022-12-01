function copyObj(objTemplate, keyArr = []) {
  let tempKeys;
  if (keyArr.length === 0) {
    tempKeys = Object.keys(objTemplate);
  } else {
    tempKeys = keyArr;
  }

  let cpyObj = {};
  tempKeys.forEach((key) => cpyObj[key] = objTemplate[key]);
  return cpyObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }