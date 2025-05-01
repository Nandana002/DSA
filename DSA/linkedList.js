//LInked list node structor
// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// // }
// //Insert at beginning
// function insertAtBeginning(head,data){
//     let newNode=new Node(data)
//     newNode.next=head
//     return newNode;
// }


// // array to linked list
// class Node {
//     constructor (value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor () {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     add(value) {
//         const node = new Node (value);
//         if(this.isEmpty()) {
//             this.head = node
//         } else {
//             let curr = this.head
//             while(curr.next) {
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('List is empty')
//         }
//         else{
//             let curr = this.head
//         let listValues = ""
//         while(curr) {
//             listValues += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listValues)
//         }
        
//     }
// }

// function arrayToLinkedList (arr) {
//     let linkedList = new LinkedList()
//     arr.forEach(item=>linkedList.add(item))
//     return linkedList
// }

// let list = new LinkedList()
// const array = [10,20,3,4,5]
// arrayToLinkedList(array)
// list.print()
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

//array to LInkedList
// let arr = [1, 3, 4, 5, 6, 5, 4, 3, 3];

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     arrToLi(arr) {
//         if (arr.length == 0) return;
//         this.head = new Node(arr[0]);
//         let current = this.head;
//         for (let i = 1; i < arr.length; i++) { // Start from 1 to avoid duplication of the first element
//             current.next = new Node(arr[i]);
//             current = current.next;
//         }
//     }

//     print() {
//         let res = "";
//         let current = this.head;
//         while (current) {
//             res += current.data + '->'; // Use current instead of curr
//             current = current.next;
//         }
//         console.log(res, 'null');
//     }
// }

// let ii = new LinkedList();
// ii.arrToLi(arr);
// ii.print();


// Linked List in Javascript

// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }
  
//     addFirst(data) {
//       const newNode = new Node(data);
//       newNode.next = this.head;
//       this.head = newNode;
//     }
  
//     addLast(data) {
//       const newNode = new Node(data);
  
//       if (!this.head) {
//         this.head = newNode;
//         return;
//       }
  
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
  
//       current.next = newNode;
//     }
  
//     size() {
//       let count = 0;
//       let current = this.head;
//       while (current) {
//         count++;
//         current = current.next;
//       }
//       return count;
//     }
  
//     addAt(index, data) {
//       if (index < 0 || index > this.size()) {
//         console.error("Invalid Index");
//         return;
//       }
  
//       const newNode = new Node(data);
//       if (index === 0) {
//         newNode.next = this.head;
//         this.head = newNode;
//         return;
//       }
  
//       let current = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         current = current.next;
//       }
  
//       newNode.next = current.next;
//       current.next = newNode;
//     }
  
//     removeTop() {
//       if (!this.head) {
//         return;
//       }
  
//       this.head = this.head.next;
//     }
  
//     removeLast() {
//       if (!this.head) {
//         return;
//       }
  
//       let current = this.head;
//       while (current.next.next) {
//         current = current.next;
//       }
  
//       current.next = null;
//     }
  
//     removeAt(index) {
//       if (index < 0 || index > this.size()) {
//         console.error("Invalid Index");
//         return;
//       }
  
//       if (index === 0) {
//         this.head = this.head.next;
//         return;
//       }
  
//       let current = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         current = current.next;
//       }
  
//       if (current.next) {
//         current.next = current.next.next;
//       }
//     }
  
//     print() {
//       let current = this.head;
//       while (current) {
//         console.log(current.data);
//         current = current.next;
//       }
//     }
//   }
  
//   const linkedlist = new LinkedList();
  
//   linkedlist.addFirst(5);
//   linkedlist.addFirst(3);
//   linkedlist.addFirst(8);
//   linkedlist.addLast(6);
  
//   linkedlist.removeTop();
  
//   linkedlist.addAt(2, 8);
  
//   linkedlist.removeLast();
//   linkedlist.removeAt(2);
  
//   linkedlist.print();
//   console.log("size = " + linkedlist.size());



//Remove duplicates from a linked list

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insert(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }


//     removeDuplicates() {
//         let current = this.head;
//         let prev = null;
//         const seen = new Set();
//         while (current) {
//             if (seen.has(current.value)) {
//                 prev.next = current.next;
//             } else {
//                 seen.add(current.value);
//                 prev = current;
//             }
//             current = current.next;
//         }
//     }


//     display() {
//         let current = this.head;
//         const result = [];
//         while (current) {
//             result.push(current.value);
//             current = current.next;
//         }
//         console.log(result.join(" -> "));
//     }
// }


// const list = new LinkedList();
// [1, 3, 4, 3, 5, 1, 6, 4].forEach(val => list.insert(val));

// console.log("Before removing duplicates:");
// list.display();

// list.removeDuplicates();

// console.log("After removing duplicates:");
// list.display();

//Remove middle element from linked list


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insert(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     removeMiddle() {
//         if (!this.head || !this.head.next) {
//             this.head = null; 
//             return;
//         }

//         let slow = this.head;
//         let fast = this.head;
//         let prev = null;

       
//         while (fast && fast.next) {
//             fast = fast.next.next;
//             prev = slow;
//             slow = slow.next;
//         }

 
//         prev.next = slow.next; 
//     }

//     display() {
//         let current = this.head;
//         const result = [];
//         while (current) {
//             result.push(current.value);
//             current = current.next;
//         }
//         console.log(result.join(" -> "));
//     }
// }

// const list = new LinkedList();
// [1, 2, 3, 4, 5].forEach(val => list.insert(val));

// console.log("Before removing middle:");
// list.display();

// list.removeMiddle();

// console.log("After removing middle:");
// list.display();


// Delete nth node from end (two-pointer approach)
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insert(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     deleteNthFromEnd(n) {
//         let dummy = new Node(0);
//         dummy.next = this.head;
//         let fast = dummy;
//         let slow = dummy;

//         for (let i = 0; i < n; i++) {
//             fast = fast.next;
//         }

//         while (fast.next) {
//             fast = fast.next;
//             slow = slow.next;
//         }

//         slow.next = slow.next.next;

        
//         this.head = dummy.next;
//     }

//     display() {
//         let current = this.head;
//         const result = [];
//         while (current) {
//             result.push(current.value);
//             current = current.next;
//         }
//         console.log(result.join(" -> "));
//     }
// }

// const list = new LinkedList();
// [1, 2, 3, 4, 5].forEach(val => list.insert(val));

// console.log("Before deletion:");
// list.display();

// list.deleteNthFromEnd(2); 

// console.log("After deletion:");
// list.display();



// Merge two sorted linked lists
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insert(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     static mergeSortedLists(list1, list2) {
//         let dummy = new Node(0);
//         let current = dummy;

//         let l1 = list1.head;
//         let l2 = list2.head;

//         while (l1 && l2) {
//             if (l1.value < l2.value) {
//                 current.next = l1;
//                 l1 = l1.next;
//             } else {
//                 current.next = l2;
//                 l2 = l2.next;
//             }
//             current = current.next;
//         }

//         // Attach remaining nodes if any
//         if (l1) {
//             current.next = l1;
//         }
//         if (l2) {
//             current.next = l2;
//         }

//         // Return merged list
//         const mergedList = new LinkedList();
//         mergedList.head = dummy.next;
//         return mergedList;
//     }

//     display() {
//         let current = this.head;
//         const result = [];
//         while (current) {
//             result.push(current.value);
//             current = current.next;
//         }
//         console.log(result.join(" -> "));
//     }
// }

// // Example usage:
// const list1 = new LinkedList();
// [1, 3, 5].forEach(val => list1.insert(val));

// const list2 = new LinkedList();
// [2, 4, 6].forEach(val => list2.insert(val));

// console.log("List 1:");
// list1.display();

// console.log("List 2:");
// list2.display();

// const mergedList = LinkedList.mergeSortedLists(list1, list2);
// console.log("Merged List:");
// mergedList.display();

//remove odd elements nodes from linkedList
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insert(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     removeOdd() {
//         
//         while (this.head && this.head.value % 2 !== 0) {
//             this.head = this.head.next;
//         }

//        
//         let current = this.head;
//         while (current && current.next) {
//             if (current.next.value % 2 !== 0) {
//                 current.next = current.next.next; 
//             } else {
//                 current = current.next;
//             }
//         }
//     }

//     display() {
//         let current = this.head;
//         const result = [];
//         while (current) {
//             result.push(current.value);
//             current = current.next;
//         }
//         console.log(result.join(" -> "));
//     }
// }

// // Example usage:
// const list = new LinkedList();
// [1, 2, 3, 4, 5, 6, 7, 8].forEach(val => list.insert(val));

// console.log("Original List:");
// list.display();

// list.removeOdd();

// console.log("After Removing Odd Elements:");
// list.display();


// Reverse a singly linked list
// class Node{
//     constructor(value){
//     this.value=value
//     this.next=null
//     }

// }
// class LinkedList{
//     constructor(){
//         this.head=null
//     }
//     append(value){
//         const newNode=new Node(value)
//         if(!this.head){
//             this.head=newNode
//             return
//         }
//         let curr=this.head
//         while(curr.next){
//             curr=curr.next
//         }
//         curr.next=newNode
//     }
//     printList(){
//         let temp=this.head
//         let result=''
//         while(temp){
//             result+=temp.value+">"
//             temp=temp.next
//         }
//         console.log(result+'null')
//     }

//     reverse(){
//         let prev=null
//         let curr=this.head
//         let next=null
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }
// }
// const list = new LinkedList();
// c

// ///Reverse a doubly linked list
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
//     }
// }
// class DoublyLinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     append(value){
//         const newNode=new Node(value)
//             if(!this.head){
//                this.head=newNode;
//                this.tail=newNode;
//                return
//             }
//             this.tail.next=newNode
//             newNode.prev=this.tail
//             this.tail=newNode
//         }

//         printForward(){
//             let temp=this.head;
//             let result=''
//             while(temp){
//                 result+=temp.value+'>'
//                 temp=temp.next
//             }
//             console.log(result+'null')
//         }
//         reverse(){
//             let curr=this.head
//             let temp=null
//             while(curr){

//                 temp=curr.prev
//                 curr.prev=curr.next
//                 curr.next=temp


//                 curr=curr.prev
//             }
//             if(temp!==null){
//                 this.head=temp.prev
//             }
//         }
//     }
//     const list = new DoublyLinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);

// // console.log("Original List:");
// // list.printForward();

// // list.reverse();

// // console.log("Reversed List:");
// // list.printForward();



// // Delete the last occurrence of a value in a linked list
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insertAtEnd(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     deleteLastOccurrence(value) {
//         let current = this.head;
//         let prev = null;
//         let last = null;
//         let prevLast = null;

//         while (current) {
//             if (current.data === value) {
//                 last = current;
//                 prevLast = prev;
//             }
//             prev = current;
//             current = current.next;
//         }

//         if (!last) {
//             console.log("Value not found.");
//             return;
//         }

//         if (last === this.head) {
//             this.head = this.head.next;
//         } else {
//             prevLast.next = last.next;
//         }

//         console.log(`Deleted last occurrence of ${value}`);
//     }

//     printList() {
//         let current = this.head;
//         let result = '';
//         while (current) {
//             result += current.data + ' -> ';
//             current = current.next;
//         }
//         console.log(result.slice(0, -4) || 'List is empty.');
//     }
// }


// const list = new LinkedList();
// list.insertAtEnd(1);
// list.insertAtEnd(2);
// list.insertAtEnd(3);
// list.insertAtEnd(2);
// list.insertAtEnd(4);
// list.printList(); 

// list.deleteLastOccurrence(2); 
// list.printList(); 



//palindrome linked List

// isPalindrome(){
//     let arr=[]
//     let curr=this.head
//     while(curr){
//         arr.push(curr.value)
//         curr=curr.next
//     }
//     let i=0,j=arr.length-1
//     while(i<j){
//         if(arr[i]!==arr[j]) return false
//         i++
//         j--

//     }
//     return result
// }





