
function uniteUnique(arr) {
    var newArray = arguments[0];
    for ( var i =1; i<arguments.length; i++){
        for (var j = 0; j<arguments[i].length; j++) {
            if (newArray.includes(arguments[i][j]) === false){
                newArray.push(arguments[i][j]);
            }
        }
    }
  return newArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);