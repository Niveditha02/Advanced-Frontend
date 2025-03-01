//DNF algorithm 
function swap(arr,i,j){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
}

function DNF(arr){
      let i=0;
      let j=arr.length-1;
      while (i<=j){
            if (arr[i]==1){
                  swap(arr,i,j);
                  j--;
            }else{
                  i++;
            }
      }
}

let arr1=[1,0,0,1,0,1];
DNF(arr1);
console.log("The corrected array is",arr1);

// function psequence(name){
//       let str=""+name;
//       let i=0;
//       let j=str.length-1;
//       while(i<=j){
//             if(str[i]==str[j]){
//                   i++;
//                   j--;
//             }else{
//                   return 0;
//             }
//             return 1;
//       }
// }

// let str="LIL";
// psequence(str);
// console.log("THe fgjf",psequence(str));
