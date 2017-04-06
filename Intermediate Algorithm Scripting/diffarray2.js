
function diffArray(arr1, arr2) {
  var newArr1 = [];
  var newArr2 = [];

for (var x = 0; x <arr1.length; x++){
    var element = arr1[x];
    var indexing = arr2.indexOf(element);
    if (indexing === -1) {
        newArr1.push(element);
    }
}
for (var y = 0; y <arr2.length; y++){
    var element = arr2[y];
    var indexing = arr1.indexOf(element);
    if (indexing === -1) {
        newArr2.push(element);
    }
}

var finalArray = newArr1.concat(newArr2);




  return finalArray;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
