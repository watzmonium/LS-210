const dms = degrees => {
  let rawNumbers = splitFloat(degrees)
  degrees = rawNumbers.shift();
  let minutes;
  if (rawNumbers.length > 0) {
    let rawMinutes = Number('.' + rawNumbers.shift());
    minutes = Number(rawMinutes) * MINS_IN_DEGREE;
  } else {
    minutes = 0;
  }
  let seconds;
  
  if (minutes > 0) {
    rawNumbers = splitFloat(minutes);
    minutes = Number(rawNumbers.shift());
    if (rawNumbers.length === 0) {
      seconds = 0
    } else {
      let rawSeconds = Number('.' + rawNumbers.shift());
      seconds = Number(rawSeconds) * SECS_IN_MINUTE;
    }
  } else {
    seconds = 0;
  }
  
  minutes = minutes.toFixed(2);
  seconds = seconds.toFixed(2);
  if (minutes == 0) {
    minutes = '00'
  } else if (minutes[1] === '.') {
    minutes = '0' + minutes[0]
  }
  else {
    minutes = minutes.slice(0, 2)
  }

  if (seconds == 0) {
    seconds = '00'
  } else if (seconds[1] === '.') {
    seconds = '0' + seconds[0]
  }
  else {
    seconds = seconds.slice(0, 2)
  }

  return `${degrees}°${minutes}'${seconds}"`
}

const splitFloat = number => { return String(number).split('.') };

const MINS_IN_DEGREE = 60;
const SECS_IN_MINUTE = 60;

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"