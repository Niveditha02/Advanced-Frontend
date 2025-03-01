//Even or odd
function IsOdd(num){
      if (num%2 != 0){
            return true;
      }
      else{
            return false;
      }
}

// let x = 3;
// let result=IsOdd(x)
// if (result == true){
//       console.log("odd");
// }

for(let x=1;x<=10;x++){
      let result = IsOdd(x);
      if (result == true){
            console.log(x,"odd");
      }
      else{
            console.log(x,"even");
      }
}

console.log("End");

function IsEvenorOdd(y){
      if (y%2 == 0){
            return "Even";
      }
      else{
            return "Odd";
      }
}

let a = 5;
let c = 6;
let d = 8;

console.log(a,IsEvenorOdd(a));
console.log(c,IsEvenorOdd(c));
console.log(d,IsEvenorOdd(d));

console.log("END");

// Prime or not
function  Isprimeornot(num){
      for(i=2;i<=12;i++){
            if(num%i==0){
                  return "Not Prime";
            }
            else{
                  return "Prime";
            }
      }
}

let value=13;
console.log(value,Isprimeornot(value));

console.log("End of the prime");

//Quadratic function
function solve(a,b,c){
      let sqrt = Math.sqrt(b*b - 4*a*c);
      let root1 = (-b + sqrt)/(2*a);
      let root2 = (-b - sqrt)/(2*a);
      return(root1,root2);
}
let x1=2;
let y1=5;
let z1=3;
let result = solve(x1,y1,z1)
      console.log("The value of the quadratic equation is", result);

//string
let string1="abc";
let string2= new String("abc");
console.log(string1==string2);
console.log(string1===string2);
console.log(typeof(string1));
console.log(typeof(string2));

//indeing string
let str = "Niveditha K";
console.log(str[2]);
console.log(str.length);
for(idx=0;idx<=str.length-1;idx++){
      console.log(idx,str[idx]);
}

//palindrome of string
function checkpalindrome(num){
      let str=""+num;
      let i=0;  
      let j= str.length-1;
      while(i<=j){
            if(str[i]==str[j]){
                  i++;
                  j--;
            }
            else{
                  return false;
            }
            return true;
      }
}
let sequence1 = "NitiN";
let palindrome= checkpalindrome(sequence1);
console.log("The given string",sequence1,"is palindrome",checkpalindrome(sequence1));

//check palindrome or not
function checkP(stringvalue){
      let str1 = ""+stringvalue;
      let i1=0;
      let j1=str1.length-1;
      while(i1<=j1){
            if(str1[i1]==str1[j1]){
                  i1++;
                  j1--;
            }
            else{
                  return false;
            }
            return true;
      }
}

let pseuence="NitiN";
let isseq=checkP(pseuence);
console.log("uysdgf",checkP(pseuence));