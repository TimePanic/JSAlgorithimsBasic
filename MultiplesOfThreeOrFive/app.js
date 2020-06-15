function solution(number){
  let output = 0;
  for (let i = number - 1; i >= 0; i--) {
    if ( i % 3 === 0) {
      output += i;
      console.log('output is ' + output);
    } else if ( i % 5 === 0) {
      output += i
      console.log('output is ' + output);
    };
  }
  return output;
}

console.log(solution(10));