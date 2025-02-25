function printStar(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * i - 1; j++) {
      star += "*";
    }
    star += "\n";
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= 2 * i - 1; j++) {
      star += "*";
    }
    if (i > 1) {
      star += "\n";
    }
  }
  return star;
}

console.log(printStar(3));
