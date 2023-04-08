const removeFromArray = function(myArray, ...moreArgs) {
    for (let x of myArray) {
        for (let n of moreArgs) {
            if (n === x) {
                myArray.splice(myArray.indexOf(x), 1);
            }
            continue;
        // continue;
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;