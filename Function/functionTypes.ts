function addNum(num1: number, num2: number) : number {
    return num1 + num2
}

function printNum(num: number): void{
    console.log(`Result: ${num}`)
}

//Function types are types that decribe a function, function types is created with arrow function
// let combineValue: Function

//combineVale is return number
let combineValue: (a: number, b: number) => number



combineValue = addNum //output -> 16
// combineValue = printNum //output -> Result: 8, undefined

console.log(combineValue(8, 8))