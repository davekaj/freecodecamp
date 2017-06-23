
function steamrollArray(arr) {
    // I'm a steamroller, baby

    var newArr = [];
    recursive(arr);

    function recursive(arr) {

        for (var index = 0; index < arr.length; index++) {
            if (Array.isArray(arr[index]) === true)
                recursive(arr[index]);
            else
                newArr.push(arr[index]);
        }



    }
    console.log(newArr);
    return newArr;
}
steamrollArray([[["a"]], [["b"]]])