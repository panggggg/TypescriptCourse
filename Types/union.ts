//union is flexible but have a different logic

function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
    ) {
    let result
    // if(typeof input1 === 'number' && typeof input2 === 'number'){
    //     result = input1 + input2
    // } else {
    //     result = input1.toString() + input2.toString()
    // }
    // return result
    //output -> 56, 3026, Pangpicc


    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
    //output -> 56, 56, Pangpicc

    // if(resultConversion === 'as-number'){
    //     return +result
    // } else {
    //     return result.toString()
    // }
    //output -> 56, 3026, Pangpicc
}

const combinedAges = combine(30, 26, 'as-number')
console.log(`CombinedAges: ${combinedAges}`)

const combinedStringAges = combine('30', '26', 'as-number')
console.log(`CombinedStringAges: ${combinedStringAges}`)

const combinedNames = combine('Pang', 'picc', 'as-text')
console.log(`CombinedNames: ${combinedNames}`)