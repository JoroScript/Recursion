

function fibs(n){
let arr=[];
    for(let i=0; i<n; i++){
        if(i==0 || i==1){
            arr.push(i);
        }
        else arr.push((arr[i-1]+arr[i-2])); 

    }
    console.log(arr);
}

// fibs(8);


function fibsRec(n) {
    // Base cases for n = 1 or n = 2
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    // Recursive call
    let fibs = fibsRec(n - 1);
    
    // Append the next Fibonacci number to the array
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    
    return fibs;
}

console.log(fibsRec(5)); // Output: [0, 1, 1, 2, 3]



// function mergedArray(arr1,arr2){
//     let merged = [...arr1,...arr2];
//     for(let i=0; i<merged.length-1; i++){
//         for(let j=i+1; j<merged.length; j++){
//             if(merged[i]>merged[j]){
//                 let cont=merged[i];
//                 merged[i]=merged[j];
//                 merged[j]=cont;
//             }
//         }
//     }
//     console.log(merged);
//     let median=0;
//     if(merged.length%2==0){
//         median=(merged[merged.length/2-1]+merged[merged.length/2])/2;
//     }
//     else {
//         let index=Math.floor(merged.length/2);
//         console.log(index);
//                 median=merged[index];//5 elementa - 4 posleden index - 5/2=2.5=3
//     }
//         return median;
// }
// console.log(mergedArray([1,2,3,4,5],[6,7,8,9,10,11,12,13,14,15,16,17]));
let array=[3,2,1,13,8,5,0,1];//2,3,4,5,6,7,8,9
function merge(A,B){

    let C=[];
   let i=0;
   let j=0;
   let k=0;
    while(i<A.length && j<B.length){
        if(A[i]<B[j]){
             C[k++]=A[i++];
         }
         else C[k++]=B[j++];
    }
    for(;i<A.length; i++){
        C[k++]=A[i];
    }
    for(; j<B.length;j++){
        C[k++]=B[j]
    }
    
    return C;

}
function mergeSort(arr){
    let high=arr.length;
    if(arr.length<=1){
        return arr;
    }
    
      let mid=Math.floor(high/2);
       let A= mergeSort(arr.slice(0,mid));
        let B=mergeSort(arr.slice(mid));
       return merge(A,B);
    
    
}
console.log(mergeSort(array));
console.log("HELLO");

//  function longestString(s) {
//     let length=1; 
//     let longestLength=0;
//     let subStr=s[0];
//     for(let i=1; i<s.length; i++){
    
      
//         if(!(subStr.includes(s[i]))){
//             subStr+=s[i];
//             length++;
//         }
//       else {
//         longestLength = length>longestLength ? length : longestLength;
//         if(s[i]!==s[i-1]){
//             subStr=s[i-1]+s[i];
//             length=2;
//         }
//         else{
//             subStr=s[i];
//             length=1;
//         }

//       }
//     }
    
//     if(!longestLength){
//        return s.length;
//     }
//     longestLength= length>longestLength ? length : longestLength;
//    return longestLength;
// let subStr=s[0];
// let count=1;
//     for(let i=0; i<s.length; i++){
//         if(!(subStr.includes(s[i]))){
//         subStr+=s[i];
//         count++;
//         }
//         else{
//           longestString(s.substring(1));
//         }
//     }
//     return count;


// };
//  console.log(longestString('pwwkew'));