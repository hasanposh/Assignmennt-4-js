function deleteInvalids(array) {
    if(Array.isArray(array) == false){
        return "INPUT SHOULD BE AN ARRAY"
    }
    let finalArray = []
    for (const elemennnt of array) {
        if ( typeof elemennnt == "number") {
            if(isNaN(elemennnt)){
                continue
            }
            else{
                finalArray.push(elemennnt)
            }
        }
    }
    return finalArray
}

console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))

console.log(deleteInvalids(["1" , {num:2} , NaN ]))

console.log(deleteInvalids([ 1 , 2 , -3 ]))

console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))


// Another way

// function deleteInvalids(array) {
//     if(Array.isArray(array) == false){
//         return "INPUT SHOULD BE AN ARRAY"
//     }
//     let finalArray = []
//     for (const elemennnt of array) {
//         if ( typeof elemennnt == "number" && isNaN(elemennnt) == false ) {
            
            
//                 finalArray.push(elemennnt)
            
//         }
//     }
//     return finalArray
// }

// console.log(deleteInvalids(["1" , {num:2} , NaN ]))