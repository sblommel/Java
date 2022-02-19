//Singly Linked List
//More efficient in storing memory than array
//Has head, pointer, and node and runner.
//We do need to create a two classes Node and SinglyLinkedList
//Single linked list has a bunch of a nodes and has the property of the head
//Need a data structure to access values it IS easier in an Array we can reference an index number, but to find a value can be more challenging with Singly Linked Lists.
//runner allows to increment the list.


class Node {
    constructor(valueInput){
        this.value = valueInput;
        this.next = null
    }
}


class SLL {
    constructor(){
        this.head = null;
    }

    addToBack(valueInput){
        //create a node object with a given value to add to the back of the list eventually 
        let newNode = new Node(valueInput)
        //if the singly linked list is empty (this mean that its head === null), then set the head of the singly linked list to be this new node
        if(this.head == null){
            this.head = newNode;
        }
        //otherwise (else) go to the end of the list and insert the node to the end
        else{ //else means that the list is not empty
            console.log("this.head looks like this-->", this.head)
            let runner = this.head; //create runner variable to start at the beginning of the list (the head)
            
            //increment runner while runner.next != null (as long as the runner.next does not equal to null, that meanns runner is not at the last node)
            while(runner.next != null){ //in other words (while runner is not the last node)
                runner = runner.next //this moves runner to the next node
            }

            //by the time while loop is done, we will have runner pointing to the last node
            runner.next = newNode;

        }
    }

    display(){
        let result = "";

        //use runner to traverse the SLL
        let runner = this.head;
        while(runner != null){ //while runner is pointing at a node
            result += `${runner.value} -->`
            runner = runner.next //this is how you increment runner to go to the next node
        }

        console.log(result)
    }


    addtoFront(){

    }

}

let sll1 = new SLL()

sll1.addToBack(3)
sll1.addToBack(12)
sll1.addToBack(15)
sll1.addToBack(9)

sll1.display()

console.log(sll1)
// let firstNode = new Node(3);
// let secondNode = new Node(9);
// firstNode.next = secondNode

// let thirdNode = new Node(12);

// secondNode.next = thirdNode;

//THESE ARE MY NOTES
// class Node{
//     constructor(valueInput){
//         this.value = valueInput;
//         this.next = null;
//     }

// }

// class SinglyLinkedList {
//     constructor(){
//         this.head = null;
//     }
//     addToBack(){
//         //create a node object with a given value to add to the back of the list.
//         let newNode = new Node(valueInput)
//         //if the singly linked list is empty (this means that it's head ==null), then set the head of the singly linked list to be the the new node. OTHERWISE (else) go to the end of list and insert node to the end.
//         if(this.head == null){
//             this.head = newNode;
//         }
//         //OTHERWISE (else) go to the end of list and insert node to the end.
//         else{  //else means that the list is not empty when adding 12
//             console.log("This.head is the following", this.head)
//             //this.head.next=newNode; this only works for the next node. We need a runner
//             let runner = this.head; //create runner variable to start at the beginning of the list (the head)

//             //increment runner while runner.next !=null (as long as the runner.next does not equal to null, that means runner is not at the last node)
//             while(runner.next != null){
//                 runner = runner.next // this moves runner to the next node
//             }

//             //by the time while loop is done, we will have runner pointing to the last node
//             runner.next = newNode;

//         }
//     }

//     display(){
//         let result = "";

//         //use runner to go thru the singly linked list
//         let runner = this.head;
//         while (runner != null){
//             result += `${runner.value}--->`
//             runner = runner.next //this is how you increment runner to go to the next node
//         }
//         console.log(result)
//     }

//     addToFront(){

//     }

// }

// let SinglyLinkedList1 = new SinglyLinkedList()
// SinglyLinkedList1.addToBack(3)
// SinglyLinkedList1.addToBack(12)
// SinglyLinkedList.addToBack(15)
// SinglyLinkedList.addToBack(9)

// This is an example of only working with nodes this becomes repetitive.
// let firstNode = new Node(3);
// let secondNode = new Node(9);
// //we need to connect these 2 nodes
// firstNode.next = secondNode
// //creating a new node
// let thirdNode = new Node(12);
// //but need it to point to the third node
// secondNode.next = thirdNode;