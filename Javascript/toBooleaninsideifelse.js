// let x = 10;
console.log(!x);
let y = undefined;
console.log(!y);
if(y){
      console.log("It is true");
 }else{
       console.log("It is false");
 }

 console.log(null == false);
      /* y -> is boolean->Tonumber->0
      *null ==0*/

console.log(""+{ });
let obj = {x:10,y:20};
console.log("My roll number is",+34);

function customsign(num){
      return (num>0)?1:(num<0)?-1:0;
}

console.log(customsign(-10));
console.log(customsign(10));
console.log(customsign(0));