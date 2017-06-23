
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
var sourceKeys = Object.keys(source);
var sourceValues = Object.values(source);

//this for loop tests each full object in collection
  for (var i = 0; i < collection.length; i++) {
// checkValues gets the values of the object in question
    var collectionValues = Object.values(collection[i]);
    var collectionKeys = Object.keys(collection[i]);

// this for loop iterates through the amount of keys in the second object you are testing everything agaisnt. every 1st object has to have all of these. so if it 
//doesnt match you need to exit the loop 
      for (var y = 0; y < sourceKeys.length; y++){
        var checkKeys = collection[i].hasOwnProperty(sourceKeys[y]);4/29 
        console.log(sourceValues[y]);
        console.log(collectionValues);
        console.log(collectionValues[y]);
        if ( sourceValues[y] in collectionValues && checkKeys ===true) {
// this for loop iterates through all the values of the second object you are testing agaisnt everything. if the values do not match you fail it             
     //     for (x=0; x< collectionValues.length; x++){
     //       if (checkKeys === true && sourceValues[y] === collectionValues[x] ){
              arr.push( collection[i]);
              break;
            }
          }
     //   if (checkKeys === true) 
    //        break;
      }
    
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });