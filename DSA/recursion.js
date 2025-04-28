//Reverse a string using recursion

// function reverseStr(str){
//     if(str.length<=1){
//         return str
//     }
//     return reverseStr(str.slice(1))+str[0]
// }
// console.log(reverseStr("hello"))
//O(n^2)

// Print first 10 elements of Fibonacci series using recursion

// function fibonacci(n){
//     if(n<=1)return n
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// for(let i=0;i<10;i++){
//     console.log(fibonacci(i))
// }



//find sum of array using recursion
// function sum(arr){
//     if(arr.length===0)return 0

//     return arr[0]+sum(arr.slice(1))
// }
// const arr=[1,4,5,6,7,86,6,4]
// console.log(sum(arr))

//___________without any inbuilt methods_________
// function sumArray(arr,index=0){
// if(index===arr.length)return 0

// return arr[index]+sumArray(arr,index+1)
// }
// const arr=[1,2,3,4,5]
// console.log(sumArray(arr))


// Reverse each word in a string using recursion

// function reverseWord(word) {
//     if (word.length <= 1) {
//         return word;
//     }
//     // Recursively reverse
//     return reverseWord(word.slice(1)) + word[0];
// }

// function reverseEachWord(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = reverseWord(words[i]);
//     }
//     return words.join(' ');
// }

// // Example usage
// let input = "hello world";
// let result = reverseEachWord(input);
// console.log(result); // Output: "olleh dlrow"

//Factorial using recursion

// function Factorial(n){
//     if(n===0||n===1){
//         return 1
//     }
//     return n*Factorial(n-1)
// }
// console.log(Factorial(5))



//Recursive function to find sum of an array
// function sumArray(arr,n){
//     if(n<=0)return 0;
//     return sumArray(arr,n-1)+arr[n-1]
// }
// let arr=[1,3,4,5,6,7]
// let result=sumArray(arr,arr.length)
// console.log(result)

//Recursive function to remove duplicates

// function removeDuplicates(arr,index=0,unique=[]){
//     if(index===arr.length){
//         return unique
//     }
//     if(!unique.includes(arr[index])){
//         unique.push(arr[index])
//     }
//     return removeDuplicates(arr,index+1,unique)
// }

// let arr=[1,3,4,5,6,5]
// let result=removeDuplicates(arr)
// console.log(result)