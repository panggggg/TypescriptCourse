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