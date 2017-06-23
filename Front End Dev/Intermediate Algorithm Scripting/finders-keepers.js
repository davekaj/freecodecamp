
function findElement(arr, func) {
    var num = 0;

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            num = arr[i];
            return num;
        }
    }

    num = undefined;
    return num;
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });


