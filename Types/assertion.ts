let someValue: any = "some value"

//assertion เป็นการระบุ type ตอนที่กำลังจะใช้งาน

let someValueLength: number = (someValue as string).length
// or
// let someValueLength: number = (<string>someValue).length

console.log(someValueLength) //10