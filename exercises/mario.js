function stair(n, s = 0) {
  if (n < 1) return;

  stair(n - 1, s + 1);

  let line = '';
  for (let i = 0; i < s; i++) {
    line += ' ';
  }
  for (let i = 0; i < n; i++) {
    line += '*';
  }
  console.log(line);
}

stair(9);