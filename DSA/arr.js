// //Linear search
// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target)return i
//     }
//     return -1
// }
// let arr=[1,5,4,3,3,2]
// console.log(linearSearch(arr,5))
// TC:O(n)

//binary Search

// function binarySearch(arr,target){
//     let left=0;
//     let right=arr.length-1
//     while(left<right){
//         let midIndex=Math.floor((left+right)/2) 
//         if(target===arr[midIndex]){
//         return midIndex
        
//     }
//     if(target<arr[midIndex]){
//         right=midIndex-1
//     }else{
//         left=midIndex+1
        
//     }
// }
// return -1
// }
// console.log(binarySearch([1,3,4,5,7,3],4))
//TC:O(logn)


//..........using to pointer to reverse an array in place..........
// function reverse(arr){
//     let left=0,right=arr.length-1
//     while(left<right){
//         [arr[left],arr[right]]=[arr[right],arr[left]]
//         left++;
//         right--
//     }
// }
// let arr=[1,3,4,5,6,7,8,8]
// reverse(arr)
// console.log(arr)
//______________reverseWithoutSplit_________
// let str=['hello','word']
// for(let i=0;i<str.length;i++){
//     let reverse="";
//     for(let j=str[i].length-1;j>=0;j--){
//         reverse+=str[i][j]
//     }
//     str[i]=reverse
// }
// console.log(str)
// //*****************another******************
// function reverse(arr){
//     let res=[]
//     for(let word of arr){
//         let resArr="";
//         for(let i=word.length-1;i>=0;i--){
//             resArr+=word[i]
//         }
//         res.push(resArr)
//     }
//     return res

// }
// console.log(reverse(['hello','world']))
//...................Write a function to move all zeros to the end of the array without changing the order of non-zero elements.............../
// function moveNonZero(arr){
//     let i=0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[j]!=0){
//             [arr[i],arr[j]]=[arr[j],arr[i]]
//             i++
//         }
//     }
//     return arr;
// }

// console.log(moveNonZero([2,3,4,5,0,6,7,8,8]))
//_______________write a function to find max and minimum element of an array________________________
// function maxAndMin(arr){
//     let max=-Infinity
//     let min=Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//         if(arr[i]<min){
//             min=arr[i]
//         }
//     }
//     return{min:min,max:max}

// }
// console.log(maxAndMin([1,3,4,5,6,5,3,2]))
//*********************another************ */
// function maxAndMin(arr){
//     let max=Math.max(...arr)
//     let min=Math.min(...arr)
//     return{max:max,min:min}
// }
// console.log(maxAndMin([1,2,3,4,4,3,5,6,7,8]))

