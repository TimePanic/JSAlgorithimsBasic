function truncateString(str, num) {

  if (str.length > num) {
    return str.slice(0,num) + '...';
  } else {
    return str;
  }
}
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
  
  

  // use the .substring() to slice 'str' at the point ending 'num'
  // add '...' on to the end of the string.