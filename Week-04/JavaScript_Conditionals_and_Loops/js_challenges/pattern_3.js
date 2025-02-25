function printPattern(n) {
  let star = "";
  // for printing the stars in the lower order
  for (let i = 1; i <= n; i++) {
    for (let j = n - i + 1; j >= 1; j--) {
      star += "*";
    }
    if (i < n) {
      star += "\n";
    }
  }
  return star;
}

console.log(printPattern(4));
