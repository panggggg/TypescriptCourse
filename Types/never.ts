//1. never return
//this function is infinity loop(ทำงานแบบไม่สิ้นสุด)
function inLoop(): never {
    while(true){

    }
}

//2. exception
function error(message: string): never {
    throw new Error(message)
}
console.log(error('bruhhhhh'))

//3.
let nev: never
// nev = 1 //ERROR
nev = (() => {throw new Error('can throw')})()