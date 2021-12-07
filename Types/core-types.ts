//1. number -> no diff between int or float
const age: number = 21
const pi: number = 3.14

//2. string
const firstName: string = "Pawornwan"
const lastName: string = 'Sriprathung'

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

//6. tuple (fixed length and type array)
const tuple: [string, number] = ['abc', 3]

//7. enum (human readable) => enum {NEW, OLD}
enum Price {
    banana = 10,
    strawberrry = 100
}
console.log(Price.banana)

//8. any (*) any kind of value, no specific type assignment
let ageAny: any[]
ageAny = [21, "21"]
