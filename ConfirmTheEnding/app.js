function confirmEnding(str, target) {
    let last = str.substring(str.length - target.length);
    if (last === target) {
        return true;
    } else {
        return false;
    }
  }
  confirmEnding("Open sesame", "same")
  