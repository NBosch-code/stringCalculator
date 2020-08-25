

function calculator(numbers) {

    if(numbers == '') {
        return 0;
    }

    if(numbers.startsWith("//")){
            var delimiter = new RegExp('[;*%]+', 'g');
             numbers = numbers.replace("//;", "");
             numbers = numbers.replace(delimiter,',');
    }
    console.log(numbers)


    if(numbers) {
        var splitNum = numbers.replace(/\n/g, ',')
        var arrayNumbers = splitNum.split(',');

        total = 0;

        let hasNegatives = arrayNumbers.filter(v => v < 0)
         if(hasNegatives.length){
             throw new Error("this number: '"+hasNegatives+"' is not allowed")
         }


        arrayNumbers.forEach(num => {
            if(num < 1000) {
            total = total + parseInt(num);
            }
        });return total
    }
    return parseInt(numbers);
}




module.exports =  calculator;
