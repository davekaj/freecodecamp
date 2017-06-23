
function myReplace(str, before, after) {
    var arrSentance = str.split(' ');
    var arrWordSwitch = [before, after];


for (var i = 0; i < arrSentance.length; i++){
    if ( arrSentance[i] === before) {
        if (arrSentance[i].charAt(0) === arrSentance[i].charAt(0).toUpperCase()) {
           var newestWord = after.charAt(0).toUpperCase() + after.substr(1);
            arrSentance.splice(i, 1, newestWord);
        }else {
         arrSentance.splice(i, 1, after);

    }
}
}
var joinedArray = arrSentance.join(" ");
  
  return joinedArray;
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");
