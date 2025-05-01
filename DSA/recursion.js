//Reverse a string using recursion

// function reverseStr(str){
//     if(str.length<=1){
//         return str
//     }
//     return reverseStr(str.slice(1))+str[0]
// }
// console.log(reverseStr("hello"))
//O(n^2)
// reverseStr("hello") → Calls reverseStr("ello") + "h"

// reverseStr("ello") → Calls reverseStr("llo") + "e"

// reverseStr("llo") → Calls reverseStr("lo") + "l"

// reverseStr("lo") → Calls reverseStr("o") + "l"

// reverseStr("o") → Returns "o" (since length is 1)

// Combine: "o" + "l" + "l" + "e" + "h" → "olleh"


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


//check palindrome
// function str(palin,left=0,right=palin.length-1){
//     if(left>=right){
//         return true

//     }
//     if(palin[left]!=palin[right]){
//         return false
//     }
//     return str(palin,left+1,right-1)
// }
// console.log(str('ada'))


// function range(start,end){
//     if(end<start){
//         return[]
//     }
//     const numbers=range(start,end-1)
//     numbers.push(end)
//     return numbers
// }
// console.log(range(1,5))

// // recursion multiplication table

// function printTable(num, i = 1) {
//     if (i > 10) return;
//     console.log(`${num} x ${i} = ${num * i}`);
//     printTable(num, i + 1);
//   }
  
//   let number = 5;
//   printTable(number);
  
//  find the smallest word in a sentence using recursion:

// function findSmallestWord(sentence, words = sentence.split(' '), index = 0, smallest = words[0]) {
//     if (index === words.length) return smallest;
//     if (words[index].length < smallest.length) smallest = words[index];
//     return findSmallestWord(sentence, words, index + 1, smallest);
// }

// let sentence = "i am learning java script";
// console.log(findSmallestWord(sentence));


// //palidromeUsing recursion

// function isPalindrome(str,start=0,end=str.length01){
//     if(start>=end){
//         return true
//     }
//     if(str[start]!==str[end]){
//         return false;
//     }
//     return isPalindrome(str,str+1,end-1)
// }




// function binarySearch(arr, target, left = 0, right = arr.length - 1) {
//     if (left > right) return -1; // Base case: not found

//     const mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) return mid;
//     if (arr[mid] > target)
//         return binarySearch(arr, target, left, mid - 1);
//     else
//         return binarySearch(arr, target, mid + 1, right);
// }

// // Example usage
// const arr = [10, 20, 30, 40, 50, 60];
// const target = 40;
// const result = binarySearch(arr, target);

// console.log(result); // Output: 3 (index of 40)









