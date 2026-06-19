const reverseString = function(input) {
    let output = "";
    for(let i = input.length; i > 0; i--) {
        output += input.charAt(i - 1)
    };
    return output
};

// Do not edit below this line
module.exports = reverseString;