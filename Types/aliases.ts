type Combinable = number | string

function aliases(input: Combinable){
    return input
}

console.log(aliases('Pang'))
console.log(aliases(100))