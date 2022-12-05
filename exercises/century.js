function century(year) {
  cent = Math.ceil(year / 100);
  cent = String(cent);
  if (cent.endsWith('11') || cent.endsWith('12') || cent.endsWith('13')) return cent + 'th';
  switch(cent[cent.length - 1]) {
    case '1':
      cent += 'st';
      break;
    case '2':
      cent += 'nd';
      break;
    case '3':
      cent += 'rd';
      break
    default:
      cent += 'th';
  }
  return cent;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"