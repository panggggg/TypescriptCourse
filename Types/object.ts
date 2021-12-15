const personObj: {name: string, age: number} = {
    name: "Pawornwan",
    age: 21
}

console.log(personObj.name)
console.log(personObj['age'])
console.log(personObj.age)

// const person = {
//     name: "Pawornwan",
//     age: 21
// }

// console.log(person.name)
// console.log(person.age)

const otherCake = (cakeObj: any) => {
    console.log(cakeObj)
}

otherCake({
    sugar: "10%",
    milk: "29%",
    flour: "50%"
})