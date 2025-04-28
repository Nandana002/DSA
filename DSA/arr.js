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
//     let first=-Infinity
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









