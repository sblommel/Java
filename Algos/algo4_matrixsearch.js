// Matrix Search
// Jenny digs image and wants to make a JavaScript imaging library like PIL for python. She is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each two dimensional array represents a grey-scale image, where each integer value is a pixel. The second image might be somewhere inside the larger one. Return whether it is.
// Given Array: [ [12, 34, 45, 56],    And Array: [ [67, 78],      return: true
//                [98, 87, 76, 65],                 [43, 32] ];   
//                [56, 67, 78, 89],
//                [54, 43, 32, 21] ];

//Tips: the index in each sub array has to match. FOr y is true because the index matches-index 1,2 in both lines

//First try to loop thru the BIG array.


let bigArr = [
    [12, 34, 45, 56],
    [98, 87, 76, 65],
    [56, 67, 78, 89],
    [54, 43, 32, 21]
]

let smallArr1 = [
    [67, 78],
    [43, 32]
]


let smallArr2 = [
    [67, 77],
    [43, 32]
]


// function matrixSearch(bigArr, smallArr){
//     let startval = smallArr[0][0]
//     let exist = false
//     for(x=0; x< bigArr.length; x++){
//         console.log(x) //x-this will give the 4 index numbers
//         console.log(bigArr[x]) // bigArr[x]-this gives each value in sub array. Example out out put is [12, 34, 45, 56] [98, 87, 76, 65] [56, 67, 78, 89]
//         for (i=0; i < bigArr[x].length; i++){
//             //represent each subarray
//             console.log(bigArray[x][i]) //this will print the individual value in the sub array. Example 12 34 45 56 separately then get out of the nested loop and go back to main loop then 98, 87, 76, 65.
//             if(startval = bigArr[x][i]){ //When startval (67) is found in the Big Array. X and I represent the coordinates of the start value found in the big array.
//                 exist = true //when it finds 67 then goes into this loop.
//                 for (j=0; j<smallArr.length; j++){
//                     for(z=0; z < smallArr[j].length; z++){
//                     console.log ("Small array value:", smallArr[j][z])
//                     console.log("Big array corresponding values", bigArr[x+j][i+z])
//                     //if smallarray at it corresponding indices does NOT equal the big array at its corresponding indices, then set exists to be false
//                         if(smallArr[j][z] !=bigArr[x+j][i+z]){
//                         exist = false
//                         }    
                
//                     }
//                 }
            
//             }
//         } 
    
//     }

//     return exist   
//     return "Hello" // example of hello returning.-The value of a function call is whatever that function call returns 
// }

// console.log(matrixSearch(bigArr,smallArr1)) //true
// console.log(matrixSearch(bigArr,smallArr2)) //false

function matrixSearch(bigArr, smallArr){
    var startval = smallArr[0][0]
    var exist = false
    for(x=0; x < bigArr.length; x++){
        console.log(bigArr[x])
        for (i=0; i < bigArr[x].length; i++){
            console.log(bigArr[x][i])
            if(startval == bigArr[x][i]){ //when the startval (67) is found in big array. x and i represent the coordinates of the start value found in the big array
                exist = true
                for(j=0; j< smallArr.length; j++){
                    for(z=0; z < smallArr[j].length; z++){
                        console.log ("small array value: ", smallArr[j][z])
                        console.log("big array corresponding values", bigArr[x+j][i+z])
                        //if smallarray at it corresponding indeces does not equeal the big array at its corresponding indices, then set exists to be false
                        if(smallArr[j][z] != bigArr[x+j][i+z] ){
                            exist = false
                        }
                    }
                }  
            }
        }
    }
    return exist
}


//The value of a function call is whatever that function call returns.  
// console.log(matrixSearch(bigArr,smallArr1)) //true
console.log(matrixSearch(bigArr,smallArr2)) //false