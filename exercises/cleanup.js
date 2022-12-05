function cleanUp(str) {
  const regex = /[^a-z]+/gi;
  return str.replaceAll(regex, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "