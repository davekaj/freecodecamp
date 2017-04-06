
function diffArray(arr1, arr2) {
  var newArr = [];

//compare both, then remove each time it matches
//slice filter indexof concencate
//add them together, remove duplicates
//

/*for each number in arr1, run through them all 
    if it matches, slice them both
    if not keep it
    then concancate it with the second array to get leftvoe*/

//fiter the first array with the second. slice them both. 
// or check with -1 and index of 
//concancate the new now 
//
function filterArray1(arr1, arr2) {
    var xyz =   arr2.indexOf("juk") === -1;
    return xyz;

}
function filterArray2(arr1, arr2) {
    return   arr1.indexOf(arr2) === -1;

}


var newArr1 = arr1.filter(filterArray1);

var newArr2 = arr2.filter(filterArray2);


var finalArr = newArr1.concat(newArr2);



  return finalArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);