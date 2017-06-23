
function sumFibs(num) {
    var sumAllNum = [1];
    var newFib = 1;
    var oldFib = 0;
    
    for (var i = 1; newFib <= num; i++){
        newFib = newFib + oldFib; 
        oldFib= newFib - oldFib;
        if (oddFibs(newFib) === true && newFib <= num)
            sumAllNum.push(newFib)
    }


  var sum = sumAllNum.reduce(function(accumlator, value) {return accumlator + value}, 0);

  return sum;
}

console.log(sumFibs(75025));

function oddFibs(oddNum) {
   if (oddNum % 2 === 1)
        return true;
    }


// what i need to do is build a recursive function that continually counts the fib number, but before it calls itself again it will push itself if it is an odd number 

//how do i get and hold new fib numbers. we have to build a standard case, where it will operate until it equals a number.  try working backwards. so fib4 is 