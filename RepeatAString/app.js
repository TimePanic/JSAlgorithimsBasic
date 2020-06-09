function repeatStringNumTimes(str, num) {
    let output = str;

    if (num > 0) {
        for (let i=1; i < num; i++) {
            output = output + str;
        }
    } else {
        output = ""
    }
    

    console.log(output);
    return output;
  }
  
  repeatStringNumTimes("*", 8);

  // create a loop that add 'str' onto itself the amount of times given in 'num'