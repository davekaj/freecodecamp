
function fearNotLetter(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var firstLetter = str.charAt(0);
    var strSize = str.length;
    
    for (var i = 0; i < alphabet.length; i++){
        if (firstLetter === alphabet[i]){
            var indexAlphabet = i;
            break;
        }
    }

    var alphaStr = alphabet.substr(indexAlphabet, (indexAlphabet + strSize));
    if (str === alphaStr) {
        return undefined;
    }

    for (var j = 0; j <strSize; j++) {
        if (str[j] !== alphaStr[j]){
            return alphaStr[j];
        }
    }
}

fearNotLetter("abce");
