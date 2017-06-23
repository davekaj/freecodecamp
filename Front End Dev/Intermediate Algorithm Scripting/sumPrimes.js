
function sumPrimes(num) {
var sumNums = 0;
// loop through every number up until what we want
    for (var i = 0; i <= num; i++) {
// loop thenumbers 0 thourgh num by every possible % divisor. dont need to divide by 2 cuz the loop will break if it is divisable. the loop will not run excessively becuase it breaks right when we figure out it is divisible! duh, overthought this
        for (var j = 2; j <= i; j++){
// second condition is special case for prime num 2. if it is ever not a prime number, 1st case will break for this i.            
            if(i % j === 0 && i!==2){
                break;
            }
//here we basically are saying we have looped fully through every divisor, and it must be prime. it is <= and not just === to incorporate 2 ... 2 < 2+1
            if(i <= (j+1)){
                sumNums = sumNums + i;
                break;
            }
        }
    }

  return sumNums;
}

console.log(sumPrimes(977));


// what is the easiest way? test every nuew number up to have of the half . so if i am dealing with 10. start with 3. is it divisible by 2? no. add
//4, is it divisible by 2? yes, break
//5 , is i divisible by 2? no. is it divisible by 3? (dont bother, it is bigger than 2.5). add
//6, is it divisible by 2? yes, break
//7, is it divisible by 2? no, 3? no, 4? bigger than 2.5, beak
//8 divisible by 2. break 
//9, diviisble by 2? no. 3? yes? brek

// so i need a forloop to test every number from 0 to num/2
// then i need a second for loop to test  if it is divisible by 2, 3, 4, 5, always starting at 2, and going up to num/2. if it ever === 0, break. if it never ===0, add