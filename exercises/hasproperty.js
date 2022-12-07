// this function returns true contains a property with the name string
function objectHasProperty (object, string) {
  return Object.keys(object).indexOf(string) !== -1;
  // for (let key in object) {
  //   if (key === string) return true;
  // }
  // return false;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true