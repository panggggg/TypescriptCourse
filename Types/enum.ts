//กำหนดค่าแบบ manual
enum Role { 
    ADMIN = 5,
    READ_ONLY = 6,
    AUTHOR = 7
}

const personEnum = {
    name: "Pawornwan",
    age: 21,
    hobbies: ['play game', 'cooking'],
    role: Role.AUTHOR
}

if(personEnum.role === Role.AUTHOR){
    console.log('is author')
}

//1. enum จะเริ่มต้นด้วยค่าเท่ากับ 0 - n
enum Cars {
    Toyota, //0
    Mazda, //1
    Honda //2
}

let car: Cars = Cars.Toyota
console.log(car) // output -> 0

let carName: string = Cars[2]
console.log(carName) //output -> Honda

//2. กำหนดค่า default 
enum Colour {
    Red = 2,
    Green, //3
    Blue //4
}
let green: Colour = Colour.Green
console.log(green) //output -> 3

//3. เอาค่าที่เป็นตัวเลขไปหาว่าตัวเลขที่มาจากค่าไหนใน enum
enum Fruits {
    apple = 20,
    banana = 10,
    pineapple = 30
}
let banana: string = Fruits[10]
console.log(banana)