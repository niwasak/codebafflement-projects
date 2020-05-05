function convertToRoman(num) {
    var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var result = "";
    for (var i = 0; i < arabic.length; i++) {
        while (arabic[i] <= num){
            result += roman[i];
            num -= arabic[i];
        }
    }
return result;
}

console.log(convertToRoman(36));
console.log(convertToRoman(12345));