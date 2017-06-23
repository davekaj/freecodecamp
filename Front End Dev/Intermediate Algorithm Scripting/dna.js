
function pairElement(str) {
    var array = str.split('');
    var splitArray = [];
    for (var j = 0; j < array.length; j++ ) {
       var miniArray = [array[j]];
        splitArray.push(miniArray);
    }
    for (var i = 0; i<splitArray.length; i++){
        if (splitArray[i][0] === 'A') {
            splitArray[i].push("T")
        }
         if (splitArray[i][0] === 'T') {
            splitArray[i].push("A")
        }       
         if (splitArray[i][0] === 'G') {
            splitArray[i].push("C")
        }       
         if (splitArray[i][0] === 'C') {
            splitArray[i].push("G")
        }
    }

  return splitArray;
}

pairElement("GCG");


// i split the string to an array. then i neeed to define rules. if G add C. if c add g. if a add t. if t add a. 
// i want to keep the same amount of arrays. so i want to push a new element into the array and loop through the array length