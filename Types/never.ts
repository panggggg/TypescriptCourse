//1. return never 
//this function is infinity loop(ทำงานแบบไม่สิ้นสุด)
function inLoop(): never {
    while(true){

    }
}

//2.
function error(message: string) {
    throw new Error(message)
}
console.log(error('bruhhhhh'))

//3.
let nev: never
// nev = 1 //ERROR
nev = (() => {throw new Error('can throw')})()