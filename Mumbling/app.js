function accum(s) {
    let strArray = [];
    let str = s.toUpperCase();
    for(let i = 0; i < s.length; i++) {
        var num = i;
        let letter = '';
        while (letter.length !== num) {
            letter += s.charAt(i).toLowerCase();
        }
        strArray.push(str.charAt(i) + letter);
    }

    let output = strArray.join('-');

    return output;
}

console.log(accum('ZpGlnRxqenU'));

// Expected return 'a bb ccc'