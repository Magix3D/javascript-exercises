const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  } else {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
      let temp = a;
      a = b;
      b = temp + b;
    }
    return a;
  }
};

// Do not edit below this line
module.exports = fibonacci;
