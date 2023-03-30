const removeFromArray = function(myArray, item) {
    let finalArray = [];
    
    // cycle through the array
    for (let i = 0; i < myArray; i++) {
        // identify which arrayItem is same as item
        if (myArray[i] !== item) {
            finalArray.push(myArray[i]);
        }
    }

    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
