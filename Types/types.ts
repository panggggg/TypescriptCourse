//1. number -> no diff between int or float
let age: number = 21
const pi: number = 3.14

//2. string
const firstName: string = "Pawornwan"
const lastName: string = 'Sriprathung'
let sayHello: string = `Hello my name is ${firstName}`

//3. boolean -> true or false
const isCat: boolean = true
const isDog: boolean = false

console.log(typeof(isCat)) // -> boolean

//4. object (type of object)
const obj: object = {age: 30}

//5. array (type can be flexible or strict)
const arr: number[] = [1, 2, 3]
const colour: string[] = ['red', 'black']
const any: any[] = ['hello', 10]
let arr2: Array<number> = [5, 6, 7]

//6. tuple (fixed length and type array)
//ระบุ type ให้กับแต่ละตำแหน่ง
let tuple: [string, number] = ['pang', 21]
tuple[0] = 'abc'
tuple[1] = 22

//7. enum (human readable) => enum {NEW, OLD}
//sets of numeric values
enum Price {
    banana = 10,
    strawberrry = 100
}
console.log(Price.banana)

//8. any (*) any kind of value, no specific type assignment
let ageAny: any[]
ageAny = [21, "21", true]

//9. union
let a: string | number = 5
a = 'pang'
const b: string | number = 'pang'

//10. literal
function pets( kindOfPet: 'dog' | 'cat'){

}
pets("cat")

//11. aliases use type keyword
type input = string | number

//12. unknown
let input: unknown

//13. void
//variable
let unUsable: void = undefined

//return type
function warnUser(): void{
    console.log("This is my warning message")
}

//14. null & undefined
let undef: undefined = undefined
let nu: null = null

//15. never use with function

