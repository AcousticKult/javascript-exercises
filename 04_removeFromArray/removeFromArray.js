const removeFromArray = function(myArray, ...moreArgs) {
    const newArray = [];

    myArray.forEach(item => {
        if (!moreArgs.includes(item)) {
            newArray.push(item);
        }
    })

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;