const removeFromArray = function(myArray, ...moreArgs) {
    // USE FOR LOOP OR FOR...OF TO COMPARE myArray and arguments?
    for (let x of myArray) {
        for (let n of moreArgs) {
            if (x === n) {
                myArray.splice(myArray.indexOf(x), 1);
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
