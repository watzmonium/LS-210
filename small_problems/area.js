const METER_TO_FEET = 10.7639;

let rlSync = require('readline-sync');

let len = rlSync.question('Enter the length in meters: ');
let wid = rlSync.question('Enter the width in meters: ');

let area = (Number(len) * Number(wid)).toFixed(2);
let ftarea = (area * METER_TO_FEET).toFixed(2);
console.log(`The area of the room is ${area} square meters (${ftarea} square feet).`);