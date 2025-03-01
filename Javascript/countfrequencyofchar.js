// let str="Niveditha";
// let frequency = {};
// for(i=0;i<=str.length-1;i++){
// } is same as for(const char of str)
// for (const char of str){
//       if(frequency[char]){
//             frequency[char] +=1;
//       }else{
//             frequency[char]=1;
//       }
// }

// console.log(frequency);

//frequency of char in js
let str="Nithin";
let frequency={};
for(const char of str){
      if(frequency[char]){
            frequency[char]+=1;
      }else{
             frequency[char]=1;
      }
}

console.log(frequency);
console.log(1 - "0xa");
console.log(1-"0xb");
