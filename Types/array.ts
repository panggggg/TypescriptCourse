const personArr = {
    name: "Pawornwan",
    age: 21,
    hobbies: ['play game', 'cooking']
}

let favouriteActivities: string[]
favouriteActivities = ['Sport']

// let favouriteActivities: any[]  ===> any is flexible
// favouriteActivities = ['Sport', 1]

console.log(personArr.name)

for (const hobby of personArr.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map())  !!!ERROR!!!
}