function addAndHandle(n1: number, n2: number, cb: (num: number) => number){
    const result = n1 + n2
    cb(result)
}

addAndHandle(10, 20, (result) => {
    console.log(result)
    return result
})

// function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
//     const result = n1 + n2
//     cb(result)
// }

// addAndHandle(10, 20, (result) => {
//     console.log(result)
// })