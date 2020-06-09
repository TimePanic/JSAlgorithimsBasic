function factorialize(num) {
    if (num === 0 || num === 1) {
        num = 1;
    }
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  
  console.log(factorialize(5));
  console.log(factorialize(1));
  console.log(factorialize(0));
  console.log(factorialize(10));