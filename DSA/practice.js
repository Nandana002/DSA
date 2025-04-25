// // function fibonacci(n){
// //     const fib=[0,1]
// //     for(let i=2;i<=n;i++){
// //         fib[i]=fib[i-1]+fib[i-2]
// //     }
// //     return fib
// // }
// // console.log(fibonacci(8))
// //big-o=o(n)


// // function factorial(n){
// //     let result=1;
// //     for(let i=2;i<=n;i++){
// //         result=result*i
// //     }
// //     return result
// // }
// // console.log(factorial(5))
// //big-o=o(n)


// // function isPrime(n){
// //     if(n<2){
// //         return false;
// //     }
// //     for(let i=2;i<n;i++){
// //         if(n%i===0){
// //             return false;
// //         }
// //     }
// //     return true;
// // }
// // console.log(isPrime(5))

// // big -o=o(n)

// // function isPrime(n){
// //     if(n<2){
// //         return false;
// //     }
// //     for(let i=2;i<Math.sqrt(n);i++){
// //         if(n%i===0){
// //             return false;
// //         }
// //     }
// //     return true;
// // }
// // console.log(isPrime(5))

// //big -o =o(sqrt(n))



// // function isPowerOftwo(n){
// //     if(n<1){
// //         return false;
// //     }
// //     while(n>1){
// //         if(n%2!==0){
// //             return false
// //         }
// //         n=n/2
// //     }
// //     return true;
// // }
// // console.log(isPowerOftwo(5))
// big-o is o(logn)

// function is PrimeNUmber(n){
//     if(n<1){
//         return true;
        
//     }
//     while(n&(n-1)===0){
        
//     }
//     console.log(PrimeNUmber(5))


// big-o=o(1)
///recursiveFbionacci(n){
//   function recursiveFibonacci(n){
//       if(n<2){
//           return n;
//       }
//       return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
//   }
//   console.log(recursiveFibonacci(6))

// o(2^n)
// function recursiveFactorial(n){
//     if(n===0){
//         return 1;
//     }
//     return n*recursiveFactorial(n-1)

// }
// console.log(recursiveFactorial(5))


//big-o=O(n)


// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i;
//         }
//     }
//     return -1
// }
// console.log(linearSearch([-5,2,10,4,6],10))

// big -o=O(n)



// function binarySearch(arr,target){
//     let left=0;
//     let right=arr.length-1
//     while(left<right){
//         let midIndex=Math.floor((left+right)/2) 
//         if(target===arr[midIndex]){
//         return midIndex
        
//     }
//     if(target<arr[midIndex]){
//         right=middleIndex-1
//     }else{
//         left=midIndex+1
        
//     }
// }
// return -1
// }
// console.log(binarySearch([1,3,4,5,7,3],4))
// big-o=O(logn)
// Write a JavaScript class to represent a Singly Linked List.
// Implement methods to check if it’s empty and return its size.
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0;
        
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
// }
// const list=new LinkedList()
// console.log('List is empty?',list.isEmpty())
// console.log('List size',list.getSize())



// "How do you implement a singly linked list with basic operations like adding an element at the beginning (prepending) and printing the list?"

// class Node{
// constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }
// class LinkedList{
//   constructor(){
//         this.head=null;
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const newNode=new Node(value)
//         if(this.isEmpty()){
//             this.head=newNode
//         }else{
//             newNode.next=this.head
//             this.head=newNode
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//     }else{
//         let current=this.head
//         let listvalue=""
//         while(current){
//             listvalue+=current.value+"→"
//             current=current.next
//           }
//           console.log(listvalue+"null")
//     }
// }
// }
// const list = new LinkedList();
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.print()


// class Node{
//     constructor(value){
//     this.value=value
//     this.next=null
// }
// }
// class LinkedList{
//     this.head=null
//     this.size=0;
// }
// isEmpty(){
//     return this.size===0;
    
// }
// getSize(){
//     return this.size
// }
// prepend(value){
//     const newNode=new Node(value)
//     if(this.isEmpty){
//         this.head=newNode
        
//     }else{
//         newNode.next=this.head
//         this.head=newNode
//     }
//     this.size++
// }
// print(){
//     if(this.isEmpty){
//         console.log("list is empty")
//     }else{
//         let current=this.head
//         let listValue="";
//         while(current){
//             listValue+=current.value+">"
//             current=current.next
//         }
//         console.log(listvalue+"null")
//     }
// }
// }
// const list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.print();