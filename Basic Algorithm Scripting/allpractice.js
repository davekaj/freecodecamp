
function rot13(str) { // LBH QVQ VG!

var newArray = [];
var newArray2 = [];
for (var x =0; x< str.length; x++){
  newArray.push(str.charCodeAt(x));
}
for (var y=0; y< newArray.length; y++){
  if (newArray[y] =< (90-13) && newArray[y] >= 65) {
  newArray2.push((newArray[y]+13));
}else if (65 <= newArray[y] && newArray[y] <= 90) {
    newArray2.push(newArray[y]-13);
} else {
   newArray2.push(newArray[y]);

}
}
var decodedString = String.fromCharCode.apply(null, newArray2);
  return decodedString;
}

// Change the inputs below to test charCodeAt(x) fromCharCode(, 65, 66, 67)
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")
