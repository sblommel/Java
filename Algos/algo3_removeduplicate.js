//given an array, remove duplicate values from it. Do it in place (do not create a new array to do this with). If you're having difficulty, its okay to try an baby step it first by using a new array and making it work that way.

// for the object it will not have duplicates so we will use an object 


function removeDupes(arr){
    //you can use an object to keep track of values (hint)
    let obj = {}; //we are looking for 
    for( x = 0; x <arr.length; x++) {
        console.log(arr[x]) //this gives you the value at each index number//compare the value at the index
        //each iteration of the the loop, check IF object contains a key that is same to the current value in this current iteration.
        if(obj[arr[x]]){  //if the object contains a key of arr[x]
        //x represents the index where the duplicate occurs. So we want to remove value out of the array. Google how to remove a value from an array in JavaScript.
        arr.splice(x, 1)
        x-- //this line will take care of duplicate numbers if they are next to each other for example this only applies to the number 7 in the array.
        }else{ //the object doesn't have a key of arr[x]
            obj[arr[x]] = true    //save this value an object as a key
            
            }    

        }
        console.log(obj)
        console.log(arr)
        
    }


console.log(removeDupes([3,6,7,3,2,7,7,9,0,1])) //output-> [3,6,7,2,9,0,1]