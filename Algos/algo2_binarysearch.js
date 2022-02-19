//Binary array starts in the middle, but if the number is not the middle then you only have to search 1 side of the array.
//Analogy looking for a name in a telephone book. We don't need to look thru the whole "book" or array, just part of the "book" or part of the array. 

let x = [2,4,5,7,8,12,22,24,27,45,55,56,58,66,67,68,90,100];


//create  a function that accepts an array and a value to search for. It will return true if value is found in input array. False if it isnt. Use binary search strategy
function binarySearch(arr, value){
    //print out the middle index
    console.log(arr.length) // this will print out 18
    console.log(Math.floor(arr.length/2)) //give the middle index
    let middle = Math.floor(arr.length/2)  // variable for middle index  
    let start = 0 //represents start
    let end = arr.length -1 //represents end
    
    //loop needed
    while(start < end){
        let middle = Math.floor((start + end)/2)
        console.log({start, end, middle})
        console.log(middle)
        console.log(arr[middle])
        //if the value we are looking for is equal to the value in the middle
        if (value == arr[middle]){
            return true
        }
        //otherwise if the value is greater than
        else if (value > arr[middle]) {
            start = middle + 1 // middle references the index, thus we want to start at index 10 now.
        else{
            end = middle- 1
        }
        
        return false

        }

    }
    
    //pick a point in the middle of array and compare the value to find with the value in middle
    //if the value to find is greater than the value in middle, we know to look to the right of the middle point
    //repeat this process until the value is found or until the array has been fully looked through

}


console.log(binarySearch(x, 68)); //true
console.log(binarySearch(x, 51)); //false


//Another option
const binarySearch = (arr, value) => {
    //declare the start and end of our array
    let start = 0;
    let end = arr.length;
    //a while loop with the condition that our start never goes over our end
    while(start <= end) {
        //declare the midpoint of the array each go thru the loop
        const midPoint = Math.floor( (start + end) / 2 );
        //if by the grace of mt dew baja blast its in the middle
        if(arr[midPoint] === value) return midPoint;
        //if our mid value is less disregard the left half of the array and continue
        //searching on the right half  [ x, x, x, x, x, mid, ✓, ✓ ,✓, ✓, ✓ ]
        //                                                   ^---will be our new start
        else if(arr[midPoint] < value) start = midPoint + 1;       
        //if our mid value is greater disregard the right half of the array and continue
        //searching on the left half  [ ✓, ✓, ✓, ✓, ✓, mid, x, x ,x, x, x ]
        //                                             ^---will be our new end
        else end = midPoint - 1;        
    }
    //value was not found
    return false;
}
let x = [2,4,5,7,8,12,22,24,27,45,55,56,58,66,67,68,90,100];
console.log(binarySearch(x, 68)); //true
console.log(binarySearch(x, 51)); //false