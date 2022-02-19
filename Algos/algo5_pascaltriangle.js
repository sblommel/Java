//Brainstorm session

// function generate(numRows) {
//     //     To build out this triangle, we need to take note of a few things.
//         // Each row starts and ends with a 1.
//         // Inside each row, between the 1s, each digit is the sum of the two digits immediately above it.
//         // We can use this pattern to build new rows starting with row 3. But we can’t use it to build the first or second rows.
//         // Each row is represented as an array; we need to output the entire triangle as an array of these rows (ie an array of arrays).
//         //https://javascript.plainenglish.io/algorithms-101-pascals-triangle-in-javascript-9fbd9032871
//         let triangle = [[1], [1, 1]]
//         let NextRow = [1]
//         //add the previous rows to 2 numbers
        
//         let PreviousRow = triangle[triangle.length-1]
//         //triangle[length-1]
//         console.log(triangle[triangle.length-1])

//         //building row 3
//         for(let x =0; x < PreviousRow.length -1; x++){
//             let current = PreviousRow[x]
//             let next = PreviousRow[x+1]
//             NextRow.push(current + next)
//         }
//             NextRow.push(1)
//             console.log(NextRow)

            
//     };
    
//         generate(5) //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

        function generate(numRows) {
            //     To build out this triangle, we need to take note of a few things.
                // Each row starts and ends with a 1.
                // Inside each row, between the 1s, each digit is the sum of the two digits immediately above it.
                // We can use this pattern to build new rows starting with row 3. But we can’t use it to build the first or second rows.
                // Each row is represented as an array; we need to output the entire triangle as an array of these rows (ie an array of arrays).
                let triangle = [[1], [1,1]];
        
                //we know immediately when creating a new row that it will start with one
                //[]
                //in order to create the next row, we need to know the previous row
                //in order to know whats in the previous row-->we need to find the row at the last index of the triangle
        
                for(let j = 3; j<=numRows; j++){
                    let prevRow = triangle[triangle.length-1]
                    //to find what the previous row is
                    let newrow = [1];
            
                    //loop through the previous row
                    for(let i = 0; i<prevRow.length-1; i++){
                        // console.log(prevRow[i])
                        let currentval = prevRow[i]
                        let nextVal = prevRow[i+1]
                        let sum = currentval + nextVal;
                        newrow.push(sum)
                    }
                    newrow.push(1)
        
                    //after new row is generated, insert into triangle
                    triangle.push(newrow)
                    console.log("new row is this--->", newrow)
        
                }
        
                console.log(triangle)
        
            };
        
        generate(6)        

