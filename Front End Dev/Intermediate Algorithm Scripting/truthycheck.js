
function truthCheck(collection, pre) {
    var newArr = [];
    var condition = true;
    newArr = collection.forEach(function (object) {
       // console.log(object[pre]);
        if (object[pre] === "" || object[pre] === null || object[pre] === 0 || object[pre] === undefined || Number.isNaN(object[pre]) === true && condition === true) {
            //console.log(false);
            condition = false;
        } else {
            //console.log(true);
        }
    })
    console.log(condition);
    return condition;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")