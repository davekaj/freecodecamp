
function translatePigLatin(str) {

    for (var i = 0; i < str.length; i++) {
        var x = str.charAt(0);
        var y = str.charAt(i);
        if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u" || x === "y") {
            str = str + "way";
            break;
        }else if(str.charAt(i) === ("a" || "e" || "i" || "o" || "u" || "y")) {
            str = str.substr(i, (str.length-1)) +str.substr(0, i) + "ay";
            break;
        }
    }



  return str;
}

console.log(translatePigLatin("consonant"));


//rules
//begins with a vowel, add way to end
// all letters before a vowel, move to end, add "ay"

/* so i am going to take the original string. run through a loop until I hit a vowel. IF a vowel is first, leave it and add way. otherwise keep looping until
you get to vowel and then do a double substring and add an "ay". if its a vowel first you will do no substring, and just take orignal string and add way
*/