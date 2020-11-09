function getMiddle(s){
    let middle = (s.length / 2)
    let middleLetter = "";
    if ( s.length %2 === 0) {
      middle -= 1;
      console.log(middle)
      middleLetter = s[middle];
      middleLetter += s[(middle + 1)];
    }
    else {
      console.log(middle);
      middle -= 0.5;
      console.log(middle);
      middleLetter = s[middle];
    }
    return middleLetter;
  }

  console.log(getMiddle('helloo'));