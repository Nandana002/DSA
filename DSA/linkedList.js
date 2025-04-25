
//array to linked list
// class Node {
//     constructor (value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
// //     constructor () {
// //         this.head = null
// //         this.size = 0
// //     }

// //     isEmpty() {
// //         return this.size === 0
// //     }

// //     getSize() {
// //         return this.size
// //     }

// //     add(value) {
// //         const node = new Node (value);
// //         if(this.isEmpty()) {
// //             this.head = node
// //         } else {
// //             let curr = this.head
// //             while(curr.next) {
// //                 curr = curr.next
// //             }
// //             curr.next = node
// //         }
// //     }

// //     print() {
// //         if (this.isEmpty()) {
// //             console.log('List is empty')
// //         }
// //         else{
// //             let curr = this.head
// //         let listValues = ""
// //         while(curr) {
// //             listValues += `${curr.value} `
// //             curr = curr.next
// //         }
// //         console.log(listValues)
// //         }
        
// //     }
// // }

// // function arrayToLinkedList (arr) {
// //     let linkedList = new LinkedList()
// //     arr.forEach(item=>linkedList.add(item))
// //     return linkedList
// // }

// // let list = new LinkedList()
// // const array = [10,20,3,4,5]
// // arrayToLinkedList(array)
// // list.print()
// //Reverse a doubly linkedList

// // Node class
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.prev = null;
//       this.next = null;
//     }
//   }
  
//   // Doubly Linked List class
//   class DoublyLinkedList {
//     constructor() {
//       this.head = null;
//     }
  
//     // Insert at end
//     insertAtEnd(data) {
//       const newNode = new Node(data);
  
//       if (this.head === null) {
//         this.head = newNode;
//         return;
//       }
  
//       let current = this.head;
//       while (current.next !== null) {
//         current = current.next;
//       }
  
//       current.next = newNode;
//       newNode.prev = current;
//     }
  
//     display() {
//       let current = this.head;
//       let result = "";
//       while (current !== null) {
//         result += current.data + " <=> ";
//         current = current.next;
//       }
//       console.log(result + "null");
//     }
  
//     reverse() {
//       let current = this.head;
//       let temp = null;
  
//       while (current !== null) {
//         temp = current.prev;
//         current.prev = current.next;
//         current.next = temp;
  
//         current = current.prev;
//       }
  
//       if (temp !== null) {
//         this.head = temp.prev;
//       }
//     }
//   }
  

//   const dll = new DoublyLinkedList();
//   dll.insertAtEnd(1);
//   dll.insertAtEnd(2);
//   dll.insertAtEnd(3);
//   dll.insertAtEnd(4);
//   dll.insertAtEnd(5);
  
//   console.log("Original List:");
//   dll.display(); 
  
//   dll.reverse();
  
//   console.log("Reversed List:");
//   dll.display(); 
  
