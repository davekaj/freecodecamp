
function dropElements(arr, func) {
    // Drop them elements.
    let shiftedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            return arr
        } else 
        arr.shift();
        i--;
    }


    return arr;
}

//dropElements([1, 2, 3], function (n) { return n < 3; });

dropElements([0, 1, 0, 1], function(n) {return n === 1;}) 1;})