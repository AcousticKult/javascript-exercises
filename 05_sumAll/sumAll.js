const sumAll = function(a, b) {
  let finalSum = 0;

  if ((a < 0) || (b < 0)) {
    return "ERROR";
  } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
      return "ERROR";
  } else if (a > b) {
      for (let i = a; i >= b; i--) {
        finalSum += i;
      }
  } else {
      for (let i = a; i <= b; i++) {
        finalSum += i;
      }  
  }

  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
