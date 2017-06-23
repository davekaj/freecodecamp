//convert the number into a string length 
function convertToRoman(num) {
  
  var lengthOfNumber = "";
  function numToString(num) {
      var lengthOfNumber = num.toString().length;
      return lengthOfNumber;
  }

  var numLength = numToString(num);

 var newArray = String(num).split("");
 for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] === '1') {
        newArray[i] = "I";
    }
    if (newArray[i] === '2') {
        newArray[i] = "II";
    }
    if (newArray[i] === '3') {
        newArray[i] = "III";
    }
    if (newArray[i] === '4') {
        newArray[i] = "IV";
    }
    if (newArray[i] === '5') {
        newArray[i] = "V";
    }
    if (newArray[i] === '6') {
        newArray[i] = "VI";
    }
    if (newArray[i] === '7') {
        newArray[i] = "VII";
    }
    if (newArray[i] === '8') {
        newArray[i] = "VIII";
    }
    if (newArray[i] === '9') {
        newArray[i] = "IX";
    } 
 }

    if ( newArray.length ===4){

        var thousands = newArray[0].replace(new RegExp("I", "g"), 'M');

        var hundreds = newArray[1].replace(new RegExp("I", "g"), 'C');
        hundreds = hundreds.replace(new RegExp("V", "g"), 'D');
        hundreds = hundreds.replace(new RegExp("X", "g"), 'M');


        var tens = newArray[2].replace(new RegExp("X", "g"), 'C');
        tens = tens.replace(new RegExp("V", "g"), 'L');
        tens = tens.replace(new RegExp("I", "g"), 'X');


        var completeRomanNumeral = thousands + hundreds + tens + newArray[3];
        var finalRomanNumeral = completeRomanNumeral.replace(new RegExp("0", "g"), "");
        return finalRomanNumeral;
    }
        if ( newArray.length ===3){

        var hundreds = newArray[0].replace(new RegExp("I", "g"), 'C');
        hundreds = hundreds.replace(new RegExp("V", "g"), 'D');
        hundreds = hundreds.replace(new RegExp("X", "g"), 'M');


        var tens = newArray[1].replace(new RegExp("X", "g"), 'C');
        tens = tens.replace(new RegExp("V", "g"), 'L');
        tens = tens.replace(new RegExp("I", "g"), 'X');


        var completeRomanNumeral = hundreds + tens + newArray[2];
        var finalRomanNumeral = completeRomanNumeral.replace(new RegExp("0", "g"), "");
        return finalRomanNumeral;
    }
        if ( newArray.length ===2){

        var tens = newArray[0].replace(new RegExp("X", "g"), 'C');
        tens = tens.replace(new RegExp("V", "g"), 'L');
        tens = tens.replace(new RegExp("I", "g"), 'X');


        var completeRomanNumeral = tens + newArray[1];
        var finalRomanNumeral = completeRomanNumeral.replace(new RegExp("0", "g"), "");
        return finalRomanNumeral;
    }
        if (newArray.length ===1) {
        var completeRomanNumeral = newArray[0];
        var finalRomanNumeral = completeRomanNumeral.replace(new RegExp("0", "g"), "");
        return finalRomanNumeral;
        }
}

console.log(convertToRoman(500));
