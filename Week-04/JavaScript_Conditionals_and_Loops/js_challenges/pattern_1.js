function printStar(n) {
  let star = "";
  // for upper triangle part
  for (let i = 1; i <= n; i++) {
    // for having spaces to make it a diamond
    for (let k = 1; k <= n - i; k++) {
      star += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      star += "*";
    }
    star += "\n";
  }
  //  to add the lower triangular part of the diamond pattern
  for (let i = n - 1; i >= 1; i--) {
    // to add the space in the lower triangular part of the pattern
    for (let k = n - i; k >= 1; k--) {
      star += " ";
    }
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
