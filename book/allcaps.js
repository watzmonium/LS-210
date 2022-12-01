function tenCaps(str) {
  let len = str.length
  if (len > 10){
    return str.toUpperCase();
  } else{
    return str;
  }
}

console.log(tenCaps('hello'));

console.log(tenCaps('hello goodbye!'));

console.log(tenCaps("Sue Smith"));     // => Sue Smith`
console.log(tenCaps("Sue Robertson")); // => SUE ROBERTSON
console.log(tenCaps("Joe Thomas"));    // => Joe Thomas
console.log(tenCaps("Joe Stevens"));   // => JOE STEVENS