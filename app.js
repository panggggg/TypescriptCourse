//example1
// function add(number1, number2) {
//     return number1 + number2
// }
// const number1 = 5
// const number2 = 2.8
// const result = add(number1, number2)
// console.log(result) //output -> 7.8
//example2
// function add(number1, number2) {
//     return number1 + number2
// }
// const number1 = '5'
// const number2 = 2.8
// const result = add(number1, number2)
// console.log(result) //output -> 52.8
//add type
// function add(number1: number, number2: number) {
//     return number1 + number2
// }
// const number1 = 5
// const number2 = 2.8
// const result = add(number1, number2)
// console.log(result) //output -> 7.8
function add(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        throw new Error('Incorrect input!');
    }
    return number1 + number2;
}
console.log(add(5, 2.8));
function addPharse(number1, number2, showResult, pharse) {
    var result = number1 + number2;
    if (showResult) {
        console.log(pharse + result);
    }
    else {
        return result;
    }
}
//let number1: number;
//number1 = 5
//let msg = "Hello"
//msg = 10 => error
var n1 = 5;
var n2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
addPharse(n1, n2, printResult, resultPhrase);
