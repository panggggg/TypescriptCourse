//type alias create a new name of a type

type myString = string
const myName: myString = 'Pawornwan'
console.log(myName)

//////////////////////////////////////////////////////

type User = {
    firstname: string,
    lastname: string
}

type numberOrStringOrUser = string | number | User
let myValue: numberOrStringOrUser
const sampleUser: User = {
    firstname: "Pawornwan",
    lastname: 'Sriprathung'
}

myValue = sampleUser //{ firstname: 'Pawornwan', lastname: 'Sriprathung' }
myValue = 12
myValue = "Hello world"
// myValue = true //error


 