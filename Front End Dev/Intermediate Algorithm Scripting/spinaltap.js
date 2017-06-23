
function spinalCase(str) {

    var regExSpace = /\s+/g;
    var regExUnder = /_/g;

var newStr = str.replace(regExSpace, "-");
newStr = newStr.replace(regExUnder, "-");

for (var i = 0; i<newStr.length; i++) {
    var character = newStr.charAt(i);
    if (i !== 0 && character !== "-" && character === character.toUpperCase() && newStr.charAt(i-1) !== "-"){
        newStr = newStr.substr(0, i) + "-" + newStr.substr(i, newStr.length);
    }
}
  newStr = newStr.toLowerCase();

  return newStr;
}

console.log(spinalCase('This Is Spinal Tap'));


//first insert all spaces and underlines to be dashes. then run a loop that finds capital letters that 
//are not preceded by a dash. precede them by a dash