function suffixDate(day) {
  if (day >= '11' && day <= '13') return day + 'th';
  switch(day) {
    case '1':
      day += 'st';
      break;
    case '2':
      day += 'nd';
      break;
    case '3':
      day += 'rd';
      break
    default:
      day += 'th';
  }
  return day;
}

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date(2022, 11, 12);
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${months[today.getMonth()]} ${suffixDate(today.getDate())}`);