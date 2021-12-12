//unknown is better than any because it make sure by some type checking
//unknown is better choice over any if you can't tell exactly what type you will store
let userInput: unknown
let userName: string

//unknown type you can store any value without getting errors
userInput = 5
userInput = "pang"

//check type
if(typeof userInput === 'string'){
    userName = userInput
}

// userName = userInput // unknow is not guaranteed