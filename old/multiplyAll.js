
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var x=0; x < arr.length; x++){
    for (var y=0; y < arr[x].length; y++){
      var answer = arr[x][y]; 
      console.log(answer);
      product = answer*product;
      console.log(product);
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
