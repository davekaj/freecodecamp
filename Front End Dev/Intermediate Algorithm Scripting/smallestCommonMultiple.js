
function smallestCommons(arr) {
// gets the array in proper order
    if (arr[0] > arr[1]){
      newArr = [];
      newArr.push(arr[1]);
      newArr.push(arr[0]);
      arr = newArr;
    }
//establish a new array, push the first value onto it 
    var newestArr = [];
    newestArr.push(arr[0]);

//a for loop to add all values between the 2 given values to make a full array of needed numbers
    var i = arr[0] +1 ;
    for (i; i <arr[1]; i++ ){
        newestArr.push(i);
    }

    newestArr.push(arr[1]);
//find the first number that is divisible by all numbers in this array.for our test that is 18, 19, 20, 21, 22, 23

// so i will start by finding a multiple of 18 and testing if it matches 19. 18*1. so we START at 18. tehn do 18/19, 36/19/ 48/19. wait till that is - 0.
// then move on. 136/20. does not work, so we need to go back and do multiples of 18 until it breaks throuugh 20. all the way to 23. 

// so here 18 is newestArr[0]*j. 19, 20, 21, 22, 23, are newestArr[0 + k]
    for (var j =1; j <= 1000000; j++){
        var theSCM = newestArr[0]*j
        if (j===1000000) 
            return "Sorry, we have capped the limit at a multiple of 1 million of the first array number as to not run the loop to infinity.";
        for (var k =1; k< newestArr.length; k++){
          if (theSCM % newestArr[k] !== 0){
            break;
          }
          if (k === (newestArr.length - 1))
            return theSCM;
        }
    }
}


console.log(smallestCommons([23,18]));