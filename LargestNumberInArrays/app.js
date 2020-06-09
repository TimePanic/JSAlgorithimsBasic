function largestOfFour(arr) {
    // create empty string for results
    var results = [];
    // loop through the first level array
    for (var n = 0; n < arr.length; n++) {
      // create a variable to hold the largest number and init it to the first number
      var largestNumber = arr[n][0];
      // loop through the second level arrays
      for (var sb = 1; sb < arr[n].length; sb++) {
        // check if the largest number is greater than the current
        if (arr[n][sb] > largestNumber) {
          largestNumber = arr[n][sb];
        }
      }

      // puts largest number of each array into the results array.
      results[n] = largestNumber;
    }
    console.log(results);
    return results;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);