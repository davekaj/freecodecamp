function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
var sourceKeys = Object.keys(source);
var sourceValues = Object.values(source);

//this for loop tests each full object in collection
 for (var i = 0; i < collection.length; i++) {
// checkValues gets the values of the object in question
    var collectionValues = Object.values(collection[i]);
    var collectionKeys = Object.keys(collection[i]);
    var condition = true;
    
    for (var y = 0; y < sourceKeys.length; y++){

        var checkKeys = collection[i].hasOwnProperty(sourceKeys[y]);
      
        if (!( collectionValues.includes(sourceValues[y]) && checkKeys ===true)) {
              condition = false;
              break;
            }
     }
     if (condition === true) arr.push( collection[i]);
 }
  console.log(arr);
  // Only change code above this line
  return arr;
}
whatIsInAName([{ "a": 1, "b": 2 }], { "a": 1, "b": 2 });