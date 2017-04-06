
function sumAll(arr) {
  var sortedArr = [];
  sortedArr = arr.sort(sortNumber);

  var numBetween = sortedArr[1] - sortedArr[0] - 1;

  function sortNumber(a,b) {
    return a - b;
}


  function addNumInArr() {
      var emptyArr = 0;
        for (var x = 1; x <= numBetween; x++){
            emptyArr = emptyArr + x + sortedArr[0];
        }
        return emptyArr;
  }

    sortedArr.splice(1, 0, addNumInArr())

  var sum = arr.reduce(function(acc, val){
    return acc + val;
  }, 0);
return sum;
}

sumAll([1, 4]);