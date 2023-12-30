function fibs(n) {
    const fibArray = [];
    previous = 0;
    current = 0;
    next = 1;
    for (let i = 0; i < n; i++) {
      fibArray.push(current);
      previous = current;
      current = next;
      next = previous + current;
    }
    return fibArray;
  }
  
  console.log(fibs(10));

function fibsRec(n) {
  if (n < 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const next = fibsRec(n - 1)[n-2] + fibsRec(n - 1)[n-3];
    return fibsRec(n - 1).concat([next]);
  }
}

console.log(fibsRec(10));  