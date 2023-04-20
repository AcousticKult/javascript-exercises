const removeFromArray = function(myArray, ...moreArgs) {
    for (let i = 0; i <= myArray.length; i++) {
    // for (let i of myArray) {
        for (let n of moreArgs) {
            if (n === i) {
                myArray.splice(myArray.indexOf(i), 1);
            }
            continue;
        }
        continue;
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;