//__________________remove duplicates from sorted arrays____________
// function remove(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 arr.splice(j,i)
//                 j--
//             }
//         }
//     }
//     return arr
// }
// console.log(remove([1,3,4,5,6,5,4,3,2]))
//TC:O(n^2)
//********************another************************ */
// removes consecutive duplicate elements and then returns the length of the modified arra
// function remove(arr){
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]===arr[i+1]){
//             arr.splice(i,1)
//             i--
//         }
//     }
//     return arr.length
// }
// console.log(remove([1,2,3,5,6,7,8,4,5,6,]))
//****************antoher *******************/
// function remove(num){
//     let i=0;
//     for(let j=1;j<num.length;j++){
//         if(num[i]!=num[j]){
//             i++;
//             num[i]=num[j]
//         }
//     }
//     return num.slice(0,i+1)
// }
// console.log(remove([3,4,5,63,2,3,4,5]))
// function remove(arr){
//     let i=0;
//     for(let j=1;j<arr.length-1;j++){
//         if(arr[i]!=arr[j]){
//             i++
//             arr[i]=arr[j]
//         }
//     }
//     return arr.slice(0,i+1)
// }
// console.log(remove([1,3,4,5,6,7,8,6,5,5,4]))

//..................... Remove subarray that is having largest elem.........................
// function removeSubMax(arr){
//     if(arr.length==0)return[]

//     let max=Math.max(...arr)
//     let index=arr.indexOf(max)
//     arr.splice(index,1)
    
//     return arr
// }
// let arr=[1,3,4,5,6,7,4,3,4,5]
// console.log(removeSubMax(arr))

//..................... Find last non repeating character in string ...................
// function lastNonRepeatingChar(str){
//     let count={}
//     let order=[]
//     for(let char of str){
//         if(count[char]){
//             count[char]++;
//         }else{
//             count[char]=1
//             order.push(char)
//         }
//     }
//     for(let i=order.length-1;i>=0;i--){
//         if(count[order[i]]===1){
//             return order[i]
//         }
//     }
// }
//find third largest element
// function thirdLargeElement(arr){
//     if(arr.length<3){
//         return null;
//     }
//     let first=-Infinityl
//     let second=-Infinity
//     let third=-Infinity
//     for(let num of arr){
//         if(num>first){
//             third=second
//             second=first
//             first=num
//         }else if(num>second&&num!==first){
//             third=second
//             second=num;

//         }else if(num>this&&num!==second&&num!==first){
//             third=num

//         }
    
//     }
//     return third===-Infinity?numm:third
// }
// Third Largest Element in an Array

// function thirdLargest(arr){
//   const sorted = [...new Set(arr)].sort((a,b) => b-a);
//   return sorted.length >= 3?sorted[2]:null;
// }

// console.log(thirdLargest([10,4,3,50,23,90]));
// removing an char from a string
// function removel(str){
//   if(str.length === 0){
//     return "";
//   }
//   if(str[0].toLowerCase() === 'o'){
//     return removel(str.slice(1))
//   }
//   return str[0] + removel(str.slice(1));
// }
// const text = "lock the local room of local police"
// const result = removel(text)
// console.log(result);






// Find second highest and second least element from an array

// function findSecondHIghLow(arr){
//     let uniqueArr=[...new Set(arr)]


//     if(uniqueArr.length<2){
//         console.log("Array must have at lease 2 unique elemets.")
//         return
//     }
//     uniqueArr.sort((a,b)=>a-b)

//     let secondLeast=uniqueArr[1]
//     let secondHighest=uniqueArr[uniqueArr.length-2]

//     console.log("second Least:",secondLeast)
//     console.log("second Highest:",secondHighest)
// }

// let arr=[3,4,5,32,3,4,5,6]
// findSecondHIghLow(arr)
//find sum of prime numbers
// function isPrime(num){
//     if(num<2)return false
//     for(let j=2;j<=Math.sqrt(num);j++){
//         if(num%j===0){
//             return false;
//         }
//     }
//     return true
// }

// function sumPrimes(n){
//     let sum=0;
//     for(let i=2;i<=n;i++){
//         if(isPrime(i)){
//             sum+=i
//         }
//     }
//     return sum;
// }
// console.log(sumPrimes(10))


//find the last non-repeating character from a string in 0(n)

// function lastNonRepeatingChar(str){
//     let freq=new Map()
//     for(let ch of str){
//         freq.set(ch,(freq.get(ch)||0)+1)
//     }

//     for(let i=str.length-1;i>=0;i--){
//         if(freq.get(str[i])===1){
//             return str[i]
//         }
//     }
//     return null
// }
// let input="aabbaaccdf"
// console.log("last non repeating character:",lastNonRepeatingChar(input)



// -implement linked list with condition that only 1 duplicate is allowed in js/


// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class CustomLinkedList {
//     constructor() {
//       this.head = null;
//     }
  
//     countValue(value) {
//       let current = this.head;
//       let count = 0;
//       while (current) {
//         if (current.value === value) {
//           count++;
//         }
//         current = current.next;
//       }
//       return count;
//     }
  
//     insert(value) {
//       let count = this.countValue(value);
//       if (count >= 2) {
//         console.log(`❌ Cannot insert '${value}' more than twice.`);
//         return;
//       }
  
//       const newNode = new Node(value);
//       if (!this.head) {
//         this.head = newNode;
//       } else {
//         let current = this.head;
//         while (current.next) {
//           current = current.next;
//         }
//         current.next = newNode;
//       }
//       console.log(`✅ Inserted: ${value}`);
//     }
  
//     display() {
//       let result = "";
//       let current = this.head;
//       while (current) {
//         result += current.value + " -> ";
//         current = current.next;
//       }
//       console.log(result + "null");
//     }
//   }
  

//   const list = new CustomLinkedList();
//   list.insert(10);
//   list.insert(20);
//   list.insert(10);
//   list.insert(20); 
//   list.insert(10); 
//   list.display();


// function longestRepeatingChar(str) {
//     if (str.length === 0) return "";
  
//     let maxChar = str[0];       // longest repeating character
//     let maxCount = 1;           // its count
  
//     let currentChar = str[0];   // currently checking character
//     let currentCount = 1;       // current streak
  
//     for (let i = 1; i < str.length; i++) {
//       if (str[i] === currentChar) {
//         currentCount++; // increase streak
//         if (currentCount > maxCount) {
//           maxCount = currentCount;
//           maxChar = currentChar;
//         }
//       } else {
//         currentChar = str[i];   // change char
//         currentCount = 1;       // reset streak
//       }
//     }
  
//     return `${maxChar} repeated ${maxCount} times`;
//   }
  
//   // 🔹 Example
//   let input = "aaabbccccdddee";
//   console.log(longestRepeatingChar(input));  // Output: c repeate



// function removeDuplicates(arr){
//     let seen={}
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         if(!seen.[arr[i]]){
//             seen[arr[i]]=true
//             result.push(arr[i])

//         }
//     }
//     return result

// }
// let arr=[1,2,3,4,5,6,7]
// console.log(removeDuplicates(array))





  