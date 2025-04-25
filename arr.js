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



