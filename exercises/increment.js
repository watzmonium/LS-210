// takes obj and str, increment value if str is a property of object
// else add the property and set to 1, return value of property

function incrementProperty(object, string) {
  if (object[string]) object[string]++;
  else object[string] = 1;

  return object[string];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }