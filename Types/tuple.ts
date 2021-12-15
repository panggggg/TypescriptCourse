const personTuple: {
    name: string
    age: number
    hobbies: string[]
    role: [number, string]
} = {
    name: "Pawornwan",
    age: 21,
    hobbies: ['play game', 'cooking'],
    role: [2, 'author']
}

personTuple.role.push('admin')
personTuple.role[0] = 20
console.log(personTuple.name.substring(6)) //output -> wan
console.log(personTuple.role[1].substring(0, 2)) //output -> au
console.log(personTuple)

// personTuple.role[1] = 10 --> index 1 is string
// personTuple.role = [0, 'admin', 'user']