//unknown is better than any because it make sure by some type checking
//unknown is better choice over any if you can't tell exactly what type you will store
let userInput: unknown
let userName: string

//unknown type you can store any value without getting errors
userInput = 5
userInput = "pang"
userInput = false

//ความแตกต่างระหว่าง any กับ unknown
//ถ้าเป็น any เราสามารถเข้าถึง properties, function, method ต่างๆได้ โดยไม่ถูกตรวจสอบ
let numberAny: any = 4.565
let fixedNumberAny = numberAny.toFixed(2) //compiler ไม่ได้ตรวจสอบ
console.log(fixedNumberAny) //output -> 4.57

// let numberUnk: unknown = 4.565
// let fixedNumberUnk = numberUnk.toFixed(2) //ERROR -> Property 'toFixed' does not exist on type 'unknown'
// console.log(fixedNumberUnk)