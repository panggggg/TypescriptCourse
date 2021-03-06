// interface ข้อดี คือการทำ inheritance

//type alias
type persons = {
    firstname: string,
    lastname: string
}

//extend type ที่สร้างจาก type alias
interface UserInfo extends persons {
    role: string
}

const myUser: UserInfo = {
    firstname: 'Pawornwan',
    lastname: 'Sriprathung',
    role: 'Developer'
}

console.log(myUser)

//use interface with function
function greeting(person: UserInfo){
    console.log(person.firstname)
    return person
}
greeting(myUser) //output -> Pawornwan

////////////////////////
interface Pet {
    name: string,
    age: number,
    hairColour: string
}

const kitty: Pet = {
    name: 'meow',
    age: 2,
    hairColour: 'brown'
}

const puppy: Pet = {
    name: 'boobie',
    age: 7,
    hairColour: 'font'
}