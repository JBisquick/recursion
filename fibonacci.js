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