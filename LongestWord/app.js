function findLongestWordLength(str) {
    // Split the sentance into an array
    let splitStr = str.split(" ");
    let length = 0
    // Loop through the array
    for (let i=0; i < splitStr.length; i++) {
        // Create a check for the length of the string and if its longer, replace it
        
        if (length < splitStr[i].length) {
            length = splitStr[i].length
        }

    }
    return length;
    
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");