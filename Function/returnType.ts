function addNumber(num1: number, num2: number) : number {
    return num1 + num2
}

//void is mean this function doesn't have a return statement
function printNumber(num: number): void{
    console.log(`Result: ${num}`)
}

//undefined type
function returnUndefined(name: string): undefined {
    console.log(name)
    return;
}

console.log(printNumber(addNumber(5,12))) 
//output -> undefined because a printNumber() that doesn't return anything
printNumber(addNumber(5,12))

// let someValue: undefined