// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

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

//enum จะเริ่มต้นด้วยค่าเท่ากับ 0
enum Cars {
    Toyota, //0
    Mazda, //1
    Honda //2
}

let car: Cars = Cars.Toyota
console.log(car) // output -> 0

let carName: string = Cars[2]
console.log(carName) //output -> Honda