const repeatString = function(text, iterations) {
    if(Number(iterations) < 0) {
        return "ERROR"
    } else {
        let output = "";
        for(; iterations > 0; iterations--) {
             output += text
        };
        return output
    }
};

// Do not edit below this line
module.exports = repeatString;
