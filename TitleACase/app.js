function titleCase(str) {
    let slicedStr = str.split(" ");
    let slicedStrCap = []

    for (let i=0; i < slicedStr.length; i++) {
        let lowerCase = slicedStr[i].slice(1,slicedStr[i].length).toLowerCase();
        slicedStrCap[i] = slicedStr[i].charAt(0).toUpperCase() + lowerCase;
    }

    let output = slicedStrCap.join(" ");
    console.log(output);

    return output;
  }
  
  titleCase("sHORT and sTOUT");
  