
function calculator(numbers) {
    if (numbers == '') {
        return 0;
    }
    var delimiter = ',';
    var newLine = /\n/g;

    if (numbers.startsWith("//")) {
        var custDelim = new RegExp('[;*%]+', 'g');
        numbers = numbers.replace("//;\n", "").replace(custDelim, delimiter);
    }
    if (numbers) {
        var arrayNumbers = numbers.replace(newLine, delimiter).split(delimiter);

        total = 0;

        let hasNegatives = arrayNumbers.filter(v => v < 0)
        if (hasNegatives.length) {
            throw new Error("Negative numbers '" + hasNegatives + "' is not allowed");
        }
        arrayNumbers.forEach(num => total = num < 1000 ? total + parseInt(num) : total)

         return total;
    }
    return parseInt(numbers);
}
module.exports = calculator;
