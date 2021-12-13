//never is a return type

//1. never return
//this function is infinity loop(ทำงานแบบไม่สิ้นสุด)
const infinite = () :never => {
    while(true){
        console.log("How are you?")
    }
}

//2. when function throw error
function error(message: string): never {
    throw new Error(message)
}
console.log(error('bruhhhhh'))

//3.
let nev: never
// nev = 1 //ERROR
nev = (() => {throw new Error('can throw')})()
