let someValue: any = "some value"

//assertion เป็นการระบุ type ตอนที่กำลังจะใช้งาน

//as syntax
let someValueLength: number = (someValue as string).length
// or angle-bracket syntax
let strLength: number = (<string>someValue).length

console.log(someValueLength) //10
console.log(strLength)