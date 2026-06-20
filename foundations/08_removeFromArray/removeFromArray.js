const removeFromArray = function(array, ...remove) {
    return array.filter(pos => !remove.includes(pos))
};

console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
